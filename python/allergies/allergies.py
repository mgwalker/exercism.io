allergen_scores = {
    'eggs': 1,
    'peanuts': 2,
    'shellfish': 4,
    'strawberries': 8,
    'tomatoes': 16,
    'chocolate': 32,
    'pollen': 64,
    'cats': 128
}

class Allergies(object):
    def __init__(self, score):
        self.score = score
        self.lst = [ ];
        for allergen in allergen_scores:
            if self.score & allergen_scores[allergen]:
                self.lst.append(allergen)

    def is_allergic_to(self, allergen):
        if allergen in allergen_scores:
            return bool(self.score & allergen_scores[allergen])
        return False
