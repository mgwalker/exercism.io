def is_anagram(word1, word2):
    if word1 == word2:
        return False
    for c in word1:
        if c in word2:
            pos = word2.index(c)
            word2 = word2[0:pos] + word2[pos+1:]
        else:
            return False
    return len(word2) == 0

def detect_anagrams(word, candidates):
    out = [ ]
    for candidate in candidates:
        if is_anagram(word.lower(), candidate.lower()):
            out.append(candidate)
    return out
