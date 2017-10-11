def ide(*args):
    return (args[0] if len(args) == 1 else args)

def comp(*args):
    if len(args) > 1:
        return lambda x : args[0](comp(*(args[1:]))(x))
    else:
        return lambda x : args[0](x)
    
def f(x):
    return x + 1

def g(x):
    return x ** 2

def h(x):
    return x - 1

c = comp(h,g,g,f)
