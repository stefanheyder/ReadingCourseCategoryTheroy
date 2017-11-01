# source: https://github.com/kennknowles/python-either/blob/master/either.py

class Either(object):
    pass

class Left(Either):
    def __init__(self, v): self.v = v
    def is_left(self): return True
    def is_right(self): return False
    def value(self): return self.v 

class Right(Either):
    def __init__(self, v): self.v = v
    def is_left(self): return False
    def is_right(self): return True
    def value(self): return self.v 
