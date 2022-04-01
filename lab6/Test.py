import json
import requests

url = "http://localhost:3000/db"
r = 1
for i in range(r):
    if i > r-r/4:
        w = requests.get('https://api.fisenko.net/v1/quotes/en/random')
        tempw = w.json()
        payloadw = {
            '_id': i+1,
            'quote': tempw['text'],
            'author': tempw['author']['name']
        }
        # print(payloadw)
        requests.post(url, payloadw)
        print(i)
    elif i > r/2:
        x = requests.get('https://api.quotable.io/random')
        tempx = x.json()
        payloadx = {
            '_id': i+1,
            'quote': tempx['content'],
            'author': tempx['author']
        }
        # print(payloadx)
        requests.post(url, payloadx)
        print(i)
    elif i > r:
        y = requests.get('https://zenquotes.io/api/random')
        tempy = y.json()
        payloady = {
            '_id': i+1,
            'quote': tempy[0]['q'],
            'author': tempy[0]['a']
        }
        # print(payloady)
        requests.post(url, payloady) 
        print(i)
    else:
        z = requests.get('http://quotes.stormconsultancy.co.uk/random.json')
        tempz = z.json()
        payloadz = {
            '_id': i+400,
            'quote': tempz['quote'],
            'author': tempz['author']
        }
        # print(payloadz)
        requests.post(url, payloadz)
        print(i)

print('success')
  

 