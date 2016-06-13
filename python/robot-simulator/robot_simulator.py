NORTH = 0
EAST = 1
SOUTH = 2
WEST = 3

moves = [ (0, 1), (1, 0), (0, -1), (-1, 0) ]

class Robot(object):
    def __init__(self, bearing = NORTH, x = 0, y = 0):
        self.coordinates = (x, y)
        self.bearing = bearing

    def turn_right(self):
        self.bearing = (self.bearing + 1) % 4

    def turn_left(self):
        self.bearing = (self.bearing - 1) % 4

    def advance(self):
        move = moves[self.bearing]
        self.coordinates = (self.coordinates[0] + move[0], self.coordinates[1] + move[1])

    def simulate(self, path):
        for step in path.upper():
            if step == 'R':
                self.turn_right()
            elif step == 'L':
                self.turn_left()
            elif step == 'A':
                self.advance()
