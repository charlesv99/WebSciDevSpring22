import json
import requests

url = "http://localhost:3000/db/"

data = {}
clean = []
final = []
x= str(requests.get(url).text)
y=json.loads(x)

# for times in data:
#     if data[times]['num'] == 1:
#         clean.append(times)
# [data.pop(key) for key in clean]
# print(json.dumps(data, indent=4))


for quote in y:
    f = quote['author']
    if f not in data:
        data[f]={
            'author':f,
            'num':1
        }
    else:
        data[f]['num']+=1
for times in data:
    if data[times]['num'] == 1:
        clean.append(times)
[data.pop(key) for key in clean]
for value in data:
    final.append(data[value])
print(json.dumps(final, indent=4))







# for quote in y:
#     f = quote['author']
#     if f not in data:
#         data[f]=1
#     else:
#         data[f]+=1
# for times in data:
#     if data[times] == 1:
#         clean.append(times)
# [data.pop(key) for key in clean]
# print(json.dumps(data, indent=4))

