'''
Team PokeMongo -- Ahnaf Kazi, Emily Lee
SoftDev2 pd7
K#7 --  Import/Export Bank
2019-03-04
'''

'''
Pokemon json: stored as a dictionary with 4 keys - count, next, previous, and results
    - only used results for this collection which had an array of dictionaries of the pokemon
    - count was the number of pokemon, and next and previous were both null, so only results had relevent information
    - the keys for each pokemon were name and url, so we only made a name fxn

url:
https://pokeapi.co/api/v2/pokemon?offset=0&limit=964&fbclid=IwAR0ji9gCAUaAThv4Ogt4bmhLI_lHCHhKUhZJAe74nXjpQktv4PJwlBC65wg

import:
We read the json data using json.load(<json_file>) and because we're only using results
in the collection and results's value is an array, but we want what's in the array,
we used data["results"][0] - there is only one item in the array.
We used insert_one to put that data into the collection within the db.
'''

import json
import pymongo

SERVER_ADDR = "157.230.218.44"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection["PokeMongo"]
collection = db["pokemon"]

#json_file=open("pokemon.json","r")
#data=json_file.read()

#gets information from the json
with open('pokemon.json') as f:
    data = json.load(f)

#only inserts the pokemon data into the collection
collection.insert_one(data["results"][0])

#given the name of the pokemon (lowercase), returns the information on that pokemon
#basically just gives url and name from the db
def name(name):
    return list(collection.find({'name': name}))

#test
#print (name("bulbasaur"))
