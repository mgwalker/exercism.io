import string;

transcription = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
}

def to_rna(strand):
    return string.join([ transcription[nuc] for nuc in strand ], '')
