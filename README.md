# LeetCode Solutions & Practice Log

**Student Name:** Christen Mendis 
**SRN:** R25EF067
**Class & Section:** CSE-B (3rd Semester)  
**Course:** Portfolio Building for Engineering Students — GitHub-Integrated Edition (B25GE0101)  
**Semester:** 3rd Semester, CSE  

*Personal LeetCode practice log — part of B25GE0101 portfolio*

---

## Table of Contents
- [Overview & Methodology](#overview--methodology)
- [Topic Directories](#topic-directories)
- [Curated Problem Set](#curated-problem-set)
- [Local Testing & Verification](#local-testing--verification)
- [Progress Log](./PROGRESS.md)
- [How to Run Tests](#how-to-run-tests)

---

## Overview & Methodology
This repository serves as a version-controlled practice log for algorithmic problem-solving. All solutions are written in **Python 3** and are thoroughly tested locally using custom test suites before being submitted to the LeetCode platform. 

The primary goal is to build a structured approach to problem-solving, focusing on:
1. Understanding core data structures.
2. Optimizing time and space complexity.
3. Writing clean, edge-case resilient code.
4. Documenting approaches for future reference.

---

## Topic Directories

### 1. [Arrays & Strings](./arrays-strings)
Focuses on array manipulation, hash maps, and the two-pointer technique.
- Contains solutions for problem solving without allocating extra space (in-place modifications).

### 2. [Basic Algorithms](./basic-algorithms)
Focuses on fundamental algorithmic patterns.
- Contains implementations of Binary Search ($O(\log n)$) and array partitioning.

### 3. [Stacks](./stacks)
Focuses on Last-In-First-Out (LIFO) data structures.
- Contains state-tracking solutions like bracket validation.

### 4. [Linked Lists](./linked-lists)
Focuses on pointer manipulation across node-based structures.
- Contains iterative reversal patterns.

---

## Curated Problem Set

| No. | Problem | Topic | Difficulty | Solution | Documentation |
| :---: | :--- | :--- | :---: | :---: | :---: |
| 1 | Two Sum | Arrays & Strings | Easy | [`01-two-sum.py`](./arrays-strings/01-two-sum.py) | [Notes](./arrays-strings/01-two-sum.md) |
| 344 | Reverse String | Arrays & Strings | Easy | [`02-reverse-string.py`](./arrays-strings/02-reverse-string.py) | [Notes](./arrays-strings/02-reverse-string.md) |
| 242 | Valid Anagram | Arrays & Strings | Easy | [`03-valid-anagram.py`](./arrays-strings/03-valid-anagram.py) | [Notes](./arrays-strings/03-valid-anagram.md) |
| 121 | Best Time to Buy/Sell Stock | Arrays & Strings | Easy | [`04-best-time-to-buy-and-sell-stock.py`](./arrays-strings/04-best-time-to-buy-and-sell-stock.py) | [Notes](./arrays-strings/04-best-time-to-buy-and-sell-stock.md) |
| 14 | Longest Common Prefix | Arrays & Strings | Easy | [`05-longest-common-prefix.py`](./arrays-strings/05-longest-common-prefix.py) | [Notes](./arrays-strings/05-longest-common-prefix.md) |
| 704 | Binary Search | Basic Algorithms | Easy | [`06-binary-search.py`](./basic-algorithms/06-binary-search.py) | [Notes](./basic-algorithms/06-binary-search.md) |
| 283 | Move Zeroes | Basic Algorithms | Easy | [`07-move-zeroes.py`](./basic-algorithms/07-move-zeroes.py) | [Notes](./basic-algorithms/07-move-zeroes.md) |
| 20 | Valid Parentheses | Stacks | Easy | [`08-valid-parentheses.py`](./stacks/08-valid-parentheses.py) | [Notes](./stacks/08-valid-parentheses.md) |
| 206 | Reverse Linked List | Linked Lists | Easy | [`09-reverse-linked-list.py`](./linked-lists/09-reverse-linked-list.py) | [Notes](./linked-lists/09-reverse-linked-list.md) |

---

## Local Testing & Verification
Every python file in this repository includes a standalone `__main__` test block. This ensures that code logic, type hinting, and boundary limits are verified locally before touching the LeetCode judge. 

Testing covers:
* **Typical Use Cases:** Standard inputs.
* **Edge Cases:** Empty arrays, single elements, negative constraints, and duplicate values.

Accepted screenshots confirming a successful LeetCode submission are stored alongside the solutions in their respective folders as `NN-result.png`.

---

## How to Run Tests
To run the local test suite for any problem, execute the python file from the root directory:

```bash
# Example: Running tests for Two Sum
python arrays-strings/01-two-sum.py
```
