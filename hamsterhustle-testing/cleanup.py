# environment.py
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import certifi

def cleanup_database():
    print("Connecting to MongoDB...")
    uri = "mongodb://127.0.0.1:27017/hamsterhustle"

    client = MongoClient(uri, server_api=ServerApi('1'), tlsCAFile=certifi.where())
    
    db = client['test']

    users_collection = db['users']

    users_collection.delete_one({"email": "ben@gmail.com"})
    
    # Close the connection
    client.close()
    
