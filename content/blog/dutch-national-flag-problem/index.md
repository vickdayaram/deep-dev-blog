---
title: LeetCode 75. Sort Colors
date: "2022-01-16"
description: "Sort Colors, or Dutch National Flag Problem"
---

Solving LeetCode 75. Sort Colors with a two pointer approach. [Click here](https://leetcode.com/problems/sort-colors/) and try it out your self!

This problem is also known ad the Dutch National Flag problem because the Dutch national flag has three colors.

### LeetCode Problem Statement

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Input: nums = [2,0,1]
Output: [0,1,2]
```

This problem is simple enough. But can we solve it in O(n) time without any extra space?! 

Take a breath to think about it...

![](yawning-cat.jpg)

> AAAAHHHH.... Yes! But how? Two pointer approach to the rescue
 
### The Algorithm Plan

The intentions of the machine we will create....

Execution

* Create three global variables for positions
  * idx, iterator, current value
  * low, last lowest index, for 0s
  * high, last highest index, for 2s
* Iterate number by number until we reach the current high value
  * Implement this with a while loop, while idx <= high
  * It's important to use ```high``` here because the value will change. We need the loop to terminate early for things to work as expected.
* Run checks
  * If the num === 0
    * swap values with left pointer
    * increment the left pointer 
    * increment idx
  * If the num === 2
    * swap values with the right pointer
    * decrement the right pointer
  * If the num === 1
    * increment the idx, this value is in the right place
* return the array

> Planning is a crucial part of solving problems. Take the time to plan 
> and set your self up for a easy execution.


Lets code it up!

### Code

```javascript

const swap = (values, iOne, iTwo) => {
    const temp = values[iOne];
    values[iOne] = values[iTwo];
    values[iTwo] = temp;
}

const sortColors = (nums) => {
    
    let idx = 0;
    let low = 0;
    let high = nums.length - 1;

    while (idx <= high) {
        let val = nums[idx];
        if (val === 0) {
            swap(nums, low, idx);
            low++;
            idx++;
        } else if (val === 2) {
            swap(nums, high, idx);
            high--;
        } else {
            idx++;
        }
    }
    return nums;
};

```

### Summary

This algorithm runs in O(n) time with O(1) space. Very nice. Satisfying
these constraints is the hardest part of this problem. Using the two pointer approach
works quite nicely. I have used two pointers before but using them in this 
fashion was new to me. This is a great one to visualize in your mind a bit as far
as how it's actually working.

When writing the plan section I didn't think about the helper function for the swapping. 
The helper function dawned on me as I was coding up the solution. I think shaping 
your algorithm a bit as you go is ok. Figuring out how to structure it while you
are coding up though.... I'm sure it can be done, but it's not the best approach. 

> Take the time to plan. A Wizard in the future will thank you.









