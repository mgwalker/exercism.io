def sieve(n):
    marked = [False] * (n + 3)
    out = [ ]
    for num in range(2, n + 1):
        if not marked[num]:
            out.append(num)
            multiplier = 2
            while num * multiplier <= n:
                marked[num * multiplier] = True
                multiplier += 1
    return out
