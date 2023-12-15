const fitnessPrograms = [
  {
    name: "Intro: Losing Weight",
    fitnessLevel: "Novice",
    goals: ["Lose Weight"],
    steps: [
      {
        title: "Weeks 1-4: Establishing a Routine",
        description: `
          Cardiovascular Exercise (3-4 times per week):
          - Start with brisk walking for 20-30 minutes.
          - Gradually increase the duration or intensity each week. Aim for a mix of steady-state and interval training (e.g., alternate between 1 minute of fast walking and 2 minutes of moderate-paced walking).
          
          Strength Training (2-3 times per week):
          - Focus on compound exercises that engage multiple muscle groups. Begin with bodyweight exercises or light weights.
          - Examples: bodyweight squats, lunges, push-ups, assisted pull-ups, and dumbbell exercises (start with light weights).
          
          Flexibility (Daily):
          - Include static stretches for major muscle groups after each workout. Hold each stretch for 15-30 seconds.
        `,
      },
      {
        title: "Weeks 5-8: Increasing Intensity",
        description: `
          Cardiovascular Exercise (4-5 times per week):
          
          -  Incorporate activities like jogging, cycling, or swimming. Aim for 30-45 minutes per session.
          -  Continue to mix in interval training for variety and increased calorie burn.
          
          Strength Training (3 times per week):
          
          -  Gradually increase the weight/resistance for strength exercises.
          -  Add one or two new exercises to your routine.
          
          Flexibility (Daily):
          
          -  Add dynamic stretches before workouts and continue with static stretches afterward.
        `,
      },
      {
        title: "Weeks 9-12: Progression and Consistency",
        description: `
          Cardiovascular Exercise (5 times per week):
          
          -  Increase the duration or intensity of your cardio workouts. Aim for 45-60 minutes per session.
          -  Include a variety of activities to keep things interesting.
          
          Strength Training (3 times per week):
          
          -  Progress by increasing weight and trying more challenging exercises.
          -  Ensure proper form and consider seeking guidance from a fitness professional if needed.
          
          Flexibility (Daily):
          
          -  Focus on improving flexibility in areas that feel tight or restricted.
        `,
      },
      // Add more steps
    ],
    nutritionTips: `
      Nutrition Tips:
      - Maintain a calorie deficit for weight loss. This involves burning more calories than you consume.
      - Consume a balanced diet with an emphasis on whole foods, including lean proteins, fruits, vegetables, and whole grains.
      - Stay hydrated, and limit processed foods, sugary drinks, and excessive snacking.
      
      Remember to listen to your body, and if you experience pain or discomfort, consult with a fitness professional or healthcare provider. Consistency is key, and gradual progression helps prevent injuries. Adjust the program based on your individual progress and preferences.
    `,
  },
  {
    name: "Intermediate: Losing Weight",
    fitnessLevel: "Intermediate",
    goals: ["Lose Weight"],
    steps: [
      {
        title: "Weeks 1-4: Establishing a Routine",
        description: `
                Cardiovascular Exercise (4-5 times per week):
                - Begin with a combination of brisk walking and jogging for 30-40 minutes.
                - Incorporate interval training: alternate between 2 minutes of moderate jogging and 1 minute of sprinting.
                
                Strength Training (3 times per week):
                - Introduce more advanced compound exercises with moderate weights.
                - Examples: squats, lunges, bench press, rows, and overhead presses.
                
                Flexibility (Daily):
                - Perform dynamic stretches before workouts and static stretches post-workout. Hold each stretch for 20-45 seconds.
            `,
      },
      {
        title: "Weeks 5-8: Increasing Intensity",
        description: `
                Cardiovascular Exercise (5-6 times per week):
                - Increase the duration to 45-60 minutes, incorporating high-intensity activities like cycling, swimming, or HIIT workouts.
                - Maintain a balance between steady-state cardio and interval training.
                
                Strength Training (3 times per week):
                - Gradually increase weights and intensity.
                - Add new exercises targeting different muscle groups.
                
                Flexibility (Daily):
                - Emphasize full-body stretching, paying attention to areas of muscle tightness.
            `,
      },
      {
        title: "Weeks 9-12: Progression and Consistency",
        description: `
                Cardiovascular Exercise (6 times per week):
                - Aim for 60-75 minutes per session, incorporating a mix of activities for overall fitness.
                - Challenge yourself with more intense interval training sessions.
                
                Strength Training (4 times per week):
                - Continue progressing with heavier weights and challenging exercises.
                - Ensure proper form and consider periodizing your routine.
                
                Flexibility (Daily):
                - Focus on yoga or Pilates to enhance flexibility and core strength.
            `,
      },
      // Add more steps as needed
    ],
    nutritionTips: `
        Nutrition Tips:
        - Maintain a calorie deficit by balancing energy intake and expenditure.
        - Prioritize lean proteins, whole grains, fruits, and vegetables.
        - Stay hydrated and limit processed foods, sugary drinks, and excessive snacking.
        
        Remember to monitor your progress, adjust your nutrition based on your activity levels, and consult with a healthcare professional or nutritionist if needed. Consistency and gradual adjustments will contribute to sustainable weight loss.
    `,
  },
  {
    name: "Advanced: Weight Loss Transformation",
    fitnessLevel: "High",
    goals: ["Lose Weight"],
    steps: [
      {
        title: "Weeks 1-4: Intensive Foundation",
        description: `
                Cardiovascular Exercise (5-6 times per week):
                - Start with a combination of high-intensity interval training (HIIT) and steady-state cardio for 45-60 minutes per session.
                - Incorporate activities like running, cycling, and rowing.
                
                Strength Training (4 times per week):
                - Focus on heavy compound exercises with challenging weights.
                - Include variations of squats, deadlifts, bench press, and advanced bodyweight exercises.
                
                Flexibility and Mobility (Daily):
                - Implement dynamic warm-up routines and thorough cool-down sessions.
                - Include yoga or mobility drills to enhance flexibility.
            `,
      },
      {
        title: "Weeks 5-8: Progressive Intensity",
        description: `
                Cardiovascular Exercise (6-7 times per week):
                - Increase the intensity and duration, incorporating advanced HIIT protocols.
                - Explore different cardio modalities to challenge your body.
                
                Strength Training (5 times per week):
                - Continuously increase weights and focus on muscle hypertrophy.
                - Introduce advanced techniques like drop sets and supersets.
                
                Flexibility and Mobility (Daily):
                - Dedicate additional time to mobility work, addressing specific muscle groups and joint ranges.
            `,
      },
      {
        title: "Weeks 9-12: Peak Performance",
        description: `
                Cardiovascular Exercise (7 times per week):
                - Implement specialized cardio routines, such as Tabata or metabolic conditioning.
                - Maintain a mix of high-intensity and moderate-intensity sessions.
                
                Strength Training (5-6 times per week):
                - Fine-tune your program with periodization to optimize strength and endurance.
                - Introduce advanced training techniques like pyramids and rest-pause sets.
                
                Flexibility and Mobility (Daily):
                - Include dedicated sessions for yoga, Pilates, or mobility drills to enhance recovery.
            `,
      },
      // Add more steps as needed
    ],
    nutritionTips: `
        Nutrition Tips:
        - Carefully manage macronutrient intake, emphasizing protein for muscle preservation.
        - Incorporate nutrient-dense foods and consider supplements to support high-intensity training.
        - Stay hydrated and monitor energy expenditure to adjust calorie intake accordingly.
        
        It's crucial to listen to your body and seek professional guidance if needed. Regular assessments and adjustments to both training and nutrition will optimize results and overall well-being.
    `,
  },
  {
    name: "Getting Started: Muscle Building for Beginners",
    fitnessLevel: "Novice",
    goals: ["Build Muscle"],
    steps: [
      {
        title: "Weeks 1-4: Foundation Building",
        description: `
                Full-Body Strength Training (3 times per week):
                - Begin with basic compound exercises using light to moderate weights.
                - Focus on mastering form for exercises like squats, deadlifts, bench press, and rows.
                
                Cardiovascular Exercise (2-3 times per week):
                - Start with 20-30 minutes of moderate-intensity cardio to improve overall fitness.
                
                Flexibility and Mobility (Daily):
                - Incorporate dynamic stretches before workouts and static stretches afterward.
                - Explore basic yoga poses to enhance flexibility.
            `,
      },
      {
        title: "Weeks 5-8: Progressive Resistance",
        description: `
                Full-Body Strength Training (3-4 times per week):
                - Gradually increase weights while maintaining good form.
                - Add one or two isolation exercises per muscle group to target specific areas.
                
                Cardiovascular Exercise (2-3 times per week):
                - Extend cardio sessions to 30-40 minutes, incorporating activities like brisk walking or cycling.
                
                Flexibility and Mobility (Daily):
                - Increase the duration of stretching sessions and explore foam rolling for muscle recovery.
            `,
      },
      {
        title: "Weeks 9-12: Intensification and Specialization",
        description: `
                Split Training (4 times per week):
                - Divide your workouts to focus on specific muscle groups each day.
                - Include compound and isolation exercises with moderate to heavy weights.
                
                Cardiovascular Exercise (2-3 times per week):
                - Maintain cardio for overall health but prioritize resistance training.
                
                Flexibility and Mobility (Daily):
                - Implement targeted stretches for areas that feel tight or restricted.
                - Consider a beginner-friendly yoga class for added flexibility benefits.
            `,
      },
      // Add more steps as needed
    ],
    nutritionTips: `
        Nutrition Tips:
        - Consume a slight calorie surplus to support muscle growth.
        - Prioritize protein-rich foods to support muscle repair and development.
        - Include carbohydrates for energy and healthy fats for overall well-being.
        
        Remember, consistency is key, and gradual progression will lead to sustainable muscle gains. Listen to your body and adjust the program based on your individual progress and preferences.
    `,
  },
  {
    name: "Intermediate Muscle Building Program",
    fitnessLevel: "Intermediate",
    goals: ["Build Muscle"],
    steps: [
      {
        title: "Weeks 1-4: Progressive Foundation",
        description: `
                Split Training (4 times per week):
                - Divide workouts to target specific muscle groups each day.
                - Include compound exercises with moderate to heavy weights.
                
                Cardiovascular Exercise (2-3 times per week):
                - Incorporate 20-30 minutes of high-intensity interval training (HIIT) for cardiovascular health.
                
                Flexibility and Mobility (Daily):
                - Perform dynamic stretches before workouts and static stretches afterward.
                - Consider incorporating yoga or Pilates for improved flexibility and core strength.
            `,
      },
      {
        title: "Weeks 5-8: Strength and Hypertrophy Focus",
        description: `
                Split Training (5 times per week):
                - Increase training frequency to focus on muscle groups with varying intensity.
                - Incorporate both strength-focused (lower rep, higher weight) and hypertrophy-focused (moderate rep, moderate weight) workouts.
                
                Cardiovascular Exercise (2-3 times per week):
                - Extend HIIT sessions to 30-40 minutes for enhanced cardiovascular conditioning.
                
                Flexibility and Mobility (Daily):
                - Introduce foam rolling and additional mobility exercises for recovery and flexibility.
            `,
      },
      {
        title: "Weeks 9-12: Progressive Overload and Specialization",
        description: `
                Split Training with Progressive Overload (5-6 times per week):
                - Implement progressive overload by increasing weights and intensity.
                - Add specialization days to focus on lagging muscle groups.
                
                Cardiovascular Exercise (2-3 times per week):
                - Maintain cardiovascular health with a mix of HIIT and steady-state cardio.
                
                Flexibility and Mobility (Daily):
                - Incorporate targeted stretches for specific muscle groups and joint mobility exercises.
            `,
      },
      // Add more steps as needed
    ],
    nutritionTips: `
        Nutrition Tips:
        - Consume a slight calorie surplus to support muscle growth, adjusting as needed.
        - Prioritize protein intake for muscle repair and development.
        - Include carbohydrates for energy and healthy fats for overall well-being.
        
        Regularly assess your progress, adjust your nutrition and training plan accordingly, and prioritize recovery for optimal muscle development. Consult with a fitness professional for guidance if needed.
    `,
  },
  {
    name: "Advanced Muscle Hypertrophy Program",
    fitnessLevel: "High",
    goals: ["Build Muscle"],
    steps: [
      {
        title: "Weeks 1-4: Intensive Foundation",
        description: `
                Split Training with Emphasis on Compound Lifts (5 times per week):
                - Prioritize compound movements such as squats, deadlifts, bench press, and overhead press.
                - Train with heavy weights and lower rep ranges for strength development.
                
                Hypertrophy-focused Isolation Exercises (2 times per week):
                - Introduce targeted isolation exercises to address specific muscle groups.
                - Maintain a controlled pace and focus on muscle contraction.
                
                Cardiovascular Exercise (2-3 times per week):
                - Implement short, intense cardio sessions to support overall cardiovascular health.
                
                Flexibility and Mobility (Daily):
                - Incorporate dynamic warm-ups, static stretches, and foam rolling for enhanced flexibility and recovery.
            `,
      },
      {
        title: "Weeks 5-8: Progressive Overload and Volume",
        description: `
                Progressive Overload in Compound Movements (5-6 times per week):
                - Continue to increase weights and intensity in compound lifts.
                - Introduce variations and advanced techniques for continuous progression.
                
                Hypertrophy-focused Isolation Exercises (3 times per week):
                - Increase volume and intensity in isolation exercises, focusing on mind-muscle connection.
                
                Cardiovascular Exercise (2-3 times per week):
                - Include longer, moderate-intensity cardio sessions for overall cardiovascular health.
                
                Flexibility and Mobility (Daily):
                - Incorporate yoga or mobility drills to maintain flexibility and joint health.
            `,
      },
      {
        title: "Weeks 9-12: Advanced Periodization",
        description: `
                Advanced Split Training with Periodization (6 times per week):
                - Implement periodization to optimize training volume, intensity, and recovery.
                - Rotate between strength, hypertrophy, and power-focused workouts.
                
                Targeted Hypertrophy-focused Isolation Exercises (3 times per week):
                - Tailor isolation exercises to address specific muscle weaknesses or imbalances.
                
                Cardiovascular Exercise (2-3 times per week):
                - Include a mix of high-intensity and steady-state cardio for cardiovascular health and fat metabolism.
                
                Flexibility and Mobility (Daily):
                - Dedicate time to targeted stretching and mobility work, considering individual needs.
            `,
      },
      // Add more steps as needed
    ],
    nutritionTips: `
        Nutrition Tips:
        - Maintain a calculated calorie surplus to support muscle growth.
        - Prioritize protein intake with a focus on quality protein sources.
        - Include carbohydrates for sustained energy and healthy fats for overall well-being.
        
        Monitor your progress, adjust nutrition and training based on individual responses, and consider consulting with a fitness professional or nutritionist for personalized guidance.
    `,
  },
  {
    name: "Starting Out: Endurance Enhancement",
    fitnessLevel: "Novice",
    goals: ["Improve Endurance"],
    steps: [
      {
        title: "Weeks 1-4: Establishing a Cardiovascular Base",
        description: `
                Cardiovascular Exercise (4 times per week):
                - Start with brisk walking or cycling for 20-30 minutes.
                - Gradually increase duration and intensity each week.
                
                Bodyweight Exercises (2 times per week):
                - Include basic bodyweight exercises like squats, lunges, and push-ups.
                
                Flexibility and Mobility (Daily):
                - Incorporate dynamic stretches before cardio sessions and static stretches afterward.
                - Consider incorporating beginner-friendly yoga or Pilates for improved flexibility.
            `,
      },
      {
        title: "Weeks 5-8: Building Endurance Foundation",
        description: `
                Cardiovascular Exercise (5 times per week):
                - Increase duration to 40-60 minutes per session.
                - Include a mix of steady-state cardio and interval training.
                
                Bodyweight and Light Resistance Training (3 times per week):
                - Introduce light resistance exercises with a focus on high repetitions.
                
                Flexibility and Mobility (Daily):
                - Explore foam rolling and additional stretches to enhance flexibility and reduce muscle tightness.
            `,
      },
      {
        title: "Weeks 9-12: Progressive Endurance Training",
        description: `
                Cardiovascular Exercise (5-6 times per week):
                - Extend cardio sessions to 60-75 minutes, incorporating various activities.
                - Focus on continuous improvement in endurance and stamina.
                
                Bodyweight and Resistance Training (3 times per week):
                - Progress to more challenging bodyweight exercises and light resistance training.
                
                Flexibility and Mobility (Daily):
                - Dedicate time to full-body stretching and mobility exercises for overall flexibility and joint health.
            `,
      },
      // Add more steps as needed
    ],
    nutritionTips: `
        Nutrition Tips:
        - Consume a balanced diet with an emphasis on complex carbohydrates for sustained energy.
        - Stay well-hydrated, especially before and after cardio sessions.
        - Include a moderate amount of protein and healthy fats in your meals.
        
        Consistency is key, and gradual progression is essential. Monitor your endurance improvements, listen to your body, and make adjustments as needed. Consider consulting with a fitness professional for personalized guidance.
    `,
  },
  {
    name: "Intermediate Endurance Enhancement Program",
    fitnessLevel: "Intermediate",
    goals: ["Improve Endurance"],
    steps: [
      {
        title: "Weeks 1-4: Building Cardiovascular Fitness",
        description: `
                Cardiovascular Exercise (4-5 times per week):
                - Start with a mix of moderate-intensity and high-intensity interval training (HIIT) sessions.
                - Incorporate activities like running, cycling, or rowing for 30-45 minutes.
                
                Strength and Endurance Training (2-3 times per week):
                - Include full-body strength training with moderate weights and higher repetitions.
                
                Flexibility and Mobility (Daily):
                - Prioritize dynamic stretches before cardio and static stretches afterward.
                - Consider incorporating yoga or Pilates for improved flexibility and balance.
            `,
      },
      {
        title: "Weeks 5-8: Intensifying Endurance Workouts",
        description: `
                Cardiovascular Exercise (5-6 times per week):
                - Increase duration to 45-60 minutes, emphasizing both steady-state and interval training.
                - Explore different cardio modalities to challenge your endurance.
                
                Strength and Endurance Training (3 times per week):
                - Incorporate circuit training with shorter rest periods to enhance cardiovascular fitness.
                
                Flexibility and Mobility (Daily):
                - Include foam rolling and additional mobility exercises to address muscle tightness.
            `,
      },
      {
        title: "Weeks 9-12: Advanced Endurance Conditioning",
        description: `
                Cardiovascular Exercise (6 times per week):
                - Aim for 60-75 minutes per session, incorporating advanced interval training techniques.
                - Include activities like swimming, cycling, and running for variety.
                
                Strength and Endurance Training (3-4 times per week):
                - Introduce advanced strength and conditioning exercises to enhance overall endurance.
                
                Flexibility and Mobility (Daily):
                - Dedicate time to comprehensive stretching routines, emphasizing full-body flexibility.
            `,
      },
      // Add more steps as needed
    ],
    nutritionTips: `
        Nutrition Tips:
        - Consume a well-balanced diet with a focus on complex carbohydrates for sustained energy.
        - Adequate protein intake is essential for muscle recovery and endurance.
        - Stay hydrated and consider electrolyte replenishment, especially during longer training sessions.
        
        Regularly assess your endurance progress, adjust nutrition based on training intensity, and prioritize recovery for optimal performance. Consult with a fitness professional for personalized guidance.
    `,
  },
  {
    name: "Advanced Endurance Conditioning Program",
    fitnessLevel: "High",
    goals: ["Improve Endurance"],
    steps: [
      {
        title: "Weeks 1-4: Establishing a High-Intensity Base",
        description: `
                Cardiovascular Exercise (5-6 times per week):
                - Begin with high-intensity interval training (HIIT) incorporating activities like sprints, cycling, or rowing.
                - Gradually increase session duration to 45-60 minutes.
                
                Advanced Strength and Endurance Training (4 times per week):
                - Integrate high-repetition, lower-weight strength training to enhance muscular endurance.
                
                Flexibility and Mobility (Daily):
                - Implement dynamic warm-ups and thorough cool-downs with emphasis on joint mobility.
                - Include yoga sessions for improved flexibility and recovery.
            `,
      },
      {
        title: "Weeks 5-8: Progressive Endurance Conditioning",
        description: `
                Cardiovascular Exercise (6-7 times per week):
                - Extend HIIT sessions and include longer, steady-state cardio for overall endurance.
                - Explore activities like trail running, swimming, or cycling for variety.
                
                Advanced Strength and Endurance Training (5 times per week):
                - Introduce complex, multi-joint movements with an emphasis on endurance.
                - Incorporate circuit-style workouts with minimal rest between exercises.
                
                Flexibility and Mobility (Daily):
                - Dedicate time to targeted stretching and mobility work, focusing on specific muscle groups.
            `,
      },
      {
        title: "Weeks 9-12: Endurance Mastery",
        description: `
                Cardiovascular Exercise (7 times per week):
                - Implement specialized endurance workouts, combining both HIIT and long-duration sessions.
                - Consider participating in organized endurance events (e.g., long-distance running, cycling).
                
                Advanced Strength and Endurance Training (5-6 times per week):
                - Fine-tune your program with periodization to optimize both strength and endurance.
                
                Flexibility and Mobility (Daily):
                - Include yoga or Pilates for enhanced flexibility and joint mobility.
                - Prioritize recovery strategies such as foam rolling and massage.
            `,
      },
      // Add more steps as needed
    ],
    nutritionTips: `
        Nutrition Tips:
        - Consume a well-balanced diet with a mix of carbohydrates, proteins, and healthy fats.
        - Ensure sufficient caloric intake to support high-intensity training.
        - Hydrate adequately, especially during prolonged endurance workouts.
        
        Continuous monitoring, individual adjustments, and regular assessments are crucial for optimizing endurance gains. Consult with a fitness professional or nutritionist for personalized guidance.
    `,
  },
];

module.exports = fitnessPrograms;
