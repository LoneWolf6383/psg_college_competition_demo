from pymongo import MongoClient
from random import *
cluster = MongoClient('mongodb://127.0.0.1:27017/')
db=cluster['PSG_iHackFest']
collections=db['userInfo']
fullNames=[]
rollNos=[]
userNames=[]
passwords=[]
emails=[]
locations=[]
for user in range(1,11):
    name='user'+str(user)
    userNames.append(name)
    email='user'+str(user)+'@gmail.com'
    passwords.append(name)
    emails.append(email)
    location=[randint(1,10),randint(1,10)]
    locations.append(location)
userData=[]
for x,y,z,a in zip(userNames,passwords,emails,locations):
    collections.insert_one({'username':x,'password':y,'email':z,'location':a,'isAdmin':False})