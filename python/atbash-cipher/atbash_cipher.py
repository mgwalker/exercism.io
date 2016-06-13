import re

table = str.maketrans('abcdefghijklmnopqrstuvwxyz', 'zyxwvutsrqponmlkjihgfedcba')

def encode(s):
    translation = re.sub('[\s,.!?]', '', s).lower().translate(table) # s.replace(' ','').lower().translate(table)
    last = 5
    out = ''
    while last < len(translation):
        out += translation[last - 5:last] + ' '
        last += 5
    out += translation[last - 5:]
    return out

def decode(s):
    return re.sub('\s', '', s).translate(table)
