const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const session = require("express-session");
const path = require("path");
const app = express();
const port = 3000;

const fitnessPrograms = require("./fitnessPrograms");

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/hamsterhustle", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create User Schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  gender: String,
  age: Number,
  fitnessLevel: String,
  fitnessGoals: [String],
});

const User = mongoose.model("User", userSchema);

// Define a Mongoose schema for progress data
const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to the user
  category: String, // Progress category (e.g., Weight, Max Bench Weight, Max Run Distance, Max Squat)
  value: Number, // Progress value for the category
  date: { type: Date, default: Date.now }, // Date when the progress was recorded
});

// Create a Progress model based on the schema
const ProgressModel = mongoose.model("Progress", progressSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Session middleware
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// Serve static files (e.g., HTML) from a directory (public)
app.use(express.static("public"));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to check if the user is logged in
const requireLogin = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("/");
  }
  next();
};

// Homepage route (accessible to all)
app.get("/", (req, res) => {
  // Check if the user is logged in and has not created a profile
  if (req.session.user && (!req.session.user.gender || !req.session.user.age)) {
    // Serve the HTML file for the profile creation form
    res.render("profile", { user: req.session.user });
  } else {
    res.render("homepage", { user: req.session.user });
  }
});

// Define a route handler for the registration form page
app.get("/register", (req, res) => {
  // Serve the HTML file for the registration form
  res.sendFile(__dirname + "/public/register.html");
});

// Register a new user (POST request handler)
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("Email already registered.");
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const newUser = new User({ email, password: hashedPassword });

    // Save the user document to the database
    await newUser.save();

    // After successful registration, set the user in the session
    req.session.user = {
      _id: newUser._id,
      email: newUser.email,
    };

    // Redirect new users to the homepage to start their profile creation
    res.redirect("/");
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Error registering user");
  }
});

// Define a route handler for the login form page
app.get("/login", (req, res) => {
  // Serve the HTML file for the login form
  res.sendFile(__dirname + "/public/login.html");
});

// Login route (POST request handler)
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send("Invalid email or password.");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).send("Invalid email or password.");
    }

    req.session.user = {
      _id: user._id,
      email: user.email,
      gender: user.gender,
      age: user.age,
      fitnessLevel: user.fitnessLevel,
      fitnessGoals: user.fitnessGoals,
    };

    res.redirect("/");
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Error during login.");
  }
});

// Profile page route
app.get("/profile", requireLogin, (req, res) => {
  if (req.session.user) {
    res.render("profile", { user: req.session.user });
  } else {
    // Redirect to the homepage or another page
    res.redirect("/");
  }
});

// Handle profile form submission
app.post("/profile", requireLogin, async (req, res) => {
  const { gender, age, fitnessLevel, fitnessGoals } = req.body;

  // Update the user's profile information in the session
  if (req.session.user) {
    req.session.user.gender = gender;
    req.session.user.age = age;
    req.session.user.fitnessLevel = fitnessLevel;
    req.session.user.fitnessGoals = fitnessGoals;

    // Update the user document in the database
    await User.findByIdAndUpdate(
      req.session.user._id,
      {
        gender,
        age,
        fitnessLevel,
        fitnessGoals,
      },
      { new: true }
    );

    // Redirect to the profile page
    return res.redirect("/");
  }

  // Handle error cases here
});

// Logout route
app.get("/logout", requireLogin, (req, res) => {
  // Clear the user's session
  req.session.user = null;
  // Redirect to the login page or another appropriate page after logging out
  res.redirect("/");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/progress", requireLogin, async (req, res) => {
  try {
    // Assuming you have logic to determine the user here, you can replace this with your actual user handling code.
    const user = req.session.user; // Replace this with your actual user object

    // Assuming you have a variable for the selected category in the session, update it accordingly.
    const selectedCategory = req.session.selectedCategory || "Weight";

    // Retrieve progress data from your database or storage
    const progressData = await ProgressModel.find({ user: user }); // Assuming you have a ProgressModel

    // Prepare data for rendering
    const chartData = {};
    progressData.forEach((entry) => {
      if (!chartData[entry.category]) {
        chartData[entry.category] = {
          labels: [],
          data: [],
        };
      }
      chartData[entry.category].labels.push(formatDate(entry.date));
      chartData[entry.category].data.push(entry.value);
    });

    console.log("Chart Data:", chartData); // Log the chart data to the console

    // Render the "progress" page with chartData
    res.render("progress", { user, selectedCategory, chartData });
  } catch (error) {
    console.error("Error fetching progress data:", error);
    res.status(500).send("Error fetching progress data");
  }
});

// Add this route to handle the form submission and update the selected category in the session.
app.post("/saveProgress", requireLogin, async (req, res) => {
  // Retrieve the data from the form submission
  const { category, newValue } = req.body;

  try {
    // Create a new progress record using the Mongoose model
    const progressData = new ProgressModel({
      user: req.session.user._id, // Reference to the user (assuming you have a user in the session)
      category,
      value: newValue,
    });

    // Save the data to the database using the save method
    const savedData = await progressData.save();

    console.log("Progress data saved:", savedData);

    // Update the selected category in the session
    req.session.selectedCategory = category;

    // Redirect the user to the progress page or display a confirmation message
    res.redirect("/progress");
  } catch (error) {
    console.error("Error saving progress data:", error);
    // Handle the error and possibly display an error message
  }
});

// Add this function to fetch progress data from the database
function fetchProgressDataFromDatabase() {
  // Replace this with your actual database query logic
  // This function should return the progress data you want to display on the progress-view page
  // Example:
  return ProgressModel.find(); // Replace ProgressModel with your actual Mongoose model
}

function formatDate(dateString) {
  const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", options);
}

// Add this route at the end of your server.js file
app.get("/recommendations", requireLogin, (req, res) => {
  // Check if the user is logged in and has completed the profile
  if (
    req.session.user &&
    req.session.user.age &&
    req.session.user.fitnessLevel &&
    req.session.user.fitnessGoals.length > 0
  ) {
    // Fetch recommendations based on user details (you'll need to implement this logic)
    const recommendations = getFitnessRecommendations(req.session.user);

    res.render("recommendations", { user: req.session.user, recommendations });
  } else {
    // Redirect users who haven't completed the profile to the homepage
    res.redirect("/");
  }
});

function getFitnessRecommendations(user) {
  // Filter fitness programs based on fitness level and goals
  const filteredPrograms = fitnessPrograms.filter((program) => {
    // Check if the program is suitable for the user's fitness level
    const isFitnessLevelMatch = program.fitnessLevel === user.fitnessLevel;

    // Check if the program aligns with at least one of the user's goals
    const isGoalMatch = program.goals.some((goal) =>
      user.fitnessGoals.includes(goal)
    );

    return isFitnessLevelMatch && isGoalMatch;
  });

  return filteredPrograms;
}

app.get("/program/:programName", requireLogin, (req, res) => {
  const programName = req.params.programName.replace(/-/g, " ");
  // Find the program based on the programName
  const program = fitnessPrograms.find(
    (p) => p.name.toLowerCase() === programName.toLowerCase()
  );

  // Assuming you have logic to determine the user here, you can replace this with your actual user handling code.
  const user = req.session.user; // Replace this with your actual user object

  if (program) {
    res.render("program-details", { program, user });
  } else {
    // Handle case when program is not found
    res.status(404).send("Program not found");
  }
});
