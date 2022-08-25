from pymongo import MongoClient
from random import *
cluster = MongoClient('mongodb+srv://Namasivaayam007:6383512055@cluster0.zaxrt3p.mongodb.net/?retryWrites=true&w=majority')
db=cluster['PSG_iHackFest']
collections=db['userInfo']
fullNames=[]
rollNos=[]
userNames=[]
passwords=[]
emails=[]
phNo=[]
for user in range(1,11):
    name='user '+str(user)
    email='user'+str(user)+'@gmail.com'
    fullNames.append(name)
    passwords.append(name)
    num=''
    for x in range(10):
        num+=str(round(random()*10))
    phNo.append(''.join(num))
    emails.append(email)
userData=[]
for x,y,z,a in zip(fullNames,passwords,emails,phNo):
    userData.append({'firstName':x.split()[0],'lastName':x.split()[1],'userName':x,'password':y,'email':z,'phNo':a,'userRole':'customer'})
print(userData)
collections.insert_many(userData)