""" 1st approach
This approach is like using the reduce() method in JS.
The first iteration makes the str to take up value of 'G'
The second iteration makes 'str' to be 'eG'
The thridt iteration makes 'str' to be 'eeG' and so on and so forth.
"""


def reverse(s):
    str = ""
    for i in s:
        str = i + str
    return str


s = "Geeksforgeeks"
print(reverse(s))
