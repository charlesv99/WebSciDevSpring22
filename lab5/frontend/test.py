import json
import requests

url = "http://localhost:3000/db"
payload ={}
for i in list(range(100)):
    x = requests.get('https://api.fisenko.net/v1/quotes/en/random')
    payload = x.json()
    payload['_id'] = i+1
    # print(payload['_id'])
    r = requests.post(url, payload)
    print(i+1)
  

 