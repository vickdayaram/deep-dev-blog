---
title: "LeetCode 424. Longest Repeating Character Replacement"
date: "2022-01-08"
description: "Solving LeetCode 424 with Sliding Window"
---

Solving LeetCode 424. Longest Repeating Character Replacement, with a Sliding Window approach. [Click here](https://leetcode.com/problems/longest-repeating-character-replacement/) to try it out your self!

### LeetCode Problem Statement
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations

Examples:
```
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
```

This was a tough problem for me to wrap my head around. The key for me was getting a better insight into what I was looking for...

### Working backwards, what does our solution look like?
We are looking for the longest substring that contains the same characters after substituting up to K times. 

In other words we are looking for a substring that contains the max alike letters plus K substitutions. So in any given window our answer should work out to be:

```javascript
const solution = maxLetterCountInWindow + k
```

Where solution must be less than the length of the string.

Example 1:

```
Input: s = "ABAB", k = 2
Output: 4

window = {A: 2, B: 2} from index 0 to 3;
maxLetterCount = 2;
k = 2;

solution = maxLetterCount + k
solution = 4
```

In the above example we can either have a window where the maxLetter is A, or B. In either case we can delete the other letter up to K times, which in this case is 2.

Example 2:

```
Input: s = "AABABBA", k = 1
Output: 4

Solution 1
window = {A: 3, B: 1} from index 0 to 3
maxLetterCount = 3
k = 1

solution = maxLetterCount + k
solution = 4

Solution 2
window = {A: 1, B: 3} fro index 2 to 5
maxLetterCount = 3
k = 1

solution = maxLetterCount + k
solution = 4
```

Understanding this insight turned this hard problem into a manageable one. Let's look at the code and see how we can apply this.

### Code
```javascript
const findLengthOfLongestSubStringWithMaxDeletes = (str, k) => {

    let maxLength = -Infinity;
    let maxLetterCount = 0; 
    let frequencyMap = {}; // for the given window
    let windowStart = 0;
    
    for(let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let rightChar = s[windowEnd];
        if (!frequencyMap[rightChar]) {
            frequencyMap[rightChar] = 0;
        }

        // Keep track of the char frequency in the currentWindow
        frequencyMap[rightChar] += 1;

        // Update the maxLetterCount for the window
        maxLetterCount = Math.max(maxLetterCount, frequencyMap[rightChar]); 
        
        // Validate the current window to make sure we satisfy the constraints 
        // If the currentLength - maxLetterCount > k 
        // shrink the window since we don't have substitutions left. 
        const currentLength = windowEnd - windowStart + 1;
        if ((currentLength - maxLetterCount) > k) {
            let leftChar = s[windowStart];
            // Remember to decrement the frequencyMap with the character 
            // that is going out of the window
            frequencyMap[leftChar] -= 1;
            windowStart++;
        }
        
        // Now we have a valid window, so check if we have 
        // found a better answer
        const validLength = windowEnd - windowStart + 1;
        maxLength = Math.max(validLength, maxLength);
    }
    
    return maxLength;
}
```

### Summary
This algorithm runs in O(n) time and O(1) space. Given that we only have 26 letters in the english language, that's a fixed space we would keep in the hashmap which is equivalent to O(1). 

I struggled when solving this problem. Understanding that the length of the substring would equal the maxNumberOfCharacters + k, was the key insight I needed to make a break through. 

Shout out to [educative.io](https://www.educative.io/learn), specifically their course Grokking the coding interview: Pattern for coding questions. Their course has been tremendously helpful in my development when tackling these questions. Highly recommend them if you are looking to sharpen your skills here.

Hope you found this helpful! 




