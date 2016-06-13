import re

def word_count(phrase):
    words = re.sub('[\W_]+', ' ', phrase).lower().strip().split(' ')
    uniq = set(words)
    count = { }
    for word in uniq:
        count[word] = words.count(word)

    return count
