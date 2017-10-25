import math

class Opt:
    def __init__(self, v = None):
        self.valid = (v != None)
        self.value = v

def safe_rezi(x):
    if x == 0:
        return Opt()
    else:
        return Opt(1/x)

def safe_root(x):
    if x < 0:
        return Opt()
    else:
        return Opt(math.sqrt(x))

def compose(f,g):
    def h(x):
        y = g(x)
        if y.valid:
            return f(y.value)
        else:
            return Opt()
    return h

h = compose(safe_root, safe_rezi)
