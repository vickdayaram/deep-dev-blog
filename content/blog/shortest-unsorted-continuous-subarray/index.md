---
title: LeetCode 581. Shortest Unsorted Continuous Subarray
date: "2022-01-23"
description: "Shortest Unsorted Continuous Subarray"
---

Solving LeetCode 581, Shortest Unsorted Continuous Subarray. [Click here](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/) and try it out your self!

### LeetCode Problem Statement
Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.

Examples:

```
Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

Input: nums = [1,2,3,4]
Output: 0

Input: nums = [1]
Output: 0
```

### Initial Thoughts 

This problem tripped me up. Grasping what you need to do is straight forward, but I had to spend some time coming up with a way to do this. What helped me get un-stuck is looking at examples and looking for a pattern. Doing this helps me understand more deeply what I am trying to find.

> Once you know what you need to find, it's easier to formulate a plan to get to a solution. So ask yourself often, "What I'm I looking for?"


What we are looking for
* The minimum number out of order
* The maximum number out of order
* The index to insert the minimum number for it to be in order
* The index to insert the maximum number for it to be in order

> Break down the problem and make it easy

![](camara-pieces.jpg)


### The Algorithm Plan

Keeping in mind the problems we need to solve, lets look at our Algorithm Plan.

* Iterate from left to right and look for the first number out of order
  * Number out of order will be ```arr[i] > arr[i + 1]```
  * If no number is found, return, array is sorted
  * Call this the lowIdx
* Iterate from right to left and look for the first number out of order
  * Number out of order will be ```arr[i] < arr[i - 1]```
  * Call this the highIdx
* Look for the minimum number in the subarray from the above indexes
* Look for the maximum number in the subarray from the above indexes
* Expand the subarray if needed
  * Decrement the lowIdx while the current value at low index is greater than the minNumber you found.
  * Increment the highIdx while the current value at the high index is less than the maxNumber you found.
* Return ```maxIdx - minIdx + 1```. This is the length of the min subArray the needs to be sorted

That's our plan! As you can tell by looking at it, we are just solving our sub problems, one sub problem at a time. 

Lets code it up!

### Code

```javascript

const findUnSortedSubArray = (array) => {

    let low = 0;
    let high = array.length - 1;

    while (low < array.length - 1 && array[low] <= array[low + 1]) {
        low++;
    }

    // Array is sorted
    if (low === array.length - 1) {
        return 0;
    }

    while(high >= 0 && array[high] >= array[high - 1]) {
        high--;
    }

    let arrayMin = Infinity;
    let arrayMax = -Infinity;
    for(let i = low; i <= high; i++) {
        arrayMin = Math.min(arrayMin, array[i]);
        arrayMax = Math.max(arrayMax, array[i]);
    }

    while (low > 0 && array[low - 1] > arrayMin) {
        low--;
    }

    while (high < array.length - 1 && array[high + 1] < arrayMax) {
        high++;
    }

    return high - low + 1;    
}

```

### Summary

This Algorithm runs in O(N) time and O(1) space. Credit to Educative.io for this solution. It's very elegant, and it's a great example of breaking down a problem into sub problems.

The key takeaway from this problem is to break it down and keep it simple. The first part of solving these questions is teasing out that ambiguity. 

Hope that you enjoyed this walk through. 

> So, break it on down, and keep it simple




