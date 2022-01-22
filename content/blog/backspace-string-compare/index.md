---
title: LeetCode 844. Backspace String Compare
date: "2022-01-22"
description: "Backspace String Compare"
---

Solving LeetCode 844, Backspace String Compare. [Click here](https://leetcode.com/problems/backspace-string-compare/) and try it out your self!

### LeetCode Problem Statement

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Examples:

```
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
```

```
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
```

```
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
```

### Initial Thoughts 
Ok, I can use a stack, array, or maybe even build a new string with backspaces applied?!!

But...

> Can you solve it in O(n) time and O(1) space?

Hmmm....

Well.... I mean... I guess... Yea... Hmm...

![](thinking-monkey.jpg)

Spoiler, Yes we can. Lets take a look and see how

### The Algorithm Plan

How can this work? O(n) and O(1) space...

We can use a two pointer approach to achieve this

Overall Execution
* Set up two pointers
  * One for the first string, set to the last character
  * One for the second string, set to the last character
* We will iterate through each character until we reach the first character of each string. Iterate while sIdx >= 0 || tIdx >= 0. This will ensure that we can get to the end of the strings if they are different lengths
  * For each iteration we will look for the next valid character idx
    * Valid character idx will be a an idx that will be part of the final string after backspaces are applied. 
    * We will write a helper function for this functionality since we will need it for both strings.
  * Once we have a valid idx for both strings we will compare them.
    * If they are the same
      * Decrement the pointers
      * Continue to check the next character
    * Else, return false and break. Strings are not equivalent
* If the loop breaks check if sIdx === tIdx. 
  * If they do, the strings are equivalent. 
    * This is a case we will run into if the backspaces wind up creating an empty string for both strings and return -1s. 
    * If one string becomes empty, and not the other, then they are not equivalent.


Valid Character Helper Function
* Args: currentIdx, string
* Set up a backspace count variable equal to 0
* If the current character is not a "#"
  * If backspace count is 0
    * return currentIdx
  * If backspace count is > 0
    * decrement backspace count
* If the current character is a "#"
  * Increment backspace count
* Decrement currentIdx for each iteration
* Return -1 if there are no more characters

> The helper function is what's doing most of the work here. Notice how we are finding the right indexes to compare here in O(1) space.

That's our plan. Lets code it up!

### Code

```javascript

const backspaceCompare = (s, t) => {
    let sIdx = s.length - 1;
    let tIdx = t.length - 1;

    while (sIdx >= 0 || tIdx >= 0) {
        sIdx = getValidIdx(s, sIdx);
        tIdx = getValidIdx(t, tIdx);
        if (s[sIdx] !== t[tIdx]) {
            return false;
        }
        sIdx--;
        tIdx--;
    }

    return sIdx === tIdx;
}

const getValidIdx = (string, idx) => {
    let backspaceCount = 0;
    while(idx >= 0) {
        let char = string[idx];
        if (char !== "#" && backspaceCount === 0) {
            return idx;
        }
        if (char !== "#" && backspaceCount > 0) {
            backspaceCount--;
        }
        if (char === "#") {
            backspaceCount++;
        }
        idx--;
    }
    // At this point we would return -1 if there are no more valid chars
    return idx;
}
```

### Summary

This Algorithm runs in O(n) time and O(1) space. We completed our challenge! The crux here is figuring out how to apply the backspaces without using extra space. When I took on the challenge that's the part that I struggled with the most. The pointer approach works quite beautifully. 

> The aha moment for me was that I don't need to compare the entire strings in one go, I can do it character by character. That insight really helps open up the door to this approach. 

Hope you found this walk through helpful!
