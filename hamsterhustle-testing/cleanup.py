# environment.py
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import certifi

def cleanup_database():
    print("Connecting to MongoDB...")
    uri = "mongodb+srv://hamster:gdHCZHh0K8vnPEko@hamster-cluster.enppiig.mongodb.net/?retryWrites=true&w=majority"

    client = MongoClient(uri, server_api=ServerApi('1'), tlsCAFile=certifi.where())
    
    db = client['test']

    users_collection = db['users']

    users_collection.delete_one({"email": "ben@gmail.com"})
    
    # Close the connection
    client.close()