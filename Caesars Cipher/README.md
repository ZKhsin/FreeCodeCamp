# Caesars Cipher

## Solution

1. Set an empty array and set an regular store A-Z

2. Split string to array and run loop to check every string in array

3. Capital code in 65 to 90, so first need to get start over and addition 13 to get code position(-65+13), then need to keep range in English alphabet(26),use remainder to control range in -25 to 25(%26), at the end to get finally charcode need to plus back 65(A)

4. Push result charcode to array, then change charcode back to string and return
