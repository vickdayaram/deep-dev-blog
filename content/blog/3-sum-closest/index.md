---
title: LeetCode 16. 3Sum Closest
date: "2022-01-15"
description: "3Sum Closest Problem"
---

Solving LeetCode 16. 3Sum Closest, with a two pointer approach. [Click here](https://leetcode.com/problems/3sum-closest/) and try it out your self!

### LeetCode Problem Statement

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Examples: 

```
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Input: nums = [0,0,0], target = 1
Output: 0
```

This problem is interesting. What you are asked to is simple, and is easy to understand. Today we will work on building out a solution that runs in O(n^2) by using a two pointer approach. 

### The Algorithm Plan

The intentions of the machine, and how it will run...

Execution
* Sort the array of numbers up front. Two pointer approach only works with a sorted set of numbers.
* Iterate through each value in the array until array.length - 2. This ensures we always have triplets and don't have to deal with out of bound errors.
* For each iteration
  * Set up a left var equal to i + 1
  * Set up a right var equal to array.length - 1
  * Set up a while loop, while left < right
    * Calculate current sum
    * Run checks
      * If we found a better answer, update ClosestSum
        * Use Math.abs, remember there could be negative numbers
      * If sum is greater than target, decrement right to find a better answer
      * If sum is less than target, increment left to find a better answer

Variables
* ClosestSum: Global Variable to keep track of the best answer. We will return this at the end. Initialize to Infinity
* Left Pointer, Right Pointer, CurrentSum, for each iteration of the loop.
  
These are the steps that we need to execute for the algorithm. 

> Special Note on Planning: Planning is an important step when writing code. The better you plan, the easier it will be to code the solution. So take extra time here, its a wise investment. It may seem slower at first, but it's how you will become a wizard.

Lets code it up!

### Code

```javascript

const threeSumClosest = (nums, target) => {
    
    // Sort the array for two pointer approach
    nums.sort((a, b) => a - b);

    let closestSum = Infinity;

    for(let i = 0; i < nums.length - 2; i++) {

        let val = nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const currentSum = val + nums[left] + nums[right];
            const currentDiff = Math.abs(target - currentSum);
            const closestDiff = Math.abs(target - closestSum);
            
            if (currentDiff < closestDiff) {
                closestSum = currentSum;
            }

            if (target < currentSum) {
                right--;
            } else {
                left++;
            }
        }
    }

    return closestSum;
}

```

### Summary

This Algorithm runs in O(n^2) time. O(n * log(n)) for the sort plus O(n^2) for the iteration, O(n * log(n) + n^2), which is asymptotically equivalent to O(n^2). Space complexity will be O(n) which is required for sorting.

The two pointer approach pattern we used here can be used for a variety of other problems similar to this one. It's a great one to have in your tool belt.

Shout out to [educative.io](https://www.educative.io/learn), specifically their course Grokking the coding interview: Pattern for coding questions. Their course has been tremendously helpful in my development when tackling these questions. Highly recommend them if you are looking to sharpen your skills.

Hope you found this walk through helpful. If you take one thing away from this I hope it's the planning piece. Take the time to plan. It's a habit that will help you as an engineer, and life in general. 






