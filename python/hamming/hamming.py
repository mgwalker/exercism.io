def distance(a, b):
    dist = 0
    for i,c in enumerate(a):
        if c != b[i]:
            dist = dist + 1
    return dist
