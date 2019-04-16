import math
def pythag(n):
    return [[x,y,int((x**2+y**2)**0.5)] for x in range(1,n+1) for y in range(1,n+1) if ((x**2+y**2)**0.5).is_integer()]

print(pythag(19))
