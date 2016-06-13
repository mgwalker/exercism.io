def sieve(n):
    marked = [False] * (n + 3)
    out = [ ]
    for num in range(2, n + 1):
        if not marked[num]:
            out.append(num)
            for i in range(num * 2, n + 1, num):
                marked[i] = True
    return out
