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
        'shopName':'Sweeton',
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
        'shopName':'Gokul & co',
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

dist_shop=[]
dummy=[]
dummy1=[]
array1=[]

def findMinDistance(seller,customer,name):
    '''dist1=(int(seller[0])-int(customer[0]))**2
    dist2=(int(seller[1])-int(customer[1]))**2
    dist=int((dist2-dist1)**0.5)'''
    
    dist1=int(seller[0])-int(customer[0])
    dist2=int(seller[1])-int(customer[1])
    if(dist1<0):
        dist1=dist1*-1
        
    if(dist2<0):
        dist2=dist2*-1
        
    dist=dist1+dist2
    
    dist_shop.append([dist,name])

user_req=input('Enter product Id\n')
user_location=list(input('Enter your location as (x,y)\n').split(','))
for i in shop_details:
    if user_req in i['products']:
        dist = findMinDistance(i['location'],user_location,i['shopName'])

def Sort(array):
    array1.sort(key = lambda x: x[0])
    return array
    
array = dist_shop
array1=Sort(array)

        
for j in dist_shop:
    dummy.append(j[0])
    
print("Available Shops And Distance\n")
for i in array1:
    print(i[1],"           ",i[0])
    
minimum=min(dummy)

for i in dist_shop:
   if (i[0]==minimum):
       print("The Nearest Shop Is\n")
       print(i[1])
    
for j in dummy:
    dummy1.append(j)
  