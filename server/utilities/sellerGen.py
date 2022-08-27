from pymongo import MongoClient
from random import *
cluster = MongoClient('mongodb://127.0.0.1:27017/')
db=cluster['PSG_iHackFest']
collections=db['Seller']
all_products=[
    'C01',
    'C02',
    'C03',
    'C04',
    'C05',
    'C06',
    'C07',
    'C08',
    'C09',
    'C010',
]
seller_ids=[
    'GLA01',
    'GLA02',
    'GLA03',
    'GLA04',
    'GLA05',
    'GLA06',
    'GLA07',
    'GLA08',
    'GLA09',
    'GLA010',
]

for i in range(1,11):
    Location=[randint(1,10),randint(1,10)]
    Products=[
        {
            'productId':all_products[randint(0,9)],
            'quantity':randint(0,50),
            'price':randint(0,10000)
        }
    ]
    SellerId=seller_ids[i-1]
    collections.insert_one({
        'location':Location,'products':Products,'sellerId':SellerId
    })