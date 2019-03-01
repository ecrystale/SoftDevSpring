import pymongo
SERVER_ADDR="157.230.218.44"
connection=pymongo.MongoClient(SERVER_ADDR)
db=connection.test
collection=db.restuarants

collection.find({"address.zipcode":"11201"})
collection.find({"borough":"Queens"})
collection.find({"address.zipcode":"11201", "grades.grade":"A"})
collection.find({"address.zipcode":"11201", "grades.score":{$lte:15}, "grades.score":{$gte:10}})
collection.find({$or:[{"borough":"Queens"},{"address.zipcode":"11201"}], "grades.score":{$lte:10}, "grades.score":{$gte:7}}
