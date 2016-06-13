import string
letters = string.ascii_lowercase

def is_pangram(str):
    str = str.lower()
    for c in letters:
        if c not in str:
            return False
    return True
