# abgode-scattercrow

## Overview

Abgode and Scattercrow are both encoding schemes for translating unicode into subsets of ascii.

Abgode is useful in the sense that no unncecssary extra characters are 
incorporated into the scheme, only lowercase and uppercase letters, a 
single quote, hyphen, forward slash, and numbers zero through nine.  
Abgode has a more complex encoding standard than scattercrow, making it
more difficult to break the encryption.

Scattercrow is more readable and for this can be considered more convenient since it incorporates ampersands to identify the starting point 
of a token and a lowercase letter to indicate its end.  Also, it uses 
less characters than Abgode making is more efficient as well.

## Function Explanations

__UniToAbgode()__
- Certain characters [a-z0-9] pass through unchanged.
- Certain other characters are represented by uppercase letters.
- All other character's unicode points are encoded in hexadecimal, but 
    using uppercase A to P instead of the usual 1 to F. A lowercase cha-
    racter is used to mark the end of the sequence.

__AbgToUnicode()__
- Certain characters [a-z0-9] pass through unchanged.
- Certain uppercase letters are converted to special characters.
- All other characters' A-P code points are decoded back to unicode.
- If none of the conditions are met, the something is wrong!

__UniToScattercrow()__
- Certain characters pass through unchanged.
- White spaces are converted to underscores.
- Single qutes are converted to carrots.
- Double quotes are converted to tildes.
- All other characters' unicode code points are encoded in hexadecimal,
  but using uppercase A to P instead of the usual 1 to F.  An ampersand
  is used to mark the start of a sequence.  A lowercase character is
  used to mark the end of the sequence.

__ScattercrowToUni()__
- Certain characters (including spaces) pass through unchanged.
- Underscores are converted to white spaces
- Carrots are converted to single quotes
- Tildes are converted to double quotes
- If sequence begins with ampersands, it indicates that the characters'
  are in A-P code and will be decoded back to unicode.
- If none of the conditions are met, the something is wrong!
