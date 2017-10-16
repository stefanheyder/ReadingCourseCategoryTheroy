import math
import time

def fac(x):
    y = 1
    for ii in range(x):
        y *= x
    return y

def memoize(f):
    def g(x):
        sx = str(x)
        if not(sx in g.inputs.keys()):
            y = f(x)
            g.inputs.update({sx: y})
            return y
        else:
            return g.inputs[sx]
    g.inputs = {}
    return g

facMem = memoize(fac)

N = 1000
for ii in range(2):
    s = time.time()
    facMem(N)
    print(time.time() - s)
