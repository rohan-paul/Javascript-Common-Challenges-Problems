''' 1-st
 using python's builtin reversed function '''


def reverse_str(s):
    return "".join(reversed(s))


print(reverse_str('rohan'))


""" 2-nd approach
This approach is like using the Array.reduce() method of  in JS.
The first iteration makes the str to take up value of 'G'
The second iteration makes 'str' to be 'eG'
The thrird iteration makes 'str' to be 'eeG' and so on and so forth.
"""


def reverse(s):
    str = ""
    for i in s:
        str = i + str
    return str


s = "Geeksforgeeks"
print(reverse(s))
