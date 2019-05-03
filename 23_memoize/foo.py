'''
Emily Lee
SoftDev2 pd07
K#23 -- Memoize With Closure
2019-05-02  
'''

import random

def make_HTML_heading(f):
    txt = f()
    def inner():
        return '<h1>' + txt + '</h1>'
    return inner

#DECORATOR
#equiv to greet=make_HTML_heading(greet)
@make_HTML_heading
def greet():
    greetings = ['Hello','Welcome','AYO!','Hola','Bonjour','Word up']
    return random.choice(greetings)

#greet_heading=make_HTML_heading(greet)
#print(greet_heading())

print(greet())


#MEMOIZATION
def memoize(f):
    memo={}
    def helper(x):
        #print(memo)
        if x in memo:
            return memo.get(x)
        elif x-1 in memo and x-2 in memo:
            memo[x]=memo.get(x-1)+memo.get(x-2)
            #print(memo)
            return memo.get(x)
        else:
            memo[x] = f(x)
            #print(memo)
            return memo.get(x)
    return helper


@memoize
def fib(n):
    if n==0:
        return 0
    elif n==1:
        return 1
    else:
        return fib(n-1)+fib(n-2)
    
#fibn=memoize(fib)
print(fib(40))
print(fib(37))
print(fib(38))
print(fib(38))
#print(fib(39))
print(fib(39))
#print(fibn(10))
