import pymongo
SERVER_ADDR="157.230.218.44"
connection=pymongo.MongoClient(SERVER_ADDR)
db=connection.test
collection=db.restuarants

def zipcode(zipcode):
    return list(collection.find({"address.zipcode":str(zipcode)}))


def borough(borough):
    return list(collection.find({"borough":borough}))

def zipgrade(zipcode,grade):
    return list(collection.find({"address.zipcode":str(zipcode), "grades.grade":grade}))

def grades(zipcode,grade):
    return list(collection.find({"address.zipcode":str(zipcode), "grades.score":{$lte:str(grade)}}))

def alot(borough,zipcode,grade1,grade2)
collection.find({$or:[{"borough":borough},{"address.zipcode":str(zipcode)}], "grades.score":{$lte:str(grade1)}, "grades.score":{$gte:str(grade2)}}
