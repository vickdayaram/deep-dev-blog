---
title: "Algorithm Patterns: Sliding Window"
date: "2022-01-08"
description: "Sliding Window Overview and examples"
---

Lets review the Sliding Window pattern. We'll review what the pattern looks like, and then we'll do a few questions were we can apply it. If you are using this for practice, try the questions on your own first before diving into the solution. Lets go!

## Sliding Window Overview

This pattern can be applied when we are asked a question around calculating something for a subset of a data structure. Here are a couple of examples:

* Find the subarray with the greatest sum 
* Find the longest substring with unique characters

If you are not familiar with Sliding Window, the solution you may come up with may use a nested loop. Typically when you run nested for loops you are looking at O(n^2) time algorithms. 

So, can we solve these problems with better performance? Spoiler Alert, yes, with the Sliding Window Pattern!

The main idea with this pattern is to iterate through the data structure 
one time. Doing this will typically yield a O(n) time complexity. As you are iterating through, we'll use another data structure to keep track of a subset of items within the main data structure. This auxiliary data structure is... you guessed it, our sliding window! 

For each iteration we can take a look at our sliding window and see if it meets the constraints that we are trying to solve for. If so we can keep track of this subset, if not we can shrink our window and explore the next subset. 

After solving some of these I realized that these problems come in two flavors. Dynamic and Fixed. For Dynamic problems, you will be expanding and shrinking the window as you are iterating. For Fixed problems, you will be moving the window along once it meets a certain constraint, a specific length for example.

The questions below range in difficulty from easy to hard. Lets take a look.

## Questions
### Maximum Sum Subarray of Size K

Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Example: 
```
Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
```

Question Analysis
* We are looking for a subarray, sliding window could work
* Fixed Window problem. The answer must always be an array of size K

Code
```javascript
const findContiguousMaxSum = (arr, k) => {
    
    let maxSum = -Infinity; // Tracking Variable
    let currentSum = 0; // Sliding Window 
    
    let windowStart = 0; 
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        let num = arr[windowEnd];
        currentSum += num;

        // Once we get to length K or greater, we meet the 
        // constraint of the problem and we can start searching
        // for the maxSum.

        const windowLength = windowEnd - windowStart + 1;
        if (windowLength >= k) {
            maxSum = Math.max(maxSum, currentSum);
            
            // To keep our window at the fixed length of K, 
            // we shrink it by subtracting the number from the 
            // left of the window, windowStart, from currentSum

            let leftNum = arr[windowStart];
            currentSum -= leftNum;
            windowStart++;
        }
    }

    return maxSum;
}
```

In this problem the sliding window only needed to be a variable keeping track of the currentSum. The data structure that you choose could vary depending on the problem your working on. The principles of updating it though will always apply. As you iterate, you will either be: 
* Adding to your window, expanding it
* Removing from your window, shrinking it
* Updating your return value as you find the best solution

### Longest Substring with Same Letters after Replacement

[LeetCode](https://leetcode.com/problems/longest-repeating-character-replacement/)

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations

Example:
```
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
```

Question analysis
* We are looking for a substring, sliding window could work
* Dynamic window problem. Window will grow and contract as we find the solution

Code
```javascript
const findLengthOfLongestSubStringWithMaxDeletes = (str, k) => {
    let maxLength = -Infinity;
    let maxLetterCount = 0;
    let frequencyMap = {};
    
    let windowStart = 0;
    for(let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let rightChar = s[windowEnd];
        if (!frequencyMap[rightChar]) {
            frequencyMap[rightChar] = 0;
        }
        frequencyMap[rightChar] += 1;
        maxLetterCount = Math.max(maxLetterCount, frequencyMap[rightChar]);
        
        const currentLength = windowEnd - windowStart + 1;
        if ((currentLength - maxLetterCount) > k) {
            let leftChar = s[windowStart];
            frequencyMap[leftChar] -= 1;
            windowStart++;
        }
        
        const validLength = windowEnd - windowStart + 1;
        maxLength = Math.max(validLength, maxLength);
    }
    
    return maxLength;
}
```




