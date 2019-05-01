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
        if x in memo:
            return memo[x]
        else:
            memo[x] = fib(x)
            return memo[x]
    return helper

def fib(n):
    if n==0:
        return 0
    elif n==1:
        return 1
    else:
        return fib(n-1)*fib(n-2)

fib=memoize(fib)
print(fib(40))
