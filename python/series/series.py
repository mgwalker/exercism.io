import re

def slices(series, length):
    if length < 1 or length > len(series):
        raise ValueError('Length doesn\'t fit')

    out = [ ]
    start = 0
    while start + length <= len(series):
        out.append([int(i) for i in list(series[start:length + start])])
        start += 1

    return out
