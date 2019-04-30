#INC
def inc(x):
	return x + 1
f=inc

print(f(10))
#print(f)
#print(inc)



#SUBSTITUTION
def adder(a , b):
    return a + b

def caller(c):
    print(c(2 , 4))
    print(c(3 , 5))

caller(adder)



#CLOSURE
def outer(x):
    def contains(l):
        return x in l
    return contains

contains_15=outer(15)
print(contains_15([1 , 2 , 3 , 4 , 5]))
print(contains_15([13 , 14 , 15 , 16 , 17]))
print(contains_15(range(1 , 20)))

del outer
#outer(42)

print(contains_15(range(14 , 20)))



def repeat(x):
    def rep(l):
        return x*l
    return rep
r1=repeat("hello")
r2=repeat("goodbye")
print(r1(2))
print(r2(2))
print(repeat("cool")(3))

'''
def outer():
    x="foo"
    def inner():
        x="bar"
    inner()
    return x
print(outer())
'''

def outer():
    x="foo"
    def inner():
        nonlocal x
        x="bar"
    inner()
    return x
print(outer())

def make_counter():
    x=0
    def inner():
        nonlocal x
        x+=1
        print(x)
        return x
    return inner

ctrl=make_counter()
ctrl()
ctrl()
ctrl()
ctrl2=make_counter()
ctrl2()
ctrl2()
ctrl()
