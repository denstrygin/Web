from itertools import product

for i in product('/+-', repeat=9):
    num = 9
    res = ''
    total = 0
    koef = 1
    for j in i:
        if j == '/':
            res += str(num) + ''
        else:
            res += str(num) +  f' {j} '
        num -= 1
    res += '0'
    expression = res.split()
    for j in expression:
        if j == '+':
            koef = 1
        elif j == '-':
            koef = -1
        else:
            total += int(j) * koef
    if total == 200:
        print(''.join(expression) + '=200'))
