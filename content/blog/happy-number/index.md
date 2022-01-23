---
title: LeetCode 202. Happy Number
date: "2022-01-23"
description: "Happy Number"
---

Solving LeetCode 202, Happy Number. [Click here](https://leetcode.com/problems/happy-number/) and try it out your self!

### LeetCode Problem Statement

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Examples:

```
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1


Input: n = 2
Output: false
```

### Initial Thoughts 

Happy Number. I didn't realize numbers could feel emotions...

HA!

![](happy-lama.jpg)

I thought I would have to keep track of my solutions. If a solution was equal to 1, then it would be a happy number. If I saw it before, then it would be a sad number.

This solution would require extra space though.... can we do better?

> Could we solve with with O(1) space?

Indeed we can by using slow and fast pointers. Lets see how!


### The Algorithm Plan

The key insight here is that we are searching for a cycle. Either 
a cycle that gets stuck in a number 1, or a cycle that doesn't. Lets
keep that in mind as we go through this Algorithm plan.

Approach Overview
* Set up two pointers, a slow one and a fast one
  * Slow = number
  * Fast = getNextSum(number)
* While fast != 1 && slow != fast
* Slow pointer will solve the problem for the current number
* Fast pointer will solve the problem for two steps ahead
* When the loops break
  * return fast === 1
    * If this is true, the number is happy, else it's sad

getNextSum implementation
* Accepts number
* Declare sum variable and set to zero
* While number > 0
  * Get the leading digit with modulo operator ```number % 10```
  * Update the sum with the square value ```sum = digit * digit```
  * Remove the leading digit from the number ```number = Math.floor(number/10)```
* Return the sum

That's our plan. Overall this algorithm is fairly easy to implement. Nothing fancy here.

> Once you realize that you are searching for cycles, this solution follows nicely. That's the key insight we need to uncover.

Lets code it up!

### Code

```javascript

const isHappy = (number) => {
    let slow = number;
    let fast = getNextSum(number);
    while(fast !== 1 && slow !== fast) {
        slow = getNextSum(slow);
        fast = getNextSum(getNextSum(fast));
    }
    return fast === 1;
}

const getNextSum = (number) => {
    let sum = 0;
    while(number > 0) {
        let digit = number % 10;
        sum += digit * digit;
        number = Math.floor(number / 10);
    }
    return sum;
}

```

### Summary

This Algorithm runs in O(logN) time and O(1) space. The time complexity here is hard to determine. It requires some real insight into the numbers. 

For a detailed time complexity analysis I'd highly recommend the solution section on leetCode [here](https://leetcode.com/problems/happy-number/solution/). 

Hope the walk through was helpful!


