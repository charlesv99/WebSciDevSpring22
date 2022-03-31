import json
import requests

url = "http://localhost:3000/db"
payload ={
    "id": "6153bbb29e8e5ae3eb23a16b",
    "text": "Each player must accept the cards life deals him or her: but once they are in hand, he or she alone must decide how to play the cards in order to win the game.",
    "author": {
        "id": "6153b7d49e8e5ae3eb22ff2e",
        "name": ""
    }
}
payload["_id"]='6'

r = requests.post(url, json=payload)
print(r) 