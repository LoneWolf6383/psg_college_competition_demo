shop_details=[
    {
        'shopId':1,
        'shopName':'Vasanth & co',
        'products':['p1','p2','p3','p4','p5'],
        'location':[1,20]
    },
    {
        'shopId':2,
        'shopName':'James ',
        'products':['p4','p2','p6','p2','p1'],
        'location':[3,6]
    },
    {
        'shopId':3,
        'shopName':' Sweeton',
        'products':['p3','p4','p6','p2','p8'],
        'location':[51,32]
    },
    {
        'shopId':4,
        'shopName':'Siyon & co',
        'products':['p6','p3','p2','p2','p4'],
        'location':[14,42]
    },
    {
        'shopId':5,
        'shopName':' Gokul & co',
        'products':['p4','p2','p6','p6','p4'],
        'location':[3,5]
    },
    {
        'shopId':6,
        'shopName':'Jegan',
        'products':['p4','p5','p7','p5','p7'],
        'location':[2,5]
    },
    {
        'shopId':7,
        'shopName':'Namachu',
        'products':['p3','p5','p7','p3','p1'],
        'location':[6,9]
    }
]

all_products=[
    'p1',
    'p2',
    'p3',
    'p4',
    'p5',
    'p6',
    'p7',
    'p8',
    'p9',
    'p10',
    'p11',
]

def findMinDistance(seller,customer):
    dist=((int(seller[0])**2-int(customer[0]**2))+(seller[1]**2-customer[1]**2))
    print(dist)

user_req=input('Enter product Id:')
user_location=list(input('Enter your location as (x,y)').split(','))
for i in shop_details:
    if user_req in i['products']:
        dist = findMinDistance(i['location'],user_location)
        print(dist)