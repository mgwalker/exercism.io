import re

def encode(src):
    bits = re.findall(r'((.)\2*)', src)
    out = [ ]

    for bit in bits:
        if len(bit[0]) > 1:
            out.append(str(len(bit[0])))
        out.append(bit[1])

    return ''.join(out)

def decode(src):
    bits = re.findall('(\d*)(\D)', src)
    out = [ ]

    for bit in bits:
        count = 1 if not bit[0] else int(bit[0])
        out.append(bit[1] * count)

    return ''.join(out)
