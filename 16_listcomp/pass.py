# Emily Lee
# SoftDev2 pd07
# K#16 -- Do You Even List?
# 2019-04-11   


nums=[]
for x in range(10):
    nums.append(str(x))

UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
lc_letters="abcdefghijklmnopqrstuvwxyz"
chars='.?!&#,;:-_*'

def passCheck(p):
    check1=[1 for x in p if x in UC_LETTERS]
    check2=[1 for x in p if x in lc_letters]
    check3=[1 for x in p if x in nums]
    if len(check1)>0 and len(check2)>0 and len(check3)>0:
        return True
    else:
        return False

def passStr(p):
    sum=0
    check1=[1 for x in p if x in UC_LETTERS]
    check2=[1 for x in p if x in lc_letters]
    if len(check2)>0 and len(check1)>0:
        sum+=4
    elif len(check2)>0 or len(check1)>0:
        sum+=1
    check3=[1 for x in p if x in nums]
    if len(check3)>0:
        sum+=2
    check4=[1 for x in p if x in chars]
    if len(check4)>0:
        sum+=2
    if sum==8:
        return 10
    else:
        return sum
    

#testing

# print(passCheck("ay")) #false
# print(passCheck("AY")) #false
# print(passCheck("ayY")) #false
# print(passCheck("ay1")) #false
# print(passCheck("aY1")) #true
# print(passCheck("ayaewaeakl2d@")) #false

# print(passStr("ay")) #1
# print(passStr("aY")) #4
# print(passStr("ay1")) #3
# print(passStr("aY1")) #6
# print(passStr("ay2131lke;")) #5
# print(passStr("ay2131lKe")) #6
# print(passStr("ay2131lSSke;")) #10
