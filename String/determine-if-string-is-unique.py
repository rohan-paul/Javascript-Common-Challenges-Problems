def if_no_duplicates(string):
	letters = {}
	for letter in string:
		if letter in letters:
			return False
		letters[letter] = True
	return True

print(if_no_duplicates('Rohan'))
