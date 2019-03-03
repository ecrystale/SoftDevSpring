import pymongo
SERVER_ADDR="157.230.218.44"
connection=pymongo.MongoClient(SERVER_ADDR)
db=connection.test
collection=db.restaurants

def zipcode(zipcode):
    #print("B")
    return list(collection.find({'address.zipcode': str(zipcode)}))

def borough(borough):
    return list(collection.find({"borough":borough}))

def zipgrade(zipcode,grade):
    return list(collection.find({"address.zipcode":str(zipcode), "grades.grade":grade}))

def grades(zipcode,grade):
    return list(collection.find({"address.zipcode":str(zipcode), "grades.score":{'$lte':int(grade)}}))

def alot(borough,zipcode,grade1,grade2):
    return list(collection.find({'$or':[{"borough":borough},{"address.zipcode":str(zipcode)}], "grades.score":{'$lte':int(grade1)}, "grades.score":{'$gte':int(grade2)}}))


#print(zipcode(10282))
#print(borough("Brooklyn"))
#print(zipgrade(10282,"A"))
#print(grades(10282,3))
#print(alot("Brooklyn",10282,2,8))
