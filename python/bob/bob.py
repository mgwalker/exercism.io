import re;

def hey(what):
    what = what.strip()
    if what == '':
        return 'Fine. Be that way!'
    if what == what.upper() and re.match('.*[a-zA-Z]', what) is not None:
        return 'Whoa, chill out!'
    if what[-1] == '?':
        return 'Sure.'
    return 'Whatever.'
