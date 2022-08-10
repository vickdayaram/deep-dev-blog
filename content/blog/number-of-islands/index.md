---
title: LeetCode 200. Number of Islands
date: "2022-05-15"
published: false
description: "Number of Islands"
---

Solving LeetCode 200, Number of Islands. [Click here](https://leetcode.com/problems/number-of-islands/) and try it out your self!

### LeetCode Problem Statement

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

```
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

Example 2:
```
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```

### Initial Thoughts 
We'll be searching for Islands, and counting them. What's the best way to search for them?

### Breaking it down
Let's start by looking at the first example:

```
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

By looking at this visually we can see that all the islands are connected, and so the output is 1. From this observation we can start building our approach by answering some questions. 

1. How could we determine that all the islands are connected with an algorithm? 
We'll have to search the grid. 
2. How can we search the grid? 
Breath First Search(BFS) or Depth First Search(DFS). 
3. Which one should we choose? BFS or DFS?
We need to search for all the connected islands. Both algorithms will have to search all of the cells in the worst case. The worst case would be one the entire grid filled with 1s, one big island. 

The time complexity would be O(C), where C is M * N, the number of cells in the grid, with both algorithms in the worst case. 

What about the space complexity?
The space complexity would be O(C) for DFS. This would be required for the stack in the worst case. 

What about BFS? 
BFS would build up a queue as it iterated through. How big could the queue get in the worst case scenario? Lets take a look at an example.



#### BFS

#### DFS


### The Algorithm Plan


### Code

```javascript

```

### Summary



