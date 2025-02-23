# Unexpected String Concatenation in JavaScript Addition
This repository demonstrates a common JavaScript bug related to type coercion during addition.  When adding a number and a string, JavaScript implicitly converts the number to a string and performs concatenation instead of numerical addition. This can lead to unexpected results and logic errors in your code.

## Bug Description
The bug occurs due to JavaScript's loose typing and implicit type conversion.  When you attempt to add a number and a string, JavaScript treats it as string concatenation, resulting in the unexpected joining of the number and string.  This behavior can be difficult to debug if not anticipated.

## Solution
The solution is to explicitly convert both operands to numbers before performing the addition.  This ensures that numerical addition is performed as intended.