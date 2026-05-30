export const PROBLEMS = {
    "two-sum": {
        id: "two-sum",
        title: "Two Sum",
        difficulty: "Easy",
        category: "Array • Hash Table",
        description: {
            text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
            notes: [
                "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
                "You can return the answer in any order.",
            ],
        },
        examples: [
            {
                input: "nums = [2,7,11,15], target = 9",
                output: "[0,1]",
                explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
            },
            {
                input: "nums = [3,2,4], target = 6",
                output: "[1,2]",
            },
            {
                input: "nums = [3,3], target = 6",
                output: "[0,1]",
            },
        ],
        constraints: [
            "2 ≤ nums.length ≤ 10⁴",
            "-10⁹ ≤ nums[i] ≤ 10⁹",
            "-10⁹ ≤ target ≤ 10⁹",
            "Only one valid answer exists",
        ],
        starterCode: {
            javascript: `function twoSum(nums, target) {
        // Write your solution here
        
    }

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,

            typescript: `function twoSum(nums: number[], target: number): number[] {
    // Write your solution here
    
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,

            python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,

            java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {2, 7, 11, 15};
    vector<int> result1 = twoSum(nums1, 9);
    cout << "[" << result1[0] << "," << result1[1] << "]" << endl;
    
    vector<int> nums2 = {3, 2, 4};
    vector<int> result2 = twoSum(nums2, 6);
    cout << "[" << result2[0] << "," << result2[1] << "]" << endl;
    
    vector<int> nums3 = {3, 3};
    vector<int> result3 = twoSum(nums3, 6);
    cout << "[" << result3[0] << "," << result3[1] << "]" << endl;
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {2, 7, 11, 15};
    int returnSize;
    int* result1 = twoSum(nums1, 4, 9, &returnSize);
    printf("[%d,%d]\\n", result1[0], result1[1]);
    free(result1);
    
    int nums2[] = {3, 2, 4};
    int* result2 = twoSum(nums2, 3, 6, &returnSize);
    printf("[%d,%d]\\n", result2[0], result2[1]);
    free(result2);
    
    int nums3[] = {3, 3};
    int* result3 = twoSum(nums3, 2, 6, &returnSize);
    printf("[%d,%d]\\n", result3[0], result3[1]);
    free(result3);
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int[] TwoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    static void Main() {
        Console.WriteLine(string.Join(",", TwoSum(new int[] {2, 7, 11, 15}, 9))); // Expected: 0,1
        Console.WriteLine(string.Join(",", TwoSum(new int[] {3, 2, 4}, 6))); // Expected: 1,2
        Console.WriteLine(string.Join(",", TwoSum(new int[] {3, 3}, 6))); // Expected: 0,1
    }
}`,

            go: `package main

import "fmt"

func twoSum(nums []int, target int) []int {
    // Write your solution here
    
}

func main() {
    fmt.Println(twoSum([]int{2, 7, 11, 15}, 9)) // Expected: [0 1]
    fmt.Println(twoSum([]int{3, 2, 4}, 6)) // Expected: [1 2]
    fmt.Println(twoSum([]int{3, 3}, 6)) // Expected: [0 1]
}`,

            rust: `use std::collections::HashMap;

fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", two_sum(vec![2, 7, 11, 15], 9)); // Expected: [0, 1]
    println!("{:?}", two_sum(vec![3, 2, 4], 6)); // Expected: [1, 2]
    println!("{:?}", two_sum(vec![3, 3], 6)); // Expected: [0, 1]
}`,

            ruby: `def two_sum(nums, target)
    # Write your solution here
    
end

# Test cases
puts two_sum([2, 7, 11, 15], 9).inspect  # Expected: [0, 1]
puts two_sum([3, 2, 4], 6).inspect       # Expected: [1, 2]
puts two_sum([3, 3], 6).inspect          # Expected: [0, 1]`,

            php: `<?php
function twoSum($nums, $target) {
    // Write your solution here
    
}

// Test cases
print_r(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
print_r(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
print_r(twoSum([3, 3], 6)); // Expected: [0, 1]
?>`,

            swift: `func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
    // Write your solution here
    
}

// Test cases
print(twoSum([2, 7, 11, 15], 9)) // Expected: [0, 1]
print(twoSum([3, 2, 4], 6)) // Expected: [1, 2]
print(twoSum([3, 3], 6)) // Expected: [0, 1]`,

            kotlin: `fun twoSum(nums: IntArray, target: Int): IntArray {
    // Write your solution here
    
}

fun main() {
    println(twoSum(intArrayOf(2, 7, 11, 15), 9).joinToString()) // Expected: 0,1
    println(twoSum(intArrayOf(3, 2, 4), 6).joinToString()) // Expected: 1,2
    println(twoSum(intArrayOf(3, 3), 6).joinToString()) // Expected: 0,1
}`,

            scala: `object Solution {
    def twoSum(nums: Array[Int], target: Int): Array[Int] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(twoSum(Array(2, 7, 11, 15), 9).mkString(",")) // Expected: 0,1
        println(twoSum(Array(3, 2, 4), 6).mkString(",")) // Expected: 1,2
        println(twoSum(Array(3, 3), 6).mkString(",")) // Expected: 0,1
    }
}`,

            perl: `sub twoSum {
    my ($nums, $target) = @_;
    # Write your solution here
    
}

# Test cases
use Data::Dumper;
print Dumper(twoSum([2, 7, 11, 15], 9)); # Expected: [0, 1]
print Dumper(twoSum([3, 2, 4], 6)); # Expected: [1, 2]
print Dumper(twoSum([3, 3], 6)); # Expected: [0, 1]`,

            r: `twoSum <- function(nums, target) {
    # Write your solution here
    
}

# Test cases
print(twoSum(c(2, 7, 11, 15), 9)) # Expected: 0 1
print(twoSum(c(3, 2, 4), 6)) # Expected: 1 2
print(twoSum(c(3, 3), 6)) # Expected: 0 1`
        }
    },

    "reverse-string": {
        id: "reverse-string",
        title: "Reverse String",
        difficulty: "Easy",
        category: "String • Two Pointers",
        description: {
            text: "Write a function that reverses a string. The input string is given as an array of characters s.",
            notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
        },
        examples: [
            {
                input: 's = ["h","e","l","l","o"]',
                output: '["o","l","l","e","h"]',
            },
            {
                input: 's = ["H","a","n","n","a","h"]',
                output: '["h","a","n","n","a","H"]',
            },
        ],
        constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
        starterCode: {
            javascript: `function reverseString(s) {
    // Write your solution here
    
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,

            typescript: `function reverseString(s: string[]): void {
    // Write your solution here
    
}

// Test cases
let test1: string[] = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2: string[] = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,

            python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,

            java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,

            cpp: `#include <iostream>
#include <vector>
using namespace std;

void reverseString(vector<char>& s) {
    // Write your solution here
    
}

int main() {
    vector<char> test1 = {'h','e','l','l','o'};
    reverseString(test1);
    for (char c : test1) cout << c;
    cout << endl; // Expected: olleh
    
    vector<char> test2 = {'H','a','n','n','a','h'};
    reverseString(test2);
    for (char c : test2) cout << c;
    cout << endl; // Expected: hannaH
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <string.h>

void reverseString(char* s, int sSize) {
    // Write your solution here
    
}

int main() {
    char test1[] = {'h','e','l','l','o'};
    reverseString(test1, 5);
    for (int i = 0; i < 5; i++) printf("%c", test1[i]);
    printf("\\n"); // Expected: olleh
    
    char test2[] = {'H','a','n','n','a','h'};
    reverseString(test2, 6);
    for (int i = 0; i < 6; i++) printf("%c", test2[i]);
    printf("\\n"); // Expected: hannaH
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static void ReverseString(char[] s) {
        // Write your solution here
        
    }
    
    static void Main() {
        char[] test1 = {'h','e','l','l','o'};
        ReverseString(test1);
        Console.WriteLine(string.Join(",", test1)); // Expected: o,l,l,e,h
        
        char[] test2 = {'H','a','n','n','a','h'};
        ReverseString(test2);
        Console.WriteLine(string.Join(",", test2)); // Expected: h,a,n,n,a,H
    }
}`,

            go: `package main

import "fmt"

func reverseString(s []byte) {
    // Write your solution here
    
}

func main() {
    test1 := []byte{'h','e','l','l','o'}
    reverseString(test1)
    fmt.Println(string(test1)) // Expected: olleh
    
    test2 := []byte{'H','a','n','n','a','h'}
    reverseString(test2)
    fmt.Println(string(test2)) // Expected: hannaH
}`,

            rust: `fn reverse_string(s: &mut Vec<char>) {
    // Write your solution here
    
}

fn main() {
    let mut test1 = vec!['h','e','l','l','o'];
    reverse_string(&mut test1);
    println!("{:?}", test1); // Expected: ['o','l','l','e','h']
    
    let mut test2 = vec!['H','a','n','n','a','h'];
    reverse_string(&mut test2);
    println!("{:?}", test2); // Expected: ['h','a','n','n','a','H']
}`,

            ruby: `def reverse_string(s)
    # Write your solution here
    
end

# Test cases
test1 = ["h","e","l","l","o"]
reverse_string(test1)
puts test1.inspect  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverse_string(test2)
puts test2.inspect  # Expected: ["h","a","n","n","a","H"]`,

            php: `<?php
function reverseString(&$s) {
    // Write your solution here
    
}

// Test cases
$test1 = ["h","e","l","l","o"];
reverseString($test1);
print_r($test1); // Expected: ["o","l","l","e","h"]

$test2 = ["H","a","n","n","a","h"];
reverseString($test2);
print_r($test2); // Expected: ["h","a","n","n","a","H"]
?>`,

            swift: `func reverseString(_ s: inout [Character]) {
    // Write your solution here
    
}

// Test cases
var test1: [Character] = ["h","e","l","l","o"]
reverseString(&test1)
print(test1) // Expected: ["o","l","l","e","h"]

var test2: [Character] = ["H","a","n","n","a","h"]
reverseString(&test2)
print(test2) // Expected: ["h","a","n","n","a","H"]`,

            kotlin: `fun reverseString(s: CharArray) {
    // Write your solution here
    
}

fun main() {
    var test1 = charArrayOf('h','e','l','l','o')
    reverseString(test1)
    println(test1.joinToString()) // Expected: o,l,l,e,h
    
    var test2 = charArrayOf('H','a','n','n','a','h')
    reverseString(test2)
    println(test2.joinToString()) // Expected: h,a,n,n,a,H
}`,

            scala: `object Solution {
    def reverseString(s: Array[Char]): Unit = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        var test1 = Array('h','e','l','l','o')
        reverseString(test1)
        println(test1.mkString(",")) // Expected: o,l,l,e,h
        
        var test2 = Array('H','a','n','n','a','h')
        reverseString(test2)
        println(test2.mkString(",")) // Expected: h,a,n,n,a,H
    }
}`,

            perl: `sub reverseString {
    my s = shift;
    # Write your solution here
    
}

# Test cases
my @test1 = ('h','e','l','l','o');
reverseString(test1);
print "[" . join(",", @test1) . "]\\n"; # Expected: [o,l,l,e,h]

my @test2 = ('H','a','n','n','a','h');
reverseString(test2);
print "[" . join(",", @test2) . "]\\n"; # Expected: [h,a,n,n,a,H]`,

            r: `reverseString <- function(s) {
    # Write your solution here
    
}

# Test cases
test1 <- c('h','e','l','l','o')
reverseString(test1)
print(test1) # Expected: 'o' 'l' 'l' 'e' 'h'

test2 <- c('H','a','n','n','a','h')
reverseString(test2)
print(test2) # Expected: 'h' 'a' 'n' 'n' 'a' 'H'`
        },
        expectedOutput: {
            javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
            python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
            java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
        },
    },

    "valid-palindrome": {
        id: "valid-palindrome",
        title: "Valid Palindrome",
        difficulty: "Easy",
        category: "String • Two Pointers",
        description: {
            text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
            notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
        },
        examples: [
            {
                input: 's = "A man, a plan, a canal: Panama"',
                output: "true",
                explanation: '"amanaplanacanalpanama" is a palindrome.',
            },
            {
                input: 's = "race a car"',
                output: "false",
                explanation: '"raceacar" is not a palindrome.',
            },
            {
                input: 's = " "',
                output: "true",
                explanation:
                    's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
            },
        ],
        constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
        starterCode: {
            javascript: `function isPalindrome(s) {
    // Write your solution here
    
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,

            typescript: `function isPalindrome(s: string): boolean {
    // Write your solution here
    
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,

            python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,

            java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,

            cpp: `#include <iostream>
#include <string>
#include <cctype>
using namespace std;

bool isPalindrome(string s) {
    // Write your solution here
    
}

int main() {
    cout << boolalpha;
    cout << isPalindrome("A man, a plan, a canal: Panama") << endl; // Expected: true
    cout << isPalindrome("race a car") << endl; // Expected: false
    cout << isPalindrome(" ") << endl; // Expected: true
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <ctype.h>

bool isPalindrome(char* s) {
    // Write your solution here
    
}

int main() {
    printf("%d\\n", isPalindrome("A man, a plan, a canal: Panama")); // Expected: 1 (true)
    printf("%d\\n", isPalindrome("race a car")); // Expected: 0 (false)
    printf("%d\\n", isPalindrome(" ")); // Expected: 1 (true)
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static bool IsPalindrome(string s) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(IsPalindrome("A man, a plan, a canal: Panama")); // Expected: True
        Console.WriteLine(IsPalindrome("race a car")); // Expected: False
        Console.WriteLine(IsPalindrome(" ")); // Expected: True
    }
}`,

            go: `package main

import (
    "fmt"
    "strings"
)

func isPalindrome(s string) bool {
    // Write your solution here
    
}

func main() {
    fmt.Println(isPalindrome("A man, a plan, a canal: Panama")) // Expected: true
    fmt.Println(isPalindrome("race a car")) // Expected: false
    fmt.Println(isPalindrome(" ")) // Expected: true
}`,

            rust: `fn is_palindrome(s: String) -> bool {
    // Write your solution here
    
}

fn main() {
    println!("{}", is_palindrome("A man, a plan, a canal: Panama".to_string())); // Expected: true
    println!("{}", is_palindrome("race a car".to_string())); // Expected: false
    println!("{}", is_palindrome(" ".to_string())); // Expected: true
}`,

            ruby: `def is_palindrome(s)
    # Write your solution here
    
end

# Test cases
puts is_palindrome("A man, a plan, a canal: Panama") # Expected: true
puts is_palindrome("race a car") # Expected: false
puts is_palindrome(" ") # Expected: true`,

            php: `<?php
function isPalindrome($s) {
    // Write your solution here
    
}

// Test cases
echo var_export(isPalindrome("A man, a plan, a canal: Panama"), true) . "\\n"; // Expected: true
echo var_export(isPalindrome("race a car"), true) . "\\n"; // Expected: false
echo var_export(isPalindrome(" "), true) . "\\n"; // Expected: true
?>`,

            swift: `func isPalindrome(_ s: String) -> Bool {
    // Write your solution here
    
}

// Test cases
print(isPalindrome("A man, a plan, a canal: Panama")) // Expected: true
print(isPalindrome("race a car")) // Expected: false
print(isPalindrome(" ")) // Expected: true`,

            kotlin: `fun isPalindrome(s: String): Boolean {
    // Write your solution here
    
}

fun main() {
    println(isPalindrome("A man, a plan, a canal: Panama")) // Expected: true
    println(isPalindrome("race a car")) // Expected: false
    println(isPalindrome(" ")) // Expected: true
}`,

            scala: `object Solution {
    def isPalindrome(s: String): Boolean = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(isPalindrome("A man, a plan, a canal: Panama")) // Expected: true
        println(isPalindrome("race a car")) // Expected: false
        println(isPalindrome(" ")) // Expected: true
    }
}`,

            perl: `sub isPalindrome {
    my $s = shift;
    # Write your solution here
    
}

# Test cases
print isPalindrome("A man, a plan, a canal: Panama") ? "true\\n" : "false\\n"; # Expected: true
print isPalindrome("race a car") ? "true\\n" : "false\\n"; # Expected: false
print isPalindrome(" ") ? "true\\n" : "false\\n"; # Expected: true`,

            r: `isPalindrome <- function(s) {
    # Write your solution here
    
}

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama")) # Expected: TRUE
print(isPalindrome("race a car")) # Expected: FALSE
print(isPalindrome(" ")) # Expected: TRUE`
        },
        expectedOutput: {
            javascript: "true\nfalse\ntrue",
            python: "True\nFalse\nTrue",
            java: "true\nfalse\ntrue",
        },
    },

    "maximum-subarray": {
        id: "maximum-subarray",
        title: "Maximum Subarray",
        difficulty: "Medium",
        category: "Array • Dynamic Programming",
        description: {
            text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
            notes: [],
        },
        examples: [
            {
                input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
                output: "6",
                explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
            },
            {
                input: "nums = [1]",
                output: "1",
                explanation: "The subarray [1] has the largest sum 1.",
            },
            {
                input: "nums = [5,4,-1,7,8]",
                output: "23",
                explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
            },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxSubArray(nums) {
    // Write your solution here
    
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,

            typescript: `function maxSubArray(nums: number[]): number {
    // Write your solution here
    
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,

            python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,

            java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int maxSubArray(vector<int>& nums) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {-2,1,-3,4,-1,2,1,-5,4};
    cout << maxSubArray(nums1) << endl; // Expected: 6
    
    vector<int> nums2 = {1};
    cout << maxSubArray(nums2) << endl; // Expected: 1
    
    vector<int> nums3 = {5,4,-1,7,8};
    cout << maxSubArray(nums3) << endl; // Expected: 23
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <limits.h>

int maxSubArray(int* nums, int numsSize) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {-2,1,-3,4,-1,2,1,-5,4};
    printf("%d\\n", maxSubArray(nums1, 9)); // Expected: 6
    
    int nums2[] = {1};
    printf("%d\\n", maxSubArray(nums2, 1)); // Expected: 1
    
    int nums3[] = {5,4,-1,7,8};
    printf("%d\\n", maxSubArray(nums3, 5)); // Expected: 23
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int MaxSubArray(int[] nums) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(MaxSubArray(new int[] {-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        Console.WriteLine(MaxSubArray(new int[] {1})); // Expected: 1
        Console.WriteLine(MaxSubArray(new int[] {5,4,-1,7,8})); // Expected: 23
    }
}`,

            go: `package main

import "fmt"

func maxSubArray(nums []int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(maxSubArray([]int{-2,1,-3,4,-1,2,1,-5,4})) // Expected: 6
    fmt.Println(maxSubArray([]int{1})) // Expected: 1
    fmt.Println(maxSubArray([]int{5,4,-1,7,8})) // Expected: 23
}`,

            rust: `fn max_sub_array(nums: Vec<i32>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", max_sub_array(vec![-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
    println!("{}", max_sub_array(vec![1])); // Expected: 1
    println!("{}", max_sub_array(vec![5,4,-1,7,8])); // Expected: 23
}`,

            ruby: `def max_sub_array(nums)
    # Write your solution here
    
end

# Test cases
puts max_sub_array([-2,1,-3,4,-1,2,1,-5,4]) # Expected: 6
puts max_sub_array([1]) # Expected: 1
puts max_sub_array([5,4,-1,7,8]) # Expected: 23`,

            php: `<?php
function maxSubArray($nums) {
    // Write your solution here
    
}

// Test cases
echo maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) . "\\n"; // Expected: 6
echo maxSubArray([1]) . "\\n"; // Expected: 1
echo maxSubArray([5,4,-1,7,8]) . "\\n"; // Expected: 23
?>`,

            swift: `func maxSubArray(_ nums: [Int]) -> Int {
    // Write your solution here
    
}

// Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // Expected: 6
print(maxSubArray([1])) // Expected: 1
print(maxSubArray([5,4,-1,7,8])) // Expected: 23`,

            kotlin: `fun maxSubArray(nums: IntArray): Int {
    // Write your solution here
    
}

fun main() {
    println(maxSubArray(intArrayOf(-2,1,-3,4,-1,2,1,-5,4))) // Expected: 6
    println(maxSubArray(intArrayOf(1))) // Expected: 1
    println(maxSubArray(intArrayOf(5,4,-1,7,8))) // Expected: 23
}`,

            scala: `object Solution {
    def maxSubArray(nums: Array[Int]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(maxSubArray(Array(-2,1,-3,4,-1,2,1,-5,4))) // Expected: 6
        println(maxSubArray(Array(1))) // Expected: 1
        println(maxSubArray(Array(5,4,-1,7,8))) // Expected: 23
    }
}`,

            perl: `sub maxSubArray {
    my $nums = shift;
    # Write your solution here
    
}

# Test cases
print maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) . "\\n"; # Expected: 6
print maxSubArray([1]) . "\\n"; # Expected: 1
print maxSubArray([5,4,-1,7,8]) . "\\n"; # Expected: 23`,

            r: `maxSubArray <- function(nums) {
    # Write your solution here
    
}

# Test cases
print(maxSubArray(c(-2,1,-3,4,-1,2,1,-5,4))) # Expected: 6
print(maxSubArray(c(1))) # Expected: 1
print(maxSubArray(c(5,4,-1,7,8))) # Expected: 23`
        },
        expectedOutput: {
            javascript: "6\n1\n23",
            python: "6\n1\n23",
            java: "6\n1\n23",
        },
    },

    "container-with-most-water": {
        id: "container-with-most-water",
        title: "Container With Most Water",
        difficulty: "Medium",
        category: "Array • Two Pointers",
        description: {
            text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
            notes: [
                "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
                "Return the maximum amount of water a container can store.",
                "Notice that you may not slant the container.",
            ],
        },
        examples: [
            {
                input: "height = [1,8,6,2,5,4,8,3,7]",
                output: "49",
                explanation:
                    "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
            },
            {
                input: "height = [1,1]",
                output: "1",
            },
        ],
        constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxArea(height) {
    // Write your solution here
    
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,

            typescript: `function maxArea(height: number[]): number {
    // Write your solution here
    
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,

            python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,

            java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int maxArea(vector<int>& height) {
    // Write your solution here
    
}

int main() {
    vector<int> height1 = {1,8,6,2,5,4,8,3,7};
    cout << maxArea(height1) << endl; // Expected: 49
    
    vector<int> height2 = {1,1};
    cout << maxArea(height2) << endl; // Expected: 1
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <algorithm>
using namespace std;

int maxArea(int* height, int heightSize) {
    // Write your solution here
    
}

int main() {
    int height1[] = {1,8,6,2,5,4,8,3,7};
    printf("%d\\n", maxArea(height1, 9)); // Expected: 49
    
    int height2[] = {1,1};
    printf("%d\\n", maxArea(height2, 2)); // Expected: 1
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int MaxArea(int[] height) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(MaxArea(new int[] {1,8,6,2,5,4,8,3,7})); // Expected: 49
        Console.WriteLine(MaxArea(new int[] {1,1})); // Expected: 1
    }
}`,

            go: `package main

import "fmt"

func maxArea(height []int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(maxArea([]int{1,8,6,2,5,4,8,3,7})) // Expected: 49
    fmt.Println(maxArea([]int{1,1})) // Expected: 1
}`,

            rust: `fn max_area(height: Vec<i32>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", max_area(vec![1,8,6,2,5,4,8,3,7])); // Expected: 49
    println!("{}", max_area(vec![1,1])); // Expected: 1
}`,

            ruby: `def max_area(height)
    # Write your solution here
    
end

# Test cases
puts max_area([1,8,6,2,5,4,8,3,7]) # Expected: 49
puts max_area([1,1]) # Expected: 1`,

            php: `<?php
function maxArea($height) {
    // Write your solution here
    
}

// Test cases
echo maxArea([1,8,6,2,5,4,8,3,7]) . "\\n"; // Expected: 49
echo maxArea([1,1]) . "\\n"; // Expected: 1
?>`,

            swift: `func maxArea(_ height: [Int]) -> Int {
    // Write your solution here
    
}

// Test cases
print(maxArea([1,8,6,2,5,4,8,3,7])) // Expected: 49
print(maxArea([1,1])) // Expected: 1`,

            kotlin: `fun maxArea(height: IntArray): Int {
    // Write your solution here
    
}

fun main() {
    println(maxArea(intArrayOf(1,8,6,2,5,4,8,3,7))) // Expected: 49
    println(maxArea(intArrayOf(1,1))) // Expected: 1
}`,

            scala: `object Solution {
    def maxArea(height: Array[Int]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(maxArea(Array(1,8,6,2,5,4,8,3,7))) // Expected: 49
        println(maxArea(Array(1,1))) // Expected: 1
    }
}`,

            perl: `sub maxArea {
    my $height = shift;
    # Write your solution here
    
}

# Test cases
print maxArea([1,8,6,2,5,4,8,3,7]) . "\\n"; # Expected: 49
print maxArea([1,1]) . "\\n"; # Expected: 1`,

            r: `maxArea <- function(height) {
    # Write your solution here
    
}

# Test cases
print(maxArea(c(1,8,6,2,5,4,8,3,7))) # Expected: 49
print(maxArea(c(1,1))) # Expected: 1`
        },
        expectedOutput: {
            javascript: "49\n1",
            python: "49\n1",
            java: "49\n1",
        },
    },

    "valid-parentheses": {
        id: "valid-parentheses",
        title: "Valid Parentheses",
        difficulty: "Easy",
        category: "String • Stack",
        description: {
            text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
            notes: [
                "Open brackets must be closed by the same type of brackets.",
                "Open brackets must be closed in the correct order.",
                "Every close bracket has a corresponding open bracket of the same type."
            ],
        },
        examples: [
            {
                input: "s = '()'",
                output: "true",
            },
            {
                input: "s = '()[]{}'",
                output: "true",
            },
            {
                input: "s = '(]'",
                output: "false",
            },
            {
                input: "s = '([)]'",
                output: "false",
            },
            {
                input: "s = '{[]}'",
                output: "true",
            },
        ],
        constraints: [
            "1 ≤ s.length ≤ 10⁴",
            "s consists of parentheses only '()[]{}'",
        ],
        starterCode: {
            javascript: `function isValid(s) {
    // Write your solution here
    
}

// Test cases
console.log(isValid('()')); // Expected: true
console.log(isValid('()[]{}')); // Expected: true
console.log(isValid('(]')); // Expected: false
console.log(isValid('([)]')); // Expected: false
console.log(isValid('{[]}')); // Expected: true`,

            typescript: `function isValid(s: string): boolean {
    // Write your solution here
    
}

// Test cases
console.log(isValid('()')); // Expected: true
console.log(isValid('()[]{}')); // Expected: true
console.log(isValid('(]')); // Expected: false
console.log(isValid('([)]')); // Expected: false
console.log(isValid('{[]}')); // Expected: true`,

            python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid('()'))  # Expected: True
print(isValid('()[]{}'))  # Expected: True
print(isValid('(]'))  # Expected: False
print(isValid('([)]'))  # Expected: False
print(isValid('{[]}'))  # Expected: True`,

            java: `import java.util.*;

class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isValid("()")); // Expected: true
        System.out.println(isValid("()[]{}")); // Expected: true
        System.out.println(isValid("(]")); // Expected: false
        System.out.println(isValid("([)]")); // Expected: false
        System.out.println(isValid("{[]}")); // Expected: true
    }
}`,

            cpp: `#include <iostream>
#include <stack>
#include <string>
#include <unordered_map>
using namespace std;

bool isValid(string s) {
    // Write your solution here
    
}

int main() {
    cout << boolalpha;
    cout << isValid("()") << endl; // Expected: true
    cout << isValid("()[]{}") << endl; // Expected: true
    cout << isValid("(]") << endl; // Expected: false
    cout << isValid("([)]") << endl; // Expected: false
    cout << isValid("{[]}") << endl; // Expected: true
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isValid(char* s) {
    // Write your solution here
    
}

int main() {
    printf("%d\\n", isValid("()")); // Expected: 1 (true)
    printf("%d\\n", isValid("()[]{}")); // Expected: 1 (true)
    printf("%d\\n", isValid("(]")); // Expected: 0 (false)
    printf("%d\\n", isValid("([)]")); // Expected: 0 (false)
    printf("%d\\n", isValid("{[]}")); // Expected: 1 (true)
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static bool IsValid(string s) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(IsValid("()")); // Expected: True
        Console.WriteLine(IsValid("()[]{}")); // Expected: True
        Console.WriteLine(IsValid("(]")); // Expected: False
        Console.WriteLine(IsValid("([)]")); // Expected: False
        Console.WriteLine(IsValid("{[]}")); // Expected: True
    }
}`,

            go: `package main

import "fmt"

func isValid(s string) bool {
    // Write your solution here
    
}

func main() {
    fmt.Println(isValid("()")) // Expected: true
    fmt.Println(isValid("()[]{}")) // Expected: true
    fmt.Println(isValid("(]")) // Expected: false
    fmt.Println(isValid("([)]")) // Expected: false
    fmt.Println(isValid("{[]}")) // Expected: true
}`,

            rust: `fn is_valid(s: String) -> bool {
    // Write your solution here
    
}

fn main() {
    println!("{}", is_valid("()".to_string())); // Expected: true
    println!("{}", is_valid("()[]{}".to_string())); // Expected: true
    println!("{}", is_valid("(]".to_string())); // Expected: false
    println!("{}", is_valid("([)]".to_string())); // Expected: false
    println!("{}", is_valid("{[]}".to_string())); // Expected: true
}`,

            ruby: `def is_valid(s)
    # Write your solution here
    
end

# Test cases
puts is_valid('()') # Expected: true
puts is_valid('()[]{}') # Expected: true
puts is_valid('(]') # Expected: false
puts is_valid('([)]') # Expected: false
puts is_valid('{[]}') # Expected: true`,

            php: `<?php
function isValid($s) {
    // Write your solution here
    
}

// Test cases
echo var_export(isValid('()'), true) . "\\n"; // Expected: true
echo var_export(isValid('()[]{}'), true) . "\\n"; // Expected: true
echo var_export(isValid('(]'), true) . "\\n"; // Expected: false
echo var_export(isValid('([)]'), true) . "\\n"; // Expected: false
echo var_export(isValid('{[]}'), true) . "\\n"; // Expected: true
?>`,

            swift: `func isValid(_ s: String) -> Bool {
    // Write your solution here
    
}

// Test cases
print(isValid("()")) // Expected: true
print(isValid("()[]{}")) // Expected: true
print(isValid("(]")) // Expected: false
print(isValid("([)]")) // Expected: false
print(isValid("{[]}")) // Expected: true`,

            kotlin: `fun isValid(s: String): Boolean {
    // Write your solution here
    
}

fun main() {
    println(isValid("()")) // Expected: true
    println(isValid("()[]{}")) // Expected: true
    println(isValid("(]")) // Expected: false
    println(isValid("([)]")) // Expected: false
    println(isValid("{[]}")) // Expected: true
}`,

            scala: `import scala.collection.mutable.Stack

object Solution {
    def isValid(s: String): Boolean = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(isValid("()")) // Expected: true
        println(isValid("()[]{}")) // Expected: true
        println(isValid("(]")) // Expected: false
        println(isValid("([)]")) // Expected: false
        println(isValid("{[]}")) // Expected: true
    }
}`,

            perl: `sub isValid {
    my $s = shift;
    # Write your solution here
    
}

# Test cases
print isValid('()') ? "true\\n" : "false\\n"; # Expected: true
print isValid('()[]{}') ? "true\\n" : "false\\n"; # Expected: true
print isValid('(]') ? "true\\n" : "false\\n"; # Expected: false
print isValid('([)]') ? "true\\n" : "false\\n"; # Expected: false
print isValid('{[]}') ? "true\\n" : "false\\n"; # Expected: true`,

            r: `isValid <- function(s) {
    # Write your solution here
    
}

# Test cases
print(isValid('()')) # Expected: TRUE
print(isValid('()[]{}')) # Expected: TRUE
print(isValid('(]')) # Expected: FALSE
print(isValid('([)]')) # Expected: FALSE
print(isValid('{[]}')) # Expected: TRUE`
        },
        expectedOutput: {
            javascript: "true\ntrue\nfalse\nfalse\ntrue",
            python: "True\nTrue\nFalse\nFalse\nTrue",
            java: "true\ntrue\nfalse\nfalse\ntrue",
        },
    },

    "best-time-to-buy-and-sell-stock": {
        id: "best-time-to-buy-and-sell-stock",
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        category: "Array • Dynamic Programming",
        description: {
            text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
            notes: [
                "Return the maximum profit you can achieve from this transaction.",
                "If you cannot achieve any profit, return 0."
            ],
        },
        examples: [
            {
                input: "prices = [7,1,5,3,6,4]",
                output: "5",
                explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
            },
            {
                input: "prices = [7,6,4,3,1]",
                output: "0",
                explanation: "No transactions are done and the max profit = 0.",
            },
        ],
        constraints: [
            "1 ≤ prices.length ≤ 10⁵",
            "0 ≤ prices[i] ≤ 10⁴",
        ],
        starterCode: {
            javascript: `function maxProfit(prices) {
    // Write your solution here
    
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0`,

            typescript: `function maxProfit(prices: number[]): number {
    // Write your solution here
    
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0`,

            python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))  # Expected: 0`,

            java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1})); // Expected: 0
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>
using namespace std;

int maxProfit(vector<int>& prices) {
    // Write your solution here
    
}

int main() {
    vector<int> prices1 = {7,1,5,3,6,4};
    cout << maxProfit(prices1) << endl; // Expected: 5
    
    vector<int> prices2 = {7,6,4,3,1};
    cout << maxProfit(prices2) << endl; // Expected: 0
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <limits.h>

int maxProfit(int* prices, int pricesSize) {
    // Write your solution here
    
}

int main() {
    int prices1[] = {7,1,5,3,6,4};
    printf("%d\\n", maxProfit(prices1, 6)); // Expected: 5
    
    int prices2[] = {7,6,4,3,1};
    printf("%d\\n", maxProfit(prices2, 5)); // Expected: 0
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int MaxProfit(int[] prices) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(MaxProfit(new int[] {7,1,5,3,6,4})); // Expected: 5
        Console.WriteLine(MaxProfit(new int[] {7,6,4,3,1})); // Expected: 0
    }
}`,

            go: `package main

import "fmt"

func maxProfit(prices []int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(maxProfit([]int{7,1,5,3,6,4})) // Expected: 5
    fmt.Println(maxProfit([]int{7,6,4,3,1})) // Expected: 0
}`,

            rust: `fn max_profit(prices: Vec<i32>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", max_profit(vec![7,1,5,3,6,4])); // Expected: 5
    println!("{}", max_profit(vec![7,6,4,3,1])); // Expected: 0
}`,

            ruby: `def max_profit(prices)
    # Write your solution here
    
end

# Test cases
puts max_profit([7,1,5,3,6,4]) # Expected: 5
puts max_profit([7,6,4,3,1]) # Expected: 0`,

            php: `<?php
function maxProfit($prices) {
    // Write your solution here
    
}

// Test cases
echo maxProfit([7,1,5,3,6,4]) . "\\n"; // Expected: 5
echo maxProfit([7,6,4,3,1]) . "\\n"; // Expected: 0
?>`,

            swift: `func maxProfit(_ prices: [Int]) -> Int {
    // Write your solution here
    
}

// Test cases
print(maxProfit([7,1,5,3,6,4])) // Expected: 5
print(maxProfit([7,6,4,3,1])) // Expected: 0`,

            kotlin: `fun maxProfit(prices: IntArray): Int {
    // Write your solution here
    
}

fun main() {
    println(maxProfit(intArrayOf(7,1,5,3,6,4))) // Expected: 5
    println(maxProfit(intArrayOf(7,6,4,3,1))) // Expected: 0
}`,

            scala: `object Solution {
    def maxProfit(prices: Array[Int]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(maxProfit(Array(7,1,5,3,6,4))) // Expected: 5
        println(maxProfit(Array(7,6,4,3,1))) // Expected: 0
    }
}`,

            perl: `sub maxProfit {
    my $prices = shift;
    # Write your solution here
    
}

# Test cases
print maxProfit([7,1,5,3,6,4]) . "\\n"; # Expected: 5
print maxProfit([7,6,4,3,1]) . "\\n"; # Expected: 0`,

            r: `maxProfit <- function(prices) {
    # Write your solution here
    
}

# Test cases
print(maxProfit(c(7,1,5,3,6,4))) # Expected: 5
print(maxProfit(c(7,6,4,3,1))) # Expected: 0`
        },
        expectedOutput: {
            javascript: "5\n0",
            python: "5\n0",
            java: "5\n0",
        },
    },

    "product-of-array-except-self": {
        id: "product-of-array-except-self",
        title: "Product of Array Except Self",
        difficulty: "Medium",
        category: "Array • Prefix Sum",
        description: {
            text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
            notes: [
                "You must write an algorithm that runs in O(n) time and without using the division operation.",
                "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer."
            ],
        },
        examples: [
            {
                input: "nums = [1,2,3,4]",
                output: "[24,12,8,6]",
            },
            {
                input: "nums = [-1,1,0,-3,3]",
                output: "[0,0,9,0,0]",
            },
        ],
        constraints: [
            "2 ≤ nums.length ≤ 10⁵",
            "-30 ≤ nums[i] ≤ 30",
        ],
        starterCode: {
            javascript: `function productExceptSelf(nums) {
    // Write your solution here
    
}

// Test cases
console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]`,

            typescript: `function productExceptSelf(nums: number[]): number[] {
    // Write your solution here
    
}

// Test cases
console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]`,

            python: `def productExceptSelf(nums):
    # Write your solution here
    pass

# Test cases
print(productExceptSelf([1,2,3,4]))  # Expected: [24,12,8,6]
print(productExceptSelf([-1,1,0,-3,3]))  # Expected: [0,0,9,0,0]`,

            java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4}))); // Expected: [24,12,8,6]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3}))); // Expected: [0,0,9,0,0]
    }
}`,

            cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> productExceptSelf(vector<int>& nums) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {1,2,3,4};
    vector<int> result1 = productExceptSelf(nums1);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << result1[i];
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: [24,12,8,6]
    
    vector<int> nums2 = {-1,1,0,-3,3};
    vector<int> result2 = productExceptSelf(nums2);
    cout << "[";
    for (size_t i = 0; i < result2.size(); i++) {
        cout << result2[i];
        if (i < result2.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: [0,0,9,0,0]
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int* productExceptSelf(int* nums, int numsSize, int* returnSize) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {1,2,3,4};
    int returnSize1;
    int* result1 = productExceptSelf(nums1, 4, &returnSize1);
    printf("[");
    for (int i = 0; i < returnSize1; i++) {
        printf("%d", result1[i]);
        if (i < returnSize1 - 1) printf(",");
    }
    printf("]\\n"); // Expected: [24,12,8,6]
    free(result1);
    
    int nums2[] = {-1,1,0,-3,3};
    int returnSize2;
    int* result2 = productExceptSelf(nums2, 5, &returnSize2);
    printf("[");
    for (int i = 0; i < returnSize2; i++) {
        printf("%d", result2[i]);
        if (i < returnSize2 - 1) printf(",");
    }
    printf("]\\n"); // Expected: [0,0,9,0,0]
    free(result2);
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int[] ProductExceptSelf(int[] nums) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(string.Join(",", ProductExceptSelf(new int[] {1,2,3,4}))); // Expected: 24,12,8,6
        Console.WriteLine(string.Join(",", ProductExceptSelf(new int[] {-1,1,0,-3,3}))); // Expected: 0,0,9,0,0
    }
}`,

            go: `package main

import "fmt"

func productExceptSelf(nums []int) []int {
    // Write your solution here
    
}

func main() {
    fmt.Println(productExceptSelf([]int{1,2,3,4})) // Expected: [24 12 8 6]
    fmt.Println(productExceptSelf([]int{-1,1,0,-3,3})) // Expected: [0 0 9 0 0]
}`,

            rust: `fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", product_except_self(vec![1,2,3,4])); // Expected: [24,12,8,6]
    println!("{:?}", product_except_self(vec![-1,1,0,-3,3])); // Expected: [0,0,9,0,0]
}`,

            ruby: `def product_except_self(nums)
    # Write your solution here
    
end

# Test cases
puts product_except_self([1,2,3,4]).inspect # Expected: [24,12,8,6]
puts product_except_self([-1,1,0,-3,3]).inspect # Expected: [0,0,9,0,0]`,

            php: `<?php
function productExceptSelf($nums) {
    // Write your solution here
    
}

// Test cases
print_r(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
print_r(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]
?>`,

            swift: `func productExceptSelf(_ nums: [Int]) -> [Int] {
    // Write your solution here
    
}

// Test cases
print(productExceptSelf([1,2,3,4])) // Expected: [24,12,8,6]
print(productExceptSelf([-1,1,0,-3,3])) // Expected: [0,0,9,0,0]`,

            kotlin: `fun productExceptSelf(nums: IntArray): IntArray {
    // Write your solution here
    
}

fun main() {
    println(productExceptSelf(intArrayOf(1,2,3,4)).joinToString()) // Expected: 24,12,8,6
    println(productExceptSelf(intArrayOf(-1,1,0,-3,3)).joinToString()) // Expected: 0,0,9,0,0
}`,

            scala: `object Solution {
    def productExceptSelf(nums: Array[Int]): Array[Int] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(productExceptSelf(Array(1,2,3,4)).mkString(",")) // Expected: 24,12,8,6
        println(productExceptSelf(Array(-1,1,0,-3,3)).mkString(",")) // Expected: 0,0,9,0,0
    }
}`,

            perl: `sub productExceptSelf {
    my $nums = shift;
    # Write your solution here
    
}

# Test cases
my @result1 = @{productExceptSelf([1,2,3,4])};
print "[" . join(",", @result1) . "]\\n"; # Expected: [24,12,8,6]

my @result2 = @{productExceptSelf([-1,1,0,-3,3])};
print "[" . join(",", @result2) . "]\\n"; # Expected: [0,0,9,0,0]`,

            r: `productExceptSelf <- function(nums) {
    # Write your solution here
    
}

# Test cases
print(productExceptSelf(c(1,2,3,4))) # Expected: 24 12 8 6
print(productExceptSelf(c(-1,1,0,-3,3))) # Expected: 0 0 9 0 0`
        },
        expectedOutput: {
            javascript: "[24,12,8,6]\n[0,0,9,0,0]",
            python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
            java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
        },
    },

    "maximum-product-subarray": {
        id: "maximum-product-subarray",
        title: "Maximum Product Subarray",
        difficulty: "Medium",
        category: "Array • Dynamic Programming",
        description: {
            text: "Given an integer array nums, find a subarray that has the largest product, and return the product.",
            notes: [
                "The test cases are generated so that the answer will fit in a 32-bit integer.",
                "A subarray is a contiguous non-empty sequence of elements within the array."
            ],
        },
        examples: [
            {
                input: "nums = [2,3,-2,4]",
                output: "6",
                explanation: "[2,3] has the largest product 6.",
            },
            {
                input: "nums = [-2,0,-1]",
                output: "0",
                explanation: "The result is 0, as you cannot get a product larger than 0.",
            },
        ],
        constraints: [
            "1 ≤ nums.length ≤ 2 * 10⁴",
            "-10 ≤ nums[i] ≤ 10",
        ],
        starterCode: {
            javascript: `function maxProduct(nums) {
    // Write your solution here
    
}

// Test cases
console.log(maxProduct([2,3,-2,4])); // Expected: 6
console.log(maxProduct([-2,0,-1])); // Expected: 0`,

            typescript: `function maxProduct(nums: number[]): number {
    // Write your solution here
    
}

// Test cases
console.log(maxProduct([2,3,-2,4])); // Expected: 6
console.log(maxProduct([-2,0,-1])); // Expected: 0`,

            python: `def maxProduct(nums):
    # Write your solution here
    pass

# Test cases
print(maxProduct([2,3,-2,4]))  # Expected: 6
print(maxProduct([-2,0,-1]))  # Expected: 0`,

            java: `class Solution {
    public static int maxProduct(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxProduct(new int[]{2,3,-2,4})); // Expected: 6
        System.out.println(maxProduct(new int[]{-2,0,-1})); // Expected: 0
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int maxProduct(vector<int>& nums) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {2,3,-2,4};
    cout << maxProduct(nums1) << endl; // Expected: 6
    
    vector<int> nums2 = {-2,0,-1};
    cout << maxProduct(nums2) << endl; // Expected: 0
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <limits.h>

int maxProduct(int* nums, int numsSize) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {2,3,-2,4};
    printf("%d\\n", maxProduct(nums1, 4)); // Expected: 6
    
    int nums2[] = {-2,0,-1};
    printf("%d\\n", maxProduct(nums2, 3)); // Expected: 0
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int MaxProduct(int[] nums) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(MaxProduct(new int[] {2,3,-2,4})); // Expected: 6
        Console.WriteLine(MaxProduct(new int[] {-2,0,-1})); // Expected: 0
    }
}`,

            go: `package main

import "fmt"

func maxProduct(nums []int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(maxProduct([]int{2,3,-2,4})) // Expected: 6
    fmt.Println(maxProduct([]int{-2,0,-1})) // Expected: 0
}`,

            rust: `fn max_product(nums: Vec<i32>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", max_product(vec![2,3,-2,4])); // Expected: 6
    println!("{}", max_product(vec![-2,0,-1])); // Expected: 0
}`,

            ruby: `def max_product(nums)
    # Write your solution here
    
end

# Test cases
puts max_product([2,3,-2,4]) # Expected: 6
puts max_product([-2,0,-1]) # Expected: 0`,

            php: `<?php
function maxProduct($nums) {
    // Write your solution here
    
}

// Test cases
echo maxProduct([2,3,-2,4]) . "\\n"; // Expected: 6
echo maxProduct([-2,0,-1]) . "\\n"; // Expected: 0
?>`,

            swift: `func maxProduct(_ nums: [Int]) -> Int {
    // Write your solution here
    
}

// Test cases
print(maxProduct([2,3,-2,4])) // Expected: 6
print(maxProduct([-2,0,-1])) // Expected: 0`,

            kotlin: `fun maxProduct(nums: IntArray): Int {
    // Write your solution here
    
}

fun main() {
    println(maxProduct(intArrayOf(2,3,-2,4))) // Expected: 6
    println(maxProduct(intArrayOf(-2,0,-1))) // Expected: 0
}`,

            scala: `object Solution {
    def maxProduct(nums: Array[Int]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(maxProduct(Array(2,3,-2,4))) // Expected: 6
        println(maxProduct(Array(-2,0,-1))) // Expected: 0
    }
}`,

            perl: `sub maxProduct {
    my $nums = shift;
    # Write your solution here
    
}

# Test cases
print maxProduct([2,3,-2,4]) . "\\n"; # Expected: 6
print maxProduct([-2,0,-1]) . "\\n"; # Expected: 0`,

            r: `maxProduct <- function(nums) {
    # Write your solution here
    
}

# Test cases
print(maxProduct(c(2,3,-2,4))) # Expected: 6
print(maxProduct(c(-2,0,-1))) # Expected: 0`
        },
        expectedOutput: {
            javascript: "6\n0",
            python: "6\n0",
            java: "6\n0",
        },
    },

    "find-minimum-in-rotated-sorted-array": {
        id: "find-minimum-in-rotated-sorted-array",
        title: "Find Minimum in Rotated Sorted Array",
        difficulty: "Medium",
        category: "Array • Binary Search",
        description: {
            text: "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of unique elements, return the minimum element of this array.",
            notes: [
                "You must write an algorithm that runs in O(log n) time.",
                "All elements are unique."
            ],
        },
        examples: [
            {
                input: "nums = [3,4,5,1,2]",
                output: "1",
                explanation: "The original array was [1,2,3,4,5] rotated 3 times.",
            },
            {
                input: "nums = [4,5,6,7,0,1,2]",
                output: "0",
            },
            {
                input: "nums = [11,13,15,17]",
                output: "11",
                explanation: "The array was rotated 4 times (or not rotated at all).",
            },
        ],
        constraints: [
            "n == nums.length",
            "1 ≤ n ≤ 5000",
            "-5000 ≤ nums[i] ≤ 5000",
            "All elements are unique",
            "nums was originally sorted in ascending order",
        ],
        starterCode: {
            javascript: `function findMin(nums) {
    // Write your solution here
    
}

// Test cases
console.log(findMin([3,4,5,1,2])); // Expected: 1
console.log(findMin([4,5,6,7,0,1,2])); // Expected: 0
console.log(findMin([11,13,15,17])); // Expected: 11`,

            typescript: `function findMin(nums: number[]): number {
    // Write your solution here
    
}

// Test cases
console.log(findMin([3,4,5,1,2])); // Expected: 1
console.log(findMin([4,5,6,7,0,1,2])); // Expected: 0
console.log(findMin([11,13,15,17])); // Expected: 11`,

            python: `def findMin(nums):
    # Write your solution here
    pass

# Test cases
print(findMin([3,4,5,1,2]))  # Expected: 1
print(findMin([4,5,6,7,0,1,2]))  # Expected: 0
print(findMin([11,13,15,17]))  # Expected: 11`,

            java: `class Solution {
    public static int findMin(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(findMin(new int[]{3,4,5,1,2})); // Expected: 1
        System.out.println(findMin(new int[]{4,5,6,7,0,1,2})); // Expected: 0
        System.out.println(findMin(new int[]{11,13,15,17})); // Expected: 11
    }
}`,

            cpp: `#include <iostream>
#include <vector>
using namespace std;

int findMin(vector<int>& nums) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {3,4,5,1,2};
    cout << findMin(nums1) << endl; // Expected: 1
    
    vector<int> nums2 = {4,5,6,7,0,1,2};
    cout << findMin(nums2) << endl; // Expected: 0
    
    vector<int> nums3 = {11,13,15,17};
    cout << findMin(nums3) << endl; // Expected: 11
    
    return 0;
}`,

            c: `#include <stdio.h>

int findMin(int* nums, int numsSize) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {3,4,5,1,2};
    printf("%d\\n", findMin(nums1, 5)); // Expected: 1
    
    int nums2[] = {4,5,6,7,0,1,2};
    printf("%d\\n", findMin(nums2, 7)); // Expected: 0
    
    int nums3[] = {11,13,15,17};
    printf("%d\\n", findMin(nums3, 4)); // Expected: 11
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int FindMin(int[] nums) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(FindMin(new int[] {3,4,5,1,2})); // Expected: 1
        Console.WriteLine(FindMin(new int[] {4,5,6,7,0,1,2})); // Expected: 0
        Console.WriteLine(FindMin(new int[] {11,13,15,17})); // Expected: 11
    }
}`,

            go: `package main

import "fmt"

func findMin(nums []int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(findMin([]int{3,4,5,1,2})) // Expected: 1
    fmt.Println(findMin([]int{4,5,6,7,0,1,2})) // Expected: 0
    fmt.Println(findMin([]int{11,13,15,17})) // Expected: 11
}`,

            rust: `fn find_min(nums: Vec<i32>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", find_min(vec![3,4,5,1,2])); // Expected: 1
    println!("{}", find_min(vec![4,5,6,7,0,1,2])); // Expected: 0
    println!("{}", find_min(vec![11,13,15,17])); // Expected: 11
}`,

            ruby: `def find_min(nums)
    # Write your solution here
    
end

# Test cases
puts find_min([3,4,5,1,2]) # Expected: 1
puts find_min([4,5,6,7,0,1,2]) # Expected: 0
puts find_min([11,13,15,17]) # Expected: 11`,

            php: `<?php
function findMin($nums) {
    // Write your solution here
    
}

// Test cases
echo findMin([3,4,5,1,2]) . "\\n"; // Expected: 1
echo findMin([4,5,6,7,0,1,2]) . "\\n"; // Expected: 0
echo findMin([11,13,15,17]) . "\\n"; // Expected: 11
?>`,

            swift: `func findMin(_ nums: [Int]) -> Int {
    // Write your solution here
    
}

// Test cases
print(findMin([3,4,5,1,2])) // Expected: 1
print(findMin([4,5,6,7,0,1,2])) // Expected: 0
print(findMin([11,13,15,17])) // Expected: 11`,

            kotlin: `fun findMin(nums: IntArray): Int {
    // Write your solution here
    
}

fun main() {
    println(findMin(intArrayOf(3,4,5,1,2))) // Expected: 1
    println(findMin(intArrayOf(4,5,6,7,0,1,2))) // Expected: 0
    println(findMin(intArrayOf(11,13,15,17))) // Expected: 11
}`,

            scala: `object Solution {
    def findMin(nums: Array[Int]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(findMin(Array(3,4,5,1,2))) // Expected: 1
        println(findMin(Array(4,5,6,7,0,1,2))) // Expected: 0
        println(findMin(Array(11,13,15,17))) // Expected: 11
    }
}`,

            perl: `sub findMin {
    my $nums = shift;
    # Write your solution here
    
}

# Test cases
print findMin([3,4,5,1,2]) . "\\n"; # Expected: 1
print findMin([4,5,6,7,0,1,2]) . "\\n"; # Expected: 0
print findMin([11,13,15,17]) . "\\n"; # Expected: 11`,

            r: `findMin <- function(nums) {
    # Write your solution here
    
}

# Test cases
print(findMin(c(3,4,5,1,2))) # Expected: 1
print(findMin(c(4,5,6,7,0,1,2))) # Expected: 0
print(findMin(c(11,13,15,17))) # Expected: 11`
        },
        expectedOutput: {
            javascript: "1\n0\n11",
            python: "1\n0\n11",
            java: "1\n0\n11",
        },
    },

    "search-in-rotated-sorted-array": {
        id: "search-in-rotated-sorted-array",
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        category: "Array • Binary Search",
        description: {
            text: "There is an integer array nums sorted in ascending order (with distinct values) that is rotated at an unknown pivot. Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
            notes: [
                "You must write an algorithm with O(log n) runtime complexity.",
                "All values are unique."
            ],
        },
        examples: [
            {
                input: "nums = [4,5,6,7,0,1,2], target = 0",
                output: "4",
            },
            {
                input: "nums = [4,5,6,7,0,1,2], target = 3",
                output: "-1",
            },
            {
                input: "nums = [1], target = 0",
                output: "-1",
            },
        ],
        constraints: [
            "1 ≤ nums.length ≤ 5000",
            "-10⁴ ≤ nums[i] ≤ 10⁴",
            "All values are unique",
            "nums was originally sorted in ascending order",
            "-10⁴ ≤ target ≤ 10⁴",
        ],
        starterCode: {
            javascript: `function search(nums, target) {
    // Write your solution here
    
}

// Test cases
console.log(search([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Expected: -1
console.log(search([1], 0)); // Expected: -1`,

            typescript: `function search(nums: number[], target: number): number {
    // Write your solution here
    
}

// Test cases
console.log(search([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Expected: -1
console.log(search([1], 0)); // Expected: -1`,

            python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([4,5,6,7,0,1,2], 0))  # Expected: 4
print(search([4,5,6,7,0,1,2], 3))  # Expected: -1
print(search([1], 0))  # Expected: -1`,

            java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 0)); // Expected: 4
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 3)); // Expected: -1
        System.out.println(search(new int[]{1}, 0)); // Expected: -1
    }
}`,

            cpp: `#include <iostream>
#include <vector>
using namespace std;

int search(vector<int>& nums, int target) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {4,5,6,7,0,1,2};
    cout << search(nums1, 0) << endl; // Expected: 4
    cout << search(nums1, 3) << endl; // Expected: -1
    
    vector<int> nums2 = {1};
    cout << search(nums2, 0) << endl; // Expected: -1
    
    return 0;
}`,

            c: `#include <stdio.h>

int search(int* nums, int numsSize, int target) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {4,5,6,7,0,1,2};
    printf("%d\\n", search(nums1, 7, 0)); // Expected: 4
    printf("%d\\n", search(nums1, 7, 3)); // Expected: -1
    
    int nums2[] = {1};
    printf("%d\\n", search(nums2, 1, 0)); // Expected: -1
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int Search(int[] nums, int target) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(Search(new int[] {4,5,6,7,0,1,2}, 0)); // Expected: 4
        Console.WriteLine(Search(new int[] {4,5,6,7,0,1,2}, 3)); // Expected: -1
        Console.WriteLine(Search(new int[] {1}, 0)); // Expected: -1
    }
}`,

            go: `package main

import "fmt"

func search(nums []int, target int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(search([]int{4,5,6,7,0,1,2}, 0)) // Expected: 4
    fmt.Println(search([]int{4,5,6,7,0,1,2}, 3)) // Expected: -1
    fmt.Println(search([]int{1}, 0)) // Expected: -1
}`,

            rust: `fn search(nums: Vec<i32>, target: i32) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", search(vec![4,5,6,7,0,1,2], 0)); // Expected: 4
    println!("{}", search(vec![4,5,6,7,0,1,2], 3)); // Expected: -1
    println!("{}", search(vec![1], 0)); // Expected: -1
}`,

            ruby: `def search(nums, target)
    # Write your solution here
    
end

# Test cases
puts search([4,5,6,7,0,1,2], 0) # Expected: 4
puts search([4,5,6,7,0,1,2], 3) # Expected: -1
puts search([1], 0) # Expected: -1`,

            php: `<?php
function search($nums, $target) {
    // Write your solution here
    
}

// Test cases
echo search([4,5,6,7,0,1,2], 0) . "\\n"; // Expected: 4
echo search([4,5,6,7,0,1,2], 3) . "\\n"; // Expected: -1
echo search([1], 0) . "\\n"; // Expected: -1
?>`,

            swift: `func search(_ nums: [Int], _ target: Int) -> Int {
    // Write your solution here
    
}

// Test cases
print(search([4,5,6,7,0,1,2], 0)) // Expected: 4
print(search([4,5,6,7,0,1,2], 3)) // Expected: -1
print(search([1], 0)) // Expected: -1`,

            kotlin: `fun search(nums: IntArray, target: Int): Int {
    // Write your solution here
    
}

fun main() {
    println(search(intArrayOf(4,5,6,7,0,1,2), 0)) // Expected: 4
    println(search(intArrayOf(4,5,6,7,0,1,2), 3)) // Expected: -1
    println(search(intArrayOf(1), 0)) // Expected: -1
}`,

            scala: `object Solution {
    def search(nums: Array[Int], target: Int): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(search(Array(4,5,6,7,0,1,2), 0)) // Expected: 4
        println(search(Array(4,5,6,7,0,1,2), 3)) // Expected: -1
        println(search(Array(1), 0)) // Expected: -1
    }
}`,

            perl: `sub search {
    my ($nums, $target) = @_;
    # Write your solution here
    
}

# Test cases
print search([4,5,6,7,0,1,2], 0) . "\\n"; # Expected: 4
print search([4,5,6,7,0,1,2], 3) . "\\n"; # Expected: -1
print search([1], 0) . "\\n"; # Expected: -1`,

            r: `search <- function(nums, target) {
    # Write your solution here
    
}

# Test cases
print(search(c(4,5,6,7,0,1,2), 0)) # Expected: 4
print(search(c(4,5,6,7,0,1,2), 3)) # Expected: -1
print(search(c(1), 0)) # Expected: -1`
        },
        expectedOutput: {
            javascript: "4\n-1\n-1",
            python: "4\n-1\n-1",
            java: "4\n-1\n-1",
        },
    },

    "3sum": {
        id: "3sum",
        title: "3Sum",
        difficulty: "Medium",
        category: "Array • Two Pointers • Sorting",
        description: {
            text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
            notes: [
                "The solution set must not contain duplicate triplets.",
                "Return the triplets in any order."
            ],
        },
        examples: [
            {
                input: "nums = [-1,0,1,2,-1,-4]",
                output: "[[-1,-1,2],[-1,0,1]]",
            },
            {
                input: "nums = [0,1,1]",
                output: "[]",
            },
            {
                input: "nums = [0,0,0]",
                output: "[[0,0,0]]",
            },
        ],
        constraints: [
            "3 ≤ nums.length ≤ 3000",
            "-10⁵ ≤ nums[i] ≤ 10⁵",
        ],
        starterCode: {
            javascript: `function threeSum(nums) {
    // Write your solution here
    
}

// Test cases
console.log(threeSum([-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // Expected: []
console.log(threeSum([0,0,0])); // Expected: [[0,0,0]]`,

            typescript: `function threeSum(nums: number[]): number[][] {
    // Write your solution here
    
}

// Test cases
console.log(threeSum([-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // Expected: []
console.log(threeSum([0,0,0])); // Expected: [[0,0,0]]`,

            python: `def threeSum(nums):
    # Write your solution here
    pass

# Test cases
print(threeSum([-1,0,1,2,-1,-4]))  # Expected: [[-1,-1,2],[-1,0,1]]
print(threeSum([0,1,1]))  # Expected: []
print(threeSum([0,0,0]))  # Expected: [[0,0,0]]`,

            java: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4})); // Expected: [[-1,-1,2],[-1,0,1]]
        System.out.println(threeSum(new int[]{0,1,1})); // Expected: []
        System.out.println(threeSum(new int[]{0,0,0})); // Expected: [[0,0,0]]
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> threeSum(vector<int>& nums) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {-1,0,1,2,-1,-4};
    vector<vector<int>> result1 = threeSum(nums1);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << "[";
        for (size_t j = 0; j < result1[i].size(); j++) {
            cout << result1[i][j];
            if (j < result1[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: [[-1,-1,2],[-1,0,1]]
    
    vector<int> nums2 = {0,1,1};
    vector<vector<int>> result2 = threeSum(nums2);
    cout << "[";
    for (size_t i = 0; i < result2.size(); i++) {
        cout << "[";
        for (size_t j = 0; j < result2[i].size(); j++) {
            cout << result2[i][j];
            if (j < result2[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < result2.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: []
    
    vector<int> nums3 = {0,0,0};
    vector<vector<int>> result3 = threeSum(nums3);
    cout << "[";
    for (size_t i = 0; i < result3.size(); i++) {
        cout << "[";
        for (size_t j = 0; j < result3[i].size(); j++) {
            cout << result3[i][j];
            if (j < result3[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < result3.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: [[0,0,0]]
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int** threeSum(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {-1,0,1,2,-1,-4};
    int returnSize1;
    int* returnColumnSizes1;
    int** result1 = threeSum(nums1, 6, &returnSize1, &returnColumnSizes1);
    printf("[");
    for (int i = 0; i < returnSize1; i++) {
        printf("[");
        for (int j = 0; j < returnColumnSizes1[i]; j++) {
            printf("%d", result1[i][j]);
            if (j < returnColumnSizes1[i] - 1) printf(",");
        }
        printf("]");
        if (i < returnSize1 - 1) printf(",");
    }
    printf("]\\n"); // Expected: [[-1,-1,2],[-1,0,1]]
    
    int nums2[] = {0,1,1};
    int returnSize2;
    int* returnColumnSizes2;
    int** result2 = threeSum(nums2, 3, &returnSize2, &returnColumnSizes2);
    printf("[");
    for (int i = 0; i < returnSize2; i++) {
        printf("[");
        for (int j = 0; j < returnColumnSizes2[i]; j++) {
            printf("%d", result2[i][j]);
            if (j < returnColumnSizes2[i] - 1) printf(",");
        }
        printf("]");
        if (i < returnSize2 - 1) printf(",");
    }
    printf("]\\n"); // Expected: []
    
    int nums3[] = {0,0,0};
    int returnSize3;
    int* returnColumnSizes3;
    int** result3 = threeSum(nums3, 3, &returnSize3, &returnColumnSizes3);
    printf("[");
    for (int i = 0; i < returnSize3; i++) {
        printf("[");
        for (int j = 0; j < returnColumnSizes3[i]; j++) {
            printf("%d", result3[i][j]);
            if (j < returnColumnSizes3[i] - 1) printf(",");
        }
        printf("]");
        if (i < returnSize3 - 1) printf(",");
    }
    printf("]\\n"); // Expected: [[0,0,0]]
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<IList<int>> ThreeSum(int[] nums) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(string.Join(",", ThreeSum(new int[] {-1,0,1,2,-1,-4}).Select(x => "[" + string.Join(",", x) + "]"))); // Expected: [-1,-1,2],[-1,0,1]
        Console.WriteLine(string.Join(",", ThreeSum(new int[] {0,1,1}).Select(x => "[" + string.Join(",", x) + "]"))); // Expected: 
        Console.WriteLine(string.Join(",", ThreeSum(new int[] {0,0,0}).Select(x => "[" + string.Join(",", x) + "]"))); // Expected: [0,0,0]
    }
}`,

            go: `package main

import (
    "fmt"
    "sort"
)

func threeSum(nums []int) [][]int {
    // Write your solution here
    
}

func main() {
    fmt.Println(threeSum([]int{-1,0,1,2,-1,-4})) // Expected: [[-1,-1,2],[-1,0,1]]
    fmt.Println(threeSum([]int{0,1,1})) // Expected: []
    fmt.Println(threeSum([]int{0,0,0})) // Expected: [[0,0,0]]
}`,

            rust: `fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", three_sum(vec![-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]]
    println!("{:?}", three_sum(vec![0,1,1])); // Expected: []
    println!("{:?}", three_sum(vec![0,0,0])); // Expected: [[0,0,0]]
}`,

            ruby: `def three_sum(nums)
    # Write your solution here
    
end

# Test cases
puts three_sum([-1,0,1,2,-1,-4]).inspect # Expected: [[-1,-1,2],[-1,0,1]]
puts three_sum([0,1,1]).inspect # Expected: []
puts three_sum([0,0,0]).inspect # Expected: [[0,0,0]]`,

            php: `<?php
function threeSum($nums) {
    // Write your solution here
    
}

// Test cases
print_r(threeSum([-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]]
print_r(threeSum([0,1,1])); // Expected: []
print_r(threeSum([0,0,0])); // Expected: [[0,0,0]]
?>`,

            swift: `func threeSum(_ nums: [Int]) -> [[Int]] {
    // Write your solution here
    
}

// Test cases
print(threeSum([-1,0,1,2,-1,-4])) // Expected: [[-1,-1,2],[-1,0,1]]
print(threeSum([0,1,1])) // Expected: []
print(threeSum([0,0,0])) // Expected: [[0,0,0]]`,

            kotlin: `fun threeSum(nums: IntArray): List<List<Int>> {
    // Write your solution here
    
}

fun main() {
    println(threeSum(intArrayOf(-1,0,1,2,-1,-4))) // Expected: [[-1,-1,2],[-1,0,1]]
    println(threeSum(intArrayOf(0,1,1))) // Expected: []
    println(threeSum(intArrayOf(0,0,0))) // Expected: [[0,0,0]]
}`,

            scala: `import scala.collection.mutable.ListBuffer

object Solution {
    def threeSum(nums: Array[Int]): List[List[Int]] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(threeSum(Array(-1,0,1,2,-1,-4))) // Expected: List(List(-1,-1,2), List(-1,0,1))
        println(threeSum(Array(0,1,1))) // Expected: List()
        println(threeSum(Array(0,0,0))) // Expected: List(List(0,0,0))
    }
}`,

            perl: `sub threeSum {
    my $nums = shift;
    # Write your solution here
    
}

# Test cases
my @result1 = @{threeSum([-1,0,1,2,-1,-4])};
print "[";
for my $i (0..$#result1) {
    print "[" . join(",", @{$result1[$i]}) . "]";
    print "," if $i < $#result1;
}
print "]\\n"; # Expected: [[-1,-1,2],[-1,0,1]]

my @result2 = @{threeSum([0,1,1])};
print "[";
for my $i (0..$#result2) {
    print "[" . join(",", @{$result2[$i]}) . "]";
    print "," if $i < $#result2;
}
print "]\\n"; # Expected: []

my @result3 = @{threeSum([0,0,0])};
print "[";
for my $i (0..$#result3) {
    print "[" . join(",", @{$result3[$i]}) . "]";
    print "," if $i < $#result3;
}
print "]\\n"; # Expected: [[0,0,0]]`,

            r: `threeSum <- function(nums) {
    # Write your solution here
    
}

# Test cases
print(threeSum(c(-1,0,1,2,-1,-4))) # Expected: list(list(-1,-1,2), list(-1,0,1))
print(threeSum(c(0,1,1))) # Expected: list()
print(threeSum(c(0,0,0))) # Expected: list(list(0,0,0))`
        },
        expectedOutput: {
            javascript: "[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]",
            python: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
            java: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
        },
    },

    "group-anagrams": {
        id: "group-anagrams",
        title: "Group Anagrams",
        difficulty: "Medium",
        category: "String • Hash Table • Sorting",
        description: {
            text: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
            notes: [
                "An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
                "All inputs consist of lowercase English letters."
            ],
        },
        examples: [
            {
                input: "strs = ['eat','tea','tan','ate','nat','bat']",
                output: "[['bat'],['nat','tan'],['ate','eat','tea']]",
            },
            {
                input: "strs = ['']",
                output: "[['']]",
            },
            {
                input: "strs = ['a']",
                output: "[['a']]",
            },
        ],
        constraints: [
            "1 ≤ strs.length ≤ 10⁴",
            "0 ≤ strs[i].length ≤ 100",
            "strs[i] consists of lowercase English letters",
        ],
        starterCode: {
            javascript: `function groupAnagrams(strs) {
    // Write your solution here
    
}

// Test cases
console.log(groupAnagrams(['eat','tea','tan','ate','nat','bat'])); 
// Expected: [['bat'],['nat','tan'],['ate','eat','tea']]
console.log(groupAnagrams([''])); // Expected: [['']]
console.log(groupAnagrams(['a'])); // Expected: [['a']]`,

            typescript: `function groupAnagrams(strs: string[]): string[][] {
    // Write your solution here
    
}

// Test cases
console.log(groupAnagrams(['eat','tea','tan','ate','nat','bat'])); 
// Expected: [['bat'],['nat','tan'],['ate','eat','tea']]
console.log(groupAnagrams([''])); // Expected: [['']]
console.log(groupAnagrams(['a'])); // Expected: [['a']]`,

            python: `def groupAnagrams(strs):
    # Write your solution here
    pass

# Test cases
print(groupAnagrams(['eat','tea','tan','ate','nat','bat']))  
# Expected: [['bat'],['nat','tan'],['ate','eat','tea']]
print(groupAnagrams(['']))  # Expected: [['']]
print(groupAnagrams(['a']))  # Expected: [['a']]`,

            java: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"})); 
        // Expected: [[bat], [nat, tan], [ate, eat, tea]]
        System.out.println(groupAnagrams(new String[]{""})); // Expected: [[]]
        System.out.println(groupAnagrams(new String[]{"a"})); // Expected: [[a]]
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

vector<vector<string>> groupAnagrams(vector<string>& strs) {
    // Write your solution here
    
}

int main() {
    vector<string> strs1 = {"eat","tea","tan","ate","nat","bat"};
    vector<vector<string>> result1 = groupAnagrams(strs1);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << "[";
        for (size_t j = 0; j < result1[i].size(); j++) {
            cout << result1[i][j];
            if (j < result1[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    vector<string> strs2 = {""};
    vector<vector<string>> result2 = groupAnagrams(strs2);
    cout << "[";
    for (size_t i = 0; i < result2.size(); i++) {
        cout << "[";
        for (size_t j = 0; j < result2[i].size(); j++) {
            cout << result2[i][j];
            if (j < result2[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < result2.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    vector<string> strs3 = {"a"};
    vector<vector<string>> result3 = groupAnagrams(strs3);
    cout << "[";
    for (size_t i = 0; i < result3.size(); i++) {
        cout << "[";
        for (size_t j = 0; j < result3[i].size(); j++) {
            cout << result3[i][j];
            if (j < result3[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < result3.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char*** groupAnagrams(char** strs, int strsSize, int* returnSize, int** returnColumnSizes) {
    // Write your solution here
    
}

int main() {
    char* strs1[] = {"eat","tea","tan","ate","nat","bat"};
    int returnSize1;
    int* returnColumnSizes1;
    char*** result1 = groupAnagrams(strs1, 6, &returnSize1, &returnColumnSizes1);
    printf("[");
    for (int i = 0; i < returnSize1; i++) {
        printf("[");
        for (int j = 0; j < returnColumnSizes1[i]; j++) {
            printf("%s", result1[i][j]);
            if (j < returnColumnSizes1[i] - 1) printf(",");
        }
        printf("]");
        if (i < returnSize1 - 1) printf(",");
    }
    printf("]\\n");
    
    char* strs2[] = {""};
    int returnSize2;
    int* returnColumnSizes2;
    char*** result2 = groupAnagrams(strs2, 1, &returnSize2, &returnColumnSizes2);
    printf("[");
    for (int i = 0; i < returnSize2; i++) {
        printf("[");
        for (int j = 0; j < returnColumnSizes2[i]; j++) {
            printf("%s", result2[i][j]);
            if (j < returnColumnSizes2[i] - 1) printf(",");
        }
        printf("]");
        if (i < returnSize2 - 1) printf(",");
    }
    printf("]\\n");
    
    char* strs3[] = {"a"};
    int returnSize3;
    int* returnColumnSizes3;
    char*** result3 = groupAnagrams(strs3, 1, &returnSize3, &returnColumnSizes3);
    printf("[");
    for (int i = 0; i < returnSize3; i++) {
        printf("[");
        for (int j = 0; j < returnColumnSizes3[i]; j++) {
            printf("%s", result3[i][j]);
            if (j < returnColumnSizes3[i] - 1) printf(",");
        }
        printf("]");
        if (i < returnSize3 - 1) printf(",");
    }
    printf("]\\n");
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;
using System.Linq;

class Solution {
    public static IList<IList<string>> GroupAnagrams(string[] strs) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(string.Join(",", GroupAnagrams(new string[] {"eat","tea","tan","ate","nat","bat"}).Select(x => "[" + string.Join(",", x) + "]")));
        Console.WriteLine(string.Join(",", GroupAnagrams(new string[] {""}).Select(x => "[" + string.Join(",", x) + "]")));
        Console.WriteLine(string.Join(",", GroupAnagrams(new string[] {"a"}).Select(x => "[" + string.Join(",", x) + "]")));
    }
}`,

            go: `package main

import (
    "fmt"
    "sort"
)

func groupAnagrams(strs []string) [][]string {
    // Write your solution here
    
}

func main() {
    fmt.Println(groupAnagrams([]string{"eat","tea","tan","ate","nat","bat"}))
    fmt.Println(groupAnagrams([]string{""}))
    fmt.Println(groupAnagrams([]string{"a"}))
}`,

            rust: `use std::collections::HashMap;

fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", group_anagrams(vec!["eat".to_string(), "tea".to_string(), "tan".to_string(), "ate".to_string(), "nat".to_string(), "bat".to_string()]));
    println!("{:?}", group_anagrams(vec!["".to_string()]));
    println!("{:?}", group_anagrams(vec!["a".to_string()]));
}`,

            ruby: `def group_anagrams(strs)
    # Write your solution here
    
end

# Test cases
puts group_anagrams(['eat','tea','tan','ate','nat','bat']).inspect
puts group_anagrams(['']).inspect
puts group_anagrams(['a']).inspect`,

            php: `<?php
function groupAnagrams($strs) {
    // Write your solution here
    
}

// Test cases
print_r(groupAnagrams(['eat','tea','tan','ate','nat','bat']));
print_r(groupAnagrams(['']));
print_r(groupAnagrams(['a']));
?>`,

            swift: `func groupAnagrams(_ strs: [String]) -> [[String]] {
    // Write your solution here
    
}

// Test cases
print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
print(groupAnagrams([""]))
print(groupAnagrams(["a"]))`,

            kotlin: `fun groupAnagrams(strs: Array<String>): List<List<String>> {
    // Write your solution here
    
}

fun main() {
    println(groupAnagrams(arrayOf("eat","tea","tan","ate","nat","bat")))
    println(groupAnagrams(arrayOf("")))
    println(groupAnagrams(arrayOf("a")))
}`,

            scala: `import scala.collection.mutable

object Solution {
    def groupAnagrams(strs: Array[String]): List[List[String]] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(groupAnagrams(Array("eat","tea","tan","ate","nat","bat")))
        println(groupAnagrams(Array("")))
        println(groupAnagrams(Array("a")))
    }
}`,

            perl: `sub groupAnagrams {
    my $strs = shift;
    # Write your solution here
    
}

# Test cases
use Data::Dumper;
print Dumper(groupAnagrams(['eat','tea','tan','ate','nat','bat']));
print Dumper(groupAnagrams(['']));
print Dumper(groupAnagrams(['a']));`,

            r: `groupAnagrams <- function(strs) {
    # Write your solution here
    
}

# Test cases
print(groupAnagrams(c('eat','tea','tan','ate','nat','bat')))
print(groupAnagrams(c('')))
print(groupAnagrams(c('a')))`
        },
        expectedOutput: {
            javascript: "[['bat'],['nat','tan'],['ate','eat','tea']]\n[['']]\n[['a']]",
            python: "[['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]\n[['']]\n[['a']]",
            java: "[[bat], [nat, tan], [ate, eat, tea]]\n[[]]\n[[a]]",
        },
    },

    "longest-substring-without-repeating-characters": {
        id: "longest-substring-without-repeating-characters",
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        category: "String • Sliding Window • Hash Table",
        description: {
            text: "Given a string s, find the length of the longest substring without repeating characters.",
            notes: [
                "A substring is a contiguous non-empty sequence of characters within the string.",
                "The answer must be a substring, not a subsequence."
            ],
        },
        examples: [
            {
                input: "s = 'abcabcbb'",
                output: "3",
                explanation: "The answer is 'abc', with the length of 3.",
            },
            {
                input: "s = 'bbbbb'",
                output: "1",
                explanation: "The answer is 'b', with the length of 1.",
            },
            {
                input: "s = 'pwwkew'",
                output: "3",
                explanation: "The answer is 'wke', with the length of 3.",
            },
        ],
        constraints: [
            "0 ≤ s.length ≤ 5 * 10⁴",
            "s consists of English letters, digits, symbols and spaces",
        ],
        starterCode: {
            javascript: `function lengthOfLongestSubstring(s) {
    // Write your solution here
    
}

// Test cases
console.log(lengthOfLongestSubstring('abcabcbb')); // Expected: 3
console.log(lengthOfLongestSubstring('bbbbb')); // Expected: 1
console.log(lengthOfLongestSubstring('pwwkew')); // Expected: 3`,

            typescript: `function lengthOfLongestSubstring(s: string): number {
    // Write your solution here
    
}

// Test cases
console.log(lengthOfLongestSubstring('abcabcbb')); // Expected: 3
console.log(lengthOfLongestSubstring('bbbbb')); // Expected: 1
console.log(lengthOfLongestSubstring('pwwkew')); // Expected: 3`,

            python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring('abcabcbb'))  # Expected: 3
print(lengthOfLongestSubstring('bbbbb'))  # Expected: 1
print(lengthOfLongestSubstring('pwwkew'))  # Expected: 3`,

            java: `import java.util.*;

class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb")); // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew")); // Expected: 3
    }
}`,

            cpp: `#include <iostream>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

int lengthOfLongestSubstring(string s) {
    // Write your solution here
    
}

int main() {
    cout << lengthOfLongestSubstring("abcabcbb") << endl; // Expected: 3
    cout << lengthOfLongestSubstring("bbbbb") << endl; // Expected: 1
    cout << lengthOfLongestSubstring("pwwkew") << endl; // Expected: 3
    return 0;
}`,

            c: `#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char* s) {
    // Write your solution here
    
}

int main() {
    printf("%d\\n", lengthOfLongestSubstring("abcabcbb")); // Expected: 3
    printf("%d\\n", lengthOfLongestSubstring("bbbbb")); // Expected: 1
    printf("%d\\n", lengthOfLongestSubstring("pwwkew")); // Expected: 3
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int LengthOfLongestSubstring(string s) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(LengthOfLongestSubstring("abcabcbb")); // Expected: 3
        Console.WriteLine(LengthOfLongestSubstring("bbbbb")); // Expected: 1
        Console.WriteLine(LengthOfLongestSubstring("pwwkew")); // Expected: 3
    }
}`,

            go: `package main

import "fmt"

func lengthOfLongestSubstring(s string) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(lengthOfLongestSubstring("abcabcbb")) // Expected: 3
    fmt.Println(lengthOfLongestSubstring("bbbbb")) // Expected: 1
    fmt.Println(lengthOfLongestSubstring("pwwkew")) // Expected: 3
}`,

            rust: `use std::collections::HashMap;

fn length_of_longest_substring(s: String) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", length_of_longest_substring("abcabcbb".to_string())); // Expected: 3
    println!("{}", length_of_longest_substring("bbbbb".to_string())); // Expected: 1
    println!("{}", length_of_longest_substring("pwwkew".to_string())); // Expected: 3
}`,

            ruby: `def length_of_longest_substring(s)
    # Write your solution here
    
end

# Test cases
puts length_of_longest_substring('abcabcbb') # Expected: 3
puts length_of_longest_substring('bbbbb') # Expected: 1
puts length_of_longest_substring('pwwkew') # Expected: 3`,

            php: `<?php
function lengthOfLongestSubstring($s) {
    // Write your solution here
    
}

// Test cases
echo lengthOfLongestSubstring('abcabcbb') . "\\n"; // Expected: 3
echo lengthOfLongestSubstring('bbbbb') . "\\n"; // Expected: 1
echo lengthOfLongestSubstring('pwwkew') . "\\n"; // Expected: 3
?>`,

            swift: `func lengthOfLongestSubstring(_ s: String) -> Int {
    // Write your solution here
    
}

// Test cases
print(lengthOfLongestSubstring("abcabcbb")) // Expected: 3
print(lengthOfLongestSubstring("bbbbb")) // Expected: 1
print(lengthOfLongestSubstring("pwwkew")) // Expected: 3`,

            kotlin: `fun lengthOfLongestSubstring(s: String): Int {
    // Write your solution here
    
}

fun main() {
    println(lengthOfLongestSubstring("abcabcbb")) // Expected: 3
    println(lengthOfLongestSubstring("bbbbb")) // Expected: 1
    println(lengthOfLongestSubstring("pwwkew")) // Expected: 3
}`,

            scala: `import scala.collection.mutable

object Solution {
    def lengthOfLongestSubstring(s: String): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(lengthOfLongestSubstring("abcabcbb")) // Expected: 3
        println(lengthOfLongestSubstring("bbbbb")) // Expected: 1
        println(lengthOfLongestSubstring("pwwkew")) // Expected: 3
    }
}`,

            perl: `sub lengthOfLongestSubstring {
    my $s = shift;
    # Write your solution here
    
}

# Test cases
print lengthOfLongestSubstring('abcabcbb') . "\\n"; # Expected: 3
print lengthOfLongestSubstring('bbbbb') . "\\n"; # Expected: 1
print lengthOfLongestSubstring('pwwkew') . "\\n"; # Expected: 3`,

            r: `lengthOfLongestSubstring <- function(s) {
    # Write your solution here
    
}

# Test cases
print(lengthOfLongestSubstring('abcabcbb')) # Expected: 3
print(lengthOfLongestSubstring('bbbbb')) # Expected: 1
print(lengthOfLongestSubstring('pwwkew')) # Expected: 3`
        },
        expectedOutput: {
            javascript: "3\n1\n3",
            python: "3\n1\n3",
            java: "3\n1\n3",
        },
    },

    "longest-palindromic-substring": {
        id: "longest-palindromic-substring",
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        category: "String • Dynamic Programming",
        description: {
            text: "Given a string s, return the longest palindromic substring in s.",
            notes: [
                "A palindrome reads the same forwards and backwards.",
                "If there are multiple, return any palindromic substring with the maximum length."
            ],
        },
        examples: [
            {
                input: "s = 'babad'",
                output: "'bab'",
                explanation: "'aba' is also a valid answer.",
            },
            {
                input: "s = 'cbbd'",
                output: "'bb'",
            },
        ],
        constraints: [
            "1 ≤ s.length ≤ 1000",
            "s consist of only digits and English letters",
        ],
        starterCode: {
            javascript: `function longestPalindrome(s) {
    // Write your solution here
    
}

// Test cases
console.log(longestPalindrome('babad')); // Expected: 'bab' or 'aba'
console.log(longestPalindrome('cbbd')); // Expected: 'bb'`,

            typescript: `function longestPalindrome(s: string): string {
    // Write your solution here
    
}

// Test cases
console.log(longestPalindrome('babad')); // Expected: 'bab' or 'aba'
console.log(longestPalindrome('cbbd')); // Expected: 'bb'`,

            python: `def longestPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(longestPalindrome('babad'))  # Expected: 'bab' or 'aba'
print(longestPalindrome('cbbd'))  # Expected: 'bb'`,

            java: `class Solution {
    public static String longestPalindrome(String s) {
        // Write your solution here
        
        return "";
    }
    
    public static void main(String[] args) {
        System.out.println(longestPalindrome("babad")); // Expected: "bab" or "aba"
        System.out.println(longestPalindrome("cbbd")); // Expected: "bb"
    }
}`,

            cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

string longestPalindrome(string s) {
    // Write your solution here
    
}

int main() {
    cout << longestPalindrome("babad") << endl; // Expected: "bab" or "aba"
    cout << longestPalindrome("cbbd") << endl; // Expected: "bb"
    return 0;
}`,

            c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* longestPalindrome(char* s) {
    // Write your solution here
    
}

int main() {
    char* result1 = longestPalindrome("babad");
    printf("%s\\n", result1); // Expected: "bab" or "aba"
    free(result1);
    
    char* result2 = longestPalindrome("cbbd");
    printf("%s\\n", result2); // Expected: "bb"
    free(result2);
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static string LongestPalindrome(string s) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(LongestPalindrome("babad")); // Expected: "bab" or "aba"
        Console.WriteLine(LongestPalindrome("cbbd")); // Expected: "bb"
    }
}`,

            go: `package main

import "fmt"

func longestPalindrome(s string) string {
    // Write your solution here
    
}

func main() {
    fmt.Println(longestPalindrome("babad")) // Expected: "bab" or "aba"
    fmt.Println(longestPalindrome("cbbd")) // Expected: "bb"
}`,

            rust: `fn longest_palindrome(s: String) -> String {
    // Write your solution here
    
}

fn main() {
    println!("{}", longest_palindrome("babad".to_string())); // Expected: "bab" or "aba"
    println!("{}", longest_palindrome("cbbd".to_string())); // Expected: "bb"
}`,

            ruby: `def longest_palindrome(s)
    # Write your solution here
    
end

# Test cases
puts longest_palindrome('babad') # Expected: 'bab' or 'aba'
puts longest_palindrome('cbbd') # Expected: 'bb'`,

            php: `<?php
function longestPalindrome($s) {
    // Write your solution here
    
}

// Test cases
echo longestPalindrome('babad') . "\\n"; // Expected: 'bab' or 'aba'
echo longestPalindrome('cbbd') . "\\n"; // Expected: 'bb'
?>`,

            swift: `func longestPalindrome(_ s: String) -> String {
    // Write your solution here
    
}

// Test cases
print(longestPalindrome("babad")) // Expected: "bab" or "aba"
print(longestPalindrome("cbbd")) // Expected: "bb"`,

            kotlin: `fun longestPalindrome(s: String): String {
    // Write your solution here
    
}

fun main() {
    println(longestPalindrome("babad")) // Expected: "bab" or "aba"
    println(longestPalindrome("cbbd")) // Expected: "bb"
}`,

            scala: `object Solution {
    def longestPalindrome(s: String): String = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(longestPalindrome("babad")) // Expected: "bab" or "aba"
        println(longestPalindrome("cbbd")) // Expected: "bb"
    }
}`,

            perl: `sub longestPalindrome {
    my $s = shift;
    # Write your solution here
    
}

# Test cases
print longestPalindrome('babad') . "\\n"; # Expected: 'bab' or 'aba'
print longestPalindrome('cbbd') . "\\n"; # Expected: 'bb'`,

            r: `longestPalindrome <- function(s) {
    # Write your solution here
    
}

# Test cases
print(longestPalindrome('babad')) # Expected: 'bab' or 'aba'
print(longestPalindrome('cbbd')) # Expected: 'bb'`
        },
        expectedOutput: {
            javascript: "bab\nbb",
            python: "bab\nbb",
            java: "bab\nbb",
        },
    },

    "palindromic-substrings": {
        id: "palindromic-substrings",
        title: "Palindromic Substrings",
        difficulty: "Medium",
        category: "String • Dynamic Programming",
        description: {
            text: "Given a string s, return the number of palindromic substrings in it.",
            notes: [
                "A substring is a contiguous sequence of characters within the string.",
                "Different start or end indices count as different substrings even if they consist of same characters."
            ],
        },
        examples: [
            {
                input: "s = 'abc'",
                output: "3",
                explanation: "Three palindromic strings: 'a', 'b', 'c'.",
            },
            {
                input: "s = 'aaa'",
                output: "6",
                explanation: "Six palindromic strings: 'a', 'a', 'a', 'aa', 'aa', 'aaa'.",
            },
        ],
        constraints: [
            "1 ≤ s.length ≤ 1000",
            "s consists of lowercase English letters",
        ],
        starterCode: {
            javascript: `function countSubstrings(s) {
    // Write your solution here
    
}

// Test cases
console.log(countSubstrings('abc')); // Expected: 3
console.log(countSubstrings('aaa')); // Expected: 6`,

            typescript: `function countSubstrings(s: string): number {
    // Write your solution here
    
}

// Test cases
console.log(countSubstrings('abc')); // Expected: 3
console.log(countSubstrings('aaa')); // Expected: 6`,

            python: `def countSubstrings(s):
    # Write your solution here
    pass

# Test cases
print(countSubstrings('abc'))  # Expected: 3
print(countSubstrings('aaa'))  # Expected: 6`,

            java: `class Solution {
    public static int countSubstrings(String s) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(countSubstrings("abc")); // Expected: 3
        System.out.println(countSubstrings("aaa")); // Expected: 6
    }
}`,

            cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

int countSubstrings(string s) {
    // Write your solution here
    
}

int main() {
    cout << countSubstrings("abc") << endl; // Expected: 3
    cout << countSubstrings("aaa") << endl; // Expected: 6
    return 0;
}`,

            c: `#include <stdio.h>
#include <string.h>

int countSubstrings(char* s) {
    // Write your solution here
    
}

int main() {
    printf("%d\\n", countSubstrings("abc")); // Expected: 3
    printf("%d\\n", countSubstrings("aaa")); // Expected: 6
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int CountSubstrings(string s) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(CountSubstrings("abc")); // Expected: 3
        Console.WriteLine(CountSubstrings("aaa")); // Expected: 6
    }
}`,

            go: `package main

import "fmt"

func countSubstrings(s string) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(countSubstrings("abc")) // Expected: 3
    fmt.Println(countSubstrings("aaa")) // Expected: 6
}`,

            rust: `fn count_substrings(s: String) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", count_substrings("abc".to_string())); // Expected: 3
    println!("{}", count_substrings("aaa".to_string())); // Expected: 6
}`,

            ruby: `def count_substrings(s)
    # Write your solution here
    
end

# Test cases
puts count_substrings('abc') # Expected: 3
puts count_substrings('aaa') # Expected: 6`,

            php: `<?php
function countSubstrings($s) {
    // Write your solution here
    
}

// Test cases
echo countSubstrings('abc') . "\\n"; // Expected: 3
echo countSubstrings('aaa') . "\\n"; // Expected: 6
?>`,

            swift: `func countSubstrings(_ s: String) -> Int {
    // Write your solution here
    
}

// Test cases
print(countSubstrings("abc")) // Expected: 3
print(countSubstrings("aaa")) // Expected: 6`,

            kotlin: `fun countSubstrings(s: String): Int {
    // Write your solution here
    
}

fun main() {
    println(countSubstrings("abc")) // Expected: 3
    println(countSubstrings("aaa")) // Expected: 6
}`,

            scala: `object Solution {
    def countSubstrings(s: String): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(countSubstrings("abc")) // Expected: 3
        println(countSubstrings("aaa")) // Expected: 6
    }
}`,

            perl: `sub countSubstrings {
    my $s = shift;
    # Write your solution here
    
}

# Test cases
print countSubstrings('abc') . "\\n"; # Expected: 3
print countSubstrings('aaa') . "\\n"; # Expected: 6`,

            r: `countSubstrings <- function(s) {
    # Write your solution here
    
}

# Test cases
print(countSubstrings('abc')) # Expected: 3
print(countSubstrings('aaa')) # Expected: 6`
        },
        expectedOutput: {
            javascript: "3\n6",
            python: "3\n6",
            java: "3\n6",
        },
    },

    "encode-and-decode-tinyurl": {
        id: "encode-and-decode-tinyurl",
        title: "Encode and Decode TinyURL",
        difficulty: "Medium",
        category: "String • Hash Table • Design",
        description: {
            text: "TinyURL is a URL shortening service where you enter a URL and it returns a short URL. Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work.",
            notes: [
                "You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.",
                "Any encoding/decoding algorithm works as long as it maps uniquely."
            ],
        },
        examples: [
            {
                input: "url = 'https://leetcode.com/problems/design-tinyurl'",
                output: "'https://leetcode.com/problems/design-tinyurl'",
                explanation: "After encoding and then decoding, we get the original URL back.",
            },
        ],
        constraints: [
            "1 ≤ url.length ≤ 10⁴",
            "url consists of valid URL characters",
        ],
        starterCode: {
            javascript: `let codec = {
    encode: function(longUrl) {
        // Write your solution here
        
    },
    decode: function(shortUrl) {
        // Write your solution here
        
    }
};

// Test cases
let url = 'https://leetcode.com/problems/design-tinyurl';
let short = codec.encode(url);
console.log(codec.decode(short)); // Expected: original url`,

            typescript: `class Codec {
    encode(longUrl: string): string {
        // Write your solution here
        
    }

    decode(shortUrl: string): string {
        // Write your solution here
        
    }
}

// Test cases
let url = 'https://leetcode.com/problems/design-tinyurl';
let codec = new Codec();
let short = codec.encode(url);
console.log(codec.decode(short)); // Expected: original url`,

            python: `class Codec:
    def encode(self, longUrl: str) -> str:
        # Write your solution here
        pass
        
    def decode(self, shortUrl: str) -> str:
        # Write your solution here
        pass

# Test cases
url = 'https://leetcode.com/problems/design-tinyurl'
codec = Codec()
short = codec.encode(url)
print(codec.decode(short))  # Expected: original url`,

            java: `import java.util.*;

public class Codec {
    // Write your solution here
    
    public String encode(String longUrl) {
        // Write your solution here
        return "";
    }

    public String decode(String shortUrl) {
        // Write your solution here
        return "";
    }

    public static void main(String[] args) {
        Codec codec = new Codec();
        String url = "https://leetcode.com/problems/design-tinyurl";
        String shortUrl = codec.encode(url);
        System.out.println(codec.decode(shortUrl)); // Expected: original url
    }
}`,

            cpp: `#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

class Codec {
public:
    // Write your solution here
    
    string encode(string longUrl) {
        // Write your solution here
        
    }

    string decode(string shortUrl) {
        // Write your solution here
        
    }
};

int main() {
    Codec codec;
    string url = "https://leetcode.com/problems/design-tinyurl";
    string shortUrl = codec.encode(url);
    cout << codec.decode(shortUrl) << endl; // Expected: original url
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    // Write your solution here
    
} Codec;

char* encode(Codec* codec, char* longUrl) {
    // Write your solution here
    
}

char* decode(Codec* codec, char* shortUrl) {
    // Write your solution here
    
}

int main() {
    Codec* codec = (Codec*)malloc(sizeof(Codec));
    char* url = "https://leetcode.com/problems/design-tinyurl";
    char* shortUrl = encode(codec, url);
    printf("%s\\n", decode(codec, shortUrl)); // Expected: original url
    free(codec);
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

public class Codec {
    // Write your solution here
    
    public string Encode(string longUrl) {
        // Write your solution here
        
    }

    public string Decode(string shortUrl) {
        // Write your solution here
        
    }

    public static void Main() {
        Codec codec = new Codec();
        string url = "https://leetcode.com/problems/design-tinyurl";
        string shortUrl = codec.Encode(url);
        Console.WriteLine(codec.Decode(shortUrl)); // Expected: original url
    }
}`,

            go: `package main

import "fmt"

type Codec struct {
    // Write your solution here
    
}

func (this *Codec) Encode(longUrl string) string {
    // Write your solution here
    
}

func (this *Codec) Decode(shortUrl string) string {
    // Write your solution here
    
}

func main() {
    codec := &Codec{}
    url := "https://leetcode.com/problems/design-tinyurl"
    short := codec.Encode(url)
    fmt.Println(codec.Decode(short)) // Expected: original url
}`,

            rust: `use std::collections::HashMap;

struct Codec {
    // Write your solution here
    
}

impl Codec {
    fn new() -> Self {
        // Write your solution here
        
    }

    fn encode(&mut self, long_url: String) -> String {
        // Write your solution here
        
    }

    fn decode(&self, short_url: String) -> String {
        // Write your solution here
        
    }
}

fn main() {
    let mut codec = Codec::new();
    let url = "https://leetcode.com/problems/design-tinyurl".to_string();
    let short = codec.encode(url.clone());
    println!("{}", codec.decode(short)); // Expected: original url
}`,

            ruby: `class Codec
    # Write your solution here
    
    def encode(long_url)
        # Write your solution here
        
    end

    def decode(short_url)
        # Write your solution here
        
    end
end

# Test cases
codec = Codec.new
url = 'https://leetcode.com/problems/design-tinyurl'
short = codec.encode(url)
puts codec.decode(short) # Expected: original url`,

            php: `<?php
class Codec {
    // Write your solution here
    
    function encode($longUrl) {
        // Write your solution here
        
    }

    function decode($shortUrl) {
        // Write your solution here
        
    }
}

// Test cases
$codec = new Codec();
$url = "https://leetcode.com/problems/design-tinyurl";
$short = $codec->encode($url);
echo $codec->decode($short) . "\\n"; // Expected: original url
?>`,

            swift: `class Codec {
    // Write your solution here
    
    func encode(_ longUrl: String) -> String {
        // Write your solution here
        
    }
    
    func decode(_ shortUrl: String) -> String {
        // Write your solution here
        
    }
}

// Test cases
let codec = Codec()
let url = "https://leetcode.com/problems/design-tinyurl"
let short = codec.encode(url)
print(codec.decode(short)) // Expected: original url`,

            kotlin: `class Codec {
    // Write your solution here
    
    fun encode(longUrl: String): String {
        // Write your solution here
        
    }

    fun decode(shortUrl: String): String {
        // Write your solution here
        
    }
}

fun main() {
    val codec = Codec()
    val url = "https://leetcode.com/problems/design-tinyurl"
    val short = codec.encode(url)
    println(codec.decode(short)) // Expected: original url
}`,

            scala: `import scala.collection.mutable

class Codec() {
    // Write your solution here
    
    def encode(longUrl: String): String = {
        // Write your solution here
        
    }

    def decode(shortUrl: String): String = {
        // Write your solution here
        
    }
}

object Main {
    def main(args: Array[String]): Unit = {
        val codec = new Codec()
        val url = "https://leetcode.com/problems/design-tinyurl"
        val short = codec.encode(url)
        println(codec.decode(short)) // Expected: original url
    }
}`,

            perl: `package Codec;
sub new {
    my $class = shift;
    my $self = {};
    bless $self, $class;
    return $self;
}

sub encode {
    my ($self, $longUrl) = @_;
    # Write your solution here
    
}

sub decode {
    my ($self, $shortUrl) = @_;
    # Write your solution here
    
}

package main;
my $codec = Codec->new();
my $url = 'https://leetcode.com/problems/design-tinyurl';
my $short = $codec->encode($url);
print $codec->decode($short) . "\\n"; # Expected: original url`,

            r: `Codec <- setRefClass("Codec",
    fields = list(),
    methods = list(
        encode = function(longUrl) {
            # Write your solution here
            
        },
        decode = function(shortUrl) {
            # Write your solution here
            
        }
    )
)

# Test cases
codec <- Codec$new()
url <- "https://leetcode.com/problems/design-tinyurl"
short <- codec$encode(url)
print(codec$decode(short)) # Expected: original url`
        },
        expectedOutput: {
            javascript: "https://leetcode.com/problems/design-tinyurl",
            python: "https://leetcode.com/problems/design-tinyurl",
            java: "https://leetcode.com/problems/design-tinyurl",
        },
    },

    "minimum-window-substring": {
        id: "minimum-window-substring",
        title: "Minimum Window Substring",
        difficulty: "Hard",
        category: "String • Sliding Window • Hash Table",
        description: {
            text: "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string ''.",
            notes: [
                "The testcases will be generated such that the answer is unique.",
                "A substring is a contiguous sequence of characters within the string."
            ],
        },
        examples: [
            {
                input: "s = 'ADOBECODEBANC', t = 'ABC'",
                output: "'BANC'",
                explanation: "The minimum window substring 'BANC' includes 'A', 'B', and 'C' from string t.",
            },
            {
                input: "s = 'a', t = 'a'",
                output: "'a'",
            },
            {
                input: "s = 'a', t = 'aa'",
                output: "''",
                explanation: "Both 'a's from t must be included in the window.",
            },
        ],
        constraints: [
            "m == s.length",
            "n == t.length",
            "1 ≤ m, n ≤ 10⁵",
            "s and t consist of uppercase and lowercase English letters",
        ],
        starterCode: {
            javascript: `function minWindow(s, t) {
    // Write your solution here
    
}

// Test cases
console.log(minWindow('ADOBECODEBANC', 'ABC')); // Expected: 'BANC'
console.log(minWindow('a', 'a')); // Expected: 'a'
console.log(minWindow('a', 'aa')); // Expected: ''`,

            typescript: `function minWindow(s: string, t: string): string {
    // Write your solution here
    
}

// Test cases
console.log(minWindow('ADOBECODEBANC', 'ABC')); // Expected: 'BANC'
console.log(minWindow('a', 'a')); // Expected: 'a'
console.log(minWindow('a', 'aa')); // Expected: ''`,

            python: `def minWindow(s, t):
    # Write your solution here
    pass

# Test cases
print(minWindow('ADOBECODEBANC', 'ABC'))  # Expected: 'BANC'
print(minWindow('a', 'a'))  # Expected: 'a'
print(minWindow('a', 'aa'))  # Expected: ''`,

            java: `import java.util.*;

class Solution {
    public static String minWindow(String s, String t) {
        // Write your solution here
        
        return "";
    }
    
    public static void main(String[] args) {
        System.out.println(minWindow("ADOBECODEBANC", "ABC")); // Expected: "BANC"
        System.out.println(minWindow("a", "a")); // Expected: "a"
        System.out.println(minWindow("a", "aa")); // Expected: ""
    }
}`,

            cpp: `#include <iostream>
#include <string>
#include <unordered_map>
#include <climits>
using namespace std;

string minWindow(string s, string t) {
    // Write your solution here
    
}

int main() {
    cout << minWindow("ADOBECODEBANC", "ABC") << endl; // Expected: "BANC"
    cout << minWindow("a", "a") << endl; // Expected: "a"
    cout << minWindow("a", "aa") << endl; // Expected: ""
    return 0;
}`,

            c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* minWindow(char* s, char* t) {
    // Write your solution here
    
}

int main() {
    char* result1 = minWindow("ADOBECODEBANC", "ABC");
    printf("%s\\n", result1); // Expected: "BANC"
    free(result1);
    
    char* result2 = minWindow("a", "a");
    printf("%s\\n", result2); // Expected: "a"
    free(result2);
    
    char* result3 = minWindow("a", "aa");
    printf("%s\\n", result3); // Expected: ""
    free(result3);
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static string MinWindow(string s, string t) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(MinWindow("ADOBECODEBANC", "ABC")); // Expected: "BANC"
        Console.WriteLine(MinWindow("a", "a")); // Expected: "a"
        Console.WriteLine(MinWindow("a", "aa")); // Expected: ""
    }
}`,

            go: `package main

import "fmt"

func minWindow(s string, t string) string {
    // Write your solution here
    
}

func main() {
    fmt.Println(minWindow("ADOBECODEBANC", "ABC")) // Expected: "BANC"
    fmt.Println(minWindow("a", "a")) // Expected: "a"
    fmt.Println(minWindow("a", "aa")) // Expected: ""
}`,

            rust: `use std::collections::HashMap;

fn min_window(s: String, t: String) -> String {
    // Write your solution here
    
}

fn main() {
    println!("{}", min_window("ADOBECODEBANC".to_string(), "ABC".to_string())); // Expected: "BANC"
    println!("{}", min_window("a".to_string(), "a".to_string())); // Expected: "a"
    println!("{}", min_window("a".to_string(), "aa".to_string())); // Expected: ""
}`,

            ruby: `def min_window(s, t)
    # Write your solution here
    
end

# Test cases
puts min_window('ADOBECODEBANC', 'ABC') # Expected: 'BANC'
puts min_window('a', 'a') # Expected: 'a'
puts min_window('a', 'aa') # Expected: ''`,

            php: `<?php
function minWindow($s, $t) {
    // Write your solution here
    
}

// Test cases
echo minWindow('ADOBECODEBANC', 'ABC') . "\\n"; // Expected: 'BANC'
echo minWindow('a', 'a') . "\\n"; // Expected: 'a'
echo minWindow('a', 'aa') . "\\n"; // Expected: ''
?>`,

            swift: `func minWindow(_ s: String, _ t: String) -> String {
    // Write your solution here
    
}

// Test cases
print(minWindow("ADOBECODEBANC", "ABC")) // Expected: "BANC"
print(minWindow("a", "a")) // Expected: "a"
print(minWindow("a", "aa")) // Expected: ""`,

            kotlin: `fun minWindow(s: String, t: String): String {
    // Write your solution here
    
}

fun main() {
    println(minWindow("ADOBECODEBANC", "ABC")) // Expected: "BANC"
    println(minWindow("a", "a")) // Expected: "a"
    println(minWindow("a", "aa")) // Expected: ""
}`,

            scala: `import scala.collection.mutable

object Solution {
    def minWindow(s: String, t: String): String = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(minWindow("ADOBECODEBANC", "ABC")) // Expected: "BANC"
        println(minWindow("a", "a")) // Expected: "a"
        println(minWindow("a", "aa")) // Expected: ""
    }
}`,

            perl: `sub minWindow {
    my ($s, $t) = @_;
    # Write your solution here
    
}

# Test cases
print minWindow('ADOBECODEBANC', 'ABC') . "\\n"; # Expected: 'BANC'
print minWindow('a', 'a') . "\\n"; # Expected: 'a'
print minWindow('a', 'aa') . "\\n"; # Expected: ''`,

            r: `minWindow <- function(s, t) {
    # Write your solution here
    
}

# Test cases
print(minWindow('ADOBECODEBANC', 'ABC')) # Expected: 'BANC'
print(minWindow('a', 'a')) # Expected: 'a'
print(minWindow('a', 'aa')) # Expected: ''`
        },
        expectedOutput: {
            javascript: "BANC\na\n",
            python: "BANC\na\n",
            java: "BANC\na\n",
        },
    },

    "word-search": {
        id: "word-search",
        title: "Word Search",
        difficulty: "Medium",
        category: "Array • Backtracking • Matrix",
        description: {
            text: "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
            notes: [
                "The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.",
                "The same letter cell may not be used more than once."
            ],
        },
        examples: [
            {
                input: "board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = 'ABCCED'",
                output: "true",
            },
            {
                input: "board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = 'SEE'",
                output: "true",
            },
            {
                input: "board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = 'ABCB'",
                output: "false",
            },
        ],
        constraints: [
            "m == board.length",
            "n = board[i].length",
            "1 ≤ m, n ≤ 6",
            "1 ≤ word.length ≤ 15",
            "board and word consists of only lowercase and uppercase English letters",
        ],
        starterCode: {
            javascript: `function exist(board, word) {
    // Write your solution here
    
}

// Test cases
let board1 = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']];
console.log(exist(board1, 'ABCCED')); // Expected: true
console.log(exist(board1, 'SEE')); // Expected: true
console.log(exist(board1, 'ABCB')); // Expected: false`,

            typescript: `function exist(board: string[][], word: string): boolean {
    // Write your solution here
    
}

// Test cases
let board1: string[][] = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']];
console.log(exist(board1, 'ABCCED')); // Expected: true
console.log(exist(board1, 'SEE')); // Expected: true
console.log(exist(board1, 'ABCB')); // Expected: false`,

            python: `def exist(board, word):
    # Write your solution here
    pass

# Test cases
board1 = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']]
print(exist(board1, 'ABCCED'))  # Expected: True
print(exist(board1, 'SEE'))  # Expected: True
print(exist(board1, 'ABCB'))  # Expected: False`,

            java: `class Solution {
    public static boolean exist(char[][] board, String word) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        char[][] board1 = {{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}};
        System.out.println(exist(board1, "ABCCED")); // Expected: true
        System.out.println(exist(board1, "SEE")); // Expected: true
        System.out.println(exist(board1, "ABCB")); // Expected: false
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

bool exist(vector<vector<char>>& board, string word) {
    // Write your solution here
    
}

int main() {
    vector<vector<char>> board1 = {{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}};
    cout << boolalpha;
    cout << exist(board1, "ABCCED") << endl; // Expected: true
    cout << exist(board1, "SEE") << endl; // Expected: true
    cout << exist(board1, "ABCB") << endl; // Expected: false
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool exist(char** board, int boardSize, int* boardColSize, char* word) {
    // Write your solution here
    
}

int main() {
    char* board1_data[] = {"ABCE", "SFCS", "ADEE"};
    char** board1 = (char**)malloc(3 * sizeof(char*));
    int boardColSize1[] = {4, 4, 4};
    for (int i = 0; i < 3; i++) {
        board1[i] = (char*)malloc(5 * sizeof(char));
        strcpy(board1[i], board1_data[i]);
    }
    printf("%d\\n", exist(board1, 3, boardColSize1, "ABCCED")); // Expected: 1 (true)
    printf("%d\\n", exist(board1, 3, boardColSize1, "SEE")); // Expected: 1 (true)
    printf("%d\\n", exist(board1, 3, boardColSize1, "ABCB")); // Expected: 0 (false)
    
    for (int i = 0; i < 3; i++) free(board1[i]);
    free(board1);
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static bool Exist(char[][] board, string word) {
        // Write your solution here
        
    }
    
    static void Main() {
        char[][] board1 = new char[][] {
            new char[] {'A','B','C','E'},
            new char[] {'S','F','C','S'},
            new char[] {'A','D','E','E'}
        };
        Console.WriteLine(Exist(board1, "ABCCED")); // Expected: True
        Console.WriteLine(Exist(board1, "SEE")); // Expected: True
        Console.WriteLine(Exist(board1, "ABCB")); // Expected: False
    }
}`,

            go: `package main

import "fmt"

func exist(board [][]byte, word string) bool {
    // Write your solution here
    
}

func main() {
    board1 := [][]byte{
        {'A','B','C','E'},
        {'S','F','C','S'},
        {'A','D','E','E'},
    }
    fmt.Println(exist(board1, "ABCCED")) // Expected: true
    fmt.Println(exist(board1, "SEE")) // Expected: true
    fmt.Println(exist(board1, "ABCB")) // Expected: false
}`,

            rust: `fn exist(board: Vec<Vec<char>>, word: String) -> bool {
    // Write your solution here
    
}

fn main() {
    let board1 = vec![
        vec!['A','B','C','E'],
        vec!['S','F','C','S'],
        vec!['A','D','E','E'],
    ];
    println!("{}", exist(board1, "ABCCED".to_string())); // Expected: true
    println!("{}", exist(board1.clone(), "SEE".to_string())); // Expected: true
    println!("{}", exist(board1, "ABCB".to_string())); // Expected: false
}`,

            ruby: `def exist(board, word)
    # Write your solution here
    
end

# Test cases
board1 = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']]
puts exist(board1, 'ABCCED') # Expected: true
puts exist(board1, 'SEE') # Expected: true
puts exist(board1, 'ABCB') # Expected: false`,

            php: `<?php
function exist($board, $word) {
    // Write your solution here
    
}

// Test cases
$board1 = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']];
echo var_export(exist($board1, 'ABCCED'), true) . "\\n"; // Expected: true
echo var_export(exist($board1, 'SEE'), true) . "\\n"; // Expected: true
echo var_export(exist($board1, 'ABCB'), true) . "\\n"; // Expected: false
?>`,

            swift: `func exist(_ board: [[Character]], _ word: String) -> Bool {
    // Write your solution here
    
}

// Test cases
let board1: [[Character]] = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
]
print(exist(board1, "ABCCED")) // Expected: true
print(exist(board1, "SEE")) // Expected: true
print(exist(board1, "ABCB")) // Expected: false`,

            kotlin: `fun exist(board: Array<CharArray>, word: String): Boolean {
    // Write your solution here
    
}

fun main() {
    val board1 = arrayOf(
        charArrayOf('A','B','C','E'),
        charArrayOf('S','F','C','S'),
        charArrayOf('A','D','E','E')
    )
    println(exist(board1, "ABCCED")) // Expected: true
    println(exist(board1, "SEE")) // Expected: true
    println(exist(board1, "ABCB")) // Expected: false
}`,

            scala: `object Solution {
    def exist(board: Array[Array[Char]], word: String): Boolean = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        val board1 = Array(
            Array('A','B','C','E'),
            Array('S','F','C','S'),
            Array('A','D','E','E')
        )
        println(exist(board1, "ABCCED")) // Expected: true
        println(exist(board1, "SEE")) // Expected: true
        println(exist(board1, "ABCB")) // Expected: false
    }
}`,

            perl: `sub exist {
    my ($board, $word) = @_;
    # Write your solution here
    
}

# Test cases
my $board1 = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
];
print exist($board1, 'ABCCED') ? "true\\n" : "false\\n"; # Expected: true
print exist($board1, 'SEE') ? "true\\n" : "false\\n"; # Expected: true
print exist($board1, 'ABCB') ? "true\\n" : "false\\n"; # Expected: false`,

            r: `exist <- function(board, word) {
    # Write your solution here
    
}

# Test cases
board1 <- list(
    c('A','B','C','E'),
    c('S','F','C','S'),
    c('A','D','E','E')
)
print(exist(board1, 'ABCCED')) # Expected: TRUE
print(exist(board1, 'SEE')) # Expected: TRUE
print(exist(board1, 'ABCB')) # Expected: FALSE`
        },
        expectedOutput: {
            javascript: "true\ntrue\nfalse",
            python: "True\nTrue\nFalse",
            java: "true\ntrue\nfalse",
        },
    },

    "word-ladder": {
        id: "word-ladder",
        title: "Word Ladder",
        difficulty: "Hard",
        category: "String • BFS • Hash Table",
        description: {
            text: "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words where each adjacent pair differs by exactly one letter. Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.",
            notes: [
                "Every word in the sequence must be in wordList.",
                "beginWord may not be in wordList.",
                "All words consist of lowercase English letters."
            ],
        },
        examples: [
            {
                input: "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log','cog']",
                output: "5",
                explanation: "Shortest sequence is 'hit' -> 'hot' -> 'dot' -> 'dog' -> 'cog' (5 words).",
            },
            {
                input: "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log']",
                output: "0",
                explanation: "EndWord 'cog' is not in wordList.",
            },
        ],
        constraints: [
            "1 ≤ beginWord.length ≤ 10",
            "endWord.length == beginWord.length",
            "1 ≤ wordList.length ≤ 5000",
            "wordList[i].length == beginWord.length",
            "All words consist of lowercase English letters",
            "All words in wordList are unique",
        ],
        starterCode: {
            javascript: `function ladderLength(beginWord, endWord, wordList) {
    // Write your solution here
    
}

// Test cases
console.log(ladderLength('hit', 'cog', ['hot','dot','dog','lot','log','cog'])); // Expected: 5
console.log(ladderLength('hit', 'cog', ['hot','dot','dog','lot','log'])); // Expected: 0`,

            typescript: `function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    // Write your solution here
    
}

// Test cases
console.log(ladderLength('hit', 'cog', ['hot','dot','dog','lot','log','cog'])); // Expected: 5
console.log(ladderLength('hit', 'cog', ['hot','dot','dog','lot','log'])); // Expected: 0`,

            python: `def ladderLength(beginWord, endWord, wordList):
    # Write your solution here
    pass

# Test cases
print(ladderLength('hit', 'cog', ['hot','dot','dog','lot','log','cog']))  # Expected: 5
print(ladderLength('hit', 'cog', ['hot','dot','dog','lot','log']))  # Expected: 0`,

            java: `import java.util.*;

class Solution {
    public static int ladderLength(String beginWord, String endWord, List<String> wordList) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(ladderLength("hit", "cog", Arrays.asList("hot","dot","dog","lot","log","cog"))); // Expected: 5
        System.out.println(ladderLength("hit", "cog", Arrays.asList("hot","dot","dog","lot","log"))); // Expected: 0
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_set>
#include <queue>
using namespace std;

int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
    // Write your solution here
    
}

int main() {
    vector<string> wordList1 = {"hot","dot","dog","lot","log","cog"};
    cout << ladderLength("hit", "cog", wordList1) << endl; // Expected: 5
    
    vector<string> wordList2 = {"hot","dot","dog","lot","log"};
    cout << ladderLength("hit", "cog", wordList2) << endl; // Expected: 0
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int ladderLength(char* beginWord, char* endWord, char** wordList, int wordListSize) {
    // Write your solution here
    
}

int main() {
    char* wordList1[] = {"hot","dot","dog","lot","log","cog"};
    printf("%d\\n", ladderLength("hit", "cog", wordList1, 6)); // Expected: 5
    
    char* wordList2[] = {"hot","dot","dog","lot","log"};
    printf("%d\\n", ladderLength("hit", "cog", wordList2, 5)); // Expected: 0
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int LadderLength(string beginWord, string endWord, IList<string> wordList) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(LadderLength("hit", "cog", new List<string> {"hot","dot","dog","lot","log","cog"})); // Expected: 5
        Console.WriteLine(LadderLength("hit", "cog", new List<string> {"hot","dot","dog","lot","log"})); // Expected: 0
    }
}`,

            go: `package main

import "fmt"

func ladderLength(beginWord string, endWord string, wordList []string) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(ladderLength("hit", "cog", []string{"hot","dot","dog","lot","log","cog"})) // Expected: 5
    fmt.Println(ladderLength("hit", "cog", []string{"hot","dot","dog","lot","log"})) // Expected: 0
}`,

            rust: `use std::collections::{HashSet, VecDeque};

fn ladder_length(begin_word: String, end_word: String, word_list: Vec<String>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", ladder_length("hit".to_string(), "cog".to_string(), 
        vec!["hot".to_string(),"dot".to_string(),"dog".to_string(),"lot".to_string(),"log".to_string(),"cog".to_string()])); // Expected: 5
    println!("{}", ladder_length("hit".to_string(), "cog".to_string(), 
        vec!["hot".to_string(),"dot".to_string(),"dog".to_string(),"lot".to_string(),"log".to_string()])); // Expected: 0
}`,

            ruby: `def ladder_length(begin_word, end_word, word_list)
    # Write your solution here
    
end

# Test cases
puts ladder_length('hit', 'cog', ['hot','dot','dog','lot','log','cog']) # Expected: 5
puts ladder_length('hit', 'cog', ['hot','dot','dog','lot','log']) # Expected: 0`,

            php: `<?php
function ladderLength($beginWord, $endWord, $wordList) {
    // Write your solution here
    
}

// Test cases
echo ladderLength('hit', 'cog', ['hot','dot','dog','lot','log','cog']) . "\\n"; // Expected: 5
echo ladderLength('hit', 'cog', ['hot','dot','dog','lot','log']) . "\\n"; // Expected: 0
?>`,

            swift: `func ladderLength(_ beginWord: String, _ endWord: String, _ wordList: [String]) -> Int {
    // Write your solution here
    
}

// Test cases
print(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])) // Expected: 5
print(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])) // Expected: 0`,

            kotlin: `fun ladderLength(beginWord: String, endWord: String, wordList: List<String>): Int {
    // Write your solution here
    
}

fun main() {
    println(ladderLength("hit", "cog", listOf("hot","dot","dog","lot","log","cog"))) // Expected: 5
    println(ladderLength("hit", "cog", listOf("hot","dot","dog","lot","log"))) // Expected: 0
}`,

            scala: `import scala.collection.mutable

object Solution {
    def ladderLength(beginWord: String, endWord: String, wordList: List[String]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(ladderLength("hit", "cog", List("hot","dot","dog","lot","log","cog"))) // Expected: 5
        println(ladderLength("hit", "cog", List("hot","dot","dog","lot","log"))) // Expected: 0
    }
}`,

            perl: `sub ladderLength {
    my ($beginWord, $endWord, $wordList) = @_;
    # Write your solution here
    
}

# Test cases
print ladderLength('hit', 'cog', ['hot','dot','dog','lot','log','cog']) . "\\n"; # Expected: 5
print ladderLength('hit', 'cog', ['hot','dot','dog','lot','log']) . "\\n"; # Expected: 0`,

            r: `ladderLength <- function(beginWord, endWord, wordList) {
    # Write your solution here
    
}

# Test cases
print(ladderLength('hit', 'cog', c('hot','dot','dog','lot','log','cog'))) # Expected: 5
print(ladderLength('hit', 'cog', c('hot','dot','dog','lot','log'))) # Expected: 0`
        },
        expectedOutput: {
            javascript: "5\n0",
            python: "5\n0",
            java: "5\n0",
        },
    },

    "number-of-islands": {
        id: "number-of-islands",
        title: "Number of Islands",
        difficulty: "Medium",
        category: "Array • DFS • BFS • Union Find • Matrix",
        description: {
            text: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
            notes: [
                "An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
                "You may assume all four edges of the grid are all surrounded by water."
            ],
        },
        examples: [
            {
                input: "grid = [\n  ['1','1','1','1','0'],\n  ['1','1','0','1','0'],\n  ['1','1','0','0','0'],\n  ['0','0','0','0','0']\n]",
                output: "1",
            },
            {
                input: "grid = [\n  ['1','1','0','0','0'],\n  ['1','1','0','0','0'],\n  ['0','0','1','0','0'],\n  ['0','0','0','1','1']\n]",
                output: "3",
            },
        ],
        constraints: [
            "m == grid.length",
            "n == grid[i].length",
            "1 ≤ m, n ≤ 300",
            "grid[i][j] is '0' or '1'",
        ],
        starterCode: {
            javascript: `function numIslands(grid) {
    // Write your solution here
    
}

// Test cases
let grid1 = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
];
console.log(numIslands(grid1)); // Expected: 1

let grid2 = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
];
console.log(numIslands(grid2)); // Expected: 3`,

            typescript: `function numIslands(grid: string[][]): number {
    // Write your solution here
    
}

// Test cases
let grid1: string[][] = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
];
console.log(numIslands(grid1)); // Expected: 1

let grid2: string[][] = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
];
console.log(numIslands(grid2)); // Expected: 3`,

            python: `def numIslands(grid):
    # Write your solution here
    pass

# Test cases
grid1 = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
]
print(numIslands(grid1))  # Expected: 1

grid2 = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
]
print(numIslands(grid2))  # Expected: 3`,

            java: `import java.util.*;

class Solution {
    public static int numIslands(char[][] grid) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        char[][] grid1 = {
            {'1','1','1','1','0'},
            {'1','1','0','1','0'},
            {'1','1','0','0','0'},
            {'0','0','0','0','0'}
        };
        System.out.println(numIslands(grid1)); // Expected: 1

        char[][] grid2 = {
            {'1','1','0','0','0'},
            {'1','1','0','0','0'},
            {'0','0','1','0','0'},
            {'0','0','0','1','1'}
        };
        System.out.println(numIslands(grid2)); // Expected: 3
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int numIslands(vector<vector<char>>& grid) {
    // Write your solution here
    
}

int main() {
    vector<vector<char>> grid1 = {
        {'1','1','1','1','0'},
        {'1','1','0','1','0'},
        {'1','1','0','0','0'},
        {'0','0','0','0','0'}
    };
    cout << numIslands(grid1) << endl; // Expected: 1
    
    vector<vector<char>> grid2 = {
        {'1','1','0','0','0'},
        {'1','1','0','0','0'},
        {'0','0','1','0','0'},
        {'0','0','0','1','1'}
    };
    cout << numIslands(grid2) << endl; // Expected: 3
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int numIslands(char** grid, int gridSize, int* gridColSize) {
    // Write your solution here
    
}

int main() {
    char* grid1_data[] = {"11110", "11010", "11000", "00000"};
    char** grid1 = (char**)malloc(4 * sizeof(char*));
    int gridColSize1[] = {5, 5, 5, 5};
    for (int i = 0; i < 4; i++) {
        grid1[i] = (char*)malloc(6 * sizeof(char));
        sprintf(grid1[i], "%s", grid1_data[i]);
    }
    printf("%d\\n", numIslands(grid1, 4, gridColSize1)); // Expected: 1
    
    char* grid2_data[] = {"11000", "11000", "00100", "00011"};
    char** grid2 = (char**)malloc(4 * sizeof(char*));
    int gridColSize2[] = {5, 5, 5, 5};
    for (int i = 0; i < 4; i++) {
        grid2[i] = (char*)malloc(6 * sizeof(char));
        sprintf(grid2[i], "%s", grid2_data[i]);
    }
    printf("%d\\n", numIslands(grid2, 4, gridColSize2)); // Expected: 3
    
    for (int i = 0; i < 4; i++) {
        free(grid1[i]);
        free(grid2[i]);
    }
    free(grid1);
    free(grid2);
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int NumIslands(char[][] grid) {
        // Write your solution here
        
    }
    
    static void Main() {
        char[][] grid1 = new char[][] {
            new char[] {'1','1','1','1','0'},
            new char[] {'1','1','0','1','0'},
            new char[] {'1','1','0','0','0'},
            new char[] {'0','0','0','0','0'}
        };
        Console.WriteLine(NumIslands(grid1)); // Expected: 1
        
        char[][] grid2 = new char[][] {
            new char[] {'1','1','0','0','0'},
            new char[] {'1','1','0','0','0'},
            new char[] {'0','0','1','0','0'},
            new char[] {'0','0','0','1','1'}
        };
        Console.WriteLine(NumIslands(grid2)); // Expected: 3
    }
}`,

            go: `package main

import "fmt"

func numIslands(grid [][]byte) int {
    // Write your solution here
    
}

func main() {
    grid1 := [][]byte{
        {'1','1','1','1','0'},
        {'1','1','0','1','0'},
        {'1','1','0','0','0'},
        {'0','0','0','0','0'},
    }
    fmt.Println(numIslands(grid1)) // Expected: 1
    
    grid2 := [][]byte{
        {'1','1','0','0','0'},
        {'1','1','0','0','0'},
        {'0','0','1','0','0'},
        {'0','0','0','1','1'},
    }
    fmt.Println(numIslands(grid2)) // Expected: 3
}`,

            rust: `fn num_islands(grid: Vec<Vec<char>>) -> i32 {
    // Write your solution here
    
}

fn main() {
    let grid1 = vec![
        vec!['1','1','1','1','0'],
        vec!['1','1','0','1','0'],
        vec!['1','1','0','0','0'],
        vec!['0','0','0','0','0'],
    ];
    println!("{}", num_islands(grid1)); // Expected: 1
    
    let grid2 = vec![
        vec!['1','1','0','0','0'],
        vec!['1','1','0','0','0'],
        vec!['0','0','1','0','0'],
        vec!['0','0','0','1','1'],
    ];
    println!("{}", num_islands(grid2)); // Expected: 3
}`,

            ruby: `def num_islands(grid)
    # Write your solution here
    
end

# Test cases
grid1 = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
]
puts num_islands(grid1) # Expected: 1

grid2 = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
]
puts num_islands(grid2) # Expected: 3`,

            php: `<?php
function numIslands($grid) {
    // Write your solution here
    
}

// Test cases
$grid1 = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
];
echo numIslands($grid1) . "\\n"; // Expected: 1

$grid2 = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
];
echo numIslands($grid2) . "\\n"; // Expected: 3
?>`,

            swift: `func numIslands(_ grid: [[Character]]) -> Int {
    // Write your solution here
    
}

// Test cases
let grid1: [[Character]] = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]
print(numIslands(grid1)) // Expected: 1

let grid2: [[Character]] = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]
print(numIslands(grid2)) // Expected: 3`,

            kotlin: `fun numIslands(grid: Array<CharArray>): Int {
    // Write your solution here
    
}

fun main() {
    val grid1 = arrayOf(
        charArrayOf('1','1','1','1','0'),
        charArrayOf('1','1','0','1','0'),
        charArrayOf('1','1','0','0','0'),
        charArrayOf('0','0','0','0','0')
    )
    println(numIslands(grid1)) // Expected: 1
    
    val grid2 = arrayOf(
        charArrayOf('1','1','0','0','0'),
        charArrayOf('1','1','0','0','0'),
        charArrayOf('0','0','1','0','0'),
        charArrayOf('0','0','0','1','1')
    )
    println(numIslands(grid2)) // Expected: 3
}`,

            scala: `object Solution {
    def numIslands(grid: Array[Array[Char]]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        val grid1 = Array(
            Array('1','1','1','1','0'),
            Array('1','1','0','1','0'),
            Array('1','1','0','0','0'),
            Array('0','0','0','0','0')
        )
        println(numIslands(grid1)) // Expected: 1
        
        val grid2 = Array(
            Array('1','1','0','0','0'),
            Array('1','1','0','0','0'),
            Array('0','0','1','0','0'),
            Array('0','0','0','1','1')
        )
        println(numIslands(grid2)) // Expected: 3
    }
}`,

            perl: `sub numIslands {
    my $grid = shift;
    # Write your solution here
    
}

# Test cases
my $grid1 = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
];
print numIslands($grid1) . "\\n"; # Expected: 1

my $grid2 = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
];
print numIslands($grid2) . "\\n"; # Expected: 3`,

            r: `numIslands <- function(grid) {
    # Write your solution here
    
}

# Test cases
grid1 <- list(
    c('1','1','1','1','0'),
    c('1','1','0','1','0'),
    c('1','1','0','0','0'),
    c('0','0','0','0','0')
)
print(numIslands(grid1)) # Expected: 1

grid2 <- list(
    c('1','1','0','0','0'),
    c('1','1','0','0','0'),
    c('0','0','1','0','0'),
    c('0','0','0','1','1')
)
print(numIslands(grid2)) # Expected: 3`
        },
        expectedOutput: {
            javascript: "1\n3",
            python: "1\n3",
            java: "1\n3",
        },
    },

    "course-schedule": {
        id: "course-schedule",
        title: "Course Schedule",
        difficulty: "Medium",
        category: "Graph • DFS • BFS • Topological Sort",
        description: {
            text: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1. You are given an array prerequisites where prerequisites[i] = [a, b] indicates that you must take course b first if you want to take course a. Return true if you can finish all courses, otherwise false.",
            notes: [
                "Return true if it is possible to finish all courses, otherwise return false.",
                "The prerequisite pairs are unique."
            ],
        },
        examples: [
            {
                input: "numCourses = 2, prerequisites = [[1,0]]",
                output: "true",
                explanation: "To take course 1 you need to take course 0. So it is possible.",
            },
            {
                input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
                output: "false",
                explanation: "There is a cycle: to take course 1 you need course 0, and to take course 0 you need course 1.",
            },
        ],
        constraints: [
            "1 ≤ numCourses ≤ 2000",
            "0 ≤ prerequisites.length ≤ 5000",
            "prerequisites[i].length == 2",
            "0 ≤ a, b < numCourses",
            "All the pairs are unique",
        ],
        starterCode: {
            javascript: `function canFinish(numCourses, prerequisites) {
    // Write your solution here
    
}

// Test cases
console.log(canFinish(2, [[1,0]])); // Expected: true
console.log(canFinish(2, [[1,0],[0,1]])); // Expected: false`,

            typescript: `function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    // Write your solution here
    
}

// Test cases
console.log(canFinish(2, [[1,0]])); // Expected: true
console.log(canFinish(2, [[1,0],[0,1]])); // Expected: false`,

            python: `def canFinish(numCourses, prerequisites):
    # Write your solution here
    pass

# Test cases
print(canFinish(2, [[1,0]]))  # Expected: True
print(canFinish(2, [[1,0],[0,1]]))  # Expected: False`,

            java: `import java.util.*;

class Solution {
    public static boolean canFinish(int numCourses, int[][] prerequisites) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(canFinish(2, new int[][]{{1,0}})); // Expected: true
        System.out.println(canFinish(2, new int[][]{{1,0},{0,1}})); // Expected: false
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
    // Write your solution here
    
}

int main() {
    vector<vector<int>> prereqs1 = {{1,0}};
    cout << boolalpha;
    cout << canFinish(2, prereqs1) << endl; // Expected: true
    
    vector<vector<int>> prereqs2 = {{1,0},{0,1}};
    cout << canFinish(2, prereqs2) << endl; // Expected: false
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool canFinish(int numCourses, int** prerequisites, int prerequisitesSize, int* prerequisitesColSize) {
    // Write your solution here
    
}

int main() {
    int prereqs1_data[][2] = {{1,0}};
    int* prereqs1[] = {prereqs1_data[0]};
    int prereqsColSize1[] = {2};
    printf("%d\\n", canFinish(2, prereqs1, 1, prereqsColSize1)); // Expected: 1 (true)
    
    int prereqs2_data[][2] = {{1,0},{0,1}};
    int* prereqs2[] = {prereqs2_data[0], prereqs2_data[1]};
    int prereqsColSize2[] = {2, 2};
    printf("%d\\n", canFinish(2, prereqs2, 2, prereqsColSize2)); // Expected: 0 (false)
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static bool CanFinish(int numCourses, int[][] prerequisites) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(CanFinish(2, new int[][] { new int[] {1,0} })); // Expected: True
        Console.WriteLine(CanFinish(2, new int[][] { new int[] {1,0}, new int[] {0,1} })); // Expected: False
    }
}`,

            go: `package main

import "fmt"

func canFinish(numCourses int, prerequisites [][]int) bool {
    // Write your solution here
    
}

func main() {
    fmt.Println(canFinish(2, [][]int{{1,0}})) // Expected: true
    fmt.Println(canFinish(2, [][]int{{1,0},{0,1}})) // Expected: false
}`,

            rust: `use std::collections::{VecDeque, HashSet};

fn can_finish(num_courses: i32, prerequisites: Vec<Vec<i32>>) -> bool {
    // Write your solution here
    
}

fn main() {
    println!("{}", can_finish(2, vec![vec![1,0]])); // Expected: true
    println!("{}", can_finish(2, vec![vec![1,0], vec![0,1]])); // Expected: false
}`,

            ruby: `def can_finish(num_courses, prerequisites)
    # Write your solution here
    
end

# Test cases
puts can_finish(2, [[1,0]]) # Expected: true
puts can_finish(2, [[1,0],[0,1]]) # Expected: false`,

            php: `<?php
function canFinish($numCourses, $prerequisites) {
    // Write your solution here
    
}

// Test cases
echo var_export(canFinish(2, [[1,0]]), true) . "\\n"; // Expected: true
echo var_export(canFinish(2, [[1,0],[0,1]]), true) . "\\n"; // Expected: false
?>`,

            swift: `func canFinish(_ numCourses: Int, _ prerequisites: [[Int]]) -> Bool {
    // Write your solution here
    
}

// Test cases
print(canFinish(2, [[1,0]])) // Expected: true
print(canFinish(2, [[1,0],[0,1]])) // Expected: false`,

            kotlin: `fun canFinish(numCourses: Int, prerequisites: Array<IntArray>): Boolean {
    // Write your solution here
    
}

fun main() {
    println(canFinish(2, arrayOf(intArrayOf(1,0)))) // Expected: true
    println(canFinish(2, arrayOf(intArrayOf(1,0), intArrayOf(0,1)))) // Expected: false
}`,

            scala: `import scala.collection.mutable

object Solution {
    def canFinish(numCourses: Int, prerequisites: Array[Array[Int]]): Boolean = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(canFinish(2, Array(Array(1,0)))) // Expected: true
        println(canFinish(2, Array(Array(1,0), Array(0,1)))) // Expected: false
    }
}`,

            perl: `sub canFinish {
    my ($numCourses, $prerequisites) = @_;
    # Write your solution here
    
}

# Test cases
print canFinish(2, [[1,0]]) ? "true\\n" : "false\\n"; # Expected: true
print canFinish(2, [[1,0],[0,1]]) ? "true\\n" : "false\\n"; # Expected: false`,

            r: `canFinish <- function(numCourses, prerequisites) {
    # Write your solution here
    
}

# Test cases
print(canFinish(2, list(c(1,0)))) # Expected: TRUE
print(canFinish(2, list(c(1,0), c(0,1)))) # Expected: FALSE`
        },
        expectedOutput: {
            javascript: "true\nfalse",
            python: "True\nFalse",
            java: "true\nfalse",
        },
    },

    "alien-dictionary": {
        id: "alien-dictionary",
        title: "Alien Dictionary",
        difficulty: "Hard",
        category: "Graph • Topological Sort • String",
        description: {
            text: "There is a new alien language that uses the English alphabet. However, the order among letters is unknown to you. You are given a list of words from the alien language's dictionary. Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return ''. If there are multiple solutions, return any of them.",
            notes: [
                "The words are sorted lexicographically by the rules of this new language.",
                "If the given words are invalid, return an empty string."
            ],
        },
        examples: [
            {
                input: "words = ['wrt','wrf','er','ett','rftt']",
                output: "'wertf'",
            },
            {
                input: "words = ['z','x']",
                output: "'zx'",
            },
            {
                input: "words = ['z','x','z']",
                output: "''",
                explanation: "The order is invalid.",
            },
        ],
        constraints: [
            "1 ≤ words.length ≤ 100",
            "1 ≤ words[i].length ≤ 100",
            "words[i] consists of only lowercase English letters",
        ],
        starterCode: {
            javascript: `function alienOrder(words) {
    // Write your solution here
    
}

// Test cases
console.log(alienOrder(['wrt','wrf','er','ett','rftt'])); // Expected: 'wertf'
console.log(alienOrder(['z','x'])); // Expected: 'zx'
console.log(alienOrder(['z','x','z'])); // Expected: ''`,

            typescript: `function alienOrder(words: string[]): string {
    // Write your solution here
    
}

// Test cases
console.log(alienOrder(['wrt','wrf','er','ett','rftt'])); // Expected: 'wertf'
console.log(alienOrder(['z','x'])); // Expected: 'zx'
console.log(alienOrder(['z','x','z'])); // Expected: ''`,

            python: `def alienOrder(words):
    # Write your solution here
    pass

# Test cases
print(alienOrder(['wrt','wrf','er','ett','rftt']))  # Expected: 'wertf'
print(alienOrder(['z','x']))  # Expected: 'zx'
print(alienOrder(['z','x','z']))  # Expected: ''`,

            java: `import java.util.*;

class Solution {
    public static String alienOrder(String[] words) {
        // Write your solution here
        
        return "";
    }
    
    public static void main(String[] args) {
        System.out.println(alienOrder(new String[]{"wrt","wrf","er","ett","rftt"})); // Expected: "wertf"
        System.out.println(alienOrder(new String[]{"z","x"})); // Expected: "zx"
        System.out.println(alienOrder(new String[]{"z","x","z"})); // Expected: ""
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <queue>
using namespace std;

string alienOrder(vector<string>& words) {
    // Write your solution here
    
}

int main() {
    vector<string> words1 = {"wrt","wrf","er","ett","rftt"};
    cout << alienOrder(words1) << endl; // Expected: "wertf"
    
    vector<string> words2 = {"z","x"};
    cout << alienOrder(words2) << endl; // Expected: "zx"
    
    vector<string> words3 = {"z","x","z"};
    cout << alienOrder(words3) << endl; // Expected: ""
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* alienOrder(char** words, int wordsSize) {
    // Write your solution here
    
}

int main() {
    char* words1[] = {"wrt","wrf","er","ett","rftt"};
    char* result1 = alienOrder(words1, 5);
    printf("%s\\n", result1); // Expected: "wertf"
    free(result1);
    
    char* words2[] = {"z","x"};
    char* result2 = alienOrder(words2, 2);
    printf("%s\\n", result2); // Expected: "zx"
    free(result2);
    
    char* words3[] = {"z","x","z"};
    char* result3 = alienOrder(words3, 3);
    printf("%s\\n", result3); // Expected: ""
    free(result3);
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static string AlienOrder(string[] words) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(AlienOrder(new string[] {"wrt","wrf","er","ett","rftt"})); // Expected: "wertf"
        Console.WriteLine(AlienOrder(new string[] {"z","x"})); // Expected: "zx"
        Console.WriteLine(AlienOrder(new string[] {"z","x","z"})); // Expected: ""
    }
}`,

            go: `package main

import "fmt"

func alienOrder(words []string) string {
    // Write your solution here
    
}

func main() {
    fmt.Println(alienOrder([]string{"wrt","wrf","er","ett","rftt"})) // Expected: "wertf"
    fmt.Println(alienOrder([]string{"z","x"})) // Expected: "zx"
    fmt.Println(alienOrder([]string{"z","x","z"})) // Expected: ""
}`,

            rust: `use std::collections::{HashMap, HashSet, VecDeque};

fn alien_order(words: Vec<String>) -> String {
    // Write your solution here
    
}

fn main() {
    println!("{}", alien_order(vec!["wrt".to_string(), "wrf".to_string(), "er".to_string(), "ett".to_string(), "rftt".to_string()])); // Expected: "wertf"
    println!("{}", alien_order(vec!["z".to_string(), "x".to_string()])); // Expected: "zx"
    println!("{}", alien_order(vec!["z".to_string(), "x".to_string(), "z".to_string()])); // Expected: ""
}`,

            ruby: `def alien_order(words)
    # Write your solution here
    
end

# Test cases
puts alien_order(['wrt','wrf','er','ett','rftt']) # Expected: 'wertf'
puts alien_order(['z','x']) # Expected: 'zx'
puts alien_order(['z','x','z']) # Expected: ''`,

            php: `<?php
function alienOrder($words) {
    // Write your solution here
    
}

// Test cases
echo alienOrder(['wrt','wrf','er','ett','rftt']) . "\\n"; // Expected: 'wertf'
echo alienOrder(['z','x']) . "\\n"; // Expected: 'zx'
echo alienOrder(['z','x','z']) . "\\n"; // Expected: ''
?>`,

            swift: `func alienOrder(_ words: [String]) -> String {
    // Write your solution here
    
}

// Test cases
print(alienOrder(["wrt","wrf","er","ett","rftt"])) // Expected: "wertf"
print(alienOrder(["z","x"])) // Expected: "zx"
print(alienOrder(["z","x","z"])) // Expected: ""`,

            kotlin: `fun alienOrder(words: Array<String>): String {
    // Write your solution here
    
}

fun main() {
    println(alienOrder(arrayOf("wrt","wrf","er","ett","rftt"))) // Expected: "wertf"
    println(alienOrder(arrayOf("z","x"))) // Expected: "zx"
    println(alienOrder(arrayOf("z","x","z"))) // Expected: ""
}`,

            scala: `import scala.collection.mutable

object Solution {
    def alienOrder(words: Array[String]): String = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(alienOrder(Array("wrt","wrf","er","ett","rftt"))) // Expected: "wertf"
        println(alienOrder(Array("z","x"))) // Expected: "zx"
        println(alienOrder(Array("z","x","z"))) // Expected: ""
    }
}`,

            perl: `sub alienOrder {
    my $words = shift;
    # Write your solution here
    
}

# Test cases
print alienOrder(['wrt','wrf','er','ett','rftt']) . "\\n"; # Expected: 'wertf'
print alienOrder(['z','x']) . "\\n"; # Expected: 'zx'
print alienOrder(['z','x','z']) . "\\n"; # Expected: ''`,

            r: `alienOrder <- function(words) {
    # Write your solution here
    
}

# Test cases
print(alienOrder(c('wrt','wrf','er','ett','rftt'))) # Expected: 'wertf'
print(alienOrder(c('z','x'))) # Expected: 'zx'
print(alienOrder(c('z','x','z'))) # Expected: ''`
        },
        expectedOutput: {
            javascript: "wertf\nzx\n",
            python: "wertf\nzx\n",
            java: "wertf\nzx\n",
        },
    },

    "minimum-height-trees": {
        id: "minimum-height-trees",
        title: "Minimum Height Trees",
        difficulty: "Medium",
        category: "Graph • BFS • Topological Sort",
        description: {
            text: "A tree is an undirected graph in which any two vertices are connected by exactly one path. For such a tree, you can choose any node as the root to obtain a rooted tree. Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs). Given a tree of n nodes labelled from 0 to n-1, and an array of edges, find all MHTs and return a list of their root labels.",
            notes: [
                "Return all MHTs root labels in any order.",
                "The tree has n nodes and n-1 edges."
            ],
        },
        examples: [
            {
                input: "n = 4, edges = [[1,0],[1,2],[1,3]]",
                output: "[1]",
                explanation: "When rooted at node 1, the height is 1, which is minimum.",
            },
            {
                input: "n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]",
                output: "[3,4]",
            },
        ],
        constraints: [
            "1 ≤ n ≤ 2 * 10⁴",
            "edges.length == n-1",
            "0 ≤ ai, bi < n",
            "ai ≠ bi",
            "All pairs are unique",
            "The graph is a valid tree",
        ],
        starterCode: {
            javascript: `function findMinHeightTrees(n, edges) {
    // Write your solution here
    
}

// Test cases
console.log(findMinHeightTrees(4, [[1,0],[1,2],[1,3]])); // Expected: [1]
console.log(findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]])); // Expected: [3,4]`,

            typescript: `function findMinHeightTrees(n: number, edges: number[][]): number[] {
    // Write your solution here
    
}

// Test cases
console.log(findMinHeightTrees(4, [[1,0],[1,2],[1,3]])); // Expected: [1]
console.log(findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]])); // Expected: [3,4]`,

            python: `def findMinHeightTrees(n, edges):
    # Write your solution here
    pass

# Test cases
print(findMinHeightTrees(4, [[1,0],[1,2],[1,3]]))  # Expected: [1]
print(findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]]))  # Expected: [3,4]`,

            java: `import java.util.*;

class Solution {
    public static List<Integer> findMinHeightTrees(int n, int[][] edges) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(findMinHeightTrees(4, new int[][]{{1,0},{1,2},{1,3}})); // Expected: [1]
        System.out.println(findMinHeightTrees(6, new int[][]{{3,0},{3,1},{3,2},{3,4},{5,4}})); // Expected: [3,4]
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <unordered_map>
using namespace std;

vector<int> findMinHeightTrees(int n, vector<vector<int>>& edges) {
    // Write your solution here
    
}

int main() {
    vector<vector<int>> edges1 = {{1,0},{1,2},{1,3}};
    vector<int> result1 = findMinHeightTrees(4, edges1);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << result1[i];
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: [1]
    
    vector<vector<int>> edges2 = {{3,0},{3,1},{3,2},{3,4},{5,4}};
    vector<int> result2 = findMinHeightTrees(6, edges2);
    cout << "[";
    for (size_t i = 0; i < result2.size(); i++) {
        cout << result2[i];
        if (i < result2.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: [3,4]
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int* findMinHeightTrees(int n, int** edges, int edgesSize, int* edgesColSize, int* returnSize) {
    // Write your solution here
    
}

int main() {
    int edges1_data[][2] = {{1,0},{1,2},{1,3}};
    int* edges1[] = {edges1_data[0], edges1_data[1], edges1_data[2]};
    int edgesColSize1[] = {2,2,2};
    int returnSize1;
    int* result1 = findMinHeightTrees(4, edges1, 3, edgesColSize1, &returnSize1);
    printf("[");
    for (int i = 0; i < returnSize1; i++) {
        printf("%d", result1[i]);
        if (i < returnSize1 - 1) printf(",");
    }
    printf("]\\n"); // Expected: [1]
    free(result1);
    
    int edges2_data[][2] = {{3,0},{3,1},{3,2},{3,4},{5,4}};
    int* edges2[] = {edges2_data[0], edges2_data[1], edges2_data[2], edges2_data[3], edges2_data[4]};
    int edgesColSize2[] = {2,2,2,2,2};
    int returnSize2;
    int* result2 = findMinHeightTrees(6, edges2, 5, edgesColSize2, &returnSize2);
    printf("[");
    for (int i = 0; i < returnSize2; i++) {
        printf("%d", result2[i]);
        if (i < returnSize2 - 1) printf(",");
    }
    printf("]\\n"); // Expected: [3,4]
    free(result2);
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<int> FindMinHeightTrees(int n, int[][] edges) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine($"[{string.Join(",", FindMinHeightTrees(4, new int[][] { new int[] {1,0}, new int[] {1,2}, new int[] {1,3} }))}]"); // Expected: [1]
        Console.WriteLine($"[{string.Join(",", FindMinHeightTrees(6, new int[][] { new int[] {3,0}, new int[] {3,1}, new int[] {3,2}, new int[] {3,4}, new int[] {5,4} }))}]"); // Expected: [3,4]
    }
}`,

            go: `package main

import "fmt"

func findMinHeightTrees(n int, edges [][]int) []int {
    // Write your solution here
    
}

func main() {
    fmt.Println(findMinHeightTrees(4, [][]int{{1,0},{1,2},{1,3}})) // Expected: [1]
    fmt.Println(findMinHeightTrees(6, [][]int{{3,0},{3,1},{3,2},{3,4},{5,4}})) // Expected: [3,4]
}`,

            rust: `use std::collections::{VecDeque, HashSet};

fn find_min_height_trees(n: i32, edges: Vec<Vec<i32>>) -> Vec<i32> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", find_min_height_trees(4, vec![vec![1,0], vec![1,2], vec![1,3]])); // Expected: [1]
    println!("{:?}", find_min_height_trees(6, vec![vec![3,0], vec![3,1], vec![3,2], vec![3,4], vec![5,4]])); // Expected: [3,4]
}`,

            ruby: `def find_min_height_trees(n, edges)
    # Write your solution here
    
end

# Test cases
puts find_min_height_trees(4, [[1,0],[1,2],[1,3]]).inspect # Expected: [1]
puts find_min_height_trees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]]).inspect # Expected: [3,4]`,

            php: `<?php
function findMinHeightTrees($n, $edges) {
    // Write your solution here
    
}

// Test cases
print_r(findMinHeightTrees(4, [[1,0],[1,2],[1,3]])); // Expected: [1]
print_r(findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]])); // Expected: [3,4]
?>`,

            swift: `func findMinHeightTrees(_ n: Int, _ edges: [[Int]]) -> [Int] {
    // Write your solution here
    
}

// Test cases
print(findMinHeightTrees(4, [[1,0],[1,2],[1,3]])) // Expected: [1]
print(findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]])) // Expected: [3,4]`,

            kotlin: `fun findMinHeightTrees(n: Int, edges: Array<IntArray>): List<Int> {
    // Write your solution here
    
}

fun main() {
    println(findMinHeightTrees(4, arrayOf(intArrayOf(1,0), intArrayOf(1,2), intArrayOf(1,3)))) // Expected: [1]
    println(findMinHeightTrees(6, arrayOf(intArrayOf(3,0), intArrayOf(3,1), intArrayOf(3,2), intArrayOf(3,4), intArrayOf(5,4)))) // Expected: [3,4]
}`,

            scala: `import scala.collection.mutable

object Solution {
    def findMinHeightTrees(n: Int, edges: Array[Array[Int]]): List[Int] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(findMinHeightTrees(4, Array(Array(1,0), Array(1,2), Array(1,3)))) // Expected: List(1)
        println(findMinHeightTrees(6, Array(Array(3,0), Array(3,1), Array(3,2), Array(3,4), Array(5,4)))) // Expected: List(3,4)
    }
}`,

            perl: `sub findMinHeightTrees {
    my ($n, $edges) = @_;
    # Write your solution here
    
}

# Test cases
my @result1 = @{findMinHeightTrees(4, [[1,0],[1,2],[1,3]])};
print "[" . join(",", @result1) . "]\\n"; # Expected: [1]

my @result2 = @{findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]])};
print "[" . join(",", @result2) . "]\\n"; # Expected: [3,4]`,

            r: `findMinHeightTrees <- function(n, edges) {
    # Write your solution here
    
}

# Test cases
print(findMinHeightTrees(4, list(c(1,0), c(1,2), c(1,3)))) # Expected: 1
print(findMinHeightTrees(6, list(c(3,0), c(3,1), c(3,2), c(3,4), c(5,4)))) # Expected: 3 4`
        },
        expectedOutput: {
            javascript: "[1]\n[3,4]",
            python: "[1]\n[3, 4]",
            java: "[1]\n[3, 4]",
        },
    },

    "climbing-stairs": {
        id: "climbing-stairs",
        title: "Climbing Stairs",
        difficulty: "Easy",
        category: "Dynamic Programming • Math",
        description: {
            text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
            notes: [
                "Return the number of distinct ways to reach the top.",
                "This is essentially the Fibonacci sequence."
            ],
        },
        examples: [
            {
                input: "n = 2",
                output: "2",
                explanation: "1 step + 1 step, 2 steps",
            },
            {
                input: "n = 3",
                output: "3",
                explanation: "1+1+1, 1+2, 2+1",
            },
        ],
        constraints: [
            "1 ≤ n ≤ 45",
        ],
        starterCode: {
            javascript: `function climbStairs(n) {
    // Write your solution here
    
}

// Test cases
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3`,

            typescript: `function climbStairs(n: number): number {
    // Write your solution here
    
}

// Test cases
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3`,

            python: `def climbStairs(n):
    # Write your solution here
    pass

# Test cases
print(climbStairs(2))  # Expected: 2
print(climbStairs(3))  # Expected: 3`,

            java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(climbStairs(2)); // Expected: 2
        System.out.println(climbStairs(3)); // Expected: 3
    }
}`,

            cpp: `#include <iostream>
using namespace std;

int climbStairs(int n) {
    // Write your solution here
    
}

int main() {
    cout << climbStairs(2) << endl; // Expected: 2
    cout << climbStairs(3) << endl; // Expected: 3
    return 0;
}`,

            c: `#include <stdio.h>

int climbStairs(int n) {
    // Write your solution here
    
}

int main() {
    printf("%d\\n", climbStairs(2)); // Expected: 2
    printf("%d\\n", climbStairs(3)); // Expected: 3
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int ClimbStairs(int n) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(ClimbStairs(2)); // Expected: 2
        Console.WriteLine(ClimbStairs(3)); // Expected: 3
    }
}`,

            go: `package main

import "fmt"

func climbStairs(n int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(climbStairs(2)) // Expected: 2
    fmt.Println(climbStairs(3)) // Expected: 3
}`,

            rust: `fn climb_stairs(n: i32) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", climb_stairs(2)); // Expected: 2
    println!("{}", climb_stairs(3)); // Expected: 3
}`,

            ruby: `def climb_stairs(n)
    # Write your solution here
    
end

# Test cases
puts climb_stairs(2) # Expected: 2
puts climb_stairs(3) # Expected: 3`,

            php: `<?php
function climbStairs($n) {
    // Write your solution here
    
}

// Test cases
echo climbStairs(2) . "\\n"; // Expected: 2
echo climbStairs(3) . "\\n"; // Expected: 3
?>`,

            swift: `func climbStairs(_ n: Int) -> Int {
    // Write your solution here
    
}

// Test cases
print(climbStairs(2)) // Expected: 2
print(climbStairs(3)) // Expected: 3`,

            kotlin: `fun climbStairs(n: Int): Int {
    // Write your solution here
    
}

fun main() {
    println(climbStairs(2)) // Expected: 2
    println(climbStairs(3)) // Expected: 3
}`,

            scala: `object Solution {
    def climbStairs(n: Int): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(climbStairs(2)) // Expected: 2
        println(climbStairs(3)) // Expected: 3
    }
}`,

            perl: `sub climbStairs {
    my $n = shift;
    # Write your solution here
    
}

# Test cases
print climbStairs(2) . "\\n"; # Expected: 2
print climbStairs(3) . "\\n"; # Expected: 3`,

            r: `climbStairs <- function(n) {
    # Write your solution here
    
}

# Test cases
print(climbStairs(2)) # Expected: 2
print(climbStairs(3)) # Expected: 3`
        },
        expectedOutput: {
            javascript: "2\n3",
            python: "2\n3",
            java: "2\n3",
        },
    },

    "coin-change": {
        id: "coin-change",
        title: "Coin Change",
        difficulty: "Medium",
        category: "Dynamic Programming • BFS",
        description: {
            text: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
            notes: [
                "You may assume that you have an infinite number of each kind of coin.",
                "You need to find the minimum number of coins."
            ],
        },
        examples: [
            {
                input: "coins = [1,2,5], amount = 11",
                output: "3",
                explanation: "11 = 5 + 5 + 1",
            },
            {
                input: "coins = [2], amount = 3",
                output: "-1",
            },
            {
                input: "coins = [1], amount = 0",
                output: "0",
            },
        ],
        constraints: [
            "1 ≤ coins.length ≤ 12",
            "1 ≤ coins[i] ≤ 2³¹ - 1",
            "0 ≤ amount ≤ 10⁴",
        ],
        starterCode: {
            javascript: `function coinChange(coins, amount) {
    // Write your solution here
    
}

// Test cases
console.log(coinChange([1,2,5], 11)); // Expected: 3
console.log(coinChange([2], 3)); // Expected: -1
console.log(coinChange([1], 0)); // Expected: 0`,

            typescript: `function coinChange(coins: number[], amount: number): number {
    // Write your solution here
    
}

// Test cases
console.log(coinChange([1,2,5], 11)); // Expected: 3
console.log(coinChange([2], 3)); // Expected: -1
console.log(coinChange([1], 0)); // Expected: 0`,

            python: `def coinChange(coins, amount):
    # Write your solution here
    pass

# Test cases
print(coinChange([1,2,5], 11))  # Expected: 3
print(coinChange([2], 3))  # Expected: -1
print(coinChange([1], 0))  # Expected: 0`,

            java: `import java.util.*;

class Solution {
    public static int coinChange(int[] coins, int amount) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(coinChange(new int[]{1,2,5}, 11)); // Expected: 3
        System.out.println(coinChange(new int[]{2}, 3)); // Expected: -1
        System.out.println(coinChange(new int[]{1}, 0)); // Expected: 0
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int coinChange(vector<int>& coins, int amount) {
    // Write your solution here
    
}

int main() {
    vector<int> coins1 = {1,2,5};
    cout << coinChange(coins1, 11) << endl; // Expected: 3
    
    vector<int> coins2 = {2};
    cout << coinChange(coins2, 3) << endl; // Expected: -1
    
    vector<int> coins3 = {1};
    cout << coinChange(coins3, 0) << endl; // Expected: 0
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int coinChange(int* coins, int coinsSize, int amount) {
    // Write your solution here
    
}

int main() {
    int coins1[] = {1,2,5};
    printf("%d\\n", coinChange(coins1, 3, 11)); // Expected: 3
    
    int coins2[] = {2};
    printf("%d\\n", coinChange(coins2, 1, 3)); // Expected: -1
    
    int coins3[] = {1};
    printf("%d\\n", coinChange(coins3, 1, 0)); // Expected: 0
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int CoinChange(int[] coins, int amount) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(CoinChange(new int[] {1,2,5}, 11)); // Expected: 3
        Console.WriteLine(CoinChange(new int[] {2}, 3)); // Expected: -1
        Console.WriteLine(CoinChange(new int[] {1}, 0)); // Expected: 0
    }
}`,

            go: `package main

import "fmt"

func coinChange(coins []int, amount int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(coinChange([]int{1,2,5}, 11)) // Expected: 3
    fmt.Println(coinChange([]int{2}, 3)) // Expected: -1
    fmt.Println(coinChange([]int{1}, 0)) // Expected: 0
}`,

            rust: `fn coin_change(coins: Vec<i32>, amount: i32) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", coin_change(vec![1,2,5], 11)); // Expected: 3
    println!("{}", coin_change(vec![2], 3)); // Expected: -1
    println!("{}", coin_change(vec![1], 0)); // Expected: 0
}`,

            ruby: `def coin_change(coins, amount)
    # Write your solution here
    
end

# Test cases
puts coin_change([1,2,5], 11) # Expected: 3
puts coin_change([2], 3) # Expected: -1
puts coin_change([1], 0) # Expected: 0`,

            php: `<?php
function coinChange($coins, $amount) {
    // Write your solution here
    
}

// Test cases
echo coinChange([1,2,5], 11) . "\\n"; // Expected: 3
echo coinChange([2], 3) . "\\n"; // Expected: -1
echo coinChange([1], 0) . "\\n"; // Expected: 0
?>`,

            swift: `func coinChange(_ coins: [Int], _ amount: Int) -> Int {
    // Write your solution here
    
}

// Test cases
print(coinChange([1,2,5], 11)) // Expected: 3
print(coinChange([2], 3)) // Expected: -1
print(coinChange([1], 0)) // Expected: 0`,

            kotlin: `fun coinChange(coins: IntArray, amount: Int): Int {
    // Write your solution here
    
}

fun main() {
    println(coinChange(intArrayOf(1,2,5), 11)) // Expected: 3
    println(coinChange(intArrayOf(2), 3)) // Expected: -1
    println(coinChange(intArrayOf(1), 0)) // Expected: 0
}`,

            scala: `object Solution {
    def coinChange(coins: Array[Int], amount: Int): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(coinChange(Array(1,2,5), 11)) // Expected: 3
        println(coinChange(Array(2), 3)) // Expected: -1
        println(coinChange(Array(1), 0)) // Expected: 0
    }
}`,

            perl: `sub coinChange {
    my ($coins, $amount) = @_;
    # Write your solution here
    
}

# Test cases
print coinChange([1,2,5], 11) . "\\n"; # Expected: 3
print coinChange([2], 3) . "\\n"; # Expected: -1
print coinChange([1], 0) . "\\n"; # Expected: 0`,

            r: `coinChange <- function(coins, amount) {
    # Write your solution here
    
}

# Test cases
print(coinChange(c(1,2,5), 11)) # Expected: 3
print(coinChange(c(2), 3)) # Expected: -1
print(coinChange(c(1), 0)) # Expected: 0`
        },
        expectedOutput: {
            javascript: "3\n-1\n0",
            python: "3\n-1\n0",
            java: "3\n-1\n0",
        },
    },

    "longest-increasing-subsequence": {
        id: "longest-increasing-subsequence",
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        category: "Array • Dynamic Programming • Binary Search",
        description: {
            text: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
            notes: [
                "A subsequence is a sequence that can be derived by deleting some elements without changing the order.",
                "The subsequence must be strictly increasing."
            ],
        },
        examples: [
            {
                input: "nums = [10,9,2,5,3,7,101,18]",
                output: "4",
                explanation: "The longest increasing subsequence is [2,3,7,101] or [2,5,7,101].",
            },
            {
                input: "nums = [0,1,0,3,2,3]",
                output: "4",
            },
            {
                input: "nums = [7,7,7,7,7,7,7]",
                output: "1",
            },
        ],
        constraints: [
            "1 ≤ nums.length ≤ 2500",
            "-10⁴ ≤ nums[i] ≤ 10⁴",
        ],
        starterCode: {
            javascript: `function lengthOfLIS(nums) {
    // Write your solution here
    
}

// Test cases
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // Expected: 4
console.log(lengthOfLIS([0,1,0,3,2,3])); // Expected: 4
console.log(lengthOfLIS([7,7,7,7,7,7,7])); // Expected: 1`,

            typescript: `function lengthOfLIS(nums: number[]): number {
    // Write your solution here
    
}

// Test cases
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // Expected: 4
console.log(lengthOfLIS([0,1,0,3,2,3])); // Expected: 4
console.log(lengthOfLIS([7,7,7,7,7,7,7])); // Expected: 1`,

            python: `def lengthOfLIS(nums):
    # Write your solution here
    pass

# Test cases
print(lengthOfLIS([10,9,2,5,3,7,101,18]))  # Expected: 4
print(lengthOfLIS([0,1,0,3,2,3]))  # Expected: 4
print(lengthOfLIS([7,7,7,7,7,7,7]))  # Expected: 1`,

            java: `class Solution {
    public static int lengthOfLIS(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(lengthOfLIS(new int[]{10,9,2,5,3,7,101,18})); // Expected: 4
        System.out.println(lengthOfLIS(new int[]{0,1,0,3,2,3})); // Expected: 4
        System.out.println(lengthOfLIS(new int[]{7,7,7,7,7,7,7})); // Expected: 1
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int lengthOfLIS(vector<int>& nums) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {10,9,2,5,3,7,101,18};
    cout << lengthOfLIS(nums1) << endl; // Expected: 4
    
    vector<int> nums2 = {0,1,0,3,2,3};
    cout << lengthOfLIS(nums2) << endl; // Expected: 4
    
    vector<int> nums3 = {7,7,7,7,7,7,7};
    cout << lengthOfLIS(nums3) << endl; // Expected: 1
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int lengthOfLIS(int* nums, int numsSize) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {10,9,2,5,3,7,101,18};
    printf("%d\\n", lengthOfLIS(nums1, 8)); // Expected: 4
    
    int nums2[] = {0,1,0,3,2,3};
    printf("%d\\n", lengthOfLIS(nums2, 6)); // Expected: 4
    
    int nums3[] = {7,7,7,7,7,7,7};
    printf("%d\\n", lengthOfLIS(nums3, 7)); // Expected: 1
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int LengthOfLIS(int[] nums) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(LengthOfLIS(new int[] {10,9,2,5,3,7,101,18})); // Expected: 4
        Console.WriteLine(LengthOfLIS(new int[] {0,1,0,3,2,3})); // Expected: 4
        Console.WriteLine(LengthOfLIS(new int[] {7,7,7,7,7,7,7})); // Expected: 1
    }
}`,

            go: `package main

import "fmt"

func lengthOfLIS(nums []int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(lengthOfLIS([]int{10,9,2,5,3,7,101,18})) // Expected: 4
    fmt.Println(lengthOfLIS([]int{0,1,0,3,2,3})) // Expected: 4
    fmt.Println(lengthOfLIS([]int{7,7,7,7,7,7,7})) // Expected: 1
}`,

            rust: `fn length_of_lis(nums: Vec<i32>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", length_of_lis(vec![10,9,2,5,3,7,101,18])); // Expected: 4
    println!("{}", length_of_lis(vec![0,1,0,3,2,3])); // Expected: 4
    println!("{}", length_of_lis(vec![7,7,7,7,7,7,7])); // Expected: 1
}`,

            ruby: `def length_of_lis(nums)
    # Write your solution here
    
end

# Test cases
puts length_of_lis([10,9,2,5,3,7,101,18]) # Expected: 4
puts length_of_lis([0,1,0,3,2,3]) # Expected: 4
puts length_of_lis([7,7,7,7,7,7,7]) # Expected: 1`,

            php: `<?php
function lengthOfLIS($nums) {
    // Write your solution here
    
}

// Test cases
echo lengthOfLIS([10,9,2,5,3,7,101,18]) . "\\n"; // Expected: 4
echo lengthOfLIS([0,1,0,3,2,3]) . "\\n"; // Expected: 4
echo lengthOfLIS([7,7,7,7,7,7,7]) . "\\n"; // Expected: 1
?>`,

            swift: `func lengthOfLIS(_ nums: [Int]) -> Int {
    // Write your solution here
    
}

// Test cases
print(lengthOfLIS([10,9,2,5,3,7,101,18])) // Expected: 4
print(lengthOfLIS([0,1,0,3,2,3])) // Expected: 4
print(lengthOfLIS([7,7,7,7,7,7,7])) // Expected: 1`,

            kotlin: `fun lengthOfLIS(nums: IntArray): Int {
    // Write your solution here
    
}

fun main() {
    println(lengthOfLIS(intArrayOf(10,9,2,5,3,7,101,18))) // Expected: 4
    println(lengthOfLIS(intArrayOf(0,1,0,3,2,3))) // Expected: 4
    println(lengthOfLIS(intArrayOf(7,7,7,7,7,7,7))) // Expected: 1
}`,

            scala: `object Solution {
    def lengthOfLIS(nums: Array[Int]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(lengthOfLIS(Array(10,9,2,5,3,7,101,18))) // Expected: 4
        println(lengthOfLIS(Array(0,1,0,3,2,3))) // Expected: 4
        println(lengthOfLIS(Array(7,7,7,7,7,7,7))) // Expected: 1
    }
}`,

            perl: `sub lengthOfLIS {
    my $nums = shift;
    # Write your solution here
    
}

# Test cases
print lengthOfLIS([10,9,2,5,3,7,101,18]) . "\\n"; # Expected: 4
print lengthOfLIS([0,1,0,3,2,3]) . "\\n"; # Expected: 4
print lengthOfLIS([7,7,7,7,7,7,7]) . "\\n"; # Expected: 1`,

            r: `lengthOfLIS <- function(nums) {
    # Write your solution here
    
}

# Test cases
print(lengthOfLIS(c(10,9,2,5,3,7,101,18))) # Expected: 4
print(lengthOfLIS(c(0,1,0,3,2,3))) # Expected: 4
print(lengthOfLIS(c(7,7,7,7,7,7,7))) # Expected: 1`
        },
        expectedOutput: {
            javascript: "4\n4\n1",
            python: "4\n4\n1",
            java: "4\n4\n1",
        },
    },

    "edit-distance": {
        id: "edit-distance",
        title: "Edit Distance",
        difficulty: "Hard",
        category: "String • Dynamic Programming",
        description: {
            text: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.",
            notes: [
                "You have three operations permitted: Insert a character, Delete a character, Replace a character.",
                "This is also known as Levenshtein distance."
            ],
        },
        examples: [
            {
                input: "word1 = 'horse', word2 = 'ros'",
                output: "3",
                explanation: "horse -> rorse (replace 'h' with 'r') -> rose (remove 'r') -> ros (remove 'e')",
            },
            {
                input: "word1 = 'intention', word2 = 'execution'",
                output: "5",
                explanation: "intention -> inention (remove 't') -> enention (replace 'i' with 'e') -> exention (replace 'n' with 'x') -> exection (replace 'n' with 'c') -> execution (insert 'u')",
            },
        ],
        constraints: [
            "0 ≤ word1.length, word2.length ≤ 500",
            "word1 and word2 consist of lowercase English letters",
        ],
        starterCode: {
            javascript: `function minDistance(word1, word2) {
    // Write your solution here
    
}

// Test cases
console.log(minDistance('horse', 'ros')); // Expected: 3
console.log(minDistance('intention', 'execution')); // Expected: 5`,

            typescript: `function minDistance(word1: string, word2: string): number {
    // Write your solution here
    
}

// Test cases
console.log(minDistance('horse', 'ros')); // Expected: 3
console.log(minDistance('intention', 'execution')); // Expected: 5`,

            python: `def minDistance(word1, word2):
    # Write your solution here
    pass

# Test cases
print(minDistance('horse', 'ros'))  # Expected: 3
print(minDistance('intention', 'execution'))  # Expected: 5`,

            java: `class Solution {
    public static int minDistance(String word1, String word2) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(minDistance("horse", "ros")); // Expected: 3
        System.out.println(minDistance("intention", "execution")); // Expected: 5
    }
}`,

            cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int minDistance(string word1, string word2) {
    // Write your solution here
    
}

int main() {
    cout << minDistance("horse", "ros") << endl; // Expected: 3
    cout << minDistance("intention", "execution") << endl; // Expected: 5
    return 0;
}`,

            c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int minDistance(char* word1, char* word2) {
    // Write your solution here
    
}

int main() {
    printf("%d\\n", minDistance("horse", "ros")); // Expected: 3
    printf("%d\\n", minDistance("intention", "execution")); // Expected: 5
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int MinDistance(string word1, string word2) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(MinDistance("horse", "ros")); // Expected: 3
        Console.WriteLine(MinDistance("intention", "execution")); // Expected: 5
    }
}`,

            go: `package main

import "fmt"

func minDistance(word1 string, word2 string) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(minDistance("horse", "ros")) // Expected: 3
    fmt.Println(minDistance("intention", "execution")) // Expected: 5
}`,

            rust: `fn min_distance(word1: String, word2: String) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", min_distance("horse".to_string(), "ros".to_string())); // Expected: 3
    println!("{}", min_distance("intention".to_string(), "execution".to_string())); // Expected: 5
}`,

            ruby: `def min_distance(word1, word2)
    # Write your solution here
    
end

# Test cases
puts min_distance('horse', 'ros') # Expected: 3
puts min_distance('intention', 'execution') # Expected: 5`,

            php: `<?php
function minDistance($word1, $word2) {
    // Write your solution here
    
}

// Test cases
echo minDistance('horse', 'ros') . "\\n"; // Expected: 3
echo minDistance('intention', 'execution') . "\\n"; // Expected: 5
?>`,

            swift: `func minDistance(_ word1: String, _ word2: String) -> Int {
    // Write your solution here
    
}

// Test cases
print(minDistance("horse", "ros")) // Expected: 3
print(minDistance("intention", "execution")) // Expected: 5`,

            kotlin: `fun minDistance(word1: String, word2: String): Int {
    // Write your solution here
    
}

fun main() {
    println(minDistance("horse", "ros")) // Expected: 3
    println(minDistance("intention", "execution")) // Expected: 5
}`,

            scala: `object Solution {
    def minDistance(word1: String, word2: String): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(minDistance("horse", "ros")) // Expected: 3
        println(minDistance("intention", "execution")) // Expected: 5
    }
}`,

            perl: `sub minDistance {
    my ($word1, $word2) = @_;
    # Write your solution here
    
}

# Test cases
print minDistance('horse', 'ros') . "\\n"; # Expected: 3
print minDistance('intention', 'execution') . "\\n"; # Expected: 5`,

            r: `minDistance <- function(word1, word2) {
    # Write your solution here
    
}

# Test cases
print(minDistance('horse', 'ros')) # Expected: 3
print(minDistance('intention', 'execution')) # Expected: 5`
        },
        expectedOutput: {
            javascript: "3\n5",
            python: "3\n5",
            java: "3\n5",
        },
    },

    "unique-paths": {
        id: "unique-paths",
        title: "Unique Paths",
        difficulty: "Medium",
        category: "Dynamic Programming • Combinatorics",
        description: {
            text: "There is a robot on an m x n grid. The robot is initially at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down or right at any point in time. Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.",
            notes: [
                "The test cases are generated so that the answer will be less than or equal to 2 * 10⁹.",
                "You can solve this using combinatorics or DP."
            ],
        },
        examples: [
            {
                input: "m = 3, n = 7",
                output: "28",
            },
            {
                input: "m = 3, n = 2",
                output: "3",
                explanation: "From top-left to bottom-right there are a total of 3 paths: Right->Down->Down, Down->Down->Right, Down->Right->Down",
            },
        ],
        constraints: [
            "1 ≤ m, n ≤ 100",
        ],
        starterCode: {
            javascript: `function uniquePaths(m, n) {
    // Write your solution here
    
}

// Test cases
console.log(uniquePaths(3, 7)); // Expected: 28
console.log(uniquePaths(3, 2)); // Expected: 3`,

            typescript: `function uniquePaths(m: number, n: number): number {
    // Write your solution here
    
}

// Test cases
console.log(uniquePaths(3, 7)); // Expected: 28
console.log(uniquePaths(3, 2)); // Expected: 3`,

            python: `def uniquePaths(m, n):
    # Write your solution here
    pass

# Test cases
print(uniquePaths(3, 7))  # Expected: 28
print(uniquePaths(3, 2))  # Expected: 3`,

            java: `class Solution {
    public static int uniquePaths(int m, int n) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(uniquePaths(3, 7)); // Expected: 28
        System.out.println(uniquePaths(3, 2)); // Expected: 3
    }
}`,

            cpp: `#include <iostream>
#include <vector>
using namespace std;

int uniquePaths(int m, int n) {
    // Write your solution here
    
}

int main() {
    cout << uniquePaths(3, 7) << endl; // Expected: 28
    cout << uniquePaths(3, 2) << endl; // Expected: 3
    return 0;
}`,

            c: `#include <stdio.h>

int uniquePaths(int m, int n) {
    // Write your solution here
    
}

int main() {
    printf("%d\\n", uniquePaths(3, 7)); // Expected: 28
    printf("%d\\n", uniquePaths(3, 2)); // Expected: 3
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int UniquePaths(int m, int n) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(UniquePaths(3, 7)); // Expected: 28
        Console.WriteLine(UniquePaths(3, 2)); // Expected: 3
    }
}`,

            go: `package main

import "fmt"

func uniquePaths(m int, n int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(uniquePaths(3, 7)) // Expected: 28
    fmt.Println(uniquePaths(3, 2)) // Expected: 3
}`,

            rust: `fn unique_paths(m: i32, n: i32) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", unique_paths(3, 7)); // Expected: 28
    println!("{}", unique_paths(3, 2)); // Expected: 3
}`,

            ruby: `def unique_paths(m, n)
    # Write your solution here
    
end

# Test cases
puts unique_paths(3, 7) # Expected: 28
puts unique_paths(3, 2) # Expected: 3`,

            php: `<?php
function uniquePaths($m, $n) {
    // Write your solution here
    
}

// Test cases
echo uniquePaths(3, 7) . "\\n"; // Expected: 28
echo uniquePaths(3, 2) . "\\n"; // Expected: 3
?>`,

            swift: `func uniquePaths(_ m: Int, _ n: Int) -> Int {
    // Write your solution here
    
}

// Test cases
print(uniquePaths(3, 7)) // Expected: 28
print(uniquePaths(3, 2)) // Expected: 3`,

            kotlin: `fun uniquePaths(m: Int, n: Int): Int {
    // Write your solution here
    
}

fun main() {
    println(uniquePaths(3, 7)) // Expected: 28
    println(uniquePaths(3, 2)) // Expected: 3
}`,

            scala: `object Solution {
    def uniquePaths(m: Int, n: Int): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(uniquePaths(3, 7)) // Expected: 28
        println(uniquePaths(3, 2)) // Expected: 3
    }
}`,

            perl: `sub uniquePaths {
    my ($m, $n) = @_;
    # Write your solution here
    
}

# Test cases
print uniquePaths(3, 7) . "\\n"; # Expected: 28
print uniquePaths(3, 2) . "\\n"; # Expected: 3`,

            r: `uniquePaths <- function(m, n) {
    # Write your solution here
    
}

# Test cases
print(uniquePaths(3, 7)) # Expected: 28
print(uniquePaths(3, 2)) # Expected: 3`
        },
        expectedOutput: {
            javascript: "28\n3",
            python: "28\n3",
            java: "28\n3",
        },
    },

    "jump-game": {
        id: "jump-game",
        title: "Jump Game",
        difficulty: "Medium",
        category: "Array • Dynamic Programming • Greedy",
        description: {
            text: "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.",
            notes: [
                "You can jump from index i to any index up to i + nums[i] (inclusive).",
                "You start at index 0."
            ],
        },
        examples: [
            {
                input: "nums = [2,3,1,1,4]",
                output: "true",
                explanation: "Jump 1 step from index 0 to 1, then 3 steps to the last index.",
            },
            {
                input: "nums = [3,2,1,0,4]",
                output: "false",
                explanation: "You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.",
            },
        ],
        constraints: [
            "1 ≤ nums.length ≤ 10⁴",
            "0 ≤ nums[i] ≤ 10⁵",
        ],
        starterCode: {
            javascript: `function canJump(nums) {
    // Write your solution here
    
}

// Test cases
console.log(canJump([2,3,1,1,4])); // Expected: true
console.log(canJump([3,2,1,0,4])); // Expected: false`,

            typescript: `function canJump(nums: number[]): boolean {
    // Write your solution here
    
}

// Test cases
console.log(canJump([2,3,1,1,4])); // Expected: true
console.log(canJump([3,2,1,0,4])); // Expected: false`,

            python: `def canJump(nums):
    # Write your solution here
    pass

# Test cases
print(canJump([2,3,1,1,4]))  # Expected: True
print(canJump([3,2,1,0,4]))  # Expected: False`,

            java: `class Solution {
    public static boolean canJump(int[] nums) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(canJump(new int[]{2,3,1,1,4})); // Expected: true
        System.out.println(canJump(new int[]{3,2,1,0,4})); // Expected: false
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool canJump(vector<int>& nums) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {2,3,1,1,4};
    cout << boolalpha;
    cout << canJump(nums1) << endl; // Expected: true
    
    vector<int> nums2 = {3,2,1,0,4};
    cout << canJump(nums2) << endl; // Expected: false
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdbool.h>

bool canJump(int* nums, int numsSize) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {2,3,1,1,4};
    printf("%d\\n", canJump(nums1, 5)); // Expected: 1 (true)
    
    int nums2[] = {3,2,1,0,4};
    printf("%d\\n", canJump(nums2, 5)); // Expected: 0 (false)
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static bool CanJump(int[] nums) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(CanJump(new int[] {2,3,1,1,4})); // Expected: True
        Console.WriteLine(CanJump(new int[] {3,2,1,0,4})); // Expected: False
    }
}`,

            go: `package main

import "fmt"

func canJump(nums []int) bool {
    // Write your solution here
    
}

func main() {
    fmt.Println(canJump([]int{2,3,1,1,4})) // Expected: true
    fmt.Println(canJump([]int{3,2,1,0,4})) // Expected: false
}`,

            rust: `fn can_jump(nums: Vec<i32>) -> bool {
    // Write your solution here
    
}

fn main() {
    println!("{}", can_jump(vec![2,3,1,1,4])); // Expected: true
    println!("{}", can_jump(vec![3,2,1,0,4])); // Expected: false
}`,

            ruby: `def can_jump(nums)
    # Write your solution here
    
end

# Test cases
puts can_jump([2,3,1,1,4]) # Expected: true
puts can_jump([3,2,1,0,4]) # Expected: false`,

            php: `<?php
function canJump($nums) {
    // Write your solution here
    
}

// Test cases
echo var_export(canJump([2,3,1,1,4]), true) . "\\n"; // Expected: true
echo var_export(canJump([3,2,1,0,4]), true) . "\\n"; // Expected: false
?>`,

            swift: `func canJump(_ nums: [Int]) -> Bool {
    // Write your solution here
    
}

// Test cases
print(canJump([2,3,1,1,4])) // Expected: true
print(canJump([3,2,1,0,4])) // Expected: false`,

            kotlin: `fun canJump(nums: IntArray): Boolean {
    // Write your solution here
    
}

fun main() {
    println(canJump(intArrayOf(2,3,1,1,4))) // Expected: true
    println(canJump(intArrayOf(3,2,1,0,4))) // Expected: false
}`,

            scala: `object Solution {
    def canJump(nums: Array[Int]): Boolean = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(canJump(Array(2,3,1,1,4))) // Expected: true
        println(canJump(Array(3,2,1,0,4))) // Expected: false
    }
}`,

            perl: `sub canJump {
    my $nums = shift;
    # Write your solution here
    
}

# Test cases
print canJump([2,3,1,1,4]) ? "true\\n" : "false\\n"; # Expected: true
print canJump([3,2,1,0,4]) ? "true\\n" : "false\\n"; # Expected: false`,

            r: `canJump <- function(nums) {
    # Write your solution here
    
}

# Test cases
print(canJump(c(2,3,1,1,4))) # Expected: TRUE
print(canJump(c(3,2,1,0,4))) # Expected: FALSE`
        },
        expectedOutput: {
            javascript: "true\nfalse",
            python: "True\nFalse",
            java: "true\nfalse",
        },
    },

    "merge-intervals": {
        id: "merge-intervals",
        title: "Merge Intervals",
        difficulty: "Medium",
        category: "Array • Sorting",
        description: {
            text: "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
            notes: [
                "Return the merged intervals in sorted order.",
                "Intervals are inclusive."
            ],
        },
        examples: [
            {
                input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
                output: "[[1,6],[8,10],[15,18]]",
                explanation: "Since intervals [1,3] and [2,6] overlap, merge them into [1,6].",
            },
            {
                input: "intervals = [[1,4],[4,5]]",
                output: "[[1,5]]",
                explanation: "Intervals [1,4] and [4,5] are considered overlapping.",
            },
        ],
        constraints: [
            "1 ≤ intervals.length ≤ 10⁴",
            "intervals[i].length == 2",
            "0 ≤ start ≤ end ≤ 10⁴",
        ],
        starterCode: {
            javascript: `function merge(intervals) {
    // Write your solution here
    
}

// Test cases
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // Expected: [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // Expected: [[1,5]]`,

            typescript: `function merge(intervals: number[][]): number[][] {
    // Write your solution here
    
}

// Test cases
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // Expected: [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // Expected: [[1,5]]`,

            python: `def merge(intervals):
    # Write your solution here
    pass

# Test cases
print(merge([[1,3],[2,6],[8,10],[15,18]]))  # Expected: [[1,6],[8,10],[15,18]]
print(merge([[1,4],[4,5]]))  # Expected: [[1,5]]`,

            java: `import java.util.*;

class Solution {
    public static int[][] merge(int[][] intervals) {
        // Write your solution here
        
        return new int[0][];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,3},{2,6},{8,10},{15,18}}))); 
        // Expected: [[1,6],[8,10],[15,18]]
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,4},{4,5}}))); 
        // Expected: [[1,5]]
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> merge(vector<vector<int>>& intervals) {
    // Write your solution here
    
}

int main() {
    vector<vector<int>> intervals1 = {{1,3},{2,6},{8,10},{15,18}};
    vector<vector<int>> result1 = merge(intervals1);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << "[" << result1[i][0] << "," << result1[i][1] << "]";
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: [[1,6],[8,10],[15,18]]
    
    vector<vector<int>> intervals2 = {{1,4},{4,5}};
    vector<vector<int>> result2 = merge(intervals2);
    cout << "[";
    for (size_t i = 0; i < result2.size(); i++) {
        cout << "[" << result2[i][0] << "," << result2[i][1] << "]";
        if (i < result2.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: [[1,5]]
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int** merge(int** intervals, int intervalsSize, int* intervalsColSize, int* returnSize, int** returnColumnSizes) {
    // Write your solution here
    
}

int main() {
    int intervals1_data[][2] = {{1,3},{2,6},{8,10},{15,18}};
    int* intervals1[] = {intervals1_data[0], intervals1_data[1], intervals1_data[2], intervals1_data[3]};
    int intervalsColSize1[] = {2,2,2,2};
    int returnSize1;
    int* returnColumnSizes1;
    int** result1 = merge(intervals1, 4, intervalsColSize1, &returnSize1, &returnColumnSizes1);
    printf("[");
    for (int i = 0; i < returnSize1; i++) {
        printf("[%d,%d]", result1[i][0], result1[i][1]);
        if (i < returnSize1 - 1) printf(",");
    }
    printf("]\\n");
    
    int intervals2_data[][2] = {{1,4},{4,5}};
    int* intervals2[] = {intervals2_data[0], intervals2_data[1]};
    int intervalsColSize2[] = {2,2};
    int returnSize2;
    int* returnColumnSizes2;
    int** result2 = merge(intervals2, 2, intervalsColSize2, &returnSize2, &returnColumnSizes2);
    printf("[");
    for (int i = 0; i < returnSize2; i++) {
        printf("[%d,%d]", result2[i][0], result2[i][1]);
        if (i < returnSize2 - 1) printf(",");
    }
    printf("]\\n");
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int[][] Merge(int[][] intervals) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine($"[{string.Join(",", Merge(new int[][] { new int[] {1,3}, new int[] {2,6}, new int[] {8,10}, new int[] {15,18} }).Select(x => $"[{x[0]},{x[1]}]"))}]");
        Console.WriteLine($"[{string.Join(",", Merge(new int[][] { new int[] {1,4}, new int[] {4,5} }).Select(x => $"[{x[0]},{x[1]}]"))}]");
    }
}`,

            go: `package main

import "fmt"

func merge(intervals [][]int) [][]int {
    // Write your solution here
    
}

func main() {
    fmt.Println(merge([][]int{{1,3},{2,6},{8,10},{15,18}})) // Expected: [[1,6],[8,10],[15,18]]
    fmt.Println(merge([][]int{{1,4},{4,5}})) // Expected: [[1,5]]
}`,

            rust: `fn merge(intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", merge(vec![vec![1,3], vec![2,6], vec![8,10], vec![15,18]])); // Expected: [[1,6],[8,10],[15,18]]
    println!("{:?}", merge(vec![vec![1,4], vec![4,5]])); // Expected: [[1,5]]
}`,

            ruby: `def merge(intervals)
    # Write your solution here
    
end

# Test cases
puts merge([[1,3],[2,6],[8,10],[15,18]]).inspect # Expected: [[1,6],[8,10],[15,18]]
puts merge([[1,4],[4,5]]).inspect # Expected: [[1,5]]`,

            php: `<?php
function merge($intervals) {
    // Write your solution here
    
}

// Test cases
print_r(merge([[1,3],[2,6],[8,10],[15,18]])); // Expected: [[1,6],[8,10],[15,18]]
print_r(merge([[1,4],[4,5]])); // Expected: [[1,5]]
?>`,

            swift: `func merge(_ intervals: [[Int]]) -> [[Int]] {
    // Write your solution here
    
}

// Test cases
print(merge([[1,3],[2,6],[8,10],[15,18]])) // Expected: [[1,6],[8,10],[15,18]]
print(merge([[1,4],[4,5]])) // Expected: [[1,5]]`,

            kotlin: `fun merge(intervals: Array<IntArray>): Array<IntArray> {
    // Write your solution here
    
}

fun main() {
    println(merge(arrayOf(intArrayOf(1,3), intArrayOf(2,6), intArrayOf(8,10), intArrayOf(15,18))).map { it.joinToString() }.joinToString())
    println(merge(arrayOf(intArrayOf(1,4), intArrayOf(4,5))).map { it.joinToString() }.joinToString())
}`,

            scala: `import scala.collection.mutable.ArrayBuffer

object Solution {
    def merge(intervals: Array[Array[Int]]): Array[Array[Int]] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(merge(Array(Array(1,3), Array(2,6), Array(8,10), Array(15,18))).map(_.mkString("[", ",", "]")).mkString(","))
        println(merge(Array(Array(1,4), Array(4,5))).map(_.mkString("[", ",", "]")).mkString(","))
    }
}`,

            perl: `sub merge {
    my $intervals = shift;
    # Write your solution here
    
}

# Test cases
my @result1 = @{merge([[1,3],[2,6],[8,10],[15,18]])};
print "[";
for my $i (0..$#result1) {
    print "[" . join(",", @{$result1[$i]}) . "]";
    print "," if $i < $#result1;
}
print "]\\n";

my @result2 = @{merge([[1,4],[4,5]])};
print "[";
for my $i (0..$#result2) {
    print "[" . join(",", @{$result2[$i]}) . "]";
    print "," if $i < $#result2;
}
print "]\\n";`,

            r: `merge <- function(intervals) {
    # Write your solution here
    
}

# Test cases
print(merge(list(c(1,3), c(2,6), c(8,10), c(15,18)))) # Expected: list(c(1,6), c(8,10), c(15,18))
print(merge(list(c(1,4), c(4,5)))) # Expected: list(c(1,5))`
        },
        expectedOutput: {
            javascript: "[[1,6],[8,10],[15,18]]\n[[1,5]]",
            python: "[[1, 6], [8, 10], [15, 18]]\n[[1, 5]]",
            java: "[[1, 6], [8, 10], [15, 18]]\n[[1, 5]]",
        },
    },

    "insert-interval": {
        id: "insert-interval",
        title: "Insert Interval",
        difficulty: "Medium",
        category: "Array",
        description: {
            text: "You are given an array of non-overlapping intervals sorted by start, and a new interval to insert. Insert the new interval into the array, merging if necessary, so that the intervals remain non-overlapping and sorted.",
            notes: [
                "The original intervals are sorted in ascending order by start.",
                "Return the new array of intervals."
            ],
        },
        examples: [
            {
                input: "intervals = [[1,3],[6,9]], newInterval = [2,5]",
                output: "[[1,5],[6,9]]",
            },
            {
                input: "intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]",
                output: "[[1,2],[3,10],[12,16]]",
                explanation: "Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].",
            },
        ],
        constraints: [
            "0 ≤ intervals.length ≤ 10⁴",
            "intervals[i].length == 2",
            "0 ≤ start ≤ end ≤ 10⁵",
            "intervals is sorted by start",
            "newInterval.length == 2",
        ],
        starterCode: {
            javascript: `function insert(intervals, newInterval) {
    // Write your solution here
    
}

// Test cases
console.log(insert([[1,3],[6,9]], [2,5])); // Expected: [[1,5],[6,9]]
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])); // Expected: [[1,2],[3,10],[12,16]]`,

            typescript: `function insert(intervals: number[][], newInterval: number[]): number[][] {
    // Write your solution here
    
}

// Test cases
console.log(insert([[1,3],[6,9]], [2,5])); // Expected: [[1,5],[6,9]]
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])); // Expected: [[1,2],[3,10],[12,16]]`,

            python: `def insert(intervals, newInterval):
    # Write your solution here
    pass

# Test cases
print(insert([[1,3],[6,9]], [2,5]))  # Expected: [[1,5],[6,9]]
print(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))  # Expected: [[1,2],[3,10],[12,16]]`,

            java: `import java.util.*;

class Solution {
    public static int[][] insert(int[][] intervals, int[] newInterval) {
        // Write your solution here
        
        return new int[0][];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(insert(new int[][]{{1,3},{6,9}}, new int[]{2,5}))); 
        // Expected: [[1,5],[6,9]]
        System.out.println(Arrays.deepToString(insert(new int[][]{{1,2},{3,5},{6,7},{8,10},{12,16}}, new int[]{4,8}))); 
        // Expected: [[1,2],[3,10],[12,16]]
    }
}`,

            cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
    // Write your solution here
    
}

int main() {
    vector<vector<int>> intervals1 = {{1,3},{6,9}};
    vector<int> newInterval1 = {2,5};
    vector<vector<int>> result1 = insert(intervals1, newInterval1);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << "[" << result1[i][0] << "," << result1[i][1] << "]";
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: [[1,5],[6,9]]
    
    vector<vector<int>> intervals2 = {{1,2},{3,5},{6,7},{8,10},{12,16}};
    vector<int> newInterval2 = {4,8};
    vector<vector<int>> result2 = insert(intervals2, newInterval2);
    cout << "[";
    for (size_t i = 0; i < result2.size(); i++) {
        cout << "[" << result2[i][0] << "," << result2[i][1] << "]";
        if (i < result2.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: [[1,2],[3,10],[12,16]]
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int** insert(int** intervals, int intervalsSize, int* intervalsColSize, int* newInterval, int newIntervalSize, int* returnSize, int** returnColumnSizes) {
    // Write your solution here
    
}

int main() {
    int intervals1_data[][2] = {{1,3},{6,9}};
    int* intervals1[] = {intervals1_data[0], intervals1_data[1]};
    int intervalsColSize1[] = {2,2};
    int newInterval1[] = {2,5};
    int returnSize1;
    int* returnColumnSizes1;
    int** result1 = insert(intervals1, 2, intervalsColSize1, newInterval1, 2, &returnSize1, &returnColumnSizes1);
    printf("[");
    for (int i = 0; i < returnSize1; i++) {
        printf("[%d,%d]", result1[i][0], result1[i][1]);
        if (i < returnSize1 - 1) printf(",");
    }
    printf("]\\n");
    
    int intervals2_data[][2] = {{1,2},{3,5},{6,7},{8,10},{12,16}};
    int* intervals2[] = {intervals2_data[0], intervals2_data[1], intervals2_data[2], intervals2_data[3], intervals2_data[4]};
    int intervalsColSize2[] = {2,2,2,2,2};
    int newInterval2[] = {4,8};
    int returnSize2;
    int* returnColumnSizes2;
    int** result2 = insert(intervals2, 5, intervalsColSize2, newInterval2, 2, &returnSize2, &returnColumnSizes2);
    printf("[");
    for (int i = 0; i < returnSize2; i++) {
        printf("[%d,%d]", result2[i][0], result2[i][1]);
        if (i < returnSize2 - 1) printf(",");
    }
    printf("]\\n");
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int[][] Insert(int[][] intervals, int[] newInterval) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine($"[{string.Join(",", Insert(new int[][] { new int[] {1,3}, new int[] {6,9} }, new int[] {2,5}).Select(x => $"[{x[0]},{x[1]}]"))}]");
        Console.WriteLine($"[{string.Join(",", Insert(new int[][] { new int[] {1,2}, new int[] {3,5}, new int[] {6,7}, new int[] {8,10}, new int[] {12,16} }, new int[] {4,8}).Select(x => $"[{x[0]},{x[1]}]"))}]");
    }
}`,

            go: `package main

import "fmt"

func insert(intervals [][]int, newInterval []int) [][]int {
    // Write your solution here
    
}

func main() {
    fmt.Println(insert([][]int{{1,3},{6,9}}, []int{2,5})) // Expected: [[1,5],[6,9]]
    fmt.Println(insert([][]int{{1,2},{3,5},{6,7},{8,10},{12,16}}, []int{4,8})) // Expected: [[1,2],[3,10],[12,16]]
}`,

            rust: `fn insert(intervals: Vec<Vec<i32>>, new_interval: Vec<i32>) -> Vec<Vec<i32>> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", insert(vec![vec![1,3], vec![6,9]], vec![2,5])); // Expected: [[1,5],[6,9]]
    println!("{:?}", insert(vec![vec![1,2], vec![3,5], vec![6,7], vec![8,10], vec![12,16]], vec![4,8])); // Expected: [[1,2],[3,10],[12,16]]
}`,

            ruby: `def insert(intervals, new_interval)
    # Write your solution here
    
end

# Test cases
puts insert([[1,3],[6,9]], [2,5]).inspect # Expected: [[1,5],[6,9]]
puts insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]).inspect # Expected: [[1,2],[3,10],[12,16]]`,

            php: `<?php
function insert($intervals, $newInterval) {
    // Write your solution here
    
}

// Test cases
print_r(insert([[1,3],[6,9]], [2,5])); // Expected: [[1,5],[6,9]]
print_r(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])); // Expected: [[1,2],[3,10],[12,16]]
?>`,

            swift: `func insert(_ intervals: [[Int]], _ newInterval: [Int]) -> [[Int]] {
    // Write your solution here
    
}

// Test cases
print(insert([[1,3],[6,9]], [2,5])) // Expected: [[1,5],[6,9]]
print(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])) // Expected: [[1,2],[3,10],[12,16]]`,

            kotlin: `fun insert(intervals: Array<IntArray>, newInterval: IntArray): Array<IntArray> {
    // Write your solution here
    
}

fun main() {
    println(insert(arrayOf(intArrayOf(1,3), intArrayOf(6,9)), intArrayOf(2,5)).map { it.joinToString() }.joinToString())
    println(insert(arrayOf(intArrayOf(1,2), intArrayOf(3,5), intArrayOf(6,7), intArrayOf(8,10), intArrayOf(12,16)), intArrayOf(4,8)).map { it.joinToString() }.joinToString())
}`,

            scala: `import scala.collection.mutable.ArrayBuffer

object Solution {
    def insert(intervals: Array[Array[Int]], newInterval: Array[Int]): Array[Array[Int]] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(insert(Array(Array(1,3), Array(6,9)), Array(2,5)).map(_.mkString("[", ",", "]")).mkString(","))
        println(insert(Array(Array(1,2), Array(3,5), Array(6,7), Array(8,10), Array(12,16)), Array(4,8)).map(_.mkString("[", ",", "]")).mkString(","))
    }
}`,

            perl: `sub insert {
    my ($intervals, $newInterval) = @_;
    # Write your solution here
    
}

# Test cases
my @result1 = @{insert([[1,3],[6,9]], [2,5])};
print "[";
for my $i (0..$#result1) {
    print "[" . join(",", @{$result1[$i]}) . "]";
    print "," if $i < $#result1;
}
print "]\\n";

my @result2 = @{insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])};
print "[";
for my $i (0..$#result2) {
    print "[" . join(",", @{$result2[$i]}) . "]";
    print "," if $i < $#result2;
}
print "]\\n";`,

            r: `insert <- function(intervals, newInterval) {
    # Write your solution here
    
}

# Test cases
print(insert(list(c(1,3), c(6,9)), c(2,5))) # Expected: list(c(1,5), c(6,9))
print(insert(list(c(1,2), c(3,5), c(6,7), c(8,10), c(12,16)), c(4,8))) # Expected: list(c(1,2), c(3,10), c(12,16))`
        },
        expectedOutput: {
            javascript: "[[1,5],[6,9]]\n[[1,2],[3,10],[12,16]]",
            python: "[[1, 5], [6, 9]]\n[[1, 2], [3, 10], [12, 16]]",
            java: "[[1, 5], [6, 9]]\n[[1, 2], [3, 10], [12, 16]]",
        },
    },

    "non-overlapping-intervals": {
        id: "non-overlapping-intervals",
        title: "Non-overlapping Intervals",
        difficulty: "Medium",
        category: "Array • Greedy • Sorting",
        description: {
            text: "Given an array of intervals where intervals[i] = [start, end], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
            notes: [
                "Return the minimum number of intervals to remove.",
                "Intervals like [1,2] and [2,3] are not overlapping."
            ],
        },
        examples: [
            {
                input: "intervals = [[1,2],[2,3],[3,4],[1,3]]",
                output: "1",
                explanation: "[1,3] can be removed and the rest are non-overlapping.",
            },
            {
                input: "intervals = [[1,2],[1,2],[1,2]]",
                output: "2",
                explanation: "Remove two [1,2] intervals to make the rest non-overlapping.",
            },
            {
                input: "intervals = [[1,2],[2,3]]",
                output: "0",
                explanation: "They are already non-overlapping.",
            },
        ],
        constraints: [
            "1 ≤ intervals.length ≤ 10⁵",
            "intervals[i].length == 2",
            "-5 * 10⁴ ≤ start ≤ end ≤ 5 * 10⁴",
        ],
        starterCode: {
            javascript: `function eraseOverlapIntervals(intervals) {
    // Write your solution here
    
}

// Test cases
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); // Expected: 1
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]])); // Expected: 2
console.log(eraseOverlapIntervals([[1,2],[2,3]])); // Expected: 0`,

            typescript: `function eraseOverlapIntervals(intervals: number[][]): number {
    // Write your solution here
    
}

// Test cases
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); // Expected: 1
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]])); // Expected: 2
console.log(eraseOverlapIntervals([[1,2],[2,3]])); // Expected: 0`,

            python: `def eraseOverlapIntervals(intervals):
    # Write your solution here
    pass

# Test cases
print(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]))  # Expected: 1
print(eraseOverlapIntervals([[1,2],[1,2],[1,2]]))  # Expected: 2
print(eraseOverlapIntervals([[1,2],[2,3]]))  # Expected: 0`,

            java: `import java.util.*;

class Solution {
    public static int eraseOverlapIntervals(int[][] intervals) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(eraseOverlapIntervals(new int[][]{{1,2},{2,3},{3,4},{1,3}})); // Expected: 1
        System.out.println(eraseOverlapIntervals(new int[][]{{1,2},{1,2},{1,2}})); // Expected: 2
        System.out.println(eraseOverlapIntervals(new int[][]{{1,2},{2,3}})); // Expected: 0
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int eraseOverlapIntervals(vector<vector<int>>& intervals) {
    // Write your solution here
    
}

int main() {
    vector<vector<int>> intervals1 = {{1,2},{2,3},{3,4},{1,3}};
    cout << eraseOverlapIntervals(intervals1) << endl; // Expected: 1
    
    vector<vector<int>> intervals2 = {{1,2},{1,2},{1,2}};
    cout << eraseOverlapIntervals(intervals2) << endl; // Expected: 2
    
    vector<vector<int>> intervals3 = {{1,2},{2,3}};
    cout << eraseOverlapIntervals(intervals3) << endl; // Expected: 0
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int eraseOverlapIntervals(int** intervals, int intervalsSize, int* intervalsColSize) {
    // Write your solution here
    
}

int main() {
    int intervals1_data[][2] = {{1,2},{2,3},{3,4},{1,3}};
    int* intervals1[] = {intervals1_data[0], intervals1_data[1], intervals1_data[2], intervals1_data[3]};
    int intervalsColSize1[] = {2,2,2,2};
    printf("%d\\n", eraseOverlapIntervals(intervals1, 4, intervalsColSize1)); // Expected: 1
    
    int intervals2_data[][2] = {{1,2},{1,2},{1,2}};
    int* intervals2[] = {intervals2_data[0], intervals2_data[1], intervals2_data[2]};
    int intervalsColSize2[] = {2,2,2};
    printf("%d\\n", eraseOverlapIntervals(intervals2, 3, intervalsColSize2)); // Expected: 2
    
    int intervals3_data[][2] = {{1,2},{2,3}};
    int* intervals3[] = {intervals3_data[0], intervals3_data[1]};
    int intervalsColSize3[] = {2,2};
    printf("%d\\n", eraseOverlapIntervals(intervals3, 2, intervalsColSize3)); // Expected: 0
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;
using System.Linq;

class Solution {
    public static int EraseOverlapIntervals(int[][] intervals) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(EraseOverlapIntervals(new int[][] { new int[] {1,2}, new int[] {2,3}, new int[] {3,4}, new int[] {1,3} })); // Expected: 1
        Console.WriteLine(EraseOverlapIntervals(new int[][] { new int[] {1,2}, new int[] {1,2}, new int[] {1,2} })); // Expected: 2
        Console.WriteLine(EraseOverlapIntervals(new int[][] { new int[] {1,2}, new int[] {2,3} })); // Expected: 0
    }
}`,

            go: `package main

import (
    "fmt"
    "sort"
)

func eraseOverlapIntervals(intervals [][]int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(eraseOverlapIntervals([][]int{{1,2},{2,3},{3,4},{1,3}})) // Expected: 1
    fmt.Println(eraseOverlapIntervals([][]int{{1,2},{1,2},{1,2}})) // Expected: 2
    fmt.Println(eraseOverlapIntervals([][]int{{1,2},{2,3}})) // Expected: 0
}`,

            rust: `fn erase_overlap_intervals(intervals: Vec<Vec<i32>>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", erase_overlap_intervals(vec![vec![1,2], vec![2,3], vec![3,4], vec![1,3]])); // Expected: 1
    println!("{}", erase_overlap_intervals(vec![vec![1,2], vec![1,2], vec![1,2]])); // Expected: 2
    println!("{}", erase_overlap_intervals(vec![vec![1,2], vec![2,3]])); // Expected: 0
}`,

            ruby: `def erase_overlap_intervals(intervals)
    # Write your solution here
    
end

# Test cases
puts erase_overlap_intervals([[1,2],[2,3],[3,4],[1,3]]) # Expected: 1
puts erase_overlap_intervals([[1,2],[1,2],[1,2]]) # Expected: 2
puts erase_overlap_intervals([[1,2],[2,3]]) # Expected: 0`,

            php: `<?php
function eraseOverlapIntervals($intervals) {
    // Write your solution here
    
}

// Test cases
echo eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]) . "\\n"; // Expected: 1
echo eraseOverlapIntervals([[1,2],[1,2],[1,2]]) . "\\n"; // Expected: 2
echo eraseOverlapIntervals([[1,2],[2,3]]) . "\\n"; // Expected: 0
?>`,

            swift: `func eraseOverlapIntervals(_ intervals: [[Int]]) -> Int {
    // Write your solution here
    
}

// Test cases
print(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])) // Expected: 1
print(eraseOverlapIntervals([[1,2],[1,2],[1,2]])) // Expected: 2
print(eraseOverlapIntervals([[1,2],[2,3]])) // Expected: 0`,

            kotlin: `fun eraseOverlapIntervals(intervals: Array<IntArray>): Int {
    // Write your solution here
    
}

fun main() {
    println(eraseOverlapIntervals(arrayOf(intArrayOf(1,2), intArrayOf(2,3), intArrayOf(3,4), intArrayOf(1,3)))) // Expected: 1
    println(eraseOverlapIntervals(arrayOf(intArrayOf(1,2), intArrayOf(1,2), intArrayOf(1,2)))) // Expected: 2
    println(eraseOverlapIntervals(arrayOf(intArrayOf(1,2), intArrayOf(2,3)))) // Expected: 0
}`,

            scala: `import scala.collection.mutable.ArrayBuffer

object Solution {
    def eraseOverlapIntervals(intervals: Array[Array[Int]]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(eraseOverlapIntervals(Array(Array(1,2), Array(2,3), Array(3,4), Array(1,3)))) // Expected: 1
        println(eraseOverlapIntervals(Array(Array(1,2), Array(1,2), Array(1,2)))) // Expected: 2
        println(eraseOverlapIntervals(Array(Array(1,2), Array(2,3)))) // Expected: 0
    }
}`,

            perl: `sub eraseOverlapIntervals {
    my $intervals = shift;
    # Write your solution here
    
}

# Test cases
print eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]) . "\\n"; # Expected: 1
print eraseOverlapIntervals([[1,2],[1,2],[1,2]]) . "\\n"; # Expected: 2
print eraseOverlapIntervals([[1,2],[2,3]]) . "\\n"; # Expected: 0`,

            r: `eraseOverlapIntervals <- function(intervals) {
    # Write your solution here
    
}

# Test cases
print(eraseOverlapIntervals(list(c(1,2), c(2,3), c(3,4), c(1,3)))) # Expected: 1
print(eraseOverlapIntervals(list(c(1,2), c(1,2), c(1,2)))) # Expected: 2
print(eraseOverlapIntervals(list(c(1,2), c(2,3)))) # Expected: 0`
        },
        expectedOutput: {
            javascript: "1\n2\n0",
            python: "1\n2\n0",
            java: "1\n2\n0",
        },
    },

    "meeting-rooms": {
        id: "meeting-rooms",
        title: "Meeting Rooms",
        difficulty: "Easy",
        category: "Array • Sorting",
        description: {
            text: "Given an array of meeting time intervals where intervals[i] = [start, end], determine if a person could attend all meetings.",
            notes: [
                "Return true if the person can attend all meetings, otherwise false.",
                "The intervals are inclusive."
            ],
        },
        examples: [
            {
                input: "intervals = [[0,30],[5,10],[15,20]]",
                output: "false",
            },
            {
                input: "intervals = [[7,10],[2,4]]",
                output: "true",
            },
        ],
        constraints: [
            "0 ≤ intervals.length ≤ 10⁴",
            "intervals[i].length == 2",
            "0 ≤ start < end ≤ 10⁶",
        ],
        starterCode: {
            javascript: `function canAttendMeetings(intervals) {
    // Write your solution here
    
}

// Test cases
console.log(canAttendMeetings([[0,30],[5,10],[15,20]])); // Expected: false
console.log(canAttendMeetings([[7,10],[2,4]])); // Expected: true`,

            typescript: `function canAttendMeetings(intervals: number[][]): boolean {
    // Write your solution here
    
}

// Test cases
console.log(canAttendMeetings([[0,30],[5,10],[15,20]])); // Expected: false
console.log(canAttendMeetings([[7,10],[2,4]])); // Expected: true`,

            python: `def canAttendMeetings(intervals):
    # Write your solution here
    pass

# Test cases
print(canAttendMeetings([[0,30],[5,10],[15,20]]))  # Expected: False
print(canAttendMeetings([[7,10],[2,4]]))  # Expected: True`,

            java: `import java.util.*;

class Solution {
    public static boolean canAttendMeetings(int[][] intervals) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(canAttendMeetings(new int[][]{{0,30},{5,10},{15,20}})); // Expected: false
        System.out.println(canAttendMeetings(new int[][]{{7,10},{2,4}})); // Expected: true
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool canAttendMeetings(vector<vector<int>>& intervals) {
    // Write your solution here
    
}

int main() {
    vector<vector<int>> intervals1 = {{0,30},{5,10},{15,20}};
    cout << boolalpha;
    cout << canAttendMeetings(intervals1) << endl; // Expected: false
    
    vector<vector<int>> intervals2 = {{7,10},{2,4}};
    cout << canAttendMeetings(intervals2) << endl; // Expected: true
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

bool canAttendMeetings(int** intervals, int intervalsSize, int* intervalsColSize) {
    // Write your solution here
    
}

int main() {
    int intervals1_data[][2] = {{0,30},{5,10},{15,20}};
    int* intervals1[] = {intervals1_data[0], intervals1_data[1], intervals1_data[2]};
    int intervalsColSize1[] = {2,2,2};
    printf("%d\\n", canAttendMeetings(intervals1, 3, intervalsColSize1)); // Expected: 0 (false)
    
    int intervals2_data[][2] = {{7,10},{2,4}};
    int* intervals2[] = {intervals2_data[0], intervals2_data[1]};
    int intervalsColSize2[] = {2,2};
    printf("%d\\n", canAttendMeetings(intervals2, 2, intervalsColSize2)); // Expected: 1 (true)
    
    return 0;
}`,

            csharp: `using System;
using System.Linq;

class Solution {
    public static bool CanAttendMeetings(int[][] intervals) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(CanAttendMeetings(new int[][] { new int[] {0,30}, new int[] {5,10}, new int[] {15,20} })); // Expected: False
        Console.WriteLine(CanAttendMeetings(new int[][] { new int[] {7,10}, new int[] {2,4} })); // Expected: True
    }
}`,

            go: `package main

import (
    "fmt"
    "sort"
)

func canAttendMeetings(intervals [][]int) bool {
    // Write your solution here
    
}

func main() {
    fmt.Println(canAttendMeetings([][]int{{0,30},{5,10},{15,20}})) // Expected: false
    fmt.Println(canAttendMeetings([][]int{{7,10},{2,4}})) // Expected: true
}`,

            rust: `fn can_attend_meetings(intervals: Vec<Vec<i32>>) -> bool {
    // Write your solution here
    
}

fn main() {
    println!("{}", can_attend_meetings(vec![vec![0,30], vec![5,10], vec![15,20]])); // Expected: false
    println!("{}", can_attend_meetings(vec![vec![7,10], vec![2,4]])); // Expected: true
}`,

            ruby: `def can_attend_meetings(intervals)
    # Write your solution here
    
end

# Test cases
puts can_attend_meetings([[0,30],[5,10],[15,20]]) # Expected: false
puts can_attend_meetings([[7,10],[2,4]]) # Expected: true`,

            php: `<?php
function canAttendMeetings($intervals) {
    // Write your solution here
    
}

// Test cases
echo var_export(canAttendMeetings([[0,30],[5,10],[15,20]]), true) . "\\n"; // Expected: false
echo var_export(canAttendMeetings([[7,10],[2,4]]), true) . "\\n"; // Expected: true
?>`,

            swift: `func canAttendMeetings(_ intervals: [[Int]]) -> Bool {
    // Write your solution here
    
}

// Test cases
print(canAttendMeetings([[0,30],[5,10],[15,20]])) // Expected: false
print(canAttendMeetings([[7,10],[2,4]])) // Expected: true`,

            kotlin: `fun canAttendMeetings(intervals: Array<IntArray>): Boolean {
    // Write your solution here
    
}

fun main() {
    println(canAttendMeetings(arrayOf(intArrayOf(0,30), intArrayOf(5,10), intArrayOf(15,20)))) // Expected: false
    println(canAttendMeetings(arrayOf(intArrayOf(7,10), intArrayOf(2,4)))) // Expected: true
}`,

            scala: `object Solution {
    def canAttendMeetings(intervals: Array[Array[Int]]): Boolean = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(canAttendMeetings(Array(Array(0,30), Array(5,10), Array(15,20)))) // Expected: false
        println(canAttendMeetings(Array(Array(7,10), Array(2,4)))) // Expected: true
    }
}`,

            perl: `sub canAttendMeetings {
    my $intervals = shift;
    # Write your solution here
    
}

# Test cases
print canAttendMeetings([[0,30],[5,10],[15,20]]) ? "true\\n" : "false\\n"; # Expected: false
print canAttendMeetings([[7,10],[2,4]]) ? "true\\n" : "false\\n"; # Expected: true`,

            r: `canAttendMeetings <- function(intervals) {
    # Write your solution here
    
}

# Test cases
print(canAttendMeetings(list(c(0,30), c(5,10), c(15,20)))) # Expected: FALSE
print(canAttendMeetings(list(c(7,10), c(2,4)))) # Expected: TRUE`
        },
        expectedOutput: {
            javascript: "false\ntrue",
            python: "False\nTrue",
            java: "false\ntrue",
        },
    },

    "meeting-rooms-ii": {
        id: "meeting-rooms-ii",
        title: "Meeting Rooms II",
        difficulty: "Medium",
        category: "Array • Greedy • Sorting • Heap",
        description: {
            text: "Given an array of meeting time intervals where intervals[i] = [start, end], return the minimum number of conference rooms required.",
            notes: [
                "Find the minimum number of rooms needed to accommodate all meetings.",
                "Meetings can start right after another ends in the same room."
            ],
        },
        examples: [
            {
                input: "intervals = [[0,30],[5,10],[15,20]]",
                output: "2",
            },
            {
                input: "intervals = [[7,10],[2,4]]",
                output: "1",
            },
        ],
        constraints: [
            "1 ≤ intervals.length ≤ 10⁴",
            "intervals[i].length == 2",
            "0 ≤ start < end ≤ 10⁶",
        ],
        starterCode: {
            javascript: `function minMeetingRooms(intervals) {
    // Write your solution here
    
}

// Test cases
console.log(minMeetingRooms([[0,30],[5,10],[15,20]])); // Expected: 2
console.log(minMeetingRooms([[7,10],[2,4]])); // Expected: 1`,

            typescript: `function minMeetingRooms(intervals: number[][]): number {
    // Write your solution here
    
}

// Test cases
console.log(minMeetingRooms([[0,30],[5,10],[15,20]])); // Expected: 2
console.log(minMeetingRooms([[7,10],[2,4]])); // Expected: 1`,

            python: `def minMeetingRooms(intervals):
    # Write your solution here
    pass

# Test cases
print(minMeetingRooms([[0,30],[5,10],[15,20]]))  # Expected: 2
print(minMeetingRooms([[7,10],[2,4]]))  # Expected: 1`,

            java: `import java.util.*;

class Solution {
    public static int minMeetingRooms(int[][] intervals) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(minMeetingRooms(new int[][]{{0,30},{5,10},{15,20}})); // Expected: 2
        System.out.println(minMeetingRooms(new int[][]{{7,10},{2,4}})); // Expected: 1
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>
using namespace std;

int minMeetingRooms(vector<vector<int>>& intervals) {
    // Write your solution here
    
}

int main() {
    vector<vector<int>> intervals1 = {{0,30},{5,10},{15,20}};
    cout << minMeetingRooms(intervals1) << endl; // Expected: 2
    
    vector<vector<int>> intervals2 = {{7,10},{2,4}};
    cout << minMeetingRooms(intervals2) << endl; // Expected: 1
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int minMeetingRooms(int** intervals, int intervalsSize, int* intervalsColSize) {
    // Write your solution here
    
}

int main() {
    int intervals1_data[][2] = {{0,30},{5,10},{15,20}};
    int* intervals1[] = {intervals1_data[0], intervals1_data[1], intervals1_data[2]};
    int intervalsColSize1[] = {2,2,2};
    printf("%d\\n", minMeetingRooms(intervals1, 3, intervalsColSize1)); // Expected: 2
    
    int intervals2_data[][2] = {{7,10},{2,4}};
    int* intervals2[] = {intervals2_data[0], intervals2_data[1]};
    int intervalsColSize2[] = {2,2};
    printf("%d\\n", minMeetingRooms(intervals2, 2, intervalsColSize2)); // Expected: 1
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;
using System.Linq;

class Solution {
    public static int MinMeetingRooms(int[][] intervals) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(MinMeetingRooms(new int[][] { new int[] {0,30}, new int[] {5,10}, new int[] {15,20} })); // Expected: 2
        Console.WriteLine(MinMeetingRooms(new int[][] { new int[] {7,10}, new int[] {2,4} })); // Expected: 1
    }
}`,

            go: `package main

import (
    "container/heap"
    "fmt"
    "sort"
)

func minMeetingRooms(intervals [][]int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(minMeetingRooms([][]int{{0,30},{5,10},{15,20}})) // Expected: 2
    fmt.Println(minMeetingRooms([][]int{{7,10},{2,4}})) // Expected: 1
}`,

            rust: `use std::collections::BinaryHeap;
use std::cmp::Reverse;

fn min_meeting_rooms(intervals: Vec<Vec<i32>>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", min_meeting_rooms(vec![vec![0,30], vec![5,10], vec![15,20]])); // Expected: 2
    println!("{}", min_meeting_rooms(vec![vec![7,10], vec![2,4]])); // Expected: 1
}`,

            ruby: `def min_meeting_rooms(intervals)
    # Write your solution here
    
end

# Test cases
puts min_meeting_rooms([[0,30],[5,10],[15,20]]) # Expected: 2
puts min_meeting_rooms([[7,10],[2,4]]) # Expected: 1`,

            php: `<?php
function minMeetingRooms($intervals) {
    // Write your solution here
    
}

// Test cases
echo minMeetingRooms([[0,30],[5,10],[15,20]]) . "\\n"; // Expected: 2
echo minMeetingRooms([[7,10],[2,4]]) . "\\n"; // Expected: 1
?>`,

            swift: `func minMeetingRooms(_ intervals: [[Int]]) -> Int {
    // Write your solution here
    
}

// Test cases
print(minMeetingRooms([[0,30],[5,10],[15,20]])) // Expected: 2
print(minMeetingRooms([[7,10],[2,4]])) // Expected: 1`,

            kotlin: `import java.util.PriorityQueue

fun minMeetingRooms(intervals: Array<IntArray>): Int {
    // Write your solution here
    
}

fun main() {
    println(minMeetingRooms(arrayOf(intArrayOf(0,30), intArrayOf(5,10), intArrayOf(15,20)))) // Expected: 2
    println(minMeetingRooms(arrayOf(intArrayOf(7,10), intArrayOf(2,4)))) // Expected: 1
}`,

            scala: `import scala.collection.mutable

object Solution {
    def minMeetingRooms(intervals: Array[Array[Int]]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(minMeetingRooms(Array(Array(0,30), Array(5,10), Array(15,20)))) // Expected: 2
        println(minMeetingRooms(Array(Array(7,10), Array(2,4)))) // Expected: 1
    }
}`,

            perl: `sub minMeetingRooms {
    my $intervals = shift;
    # Write your solution here
    
}

# Test cases
print minMeetingRooms([[0,30],[5,10],[15,20]]) . "\\n"; # Expected: 2
print minMeetingRooms([[7,10],[2,4]]) . "\\n"; # Expected: 1`,

            r: `minMeetingRooms <- function(intervals) {
    # Write your solution here
    
}

# Test cases
print(minMeetingRooms(list(c(0,30), c(5,10), c(15,20)))) # Expected: 2
print(minMeetingRooms(list(c(7,10), c(2,4)))) # Expected: 1`
        },
        expectedOutput: {
            javascript: "2\n1",
            python: "2\n1",
            java: "2\n1",
        },
    },

    "k-closest-points-to-origin": {
        id: "k-closest-points-to-origin",
        title: "K Closest Points to Origin",
        difficulty: "Medium",
        category: "Array • Math • Divide and Conquer • Sorting • Heap",
        description: {
            text: "Given an array of points where points[i] = [x, y] and an integer k, return the k closest points to the origin (0, 0).",
            notes: [
                "The distance between two points is the Euclidean distance.",
                "You may return the answer in any order."
            ],
        },
        examples: [
            {
                input: "points = [[1,3],[-2,2]], k = 1",
                output: "[[-2,2]]",
                explanation: "The distance between (1, 3) and the origin is sqrt(10), and between (-2, 2) and the origin is sqrt(8). So the closest point is (-2, 2).",
            },
            {
                input: "points = [[3,3],[5,-1],[-2,4]], k = 2",
                output: "[[3,3],[-2,4]]",
            },
        ],
        constraints: [
            "1 ≤ k ≤ points.length ≤ 10⁴",
            "-10⁴ ≤ x, y ≤ 10⁴",
        ],
        starterCode: {
            javascript: `function kClosest(points, k) {
    // Write your solution here
    
}

// Test cases
console.log(kClosest([[1,3],[-2,2]], 1)); // Expected: [[-2,2]]
console.log(kClosest([[3,3],[5,-1],[-2,4]], 2)); // Expected: [[3,3],[-2,4]]`,

            typescript: `function kClosest(points: number[][], k: number): number[][] {
    // Write your solution here
    
}

// Test cases
console.log(kClosest([[1,3],[-2,2]], 1)); // Expected: [[-2,2]]
console.log(kClosest([[3,3],[5,-1],[-2,4]], 2)); // Expected: [[3,3],[-2,4]]`,

            python: `def kClosest(points, k):
    # Write your solution here
    pass

# Test cases
print(kClosest([[1,3],[-2,2]], 1))  # Expected: [[-2,2]]
print(kClosest([[3,3],[5,-1],[-2,4]], 2))  # Expected: [[3,3],[-2,4]]`,

            java: `import java.util.*;

class Solution {
    public static int[][] kClosest(int[][] points, int k) {
        // Write your solution here
        
        return new int[0][];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(kClosest(new int[][]{{1,3},{-2,2}}, 1))); 
        // Expected: [[-2,2]]
        System.out.println(Arrays.deepToString(kClosest(new int[][]{{3,3},{5,-1},{-2,4}}, 2))); 
        // Expected: [[3,3],[-2,4]]
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
    // Write your solution here
    
}

int main() {
    vector<vector<int>> points1 = {{1,3},{-2,2}};
    vector<vector<int>> result1 = kClosest(points1, 1);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << "[" << result1[i][0] << "," << result1[i][1] << "]";
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: [[-2,2]]
    
    vector<vector<int>> points2 = {{3,3},{5,-1},{-2,4}};
    vector<vector<int>> result2 = kClosest(points2, 2);
    cout << "[";
    for (size_t i = 0; i < result2.size(); i++) {
        cout << "[" << result2[i][0] << "," << result2[i][1] << "]";
        if (i < result2.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: [[3,3],[-2,4]]
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int** kClosest(int** points, int pointsSize, int* pointsColSize, int k, int* returnSize, int** returnColumnSizes) {
    // Write your solution here
    
}

int main() {
    int points1_data[][2] = {{1,3},{-2,2}};
    int* points1[] = {points1_data[0], points1_data[1]};
    int pointsColSize1[] = {2,2};
    int returnSize1;
    int* returnColumnSizes1;
    int** result1 = kClosest(points1, 2, pointsColSize1, 1, &returnSize1, &returnColumnSizes1);
    printf("[");
    for (int i = 0; i < returnSize1; i++) {
        printf("[%d,%d]", result1[i][0], result1[i][1]);
        if (i < returnSize1 - 1) printf(",");
    }
    printf("]\\n");
    
    int points2_data[][2] = {{3,3},{5,-1},{-2,4}};
    int* points2[] = {points2_data[0], points2_data[1], points2_data[2]};
    int pointsColSize2[] = {2,2,2};
    int returnSize2;
    int* returnColumnSizes2;
    int** result2 = kClosest(points2, 3, pointsColSize2, 2, &returnSize2, &returnColumnSizes2);
    printf("[");
    for (int i = 0; i < returnSize2; i++) {
        printf("[%d,%d]", result2[i][0], result2[i][1]);
        if (i < returnSize2 - 1) printf(",");
    }
    printf("]\\n");
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;
using System.Linq;

class Solution {
    public static int[][] KClosest(int[][] points, int k) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine($"[{string.Join(",", KClosest(new int[][] { new int[] {1,3}, new int[] {-2,2} }, 1).Select(x => $"[{x[0]},{x[1]}]"))}]");
        Console.WriteLine($"[{string.Join(",", KClosest(new int[][] { new int[] {3,3}, new int[] {5,-1}, new int[] {-2,4} }, 2).Select(x => $"[{x[0]},{x[1]}]"))}]");
    }
}`,

            go: `package main

import (
    "container/heap"
    "fmt"
)

func kClosest(points [][]int, k int) [][]int {
    // Write your solution here
    
}

func main() {
    fmt.Println(kClosest([][]int{{1,3},{-2,2}}, 1)) // Expected: [[-2,2]]
    fmt.Println(kClosest([][]int{{3,3},{5,-1},{-2,4}}, 2)) // Expected: [[3,3],[-2,4]]
}`,

            rust: `use std::collections::BinaryHeap;
use std::cmp::Ordering;

#[derive(PartialEq, PartialOrd)]
struct Point {
    dist: i32,
    coords: Vec<i32>,
}

impl Eq for Point {}

impl Ord for Point {
    fn cmp(&self, other: &Self) -> Ordering {
        other.dist.cmp(&self.dist)
    }
}

fn k_closest(points: Vec<Vec<i32>>, k: i32) -> Vec<Vec<i32>> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", k_closest(vec![vec![1,3], vec![-2,2]], 1)); // Expected: [[-2,2]]
    println!("{:?}", k_closest(vec![vec![3,3], vec![5,-1], vec![-2,4]], 2)); // Expected: [[3,3],[-2,4]]
}`,

            ruby: `def k_closest(points, k)
    # Write your solution here
    
end

# Test cases
puts k_closest([[1,3],[-2,2]], 1).inspect # Expected: [[-2,2]]
puts k_closest([[3,3],[5,-1],[-2,4]], 2).inspect # Expected: [[3,3],[-2,4]]`,

            php: `<?php
function kClosest($points, $k) {
    // Write your solution here
    
}

// Test cases
print_r(kClosest([[1,3],[-2,2]], 1)); // Expected: [[-2,2]]
print_r(kClosest([[3,3],[5,-1],[-2,4]], 2)); // Expected: [[3,3],[-2,4]]
?>`,

            swift: `func kClosest(_ points: [[Int]], _ k: Int) -> [[Int]] {
    // Write your solution here
    
}

// Test cases
print(kClosest([[1,3],[-2,2]], 1)) // Expected: [[-2,2]]
print(kClosest([[3,3],[5,-1],[-2,4]], 2)) // Expected: [[3,3],[-2,4]]`,

            kotlin: `import java.util.PriorityQueue

fun kClosest(points: Array<IntArray>, k: Int): Array<IntArray> {
    // Write your solution here
    
}

fun main() {
    println(kClosest(arrayOf(intArrayOf(1,3), intArrayOf(-2,2)), 1).map { it.joinToString() }.joinToString())
    println(kClosest(arrayOf(intArrayOf(3,3), intArrayOf(5,-1), intArrayOf(-2,4)), 2).map { it.joinToString() }.joinToString())
}`,

            scala: `import scala.collection.mutable

object Solution {
    def kClosest(points: Array[Array[Int]], k: Int): Array[Array[Int]] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(kClosest(Array(Array(1,3), Array(-2,2)), 1).map(_.mkString("[", ",", "]")).mkString(","))
        println(kClosest(Array(Array(3,3), Array(5,-1), Array(-2,4)), 2).map(_.mkString("[", ",", "]")).mkString(","))
    }
}`,

            perl: `sub kClosest {
    my ($points, $k) = @_;
    # Write your solution here
    
}

# Test cases
my @result1 = @{kClosest([[1,3],[-2,2]], 1)};
print "[";
for my $i (0..$#result1) {
    print "[" . join(",", @{$result1[$i]}) . "]";
    print "," if $i < $#result1;
}
print "]\\n";

my @result2 = @{kClosest([[3,3],[5,-1],[-2,4]], 2)};
print "[";
for my $i (0..$#result2) {
    print "[" . join(",", @{$result2[$i]}) . "]";
    print "," if $i < $#result2;
}
print "]\\n";`,

            r: `kClosest <- function(points, k) {
    # Write your solution here
    
}

# Test cases
print(kClosest(list(c(1,3), c(-2,2)), 1)) # Expected: list(c(-2,2))
print(kClosest(list(c(3,3), c(5,-1), c(-2,4)), 2)) # Expected: list(c(3,3), c(-2,4))`
        },
        expectedOutput: {
            javascript: "[[-2,2]]\n[[3,3],[-2,4]]",
            python: "[[-2, 2]]\n[[3, 3], [-2, 4]]",
            java: "[[-2, 2]]\n[[3, 3], [-2, 4]]",
        },
    },

    "top-k-frequent-elements": {
        id: "top-k-frequent-elements",
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        category: "Array • Hash Table • Sorting • Heap",
        description: {
            text: "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
            notes: [
                "Your algorithm's time complexity must be better than O(n log n).",
                "You can assume k is always valid."
            ],
        },
        examples: [
            {
                input: "nums = [1,1,1,2,2,3], k = 2",
                output: "[1,2]",
            },
            {
                input: "nums = [1], k = 1",
                output: "[1]",
            },
        ],
        constraints: [
            "1 ≤ nums.length ≤ 10⁵",
            "-10⁴ ≤ nums[i] ≤ 10⁴",
            "k is in the range [1, the number of unique elements]",
        ],
        starterCode: {
            javascript: `function topKFrequent(nums, k) {
    // Write your solution here
    
}

// Test cases
console.log(topKFrequent([1,1,1,2,2,3], 2)); // Expected: [1,2]
console.log(topKFrequent([1], 1)); // Expected: [1]`,

            typescript: `function topKFrequent(nums: number[], k: number): number[] {
    // Write your solution here
    
}

// Test cases
console.log(topKFrequent([1,1,1,2,2,3], 2)); // Expected: [1,2]
console.log(topKFrequent([1], 1)); // Expected: [1]`,

            python: `def topKFrequent(nums, k):
    # Write your solution here
    pass

# Test cases
print(topKFrequent([1,1,1,2,2,3], 2))  # Expected: [1,2]
print(topKFrequent([1], 1))  # Expected: [1]`,

            java: `import java.util.*;

class Solution {
    public static int[] topKFrequent(int[] nums, int k) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(topKFrequent(new int[]{1,1,1,2,2,3}, 2))); // Expected: [1,2]
        System.out.println(Arrays.toString(topKFrequent(new int[]{1}, 1))); // Expected: [1]
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <queue>
#include <algorithm>
using namespace std;

vector<int> topKFrequent(vector<int>& nums, int k) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {1,1,1,2,2,3};
    vector<int> result1 = topKFrequent(nums1, 2);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << result1[i];
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: [1,2]
    
    vector<int> nums2 = {1};
    vector<int> result2 = topKFrequent(nums2, 1);
    cout << "[";
    for (size_t i = 0; i < result2.size(); i++) {
        cout << result2[i];
        if (i < result2.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: [1]
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int* topKFrequent(int* nums, int numsSize, int k, int* returnSize) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {1,1,1,2,2,3};
    int returnSize1;
    int* result1 = topKFrequent(nums1, 6, 2, &returnSize1);
    printf("[");
    for (int i = 0; i < returnSize1; i++) {
        printf("%d", result1[i]);
        if (i < returnSize1 - 1) printf(",");
    }
    printf("]\\n"); // Expected: [1,2]
    free(result1);
    
    int nums2[] = {1};
    int returnSize2;
    int* result2 = topKFrequent(nums2, 1, 1, &returnSize2);
    printf("[");
    for (int i = 0; i < returnSize2; i++) {
        printf("%d", result2[i]);
        if (i < returnSize2 - 1) printf(",");
    }
    printf("]\\n"); // Expected: [1]
    free(result2);
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;
using System.Linq;

class Solution {
    public static int[] TopKFrequent(int[] nums, int k) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine($"[{string.Join(",", TopKFrequent(new int[] {1,1,1,2,2,3}, 2))}]"); // Expected: [1,2]
        Console.WriteLine($"[{string.Join(",", TopKFrequent(new int[] {1}, 1))}]"); // Expected: [1]
    }
}`,

            go: `package main

import (
    "fmt"
    "container/heap"
)

func topKFrequent(nums []int, k int) []int {
    // Write your solution here
    
}

func main() {
    fmt.Println(topKFrequent([]int{1,1,1,2,2,3}, 2)) // Expected: [1,2]
    fmt.Println(topKFrequent([]int{1}, 1)) // Expected: [1]
}`,

            rust: `use std::collections::HashMap;
use std::collections::BinaryHeap;
use std::cmp::Reverse;

fn top_k_frequent(nums: Vec<i32>, k: i32) -> Vec<i32> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", top_k_frequent(vec![1,1,1,2,2,3], 2)); // Expected: [1,2]
    println!("{:?}", top_k_frequent(vec![1], 1)); // Expected: [1]
}`,

            ruby: `def top_k_frequent(nums, k)
    # Write your solution here
    
end

# Test cases
puts top_k_frequent([1,1,1,2,2,3], 2).inspect # Expected: [1,2]
puts top_k_frequent([1], 1).inspect # Expected: [1]`,

            php: `<?php
function topKFrequent($nums, $k) {
    // Write your solution here
    
}

// Test cases
print_r(topKFrequent([1,1,1,2,2,3], 2)); // Expected: [1,2]
print_r(topKFrequent([1], 1)); // Expected: [1]
?>`,

            swift: `func topKFrequent(_ nums: [Int], _ k: Int) -> [Int] {
    // Write your solution here
    
}

// Test cases
print(topKFrequent([1,1,1,2,2,3], 2)) // Expected: [1,2]
print(topKFrequent([1], 1)) // Expected: [1]`,

            kotlin: `import java.util.PriorityQueue

fun topKFrequent(nums: IntArray, k: Int): IntArray {
    // Write your solution here
    
}

fun main() {
    println(topKFrequent(intArrayOf(1,1,1,2,2,3), 2).joinToString()) // Expected: 1,2
    println(topKFrequent(intArrayOf(1), 1).joinToString()) // Expected: 1
}`,

            scala: `import scala.collection.mutable

object Solution {
    def topKFrequent(nums: Array[Int], k: Int): Array[Int] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(topKFrequent(Array(1,1,1,2,2,3), 2).mkString(",")) // Expected: 1,2
        println(topKFrequent(Array(1), 1).mkString(",")) // Expected: 1
    }
}`,

            perl: `sub topKFrequent {
    my ($nums, $k) = @_;
    # Write your solution here
    
}

# Test cases
my @result1 = @{topKFrequent([1,1,1,2,2,3], 2)};
print "[" . join(",", @result1) . "]\\n"; # Expected: [1,2]

my @result2 = @{topKFrequent([1], 1)};
print "[" . join(",", @result2) . "]\\n"; # Expected: [1]`,

            r: `topKFrequent <- function(nums, k) {
    # Write your solution here
    
}

# Test cases
print(topKFrequent(c(1,1,1,2,2,3), 2)) # Expected: c(1,2)
print(topKFrequent(c(1), 1)) # Expected: c(1)`
        },
        expectedOutput: {
            javascript: "[1,2]\n[1]",
            python: "[1, 2]\n[1]",
            java: "[1, 2]\n[1]",
        },
    },

    "task-scheduler": {
        id: "task-scheduler",
        title: "Task Scheduler",
        difficulty: "Medium",
        category: "Array • Greedy • Heap • Queue",
        description: {
            text: "Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task takes one unit of time. For each unit of time, the CPU could complete one task or just be idle. However, there is a non-negative integer n that represents the cooldown period between two same tasks (there must be at least n units of time between two same tasks). Return the least number of units of time that the CPU will take to finish all given tasks.",
            notes: [
                "You need to return the minimum time to finish all tasks.",
                "Tasks are represented by uppercase letters."
            ],
        },
        examples: [
            {
                input: "tasks = ['A','A','A','B','B','B'], n = 2",
                output: "8",
                explanation: "A -> B -> idle -> A -> B -> idle -> A -> B",
            },
            {
                input: "tasks = ['A','A','A','B','B','B'], n = 0",
                output: "6",
                explanation: "A -> B -> A -> B -> A -> B",
            },
            {
                input: "tasks = ['A','A','A','A','A','A','B','C','D','E','F','G'], n = 2",
                output: "16",
            },
        ],
        constraints: [
            "1 ≤ tasks.length ≤ 10⁴",
            "tasks[i] is an uppercase English letter",
            "0 ≤ n ≤ 100",
        ],
        starterCode: {
            javascript: `function leastInterval(tasks, n) {
    // Write your solution here
    
}

// Test cases
console.log(leastInterval(['A','A','A','B','B','B'], 2)); // Expected: 8
console.log(leastInterval(['A','A','A','B','B','B'], 0)); // Expected: 6
console.log(leastInterval(['A','A','A','A','A','A','B','C','D','E','F','G'], 2)); // Expected: 16`,

            typescript: `function leastInterval(tasks: string[], n: number): number {
    // Write your solution here
    
}

// Test cases
console.log(leastInterval(['A','A','A','B','B','B'], 2)); // Expected: 8
console.log(leastInterval(['A','A','A','B','B','B'], 0)); // Expected: 6
console.log(leastInterval(['A','A','A','A','A','A','B','C','D','E','F','G'], 2)); // Expected: 16`,

            python: `def leastInterval(tasks, n):
    # Write your solution here
    pass

# Test cases
print(leastInterval(['A','A','A','B','B','B'], 2))  # Expected: 8
print(leastInterval(['A','A','A','B','B','B'], 0))  # Expected: 6
print(leastInterval(['A','A','A','A','A','A','B','C','D','E','F','G'], 2))  # Expected: 16`,

            java: `import java.util.*;

class Solution {
    public static int leastInterval(char[] tasks, int n) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(leastInterval(new char[]{'A','A','A','B','B','B'}, 2)); // Expected: 8
        System.out.println(leastInterval(new char[]{'A','A','A','B','B','B'}, 0)); // Expected: 6
        System.out.println(leastInterval(new char[]{'A','A','A','A','A','A','B','C','D','E','F','G'}, 2)); // Expected: 16
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <queue>
#include <algorithm>
using namespace std;

int leastInterval(vector<char>& tasks, int n) {
    // Write your solution here
    
}

int main() {
    vector<char> tasks1 = {'A','A','A','B','B','B'};
    cout << leastInterval(tasks1, 2) << endl; // Expected: 8
    cout << leastInterval(tasks1, 0) << endl; // Expected: 6
    
    vector<char> tasks2 = {'A','A','A','A','A','A','B','C','D','E','F','G'};
    cout << leastInterval(tasks2, 2) << endl; // Expected: 16
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int leastInterval(char* tasks, int tasksSize, int n) {
    // Write your solution here
    
}

int main() {
    char tasks1[] = {'A','A','A','B','B','B'};
    printf("%d\\n", leastInterval(tasks1, 6, 2)); // Expected: 8
    printf("%d\\n", leastInterval(tasks1, 6, 0)); // Expected: 6
    
    char tasks2[] = {'A','A','A','A','A','A','B','C','D','E','F','G'};
    printf("%d\\n", leastInterval(tasks2, 12, 2)); // Expected: 16
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;
using System.Linq;

class Solution {
    public static int LeastInterval(char[] tasks, int n) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(LeastInterval(new char[] {'A','A','A','B','B','B'}, 2)); // Expected: 8
        Console.WriteLine(LeastInterval(new char[] {'A','A','A','B','B','B'}, 0)); // Expected: 6
        Console.WriteLine(LeastInterval(new char[] {'A','A','A','A','A','A','B','C','D','E','F','G'}, 2)); // Expected: 16
    }
}`,

            go: `package main

import (
    "fmt"
    "sort"
)

func leastInterval(tasks []byte, n int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(leastInterval([]byte{'A','A','A','B','B','B'}, 2)) // Expected: 8
    fmt.Println(leastInterval([]byte{'A','A','A','B','B','B'}, 0)) // Expected: 6
    fmt.Println(leastInterval([]byte{'A','A','A','A','A','A','B','C','D','E','F','G'}, 2)) // Expected: 16
}`,

            rust: `use std::collections::BinaryHeap;
use std::cmp::Reverse;

fn least_interval(tasks: Vec<char>, n: i32) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", least_interval(vec!['A','A','A','B','B','B'], 2)); // Expected: 8
    println!("{}", least_interval(vec!['A','A','A','B','B','B'], 0)); // Expected: 6
    println!("{}", least_interval(vec!['A','A','A','A','A','A','B','C','D','E','F','G'], 2)); // Expected: 16
}`,

            ruby: `def least_interval(tasks, n)
    # Write your solution here
    
end

# Test cases
puts least_interval(['A','A','A','B','B','B'], 2) # Expected: 8
puts least_interval(['A','A','A','B','B','B'], 0) # Expected: 6
puts least_interval(['A','A','A','A','A','A','B','C','D','E','F','G'], 2) # Expected: 16`,

            php: `<?php
function leastInterval($tasks, $n) {
    // Write your solution here
    
}

// Test cases
echo leastInterval(['A','A','A','B','B','B'], 2) . "\\n"; // Expected: 8
echo leastInterval(['A','A','A','B','B','B'], 0) . "\\n"; // Expected: 6
echo leastInterval(['A','A','A','A','A','A','B','C','D','E','F','G'], 2) . "\\n"; // Expected: 16
?>`,

            swift: `func leastInterval(_ tasks: [Character], _ n: Int) -> Int {
    // Write your solution here
    
}

// Test cases
print(leastInterval(["A","A","A","B","B","B"], 2)) // Expected: 8
print(leastInterval(["A","A","A","B","B","B"], 0)) // Expected: 6
print(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2)) // Expected: 16`,

            kotlin: `import java.util.PriorityQueue

fun leastInterval(tasks: CharArray, n: Int): Int {
    // Write your solution here
    
}

fun main() {
    println(leastInterval(charArrayOf('A','A','A','B','B','B'), 2)) // Expected: 8
    println(leastInterval(charArrayOf('A','A','A','B','B','B'), 0)) // Expected: 6
    println(leastInterval(charArrayOf('A','A','A','A','A','A','B','C','D','E','F','G'), 2)) // Expected: 16
}`,

            scala: `import scala.collection.mutable

object Solution {
    def leastInterval(tasks: Array[Char], n: Int): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(leastInterval(Array('A','A','A','B','B','B'), 2)) // Expected: 8
        println(leastInterval(Array('A','A','A','B','B','B'), 0)) // Expected: 6
        println(leastInterval(Array('A','A','A','A','A','A','B','C','D','E','F','G'), 2)) // Expected: 16
    }
}`,

            perl: `sub leastInterval {
    my ($tasks, $n) = @_;
    # Write your solution here
    
}

# Test cases
print leastInterval(['A','A','A','B','B','B'], 2) . "\\n"; # Expected: 8
print leastInterval(['A','A','A','B','B','B'], 0) . "\\n"; # Expected: 6
print leastInterval(['A','A','A','A','A','A','B','C','D','E','F','G'], 2) . "\\n"; # Expected: 16`,

            r: `leastInterval <- function(tasks, n) {
    # Write your solution here
    
}

# Test cases
print(leastInterval(c('A','A','A','B','B','B'), 2)) # Expected: 8
print(leastInterval(c('A','A','A','B','B','B'), 0)) # Expected: 6
print(leastInterval(c('A','A','A','A','A','A','B','C','D','E','F','G'), 2)) # Expected: 16`
        },
        expectedOutput: {
            javascript: "8\n6\n16",
            python: "8\n6\n16",
            java: "8\n6\n16",
        },
    },

    "subarray-sum-equals-k": {
        id: "subarray-sum-equals-k",
        title: "Subarray Sum Equals K",
        difficulty: "Medium",
        category: "Array • Hash Table • Prefix Sum",
        description: {
            text: "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.",
            notes: [
                "A subarray is a contiguous non-empty sequence of elements.",
                "The answer should be the count of such subarrays."
            ],
        },
        examples: [
            {
                input: "nums = [1,1,1], k = 2",
                output: "2",
            },
            {
                input: "nums = [1,2,3], k = 3",
                output: "2",
            },
        ],
        constraints: [
            "1 ≤ nums.length ≤ 2 * 10⁴",
            "-1000 ≤ nums[i] ≤ 1000",
            "-10⁷ ≤ k ≤ 10⁷",
        ],
        starterCode: {
            javascript: `function subarraySum(nums, k) {
    // Write your solution here
    
}

// Test cases
console.log(subarraySum([1,1,1], 2)); // Expected: 2
console.log(subarraySum([1,2,3], 3)); // Expected: 2`,

            typescript: `function subarraySum(nums: number[], k: number): number {
    // Write your solution here
    
}

// Test cases
console.log(subarraySum([1,1,1], 2)); // Expected: 2
console.log(subarraySum([1,2,3], 3)); // Expected: 2`,

            python: `def subarraySum(nums, k):
    # Write your solution here
    pass

# Test cases
print(subarraySum([1,1,1], 2))  # Expected: 2
print(subarraySum([1,2,3], 3))  # Expected: 2`,

            java: `import java.util.*;

class Solution {
    public static int subarraySum(int[] nums, int k) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(subarraySum(new int[]{1,1,1}, 2)); // Expected: 2
        System.out.println(subarraySum(new int[]{1,2,3}, 3)); // Expected: 2
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int subarraySum(vector<int>& nums, int k) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {1,1,1};
    cout << subarraySum(nums1, 2) << endl; // Expected: 2
    
    vector<int> nums2 = {1,2,3};
    cout << subarraySum(nums2, 3) << endl; // Expected: 2
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int subarraySum(int* nums, int numsSize, int k) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {1,1,1};
    printf("%d\\n", subarraySum(nums1, 3, 2)); // Expected: 2
    
    int nums2[] = {1,2,3};
    printf("%d\\n", subarraySum(nums2, 3, 3)); // Expected: 2
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int SubarraySum(int[] nums, int k) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(SubarraySum(new int[] {1,1,1}, 2)); // Expected: 2
        Console.WriteLine(SubarraySum(new int[] {1,2,3}, 3)); // Expected: 2
    }
}`,

            go: `package main

import "fmt"

func subarraySum(nums []int, k int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(subarraySum([]int{1,1,1}, 2)) // Expected: 2
    fmt.Println(subarraySum([]int{1,2,3}, 3)) // Expected: 2
}`,

            rust: `use std::collections::HashMap;

fn subarray_sum(nums: Vec<i32>, k: i32) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", subarray_sum(vec![1,1,1], 2)); // Expected: 2
    println!("{}", subarray_sum(vec![1,2,3], 3)); // Expected: 2
}`,

            ruby: `def subarray_sum(nums, k)
    # Write your solution here
    
end

# Test cases
puts subarray_sum([1,1,1], 2) # Expected: 2
puts subarray_sum([1,2,3], 3) # Expected: 2`,

            php: `<?php
function subarraySum($nums, $k) {
    // Write your solution here
    
}

// Test cases
echo subarraySum([1,1,1], 2) . "\\n"; // Expected: 2
echo subarraySum([1,2,3], 3) . "\\n"; // Expected: 2
?>`,

            swift: `func subarraySum(_ nums: [Int], _ k: Int) -> Int {
    // Write your solution here
    
}

// Test cases
print(subarraySum([1,1,1], 2)) // Expected: 2
print(subarraySum([1,2,3], 3)) // Expected: 2`,

            kotlin: `fun subarraySum(nums: IntArray, k: Int): Int {
    // Write your solution here
    
}

fun main() {
    println(subarraySum(intArrayOf(1,1,1), 2)) // Expected: 2
    println(subarraySum(intArrayOf(1,2,3), 3)) // Expected: 2
}`,

            scala: `import scala.collection.mutable

object Solution {
    def subarraySum(nums: Array[Int], k: Int): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(subarraySum(Array(1,1,1), 2)) // Expected: 2
        println(subarraySum(Array(1,2,3), 3)) // Expected: 2
    }
}`,

            perl: `sub subarraySum {
    my ($nums, $k) = @_;
    # Write your solution here
    
}

# Test cases
print subarraySum([1,1,1], 2) . "\\n"; # Expected: 2
print subarraySum([1,2,3], 3) . "\\n"; # Expected: 2`,

            r: `subarraySum <- function(nums, k) {
    # Write your solution here
    
}

# Test cases
print(subarraySum(c(1,1,1), 2)) # Expected: 2
print(subarraySum(c(1,2,3), 3)) # Expected: 2`
        },
        expectedOutput: {
            javascript: "2\n2",
            python: "2\n2",
            java: "2\n2",
        },
    },

    "continuous-subarray-sum": {
        id: "continuous-subarray-sum",
        title: "Continuous Subarray Sum",
        difficulty: "Medium",
        category: "Array • Hash Table • Math • Prefix Sum",
        description: {
            text: "Given an integer array nums and an integer k, return true if nums has a good subarray, or false otherwise. A good subarray is a subarray where its length is at least two, and the sum of the elements of the subarray is a multiple of k.",
            notes: [
                "A subarray is a contiguous part of the array.",
                "An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k."
            ],
        },
        examples: [
            {
                input: "nums = [23,2,4,6,7], k = 6",
                output: "true",
                explanation: "[2,4] is a subarray of size 2 whose sum is 6 which is a multiple of 6.",
            },
            {
                input: "nums = [23,2,6,4,7], k = 6",
                output: "true",
                explanation: "[23,2,6,4,7] is a subarray of size 5 whose sum is 42 which is a multiple of 6.",
            },
            {
                input: "nums = [23,2,6,4,7], k = 13",
                output: "false",
            },
        ],
        constraints: [
            "1 ≤ nums.length ≤ 10⁵",
            "0 ≤ nums[i] ≤ 10⁹",
            "0 ≤ k ≤ 2³¹ - 1",
        ],
        starterCode: {
            javascript: `function checkSubarraySum(nums, k) {
    // Write your solution here
    
}

// Test cases
console.log(checkSubarraySum([23,2,4,6,7], 6)); // Expected: true
console.log(checkSubarraySum([23,2,6,4,7], 6)); // Expected: true
console.log(checkSubarraySum([23,2,6,4,7], 13)); // Expected: false`,

            typescript: `function checkSubarraySum(nums: number[], k: number): boolean {
    // Write your solution here
    
}

// Test cases
console.log(checkSubarraySum([23,2,4,6,7], 6)); // Expected: true
console.log(checkSubarraySum([23,2,6,4,7], 6)); // Expected: true
console.log(checkSubarraySum([23,2,6,4,7], 13)); // Expected: false`,

            python: `def checkSubarraySum(nums, k):
    # Write your solution here
    pass

# Test cases
print(checkSubarraySum([23,2,4,6,7], 6))  # Expected: True
print(checkSubarraySum([23,2,6,4,7], 6))  # Expected: True
print(checkSubarraySum([23,2,6,4,7], 13))  # Expected: False`,

            java: `import java.util.*;

class Solution {
    public static boolean checkSubarraySum(int[] nums, int k) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(checkSubarraySum(new int[]{23,2,4,6,7}, 6)); // Expected: true
        System.out.println(checkSubarraySum(new int[]{23,2,6,4,7}, 6)); // Expected: true
        System.out.println(checkSubarraySum(new int[]{23,2,6,4,7}, 13)); // Expected: false
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

bool checkSubarraySum(vector<int>& nums, int k) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {23,2,4,6,7};
    cout << boolalpha;
    cout << checkSubarraySum(nums1, 6) << endl; // Expected: true
    
    vector<int> nums2 = {23,2,6,4,7};
    cout << checkSubarraySum(nums2, 6) << endl; // Expected: true
    cout << checkSubarraySum(nums2, 13) << endl; // Expected: false
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

bool checkSubarraySum(int* nums, int numsSize, int k) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {23,2,4,6,7};
    printf("%d\\n", checkSubarraySum(nums1, 5, 6)); // Expected: 1 (true)
    
    int nums2[] = {23,2,6,4,7};
    printf("%d\\n", checkSubarraySum(nums2, 5, 6)); // Expected: 1 (true)
    printf("%d\\n", checkSubarraySum(nums2, 5, 13)); // Expected: 0 (false)
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static bool CheckSubarraySum(int[] nums, int k) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(CheckSubarraySum(new int[] {23,2,4,6,7}, 6)); // Expected: True
        Console.WriteLine(CheckSubarraySum(new int[] {23,2,6,4,7}, 6)); // Expected: True
        Console.WriteLine(CheckSubarraySum(new int[] {23,2,6,4,7}, 13)); // Expected: False
    }
}`,

            go: `package main

import "fmt"

func checkSubarraySum(nums []int, k int) bool {
    // Write your solution here
    
}

func main() {
    fmt.Println(checkSubarraySum([]int{23,2,4,6,7}, 6)) // Expected: true
    fmt.Println(checkSubarraySum([]int{23,2,6,4,7}, 6)) // Expected: true
    fmt.Println(checkSubarraySum([]int{23,2,6,4,7}, 13)) // Expected: false
}`,

            rust: `use std::collections::HashMap;

fn check_subarray_sum(nums: Vec<i32>, k: i32) -> bool {
    // Write your solution here
    
}

fn main() {
    println!("{}", check_subarray_sum(vec![23,2,4,6,7], 6)); // Expected: true
    println!("{}", check_subarray_sum(vec![23,2,6,4,7], 6)); // Expected: true
    println!("{}", check_subarray_sum(vec![23,2,6,4,7], 13)); // Expected: false
}`,

            ruby: `def check_subarray_sum(nums, k)
    # Write your solution here
    
end

# Test cases
puts check_subarray_sum([23,2,4,6,7], 6) # Expected: true
puts check_subarray_sum([23,2,6,4,7], 6) # Expected: true
puts check_subarray_sum([23,2,6,4,7], 13) # Expected: false`,

            php: `<?php
function checkSubarraySum($nums, $k) {
    // Write your solution here
    
}

// Test cases
echo var_export(checkSubarraySum([23,2,4,6,7], 6), true) . "\\n"; // Expected: true
echo var_export(checkSubarraySum([23,2,6,4,7], 6), true) . "\\n"; // Expected: true
echo var_export(checkSubarraySum([23,2,6,4,7], 13), true) . "\\n"; // Expected: false
?>`,

            swift: `func checkSubarraySum(_ nums: [Int], _ k: Int) -> Bool {
    // Write your solution here
    
}

// Test cases
print(checkSubarraySum([23,2,4,6,7], 6)) // Expected: true
print(checkSubarraySum([23,2,6,4,7], 6)) // Expected: true
print(checkSubarraySum([23,2,6,4,7], 13)) // Expected: false`,

            kotlin: `fun checkSubarraySum(nums: IntArray, k: Int): Boolean {
    // Write your solution here
    
}

fun main() {
    println(checkSubarraySum(intArrayOf(23,2,4,6,7), 6)) // Expected: true
    println(checkSubarraySum(intArrayOf(23,2,6,4,7), 6)) // Expected: true
    println(checkSubarraySum(intArrayOf(23,2,6,4,7), 13)) // Expected: false
}`,

            scala: `import scala.collection.mutable

object Solution {
    def checkSubarraySum(nums: Array[Int], k: Int): Boolean = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(checkSubarraySum(Array(23,2,4,6,7), 6)) // Expected: true
        println(checkSubarraySum(Array(23,2,6,4,7), 6)) // Expected: true
        println(checkSubarraySum(Array(23,2,6,4,7), 13)) // Expected: false
    }
}`,

            perl: `sub checkSubarraySum {
    my ($nums, $k) = @_;
    # Write your solution here
    
}

# Test cases
print checkSubarraySum([23,2,4,6,7], 6) ? "true\\n" : "false\\n"; # Expected: true
print checkSubarraySum([23,2,6,4,7], 6) ? "true\\n" : "false\\n"; # Expected: true
print checkSubarraySum([23,2,6,4,7], 13) ? "true\\n" : "false\\n"; # Expected: false`,

            r: `checkSubarraySum <- function(nums, k) {
    # Write your solution here
    
}

# Test cases
print(checkSubarraySum(c(23,2,4,6,7), 6)) # Expected: TRUE
print(checkSubarraySum(c(23,2,6,4,7), 6)) # Expected: TRUE
print(checkSubarraySum(c(23,2,6,4,7), 13)) # Expected: FALSE`
        },
        expectedOutput: {
            javascript: "true\ntrue\nfalse",
            python: "True\nTrue\nFalse",
            java: "true\ntrue\nfalse",
        },
    },

    "spiral-matrix": {
        id: "spiral-matrix",
        title: "Spiral Matrix",
        difficulty: "Medium",
        category: "Array • Matrix • Simulation",
        description: {
            text: "Given an m x n matrix, return all elements of the matrix in spiral order.",
            notes: [
                "Traverse the matrix in clockwise spiral order.",
                "Start from the top-left corner and move right, then down, then left, then up."
            ],
        },
        examples: [
            {
                input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
                output: "[1,2,3,6,9,8,7,4,5]",
            },
            {
                input: "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
                output: "[1,2,3,4,8,12,11,10,9,5,6,7]",
            },
        ],
        constraints: [
            "m == matrix.length",
            "n == matrix[i].length",
            "1 ≤ m, n ≤ 10",
            "-100 ≤ matrix[i][j] ≤ 100",
        ],
        starterCode: {
            javascript: `function spiralOrder(matrix) {
    // Write your solution here
    
}

// Test cases
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // Expected: [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]`,

            typescript: `function spiralOrder(matrix: number[][]): number[] {
    // Write your solution here
    
}

// Test cases
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // Expected: [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]`,

            python: `def spiralOrder(matrix):
    # Write your solution here
    pass

# Test cases
print(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))  # Expected: [1,2,3,6,9,8,7,4,5]
print(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))  # Expected: [1,2,3,4,8,12,11,10,9,5,6,7]`,

            java: `import java.util.*;

class Solution {
    public static List<Integer> spiralOrder(int[][] matrix) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(spiralOrder(new int[][]{{1,2,3},{4,5,6},{7,8,9}})); 
        // Expected: [1,2,3,6,9,8,7,4,5]
        System.out.println(spiralOrder(new int[][]{{1,2,3,4},{5,6,7,8},{9,10,11,12}})); 
        // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]
    }
}`,

            cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> spiralOrder(vector<vector<int>>& matrix) {
    // Write your solution here
    
}

int main() {
    vector<vector<int>> matrix1 = {{1,2,3},{4,5,6},{7,8,9}};
    vector<int> result1 = spiralOrder(matrix1);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << result1[i];
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: [1,2,3,6,9,8,7,4,5]
    
    vector<vector<int>> matrix2 = {{1,2,3,4},{5,6,7,8},{9,10,11,12}};
    vector<int> result2 = spiralOrder(matrix2);
    cout << "[";
    for (size_t i = 0; i < result2.size(); i++) {
        cout << result2[i];
        if (i < result2.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int* spiralOrder(int** matrix, int matrixSize, int* matrixColSize, int* returnSize) {
    // Write your solution here
    
}

int main() {
    int matrix1_data[][3] = {{1,2,3},{4,5,6},{7,8,9}};
    int* matrix1[] = {matrix1_data[0], matrix1_data[1], matrix1_data[2]};
    int matrixColSize1[] = {3,3,3};
    int returnSize1;
    int* result1 = spiralOrder(matrix1, 3, matrixColSize1, &returnSize1);
    printf("[");
    for (int i = 0; i < returnSize1; i++) {
        printf("%d", result1[i]);
        if (i < returnSize1 - 1) printf(",");
    }
    printf("]\\n");
    free(result1);
    
    int matrix2_data[][4] = {{1,2,3,4},{5,6,7,8},{9,10,11,12}};
    int* matrix2[] = {matrix2_data[0], matrix2_data[1], matrix2_data[2]};
    int matrixColSize2[] = {4,4,4};
    int returnSize2;
    int* result2 = spiralOrder(matrix2, 3, matrixColSize2, &returnSize2);
    printf("[");
    for (int i = 0; i < returnSize2; i++) {
        printf("%d", result2[i]);
        if (i < returnSize2 - 1) printf(",");
    }
    printf("]\\n");
    free(result2);
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<int> SpiralOrder(int[][] matrix) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine($"[{string.Join(",", SpiralOrder(new int[][] { new int[] {1,2,3}, new int[] {4,5,6}, new int[] {7,8,9} }))}]");
        Console.WriteLine($"[{string.Join(",", SpiralOrder(new int[][] { new int[] {1,2,3,4}, new int[] {5,6,7,8}, new int[] {9,10,11,12} }))}]");
    }
}`,

            go: `package main

import "fmt"

func spiralOrder(matrix [][]int) []int {
    // Write your solution here
    
}

func main() {
    fmt.Println(spiralOrder([][]int{{1,2,3},{4,5,6},{7,8,9}})) // Expected: [1,2,3,6,9,8,7,4,5]
    fmt.Println(spiralOrder([][]int{{1,2,3,4},{5,6,7,8},{9,10,11,12}})) // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]
}`,

            rust: `fn spiral_order(matrix: Vec<Vec<i32>>) -> Vec<i32> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", spiral_order(vec![vec![1,2,3], vec![4,5,6], vec![7,8,9]])); // Expected: [1,2,3,6,9,8,7,4,5]
    println!("{:?}", spiral_order(vec![vec![1,2,3,4], vec![5,6,7,8], vec![9,10,11,12]])); // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]
}`,

            ruby: `def spiral_order(matrix)
    # Write your solution here
    
end

# Test cases
puts spiral_order([[1,2,3],[4,5,6],[7,8,9]]).inspect # Expected: [1,2,3,6,9,8,7,4,5]
puts spiral_order([[1,2,3,4],[5,6,7,8],[9,10,11,12]]).inspect # Expected: [1,2,3,4,8,12,11,10,9,5,6,7]`,

            php: `<?php
function spiralOrder($matrix) {
    // Write your solution here
    
}

// Test cases
print_r(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // Expected: [1,2,3,6,9,8,7,4,5]
print_r(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]
?>`,

            swift: `func spiralOrder(_ matrix: [[Int]]) -> [Int] {
    // Write your solution here
    
}

// Test cases
print(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])) // Expected: [1,2,3,6,9,8,7,4,5]
print(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])) // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]`,

            kotlin: `fun spiralOrder(matrix: Array<IntArray>): List<Int> {
    // Write your solution here
    
}

fun main() {
    println(spiralOrder(arrayOf(intArrayOf(1,2,3), intArrayOf(4,5,6), intArrayOf(7,8,9)))) // Expected: [1,2,3,6,9,8,7,4,5]
    println(spiralOrder(arrayOf(intArrayOf(1,2,3,4), intArrayOf(5,6,7,8), intArrayOf(9,10,11,12)))) // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]
}`,

            scala: `import scala.collection.mutable.ListBuffer

object Solution {
    def spiralOrder(matrix: Array[Array[Int]]): List[Int] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(spiralOrder(Array(Array(1,2,3), Array(4,5,6), Array(7,8,9)))) // Expected: List(1,2,3,6,9,8,7,4,5)
        println(spiralOrder(Array(Array(1,2,3,4), Array(5,6,7,8), Array(9,10,11,12)))) // Expected: List(1,2,3,4,8,12,11,10,9,5,6,7)
    }
}`,

            perl: `sub spiralOrder {
    my $matrix = shift;
    # Write your solution here
    
}

# Test cases
my @result1 = @{spiralOrder([[1,2,3],[4,5,6],[7,8,9]])};
print "[" . join(",", @result1) . "]\\n"; # Expected: [1,2,3,6,9,8,7,4,5]

my @result2 = @{spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])};
print "[" . join(",", @result2) . "]\\n"; # Expected: [1,2,3,4,8,12,11,10,9,5,6,7]`,

            r: `spiralOrder <- function(matrix) {
    # Write your solution here
    
}

# Test cases
print(spiralOrder(list(c(1,2,3), c(4,5,6), c(7,8,9)))) # Expected: c(1,2,3,6,9,8,7,4,5)
print(spiralOrder(list(c(1,2,3,4), c(5,6,7,8), c(9,10,11,12)))) # Expected: c(1,2,3,4,8,12,11,10,9,5,6,7)`
        },
        expectedOutput: {
            javascript: "[1,2,3,6,9,8,7,4,5]\n[1,2,3,4,8,12,11,10,9,5,6,7]",
            python: "[1, 2, 3, 6, 9, 8, 7, 4, 5]\n[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]",
            java: "[1, 2, 3, 6, 9, 8, 7, 4, 5]\n[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]",
        },
    },

    "rotate-image": {
        id: "rotate-image",
        title: "Rotate Image",
        difficulty: "Medium",
        category: "Array • Matrix",
        description: {
            text: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).",
            notes: [
                "You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.",
                "DO NOT allocate another 2D matrix and do the rotation."
            ],
        },
        examples: [
            {
                input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
                output: "[[7,4,1],[8,5,2],[9,6,3]]",
            },
            {
                input: "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",
                output: "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
            },
        ],
        constraints: [
            "n == matrix.length == matrix[i].length",
            "1 ≤ n ≤ 20",
            "-1000 ≤ matrix[i][j] ≤ 1000",
        ],
        starterCode: {
            javascript: `function rotate(matrix) {
    // Write your solution here
    
}

// Test cases
let matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix1);
console.log(matrix1); // Expected: [[7,4,1],[8,5,2],[9,6,3]]

let matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(matrix2);
console.log(matrix2); // Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]`,

            typescript: `function rotate(matrix: number[][]): void {
    // Write your solution here
    
}

// Test cases
let matrix1: number[][] = [[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix1);
console.log(matrix1); // Expected: [[7,4,1],[8,5,2],[9,6,3]]

let matrix2: number[][] = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(matrix2);
console.log(matrix2); // Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]`,

            python: `def rotate(matrix):
    # Write your solution here
    pass

# Test cases
matrix1 = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix1)
print(matrix1)  # Expected: [[7,4,1],[8,5,2],[9,6,3]]

matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
rotate(matrix2)
print(matrix2)  # Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]`,

            java: `import java.util.*;

class Solution {
    public static void rotate(int[][] matrix) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        int[][] matrix1 = {{1,2,3},{4,5,6},{7,8,9}};
        rotate(matrix1);
        System.out.println(Arrays.deepToString(matrix1)); 
        // Expected: [[7,4,1],[8,5,2],[9,6,3]]

        int[][] matrix2 = {{5,1,9,11},{2,4,8,10},{13,3,6,7},{15,14,12,16}};
        rotate(matrix2);
        System.out.println(Arrays.deepToString(matrix2)); 
        // Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void rotate(vector<vector<int>>& matrix) {
    // Write your solution here
    
}

int main() {
    vector<vector<int>> matrix1 = {{1,2,3},{4,5,6},{7,8,9}};
    rotate(matrix1);
    cout << "[";
    for (size_t i = 0; i < matrix1.size(); i++) {
        cout << "[";
        for (size_t j = 0; j < matrix1[i].size(); j++) {
            cout << matrix1[i][j];
            if (j < matrix1[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < matrix1.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    vector<vector<int>> matrix2 = {{5,1,9,11},{2,4,8,10},{13,3,6,7},{15,14,12,16}};
    rotate(matrix2);
    cout << "[";
    for (size_t i = 0; i < matrix2.size(); i++) {
        cout << "[";
        for (size_t j = 0; j < matrix2[i].size(); j++) {
            cout << matrix2[i][j];
            if (j < matrix2[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < matrix2.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,

            c: `#include <stdio.h>

void rotate(int** matrix, int matrixSize, int* matrixColSize) {
    // Write your solution here
    
}

int main() {
    int matrix1_data[][3] = {{1,2,3},{4,5,6},{7,8,9}};
    int* matrix1[] = {matrix1_data[0], matrix1_data[1], matrix1_data[2]};
    int matrixColSize1[] = {3,3,3};
    rotate(matrix1, 3, matrixColSize1);
    printf("[");
    for (int i = 0; i < 3; i++) {
        printf("[");
        for (int j = 0; j < 3; j++) {
            printf("%d", matrix1[i][j]);
            if (j < 2) printf(",");
        }
        printf("]");
        if (i < 2) printf(",");
    }
    printf("]\\n");
    
    int matrix2_data[][4] = {{5,1,9,11},{2,4,8,10},{13,3,6,7},{15,14,12,16}};
    int* matrix2[] = {matrix2_data[0], matrix2_data[1], matrix2_data[2], matrix2_data[3]};
    int matrixColSize2[] = {4,4,4,4};
    rotate(matrix2, 4, matrixColSize2);
    printf("[");
    for (int i = 0; i < 4; i++) {
        printf("[");
        for (int j = 0; j < 4; j++) {
            printf("%d", matrix2[i][j]);
            if (j < 3) printf(",");
        }
        printf("]");
        if (i < 3) printf(",");
    }
    printf("]\\n");
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static void Rotate(int[][] matrix) {
        // Write your solution here
        
    }
    
    static void Main() {
        int[][] matrix1 = new int[][] { new int[] {1,2,3}, new int[] {4,5,6}, new int[] {7,8,9} };
        Rotate(matrix1);
        Console.WriteLine($"[{string.Join(",", Array.ConvertAll(matrix1, row => $"[{string.Join(",", row)}]"))}]");
        
        int[][] matrix2 = new int[][] { new int[] {5,1,9,11}, new int[] {2,4,8,10}, new int[] {13,3,6,7}, new int[] {15,14,12,16} };
        Rotate(matrix2);
        Console.WriteLine($"[{string.Join(",", Array.ConvertAll(matrix2, row => $"[{string.Join(",", row)}]"))}]");
    }
}`,

            go: `package main

import "fmt"

func rotate(matrix [][]int) {
    // Write your solution here
    
}

func main() {
    matrix1 := [][]int{{1,2,3},{4,5,6},{7,8,9}}
    rotate(matrix1)
    fmt.Println(matrix1) // Expected: [[7 4 1] [8 5 2] [9 6 3]]
    
    matrix2 := [][]int{{5,1,9,11},{2,4,8,10},{13,3,6,7},{15,14,12,16}}
    rotate(matrix2)
    fmt.Println(matrix2) // Expected: [[15 13 2 5] [14 3 4 1] [12 6 8 9] [16 7 10 11]]
}`,

            rust: `fn rotate(matrix: &mut Vec<Vec<i32>>) {
    // Write your solution here
    
}

fn main() {
    let mut matrix1 = vec![vec![1,2,3], vec![4,5,6], vec![7,8,9]];
    rotate(&mut matrix1);
    println!("{:?}", matrix1); // Expected: [[7,4,1],[8,5,2],[9,6,3]]
    
    let mut matrix2 = vec![vec![5,1,9,11], vec![2,4,8,10], vec![13,3,6,7], vec![15,14,12,16]];
    rotate(&mut matrix2);
    println!("{:?}", matrix2); // Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
}`,

            ruby: `def rotate(matrix)
    # Write your solution here
    
end

# Test cases
matrix1 = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix1)
puts matrix1.inspect # Expected: [[7,4,1],[8,5,2],[9,6,3]]

matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
rotate(matrix2)
puts matrix2.inspect # Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]`,

            php: `<?php
function rotate(&$matrix) {
    // Write your solution here
    
}

// Test cases
$matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
rotate($matrix1);
print_r($matrix1); // Expected: [[7,4,1],[8,5,2],[9,6,3]]

$matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate($matrix2);
print_r($matrix2); // Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
?>`,

            swift: `func rotate(_ matrix: inout [[Int]]) {
    // Write your solution here
    
}

// Test cases
var matrix1 = [[1,2,3],[4,5,6],[7,8,9]]
rotate(&matrix1)
print(matrix1) // Expected: [[7,4,1],[8,5,2],[9,6,3]]

var matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
rotate(&matrix2)
print(matrix2) // Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]`,

            kotlin: `fun rotate(matrix: Array<IntArray>) {
    // Write your solution here
    
}

fun main() {
    var matrix1 = arrayOf(intArrayOf(1,2,3), intArrayOf(4,5,6), intArrayOf(7,8,9))
    rotate(matrix1)
    println(matrix1.map { it.joinToString() }.joinToString())
    
    var matrix2 = arrayOf(intArrayOf(5,1,9,11), intArrayOf(2,4,8,10), intArrayOf(13,3,6,7), intArrayOf(15,14,12,16))
    rotate(matrix2)
    println(matrix2.map { it.joinToString() }.joinToString())
}`,

            scala: `object Solution {
    def rotate(matrix: Array[Array[Int]]): Unit = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        var matrix1 = Array(Array(1,2,3), Array(4,5,6), Array(7,8,9))
        rotate(matrix1)
        println(matrix1.map(_.mkString(",")).mkString(";"))
        
        var matrix2 = Array(Array(5,1,9,11), Array(2,4,8,10), Array(13,3,6,7), Array(15,14,12,16))
        rotate(matrix2)
        println(matrix2.map(_.mkString(",")).mkString(";"))
    }
}`,

            perl: `sub rotate {
    my $matrix = shift;
    # Write your solution here
    
}

# Test cases
my $matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
rotate($matrix1);
print "[";
for my $i (0..2) {
    print "[" . join(",", @{$matrix1->[$i]}) . "]";
    print "," if $i < 2;
}
print "]\\n";

my $matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate($matrix2);
print "[";
for my $i (0..3) {
    print "[" . join(",", @{$matrix2->[$i]}) . "]";
    print "," if $i < 3;
}
print "]\\n";`,

            r: `rotate <- function(matrix) {
    # Write your solution here
    
}

# Test cases
matrix1 <- list(c(1,2,3), c(4,5,6), c(7,8,9))
rotate(matrix1)
print(matrix1)

matrix2 <- list(c(5,1,9,11), c(2,4,8,10), c(13,3,6,7), c(15,14,12,16))
rotate(matrix2)
print(matrix2)`
        },
        expectedOutput: {
            javascript: "[[7,4,1],[8,5,2],[9,6,3]]\n[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
            python: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]\n[[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]",
            java: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]\n[[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]",
        },
    },

    "set-matrix-zeroes": {
        id: "set-matrix-zeroes",
        title: "Set Matrix Zeroes",
        difficulty: "Medium",
        category: "Array • Matrix",
        description: {
            text: "Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's. Do it in-place.",
            notes: [
                "You must do it in-place, using constant extra space if possible.",
                "A straightforward solution using O(mn) space is trivial, but can you do it with O(1) space?"
            ],
        },
        examples: [
            {
                input: "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
                output: "[[1,0,1],[0,0,0],[1,0,1]]",
            },
            {
                input: "matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
                output: "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
            },
        ],
        constraints: [
            "m == matrix.length",
            "n == matrix[0].length",
            "1 ≤ m, n ≤ 200",
            "-2³¹ ≤ matrix[i][j] ≤ 2³¹ - 1",
        ],
        starterCode: {
            javascript: `function setZeroes(matrix) {
    // Write your solution here
    
}

// Test cases
let matrix1 = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(matrix1);
console.log(matrix1); // Expected: [[1,0,1],[0,0,0],[1,0,1]]

let matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes(matrix2);
console.log(matrix2); // Expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]`,

            typescript: `function setZeroes(matrix: number[][]): void {
    // Write your solution here
    
}

// Test cases
let matrix1: number[][] = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(matrix1);
console.log(matrix1); // Expected: [[1,0,1],[0,0,0],[1,0,1]]

let matrix2: number[][] = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes(matrix2);
console.log(matrix2); // Expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]`,

            python: `def setZeroes(matrix):
    # Write your solution here
    pass

# Test cases
matrix1 = [[1,1,1],[1,0,1],[1,1,1]]
setZeroes(matrix1)
print(matrix1)  # Expected: [[1,0,1],[0,0,0],[1,0,1]]

matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
setZeroes(matrix2)
print(matrix2)  # Expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]`,

            java: `import java.util.*;

class Solution {
    public static void setZeroes(int[][] matrix) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        int[][] matrix1 = {{1,1,1},{1,0,1},{1,1,1}};
        setZeroes(matrix1);
        System.out.println(Arrays.deepToString(matrix1)); 
        // Expected: [[1,0,1],[0,0,0],[1,0,1]]

        int[][] matrix2 = {{0,1,2,0},{3,4,5,2},{1,3,1,5}};
        setZeroes(matrix2);
        System.out.println(Arrays.deepToString(matrix2)); 
        // Expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
    }
}`,

            cpp: `#include <iostream>
#include <vector>
using namespace std;

void setZeroes(vector<vector<int>>& matrix) {
    // Write your solution here
    
}

int main() {
    vector<vector<int>> matrix1 = {{1,1,1},{1,0,1},{1,1,1}};
    setZeroes(matrix1);
    cout << "[";
    for (size_t i = 0; i < matrix1.size(); i++) {
        cout << "[";
        for (size_t j = 0; j < matrix1[i].size(); j++) {
            cout << matrix1[i][j];
            if (j < matrix1[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < matrix1.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    vector<vector<int>> matrix2 = {{0,1,2,0},{3,4,5,2},{1,3,1,5}};
    setZeroes(matrix2);
    cout << "[";
    for (size_t i = 0; i < matrix2.size(); i++) {
        cout << "[";
        for (size_t j = 0; j < matrix2[i].size(); j++) {
            cout << matrix2[i][j];
            if (j < matrix2[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < matrix2.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdbool.h>

void setZeroes(int** matrix, int matrixSize, int* matrixColSize) {
    // Write your solution here
    
}

int main() {
    int matrix1_data[][3] = {{1,1,1},{1,0,1},{1,1,1}};
    int* matrix1[] = {matrix1_data[0], matrix1_data[1], matrix1_data[2]};
    int matrixColSize1[] = {3,3,3};
    setZeroes(matrix1, 3, matrixColSize1);
    printf("[");
    for (int i = 0; i < 3; i++) {
        printf("[");
        for (int j = 0; j < 3; j++) {
            printf("%d", matrix1[i][j]);
            if (j < 2) printf(",");
        }
        printf("]");
        if (i < 2) printf(",");
    }
    printf("]\\n");
    
    int matrix2_data[][4] = {{0,1,2,0},{3,4,5,2},{1,3,1,5}};
    int* matrix2[] = {matrix2_data[0], matrix2_data[1], matrix2_data[2]};
    int matrixColSize2[] = {4,4,4};
    setZeroes(matrix2, 3, matrixColSize2);
    printf("[");
    for (int i = 0; i < 3; i++) {
        printf("[");
        for (int j = 0; j < 4; j++) {
            printf("%d", matrix2[i][j]);
            if (j < 3) printf(",");
        }
        printf("]");
        if (i < 2) printf(",");
    }
    printf("]\\n");
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static void SetZeroes(int[][] matrix) {
        // Write your solution here
        
    }
    
    static void Main() {
        int[][] matrix1 = new int[][] { new int[] {1,1,1}, new int[] {1,0,1}, new int[] {1,1,1} };
        SetZeroes(matrix1);
        Console.WriteLine($"[{string.Join(",", Array.ConvertAll(matrix1, row => $"[{string.Join(",", row)}]"))}]");
        
        int[][] matrix2 = new int[][] { new int[] {0,1,2,0}, new int[] {3,4,5,2}, new int[] {1,3,1,5} };
        SetZeroes(matrix2);
        Console.WriteLine($"[{string.Join(",", Array.ConvertAll(matrix2, row => $"[{string.Join(",", row)}]"))}]");
    }
}`,

            go: `package main

import "fmt"

func setZeroes(matrix [][]int) {
    // Write your solution here
    
}

func main() {
    matrix1 := [][]int{{1,1,1},{1,0,1},{1,1,1}}
    setZeroes(matrix1)
    fmt.Println(matrix1) // Expected: [[1 0 1] [0 0 0] [1 0 1]]
    
    matrix2 := [][]int{{0,1,2,0},{3,4,5,2},{1,3,1,5}}
    setZeroes(matrix2)
    fmt.Println(matrix2) // Expected: [[0 0 0 0] [0 4 5 0] [0 3 1 0]]
}`,

            rust: `fn set_zeroes(matrix: &mut Vec<Vec<i32>>) {
    // Write your solution here
    
}

fn main() {
    let mut matrix1 = vec![vec![1,1,1], vec![1,0,1], vec![1,1,1]];
    set_zeroes(&mut matrix1);
    println!("{:?}", matrix1); // Expected: [[1,0,1],[0,0,0],[1,0,1]]
    
    let mut matrix2 = vec![vec![0,1,2,0], vec![3,4,5,2], vec![1,3,1,5]];
    set_zeroes(&mut matrix2);
    println!("{:?}", matrix2); // Expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
}`,

            ruby: `def set_zeroes(matrix)
    # Write your solution here
    
end

# Test cases
matrix1 = [[1,1,1],[1,0,1],[1,1,1]]
set_zeroes(matrix1)
puts matrix1.inspect # Expected: [[1,0,1],[0,0,0],[1,0,1]]

matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
set_zeroes(matrix2)
puts matrix2.inspect # Expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]`,

            php: `<?php
function setZeroes(&$matrix) {
    // Write your solution here
    
}

// Test cases
$matrix1 = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes($matrix1);
print_r($matrix1); // Expected: [[1,0,1],[0,0,0],[1,0,1]]

$matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes($matrix2);
print_r($matrix2); // Expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
?>`,

            swift: `func setZeroes(_ matrix: inout [[Int]]) {
    // Write your solution here
    
}

// Test cases
var matrix1 = [[1,1,1],[1,0,1],[1,1,1]]
setZeroes(&matrix1)
print(matrix1) // Expected: [[1,0,1],[0,0,0],[1,0,1]]

var matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
setZeroes(&matrix2)
print(matrix2) // Expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]`,

            kotlin: `fun setZeroes(matrix: Array<IntArray>) {
    // Write your solution here
    
}

fun main() {
    var matrix1 = arrayOf(intArrayOf(1,1,1), intArrayOf(1,0,1), intArrayOf(1,1,1))
    setZeroes(matrix1)
    println(matrix1.map { it.joinToString() }.joinToString())
    
    var matrix2 = arrayOf(intArrayOf(0,1,2,0), intArrayOf(3,4,5,2), intArrayOf(1,3,1,5))
    setZeroes(matrix2)
    println(matrix2.map { it.joinToString() }.joinToString())
}`,

            scala: `object Solution {
    def setZeroes(matrix: Array[Array[Int]]): Unit = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        var matrix1 = Array(Array(1,1,1), Array(1,0,1), Array(1,1,1))
        setZeroes(matrix1)
        println(matrix1.map(_.mkString(",")).mkString(";"))
        
        var matrix2 = Array(Array(0,1,2,0), Array(3,4,5,2), Array(1,3,1,5))
        setZeroes(matrix2)
        println(matrix2.map(_.mkString(",")).mkString(";"))
    }
}`,

            perl: `sub setZeroes {
    my $matrix = shift;
    # Write your solution here
    
}

# Test cases
my $matrix1 = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes($matrix1);
print "[";
for my $i (0..2) {
    print "[" . join(",", @{$matrix1->[$i]}) . "]";
    print "," if $i < 2;
}
print "]\\n";

my $matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes($matrix2);
print "[";
for my $i (0..2) {
    print "[" . join(",", @{$matrix2->[$i]}) . "]";
    print "," if $i < 2;
}
print "]\\n";`,

            r: `setZeroes <- function(matrix) {
    # Write your solution here
    
}

# Test cases
matrix1 <- list(c(1,1,1), c(1,0,1), c(1,1,1))
setZeroes(matrix1)
print(matrix1)

matrix2 <- list(c(0,1,2,0), c(3,4,5,2), c(1,3,1,5))
setZeroes(matrix2)
print(matrix2)`
        },
        expectedOutput: {
            javascript: "[[1,0,1],[0,0,0],[1,0,1]]\n[[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
            python: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]\n[[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]",
            java: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]\n[[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]",
        },
    },

    "valid-anagram": {
        id: "valid-anagram",
        title: "Valid Anagram",
        difficulty: "Easy",
        category: "String • Hash Table • Sorting",
        description: {
            text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
            notes: [
                "An anagram is a word formed by rearranging the letters of a different word.",
                "You may assume the strings contain only lowercase letters."
            ],
        },
        examples: [
            {
                input: "s = 'anagram', t = 'nagaram'",
                output: "true",
            },
            {
                input: "s = 'rat', t = 'car'",
                output: "false",
            },
        ],
        constraints: [
            "1 ≤ s.length, t.length ≤ 5 * 10⁴",
            "s and t consist of lowercase English letters",
        ],
        starterCode: {
            javascript: `function isAnagram(s, t) {
    // Write your solution here
    
}

// Test cases
console.log(isAnagram('anagram', 'nagaram')); // Expected: true
console.log(isAnagram('rat', 'car')); // Expected: false`,

            typescript: `function isAnagram(s: string, t: string): boolean {
    // Write your solution here
    
}

// Test cases
console.log(isAnagram('anagram', 'nagaram')); // Expected: true
console.log(isAnagram('rat', 'car')); // Expected: false`,

            python: `def isAnagram(s, t):
    # Write your solution here
    pass

# Test cases
print(isAnagram('anagram', 'nagaram'))  # Expected: True
print(isAnagram('rat', 'car'))  # Expected: False`,

            java: `import java.util.*;

class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram")); // Expected: true
        System.out.println(isAnagram("rat", "car")); // Expected: false
    }
}`,

            cpp: `#include <iostream>
#include <string>
#include <algorithm>
#include <vector>
using namespace std;

bool isAnagram(string s, string t) {
    // Write your solution here
    
}

int main() {
    cout << boolalpha;
    cout << isAnagram("anagram", "nagaram") << endl; // Expected: true
    cout << isAnagram("rat", "car") << endl; // Expected: false
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isAnagram(char* s, char* t) {
    // Write your solution here
    
}

int main() {
    printf("%d\\n", isAnagram("anagram", "nagaram")); // Expected: 1 (true)
    printf("%d\\n", isAnagram("rat", "car")); // Expected: 0 (false)
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static bool IsAnagram(string s, string t) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(IsAnagram("anagram", "nagaram")); // Expected: True
        Console.WriteLine(IsAnagram("rat", "car")); // Expected: False
    }
}`,

            go: `package main

import "fmt"

func isAnagram(s string, t string) bool {
    // Write your solution here
    
}

func main() {
    fmt.Println(isAnagram("anagram", "nagaram")) // Expected: true
    fmt.Println(isAnagram("rat", "car")) // Expected: false
}`,

            rust: `fn is_anagram(s: String, t: String) -> bool {
    // Write your solution here
    
}

fn main() {
    println!("{}", is_anagram("anagram".to_string(), "nagaram".to_string())); // Expected: true
    println!("{}", is_anagram("rat".to_string(), "car".to_string())); // Expected: false
}`,

            ruby: `def is_anagram(s, t)
    # Write your solution here
    
end

# Test cases
puts is_anagram('anagram', 'nagaram') # Expected: true
puts is_anagram('rat', 'car') # Expected: false`,

            php: `<?php
function isAnagram($s, $t) {
    // Write your solution here
    
}

// Test cases
echo var_export(isAnagram('anagram', 'nagaram'), true) . "\\n"; // Expected: true
echo var_export(isAnagram('rat', 'car'), true) . "\\n"; // Expected: false
?>`,

            swift: `func isAnagram(_ s: String, _ t: String) -> Bool {
    // Write your solution here
    
}

// Test cases
print(isAnagram("anagram", "nagaram")) // Expected: true
print(isAnagram("rat", "car")) // Expected: false`,

            kotlin: `fun isAnagram(s: String, t: String): Boolean {
    // Write your solution here
    
}

fun main() {
    println(isAnagram("anagram", "nagaram")) // Expected: true
    println(isAnagram("rat", "car")) // Expected: false
}`,

            scala: `object Solution {
    def isAnagram(s: String, t: String): Boolean = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(isAnagram("anagram", "nagaram")) // Expected: true
        println(isAnagram("rat", "car")) // Expected: false
    }
}`,

            perl: `sub isAnagram {
    my ($s, $t) = @_;
    # Write your solution here
    
}

# Test cases
print isAnagram('anagram', 'nagaram') ? "true\\n" : "false\\n"; # Expected: true
print isAnagram('rat', 'car') ? "true\\n" : "false\\n"; # Expected: false`,

            r: `isAnagram <- function(s, t) {
    # Write your solution here
    
}

# Test cases
print(isAnagram('anagram', 'nagaram')) # Expected: TRUE
print(isAnagram('rat', 'car')) # Expected: FALSE`
        },
        expectedOutput: {
            javascript: "true\nfalse",
            python: "True\nFalse",
            java: "true\nfalse",
        },
    },

    "first-unique-character-in-a-string": {
        id: "first-unique-character-in-a-string",
        title: "First Unique Character in a String",
        difficulty: "Easy",
        category: "String • Hash Table • Queue",
        description: {
            text: "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
            notes: [
                "You need to find the first character that appears only once.",
                "Return its index, or -1 if none exists."
            ],
        },
        examples: [
            {
                input: "s = 'leetcode'",
                output: "0",
            },
            {
                input: "s = 'loveleetcode'",
                output: "2",
            },
            {
                input: "s = 'aabb'",
                output: "-1",
            },
        ],
        constraints: [
            "1 ≤ s.length ≤ 10⁵",
            "s consists of only lowercase English letters",
        ],
        starterCode: {
            javascript: `function firstUniqChar(s) {
    // Write your solution here
    
}

// Test cases
console.log(firstUniqChar('leetcode')); // Expected: 0
console.log(firstUniqChar('loveleetcode')); // Expected: 2
console.log(firstUniqChar('aabb')); // Expected: -1`,

            typescript: `function firstUniqChar(s: string): number {
    // Write your solution here
    
}

// Test cases
console.log(firstUniqChar('leetcode')); // Expected: 0
console.log(firstUniqChar('loveleetcode')); // Expected: 2
console.log(firstUniqChar('aabb')); // Expected: -1`,

            python: `def firstUniqChar(s):
    # Write your solution here
    pass

# Test cases
print(firstUniqChar('leetcode'))  # Expected: 0
print(firstUniqChar('loveleetcode'))  # Expected: 2
print(firstUniqChar('aabb'))  # Expected: -1`,

            java: `import java.util.*;

class Solution {
    public static int firstUniqChar(String s) {
        // Write your solution here
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(firstUniqChar("leetcode")); // Expected: 0
        System.out.println(firstUniqChar("loveleetcode")); // Expected: 2
        System.out.println(firstUniqChar("aabb")); // Expected: -1
    }
}`,

            cpp: `#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

int firstUniqChar(string s) {
    // Write your solution here
    
}

int main() {
    cout << firstUniqChar("leetcode") << endl; // Expected: 0
    cout << firstUniqChar("loveleetcode") << endl; // Expected: 2
    cout << firstUniqChar("aabb") << endl; // Expected: -1
    return 0;
}`,

            c: `#include <stdio.h>
#include <string.h>

int firstUniqChar(char* s) {
    // Write your solution here
    
}

int main() {
    printf("%d\\n", firstUniqChar("leetcode")); // Expected: 0
    printf("%d\\n", firstUniqChar("loveleetcode")); // Expected: 2
    printf("%d\\n", firstUniqChar("aabb")); // Expected: -1
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int FirstUniqChar(string s) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(FirstUniqChar("leetcode")); // Expected: 0
        Console.WriteLine(FirstUniqChar("loveleetcode")); // Expected: 2
        Console.WriteLine(FirstUniqChar("aabb")); // Expected: -1
    }
}`,

            go: `package main

import "fmt"

func firstUniqChar(s string) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(firstUniqChar("leetcode")) // Expected: 0
    fmt.Println(firstUniqChar("loveleetcode")) // Expected: 2
    fmt.Println(firstUniqChar("aabb")) // Expected: -1
}`,

            rust: `use std::collections::HashMap;

fn first_uniq_char(s: String) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", first_uniq_char("leetcode".to_string())); // Expected: 0
    println!("{}", first_uniq_char("loveleetcode".to_string())); // Expected: 2
    println!("{}", first_uniq_char("aabb".to_string())); // Expected: -1
}`,

            ruby: `def first_uniq_char(s)
    # Write your solution here
    
end

# Test cases
puts first_uniq_char('leetcode') # Expected: 0
puts first_uniq_char('loveleetcode') # Expected: 2
puts first_uniq_char('aabb') # Expected: -1`,

            php: `<?php
function firstUniqChar($s) {
    // Write your solution here
    
}

// Test cases
echo firstUniqChar('leetcode') . "\\n"; // Expected: 0
echo firstUniqChar('loveleetcode') . "\\n"; // Expected: 2
echo firstUniqChar('aabb') . "\\n"; // Expected: -1
?>`,

            swift: `func firstUniqChar(_ s: String) -> Int {
    // Write your solution here
    
}

// Test cases
print(firstUniqChar("leetcode")) // Expected: 0
print(firstUniqChar("loveleetcode")) // Expected: 2
print(firstUniqChar("aabb")) // Expected: -1`,

            kotlin: `fun firstUniqChar(s: String): Int {
    // Write your solution here
    
}

fun main() {
    println(firstUniqChar("leetcode")) // Expected: 0
    println(firstUniqChar("loveleetcode")) // Expected: 2
    println(firstUniqChar("aabb")) // Expected: -1
}`,

            scala: `import scala.collection.mutable

object Solution {
    def firstUniqChar(s: String): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(firstUniqChar("leetcode")) // Expected: 0
        println(firstUniqChar("loveleetcode")) // Expected: 2
        println(firstUniqChar("aabb")) // Expected: -1
    }
}`,

            perl: `sub firstUniqChar {
    my $s = shift;
    # Write your solution here
    
}

# Test cases
print firstUniqChar('leetcode') . "\\n"; # Expected: 0
print firstUniqChar('loveleetcode') . "\\n"; # Expected: 2
print firstUniqChar('aabb') . "\\n"; # Expected: -1`,

            r: `firstUniqChar <- function(s) {
    # Write your solution here
    
}

# Test cases
print(firstUniqChar('leetcode')) # Expected: 0
print(firstUniqChar('loveleetcode')) # Expected: 2
print(firstUniqChar('aabb')) # Expected: -1`
        },
        expectedOutput: {
            javascript: "0\n2\n-1",
            python: "0\n2\n-1",
            java: "0\n2\n-1",
        },
    },

    "roman-to-integer": {
        id: "roman-to-integer",
        title: "Roman to Integer",
        difficulty: "Easy",
        category: "String • Hash Table • Math",
        description: {
            text: "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. Given a roman numeral, convert it to an integer.",
            notes: [
                "Input is guaranteed to be within the range from 1 to 3999.",
                "Roman numerals are usually written largest to smallest from left to right."
            ],
        },
        examples: [
            {
                input: "s = 'III'",
                output: "3",
            },
            {
                input: "s = 'LVIII'",
                output: "58",
                explanation: "L = 50, V = 5, III = 3.",
            },
            {
                input: "s = 'MCMXCIV'",
                output: "1994",
                explanation: "M = 1000, CM = 900, XC = 90, IV = 4.",
            },
        ],
        constraints: [
            "1 ≤ s.length ≤ 15",
            "s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M')",
        ],
        starterCode: {
            javascript: `function romanToInt(s) {
    // Write your solution here
    
}

// Test cases
console.log(romanToInt('III')); // Expected: 3
console.log(romanToInt('LVIII')); // Expected: 58
console.log(romanToInt('MCMXCIV')); // Expected: 1994`,

            typescript: `function romanToInt(s: string): number {
    // Write your solution here
    
}

// Test cases
console.log(romanToInt('III')); // Expected: 3
console.log(romanToInt('LVIII')); // Expected: 58
console.log(romanToInt('MCMXCIV')); // Expected: 1994`,

            python: `def romanToInt(s):
    # Write your solution here
    pass

# Test cases
print(romanToInt('III'))  # Expected: 3
print(romanToInt('LVIII'))  # Expected: 58
print(romanToInt('MCMXCIV'))  # Expected: 1994`,

            java: `import java.util.*;

class Solution {
    public static int romanToInt(String s) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(romanToInt("III")); // Expected: 3
        System.out.println(romanToInt("LVIII")); // Expected: 58
        System.out.println(romanToInt("MCMXCIV")); // Expected: 1994
    }
}`,

            cpp: `#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

int romanToInt(string s) {
    // Write your solution here
    
}

int main() {
    cout << romanToInt("III") << endl; // Expected: 3
    cout << romanToInt("LVIII") << endl; // Expected: 58
    cout << romanToInt("MCMXCIV") << endl; // Expected: 1994
    return 0;
}`,

            c: `#include <stdio.h>
#include <string.h>

int romanToInt(char* s) {
    // Write your solution here
    
}

int main() {
    printf("%d\\n", romanToInt("III")); // Expected: 3
    printf("%d\\n", romanToInt("LVIII")); // Expected: 58
    printf("%d\\n", romanToInt("MCMXCIV")); // Expected: 1994
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int RomanToInt(string s) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(RomanToInt("III")); // Expected: 3
        Console.WriteLine(RomanToInt("LVIII")); // Expected: 58
        Console.WriteLine(RomanToInt("MCMXCIV")); // Expected: 1994
    }
}`,

            go: `package main

import "fmt"

func romanToInt(s string) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(romanToInt("III")) // Expected: 3
    fmt.Println(romanToInt("LVIII")) // Expected: 58
    fmt.Println(romanToInt("MCMXCIV")) // Expected: 1994
}`,

            rust: `use std::collections::HashMap;

fn roman_to_int(s: String) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", roman_to_int("III".to_string())); // Expected: 3
    println!("{}", roman_to_int("LVIII".to_string())); // Expected: 58
    println!("{}", roman_to_int("MCMXCIV".to_string())); // Expected: 1994
}`,

            ruby: `def roman_to_int(s)
    # Write your solution here
    
end

# Test cases
puts roman_to_int('III') # Expected: 3
puts roman_to_int('LVIII') # Expected: 58
puts roman_to_int('MCMXCIV') # Expected: 1994`,

            php: `<?php
function romanToInt($s) {
    // Write your solution here
    
}

// Test cases
echo romanToInt('III') . "\\n"; // Expected: 3
echo romanToInt('LVIII') . "\\n"; // Expected: 58
echo romanToInt('MCMXCIV') . "\\n"; // Expected: 1994
?>`,

            swift: `func romanToInt(_ s: String) -> Int {
    // Write your solution here
    
}

// Test cases
print(romanToInt("III")) // Expected: 3
print(romanToInt("LVIII")) // Expected: 58
print(romanToInt("MCMXCIV")) // Expected: 1994`,

            kotlin: `fun romanToInt(s: String): Int {
    // Write your solution here
    
}

fun main() {
    println(romanToInt("III")) // Expected: 3
    println(romanToInt("LVIII")) // Expected: 58
    println(romanToInt("MCMXCIV")) // Expected: 1994
}`,

            scala: `import scala.collection.mutable

object Solution {
    def romanToInt(s: String): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(romanToInt("III")) // Expected: 3
        println(romanToInt("LVIII")) // Expected: 58
        println(romanToInt("MCMXCIV")) // Expected: 1994
    }
}`,

            perl: `sub romanToInt {
    my $s = shift;
    # Write your solution here
    
}

# Test cases
print romanToInt('III') . "\\n"; # Expected: 3
print romanToInt('LVIII') . "\\n"; # Expected: 58
print romanToInt('MCMXCIV') . "\\n"; # Expected: 1994`,

            r: `romanToInt <- function(s) {
    # Write your solution here
    
}

# Test cases
print(romanToInt('III')) # Expected: 3
print(romanToInt('LVIII')) # Expected: 58
print(romanToInt('MCMXCIV')) # Expected: 1994`
        },
        expectedOutput: {
            javascript: "3\n58\n1994",
            python: "3\n58\n1994",
            java: "3\n58\n1994",
        },
    },

    "integer-to-roman": {
        id: "integer-to-roman",
        title: "Integer to Roman",
        difficulty: "Medium",
        category: "String • Math",
        description: {
            text: "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. Given an integer, convert it to a roman numeral.",
            notes: [
                "Input is guaranteed to be within the range from 1 to 3999.",
                "Convert the integer to the corresponding roman numeral string."
            ],
        },
        examples: [
            {
                input: "num = 3",
                output: "'III'",
            },
            {
                input: "num = 58",
                output: "'LVIII'",
            },
            {
                input: "num = 1994",
                output: "'MCMXCIV'",
            },
        ],
        constraints: [
            "1 ≤ num ≤ 3999",
        ],
        starterCode: {
            javascript: `function intToRoman(num) {
    // Write your solution here
    
}

// Test cases
console.log(intToRoman(3)); // Expected: 'III'
console.log(intToRoman(58)); // Expected: 'LVIII'
console.log(intToRoman(1994)); // Expected: 'MCMXCIV'`,

            typescript: `function intToRoman(num: number): string {
    // Write your solution here
    
}

// Test cases
console.log(intToRoman(3)); // Expected: 'III'
console.log(intToRoman(58)); // Expected: 'LVIII'
console.log(intToRoman(1994)); // Expected: 'MCMXCIV'`,

            python: `def intToRoman(num):
    # Write your solution here
    pass

# Test cases
print(intToRoman(3))  # Expected: 'III'
print(intToRoman(58))  # Expected: 'LVIII'
print(intToRoman(1994))  # Expected: 'MCMXCIV'`,

            java: `class Solution {
    public static String intToRoman(int num) {
        // Write your solution here
        
        return "";
    }
    
    public static void main(String[] args) {
        System.out.println(intToRoman(3)); // Expected: "III"
        System.out.println(intToRoman(58)); // Expected: "LVIII"
        System.out.println(intToRoman(1994)); // Expected: "MCMXCIV"
    }
}`,

            cpp: `#include <iostream>
#include <string>
using namespace std;

string intToRoman(int num) {
    // Write your solution here
    
}

int main() {
    cout << intToRoman(3) << endl; // Expected: "III"
    cout << intToRoman(58) << endl; // Expected: "LVIII"
    cout << intToRoman(1994) << endl; // Expected: "MCMXCIV"
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* intToRoman(int num) {
    // Write your solution here
    
}

int main() {
    char* result1 = intToRoman(3);
    printf("%s\\n", result1); // Expected: "III"
    free(result1);
    
    char* result2 = intToRoman(58);
    printf("%s\\n", result2); // Expected: "LVIII"
    free(result2);
    
    char* result3 = intToRoman(1994);
    printf("%s\\n", result3); // Expected: "MCMXCIV"
    free(result3);
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static string IntToRoman(int num) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(IntToRoman(3)); // Expected: "III"
        Console.WriteLine(IntToRoman(58)); // Expected: "LVIII"
        Console.WriteLine(IntToRoman(1994)); // Expected: "MCMXCIV"
    }
}`,

            go: `package main

import "fmt"

func intToRoman(num int) string {
    // Write your solution here
    
}

func main() {
    fmt.Println(intToRoman(3)) // Expected: "III"
    fmt.Println(intToRoman(58)) // Expected: "LVIII"
    fmt.Println(intToRoman(1994)) // Expected: "MCMXCIV"
}`,

            rust: `fn int_to_roman(num: i32) -> String {
    // Write your solution here
    
}

fn main() {
    println!("{}", int_to_roman(3)); // Expected: "III"
    println!("{}", int_to_roman(58)); // Expected: "LVIII"
    println!("{}", int_to_roman(1994)); // Expected: "MCMXCIV"
}`,

            ruby: `def int_to_roman(num)
    # Write your solution here
    
end

# Test cases
puts int_to_roman(3) # Expected: 'III'
puts int_to_roman(58) # Expected: 'LVIII'
puts int_to_roman(1994) # Expected: 'MCMXCIV'`,

            php: `<?php
function intToRoman($num) {
    // Write your solution here
    
}

// Test cases
echo intToRoman(3) . "\\n"; // Expected: 'III'
echo intToRoman(58) . "\\n"; // Expected: 'LVIII'
echo intToRoman(1994) . "\\n"; // Expected: 'MCMXCIV'
?>`,

            swift: `func intToRoman(_ num: Int) -> String {
    // Write your solution here
    
}

// Test cases
print(intToRoman(3)) // Expected: "III"
print(intToRoman(58)) // Expected: "LVIII"
print(intToRoman(1994)) // Expected: "MCMXCIV"`,

            kotlin: `fun intToRoman(num: Int): String {
    // Write your solution here
    
}

fun main() {
    println(intToRoman(3)) // Expected: "III"
    println(intToRoman(58)) // Expected: "LVIII"
    println(intToRoman(1994)) // Expected: "MCMXCIV"
}`,

            scala: `object Solution {
    def intToRoman(num: Int): String = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(intToRoman(3)) // Expected: "III"
        println(intToRoman(58)) // Expected: "LVIII"
        println(intToRoman(1994)) // Expected: "MCMXCIV"
    }
}`,

            perl: `sub intToRoman {
    my $num = shift;
    # Write your solution here
    
}

# Test cases
print intToRoman(3) . "\\n"; # Expected: 'III'
print intToRoman(58) . "\\n"; # Expected: 'LVIII'
print intToRoman(1994) . "\\n"; # Expected: 'MCMXCIV'`,

            r: `intToRoman <- function(num) {
    # Write your solution here
    
}

# Test cases
print(intToRoman(3)) # Expected: 'III'
print(intToRoman(58)) # Expected: 'LVIII'
print(intToRoman(1994)) # Expected: 'MCMXCIV'`
        },
        expectedOutput: {
            javascript: "III\nLVIII\nMCMXCIV",
            python: "III\nLVIII\nMCMXCIV",
            java: "III\nLVIII\nMCMXCIV",
        },
    },

    "string-to-integer-atoi": {
        id: "string-to-integer-atoi",
        title: "String to Integer (atoi)",
        difficulty: "Medium",
        category: "String • Math",
        description: {
            text: "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).",
            notes: [
                "Read in and ignore any leading whitespace.",
                "Check if the next character is '-' or '+' to determine sign.",
                "Read in digits until non-digit character or end of string.",
                "Clamp the integer to the range [-2³¹, 2³¹-1]."
            ],
        },
        examples: [
            {
                input: "s = '42'",
                output: "42",
            },
            {
                input: "s = '   -42'",
                output: "-42",
            },
            {
                input: "s = '4193 with words'",
                output: "4193",
            },
            {
                input: "s = 'words and 987'",
                output: "0",
            },
            {
                input: "s = '-91283472332'",
                output: "-2147483648",
                explanation: "The number is less than -2³¹, so return -2³¹.",
            },
        ],
        constraints: [
            "0 ≤ s.length ≤ 200",
            "s consists of English letters, digits, spaces, '+', '-', and '.'",
        ],
        starterCode: {
            javascript: `function myAtoi(s) {
    // Write your solution here
    
}

// Test cases
console.log(myAtoi('42')); // Expected: 42
console.log(myAtoi('   -42')); // Expected: -42
console.log(myAtoi('4193 with words')); // Expected: 4193
console.log(myAtoi('words and 987')); // Expected: 0
console.log(myAtoi('-91283472332')); // Expected: -2147483648`,

            typescript: `function myAtoi(s: string): number {
    // Write your solution here
    
}

// Test cases
console.log(myAtoi('42')); // Expected: 42
console.log(myAtoi('   -42')); // Expected: -42
console.log(myAtoi('4193 with words')); // Expected: 4193
console.log(myAtoi('words and 987')); // Expected: 0
console.log(myAtoi('-91283472332')); // Expected: -2147483648`,

            python: `def myAtoi(s):
    # Write your solution here
    pass

# Test cases
print(myAtoi('42'))  # Expected: 42
print(myAtoi('   -42'))  # Expected: -42
print(myAtoi('4193 with words'))  # Expected: 4193
print(myAtoi('words and 987'))  # Expected: 0
print(myAtoi('-91283472332'))  # Expected: -2147483648`,

            java: `class Solution {
    public static int myAtoi(String s) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(myAtoi("42")); // Expected: 42
        System.out.println(myAtoi("   -42")); // Expected: -42
        System.out.println(myAtoi("4193 with words")); // Expected: 4193
        System.out.println(myAtoi("words and 987")); // Expected: 0
        System.out.println(myAtoi("-91283472332")); // Expected: -2147483648
    }
}`,

            cpp: `#include <iostream>
#include <string>
#include <climits>
using namespace std;

int myAtoi(string s) {
    // Write your solution here
    
}

int main() {
    cout << myAtoi("42") << endl; // Expected: 42
    cout << myAtoi("   -42") << endl; // Expected: -42
    cout << myAtoi("4193 with words") << endl; // Expected: 4193
    cout << myAtoi("words and 987") << endl; // Expected: 0
    cout << myAtoi("-91283472332") << endl; // Expected: -2147483648
    return 0;
}`,

            c: `#include <stdio.h>
#include <limits.h>
#include <ctype.h>

int myAtoi(char* s) {
    // Write your solution here
    
}

int main() {
    printf("%d\\n", myAtoi("42")); // Expected: 42
    printf("%d\\n", myAtoi("   -42")); // Expected: -42
    printf("%d\\n", myAtoi("4193 with words")); // Expected: 4193
    printf("%d\\n", myAtoi("words and 987")); // Expected: 0
    printf("%d\\n", myAtoi("-91283472332")); // Expected: -2147483648
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int MyAtoi(string s) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(MyAtoi("42")); // Expected: 42
        Console.WriteLine(MyAtoi("   -42")); // Expected: -42
        Console.WriteLine(MyAtoi("4193 with words")); // Expected: 4193
        Console.WriteLine(MyAtoi("words and 987")); // Expected: 0
        Console.WriteLine(MyAtoi("-91283472332")); // Expected: -2147483648
    }
}`,

            go: `package main

import (
    "fmt"
    "math"
)

func myAtoi(s string) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(myAtoi("42")) // Expected: 42
    fmt.Println(myAtoi("   -42")) // Expected: -42
    fmt.Println(myAtoi("4193 with words")) // Expected: 4193
    fmt.Println(myAtoi("words and 987")) // Expected: 0
    fmt.Println(myAtoi("-91283472332")) // Expected: -2147483648
}`,

            rust: `fn my_atoi(s: String) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", my_atoi("42".to_string())); // Expected: 42
    println!("{}", my_atoi("   -42".to_string())); // Expected: -42
    println!("{}", my_atoi("4193 with words".to_string())); // Expected: 4193
    println!("{}", my_atoi("words and 987".to_string())); // Expected: 0
    println!("{}", my_atoi("-91283472332".to_string())); // Expected: -2147483648
}`,

            ruby: `def my_atoi(s)
    # Write your solution here
    
end

# Test cases
puts my_atoi('42') # Expected: 42
puts my_atoi('   -42') # Expected: -42
puts my_atoi('4193 with words') # Expected: 4193
puts my_atoi('words and 987') # Expected: 0
puts my_atoi('-91283472332') # Expected: -2147483648`,

            php: `<?php
function myAtoi($s) {
    // Write your solution here
    
}

// Test cases
echo myAtoi('42') . "\\n"; // Expected: 42
echo myAtoi('   -42') . "\\n"; // Expected: -42
echo myAtoi('4193 with words') . "\\n"; // Expected: 4193
echo myAtoi('words and 987') . "\\n"; // Expected: 0
echo myAtoi('-91283472332') . "\\n"; // Expected: -2147483648
?>`,

            swift: `func myAtoi(_ s: String) -> Int {
    // Write your solution here
    
}

// Test cases
print(myAtoi("42")) // Expected: 42
print(myAtoi("   -42")) // Expected: -42
print(myAtoi("4193 with words")) // Expected: 4193
print(myAtoi("words and 987")) // Expected: 0
print(myAtoi("-91283472332")) // Expected: -2147483648`,

            kotlin: `fun myAtoi(s: String): Int {
    // Write your solution here
    
}

fun main() {
    println(myAtoi("42")) // Expected: 42
    println(myAtoi("   -42")) // Expected: -42
    println(myAtoi("4193 with words")) // Expected: 4193
    println(myAtoi("words and 987")) // Expected: 0
    println(myAtoi("-91283472332")) // Expected: -2147483648
}`,

            scala: `object Solution {
    def myAtoi(s: String): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(myAtoi("42")) // Expected: 42
        println(myAtoi("   -42")) // Expected: -42
        println(myAtoi("4193 with words")) // Expected: 4193
        println(myAtoi("words and 987")) // Expected: 0
        println(myAtoi("-91283472332")) // Expected: -2147483648
    }
}`,

            perl: `sub myAtoi {
    my $s = shift;
    # Write your solution here
    
}

# Test cases
print myAtoi('42') . "\\n"; # Expected: 42
print myAtoi('   -42') . "\\n"; # Expected: -42
print myAtoi('4193 with words') . "\\n"; # Expected: 4193
print myAtoi('words and 987') . "\\n"; # Expected: 0
print myAtoi('-91283472332') . "\\n"; # Expected: -2147483648`,

            r: `myAtoi <- function(s) {
    # Write your solution here
    
}

# Test cases
print(myAtoi('42')) # Expected: 42
print(myAtoi('   -42')) # Expected: -42
print(myAtoi('4193 with words')) # Expected: 4193
print(myAtoi('words and 987')) # Expected: 0
print(myAtoi('-91283472332')) # Expected: -2147483648`
        },
        expectedOutput: {
            javascript: "42\n-42\n4193\n0\n-2147483648",
            python: "42\n-42\n4193\n0\n-2147483648",
            java: "42\n-42\n4193\n0\n-2147483648",
        },
    },

    "implement-strstr": {
        id: "implement-strstr",
        title: "Implement strStr()",
        difficulty: "Easy",
        category: "String • Two Pointers",
        description: {
            text: "Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
            notes: [
                "Return 0 when needle is an empty string.",
                "This is the same as finding the substring in a string."
            ],
        },
        examples: [
            {
                input: "haystack = 'hello', needle = 'll'",
                output: "2",
            },
            {
                input: "haystack = 'aaaaa', needle = 'bba'",
                output: "-1",
            },
            {
                input: "haystack = '', needle = ''",
                output: "0",
            },
        ],
        constraints: [
            "0 ≤ haystack.length, needle.length ≤ 5 * 10⁴",
            "haystack and needle consist of only lowercase English characters",
        ],
        starterCode: {
            javascript: `function strStr(haystack, needle) {
    // Write your solution here
    
}

// Test cases
console.log(strStr('hello', 'll')); // Expected: 2
console.log(strStr('aaaaa', 'bba')); // Expected: -1
console.log(strStr('', '')); // Expected: 0`,

            typescript: `function strStr(haystack: string, needle: string): number {
    // Write your solution here
    
}

// Test cases
console.log(strStr('hello', 'll')); // Expected: 2
console.log(strStr('aaaaa', 'bba')); // Expected: -1
console.log(strStr('', '')); // Expected: 0`,

            python: `def strStr(haystack, needle):
    # Write your solution here
    pass

# Test cases
print(strStr('hello', 'll'))  # Expected: 2
print(strStr('aaaaa', 'bba'))  # Expected: -1
print(strStr('', ''))  # Expected: 0`,

            java: `class Solution {
    public static int strStr(String haystack, String needle) {
        // Write your solution here
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(strStr("hello", "ll")); // Expected: 2
        System.out.println(strStr("aaaaa", "bba")); // Expected: -1
        System.out.println(strStr("", "")); // Expected: 0
    }
}`,

            cpp: `#include <iostream>
#include <string>
using namespace std;

int strStr(string haystack, string needle) {
    // Write your solution here
    
}

int main() {
    cout << strStr("hello", "ll") << endl; // Expected: 2
    cout << strStr("aaaaa", "bba") << endl; // Expected: -1
    cout << strStr("", "") << endl; // Expected: 0
    return 0;
}`,

            c: `#include <stdio.h>
#include <string.h>

int strStr(char* haystack, char* needle) {
    // Write your solution here
    
}

int main() {
    printf("%d\\n", strStr("hello", "ll")); // Expected: 2
    printf("%d\\n", strStr("aaaaa", "bba")); // Expected: -1
    printf("%d\\n", strStr("", "")); // Expected: 0
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int StrStr(string haystack, string needle) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(StrStr("hello", "ll")); // Expected: 2
        Console.WriteLine(StrStr("aaaaa", "bba")); // Expected: -1
        Console.WriteLine(StrStr("", "")); // Expected: 0
    }
}`,

            go: `package main

import "fmt"
import "strings"

func strStr(haystack string, needle string) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(strStr("hello", "ll")) // Expected: 2
    fmt.Println(strStr("aaaaa", "bba")) // Expected: -1
    fmt.Println(strStr("", "")) // Expected: 0
}`,

            rust: `fn str_str(haystack: String, needle: String) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", str_str("hello".to_string(), "ll".to_string())); // Expected: 2
    println!("{}", str_str("aaaaa".to_string(), "bba".to_string())); // Expected: -1
    println!("{}", str_str("".to_string(), "".to_string())); // Expected: 0
}`,

            ruby: `def str_str(haystack, needle)
    # Write your solution here
    
end

# Test cases
puts str_str('hello', 'll') # Expected: 2
puts str_str('aaaaa', 'bba') # Expected: -1
puts str_str('', '') # Expected: 0`,

            php: `<?php
function strStr($haystack, $needle) {
    // Write your solution here
    
}

// Test cases
echo strStr('hello', 'll') . "\\n"; // Expected: 2
echo strStr('aaaaa', 'bba') . "\\n"; // Expected: -1
echo strStr('', '') . "\\n"; // Expected: 0
?>`,

            swift: `func strStr(_ haystack: String, _ needle: String) -> Int {
    // Write your solution here
    
}

// Test cases
print(strStr("hello", "ll")) // Expected: 2
print(strStr("aaaaa", "bba")) // Expected: -1
print(strStr("", "")) // Expected: 0`,

            kotlin: `fun strStr(haystack: String, needle: String): Int {
    // Write your solution here
    
}

fun main() {
    println(strStr("hello", "ll")) // Expected: 2
    println(strStr("aaaaa", "bba")) // Expected: -1
    println(strStr("", "")) // Expected: 0
}`,

            scala: `object Solution {
    def strStr(haystack: String, needle: String): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(strStr("hello", "ll")) // Expected: 2
        println(strStr("aaaaa", "bba")) // Expected: -1
        println(strStr("", "")) // Expected: 0
    }
}`,

            perl: `sub strStr {
    my ($haystack, $needle) = @_;
    # Write your solution here
    
}

# Test cases
print strStr('hello', 'll') . "\\n"; # Expected: 2
print strStr('aaaaa', 'bba') . "\\n"; # Expected: -1
print strStr('', '') . "\\n"; # Expected: 0`,

            r: `strStr <- function(haystack, needle) {
    # Write your solution here
    
}

# Test cases
print(strStr('hello', 'll')) # Expected: 2
print(strStr('aaaaa', 'bba')) # Expected: -1
print(strStr('', '')) # Expected: 0`
        },
        expectedOutput: {
            javascript: "2\n-1\n0",
            python: "2\n-1\n0",
            java: "2\n-1\n0",
        },
    },

    "longest-common-prefix": {
        id: "longest-common-prefix",
        title: "Longest Common Prefix",
        difficulty: "Easy",
        category: "String • Trie",
        description: {
            text: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string ''.",
            notes: [
                "The common prefix is the string that appears at the beginning of all strings.",
                "Compare characters at the same position across all strings."
            ],
        },
        examples: [
            {
                input: "strs = ['flower','flow','flight']",
                output: "'fl'",
            },
            {
                input: "strs = ['dog','racecar','car']",
                output: "''",
                explanation: "There is no common prefix among the input strings.",
            },
        ],
        constraints: [
            "1 ≤ strs.length ≤ 200",
            "0 ≤ strs[i].length ≤ 200",
            "strs[i] consists of only lowercase English letters",
        ],
        starterCode: {
            javascript: `function longestCommonPrefix(strs) {
    // Write your solution here
    
}

// Test cases
console.log(longestCommonPrefix(['flower','flow','flight'])); // Expected: 'fl'
console.log(longestCommonPrefix(['dog','racecar','car'])); // Expected: ''`,

            typescript: `function longestCommonPrefix(strs: string[]): string {
    // Write your solution here
    
}

// Test cases
console.log(longestCommonPrefix(['flower','flow','flight'])); // Expected: 'fl'
console.log(longestCommonPrefix(['dog','racecar','car'])); // Expected: ''`,

            python: `def longestCommonPrefix(strs):
    # Write your solution here
    pass

# Test cases
print(longestCommonPrefix(['flower','flow','flight']))  # Expected: 'fl'
print(longestCommonPrefix(['dog','racecar','car']))  # Expected: ''`,

            java: `class Solution {
    public static String longestCommonPrefix(String[] strs) {
        // Write your solution here
        
        return "";
    }
    
    public static void main(String[] args) {
        System.out.println(longestCommonPrefix(new String[]{"flower","flow","flight"})); // Expected: "fl"
        System.out.println(longestCommonPrefix(new String[]{"dog","racecar","car"})); // Expected: ""
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

string longestCommonPrefix(vector<string>& strs) {
    // Write your solution here
    
}

int main() {
    vector<string> strs1 = {"flower","flow","flight"};
    cout << longestCommonPrefix(strs1) << endl; // Expected: "fl"
    
    vector<string> strs2 = {"dog","racecar","car"};
    cout << longestCommonPrefix(strs2) << endl; // Expected: ""
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* longestCommonPrefix(char** strs, int strsSize) {
    // Write your solution here
    
}

int main() {
    char* strs1[] = {"flower","flow","flight"};
    char* result1 = longestCommonPrefix(strs1, 3);
    printf("%s\\n", result1); // Expected: "fl"
    free(result1);
    
    char* strs2[] = {"dog","racecar","car"};
    char* result2 = longestCommonPrefix(strs2, 3);
    printf("%s\\n", result2); // Expected: ""
    free(result2);
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static string LongestCommonPrefix(string[] strs) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(LongestCommonPrefix(new string[] {"flower","flow","flight"})); // Expected: "fl"
        Console.WriteLine(LongestCommonPrefix(new string[] {"dog","racecar","car"})); // Expected: ""
    }
}`,

            go: `package main

import "fmt"

func longestCommonPrefix(strs []string) string {
    // Write your solution here
    
}

func main() {
    fmt.Println(longestCommonPrefix([]string{"flower","flow","flight"})) // Expected: "fl"
    fmt.Println(longestCommonPrefix([]string{"dog","racecar","car"})) // Expected: ""
}`,

            rust: `fn longest_common_prefix(strs: Vec<String>) -> String {
    // Write your solution here
    
}

fn main() {
    println!("{}", longest_common_prefix(vec!["flower".to_string(), "flow".to_string(), "flight".to_string()])); // Expected: "fl"
    println!("{}", longest_common_prefix(vec!["dog".to_string(), "racecar".to_string(), "car".to_string()])); // Expected: ""
}`,

            ruby: `def longest_common_prefix(strs)
    # Write your solution here
    
end

# Test cases
puts longest_common_prefix(['flower','flow','flight']) # Expected: 'fl'
puts longest_common_prefix(['dog','racecar','car']) # Expected: ''`,

            php: `<?php
function longestCommonPrefix($strs) {
    // Write your solution here
    
}

// Test cases
echo longestCommonPrefix(['flower','flow','flight']) . "\\n"; // Expected: 'fl'
echo longestCommonPrefix(['dog','racecar','car']) . "\\n"; // Expected: ''
?>`,

            swift: `func longestCommonPrefix(_ strs: [String]) -> String {
    // Write your solution here
    
}

// Test cases
print(longestCommonPrefix(["flower","flow","flight"])) // Expected: "fl"
print(longestCommonPrefix(["dog","racecar","car"])) // Expected: ""`,

            kotlin: `fun longestCommonPrefix(strs: Array<String>): String {
    // Write your solution here
    
}

fun main() {
    println(longestCommonPrefix(arrayOf("flower","flow","flight"))) // Expected: "fl"
    println(longestCommonPrefix(arrayOf("dog","racecar","car"))) // Expected: ""
}`,

            scala: `object Solution {
    def longestCommonPrefix(strs: Array[String]): String = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(longestCommonPrefix(Array("flower","flow","flight"))) // Expected: "fl"
        println(longestCommonPrefix(Array("dog","racecar","car"))) // Expected: ""
    }
}`,

            perl: `sub longestCommonPrefix {
    my $strs = shift;
    # Write your solution here
    
}

# Test cases
print longestCommonPrefix(['flower','flow','flight']) . "\\n"; # Expected: 'fl'
print longestCommonPrefix(['dog','racecar','car']) . "\\n"; # Expected: ''`,

            r: `longestCommonPrefix <- function(strs) {
    # Write your solution here
    
}

# Test cases
print(longestCommonPrefix(c('flower','flow','flight'))) # Expected: 'fl'
print(longestCommonPrefix(c('dog','racecar','car'))) # Expected: ''`
        },
        expectedOutput: {
            javascript: "fl\n",
            python: "fl\n",
            java: "fl\n",
        },
    },

    "valid-sudoku": {
        id: "valid-sudoku",
        title: "Valid Sudoku",
        difficulty: "Medium",
        category: "Array • Hash Table • Matrix",
        description: {
            text: "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules: Each row must contain the digits 1-9 without repetition. Each column must contain the digits 1-9 without repetition. Each of the nine 3 x 3 sub-boxes must contain the digits 1-9 without repetition.",
            notes: [
                "A Sudoku board (partially filled) could be valid but is not necessarily solvable.",
                "Only the filled cells need to be validated according to the mentioned rules."
            ],
        },
        examples: [
            {
                input: "board = \n[['5','3','.','.','7','.','.','.','.'],\n ['6','.','.','1','9','5','.','.','.'],\n ['.','9','8','.','.','.','.','6','.'],\n ['8','.','.','.','6','.','.','.','3'],\n ['4','.','.','8','.','3','.','.','1'],\n ['7','.','.','.','2','.','.','.','6'],\n ['.','6','.','.','.','.','2','8','.'],\n ['.','.','.','4','1','9','.','.','5'],\n ['.','.','.','.','8','.','.','7','9']]",
                output: "true",
            },
            {
                input: "board = \n[['8','3','.','.','7','.','.','.','.'],\n ['6','.','.','1','9','5','.','.','.'],\n ['.','9','8','.','.','.','.','6','.'],\n ['8','.','.','.','6','.','.','.','3'],\n ['4','.','.','8','.','3','.','.','1'],\n ['7','.','.','.','2','.','.','.','6'],\n ['.','6','.','.','.','.','2','8','.'],\n ['.','.','.','4','1','9','.','.','5'],\n ['.','.','.','.','8','.','.','7','9']]",
                output: "false",
                explanation: "Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.",
            },
        ],
        constraints: [
            "board.length == 9",
            "board[i].length == 9",
            "board[i][j] is a digit 1-9 or '.'",
        ],
        starterCode: {
            javascript: `function isValidSudoku(board) {
    // Write your solution here
    
}

// Test cases
let board1 = [
    ['5','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
];
console.log(isValidSudoku(board1)); // Expected: true

let board2 = [
    ['8','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
];
console.log(isValidSudoku(board2)); // Expected: false`,

            typescript: `function isValidSudoku(board: string[][]): boolean {
    // Write your solution here
    
}

// Test cases
let board1: string[][] = [
    ['5','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
];
console.log(isValidSudoku(board1)); // Expected: true

let board2: string[][] = [
    ['8','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
];
console.log(isValidSudoku(board2)); // Expected: false`,

            python: `def isValidSudoku(board):
    # Write your solution here
    pass

# Test cases
board1 = [
    ['5','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
]
print(isValidSudoku(board1))  # Expected: True

board2 = [
    ['8','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
]
print(isValidSudoku(board2))  # Expected: False`,

            java: `import java.util.*;

class Solution {
    public static boolean isValidSudoku(char[][] board) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        char[][] board1 = {
            {'5','3','.','.','7','.','.','.','.'},
            {'6','.','.','1','9','5','.','.','.'},
            {'.','9','8','.','.','.','.','6','.'},
            {'8','.','.','.','6','.','.','.','3'},
            {'4','.','.','8','.','3','.','.','1'},
            {'7','.','.','.','2','.','.','.','6'},
            {'.','6','.','.','.','.','2','8','.'},
            {'.','.','.','4','1','9','.','.','5'},
            {'.','.','.','.','8','.','.','7','9'}
        };
        System.out.println(isValidSudoku(board1)); // Expected: true

        char[][] board2 = {
            {'8','3','.','.','7','.','.','.','.'},
            {'6','.','.','1','9','5','.','.','.'},
            {'.','9','8','.','.','.','.','6','.'},
            {'8','.','.','.','6','.','.','.','3'},
            {'4','.','.','8','.','3','.','.','1'},
            {'7','.','.','.','2','.','.','.','6'},
            {'.','6','.','.','.','.','2','8','.'},
            {'.','.','.','4','1','9','.','.','5'},
            {'.','.','.','.','8','.','.','7','9'}
        };
        System.out.println(isValidSudoku(board2)); // Expected: false
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

bool isValidSudoku(vector<vector<char>>& board) {
    // Write your solution here
    
}

int main() {
    vector<vector<char>> board1 = {
        {'5','3','.','.','7','.','.','.','.'},
        {'6','.','.','1','9','5','.','.','.'},
        {'.','9','8','.','.','.','.','6','.'},
        {'8','.','.','.','6','.','.','.','3'},
        {'4','.','.','8','.','3','.','.','1'},
        {'7','.','.','.','2','.','.','.','6'},
        {'.','6','.','.','.','.','2','8','.'},
        {'.','.','.','4','1','9','.','.','5'},
        {'.','.','.','.','8','.','.','7','9'}
    };
    cout << boolalpha;
    cout << isValidSudoku(board1) << endl; // Expected: true
    
    vector<vector<char>> board2 = {
        {'8','3','.','.','7','.','.','.','.'},
        {'6','.','.','1','9','5','.','.','.'},
        {'.','9','8','.','.','.','.','6','.'},
        {'8','.','.','.','6','.','.','.','3'},
        {'4','.','.','8','.','3','.','.','1'},
        {'7','.','.','.','2','.','.','.','6'},
        {'.','6','.','.','.','.','2','8','.'},
        {'.','.','.','4','1','9','.','.','5'},
        {'.','.','.','.','8','.','.','7','9'}
    };
    cout << isValidSudoku(board2) << endl; // Expected: false
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdbool.h>

bool isValidSudoku(char** board, int boardSize, int* boardColSize) {
    // Write your solution here
    
}

int main() {
    char* board1_data[] = {
        "53..7....",
        "6..195...",
        ".98....6.",
        "8...6...3",
        "4..8.3..1",
        "7...2...6",
        ".6....28.",
        "...419..5",
        "....8..79"
    };
    char** board1 = (char**)malloc(9 * sizeof(char*));
    int boardColSize1[] = {9,9,9,9,9,9,9,9,9};
    for (int i = 0; i < 9; i++) {
        board1[i] = (char*)malloc(10 * sizeof(char));
        sprintf(board1[i], "%s", board1_data[i]);
    }
    printf("%d\\n", isValidSudoku(board1, 9, boardColSize1)); // Expected: 1 (true)
    
    char* board2_data[] = {
        "83..7....",
        "6..195...",
        ".98....6.",
        "8...6...3",
        "4..8.3..1",
        "7...2...6",
        ".6....28.",
        "...419..5",
        "....8..79"
    };
    char** board2 = (char**)malloc(9 * sizeof(char*));
    for (int i = 0; i < 9; i++) {
        board2[i] = (char*)malloc(10 * sizeof(char));
        sprintf(board2[i], "%s", board2_data[i]);
    }
    printf("%d\\n", isValidSudoku(board2, 9, boardColSize1)); // Expected: 0 (false)
    
    for (int i = 0; i < 9; i++) {
        free(board1[i]);
        free(board2[i]);
    }
    free(board1);
    free(board2);
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static bool IsValidSudoku(char[][] board) {
        // Write your solution here
        
    }
    
    static void Main() {
        char[][] board1 = new char[][] {
            new char[] {'5','3','.','.','7','.','.','.','.'},
            new char[] {'6','.','.','1','9','5','.','.','.'},
            new char[] {'.','9','8','.','.','.','.','6','.'},
            new char[] {'8','.','.','.','6','.','.','.','3'},
            new char[] {'4','.','.','8','.','3','.','.','1'},
            new char[] {'7','.','.','.','2','.','.','.','6'},
            new char[] {'.','6','.','.','.','.','2','8','.'},
            new char[] {'.','.','.','4','1','9','.','.','5'},
            new char[] {'.','.','.','.','8','.','.','7','9'}
        };
        Console.WriteLine(IsValidSudoku(board1)); // Expected: True
        
        char[][] board2 = new char[][] {
            new char[] {'8','3','.','.','7','.','.','.','.'},
            new char[] {'6','.','.','1','9','5','.','.','.'},
            new char[] {'.','9','8','.','.','.','.','6','.'},
            new char[] {'8','.','.','.','6','.','.','.','3'},
            new char[] {'4','.','.','8','.','3','.','.','1'},
            new char[] {'7','.','.','.','2','.','.','.','6'},
            new char[] {'.','6','.','.','.','.','2','8','.'},
            new char[] {'.','.','.','4','1','9','.','.','5'},
            new char[] {'.','.','.','.','8','.','.','7','9'}
        };
        Console.WriteLine(IsValidSudoku(board2)); // Expected: False
    }
}`,

            go: `package main

import "fmt"

func isValidSudoku(board [][]byte) bool {
    // Write your solution here
    
}

func main() {
    board1 := [][]byte{
        {'5','3','.','.','7','.','.','.','.'},
        {'6','.','.','1','9','5','.','.','.'},
        {'.','9','8','.','.','.','.','6','.'},
        {'8','.','.','.','6','.','.','.','3'},
        {'4','.','.','8','.','3','.','.','1'},
        {'7','.','.','.','2','.','.','.','6'},
        {'.','6','.','.','.','.','2','8','.'},
        {'.','.','.','4','1','9','.','.','5'},
        {'.','.','.','.','8','.','.','7','9'},
    }
    fmt.Println(isValidSudoku(board1)) // Expected: true
    
    board2 := [][]byte{
        {'8','3','.','.','7','.','.','.','.'},
        {'6','.','.','1','9','5','.','.','.'},
        {'.','9','8','.','.','.','.','6','.'},
        {'8','.','.','.','6','.','.','.','3'},
        {'4','.','.','8','.','3','.','.','1'},
        {'7','.','.','.','2','.','.','.','6'},
        {'.','6','.','.','.','.','2','8','.'},
        {'.','.','.','4','1','9','.','.','5'},
        {'.','.','.','.','8','.','.','7','9'},
    }
    fmt.Println(isValidSudoku(board2)) // Expected: false
}`,

            rust: `use std::collections::HashSet;

fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
    // Write your solution here
    
}

fn main() {
    let board1 = vec![
        vec!['5','3','.','.','7','.','.','.','.'],
        vec!['6','.','.','1','9','5','.','.','.'],
        vec!['.','9','8','.','.','.','.','6','.'],
        vec!['8','.','.','.','6','.','.','.','3'],
        vec!['4','.','.','8','.','3','.','.','1'],
        vec!['7','.','.','.','2','.','.','.','6'],
        vec!['.','6','.','.','.','.','2','8','.'],
        vec!['.','.','.','4','1','9','.','.','5'],
        vec!['.','.','.','.','8','.','.','7','9'],
    ];
    println!("{}", is_valid_sudoku(board1)); // Expected: true
    
    let board2 = vec![
        vec!['8','3','.','.','7','.','.','.','.'],
        vec!['6','.','.','1','9','5','.','.','.'],
        vec!['.','9','8','.','.','.','.','6','.'],
        vec!['8','.','.','.','6','.','.','.','3'],
        vec!['4','.','.','8','.','3','.','.','1'],
        vec!['7','.','.','.','2','.','.','.','6'],
        vec!['.','6','.','.','.','.','2','8','.'],
        vec!['.','.','.','4','1','9','.','.','5'],
        vec!['.','.','.','.','8','.','.','7','9'],
    ];
    println!("{}", is_valid_sudoku(board2)); // Expected: false
}`,

            ruby: `def is_valid_sudoku(board)
    # Write your solution here
    
end

# Test cases
board1 = [
    ['5','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
]
puts is_valid_sudoku(board1) # Expected: true

board2 = [
    ['8','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
]
puts is_valid_sudoku(board2) # Expected: false`,

            php: `<?php
function isValidSudoku($board) {
    // Write your solution here
    
}

// Test cases
$board1 = [
    ['5','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
];
echo var_export(isValidSudoku($board1), true) . "\\n"; // Expected: true

$board2 = [
    ['8','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
];
echo var_export(isValidSudoku($board2), true) . "\\n"; // Expected: false
?>`,

            swift: `func isValidSudoku(_ board: [[Character]]) -> Bool {
    // Write your solution here
    
}

// Test cases
let board1: [[Character]] = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]
print(isValidSudoku(board1)) // Expected: true

let board2: [[Character]] = [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]
print(isValidSudoku(board2)) // Expected: false`,

            kotlin: `fun isValidSudoku(board: Array<CharArray>): Boolean {
    // Write your solution here
    
}

fun main() {
    val board1 = arrayOf(
        charArrayOf('5','3','.','.','7','.','.','.','.'),
        charArrayOf('6','.','.','1','9','5','.','.','.'),
        charArrayOf('.','9','8','.','.','.','.','6','.'),
        charArrayOf('8','.','.','.','6','.','.','.','3'),
        charArrayOf('4','.','.','8','.','3','.','.','1'),
        charArrayOf('7','.','.','.','2','.','.','.','6'),
        charArrayOf('.','6','.','.','.','.','2','8','.'),
        charArrayOf('.','.','.','4','1','9','.','.','5'),
        charArrayOf('.','.','.','.','8','.','.','7','9')
    )
    println(isValidSudoku(board1)) // Expected: true
    
    val board2 = arrayOf(
        charArrayOf('8','3','.','.','7','.','.','.','.'),
        charArrayOf('6','.','.','1','9','5','.','.','.'),
        charArrayOf('.','9','8','.','.','.','.','6','.'),
        charArrayOf('8','.','.','.','6','.','.','.','3'),
        charArrayOf('4','.','.','8','.','3','.','.','1'),
        charArrayOf('7','.','.','.','2','.','.','.','6'),
        charArrayOf('.','6','.','.','.','.','2','8','.'),
        charArrayOf('.','.','.','4','1','9','.','.','5'),
        charArrayOf('.','.','.','.','8','.','.','7','9')
    )
    println(isValidSudoku(board2)) // Expected: false
}`,

            scala: `import scala.collection.mutable

object Solution {
    def isValidSudoku(board: Array[Array[Char]]): Boolean = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        val board1 = Array(
            Array('5','3','.','.','7','.','.','.','.'),
            Array('6','.','.','1','9','5','.','.','.'),
            Array('.','9','8','.','.','.','.','6','.'),
            Array('8','.','.','.','6','.','.','.','3'),
            Array('4','.','.','8','.','3','.','.','1'),
            Array('7','.','.','.','2','.','.','.','6'),
            Array('.','6','.','.','.','.','2','8','.'),
            Array('.','.','.','4','1','9','.','.','5'),
            Array('.','.','.','.','8','.','.','7','9')
        )
        println(isValidSudoku(board1)) // Expected: true
        
        val board2 = Array(
            Array('8','3','.','.','7','.','.','.','.'),
            Array('6','.','.','1','9','5','.','.','.'),
            Array('.','9','8','.','.','.','.','6','.'),
            Array('8','.','.','.','6','.','.','.','3'),
            Array('4','.','.','8','.','3','.','.','1'),
            Array('7','.','.','.','2','.','.','.','6'),
            Array('.','6','.','.','.','.','2','8','.'),
            Array('.','.','.','4','1','9','.','.','5'),
            Array('.','.','.','.','8','.','.','7','9')
        )
        println(isValidSudoku(board2)) // Expected: false
    }
}`,

            perl: `sub isValidSudoku {
    my $board = shift;
    # Write your solution here
    
}

# Test cases
my $board1 = [
    ['5','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
];
print isValidSudoku($board1) ? "true\\n" : "false\\n"; # Expected: true

my $board2 = [
    ['8','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
];
print isValidSudoku($board2) ? "true\\n" : "false\\n"; # Expected: false`,

            r: `isValidSudoku <- function(board) {
    # Write your solution here
    
}

# Test cases
board1 <- list(
    c('5','3','.','.','7','.','.','.','.'),
    c('6','.','.','1','9','5','.','.','.'),
    c('.','9','8','.','.','.','.','6','.'),
    c('8','.','.','.','6','.','.','.','3'),
    c('4','.','.','8','.','3','.','.','1'),
    c('7','.','.','.','2','.','.','.','6'),
    c('.','6','.','.','.','.','2','8','.'),
    c('.','.','.','4','1','9','.','.','5'),
    c('.','.','.','.','8','.','.','7','9')
)
print(isValidSudoku(board1)) # Expected: TRUE

board2 <- list(
    c('8','3','.','.','7','.','.','.','.'),
    c('6','.','.','1','9','5','.','.','.'),
    c('.','9','8','.','.','.','.','6','.'),
    c('8','.','.','.','6','.','.','.','3'),
    c('4','.','.','8','.','3','.','.','1'),
    c('7','.','.','.','2','.','.','.','6'),
    c('.','6','.','.','.','.','2','8','.'),
    c('.','.','.','4','1','9','.','.','5'),
    c('.','.','.','.','8','.','.','7','9')
)
print(isValidSudoku(board2)) # Expected: FALSE`
        },
        expectedOutput: {
            javascript: "true\nfalse",
            python: "True\nFalse",
            java: "true\nfalse",
        },
    },

    "plus-one": {
        id: "plus-one",
        title: "Plus One",
        difficulty: "Easy",
        category: "Array • Math",
        description: {
            text: "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant. Increment the large integer by one and return the resulting array of digits.",
            notes: [
                "The digits are ordered from most significant to least significant.",
                "Handle carry-over when digits become 10."
            ],
        },
        examples: [
            {
                input: "digits = [1,2,3]",
                output: "[1,2,4]",
                explanation: "The array represents the integer 123. Incrementing by one gives 124.",
            },
            {
                input: "digits = [4,3,2,1]",
                output: "[4,3,2,2]",
            },
            {
                input: "digits = [9]",
                output: "[1,0]",
                explanation: "The array represents the integer 9. Incrementing by one gives 10.",
            },
        ],
        constraints: [
            "1 ≤ digits.length ≤ 100",
            "0 ≤ digits[i] ≤ 9",
            "digits does not contain any leading 0's except for the number 0 itself",
        ],
        starterCode: {
            javascript: `function plusOne(digits) {
    // Write your solution here
    
}

// Test cases
console.log(plusOne([1,2,3])); // Expected: [1,2,4]
console.log(plusOne([4,3,2,1])); // Expected: [4,3,2,2]
console.log(plusOne([9])); // Expected: [1,0]`,

            typescript: `function plusOne(digits: number[]): number[] {
    // Write your solution here
    
}

// Test cases
console.log(plusOne([1,2,3])); // Expected: [1,2,4]
console.log(plusOne([4,3,2,1])); // Expected: [4,3,2,2]
console.log(plusOne([9])); // Expected: [1,0]`,

            python: `def plusOne(digits):
    # Write your solution here
    pass

# Test cases
print(plusOne([1,2,3]))  # Expected: [1,2,4]
print(plusOne([4,3,2,1]))  # Expected: [4,3,2,2]
print(plusOne([9]))  # Expected: [1,0]`,

            java: `import java.util.*;

class Solution {
    public static int[] plusOne(int[] digits) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(plusOne(new int[]{1,2,3}))); // Expected: [1,2,4]
        System.out.println(Arrays.toString(plusOne(new int[]{4,3,2,1}))); // Expected: [4,3,2,2]
        System.out.println(Arrays.toString(plusOne(new int[]{9}))); // Expected: [1,0]
    }
}`,

            cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> plusOne(vector<int>& digits) {
    // Write your solution here
    
}

int main() {
    vector<int> digits1 = {1,2,3};
    vector<int> result1 = plusOne(digits1);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << result1[i];
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: [1,2,4]
    
    vector<int> digits2 = {4,3,2,1};
    vector<int> result2 = plusOne(digits2);
    cout << "[";
    for (size_t i = 0; i < result2.size(); i++) {
        cout << result2[i];
        if (i < result2.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: [4,3,2,2]
    
    vector<int> digits3 = {9};
    vector<int> result3 = plusOne(digits3);
    cout << "[";
    for (size_t i = 0; i < result3.size(); i++) {
        cout << result3[i];
        if (i < result3.size() - 1) cout << ",";
    }
    cout << "]" << endl; // Expected: [1,0]
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int* plusOne(int* digits, int digitsSize, int* returnSize) {
    // Write your solution here
    
}

int main() {
    int digits1[] = {1,2,3};
    int returnSize1;
    int* result1 = plusOne(digits1, 3, &returnSize1);
    printf("[");
    for (int i = 0; i < returnSize1; i++) {
        printf("%d", result1[i]);
        if (i < returnSize1 - 1) printf(",");
    }
    printf("]\\n");
    free(result1);
    
    int digits2[] = {4,3,2,1};
    int returnSize2;
    int* result2 = plusOne(digits2, 4, &returnSize2);
    printf("[");
    for (int i = 0; i < returnSize2; i++) {
        printf("%d", result2[i]);
        if (i < returnSize2 - 1) printf(",");
    }
    printf("]\\n");
    free(result2);
    
    int digits3[] = {9};
    int returnSize3;
    int* result3 = plusOne(digits3, 1, &returnSize3);
    printf("[");
    for (int i = 0; i < returnSize3; i++) {
        printf("%d", result3[i]);
        if (i < returnSize3 - 1) printf(",");
    }
    printf("]\\n");
    free(result3);
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int[] PlusOne(int[] digits) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine($"[{string.Join(",", PlusOne(new int[] {1,2,3}))}]"); // Expected: [1,2,4]
        Console.WriteLine($"[{string.Join(",", PlusOne(new int[] {4,3,2,1}))}]"); // Expected: [4,3,2,2]
        Console.WriteLine($"[{string.Join(",", PlusOne(new int[] {9}))}]"); // Expected: [1,0]
    }
}`,

            go: `package main

import "fmt"

func plusOne(digits []int) []int {
    // Write your solution here
    
}

func main() {
    fmt.Println(plusOne([]int{1,2,3})) // Expected: [1 2 4]
    fmt.Println(plusOne([]int{4,3,2,1})) // Expected: [4 3 2 2]
    fmt.Println(plusOne([]int{9})) // Expected: [1 0]
}`,

            rust: `fn plus_one(digits: Vec<i32>) -> Vec<i32> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", plus_one(vec![1,2,3])); // Expected: [1,2,4]
    println!("{:?}", plus_one(vec![4,3,2,1])); // Expected: [4,3,2,2]
    println!("{:?}", plus_one(vec![9])); // Expected: [1,0]
}`,

            ruby: `def plus_one(digits)
    # Write your solution here
    
end

# Test cases
puts plus_one([1,2,3]).inspect # Expected: [1,2,4]
puts plus_one([4,3,2,1]).inspect # Expected: [4,3,2,2]
puts plus_one([9]).inspect # Expected: [1,0]`,

            php: `<?php
function plusOne($digits) {
    // Write your solution here
    
}

// Test cases
print_r(plusOne([1,2,3])); // Expected: [1,2,4]
print_r(plusOne([4,3,2,1])); // Expected: [4,3,2,2]
print_r(plusOne([9])); // Expected: [1,0]
?>`,

            swift: `func plusOne(_ digits: [Int]) -> [Int] {
    // Write your solution here
    
}

// Test cases
print(plusOne([1,2,3])) // Expected: [1,2,4]
print(plusOne([4,3,2,1])) // Expected: [4,3,2,2]
print(plusOne([9])) // Expected: [1,0]`,

            kotlin: `fun plusOne(digits: IntArray): IntArray {
    // Write your solution here
    
}

fun main() {
    println(plusOne(intArrayOf(1,2,3)).joinToString()) // Expected: 1,2,4
    println(plusOne(intArrayOf(4,3,2,1)).joinToString()) // Expected: 4,3,2,2
    println(plusOne(intArrayOf(9)).joinToString()) // Expected: 1,0
}`,

            scala: `object Solution {
    def plusOne(digits: Array[Int]): Array[Int] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(plusOne(Array(1,2,3)).mkString(",")) // Expected: 1,2,4
        println(plusOne(Array(4,3,2,1)).mkString(",")) // Expected: 4,3,2,2
        println(plusOne(Array(9)).mkString(",")) // Expected: 1,0
    }
}`,

            perl: `sub plusOne {
    my $digits = shift;
    # Write your solution here
    
}

# Test cases
my @result1 = @{plusOne([1,2,3])};
print "[" . join(",", @result1) . "]\\n"; # Expected: [1,2,4]

my @result2 = @{plusOne([4,3,2,1])};
print "[" . join(",", @result2) . "]\\n"; # Expected: [4,3,2,2]

my @result3 = @{plusOne([9])};
print "[" . join(",", @result3) . "]\\n"; # Expected: [1,0]`,

            r: `plusOne <- function(digits) {
    # Write your solution here
    
}

# Test cases
print(plusOne(c(1,2,3))) # Expected: 1 2 4
print(plusOne(c(4,3,2,1))) # Expected: 4 3 2 2
print(plusOne(c(9))) # Expected: 1 0`
        },
        expectedOutput: {
            javascript: "[1,2,4]\n[4,3,2,2]\n[1,0]",
            python: "[1, 2, 4]\n[4, 3, 2, 2]\n[1, 0]",
            java: "[1, 2, 4]\n[4, 3, 2, 2]\n[1, 0]",
        },
    },

    "add-binary": {
        id: "add-binary",
        title: "Add Binary",
        difficulty: "Easy",
        category: "String • Math",
        description: {
            text: "Given two binary strings a and b, return their sum as a binary string.",
            notes: [
                "The input strings are non-empty and contain only characters '0' or '1'.",
                "Handle the addition with carry similar to decimal addition."
            ],
        },
        examples: [
            {
                input: "a = '11', b = '1'",
                output: "'100'",
            },
            {
                input: "a = '1010', b = '1011'",
                output: "'10101'",
            },
        ],
        constraints: [
            "1 ≤ a.length, b.length ≤ 10⁴",
            "a and b consist only of '0' or '1' characters",
            "Each string does not contain leading zeros except for the zero itself",
        ],
        starterCode: {
            javascript: `function addBinary(a, b) {
    // Write your solution here
    
}

// Test cases
console.log(addBinary('11', '1')); // Expected: '100'
console.log(addBinary('1010', '1011')); // Expected: '10101'`,

            typescript: `function addBinary(a: string, b: string): string {
    // Write your solution here
    
}

// Test cases
console.log(addBinary('11', '1')); // Expected: '100'
console.log(addBinary('1010', '1011')); // Expected: '10101'`,

            python: `def addBinary(a, b):
    # Write your solution here
    pass

# Test cases
print(addBinary('11', '1'))  # Expected: '100'
print(addBinary('1010', '1011'))  # Expected: '10101'`,

            java: `class Solution {
    public static String addBinary(String a, String b) {
        // Write your solution here
        
        return "";
    }
    
    public static void main(String[] args) {
        System.out.println(addBinary("11", "1")); // Expected: "100"
        System.out.println(addBinary("1010", "1011")); // Expected: "10101"
    }
}`,

            cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string addBinary(string a, string b) {
    // Write your solution here
    
}

int main() {
    cout << addBinary("11", "1") << endl; // Expected: "100"
    cout << addBinary("1010", "1011") << endl; // Expected: "10101"
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* addBinary(char* a, char* b) {
    // Write your solution here
    
}

int main() {
    char* result1 = addBinary("11", "1");
    printf("%s\\n", result1); // Expected: "100"
    free(result1);
    
    char* result2 = addBinary("1010", "1011");
    printf("%s\\n", result2); // Expected: "10101"
    free(result2);
    
    return 0;
}`,

            csharp: `using System;
using System.Text;

class Solution {
    public static string AddBinary(string a, string b) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(AddBinary("11", "1")); // Expected: "100"
        Console.WriteLine(AddBinary("1010", "1011")); // Expected: "10101"
    }
}`,

            go: `package main

import (
    "fmt"
    "strconv"
)

func addBinary(a string, b string) string {
    // Write your solution here
    
}

func main() {
    fmt.Println(addBinary("11", "1")) // Expected: "100"
    fmt.Println(addBinary("1010", "1011")) // Expected: "10101"
}`,

            rust: `fn add_binary(a: String, b: String) -> String {
    // Write your solution here
    
}

fn main() {
    println!("{}", add_binary("11".to_string(), "1".to_string())); // Expected: "100"
    println!("{}", add_binary("1010".to_string(), "1011".to_string())); // Expected: "10101"
}`,

            ruby: `def add_binary(a, b)
    # Write your solution here
    
end

# Test cases
puts add_binary('11', '1') # Expected: '100'
puts add_binary('1010', '1011') # Expected: '10101'`,

            php: `<?php
function addBinary($a, $b) {
    // Write your solution here
    
}

// Test cases
echo addBinary('11', '1') . "\\n"; // Expected: '100'
echo addBinary('1010', '1011') . "\\n"; // Expected: '10101'
?>`,

            swift: `func addBinary(_ a: String, _ b: String) -> String {
    // Write your solution here
    
}

// Test cases
print(addBinary("11", "1")) // Expected: "100"
print(addBinary("1010", "1011")) // Expected: "10101"`,

            kotlin: `fun addBinary(a: String, b: String): String {
    // Write your solution here
    
}

fun main() {
    println(addBinary("11", "1")) // Expected: "100"
    println(addBinary("1010", "1011")) // Expected: "10101"
}`,

            scala: `object Solution {
    def addBinary(a: String, b: String): String = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(addBinary("11", "1")) // Expected: "100"
        println(addBinary("1010", "1011")) // Expected: "10101"
    }
}`,

            perl: `sub addBinary {
    my ($a, $b) = @_;
    # Write your solution here
    
}

# Test cases
print addBinary('11', '1') . "\\n"; # Expected: '100'
print addBinary('1010', '1011') . "\\n"; # Expected: '10101'`,

            r: `addBinary <- function(a, b) {
    # Write your solution here
    
}

# Test cases
print(addBinary('11', '1')) # Expected: '100'
print(addBinary('1010', '1011')) # Expected: '10101'`
        },
        expectedOutput: {
            javascript: "100\n10101",
            python: "100\n10101",
            java: "100\n10101",
        },
    },

    "sqrtx": {
        id: "sqrtx",
        title: "Sqrt(x)",
        difficulty: "Easy",
        category: "Math • Binary Search",
        description: {
            text: "Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.",
            notes: [
                "You must not use any built-in exponent function or operator.",
                "Use binary search to find the square root."
            ],
        },
        examples: [
            {
                input: "x = 4",
                output: "2",
            },
            {
                input: "x = 8",
                output: "2",
                explanation: "The square root of 8 is 2.82842..., and since we round it down, return 2.",
            },
        ],
        constraints: [
            "0 ≤ x ≤ 2³¹ - 1",
        ],
        starterCode: {
            javascript: `function mySqrt(x) {
    // Write your solution here
    
}

// Test cases
console.log(mySqrt(4)); // Expected: 2
console.log(mySqrt(8)); // Expected: 2`,

            typescript: `function mySqrt(x: number): number {
    // Write your solution here
    
}

// Test cases
console.log(mySqrt(4)); // Expected: 2
console.log(mySqrt(8)); // Expected: 2`,

            python: `def mySqrt(x):
    # Write your solution here
    pass

# Test cases
print(mySqrt(4))  # Expected: 2
print(mySqrt(8))  # Expected: 2`,

            java: `class Solution {
    public static int mySqrt(int x) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(mySqrt(4)); // Expected: 2
        System.out.println(mySqrt(8)); // Expected: 2
    }
}`,

            cpp: `#include <iostream>
using namespace std;

int mySqrt(int x) {
    // Write your solution here
    
}

int main() {
    cout << mySqrt(4) << endl; // Expected: 2
    cout << mySqrt(8) << endl; // Expected: 2
    return 0;
}`,

            c: `#include <stdio.h>

int mySqrt(int x) {
    // Write your solution here
    
}

int main() {
    printf("%d\\n", mySqrt(4)); // Expected: 2
    printf("%d\\n", mySqrt(8)); // Expected: 2
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int MySqrt(int x) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(MySqrt(4)); // Expected: 2
        Console.WriteLine(MySqrt(8)); // Expected: 2
    }
}`,

            go: `package main

import "fmt"

func mySqrt(x int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(mySqrt(4)) // Expected: 2
    fmt.Println(mySqrt(8)) // Expected: 2
}`,

            rust: `fn my_sqrt(x: i32) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", my_sqrt(4)); // Expected: 2
    println!("{}", my_sqrt(8)); // Expected: 2
}`,

            ruby: `def my_sqrt(x)
    # Write your solution here
    
end

# Test cases
puts my_sqrt(4) # Expected: 2
puts my_sqrt(8) # Expected: 2`,

            php: `<?php
function mySqrt($x) {
    // Write your solution here
    
}

// Test cases
echo mySqrt(4) . "\\n"; // Expected: 2
echo mySqrt(8) . "\\n"; // Expected: 2
?>`,

            swift: `func mySqrt(_ x: Int) -> Int {
    // Write your solution here
    
}

// Test cases
print(mySqrt(4)) // Expected: 2
print(mySqrt(8)) // Expected: 2`,

            kotlin: `fun mySqrt(x: Int): Int {
    // Write your solution here
    
}

fun main() {
    println(mySqrt(4)) // Expected: 2
    println(mySqrt(8)) // Expected: 2
}`,

            scala: `object Solution {
    def mySqrt(x: Int): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(mySqrt(4)) // Expected: 2
        println(mySqrt(8)) // Expected: 2
    }
}`,

            perl: `sub mySqrt {
    my $x = shift;
    # Write your solution here
    
}

# Test cases
print mySqrt(4) . "\\n"; # Expected: 2
print mySqrt(8) . "\\n"; # Expected: 2`,

            r: `mySqrt <- function(x) {
    # Write your solution here
    
}

# Test cases
print(mySqrt(4)) # Expected: 2
print(mySqrt(8)) # Expected: 2`
        },
        expectedOutput: {
            javascript: "2\n2",
            python: "2\n2",
            java: "2\n2",
        },
    },

    "powx-n": {
        id: "powx-n",
        title: "Pow(x, n)",
        difficulty: "Medium",
        category: "Math • Recursion",
        description: {
            text: "Implement pow(x, n), which calculates x raised to the power n (i.e., xⁿ).",
            notes: [
                "Handle negative exponents.",
                "Use divide and conquer approach for efficiency."
            ],
        },
        examples: [
            {
                input: "x = 2.00000, n = 10",
                output: "1024.00000",
            },
            {
                input: "x = 2.10000, n = 3",
                output: "9.26100",
            },
            {
                input: "x = 2.00000, n = -2",
                output: "0.25000",
                explanation: "2⁻² = 1/2² = 1/4 = 0.25",
            },
        ],
        constraints: [
            "-100.0 < x < 100.0",
            "-2³¹ ≤ n ≤ 2³¹-1",
            "n is a 32-bit signed integer",
            "-10⁴ ≤ xⁿ ≤ 10⁴",
        ],
        starterCode: {
            javascript: `function myPow(x, n) {
    // Write your solution here
    
}

// Test cases
console.log(myPow(2.00000, 10)); // Expected: 1024.00000
console.log(myPow(2.10000, 3)); // Expected: 9.26100
console.log(myPow(2.00000, -2)); // Expected: 0.25000`,

            typescript: `function myPow(x: number, n: number): number {
    // Write your solution here
    
}

// Test cases
console.log(myPow(2.00000, 10)); // Expected: 1024.00000
console.log(myPow(2.10000, 3)); // Expected: 9.26100
console.log(myPow(2.00000, -2)); // Expected: 0.25000`,

            python: `def myPow(x, n):
    # Write your solution here
    pass

# Test cases
print(myPow(2.00000, 10))  # Expected: 1024.00000
print(myPow(2.10000, 3))  # Expected: 9.26100
print(myPow(2.00000, -2))  # Expected: 0.25000`,

            java: `class Solution {
    public static double myPow(double x, int n) {
        // Write your solution here
        
        return 0.0;
    }
    
    public static void main(String[] args) {
        System.out.println(myPow(2.00000, 10)); // Expected: 1024.00000
        System.out.println(myPow(2.10000, 3)); // Expected: 9.26100
        System.out.println(myPow(2.00000, -2)); // Expected: 0.25000
    }
}`,

            cpp: `#include <iostream>
using namespace std;

double myPow(double x, int n) {
    // Write your solution here
    
}

int main() {
    cout << myPow(2.00000, 10) << endl; // Expected: 1024.00000
    cout << myPow(2.10000, 3) << endl; // Expected: 9.26100
    cout << myPow(2.00000, -2) << endl; // Expected: 0.25000
    return 0;
}`,

            c: `#include <stdio.h>

double myPow(double x, int n) {
    // Write your solution here
    
}

int main() {
    printf("%.5f\\n", myPow(2.00000, 10)); // Expected: 1024.00000
    printf("%.5f\\n", myPow(2.10000, 3)); // Expected: 9.26100
    printf("%.5f\\n", myPow(2.00000, -2)); // Expected: 0.25000
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static double MyPow(double x, int n) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(MyPow(2.00000, 10)); // Expected: 1024.00000
        Console.WriteLine(MyPow(2.10000, 3)); // Expected: 9.26100
        Console.WriteLine(MyPow(2.00000, -2)); // Expected: 0.25000
    }
}`,

            go: `package main

import "fmt"

func myPow(x float64, n int) float64 {
    // Write your solution here
    
}

func main() {
    fmt.Printf("%.5f\\n", myPow(2.00000, 10)) // Expected: 1024.00000
    fmt.Printf("%.5f\\n", myPow(2.10000, 3)) // Expected: 9.26100
    fmt.Printf("%.5f\\n", myPow(2.00000, -2)) // Expected: 0.25000
}`,

            rust: `fn my_pow(x: f64, n: i32) -> f64 {
    // Write your solution here
    
}

fn main() {
    println!("{:.5}", my_pow(2.00000, 10)); // Expected: 1024.00000
    println!("{:.5}", my_pow(2.10000, 3)); // Expected: 9.26100
    println!("{:.5}", my_pow(2.00000, -2)); // Expected: 0.25000
}`,

            ruby: `def my_pow(x, n)
    # Write your solution here
    
end

# Test cases
puts my_pow(2.00000, 10) # Expected: 1024.00000
puts my_pow(2.10000, 3) # Expected: 9.26100
puts my_pow(2.00000, -2) # Expected: 0.25000`,

            php: `<?php
function myPow($x, $n) {
    // Write your solution here
    
}

// Test cases
echo myPow(2.00000, 10) . "\\n"; // Expected: 1024.00000
echo myPow(2.10000, 3) . "\\n"; // Expected: 9.26100
echo myPow(2.00000, -2) . "\\n"; // Expected: 0.25000
?>`,

            swift: `func myPow(_ x: Double, _ n: Int) -> Double {
    // Write your solution here
    
}

// Test cases
print(String(format: "%.5f", myPow(2.00000, 10))) // Expected: 1024.00000
print(String(format: "%.5f", myPow(2.10000, 3))) // Expected: 9.26100
print(String(format: "%.5f", myPow(2.00000, -2))) // Expected: 0.25000`,

            kotlin: `fun myPow(x: Double, n: Int): Double {
    // Write your solution here
    
}

fun main() {
    println(myPow(2.00000, 10)) // Expected: 1024.00000
    println(myPow(2.10000, 3)) // Expected: 9.26100
    println(myPow(2.00000, -2)) // Expected: 0.25000
}`,

            scala: `object Solution {
    def myPow(x: Double, n: Int): Double = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(myPow(2.00000, 10)) // Expected: 1024.00000
        println(myPow(2.10000, 3)) // Expected: 9.26100
        println(myPow(2.00000, -2)) // Expected: 0.25000
    }
}`,

            perl: `sub myPow {
    my ($x, $n) = @_;
    # Write your solution here
    
}

# Test cases
printf("%.5f\\n", myPow(2.00000, 10)); # Expected: 1024.00000
printf("%.5f\\n", myPow(2.10000, 3)); # Expected: 9.26100
printf("%.5f\\n", myPow(2.00000, -2)); # Expected: 0.25000`,

            r: `myPow <- function(x, n) {
    # Write your solution here
    
}

# Test cases
print(myPow(2.00000, 10)) # Expected: 1024.00000
print(myPow(2.10000, 3)) # Expected: 9.26100
print(myPow(2.00000, -2)) # Expected: 0.25000`
        },
        expectedOutput: {
            javascript: "1024.00000\n9.26100\n0.25000",
            python: "1024.0\n9.261\n0.25",
            java: "1024.0\n9.261\n0.25",
        },
    },

    "maximum-depth-of-binary-tree": {
        id: "maximum-depth-of-binary-tree",
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        category: "Tree • DFS • BFS",
        description: {
            text: "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
            notes: [
                "The depth of a binary tree is the number of nodes on the longest path.",
                "An empty tree has depth 0."
            ],
        },
        examples: [
            {
                input: "root = [3,9,20,null,null,15,7]",
                output: "3",
            },
            {
                input: "root = [1,null,2]",
                output: "2",
            },
        ],
        constraints: [
            "The number of nodes in the tree is in the range [0, 10⁴]",
            "-100 ≤ Node.val ≤ 100",
        ],
        starterCode: {
            javascript: `function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

function maxDepth(root) {
    // Write your solution here
    
}

// Helper function to create tree from array
function createTree(arr) {
    if (!arr.length) return null;
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        let node = queue.shift();
        if (arr[i] !== null && arr[i] !== undefined) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

// Test cases
let tree1 = createTree([3,9,20,null,null,15,7]);
console.log(maxDepth(tree1)); // Expected: 3

let tree2 = createTree([1,null,2]);
console.log(maxDepth(tree2)); // Expected: 2`,

            typescript: `class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}

function maxDepth(root: TreeNode | null): number {
    // Write your solution here
    
}

// Helper function to create tree from array
function createTree(arr: (number | null)[]): TreeNode | null {
    if (!arr.length) return null;
    let root = new TreeNode(arr[0] as number);
    let queue: (TreeNode | null)[] = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        let node = queue.shift();
        if (node) {
            if (arr[i] !== null && arr[i] !== undefined) {
                node.left = new TreeNode(arr[i] as number);
                queue.push(node.left);
            }
            i++;
            if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
                node.right = new TreeNode(arr[i] as number);
                queue.push(node.right);
            }
            i++;
        }
    }
    return root;
}

// Test cases
let tree1 = createTree([3,9,20,null,null,15,7]);
console.log(maxDepth(tree1)); // Expected: 3

let tree2 = createTree([1,null,2]);
console.log(maxDepth(tree2)); // Expected: 2`,

            python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def maxDepth(root):
    # Write your solution here
    pass

# Helper function to create tree from list
def createTree(arr):
    if not arr:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if arr[i] is not None:
            node.left = TreeNode(arr[i])
            queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i])
            queue.append(node.right)
        i += 1
    return root

# Test cases
tree1 = createTree([3,9,20,None,None,15,7])
print(maxDepth(tree1))  # Expected: 3

tree2 = createTree([1,None,2])
print(maxDepth(tree2))  # Expected: 2`,

            java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static int maxDepth(TreeNode root) {
        // Write your solution here
        
        return 0;
    }
    
    // Helper function to create tree from array
    public static TreeNode createTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int i = 1;
        while (!queue.isEmpty() && i < arr.length) {
            TreeNode node = queue.poll();
            if (i < arr.length && arr[i] != null) {
                node.left = new TreeNode(arr[i]);
                queue.offer(node.left);
            }
            i++;
            if (i < arr.length && arr[i] != null) {
                node.right = new TreeNode(arr[i]);
                queue.offer(node.right);
            }
            i++;
        }
        return root;
    }
    
    public static void main(String[] args) {
        TreeNode tree1 = createTree(new Integer[]{3,9,20,null,null,15,7});
        System.out.println(maxDepth(tree1)); // Expected: 3
        
        TreeNode tree2 = createTree(new Integer[]{1,null,2});
        System.out.println(maxDepth(tree2)); // Expected: 2
    }
}`,

            cpp: `#include <iostream>
#include <queue>
#include <vector>
#include <algorithm>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

int maxDepth(TreeNode* root) {
    // Write your solution here
    
}

// Helper function to create tree from vector (using -1 for null)
TreeNode* createTree(vector<int> arr) {
    if (arr.empty() || arr[0] == -1) return nullptr;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q;
    q.push(root);
    int i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* node = q.front();
        q.pop();
        if (i < arr.size() && arr[i] != -1) {
            node->left = new TreeNode(arr[i]);
            q.push(node->left);
        }
        i++;
        if (i < arr.size() && arr[i] != -1) {
            node->right = new TreeNode(arr[i]);
            q.push(node->right);
        }
        i++;
    }
    return root;
}

int main() {
    vector<int> arr1 = {3,9,20,-1,-1,15,7};
    TreeNode* tree1 = createTree(arr1);
    cout << maxDepth(tree1) << endl; // Expected: 3
    
    vector<int> arr2 = {1,-1,2};
    TreeNode* tree2 = createTree(arr2);
    cout << maxDepth(tree2) << endl; // Expected: 2
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

int maxDepth(struct TreeNode* root) {
    // Write your solution here
    
}

int main() {
    // For C, manual tree construction required
    // Function signature provided
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static int MaxDepth(TreeNode root) {
        // Write your solution here
        
    }
    
    // Helper function to create tree from nullable int array
    public static TreeNode CreateTree(int?[] arr) {
        if (arr.Length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0].Value);
        Queue<TreeNode> queue = new Queue<TreeNode>();
        queue.Enqueue(root);
        int i = 1;
        while (queue.Count > 0 && i < arr.Length) {
            TreeNode node = queue.Dequeue();
            if (i < arr.Length && arr[i] != null) {
                node.left = new TreeNode(arr[i].Value);
                queue.Enqueue(node.left);
            }
            i++;
            if (i < arr.Length && arr[i] != null) {
                node.right = new TreeNode(arr[i].Value);
                queue.Enqueue(node.right);
            }
            i++;
        }
        return root;
    }
    
    static void Main() {
        TreeNode tree1 = CreateTree(new int?[] {3,9,20,null,null,15,7});
        Console.WriteLine(MaxDepth(tree1)); // Expected: 3
        
        TreeNode tree2 = CreateTree(new int?[] {1,null,2});
        Console.WriteLine(MaxDepth(tree2)); // Expected: 2
    }
}`,

            go: `package main

import "fmt"

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

func maxDepth(root *TreeNode) int {
    // Write your solution here
    
}

func main() {
    // For Go, test cases would need manual tree construction
    // Function signature provided
}`,

            rust: `use std::rc::Rc;
use std::cell::RefCell;

#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

fn max_depth(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    // Write your solution here
    
}

fn main() {
    // For Rust, test cases would need manual tree construction
    // Function signature provided
}`,

            ruby: `class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val = 0, left = nil, right = nil)
        @val = val
        @left = left
        @right = right
    end
end

def max_depth(root)
    # Write your solution here
    
end

# Test cases would need manual tree construction
# Function signature provided`,

            php: `<?php
class TreeNode {
    public $val = null;
    public $left = null;
    public $right = null;
    function __construct($val = 0, $left = null, $right = null) {
        $this->val = $val;
        $this->left = $left;
        $this->right = $right;
    }
}

function maxDepth($root) {
    // Write your solution here
    
}

// Test cases would need manual tree construction
?>`,

            swift: `public class TreeNode {
    public var val: Int
    public var left: TreeNode?
    public var right: TreeNode?
    public init() { self.val = 0; self.left = nil; self.right = nil; }
    public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
    public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
        self.val = val
        self.left = left
        self.right = right
    }
}

func maxDepth(_ root: TreeNode?) -> Int {
    // Write your solution here
    
}

// Test cases would need manual tree construction`,

            kotlin: `class TreeNode(var \`val\`: Int) {
    var left: TreeNode? = null
    var right: TreeNode? = null
}

fun maxDepth(root: TreeNode?): Int {
    // Write your solution here
    
}

// Helper function to create tree from array
fun createTree(arr: Array<Int?>): TreeNode? {
    if (arr.isEmpty() || arr[0] == null) return null
    val root = TreeNode(arr[0]!!)
    val queue = ArrayDeque<TreeNode>()
    queue.addLast(root)
    var i = 1
    while (queue.isNotEmpty() && i < arr.size) {
        val node = queue.removeFirst()
        if (i < arr.size && arr[i] != null) {
            node.left = TreeNode(arr[i]!!)
            queue.addLast(node.left!!)
        }
        i++
        if (i < arr.size && arr[i] != null) {
            node.right = TreeNode(arr[i]!!)
            queue.addLast(node.right!!)
        }
        i++
    }
    return root
}

fun main() {
    val tree1 = createTree(arrayOf(3,9,20,null,null,15,7))
    println(maxDepth(tree1)) // Expected: 3
    
    val tree2 = createTree(arrayOf(1,null,2))
    println(maxDepth(tree2)) // Expected: 2
}`,

            scala: `import scala.collection.mutable

class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
    var value: Int = _value
    var left: TreeNode = _left
    var right: TreeNode = _right
}

object Solution {
    def maxDepth(root: TreeNode): Int = {
        // Write your solution here
        
    }
}`,

            perl: `package TreeNode;
sub new {
    my ($class, $val, $left, $right) = @_;
    my $self = {
        val => $val // 0,
        left => $left // undef,
        right => $right // undef
    };
    bless $self, $class;
    return $self;
}

sub maxDepth {
    my $root = shift;
    # Write your solution here
    
}

# Test cases would need manual tree construction`,

            r: `TreeNode <- setRefClass("TreeNode",
    fields = list(val = "numeric", left = "ANY", right = "ANY"),
    methods = list(
        initialize = function(val = 0, left = NULL, right = NULL) {
            .self$val <- val
            .self$left <- left
            .self$right <- right
        }
    )
)

maxDepth <- function(root) {
    # Write your solution here
    
}

# Test cases would need manual tree construction`
        },
        expectedOutput: {
            javascript: "3\n2",
            python: "3\n2",
            java: "3\n2",
        },
    },

    "same-tree": {
        id: "same-tree",
        title: "Same Tree",
        difficulty: "Easy",
        category: "Tree • DFS • BFS",
        description: {
            text: "Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.",
            notes: [
                "Both trees must have the same structure and node values.",
                "Empty trees are considered the same."
            ],
        },
        examples: [
            {
                input: "p = [1,2,3], q = [1,2,3]",
                output: "true",
            },
            {
                input: "p = [1,2], q = [1,null,2]",
                output: "false",
            },
            {
                input: "p = [1,2,1], q = [1,1,2]",
                output: "false",
            },
        ],
        constraints: [
            "The number of nodes in both trees is in the range [0, 100]",
            "-10⁴ ≤ Node.val ≤ 10⁴",
        ],
        starterCode: {
            javascript: `function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

function isSameTree(p, q) {
    // Write your solution here
    
}

// Helper function to create tree from array
function createTree(arr) {
    if (!arr.length) return null;
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        let node = queue.shift();
        if (arr[i] !== null && arr[i] !== undefined) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

// Test cases
let p1 = createTree([1,2,3]);
let q1 = createTree([1,2,3]);
console.log(isSameTree(p1, q1)); // Expected: true

let p2 = createTree([1,2]);
let q2 = createTree([1,null,2]);
console.log(isSameTree(p2, q2)); // Expected: false

let p3 = createTree([1,2,1]);
let q3 = createTree([1,1,2]);
console.log(isSameTree(p3, q3)); // Expected: false`,

            typescript: `class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // Write your solution here
    
}

// Helper function to create tree from array
function createTree(arr: (number | null)[]): TreeNode | null {
    if (!arr.length) return null;
    let root = new TreeNode(arr[0] as number);
    let queue: (TreeNode | null)[] = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        let node = queue.shift();
        if (node) {
            if (arr[i] !== null && arr[i] !== undefined) {
                node.left = new TreeNode(arr[i] as number);
                queue.push(node.left);
            }
            i++;
            if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
                node.right = new TreeNode(arr[i] as number);
                queue.push(node.right);
            }
            i++;
        }
    }
    return root;
}

// Test cases
let p1 = createTree([1,2,3]);
let q1 = createTree([1,2,3]);
console.log(isSameTree(p1, q1)); // Expected: true

let p2 = createTree([1,2]);
let q2 = createTree([1,null,2]);
console.log(isSameTree(p2, q2)); // Expected: false

let p3 = createTree([1,2,1]);
let q3 = createTree([1,1,2]);
console.log(isSameTree(p3, q3)); // Expected: false`,

            python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isSameTree(p, q):
    # Write your solution here
    pass

# Helper function to create tree from list
def createTree(arr):
    if not arr:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if arr[i] is not None:
            node.left = TreeNode(arr[i])
            queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i])
            queue.append(node.right)
        i += 1
    return root

# Test cases
p1 = createTree([1,2,3])
q1 = createTree([1,2,3])
print(isSameTree(p1, q1))  # Expected: True

p2 = createTree([1,2])
q2 = createTree([1,None,2])
print(isSameTree(p2, q2))  # Expected: False

p3 = createTree([1,2,1])
q3 = createTree([1,1,2])
print(isSameTree(p3, q3))  # Expected: False`,

            java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static boolean isSameTree(TreeNode p, TreeNode q) {
        // Write your solution here
        
        return false;
    }
    
    // Helper function to create tree from array
    public static TreeNode createTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int i = 1;
        while (!queue.isEmpty() && i < arr.length) {
            TreeNode node = queue.poll();
            if (i < arr.length && arr[i] != null) {
                node.left = new TreeNode(arr[i]);
                queue.offer(node.left);
            }
            i++;
            if (i < arr.length && arr[i] != null) {
                node.right = new TreeNode(arr[i]);
                queue.offer(node.right);
            }
            i++;
        }
        return root;
    }
    
    public static void main(String[] args) {
        TreeNode p1 = createTree(new Integer[]{1,2,3});
        TreeNode q1 = createTree(new Integer[]{1,2,3});
        System.out.println(isSameTree(p1, q1)); // Expected: true
        
        TreeNode p2 = createTree(new Integer[]{1,2});
        TreeNode q2 = createTree(new Integer[]{1,null,2});
        System.out.println(isSameTree(p2, q2)); // Expected: false
        
        TreeNode p3 = createTree(new Integer[]{1,2,1});
        TreeNode q3 = createTree(new Integer[]{1,1,2});
        System.out.println(isSameTree(p3, q3)); // Expected: false
    }
}`,

            cpp: `#include <iostream>
#include <queue>
#include <vector>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

bool isSameTree(TreeNode* p, TreeNode* q) {
    // Write your solution here
    
}

// Helper function to create tree from vector (using -1 for null)
TreeNode* createTree(vector<int> arr) {
    if (arr.empty() || arr[0] == -1) return nullptr;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q;
    q.push(root);
    int i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* node = q.front();
        q.pop();
        if (i < arr.size() && arr[i] != -1) {
            node->left = new TreeNode(arr[i]);
            q.push(node->left);
        }
        i++;
        if (i < arr.size() && arr[i] != -1) {
            node->right = new TreeNode(arr[i]);
            q.push(node->right);
        }
        i++;
    }
    return root;
}

int main() {
    vector<int> arr1 = {1,2,3};
    TreeNode* p1 = createTree(arr1);
    TreeNode* q1 = createTree(arr1);
    cout << boolalpha;
    cout << isSameTree(p1, q1) << endl; // Expected: true
    
    vector<int> arr2 = {1,2,-1};
    vector<int> arr3 = {1,-1,2};
    TreeNode* p2 = createTree(arr2);
    TreeNode* q2 = createTree(arr3);
    cout << isSameTree(p2, q2) << endl; // Expected: false
    
    vector<int> arr4 = {1,2,1};
    vector<int> arr5 = {1,1,2};
    TreeNode* p3 = createTree(arr4);
    TreeNode* q3 = createTree(arr5);
    cout << isSameTree(p3, q3) << endl; // Expected: false
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

bool isSameTree(struct TreeNode* p, struct TreeNode* q) {
    // Write your solution here
    
}

int main() {
    // For C, manual tree construction required
    // Function signature provided
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static bool IsSameTree(TreeNode p, TreeNode q) {
        // Write your solution here
        
    }
    
    // Helper function to create tree from nullable int array
    public static TreeNode CreateTree(int?[] arr) {
        if (arr.Length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0].Value);
        Queue<TreeNode> queue = new Queue<TreeNode>();
        queue.Enqueue(root);
        int i = 1;
        while (queue.Count > 0 && i < arr.Length) {
            TreeNode node = queue.Dequeue();
            if (i < arr.Length && arr[i] != null) {
                node.left = new TreeNode(arr[i].Value);
                queue.Enqueue(node.left);
            }
            i++;
            if (i < arr.Length && arr[i] != null) {
                node.right = new TreeNode(arr[i].Value);
                queue.Enqueue(node.right);
            }
            i++;
        }
        return root;
    }
    
    static void Main() {
        TreeNode p1 = CreateTree(new int?[] {1,2,3});
        TreeNode q1 = CreateTree(new int?[] {1,2,3});
        Console.WriteLine(IsSameTree(p1, q1)); // Expected: True
        
        TreeNode p2 = CreateTree(new int?[] {1,2});
        TreeNode q2 = CreateTree(new int?[] {1,null,2});
        Console.WriteLine(IsSameTree(p2, q2)); // Expected: False
        
        TreeNode p3 = CreateTree(new int?[] {1,2,1});
        TreeNode q3 = CreateTree(new int?[] {1,1,2});
        Console.WriteLine(IsSameTree(p3, q3)); // Expected: False
    }
}`,

            go: `package main

import "fmt"

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

func isSameTree(p *TreeNode, q *TreeNode) bool {
    // Write your solution here
    
}

func main() {
    // For Go, test cases would need manual tree construction
    // Function signature provided
}`,

            rust: `use std::rc::Rc;
use std::cell::RefCell;

#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

fn is_same_tree(p: Option<Rc<RefCell<TreeNode>>>, q: Option<Rc<RefCell<TreeNode>>>) -> bool {
    // Write your solution here
    
}

fn main() {
    // For Rust, test cases would need manual tree construction
    // Function signature provided
}`,

            ruby: `class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val = 0, left = nil, right = nil)
        @val = val
        @left = left
        @right = right
    end
end

def is_same_tree(p, q)
    # Write your solution here
    
end

# Test cases would need manual tree construction
# Function signature provided`,

            php: `<?php
class TreeNode {
    public $val = null;
    public $left = null;
    public $right = null;
    function __construct($val = 0, $left = null, $right = null) {
        $this->val = $val;
        $this->left = $left;
        $this->right = $right;
    }
}

function isSameTree($p, $q) {
    // Write your solution here
    
}

// Test cases would need manual tree construction
?>`,

            swift: `public class TreeNode {
    public var val: Int
    public var left: TreeNode?
    public var right: TreeNode?
    public init() { self.val = 0; self.left = nil; self.right = nil; }
    public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
    public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
        self.val = val
        self.left = left
        self.right = right
    }
}

func isSameTree(_ p: TreeNode?, _ q: TreeNode?) -> Bool {
    // Write your solution here
    
}

// Test cases would need manual tree construction`,

            kotlin: `class TreeNode(var \`val\`: Int) {
    var left: TreeNode? = null
    var right: TreeNode? = null
}

fun isSameTree(p: TreeNode?, q: TreeNode?): Boolean {
    // Write your solution here
    
}

// Helper function to create tree from array
fun createTree(arr: Array<Int?>): TreeNode? {
    if (arr.isEmpty() || arr[0] == null) return null
    val root = TreeNode(arr[0]!!)
    val queue = ArrayDeque<TreeNode>()
    queue.addLast(root)
    var i = 1
    while (queue.isNotEmpty() && i < arr.size) {
        val node = queue.removeFirst()
        if (i < arr.size && arr[i] != null) {
            node.left = TreeNode(arr[i]!!)
            queue.addLast(node.left!!)
        }
        i++
        if (i < arr.size && arr[i] != null) {
            node.right = TreeNode(arr[i]!!)
            queue.addLast(node.right!!)
        }
        i++
    }
    return root
}

fun main() {
    val p1 = createTree(arrayOf(1,2,3))
    val q1 = createTree(arrayOf(1,2,3))
    println(isSameTree(p1, q1)) // Expected: true
    
    val p2 = createTree(arrayOf(1,2))
    val q2 = createTree(arrayOf(1,null,2))
    println(isSameTree(p2, q2)) // Expected: false
    
    val p3 = createTree(arrayOf(1,2,1))
    val q3 = createTree(arrayOf(1,1,2))
    println(isSameTree(p3, q3)) // Expected: false
}`,

            scala: `import scala.collection.mutable

class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
    var value: Int = _value
    var left: TreeNode = _left
    var right: TreeNode = _right
}

object Solution {
    def isSameTree(p: TreeNode, q: TreeNode): Boolean = {
        // Write your solution here
        
    }
}`,

            perl: `package TreeNode;
sub new {
    my ($class, $val, $left, $right) = @_;
    my $self = {
        val => $val // 0,
        left => $left // undef,
        right => $right // undef
    };
    bless $self, $class;
    return $self;
}

sub isSameTree {
    my ($p, $q) = @_;
    # Write your solution here
    
}

# Test cases would need manual tree construction`,

            r: `TreeNode <- setRefClass("TreeNode",
    fields = list(val = "numeric", left = "ANY", right = "ANY"),
    methods = list(
        initialize = function(val = 0, left = NULL, right = NULL) {
            .self$val <- val
            .self$left <- left
            .self$right <- right
        }
    )
)

isSameTree <- function(p, q) {
    # Write your solution here
    
}

# Test cases would need manual tree construction`
        },
        expectedOutput: {
            javascript: "true\nfalse\nfalse",
            python: "True\nFalse\nFalse",
            java: "true\nfalse\nfalse",
        },
    },

    "invert-binary-tree": {
        id: "invert-binary-tree",
        title: "Invert Binary Tree",
        difficulty: "Easy",
        category: "Tree • DFS • BFS",
        description: {
            text: "Given the root of a binary tree, invert the tree, and return its root.",
            notes: [
                "Inverting a binary tree means swapping the left and right children of all nodes.",
                "This problem is famously known as the 'Google: 90% of our engineers use this problem' meme."
            ],
        },
        examples: [
            {
                input: "root = [4,2,7,1,3,6,9]",
                output: "[4,7,2,9,6,3,1]",
            },
            {
                input: "root = [2,1,3]",
                output: "[2,3,1]",
            },
            {
                input: "root = []",
                output: "[]",
            },
        ],
        constraints: [
            "The number of nodes in the tree is in the range [0, 100]",
            "-100 ≤ Node.val ≤ 100",
        ],
        starterCode: {
            javascript: `function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function invertTree(root) {
    // Write your solution here
    
    }

    // Helper function to create tree from array
    function createTree(arr) {
        if (!arr.length) return null;
        let root = new TreeNode(arr[0]);
        let queue = [root];
        let i = 1;
        while (queue.length && i < arr.length) {
            let node = queue.shift();
            if (arr[i] !== null) {
                node.left = new TreeNode(arr[i]);
                queue.push(node.left);
            }
            i++;
            if (i < arr.length && arr[i] !== null) {
                node.right = new TreeNode(arr[i]);
                queue.push(node.right);
            }
            i++;
        }
        return root;
    }

    // Helper function to convert tree to array (level order)
    function treeToArray(root) {
        if (!root) return [];
        let result = [];
        let queue = [root];
        while (queue.length) {
            let node = queue.shift();
            result.push(node ? node.val : null);
            if (node) {
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        // Remove trailing nulls
        while (result[result.length-1] === null) {
            result.pop();
        }
        return result;
    }

    // Test cases
    let tree1 = createTree([4,2,7,1,3,6,9]);
    console.log(treeToArray(invertTree(tree1))); // Expected: [4,7,2,9,6,3,1]

    let tree2 = createTree([2,1,3]);
    console.log(treeToArray(invertTree(tree2))); // Expected: [2,3,1]

    let tree3 = createTree([]);
    console.log(treeToArray(invertTree(tree3))); // Expected: []`,
            python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def invertTree(root):
    # Write your solution here
    pass

# Helper function to create tree from list
def createTree(arr):
    if not arr:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if arr[i] is not None:
            node.left = TreeNode(arr[i])
            queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i])
            queue.append(node.right)
        i += 1
    return root

# Helper function to convert tree to list (level order)
def treeToList(root):
    if not root:
        return []
    result = []
    queue = [root]
    while queue:
        node = queue.pop(0)
        result.append(node.val if node else None)
        if node:
            queue.append(node.left)
            queue.append(node.right)
    # Remove trailing None values
    while result and result[-1] is None:
        result.pop()
    return result

# Test cases
tree1 = createTree([4,2,7,1,3,6,9])
print(treeToList(invertTree(tree1)))  # Expected: [4,7,2,9,6,3,1]

tree2 = createTree([2,1,3])
print(treeToList(invertTree(tree2)))  # Expected: [2,3,1]

tree3 = createTree([])
print(treeToList(invertTree(tree3)))  # Expected: []`,
            java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static TreeNode invertTree(TreeNode root) {
        // Write your solution here
        
        return null;
    }
    
    // Helper function to create tree from array
    public static TreeNode createTree(Integer[] arr) {
        if (arr.length == 0) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int i = 1;
        while (!queue.isEmpty() && i < arr.length) {
            TreeNode node = queue.poll();
            if (arr[i] != null) {
                node.left = new TreeNode(arr[i]);
                queue.offer(node.left);
            }
            i++;
            if (i < arr.length && arr[i] != null) {
                node.right = new TreeNode(arr[i]);
                queue.offer(node.right);
            }
            i++;
        }
        return root;
    }
    
    // Helper function to convert tree to list (level order)
    public static List<Integer> treeToList(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root == null) return result;
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            result.add(node != null ? node.val : null);
            if (node != null) {
                queue.offer(node.left);
                queue.offer(node.right);
            }
        }
        
        // Remove trailing nulls
        while (result.size() > 0 && result.get(result.size() - 1) == null) {
            result.remove(result.size() - 1);
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        TreeNode tree1 = createTree(new Integer[]{4,2,7,1,3,6,9});
        System.out.println(treeToList(invertTree(tree1))); // Expected: [4,7,2,9,6,3,1]
        
        TreeNode tree2 = createTree(new Integer[]{2,1,3});
        System.out.println(treeToList(invertTree(tree2))); // Expected: [2,3,1]
        
        TreeNode tree3 = createTree(new Integer[]{});
        System.out.println(treeToList(invertTree(tree3))); // Expected: []
    }
}`,
        },
        expectedOutput: {
            javascript: "[0,1]\n[1,2]\n[0,1]",
            typescript: "[0,1]\n[1,2]\n[0,1]",
            python: "[0, 1]\n[1, 2]\n[0, 1]",
            java: "[0, 1]\n[1, 2]\n[0, 1]",
            cpp: "[0,1]\n[1,2]\n[0,1]",
            c: "[0,1]\n[1,2]\n[0,1]",
            csharp: "0,1\n1,2\n0,1",
            go: "[0 1]\n[1 2]\n[0 1]",
            rust: "[0, 1]\n[1, 2]\n[0, 1]",
            ruby: "[0, 1]\n[1, 2]\n[0, 1]",
            php: "Array\n(\n    [0] => 0\n    [1] => 1\n)\nArray\n(\n    [0] => 1\n    [1] => 2\n)\nArray\n(\n    [0] => 0\n    [1] => 1\n)",
            swift: "[0, 1]\n[1, 2]\n[0, 1]",
            kotlin: "0,1\n1,2\n0,1",
            scala: "0,1\n1,2\n0,1",
            perl: "$VAR1 = [\n          0,\n          1\n        ];\n$VAR1 = [\n          1,\n          2\n        ];\n$VAR1 = [\n          0,\n          1\n        ];",
            r: "0 1\n1 2\n0 1"
        }
    },

    "trapping-rain-water": {
        id: "trapping-rain-water",
        title: "Trapping Rain Water",
        difficulty: "Hard",
        category: "Array • Two Pointers • Dynamic Programming • Stack",
        description: {
            text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
            notes: [
                "The elevation map is represented by array height of length n.",
                "Water can be trapped between bars if there are higher bars on both sides."
            ],
        },
        examples: [
            {
                input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
                output: "6",
                explanation: "The elevation map traps 6 units of rainwater.",
            },
            {
                input: "height = [4,2,0,3,2,5]",
                output: "9",
            },
        ],
        constraints: [
            "n == height.length",
            "1 ≤ n ≤ 2 * 10⁴",
            "0 ≤ height[i] ≤ 10⁵",
        ],
        starterCode: {
            javascript: `function trap(height) {
    // Write your solution here
    
}

// Test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
console.log(trap([4,2,0,3,2,5])); // Expected: 9`,

            typescript: `function trap(height: number[]): number {
    // Write your solution here
    
}

// Test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
console.log(trap([4,2,0,3,2,5])); // Expected: 9`,

            python: `def trap(height):
    # Write your solution here
    pass

# Test cases
print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # Expected: 6
print(trap([4,2,0,3,2,5]))  # Expected: 9`,

            java: `class Solution {
    public static int trap(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1})); // Expected: 6
        System.out.println(trap(new int[]{4,2,0,3,2,5})); // Expected: 9
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int trap(vector<int>& height) {
    // Write your solution here
    
}

int main() {
    vector<int> height1 = {0,1,0,2,1,0,1,3,2,1,2,1};
    cout << trap(height1) << endl; // Expected: 6
    
    vector<int> height2 = {4,2,0,3,2,5};
    cout << trap(height2) << endl; // Expected: 9
    
    return 0;
}`,

            c: `#include <stdio.h>

int trap(int* height, int heightSize) {
    // Write your solution here
    
}

int main() {
    int height1[] = {0,1,0,2,1,0,1,3,2,1,2,1};
    printf("%d\\n", trap(height1, 12)); // Expected: 6
    
    int height2[] = {4,2,0,3,2,5};
    printf("%d\\n", trap(height2, 6)); // Expected: 9
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int Trap(int[] height) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(Trap(new int[] {0,1,0,2,1,0,1,3,2,1,2,1})); // Expected: 6
        Console.WriteLine(Trap(new int[] {4,2,0,3,2,5})); // Expected: 9
    }
}`,

            go: `package main

import "fmt"

func trap(height []int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(trap([]int{0,1,0,2,1,0,1,3,2,1,2,1})) // Expected: 6
    fmt.Println(trap([]int{4,2,0,3,2,5})) // Expected: 9
}`,

            rust: `fn trap(height: Vec<i32>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", trap(vec![0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
    println!("{}", trap(vec![4,2,0,3,2,5])); // Expected: 9
}`,

            ruby: `def trap(height)
    # Write your solution here
    
end

# Test cases
puts trap([0,1,0,2,1,0,1,3,2,1,2,1]) # Expected: 6
puts trap([4,2,0,3,2,5]) # Expected: 9`,

            php: `<?php
function trap($height) {
    // Write your solution here
    
}

// Test cases
echo trap([0,1,0,2,1,0,1,3,2,1,2,1]) . "\\n"; // Expected: 6
echo trap([4,2,0,3,2,5]) . "\\n"; // Expected: 9
?>`,

            swift: `func trap(_ height: [Int]) -> Int {
    // Write your solution here
    
}

// Test cases
print(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // Expected: 6
print(trap([4,2,0,3,2,5])) // Expected: 9`,

            kotlin: `fun trap(height: IntArray): Int {
    // Write your solution here
    
}

fun main() {
    println(trap(intArrayOf(0,1,0,2,1,0,1,3,2,1,2,1))) // Expected: 6
    println(trap(intArrayOf(4,2,0,3,2,5))) // Expected: 9
}`,

            scala: `object Solution {
    def trap(height: Array[Int]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(trap(Array(0,1,0,2,1,0,1,3,2,1,2,1))) // Expected: 6
        println(trap(Array(4,2,0,3,2,5))) // Expected: 9
    }
}`,

            perl: `sub trap {
    my $height = shift;
    # Write your solution here
    
}

# Test cases
print trap([0,1,0,2,1,0,1,3,2,1,2,1]) . "\\n"; # Expected: 6
print trap([4,2,0,3,2,5]) . "\\n"; # Expected: 9`,

            r: `trap <- function(height) {
    # Write your solution here
    
}

# Test cases
print(trap(c(0,1,0,2,1,0,1,3,2,1,2,1))) # Expected: 6
print(trap(c(4,2,0,3,2,5))) # Expected: 9`
        },
        expectedOutput: {
            javascript: "6\n9",
            python: "6\n9",
            java: "6\n9",
        },
    },

    "lru-cache": {
        id: "lru-cache",
        title: "LRU Cache",
        difficulty: "Medium",
        category: "Design • Hash Table • Linked List",
        description: {
            text: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class with get(key) and put(key, value) functions in O(1) average time complexity.",
            notes: [
                "get(key): Return the value of the key if the key exists, otherwise return -1.",
                "put(key, value): Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity, evict the least recently used key.",
                "The functions must run in O(1) average time complexity."
            ],
        },
        examples: [
            {
                input: "LRUCache lru = new LRUCache(2);\nlru.put(1, 1);\nlru.put(2, 2);\nlru.get(1);\nlru.put(3, 3);\nlru.get(2);\nlru.put(4, 4);\nlru.get(1);\nlru.get(3);\nlru.get(4);",
                output: "1\n-1\n-1\n3\n4",
                explanation: "After putting (1,1) and (2,2), get(1) returns 1. Put(3,3) evicts key 2. get(2) returns -1. Put(4,4) evicts key 1. get(1) returns -1, get(3) returns 3, get(4) returns 4.",
            },
        ],
        constraints: [
            "1 ≤ capacity ≤ 3000",
            "0 ≤ key ≤ 10⁴",
            "0 ≤ value ≤ 10⁵",
            "At most 2 * 10⁵ calls will be made to get and put",
        ],
        starterCode: {
            javascript: `class LRUCache {
    constructor(capacity) {
        // Write your solution here
        
    }
    
    get(key) {
        // Write your solution here
        
    }
    
    put(key, value) {
        // Write your solution here
        
    }
}

// Test cases
let lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); // Expected: 1
lru.put(3, 3);
console.log(lru.get(2)); // Expected: -1
lru.put(4, 4);
console.log(lru.get(1)); // Expected: -1
console.log(lru.get(3)); // Expected: 3
console.log(lru.get(4)); // Expected: 4`,

            typescript: `class LRUCache {
    constructor(capacity: number) {
        // Write your solution here
        
    }
    
    get(key: number): number {
        // Write your solution here
        
    }
    
    put(key: number, value: number): void {
        // Write your solution here
        
    }
}

// Test cases
let lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); // Expected: 1
lru.put(3, 3);
console.log(lru.get(2)); // Expected: -1
lru.put(4, 4);
console.log(lru.get(1)); // Expected: -1
console.log(lru.get(3)); // Expected: 3
console.log(lru.get(4)); // Expected: 4`,

            python: `class LRUCache:
    def __init__(self, capacity: int):
        # Write your solution here
        
    def get(self, key: int) -> int:
        # Write your solution here
        
    def put(self, key: int, value: int) -> None:
        # Write your solution here
        

# Test cases
lru = LRUCache(2)
lru.put(1, 1)
lru.put(2, 2)
print(lru.get(1))  # Expected: 1
lru.put(3, 3)
print(lru.get(2))  # Expected: -1
lru.put(4, 4)
print(lru.get(1))  # Expected: -1
print(lru.get(3))  # Expected: 3
print(lru.get(4))  # Expected: 4`,

            java: `import java.util.*;

class LRUCache {
    public LRUCache(int capacity) {
        // Write your solution here
        
    }
    
    public int get(int key) {
        // Write your solution here
        
    }
    
    public void put(int key, int value) {
        // Write your solution here
        
    }

    public static void main(String[] args) {
        LRUCache lru = new LRUCache(2);
        lru.put(1, 1);
        lru.put(2, 2);
        System.out.println(lru.get(1)); // Expected: 1
        lru.put(3, 3);
        System.out.println(lru.get(2)); // Expected: -1
        lru.put(4, 4);
        System.out.println(lru.get(1)); // Expected: -1
        System.out.println(lru.get(3)); // Expected: 3
        System.out.println(lru.get(4)); // Expected: 4
    }
}`,

            cpp: `#include <iostream>
#include <unordered_map>
using namespace std;

class LRUCache {
public:
    LRUCache(int capacity) {
        // Write your solution here
        
    }
    
    int get(int key) {
        // Write your solution here
        
    }
    
    void put(int key, int value) {
        // Write your solution here
        
    }
};

int main() {
    LRUCache* lru = new LRUCache(2);
    lru->put(1, 1);
    lru->put(2, 2);
    cout << lru->get(1) << endl; // Expected: 1
    lru->put(3, 3);
    cout << lru->get(2) << endl; // Expected: -1
    lru->put(4, 4);
    cout << lru->get(1) << endl; // Expected: -1
    cout << lru->get(3) << endl; // Expected: 3
    cout << lru->get(4) << endl; // Expected: 4
    
    delete lru;
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    // Write your solution here
} LRUCache;

LRUCache* lRUCacheCreate(int capacity) {
    // Write your solution here
    
}

int lRUCacheGet(LRUCache* obj, int key) {
    // Write your solution here
    
}

void lRUCachePut(LRUCache* obj, int key, int value) {
    // Write your solution here
    
}

void lRUCacheFree(LRUCache* obj) {
    // Write your solution here
    
}

int main() {
    LRUCache* lru = lRUCacheCreate(2);
    lRUCachePut(lru, 1, 1);
    lRUCachePut(lru, 2, 2);
    printf("%d\\n", lRUCacheGet(lru, 1)); // Expected: 1
    lRUCachePut(lru, 3, 3);
    printf("%d\\n", lRUCacheGet(lru, 2)); // Expected: -1
    lRUCachePut(lru, 4, 4);
    printf("%d\\n", lRUCacheGet(lru, 1)); // Expected: -1
    printf("%d\\n", lRUCacheGet(lru, 3)); // Expected: 3
    printf("%d\\n", lRUCacheGet(lru, 4)); // Expected: 4
    lRUCacheFree(lru);
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

public class LRUCache {
    public LRUCache(int capacity) {
        // Write your solution here
        
    }
    
    public int Get(int key) {
        // Write your solution here
        
    }
    
    public void Put(int key, int value) {
        // Write your solution here
        
    }
}

class Program {
    static void Main() {
        LRUCache lru = new LRUCache(2);
        lru.Put(1, 1);
        lru.Put(2, 2);
        Console.WriteLine(lru.Get(1)); // Expected: 1
        lru.Put(3, 3);
        Console.WriteLine(lru.Get(2)); // Expected: -1
        lru.Put(4, 4);
        Console.WriteLine(lru.Get(1)); // Expected: -1
        Console.WriteLine(lru.Get(3)); // Expected: 3
        Console.WriteLine(lru.Get(4)); // Expected: 4
    }
}`,

            go: `package main

import "fmt"

type LRUCache struct {
    // Write your solution here
}

func Constructor(capacity int) LRUCache {
    // Write your solution here
    
}

func (this *LRUCache) Get(key int) int {
    // Write your solution here
    
}

func (this *LRUCache) Put(key int, value int) {
    // Write your solution here
    
}

func main() {
    lru := Constructor(2)
    lru.Put(1, 1)
    lru.Put(2, 2)
    fmt.Println(lru.Get(1)) // Expected: 1
    lru.Put(3, 3)
    fmt.Println(lru.Get(2)) // Expected: -1
    lru.Put(4, 4)
    fmt.Println(lru.Get(1)) // Expected: -1
    fmt.Println(lru.Get(3)) // Expected: 3
    fmt.Println(lru.Get(4)) // Expected: 4
}`,

            rust: `use std::collections::HashMap;

struct LRUCache {
    // Write your solution here
}

impl LRUCache {
    fn new(capacity: i32) -> Self {
        // Write your solution here
        
    }
    
    fn get(&mut self, key: i32) -> i32 {
        // Write your solution here
        
    }
    
    fn put(&mut self, key: i32, value: i32) {
        // Write your solution here
        
    }
}

fn main() {
    let mut lru = LRUCache::new(2);
    lru.put(1, 1);
    lru.put(2, 2);
    println!("{}", lru.get(1)); // Expected: 1
    lru.put(3, 3);
    println!("{}", lru.get(2)); // Expected: -1
    lru.put(4, 4);
    println!("{}", lru.get(1)); // Expected: -1
    println!("{}", lru.get(3)); // Expected: 3
    println!("{}", lru.get(4)); // Expected: 4
}`,

            ruby: `class LRUCache
    def initialize(capacity)
        # Write your solution here
        
    end
    
    def get(key)
        # Write your solution here
        
    end
    
    def put(key, value)
        # Write your solution here
        
    end
end

# Test cases
lru = LRUCache.new(2)
lru.put(1, 1)
lru.put(2, 2)
puts lru.get(1) # Expected: 1
lru.put(3, 3)
puts lru.get(2) # Expected: -1
lru.put(4, 4)
puts lru.get(1) # Expected: -1
puts lru.get(3) # Expected: 3
puts lru.get(4) # Expected: 4`,

            php: `<?php
class LRUCache {
    function __construct($capacity) {
        // Write your solution here
        
    }
    
    function get($key) {
        // Write your solution here
        
    }
    
    function put($key, $value) {
        // Write your solution here
        
    }
}

// Test cases
$lru = new LRUCache(2);
$lru->put(1, 1);
$lru->put(2, 2);
echo $lru->get(1) . "\\n"; // Expected: 1
$lru->put(3, 3);
echo $lru->get(2) . "\\n"; // Expected: -1
$lru->put(4, 4);
echo $lru->get(1) . "\\n"; // Expected: -1
echo $lru->get(3) . "\\n"; // Expected: 3
echo $lru->get(4) . "\\n"; // Expected: 4
?>`,

            swift: `class LRUCache {
    init(_ capacity: Int) {
        // Write your solution here
        
    }
    
    func get(_ key: Int) -> Int {
        // Write your solution here
        
    }
    
    func put(_ key: Int, _ value: Int) {
        // Write your solution here
        
    }
}

// Test cases
let lru = LRUCache(2)
lru.put(1, 1)
lru.put(2, 2)
print(lru.get(1)) // Expected: 1
lru.put(3, 3)
print(lru.get(2)) // Expected: -1
lru.put(4, 4)
print(lru.get(1)) // Expected: -1
print(lru.get(3)) // Expected: 3
print(lru.get(4)) // Expected: 4`,

            kotlin: `class LRUCache(capacity: Int) {
    // Write your solution here
    
    fun get(key: Int): Int {
        // Write your solution here
        
    }
    
    fun put(key: Int, value: Int) {
        // Write your solution here
        
    }
}

fun main() {
    val lru = LRUCache(2)
    lru.put(1, 1)
    lru.put(2, 2)
    println(lru.get(1)) // Expected: 1
    lru.put(3, 3)
    println(lru.get(2)) // Expected: -1
    lru.put(4, 4)
    println(lru.get(1)) // Expected: -1
    println(lru.get(3)) // Expected: 3
    println(lru.get(4)) // Expected: 4
}`,

            scala: `import scala.collection.mutable

class LRUCache(_capacity: Int) {
    // Write your solution here
    
    def get(key: Int): Int = {
        // Write your solution here
        
    }
    
    def put(key: Int, value: Int): Unit = {
        // Write your solution here
        
    }
}

object Main {
    def main(args: Array[String]): Unit = {
        val lru = new LRUCache(2)
        lru.put(1, 1)
        lru.put(2, 2)
        println(lru.get(1)) // Expected: 1
        lru.put(3, 3)
        println(lru.get(2)) // Expected: -1
        lru.put(4, 4)
        println(lru.get(1)) // Expected: -1
        println(lru.get(3)) // Expected: 3
        println(lru.get(4)) // Expected: 4
    }
}`,

            perl: `package LRUCache;
sub new {
    my ($class, $capacity) = @_;
    # Write your solution here
    
}

sub get {
    my ($self, $key) = @_;
    # Write your solution here
    
}

sub put {
    my ($self, $key, $value) = @_;
    # Write your solution here
    
}

package main;
my $lru = LRUCache->new(2);
$lru->put(1, 1);
$lru->put(2, 2);
print $lru->get(1) . "\\n"; # Expected: 1
$lru->put(3, 3);
print $lru->get(2) . "\\n"; # Expected: -1
$lru->put(4, 4);
print $lru->get(1) . "\\n"; # Expected: -1
print $lru->get(3) . "\\n"; # Expected: 3
print $lru->get(4) . "\\n"; # Expected: 4`,

            r: `LRUCache <- setRefClass("LRUCache",
    fields = list(),
    methods = list(
        initialize = function(capacity) {
            # Write your solution here
            
        },
        get = function(key) {
            # Write your solution here
            
        },
        put = function(key, value) {
            # Write your solution here
            
        }
    )
)

# Test cases
lru <- LRUCache$new(2)
lru$put(1, 1)
lru$put(2, 2)
cat(lru$get(1), "\\n") # Expected: 1
lru$put(3, 3)
cat(lru$get(2), "\\n") # Expected: -1
lru$put(4, 4)
cat(lru$get(1), "\\n") # Expected: -1
cat(lru$get(3), "\\n") # Expected: 3
cat(lru$get(4), "\\n") # Expected: 4`
        },
        expectedOutput: {
            javascript: "1\n-1\n-1\n3\n4",
            python: "1\n-1\n-1\n3\n4",
            java: "1\n-1\n-1\n3\n4",
        },
    },

    "word-break": {
        id: "word-break",
        title: "Word Break",
        difficulty: "Medium",
        category: "String • Dynamic Programming • Trie",
        description: {
            text: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
            notes: [
                "The same word in the dictionary may be reused multiple times.",
                "You may assume the dictionary does not contain duplicate words."
            ],
        },
        examples: [
            {
                input: "s = 'leetcode', wordDict = ['leet','code']",
                output: "true",
                explanation: "Return true because 'leetcode' can be segmented as 'leet code'.",
            },
            {
                input: "s = 'applepenapple', wordDict = ['apple','pen']",
                output: "true",
                explanation: "Return true because 'applepenapple' can be segmented as 'apple pen apple'.",
            },
            {
                input: "s = 'catsandog', wordDict = ['cats','dog','sand','and','cat']",
                output: "false",
            },
        ],
        constraints: [
            "1 ≤ s.length ≤ 300",
            "1 ≤ wordDict.length ≤ 1000",
            "1 ≤ wordDict[i].length ≤ 20",
            "s and wordDict[i] consist of only lowercase English letters",
            "All strings in wordDict are unique",
        ],
        starterCode: {
            javascript: `function wordBreak(s, wordDict) {
    // Write your solution here
    
}

// Test cases
console.log(wordBreak('leetcode', ['leet','code'])); // Expected: true
console.log(wordBreak('applepenapple', ['apple','pen'])); // Expected: true
console.log(wordBreak('catsandog', ['cats','dog','sand','and','cat'])); // Expected: false`,

            typescript: `function wordBreak(s: string, wordDict: string[]): boolean {
    // Write your solution here
    
}

// Test cases
console.log(wordBreak('leetcode', ['leet','code'])); // Expected: true
console.log(wordBreak('applepenapple', ['apple','pen'])); // Expected: true
console.log(wordBreak('catsandog', ['cats','dog','sand','and','cat'])); // Expected: false`,

            python: `def wordBreak(s, wordDict):
    # Write your solution here
    pass

# Test cases
print(wordBreak('leetcode', ['leet','code']))  # Expected: True
print(wordBreak('applepenapple', ['apple','pen']))  # Expected: True
print(wordBreak('catsandog', ['cats','dog','sand','and','cat']))  # Expected: False`,

            java: `import java.util.*;

class Solution {
    public static boolean wordBreak(String s, List<String> wordDict) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(wordBreak("leetcode", Arrays.asList("leet","code"))); // Expected: true
        System.out.println(wordBreak("applepenapple", Arrays.asList("apple","pen"))); // Expected: true
        System.out.println(wordBreak("catsandog", Arrays.asList("cats","dog","sand","and","cat"))); // Expected: false
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_set>
using namespace std;

bool wordBreak(string s, vector<string>& wordDict) {
    // Write your solution here
    
}

int main() {
    vector<string> dict1 = {"leet","code"};
    cout << boolalpha;
    cout << wordBreak("leetcode", dict1) << endl; // Expected: true
    
    vector<string> dict2 = {"apple","pen"};
    cout << wordBreak("applepenapple", dict2) << endl; // Expected: true
    
    vector<string> dict3 = {"cats","dog","sand","and","cat"};
    cout << wordBreak("catsandog", dict3) << endl; // Expected: false
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool wordBreak(char* s, char** wordDict, int wordDictSize) {
    // Write your solution here
    
}

int main() {
    char* dict1[] = {"leet","code"};
    printf("%d\\n", wordBreak("leetcode", dict1, 2)); // Expected: 1 (true)
    
    char* dict2[] = {"apple","pen"};
    printf("%d\\n", wordBreak("applepenapple", dict2, 2)); // Expected: 1 (true)
    
    char* dict3[] = {"cats","dog","sand","and","cat"};
    printf("%d\\n", wordBreak("catsandog", dict3, 5)); // Expected: 0 (false)
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static bool WordBreak(string s, IList<string> wordDict) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(WordBreak("leetcode", new List<string> {"leet","code"})); // Expected: True
        Console.WriteLine(WordBreak("applepenapple", new List<string> {"apple","pen"})); // Expected: True
        Console.WriteLine(WordBreak("catsandog", new List<string> {"cats","dog","sand","and","cat"})); // Expected: False
    }
}`,

            go: `package main

import "fmt"

func wordBreak(s string, wordDict []string) bool {
    // Write your solution here
    
}

func main() {
    fmt.Println(wordBreak("leetcode", []string{"leet","code"})) // Expected: true
    fmt.Println(wordBreak("applepenapple", []string{"apple","pen"})) // Expected: true
    fmt.Println(wordBreak("catsandog", []string{"cats","dog","sand","and","cat"})) // Expected: false
}`,

            rust: `use std::collections::HashSet;

fn word_break(s: String, word_dict: Vec<String>) -> bool {
    // Write your solution here
    
}

fn main() {
    println!("{}", word_break("leetcode".to_string(), vec!["leet".to_string(), "code".to_string()])); // Expected: true
    println!("{}", word_break("applepenapple".to_string(), vec!["apple".to_string(), "pen".to_string()])); // Expected: true
    println!("{}", word_break("catsandog".to_string(), vec!["cats".to_string(), "dog".to_string(), "sand".to_string(), "and".to_string(), "cat".to_string()])); // Expected: false
}`,

            ruby: `def word_break(s, word_dict)
    # Write your solution here
    
end

# Test cases
puts word_break('leetcode', ['leet','code']) # Expected: true
puts word_break('applepenapple', ['apple','pen']) # Expected: true
puts word_break('catsandog', ['cats','dog','sand','and','cat']) # Expected: false`,

            php: `<?php
function wordBreak($s, $wordDict) {
    // Write your solution here
    
}

// Test cases
echo var_export(wordBreak('leetcode', ['leet','code']), true) . "\\n"; // Expected: true
echo var_export(wordBreak('applepenapple', ['apple','pen']), true) . "\\n"; // Expected: true
echo var_export(wordBreak('catsandog', ['cats','dog','sand','and','cat']), true) . "\\n"; // Expected: false
?>`,

            swift: `func wordBreak(_ s: String, _ wordDict: [String]) -> Bool {
    // Write your solution here
    
}

// Test cases
print(wordBreak("leetcode", ["leet","code"])) // Expected: true
print(wordBreak("applepenapple", ["apple","pen"])) // Expected: true
print(wordBreak("catsandog", ["cats","dog","sand","and","cat"])) // Expected: false`,

            kotlin: `fun wordBreak(s: String, wordDict: List<String>): Boolean {
    // Write your solution here
    
}

fun main() {
    println(wordBreak("leetcode", listOf("leet","code"))) // Expected: true
    println(wordBreak("applepenapple", listOf("apple","pen"))) // Expected: true
    println(wordBreak("catsandog", listOf("cats","dog","sand","and","cat"))) // Expected: false
}`,

            scala: `import scala.collection.mutable

object Solution {
    def wordBreak(s: String, wordDict: List[String]): Boolean = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(wordBreak("leetcode", List("leet","code"))) // Expected: true
        println(wordBreak("applepenapple", List("apple","pen"))) // Expected: true
        println(wordBreak("catsandog", List("cats","dog","sand","and","cat"))) // Expected: false
    }
}`,

            perl: `sub wordBreak {
    my ($s, $wordDict) = @_;
    # Write your solution here
    
}

# Test cases
print wordBreak('leetcode', ['leet','code']) ? "true\\n" : "false\\n"; # Expected: true
print wordBreak('applepenapple', ['apple','pen']) ? "true\\n" : "false\\n"; # Expected: true
print wordBreak('catsandog', ['cats','dog','sand','and','cat']) ? "true\\n" : "false\\n"; # Expected: false`,

            r: `wordBreak <- function(s, wordDict) {
    # Write your solution here
    
}

# Test cases
print(wordBreak('leetcode', c('leet','code'))) # Expected: TRUE
print(wordBreak('applepenapple', c('apple','pen'))) # Expected: TRUE
print(wordBreak('catsandog', c('cats','dog','sand','and','cat'))) # Expected: FALSE`
        },
        expectedOutput: {
            javascript: "true\ntrue\nfalse",
            python: "True\nTrue\nFalse",
            java: "true\ntrue\nfalse",
        },
    },

    "house-robber": {
        id: "house-robber",
        title: "House Robber",
        difficulty: "Medium",
        category: "Dynamic Programming",
        description: {
            text: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. You cannot rob adjacent houses because it will alert the police. Given an integer array nums representing the amount of money in each house, return the maximum amount you can rob tonight without alerting the police.",
            notes: [
                "You cannot rob two adjacent houses.",
                "You can start from either end of the street."
            ],
        },
        examples: [
            {
                input: "nums = [1,2,3,1]",
                output: "4",
                explanation: "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total = 4.",
            },
            {
                input: "nums = [2,7,9,3,1]",
                output: "12",
                explanation: "Rob house 1 (money = 2), rob house 3 (money = 9), rob house 5 (money = 1). Total = 12.",
            },
            {
                input: "nums = [2,1,1,2]",
                output: "4",
            },
        ],
        constraints: [
            "1 ≤ nums.length ≤ 100",
            "0 ≤ nums[i] ≤ 400",
        ],
        starterCode: {
            javascript: `function rob(nums) {
    // Write your solution here
    
}

// Test cases
console.log(rob([1,2,3,1])); // Expected: 4
console.log(rob([2,7,9,3,1])); // Expected: 12
console.log(rob([2,1,1,2])); // Expected: 4`,

            typescript: `function rob(nums: number[]): number {
    // Write your solution here
    
}

// Test cases
console.log(rob([1,2,3,1])); // Expected: 4
console.log(rob([2,7,9,3,1])); // Expected: 12
console.log(rob([2,1,1,2])); // Expected: 4`,

            python: `def rob(nums):
    # Write your solution here
    pass

# Test cases
print(rob([1,2,3,1]))  # Expected: 4
print(rob([2,7,9,3,1]))  # Expected: 12
print(rob([2,1,1,2]))  # Expected: 4`,

            java: `class Solution {
    public static int rob(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(rob(new int[]{1,2,3,1})); // Expected: 4
        System.out.println(rob(new int[]{2,7,9,3,1})); // Expected: 12
        System.out.println(rob(new int[]{2,1,1,2})); // Expected: 4
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int rob(vector<int>& nums) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {1,2,3,1};
    cout << rob(nums1) << endl; // Expected: 4
    
    vector<int> nums2 = {2,7,9,3,1};
    cout << rob(nums2) << endl; // Expected: 12
    
    vector<int> nums3 = {2,1,1,2};
    cout << rob(nums3) << endl; // Expected: 4
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int rob(int* nums, int numsSize) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {1,2,3,1};
    printf("%d\\n", rob(nums1, 4)); // Expected: 4
    
    int nums2[] = {2,7,9,3,1};
    printf("%d\\n", rob(nums2, 5)); // Expected: 12
    
    int nums3[] = {2,1,1,2};
    printf("%d\\n", rob(nums3, 4)); // Expected: 4
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int Rob(int[] nums) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(Rob(new int[] {1,2,3,1})); // Expected: 4
        Console.WriteLine(Rob(new int[] {2,7,9,3,1})); // Expected: 12
        Console.WriteLine(Rob(new int[] {2,1,1,2})); // Expected: 4
    }
}`,

            go: `package main

import "fmt"

func rob(nums []int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(rob([]int{1,2,3,1})) // Expected: 4
    fmt.Println(rob([]int{2,7,9,3,1})) // Expected: 12
    fmt.Println(rob([]int{2,1,1,2})) // Expected: 4
}`,

            rust: `fn rob(nums: Vec<i32>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", rob(vec![1,2,3,1])); // Expected: 4
    println!("{}", rob(vec![2,7,9,3,1])); // Expected: 12
    println!("{}", rob(vec![2,1,1,2])); // Expected: 4
}`,

            ruby: `def rob(nums)
    # Write your solution here
    
end

# Test cases
puts rob([1,2,3,1]) # Expected: 4
puts rob([2,7,9,3,1]) # Expected: 12
puts rob([2,1,1,2]) # Expected: 4`,

            php: `<?php
function rob($nums) {
    // Write your solution here
    
}

// Test cases
echo rob([1,2,3,1]) . "\\n"; // Expected: 4
echo rob([2,7,9,3,1]) . "\\n"; // Expected: 12
echo rob([2,1,1,2]) . "\\n"; // Expected: 4
?>`,

            swift: `func rob(_ nums: [Int]) -> Int {
    // Write your solution here
    
}

// Test cases
print(rob([1,2,3,1])) // Expected: 4
print(rob([2,7,9,3,1])) // Expected: 12
print(rob([2,1,1,2])) // Expected: 4`,

            kotlin: `fun rob(nums: IntArray): Int {
    // Write your solution here
    
}

fun main() {
    println(rob(intArrayOf(1,2,3,1))) // Expected: 4
    println(rob(intArrayOf(2,7,9,3,1))) // Expected: 12
    println(rob(intArrayOf(2,1,1,2))) // Expected: 4
}`,

            scala: `object Solution {
    def rob(nums: Array[Int]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(rob(Array(1,2,3,1))) // Expected: 4
        println(rob(Array(2,7,9,3,1))) // Expected: 12
        println(rob(Array(2,1,1,2))) // Expected: 4
    }
}`,

            perl: `sub rob {
    my $nums = shift;
    # Write your solution here
    
}

# Test cases
print rob([1,2,3,1]) . "\\n"; # Expected: 4
print rob([2,7,9,3,1]) . "\\n"; # Expected: 12
print rob([2,1,1,2]) . "\\n"; # Expected: 4`,

            r: `rob <- function(nums) {
    # Write your solution here
    
}

# Test cases
print(rob(c(1,2,3,1))) # Expected: 4
print(rob(c(2,7,9,3,1))) # Expected: 12
print(rob(c(2,1,1,2))) # Expected: 4`
        },
        expectedOutput: {
            javascript: "4\n12\n4",
            python: "4\n12\n4",
            java: "4\n12\n4",
        },
    },

    "generate-parentheses": {
        id: "generate-parentheses",
        title: "Generate Parentheses",
        difficulty: "Medium",
        category: "String • Backtracking • Stack",
        description: {
            text: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
            notes: [
                "A well-formed parentheses combination means every opening parenthesis has a corresponding closing parenthesis in the correct order.",
                "The result can be in any order."
            ],
        },
        examples: [
            {
                input: "n = 3",
                output: "['((()))','(()())','(())()','()(())','()()()']",
            },
            {
                input: "n = 1",
                output: "['()']",
            },
        ],
        constraints: [
            "1 ≤ n ≤ 8",
        ],
        starterCode: {
            javascript: `function generateParenthesis(n) {
    // Write your solution here
    
}

// Test cases
console.log(generateParenthesis(3)); // Expected: ['((()))','(()())','(())()','()(())','()()()']
console.log(generateParenthesis(1)); // Expected: ['()']`,

            typescript: `function generateParenthesis(n: number): string[] {
    // Write your solution here
    
}

// Test cases
console.log(generateParenthesis(3)); // Expected: ['((()))','(()())','(())()','()(())','()()()']
console.log(generateParenthesis(1)); // Expected: ['()']`,

            python: `def generateParenthesis(n):
    # Write your solution here
    pass

# Test cases
print(generateParenthesis(3))  # Expected: ['((()))','(()())','(())()','()(())','()()()']
print(generateParenthesis(1))  # Expected: ['()']`,

            java: `import java.util.*;

class Solution {
    public static List<String> generateParenthesis(int n) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(generateParenthesis(3)); 
        // Expected: [((())), (()()), (())(), ()(()), ()()()]
        System.out.println(generateParenthesis(1)); // Expected: [()]
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<string> generateParenthesis(int n) {
    // Write your solution here
    
}

int main() {
    vector<string> result1 = generateParenthesis(3);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << result1[i];
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    vector<string> result2 = generateParenthesis(1);
    cout << "[";
    for (size_t i = 0; i < result2.size(); i++) {
        cout << result2[i];
        if (i < result2.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char** generateParenthesis(int n, int* returnSize) {
    // Write your solution here
    
}

int main() {
    int returnSize1;
    char** result1 = generateParenthesis(3, &returnSize1);
    printf("[");
    for (int i = 0; i < returnSize1; i++) {
        printf("%s", result1[i]);
        if (i < returnSize1 - 1) printf(",");
    }
    printf("]\\n");
    
    int returnSize2;
    char** result2 = generateParenthesis(1, &returnSize2);
    printf("[");
    for (int i = 0; i < returnSize2; i++) {
        printf("%s", result2[i]);
        if (i < returnSize2 - 1) printf(",");
    }
    printf("]\\n");
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<string> GenerateParenthesis(int n) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine($"[{string.Join(",", GenerateParenthesis(3))}]");
        Console.WriteLine($"[{string.Join(",", GenerateParenthesis(1))}]");
    }
}`,

            go: `package main

import "fmt"

func generateParenthesis(n int) []string {
    // Write your solution here
    
}

func main() {
    fmt.Println(generateParenthesis(3)) // Expected: [((())) (()()) (())() ()(()) ()()()]
    fmt.Println(generateParenthesis(1)) // Expected: [()]
}`,

            rust: `fn generate_parenthesis(n: i32) -> Vec<String> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", generate_parenthesis(3));
    println!("{:?}", generate_parenthesis(1));
}`,

            ruby: `def generate_parenthesis(n)
    # Write your solution here
    
end

# Test cases
puts generate_parenthesis(3).inspect # Expected: ["((()))","(()())","(())()","()(())","()()()"]
puts generate_parenthesis(1).inspect # Expected: ["()"]`,

            php: `<?php
function generateParenthesis($n) {
    // Write your solution here
    
}

// Test cases
print_r(generateParenthesis(3));
print_r(generateParenthesis(1));
?>`,

            swift: `func generateParenthesis(_ n: Int) -> [String] {
    // Write your solution here
    
}

// Test cases
print(generateParenthesis(3))
print(generateParenthesis(1))`,

            kotlin: `fun generateParenthesis(n: Int): List<String> {
    // Write your solution here
    
}

fun main() {
    println(generateParenthesis(3))
    println(generateParenthesis(1))
}`,

            scala: `import scala.collection.mutable.ListBuffer

object Solution {
    def generateParenthesis(n: Int): List[String] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(generateParenthesis(3))
        println(generateParenthesis(1))
    }
}`,

            perl: `sub generateParenthesis {
    my $n = shift;
    # Write your solution here
    
}

# Test cases
my @result1 = @{generateParenthesis(3)};
print "[" . join(",", @result1) . "]\\n";

my @result2 = @{generateParenthesis(1)};
print "[" . join(",", @result2) . "]\\n";`,

            r: `generateParenthesis <- function(n) {
    # Write your solution here
    
}

# Test cases
print(generateParenthesis(3))
print(generateParenthesis(1))`
        },
        expectedOutput: {
            javascript: "['((()))','(()())','(())()','()(())','()()()']\n['()']",
            python: "['((()))', '(()())', '(())()', '()(())', '()()()']\n['()']",
            java: "[((())), (()()), (())(), ()(()), ()()()]\n[()]",
        },
    },

    "binary-tree-level-order-traversal": {
        id: "binary-tree-level-order-traversal",
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        category: "Tree • BFS • Binary Tree",
        description: {
            text: "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
            notes: [
                "Return the result as a list of lists, where each inner list contains the values of nodes at that level.",
                "Use BFS (queue) for an efficient solution."
            ],
        },
        examples: [
            {
                input: "root = [3,9,20,null,null,15,7]",
                output: "[[3],[9,20],[15,7]]",
            },
            {
                input: "root = [1]",
                output: "[[1]]",
            },
            {
                input: "root = []",
                output: "[]",
            },
        ],
        constraints: [
            "The number of nodes in the tree is in the range [0, 2000]",
            "-1000 ≤ Node.val ≤ 1000",
        ],
        starterCode: {
            javascript: `function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

function levelOrder(root) {
    // Write your solution here
    
}

// Helper function to create tree from array
function createTree(arr) {
    if (!arr.length) return null;
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        let node = queue.shift();
        if (arr[i] !== null && arr[i] !== undefined) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

// Test cases
let tree1 = createTree([3,9,20,null,null,15,7]);
console.log(levelOrder(tree1)); // Expected: [[3],[9,20],[15,7]]

let tree2 = createTree([1]);
console.log(levelOrder(tree2)); // Expected: [[1]]

let tree3 = createTree([]);
console.log(levelOrder(tree3)); // Expected: []`,

            typescript: `class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}

function levelOrder(root: TreeNode | null): number[][] {
    // Write your solution here
    
}

// Helper function to create tree from array
function createTree(arr: (number | null)[]): TreeNode | null {
    if (!arr.length) return null;
    let root = new TreeNode(arr[0] as number);
    let queue: (TreeNode | null)[] = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        let node = queue.shift();
        if (node) {
            if (arr[i] !== null && arr[i] !== undefined) {
                node.left = new TreeNode(arr[i] as number);
                queue.push(node.left);
            }
            i++;
            if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
                node.right = new TreeNode(arr[i] as number);
                queue.push(node.right);
            }
            i++;
        }
    }
    return root;
}

// Test cases
let tree1 = createTree([3,9,20,null,null,15,7]);
console.log(levelOrder(tree1)); // Expected: [[3],[9,20],[15,7]]

let tree2 = createTree([1]);
console.log(levelOrder(tree2)); // Expected: [[1]]

let tree3 = createTree([]);
console.log(levelOrder(tree3)); // Expected: []`,

            python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def levelOrder(root):
    # Write your solution here
    pass

# Helper function to create tree from list
def createTree(arr):
    if not arr:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if arr[i] is not None:
            node.left = TreeNode(arr[i])
            queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i])
            queue.append(node.right)
        i += 1
    return root

# Test cases
tree1 = createTree([3,9,20,None,None,15,7])
print(levelOrder(tree1))  # Expected: [[3],[9,20],[15,7]]

tree2 = createTree([1])
print(levelOrder(tree2))  # Expected: [[1]]

tree3 = createTree([])
print(levelOrder(tree3))  # Expected: []`,

            java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static List<List<Integer>> levelOrder(TreeNode root) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    // Helper function to create tree from array
    public static TreeNode createTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int i = 1;
        while (!queue.isEmpty() && i < arr.length) {
            TreeNode node = queue.poll();
            if (i < arr.length && arr[i] != null) {
                node.left = new TreeNode(arr[i]);
                queue.offer(node.left);
            }
            i++;
            if (i < arr.length && arr[i] != null) {
                node.right = new TreeNode(arr[i]);
                queue.offer(node.right);
            }
            i++;
        }
        return root;
    }
    
    public static void main(String[] args) {
        TreeNode tree1 = createTree(new Integer[]{3,9,20,null,null,15,7});
        System.out.println(levelOrder(tree1)); // Expected: [[3],[9,20],[15,7]]
        
        TreeNode tree2 = createTree(new Integer[]{1});
        System.out.println(levelOrder(tree2)); // Expected: [[1]]
        
        TreeNode tree3 = createTree(new Integer[]{});
        System.out.println(levelOrder(tree3)); // Expected: []
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

vector<vector<int>> levelOrder(TreeNode* root) {
    // Write your solution here
    
}

// Helper function to create tree from vector (using -1 for null)
TreeNode* createTree(vector<int> arr) {
    if (arr.empty() || arr[0] == -1) return nullptr;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q;
    q.push(root);
    int i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* node = q.front();
        q.pop();
        if (i < arr.size() && arr[i] != -1) {
            node->left = new TreeNode(arr[i]);
            q.push(node->left);
        }
        i++;
        if (i < arr.size() && arr[i] != -1) {
            node->right = new TreeNode(arr[i]);
            q.push(node->right);
        }
        i++;
    }
    return root;
}

int main() {
    vector<int> arr1 = {3,9,20,-1,-1,15,7};
    TreeNode* tree1 = createTree(arr1);
    vector<vector<int>> result1 = levelOrder(tree1);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << "[";
        for (size_t j = 0; j < result1[i].size(); j++) {
            cout << result1[i][j];
            if (j < result1[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    vector<int> arr2 = {1};
    TreeNode* tree2 = createTree(arr2);
    vector<vector<int>> result2 = levelOrder(tree2);
    cout << "[";
    for (size_t i = 0; i < result2.size(); i++) {
        cout << "[";
        for (size_t j = 0; j < result2[i].size(); j++) {
            cout << result2[i][j];
            if (j < result2[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < result2.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    TreeNode* tree3 = createTree({});
    vector<vector<int>> result3 = levelOrder(tree3);
    cout << "[]" << endl;
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

int** levelOrder(struct TreeNode* root, int* returnSize, int** returnColumnSizes) {
    // Write your solution here
    
}

int main() {
    // For C, manual tree construction required
    // Function signature provided
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static IList<IList<int>> LevelOrder(TreeNode root) {
        // Write your solution here
        
    }
    
    static void Main() {
        // For C#, manual tree construction required
        // Function signature provided
    }
}`,

            go: `package main

import "fmt"

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

func levelOrder(root *TreeNode) [][]int {
    // Write your solution here
    
}

func main() {
    // For Go, manual tree construction required
    // Function signature provided
}`,

            rust: `use std::rc::Rc;
use std::cell::RefCell;
use std::collections::VecDeque;

#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

fn level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
    // Write your solution here
    
}

fn main() {
    // For Rust, manual tree construction required
    // Function signature provided
}`,

            ruby: `class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val = 0, left = nil, right = nil)
        @val = val
        @left = left
        @right = right
    end
end

def level_order(root)
    # Write your solution here
    
end

# Test cases would need manual tree construction`,

            php: `<?php
class TreeNode {
    public $val = null;
    public $left = null;
    public $right = null;
    function __construct($val = 0, $left = null, $right = null) {
        $this->val = $val;
        $this->left = $left;
        $this->right = $right;
    }
}

function levelOrder($root) {
    // Write your solution here
    
}

// Test cases would need manual tree construction
?>`,

            swift: `public class TreeNode {
    public var val: Int
    public var left: TreeNode?
    public var right: TreeNode?
    public init() { self.val = 0; self.left = nil; self.right = nil; }
    public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
    public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
        self.val = val
        self.left = left
        self.right = right
    }
}

func levelOrder(_ root: TreeNode?) -> [[Int]] {
    // Write your solution here
    
}

// Test cases would need manual tree construction`,

            kotlin: `import java.util.*

class TreeNode(var \`val\`: Int) {
    var left: TreeNode? = null
    var right: TreeNode? = null
}

fun levelOrder(root: TreeNode?): List<List<Int>> {
    // Write your solution here
    
}

// Helper function to create tree from array
fun createTree(arr: Array<Int?>): TreeNode? {
    if (arr.isEmpty() || arr[0] == null) return null
    val root = TreeNode(arr[0]!!)
    val queue: Queue<TreeNode> = LinkedList()
    queue.offer(root)
    var i = 1
    while (queue.isNotEmpty() && i < arr.size) {
        val node = queue.poll()
        if (i < arr.size && arr[i] != null) {
            node.left = TreeNode(arr[i]!!)
            queue.offer(node.left)
        }
        i++
        if (i < arr.size && arr[i] != null) {
            node.right = TreeNode(arr[i]!!)
            queue.offer(node.right)
        }
        i++
    }
    return root
}

fun main() {
    val tree1 = createTree(arrayOf(3,9,20,null,null,15,7))
    println(levelOrder(tree1)) // Expected: [[3], [9, 20], [15, 7]]
    
    val tree2 = createTree(arrayOf(1))
    println(levelOrder(tree2)) // Expected: [[1]]
    
    val tree3 = createTree(arrayOf<Int?>())
    println(levelOrder(tree3)) // Expected: []
}`,

            scala: `import scala.collection.mutable

class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
    var value: Int = _value
    var left: TreeNode = _left
    var right: TreeNode = _right
}

object Solution {
    def levelOrder(root: TreeNode): List[List[Int]] = {
        // Write your solution here
        
    }
}`,

            perl: `package TreeNode;
sub new {
    my ($class, $val, $left, $right) = @_;
    my $self = {
        val => $val // 0,
        left => $left // undef,
        right => $right // undef
    };
    bless $self, $class;
    return $self;
}

sub levelOrder {
    my $root = shift;
    # Write your solution here
    
}

# Test cases would need manual tree construction`,

            r: `TreeNode <- setRefClass("TreeNode",
    fields = list(val = "numeric", left = "ANY", right = "ANY"),
    methods = list(
        initialize = function(val = 0, left = NULL, right = NULL) {
            .self$val <- val
            .self$left <- left
            .self$right <- right
        }
    )
)

levelOrder <- function(root) {
    # Write your solution here
    
}

# Test cases would need manual tree construction`
        },
        expectedOutput: {
            javascript: "[[3],[9,20],[15,7]]\n[[1]]\n[]",
            python: "[[3], [9, 20], [15, 7]]\n[[1]]\n[]",
            java: "[[3], [9, 20], [15, 7]]\n[[1]]\n[]",
        },
    },

    "course-schedule-ii": {
        id: "course-schedule-ii",
        title: "Course Schedule II",
        difficulty: "Medium",
        category: "Graph • Topological Sort • BFS • DFS",
        description: {
            text: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1. You are given an array prerequisites where prerequisites[i] = [a, b] indicates that you must take course b first if you want to take course a. Return the ordering of courses you should take to finish all courses. If it is impossible to finish all courses, return an empty array.",
            notes: [
                "Return any valid ordering of courses that allows you to finish all courses.",
                "If there is a cycle, return an empty array."
            ],
        },
        examples: [
            {
                input: "numCourses = 2, prerequisites = [[1,0]]",
                output: "[0,1]",
                explanation: "To take course 1 you need to take course 0 first. So the correct order is [0,1].",
            },
            {
                input: "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
                output: "[0,2,1,3] or [0,1,2,3]",
                explanation: "Multiple valid orders exist.",
            },
            {
                input: "numCourses = 1, prerequisites = []",
                output: "[0]",
            },
        ],
        constraints: [
            "1 ≤ numCourses ≤ 2000",
            "0 ≤ prerequisites.length ≤ 5000",
            "prerequisites[i].length == 2",
            "0 ≤ a, b < numCourses",
            "All prerequisite pairs are unique",
        ],
        starterCode: {
            javascript: `function findOrder(numCourses, prerequisites) {
    // Write your solution here
    
}

// Test cases
console.log(findOrder(2, [[1,0]])); // Expected: [0,1]
console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]])); // Expected: [0,1,2,3] or [0,2,1,3]
console.log(findOrder(1, [])); // Expected: [0]`,

            typescript: `function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    // Write your solution here
    
}

// Test cases
console.log(findOrder(2, [[1,0]])); // Expected: [0,1]
console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]])); // Expected: [0,1,2,3] or [0,2,1,3]
console.log(findOrder(1, [])); // Expected: [0]`,

            python: `def findOrder(numCourses, prerequisites):
    # Write your solution here
    pass

# Test cases
print(findOrder(2, [[1,0]]))  # Expected: [0,1]
print(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]))  # Expected: [0,1,2,3] or [0,2,1,3]
print(findOrder(1, []))  # Expected: [0]`,

            java: `import java.util.*;

class Solution {
    public static int[] findOrder(int numCourses, int[][] prerequisites) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(findOrder(2, new int[][]{{1,0}}))); // Expected: [0,1]
        System.out.println(Arrays.toString(findOrder(4, new int[][]{{1,0},{2,0},{3,1},{3,2}}))); // Expected: [0,1,2,3] or [0,2,1,3]
        System.out.println(Arrays.toString(findOrder(1, new int[][]{}))); // Expected: [0]
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
    // Write your solution here
    
}

int main() {
    vector<vector<int>> prereqs1 = {{1,0}};
    vector<int> result1 = findOrder(2, prereqs1);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << result1[i];
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    vector<vector<int>> prereqs2 = {{1,0},{2,0},{3,1},{3,2}};
    vector<int> result2 = findOrder(4, prereqs2);
    cout << "[";
    for (size_t i = 0; i < result2.size(); i++) {
        cout << result2[i];
        if (i < result2.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    vector<vector<int>> prereqs3 = {};
    vector<int> result3 = findOrder(1, prereqs3);
    cout << "[";
    for (size_t i = 0; i < result3.size(); i++) {
        cout << result3[i];
        if (i < result3.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int* findOrder(int numCourses, int** prerequisites, int prerequisitesSize, int* prerequisitesColSize, int* returnSize) {
    // Write your solution here
    
}

int main() {
    // For C, manual test cases required
    // Function signature provided
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int[] FindOrder(int numCourses, int[][] prerequisites) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine($"[{string.Join(",", FindOrder(2, new int[][] { new int[] {1,0} }))}]");
        Console.WriteLine($"[{string.Join(",", FindOrder(4, new int[][] { new int[] {1,0}, new int[] {2,0}, new int[] {3,1}, new int[] {3,2} }))}]");
        Console.WriteLine($"[{string.Join(",", FindOrder(1, new int[][] { }))}]");
    }
}`,

            go: `package main

import "fmt"

func findOrder(numCourses int, prerequisites [][]int) []int {
    // Write your solution here
    
}

func main() {
    fmt.Println(findOrder(2, [][]int{{1,0}})) // Expected: [0 1]
    fmt.Println(findOrder(4, [][]int{{1,0},{2,0},{3,1},{3,2}})) // Expected: [0 1 2 3] or [0 2 1 3]
    fmt.Println(findOrder(1, [][]int{})) // Expected: [0]
}`,

            rust: `use std::collections::{VecDeque, HashMap};

fn find_order(num_courses: i32, prerequisites: Vec<Vec<i32>>) -> Vec<i32> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", find_order(2, vec![vec![1,0]])); // Expected: [0,1]
    println!("{:?}", find_order(4, vec![vec![1,0], vec![2,0], vec![3,1], vec![3,2]])); // Expected: [0,1,2,3] or [0,2,1,3]
    println!("{:?}", find_order(1, vec![])); // Expected: [0]
}`,

            ruby: `def find_order(num_courses, prerequisites)
    # Write your solution here
    
end

# Test cases
puts find_order(2, [[1,0]]).inspect # Expected: [0,1]
puts find_order(4, [[1,0],[2,0],[3,1],[3,2]]).inspect # Expected: [0,1,2,3] or [0,2,1,3]
puts find_order(1, []).inspect # Expected: [0]`,

            php: `<?php
function findOrder($numCourses, $prerequisites) {
    // Write your solution here
    
}

// Test cases
print_r(findOrder(2, [[1,0]]));
print_r(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));
print_r(findOrder(1, []));
?>`,

            swift: `func findOrder(_ numCourses: Int, _ prerequisites: [[Int]]) -> [Int] {
    // Write your solution here
    
}

// Test cases
print(findOrder(2, [[1,0]])) // Expected: [0,1]
print(findOrder(4, [[1,0],[2,0],[3,1],[3,2]])) // Expected: [0,1,2,3] or [0,2,1,3]
print(findOrder(1, [])) // Expected: [0]`,

            kotlin: `import java.util.*

fun findOrder(numCourses: Int, prerequisites: Array<IntArray>): IntArray {
    // Write your solution here
    
}

fun main() {
    println(findOrder(2, arrayOf(intArrayOf(1,0))).joinToString())
    println(findOrder(4, arrayOf(intArrayOf(1,0), intArrayOf(2,0), intArrayOf(3,1), intArrayOf(3,2))).joinToString())
    println(findOrder(1, arrayOf()).joinToString())
}`,

            scala: `import scala.collection.mutable

object Solution {
    def findOrder(numCourses: Int, prerequisites: Array[Array[Int]]): Array[Int] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(findOrder(2, Array(Array(1,0))).mkString(","))
        println(findOrder(4, Array(Array(1,0), Array(2,0), Array(3,1), Array(3,2))).mkString(","))
        println(findOrder(1, Array()).mkString(","))
    }
}`,

            perl: `sub findOrder {
    my ($numCourses, $prerequisites) = @_;
    # Write your solution here
    
}

# Test cases
my @result1 = @{findOrder(2, [[1,0]])};
print "[" . join(",", @result1) . "]\\n";

my @result2 = @{findOrder(4, [[1,0],[2,0],[3,1],[3,2]])};
print "[" . join(",", @result2) . "]\\n";

my @result3 = @{findOrder(1, [])};
print "[" . join(",", @result3) . "]\\n";`,

            r: `findOrder <- function(numCourses, prerequisites) {
    # Write your solution here
    
}

# Test cases
print(findOrder(2, list(c(1,0))))
print(findOrder(4, list(c(1,0), c(2,0), c(3,1), c(3,2))))
print(findOrder(1, list()))`
        },
        expectedOutput: {
            javascript: "[0,1]\n[0,1,2,3]\n[0]",
            python: "[0, 1]\n[0, 1, 2, 3]\n[0]",
            java: "[0, 1]\n[0, 1, 2, 3]\n[0]",
        },
    },

    "find-median-from-data-stream": {
        id: "find-median-from-data-stream",
        title: "Find Median from Data Stream",
        difficulty: "Hard",
        category: "Design • Heap • Data Stream",
        description: {
            text: "The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values. Implement the MedianFinder class that supports adding integers and finding the median in O(log n) time.",
            notes: [
                "addNum(num): Adds the integer num to the data stream.",
                "findMedian(): Returns the median of all elements so far.",
                "Use two heaps (max-heap for left half, min-heap for right half) for optimal performance."
            ],
        },
        examples: [
            {
                input: "MedianFinder mf = new MedianFinder();\nmf.addNum(1);\nmf.addNum(2);\nmf.findMedian();\nmf.addNum(3);\nmf.findMedian();",
                output: "1.5\n2.0",
                explanation: "After adding 1 and 2, median is (1+2)/2 = 1.5. After adding 3, median is 2.0.",
            },
            {
                input: "mf.addNum(1); mf.addNum(2); mf.findMedian();",
                output: "1.5",
            },
        ],
        constraints: [
            "-10⁵ ≤ num ≤ 10⁵",
            "At most 5 * 10⁴ calls will be made to addNum and findMedian",
        ],
        starterCode: {
            javascript: `class MedianFinder {
    constructor() {
        // Write your solution here
        
    }
    
    addNum(num) {
        // Write your solution here
        
    }
    
    findMedian() {
        // Write your solution here
        
    }
}

// Test cases
let mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // Expected: 1.5
mf.addNum(3);
console.log(mf.findMedian()); // Expected: 2.0`,

            typescript: `class MedianFinder {
    constructor() {
        // Write your solution here
        
    }
    
    addNum(num: number): void {
        // Write your solution here
        
    }
    
    findMedian(): number {
        // Write your solution here
        
    }
}

// Test cases
let mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // Expected: 1.5
mf.addNum(3);
console.log(mf.findMedian()); // Expected: 2.0`,

            python: `import heapq

class MedianFinder:
    def __init__(self):
        # Write your solution here
        
    def addNum(self, num: int) -> None:
        # Write your solution here
        
    def findMedian(self) -> float:
        # Write your solution here
        

# Test cases
mf = MedianFinder()
mf.addNum(1)
mf.addNum(2)
print(mf.findMedian())  # Expected: 1.5
mf.addNum(3)
print(mf.findMedian())  # Expected: 2.0`,

            java: `import java.util.*;

class MedianFinder {
    public MedianFinder() {
        // Write your solution here
        
    }
    
    public void addNum(int num) {
        // Write your solution here
        
    }
    
    public double findMedian() {
        // Write your solution here
        
    }

    public static void main(String[] args) {
        MedianFinder mf = new MedianFinder();
        mf.addNum(1);
        mf.addNum(2);
        System.out.println(mf.findMedian()); // Expected: 1.5
        mf.addNum(3);
        System.out.println(mf.findMedian()); // Expected: 2.0
    }
}`,

            cpp: `#include <iostream>
#include <queue>
#include <vector>
using namespace std;

class MedianFinder {
public:
    MedianFinder() {
        // Write your solution here
        
    }
    
    void addNum(int num) {
        // Write your solution here
        
    }
    
    double findMedian() {
        // Write your solution here
        
    }
};

int main() {
    MedianFinder* mf = new MedianFinder();
    mf->addNum(1);
    mf->addNum(2);
    cout << mf->findMedian() << endl; // Expected: 1.5
    mf->addNum(3);
    cout << mf->findMedian() << endl; // Expected: 2.0
    
    delete mf;
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    // Write your solution here
} MedianFinder;

MedianFinder* medianFinderCreate() {
    // Write your solution here
    
}

void medianFinderAddNum(MedianFinder* obj, int num) {
    // Write your solution here
    
}

double medianFinderFindMedian(MedianFinder* obj) {
    // Write your solution here
    
}

void medianFinderFree(MedianFinder* obj) {
    // Write your solution here
    
}

int main() {
    MedianFinder* mf = medianFinderCreate();
    medianFinderAddNum(mf, 1);
    medianFinderAddNum(mf, 2);
    printf("%.1f\\n", medianFinderFindMedian(mf)); // Expected: 1.5
    medianFinderAddNum(mf, 3);
    printf("%.1f\\n", medianFinderFindMedian(mf)); // Expected: 2.0
    medianFinderFree(mf);
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

public class MedianFinder {
    public MedianFinder() {
        // Write your solution here
        
    }
    
    public void AddNum(int num) {
        // Write your solution here
        
    }
    
    public double FindMedian() {
        // Write your solution here
        
    }
}

class Program {
    static void Main() {
        MedianFinder mf = new MedianFinder();
        mf.AddNum(1);
        mf.AddNum(2);
        Console.WriteLine(mf.FindMedian()); // Expected: 1.5
        mf.AddNum(3);
        Console.WriteLine(mf.FindMedian()); // Expected: 2.0
    }
}`,

            go: `package main

import (
    "container/heap"
    "fmt"
)

type MedianFinder struct {
    // Write your solution here
}

func Constructor() MedianFinder {
    // Write your solution here
    
}

func (this *MedianFinder) AddNum(num int) {
    // Write your solution here
    
}

func (this *MedianFinder) FindMedian() float64 {
    // Write your solution here
    
}

func main() {
    mf := Constructor()
    mf.AddNum(1)
    mf.AddNum(2)
    fmt.Println(mf.FindMedian()) // Expected: 1.5
    mf.AddNum(3)
    fmt.Println(mf.FindMedian()) // Expected: 2.0
}`,

            rust: `use std::collections::BinaryHeap;
use std::cmp::Reverse;

struct MedianFinder {
    // Write your solution here
}

impl MedianFinder {
    fn new() -> Self {
        // Write your solution here
        
    }
    
    fn add_num(&mut self, num: i32) {
        // Write your solution here
        
    }
    
    fn find_median(&self) -> f64 {
        // Write your solution here
        
    }
}

fn main() {
    let mut mf = MedianFinder::new();
    mf.add_num(1);
    mf.add_num(2);
    println!("{}", mf.find_median()); // Expected: 1.5
    mf.add_num(3);
    println!("{}", mf.find_median()); // Expected: 2.0
}`,

            ruby: `class MedianFinder
    def initialize()
        # Write your solution here
        
    end

    def add_num(num)
        # Write your solution here
        
    end

    def find_median()
        # Write your solution here
        
    end
end

# Test cases
mf = MedianFinder.new
mf.add_num(1)
mf.add_num(2)
puts mf.find_median() # Expected: 1.5
mf.add_num(3)
puts mf.find_median() # Expected: 2.0`,

            php: `<?php
class MedianFinder {
    function __construct() {
        // Write your solution here
        
    }
  
    function addNum($num) {
        // Write your solution here
        
    }
  
    function findMedian() {
        // Write your solution here
        
    }
}

// Test cases
$mf = new MedianFinder();
$mf->addNum(1);
$mf->addNum(2);
echo $mf->findMedian() . "\\n"; // Expected: 1.5
$mf->addNum(3);
echo $mf->findMedian() . "\\n"; // Expected: 2.0
?>`,

            swift: `class MedianFinder {
    init() {
        // Write your solution here
        
    }
    
    func addNum(_ num: Int) {
        // Write your solution here
        
    }
    
    func findMedian() -> Double {
        // Write your solution here
        
    }
}

// Test cases
let mf = MedianFinder()
mf.addNum(1)
mf.addNum(2)
print(mf.findMedian()) // Expected: 1.5
mf.addNum(3)
print(mf.findMedian()) // Expected: 2.0`,

            kotlin: `import java.util.*

class MedianFinder() {
    // Write your solution here
    
    fun addNum(num: Int) {
        // Write your solution here
        
    }
    
    fun findMedian(): Double {
        // Write your solution here
        
    }
}

fun main() {
    val mf = MedianFinder()
    mf.addNum(1)
    mf.addNum(2)
    println(mf.findMedian()) // Expected: 1.5
    mf.addNum(3)
    println(mf.findMedian()) // Expected: 2.0
}`,

            scala: `import scala.collection.mutable

class MedianFinder() {
    // Write your solution here
    
    def addNum(num: Int): Unit = {
        // Write your solution here
        
    }
    
    def findMedian(): Double = {
        // Write your solution here
        
    }
}

object Main {
    def main(args: Array[String]): Unit = {
        val mf = new MedianFinder()
        mf.addNum(1)
        mf.addNum(2)
        println(mf.findMedian()) // Expected: 1.5
        mf.addNum(3)
        println(mf.findMedian()) // Expected: 2.0
    }
}`,

            perl: `package MedianFinder;
sub new {
    my $class = shift;
    my $self = {};
    bless $self, $class;
    return $self;
}

sub addNum {
    my ($self, $num) = @_;
    # Write your solution here
    
}

sub findMedian {
    my $self = shift;
    # Write your solution here
    
}

package main;
my $mf = MedianFinder->new();
$mf->addNum(1);
$mf->addNum(2);
print $mf->findMedian() . "\\n"; # Expected: 1.5
$mf->addNum(3);
print $mf->findMedian() . "\\n"; # Expected: 2.0`,

            r: `MedianFinder <- setRefClass("MedianFinder",
    fields = list(),
    methods = list(
        initialize = function() {
            # Write your solution here
            
        },
        addNum = function(num) {
            # Write your solution here
            
        },
        findMedian = function() {
            # Write your solution here
            
        }
    )
)

# Test cases
mf <- MedianFinder$new()
mf$addNum(1)
mf$addNum(2)
cat(mf$findMedian(), "\\n") # Expected: 1.5
mf$addNum(3)
cat(mf$findMedian(), "\\n") # Expected: 2.0`
        },
        expectedOutput: {
            javascript: "1.5\n2.0",
            python: "1.5\n2.0",
            java: "1.5\n2.0",
        },
    },

    "subsets": {
        id: "subsets",
        title: "Subsets",
        difficulty: "Medium",
        category: "Array • Backtracking • Bit Manipulation",
        description: {
            text: "Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets.",
            notes: [
                "A subset can be empty.",
                "The result can be in any order.",
                "Use backtracking or bit manipulation to generate all subsets."
            ],
        },
        examples: [
            {
                input: "nums = [1,2,3]",
                output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
            },
            {
                input: "nums = [0]",
                output: "[[],[0]]",
            },
        ],
        constraints: [
            "1 ≤ nums.length ≤ 10",
            "-10 ≤ nums[i] ≤ 10",
            "All elements in nums are unique",
        ],
        starterCode: {
            javascript: `function subsets(nums) {
    // Write your solution here
    
}

// Test cases
console.log(subsets([1,2,3])); // Expected: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])); // Expected: [[],[0]]`,

            typescript: `function subsets(nums: number[]): number[][] {
    // Write your solution here
    
}

// Test cases
console.log(subsets([1,2,3])); // Expected: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])); // Expected: [[],[0]]`,

            python: `def subsets(nums):
    # Write your solution here
    pass

# Test cases
print(subsets([1,2,3]))  # Expected: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
print(subsets([0]))  # Expected: [[],[0]]`,

            java: `import java.util.*;

class Solution {
    public static List<List<Integer>> subsets(int[] nums) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(subsets(new int[]{1,2,3})); 
        // Expected: [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
        System.out.println(subsets(new int[]{0})); // Expected: [[], [0]]
    }
}`,

            cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> subsets(vector<int>& nums) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {1,2,3};
    vector<vector<int>> result1 = subsets(nums1);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << "[";
        for (size_t j = 0; j < result1[i].size(); j++) {
            cout << result1[i][j];
            if (j < result1[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    vector<int> nums2 = {0};
    vector<vector<int>> result2 = subsets(nums2);
    cout << "[";
    for (size_t i = 0; i < result2.size(); i++) {
        cout << "[";
        for (size_t j = 0; j < result2[i].size(); j++) {
            cout << result2[i][j];
            if (j < result2[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < result2.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int** subsets(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {1,2,3};
    int returnSize1;
    int** returnColumnSizes1;
    int** result1 = subsets(nums1, 3, &returnSize1, &returnColumnSizes1);
    printf("[");
    for (int i = 0; i < returnSize1; i++) {
        printf("[");
        for (int j = 0; j < returnColumnSizes1[i]; j++) {
            printf("%d", result1[i][j]);
            if (j < returnColumnSizes1[i] - 1) printf(",");
        }
        printf("]");
        if (i < returnSize1 - 1) printf(",");
    }
    printf("]\\n");
    
    int nums2[] = {0};
    int returnSize2;
    int** returnColumnSizes2;
    int** result2 = subsets(nums2, 1, &returnSize2, &returnColumnSizes2);
    printf("[");
    for (int i = 0; i < returnSize2; i++) {
        printf("[");
        for (int j = 0; j < returnColumnSizes2[i]; j++) {
            printf("%d", result2[i][j]);
            if (j < returnColumnSizes2[i] - 1) printf(",");
        }
        printf("]");
        if (i < returnSize2 - 1) printf(",");
    }
    printf("]\\n");
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<IList<int>> Subsets(int[] nums) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine($"[{string.Join(",", Subsets(new int[] {1,2,3}).Select(x => $"[{string.Join(",", x)}]"))}]");
        Console.WriteLine($"[{string.Join(",", Subsets(new int[] {0}).Select(x => $"[{string.Join(",", x)}]"))}]");
    }
}`,

            go: `package main

import "fmt"

func subsets(nums []int) [][]int {
    // Write your solution here
    
}

func main() {
    fmt.Println(subsets([]int{1,2,3})) // Expected: [[] [1] [2] [1 2] [3] [1 3] [2 3] [1 2 3]]
    fmt.Println(subsets([]int{0})) // Expected: [[] [0]]
}`,

            rust: `fn subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", subsets(vec![1,2,3]));
    println!("{:?}", subsets(vec![0]));
}`,

            ruby: `def subsets(nums)
    # Write your solution here
    
end

# Test cases
puts subsets([1,2,3]).inspect # Expected: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
puts subsets([0]).inspect # Expected: [[],[0]]`,

            php: `<?php
function subsets($nums) {
    // Write your solution here
    
}

// Test cases
print_r(subsets([1,2,3]));
print_r(subsets([0]));
?>`,

            swift: `func subsets(_ nums: [Int]) -> [[Int]] {
    // Write your solution here
    
}

// Test cases
print(subsets([1,2,3]))
print(subsets([0]))`,

            kotlin: `fun subsets(nums: IntArray): List<List<Int>> {
    // Write your solution here
    
}

fun main() {
    println(subsets(intArrayOf(1,2,3)))
    println(subsets(intArrayOf(0)))
}`,

            scala: `import scala.collection.mutable.ListBuffer

object Solution {
    def subsets(nums: Array[Int]): List[List[Int]] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(subsets(Array(1,2,3)))
        println(subsets(Array(0)))
    }
}`,

            perl: `sub subsets {
    my $nums = shift;
    # Write your solution here
    
}

# Test cases
my @result1 = @{subsets([1,2,3])};
print "[";
for my $i (0..$#result1) {
    print "[" . join(",", @{$result1[$i]}) . "]";
    print "," if $i < $#result1;
}
print "]\\n";

my @result2 = @{subsets([0])};
print "[";
for my $i (0..$#result2) {
    print "[" . join(",", @{$result2[$i]}) . "]";
    print "," if $i < $#result2;
}
print "]\\n";`,

            r: `subsets <- function(nums) {
    # Write your solution here
    
}

# Test cases
print(subsets(c(1,2,3)))
print(subsets(c(0)))`
        },
        expectedOutput: {
            javascript: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]\n[[],[0]]",
            python: "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]\n[[], [0]]",
            java: "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]\n[[], [0]]",
        },
    },

    "first-missing-positive": {
        id: "first-missing-positive",
        title: "First Missing Positive",
        difficulty: "Hard",
        category: "Array • Hash Table",
        description: {
            text: "Given an unsorted integer array nums, return the smallest missing positive integer. You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.",
            notes: [
                "The smallest positive integer that is not present in the array.",
                "The algorithm must run in O(n) time and O(1) extra space."
            ],
        },
        examples: [
            {
                input: "nums = [1,2,0]",
                output: "3",
                explanation: "The numbers 1 and 2 are present, so the smallest missing positive is 3.",
            },
            {
                input: "nums = [3,4,-1,1]",
                output: "2",
                explanation: "1 is present, 2 is missing.",
            },
            {
                input: "nums = [7,8,9,11,12]",
                output: "1",
                explanation: "1 is the smallest positive integer and it's missing.",
            },
        ],
        constraints: [
            "1 ≤ nums.length ≤ 10⁵",
            "-2³¹ ≤ nums[i] ≤ 2³¹ - 1",
        ],
        starterCode: {
            javascript: `function firstMissingPositive(nums) {
    // Write your solution here
    
}

// Test cases
console.log(firstMissingPositive([1,2,0])); // Expected: 3
console.log(firstMissingPositive([3,4,-1,1])); // Expected: 2
console.log(firstMissingPositive([7,8,9,11,12])); // Expected: 1`,

            typescript: `function firstMissingPositive(nums: number[]): number {
    // Write your solution here
    
}

// Test cases
console.log(firstMissingPositive([1,2,0])); // Expected: 3
console.log(firstMissingPositive([3,4,-1,1])); // Expected: 2
console.log(firstMissingPositive([7,8,9,11,12])); // Expected: 1`,

            python: `def firstMissingPositive(nums):
    # Write your solution here
    pass

# Test cases
print(firstMissingPositive([1,2,0]))  # Expected: 3
print(firstMissingPositive([3,4,-1,1]))  # Expected: 2
print(firstMissingPositive([7,8,9,11,12]))  # Expected: 1`,

            java: `import java.util.*;

class Solution {
    public static int firstMissingPositive(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(firstMissingPositive(new int[]{1,2,0})); // Expected: 3
        System.out.println(firstMissingPositive(new int[]{3,4,-1,1})); // Expected: 2
        System.out.println(firstMissingPositive(new int[]{7,8,9,11,12})); // Expected: 1
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int firstMissingPositive(vector<int>& nums) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {1,2,0};
    cout << firstMissingPositive(nums1) << endl; // Expected: 3
    
    vector<int> nums2 = {3,4,-1,1};
    cout << firstMissingPositive(nums2) << endl; // Expected: 2
    
    vector<int> nums3 = {7,8,9,11,12};
    cout << firstMissingPositive(nums3) << endl; // Expected: 1
    
    return 0;
}`,

            c: `#include <stdio.h>

int firstMissingPositive(int* nums, int numsSize) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {1,2,0};
    printf("%d\\n", firstMissingPositive(nums1, 3)); // Expected: 3
    
    int nums2[] = {3,4,-1,1};
    printf("%d\\n", firstMissingPositive(nums2, 4)); // Expected: 2
    
    int nums3[] = {7,8,9,11,12};
    printf("%d\\n", firstMissingPositive(nums3, 5)); // Expected: 1
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int FirstMissingPositive(int[] nums) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(FirstMissingPositive(new int[] {1,2,0})); // Expected: 3
        Console.WriteLine(FirstMissingPositive(new int[] {3,4,-1,1})); // Expected: 2
        Console.WriteLine(FirstMissingPositive(new int[] {7,8,9,11,12})); // Expected: 1
    }
}`,

            go: `package main

import "fmt"

func firstMissingPositive(nums []int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(firstMissingPositive([]int{1,2,0})) // Expected: 3
    fmt.Println(firstMissingPositive([]int{3,4,-1,1})) // Expected: 2
    fmt.Println(firstMissingPositive([]int{7,8,9,11,12})) // Expected: 1
}`,

            rust: `fn first_missing_positive(nums: Vec<i32>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", first_missing_positive(vec![1,2,0])); // Expected: 3
    println!("{}", first_missing_positive(vec![3,4,-1,1])); // Expected: 2
    println!("{}", first_missing_positive(vec![7,8,9,11,12])); // Expected: 1
}`,

            ruby: `def first_missing_positive(nums)
    # Write your solution here
    
end

# Test cases
puts first_missing_positive([1,2,0]) # Expected: 3
puts first_missing_positive([3,4,-1,1]) # Expected: 2
puts first_missing_positive([7,8,9,11,12]) # Expected: 1`,

            php: `<?php
function firstMissingPositive($nums) {
    // Write your solution here
    
}

// Test cases
echo firstMissingPositive([1,2,0]) . "\\n"; // Expected: 3
echo firstMissingPositive([3,4,-1,1]) . "\\n"; // Expected: 2
echo firstMissingPositive([7,8,9,11,12]) . "\\n"; // Expected: 1
?>`,

            swift: `func firstMissingPositive(_ nums: [Int]) -> Int {
    // Write your solution here
    
}

// Test cases
print(firstMissingPositive([1,2,0])) // Expected: 3
print(firstMissingPositive([3,4,-1,1])) // Expected: 2
print(firstMissingPositive([7,8,9,11,12])) // Expected: 1`,

            kotlin: `fun firstMissingPositive(nums: IntArray): Int {
    // Write your solution here
    
}

fun main() {
    println(firstMissingPositive(intArrayOf(1,2,0))) // Expected: 3
    println(firstMissingPositive(intArrayOf(3,4,-1,1))) // Expected: 2
    println(firstMissingPositive(intArrayOf(7,8,9,11,12))) // Expected: 1
}`,

            scala: `object Solution {
    def firstMissingPositive(nums: Array[Int]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(firstMissingPositive(Array(1,2,0))) // Expected: 3
        println(firstMissingPositive(Array(3,4,-1,1))) // Expected: 2
        println(firstMissingPositive(Array(7,8,9,11,12))) // Expected: 1
    }
}`,

            perl: `sub firstMissingPositive {
    my $nums = shift;
    # Write your solution here
    
}

# Test cases
print firstMissingPositive([1,2,0]) . "\\n"; # Expected: 3
print firstMissingPositive([3,4,-1,1]) . "\\n"; # Expected: 2
print firstMissingPositive([7,8,9,11,12]) . "\\n"; # Expected: 1`,

            r: `firstMissingPositive <- function(nums) {
    # Write your solution here
    
}

# Test cases
print(firstMissingPositive(c(1,2,0))) # Expected: 3
print(firstMissingPositive(c(3,4,-1,1))) # Expected: 2
print(firstMissingPositive(c(7,8,9,11,12))) # Expected: 1`
        },
        expectedOutput: {
            javascript: "3\n2\n1",
            python: "3\n2\n1",
            java: "3\n2\n1",
        },
    },

    "clone-graph": {
        id: "clone-graph",
        title: "Clone Graph",
        difficulty: "Medium",
        category: "Graph • DFS • BFS • Hash Table",
        description: {
            text: "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node in the graph contains a value (int) and a list of its neighbors.",
            notes: [
                "You must return a deep copy of the entire graph.",
                "Use BFS or DFS with a hash map to track cloned nodes."
            ],
        },
        examples: [
            {
                input: "adjList = [[2,4],[1,3],[2,4],[1,3]]",
                output: "[[2,4],[1,3],[2,4],[1,3]]",
                explanation: "Node 1's neighbors: 2, 4; Node 2's neighbors: 1, 3; Node 3's neighbors: 2, 4; Node 4's neighbors: 1, 3",
            },
            {
                input: "adjList = [[]]",
                output: "[[]]",
                explanation: "Single node with no neighbors.",
            },
            {
                input: "adjList = []",
                output: "[]",
                explanation: "Empty graph.",
            },
        ],
        constraints: [
            "The number of nodes in the graph is in the range [0, 100]",
            "1 ≤ Node.val ≤ 100",
            "Node.val is unique for each node",
            "No repeated edges",
            "Graph is connected",
        ],
        starterCode: {
            javascript: `function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

function cloneGraph(node) {
    // Write your solution here
    
}

// Helper function to create graph from adjacency list
function createGraph(adjList) {
    if (!adjList.length) return null;
    const nodes = new Map();
    for (let i = 1; i <= adjList.length; i++) {
        nodes.set(i, new Node(i));
    }
    for (let i = 0; i < adjList.length; i++) {
        const node = nodes.get(i + 1);
        for (const neighbor of adjList[i]) {
            node.neighbors.push(nodes.get(neighbor));
        }
    }
    return nodes.get(1);
}

// Helper function to convert graph to adjacency list
function graphToAdjList(node) {
    if (!node) return [];
    const result = [];
    const visited = new Set();
    const queue = [node];
    const nodeMap = new Map();
    
    while (queue.length) {
        const curr = queue.shift();
        if (visited.has(curr.val)) continue;
        visited.add(curr.val);
        nodeMap.set(curr.val, curr);
        for (const neighbor of curr.neighbors) {
            if (!visited.has(neighbor.val)) {
                queue.push(neighbor);
            }
        }
    }
    
    for (let i = 1; i <= visited.size; i++) {
        const curr = nodeMap.get(i);
        result.push(curr.neighbors.map(n => n.val));
    }
    return result;
}

// Test cases
let adjList1 = [[2,4],[1,3],[2,4],[1,3]];
let graph1 = createGraph(adjList1);
let cloned1 = cloneGraph(graph1);
console.log(graphToAdjList(cloned1)); // Expected: [[2,4],[1,3],[2,4],[1,3]]

let adjList2 = [[]];
let graph2 = createGraph(adjList2);
let cloned2 = cloneGraph(graph2);
console.log(graphToAdjList(cloned2)); // Expected: [[]]

let graph3 = null;
let cloned3 = cloneGraph(graph3);
console.log(graphToAdjList(cloned3)); // Expected: []`,

            typescript: `class Node {
    val: number;
    neighbors: Node[];
    constructor(val?: number, neighbors?: Node[]) {
        this.val = (val === undefined ? 0 : val);
        this.neighbors = (neighbors === undefined ? [] : neighbors);
    }
}

function cloneGraph(node: Node | null): Node | null {
    // Write your solution here
    
}

// Helper function to create graph from adjacency list
function createGraph(adjList: number[][]): Node | null {
    if (!adjList.length) return null;
    const nodes = new Map<number, Node>();
    for (let i = 1; i <= adjList.length; i++) {
        nodes.set(i, new Node(i));
    }
    for (let i = 0; i < adjList.length; i++) {
        const node = nodes.get(i + 1)!;
        for (const neighbor of adjList[i]) {
            node.neighbors.push(nodes.get(neighbor)!);
        }
    }
    return nodes.get(1)!;
}

// Helper function to convert graph to adjacency list
function graphToAdjList(node: Node | null): number[][] {
    if (!node) return [];
    const result: number[][] = [];
    const visited = new Set<number>();
    const queue: Node[] = [node];
    const nodeMap = new Map<number, Node>();
    
    while (queue.length) {
        const curr = queue.shift()!;
        if (visited.has(curr.val)) continue;
        visited.add(curr.val);
        nodeMap.set(curr.val, curr);
        for (const neighbor of curr.neighbors) {
            if (!visited.has(neighbor.val)) {
                queue.push(neighbor);
            }
        }
    }
    
    for (let i = 1; i <= visited.size; i++) {
        const curr = nodeMap.get(i)!;
        result.push(curr.neighbors.map(n => n.val));
    }
    return result;
}

// Test cases
let adjList1 = [[2,4],[1,3],[2,4],[1,3]];
let graph1 = createGraph(adjList1);
let cloned1 = cloneGraph(graph1);
console.log(graphToAdjList(cloned1)); // Expected: [[2,4],[1,3],[2,4],[1,3]]

let adjList2 = [[]];
let graph2 = createGraph(adjList2);
let cloned2 = cloneGraph(graph2);
console.log(graphToAdjList(cloned2)); // Expected: [[]]

let graph3 = null;
let cloned3 = cloneGraph(graph3);
console.log(graphToAdjList(cloned3)); // Expected: []`,

            python: `class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

def cloneGraph(node):
    # Write your solution here
    pass

# Helper function to create graph from adjacency list
def createGraph(adjList):
    if not adjList:
        return None
    nodes = {}
    for i in range(1, len(adjList) + 1):
        nodes[i] = Node(i)
    for i, neighbors in enumerate(adjList, 1):
        for neighbor in neighbors:
            nodes[i].neighbors.append(nodes[neighbor])
    return nodes[1]

# Helper function to convert graph to adjacency list
def graphToAdjList(node):
    if not node:
        return []
    result = []
    visited = set()
    queue = [node]
    nodeMap = {}
    
    while queue:
        curr = queue.pop(0)
        if curr.val in visited:
            continue
        visited.add(curr.val)
        nodeMap[curr.val] = curr
        for neighbor in curr.neighbors:
            if neighbor.val not in visited:
                queue.append(neighbor)
    
    for i in range(1, len(visited) + 1):
        curr = nodeMap[i]
        result.append([n.val for n in curr.neighbors])
    return result

# Test cases
adjList1 = [[2,4],[1,3],[2,4],[1,3]]
graph1 = createGraph(adjList1)
cloned1 = cloneGraph(graph1)
print(graphToAdjList(cloned1))  # Expected: [[2,4],[1,3],[2,4],[1,3]]

adjList2 = [[]]
graph2 = createGraph(adjList2)
cloned2 = cloneGraph(graph2)
print(graphToAdjList(cloned2))  # Expected: [[]]

graph3 = None
cloned3 = cloneGraph(graph3)
print(graphToAdjList(cloned3))  # Expected: []`,

            java: `import java.util.*;

class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}

class Solution {
    public static Node cloneGraph(Node node) {
        // Write your solution here
        
        return null;
    }
    
    // Helper function to create graph from adjacency list
    public static Node createGraph(int[][] adjList) {
        if (adjList.length == 0) return null;
        Map<Integer, Node> nodes = new HashMap<>();
        for (int i = 1; i <= adjList.length; i++) {
            nodes.put(i, new Node(i));
        }
        for (int i = 0; i < adjList.length; i++) {
            Node node = nodes.get(i + 1);
            for (int neighbor : adjList[i]) {
                node.neighbors.add(nodes.get(neighbor));
            }
        }
        return nodes.get(1);
    }
    
    // Helper function to convert graph to adjacency list
    public static List<List<Integer>> graphToAdjList(Node node) {
        if (node == null) return new ArrayList<>();
        List<List<Integer>> result = new ArrayList<>();
        Set<Integer> visited = new HashSet<>();
        Queue<Node> queue = new LinkedList<>();
        queue.offer(node);
        Map<Integer, Node> nodeMap = new HashMap<>();
        
        while (!queue.isEmpty()) {
            Node curr = queue.poll();
            if (visited.contains(curr.val)) continue;
            visited.add(curr.val);
            nodeMap.put(curr.val, curr);
            for (Node neighbor : curr.neighbors) {
                if (!visited.contains(neighbor.val)) {
                    queue.offer(neighbor);
                }
            }
        }
        
        for (int i = 1; i <= visited.size(); i++) {
            Node curr = nodeMap.get(i);
            List<Integer> neighbors = new ArrayList<>();
            for (Node neighbor : curr.neighbors) {
                neighbors.add(neighbor.val);
            }
            result.add(neighbors);
        }
        return result;
    }
    
    public static void main(String[] args) {
        int[][] adjList1 = {{2,4},{1,3},{2,4},{1,3}};
        Node graph1 = createGraph(adjList1);
        Node cloned1 = cloneGraph(graph1);
        System.out.println(graphToAdjList(cloned1)); // Expected: [[2,4],[1,3],[2,4],[1,3]]
        
        int[][] adjList2 = {{}};
        Node graph2 = createGraph(adjList2);
        Node cloned2 = cloneGraph(graph2);
        System.out.println(graphToAdjList(cloned2)); // Expected: [[]]
        
        Node graph3 = null;
        Node cloned3 = cloneGraph(graph3);
        System.out.println(graphToAdjList(cloned3)); // Expected: []
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <queue>
using namespace std;

class Node {
public:
    int val;
    vector<Node*> neighbors;
    Node() {
        val = 0;
        neighbors = vector<Node*>();
    }
    Node(int _val) {
        val = _val;
        neighbors = vector<Node*>();
    }
    Node(int _val, vector<Node*> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
};

Node* cloneGraph(Node* node) {
    // Write your solution here
    
}

int main() {
    // For C++, manual graph construction required
    // Function signature provided
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int val;
    int numNeighbors;
    struct Node** neighbors;
};

struct Node* cloneGraph(struct Node* node) {
    // Write your solution here
    
}

int main() {
    // For C, manual graph construction required
    // Function signature provided
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

public class Node {
    public int val;
    public IList<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new List<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new List<Node>();
    }
    public Node(int _val, List<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}

class Solution {
    public static Node CloneGraph(Node node) {
        // Write your solution here
        
    }
    
    static void Main() {
        // For C#, manual graph construction required
        // Function signature provided
    }
}`,

            go: `package main

type Node struct {
    Val int
    Neighbors []*Node
}

func cloneGraph(node *Node) *Node {
    // Write your solution here
    
}

func main() {
    // For Go, manual graph construction required
    // Function signature provided
}`,

            rust: `use std::collections::HashMap;
use std::rc::Rc;
use std::cell::RefCell;

#[derive(Debug, PartialEq, Eq)]
struct Node {
    val: i32,
    neighbors: Vec<Option<Rc<RefCell<Node>>>>,
}

impl Node {
    fn new(val: i32) -> Self {
        Node {
            val,
            neighbors: Vec::new(),
        }
    }
}

fn clone_graph(node: Option<Rc<RefCell<Node>>>) -> Option<Rc<RefCell<Node>>> {
    // Write your solution here
    
}

fn main() {
    // For Rust, manual graph construction required
    // Function signature provided
}`,

            ruby: `class Node
    attr_accessor :val, :neighbors
    def initialize(val = 0, neighbors = nil)
        @val = val
        @neighbors = neighbors || []
    end
end

def clone_graph(node)
    # Write your solution here
    
end

# Test cases would need manual graph construction`,

            php: `<?php
class Node {
    public $val;
    public $neighbors;
    function __construct($val = 0, $neighbors = null) {
        $this->val = $val;
        $this->neighbors = $neighbors === null ? [] : $neighbors;
    }
}

function cloneGraph($node) {
    // Write your solution here
    
}

// Test cases would need manual graph construction
?>`,

            swift: `public class Node {
    public var val: Int
    public var neighbors: [Node?]
    public init(_ val: Int) {
        self.val = val
        self.neighbors = []
    }
}

func cloneGraph(_ node: Node?) -> Node? {
    // Write your solution here
    
}

// Test cases would need manual graph construction`,

            kotlin: `class Node(var \`val\`: Int) {
    var neighbors: ArrayList<Node?> = ArrayList()
}

fun cloneGraph(node: Node?): Node? {
    // Write your solution here
    
}

// Test cases would need manual graph construction`,

            scala: `import scala.collection.mutable

class Node(var _value: Int) {
    var value: Int = _value
    var neighbors: List[Node] = List()
}

object Solution {
    def cloneGraph(node: Node): Node = {
        // Write your solution here
        
    }
}`,

            perl: `package Node;
sub new {
    my ($class, $val, $neighbors) = @_;
    my $self = {
        val => $val // 0,
        neighbors => $neighbors // []
    };
    bless $self, $class;
    return $self;
}

sub cloneGraph {
    my $node = shift;
    # Write your solution here
    
}

# Test cases would need manual graph construction`,

            r: `Node <- setRefClass("Node",
    fields = list(val = "numeric", neighbors = "list"),
    methods = list(
        initialize = function(val = 0, neighbors = list()) {
            .self$val <- val
            .self$neighbors <- neighbors
        }
    )
)

cloneGraph <- function(node) {
    # Write your solution here
    
}

# Test cases would need manual graph construction`
        },
        expectedOutput: {
            javascript: "[[2,4],[1,3],[2,4],[1,3]]\n[[]]\n[]",
            python: "[[2,4],[1,3],[2,4],[1,3]]\n[[]]\n[]",
            java: "[[2,4],[1,3],[2,4],[1,3]]\n[[]]\n[]"
        },
    },

    "min-stack": {
        id: "min-stack",
        title: "Min Stack",
        difficulty: "Medium",
        category: "Stack • Design",
        description: {
            text: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. Implement the MinStack class with the following operations in O(1) time complexity.",
            notes: [
                "push(val): Push element val onto stack.",
                "pop(): Remove the element on top of the stack.",
                "top(): Get the top element.",
                "getMin(): Retrieve the minimum element in the stack.",
                "All operations must run in O(1) time."
            ],
        },
        examples: [
            {
                input: "MinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin();\nminStack.pop();\nminStack.top();\nminStack.getMin();",
                output: "-3\n0\n-2",
                explanation: "After pushing -2, 0, -3, getMin returns -3. After pop, top returns 0, getMin returns -2.",
            },
        ],
        constraints: [
            "-2³¹ ≤ val ≤ 2³¹ - 1",
            "Methods pop, top and getMin will always be called on non-empty stacks",
            "At most 3 * 10⁴ calls will be made to push, pop, top, and getMin",
        ],
        starterCode: {
            javascript: `class MinStack {
    constructor() {
        // Write your solution here
        
    }
    
    push(val) {
        // Write your solution here
        
    }
    
    pop() {
        // Write your solution here
        
    }
    
    top() {
        // Write your solution here
        
    }
    
    getMin() {
        // Write your solution here
        
    }
}

// Test cases
let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Expected: -3
minStack.pop();
console.log(minStack.top()); // Expected: 0
console.log(minStack.getMin()); // Expected: -2`,

            typescript: `class MinStack {
    constructor() {
        // Write your solution here
        
    }
    
    push(val: number): void {
        // Write your solution here
        
    }
    
    pop(): void {
        // Write your solution here
        
    }
    
    top(): number {
        // Write your solution here
        
    }
    
    getMin(): number {
        // Write your solution here
        
    }
}

// Test cases
let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Expected: -3
minStack.pop();
console.log(minStack.top()); // Expected: 0
console.log(minStack.getMin()); // Expected: -2`,

            python: `class MinStack:
    def __init__(self):
        # Write your solution here
        
    def push(self, val: int) -> None:
        # Write your solution here
        
    def pop(self) -> None:
        # Write your solution here
        
    def top(self) -> int:
        # Write your solution here
        
    def getMin(self) -> int:
        # Write your solution here
        

# Test cases
minStack = MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
print(minStack.getMin())  # Expected: -3
minStack.pop()
print(minStack.top())  # Expected: 0
print(minStack.getMin())  # Expected: -2`,

            java: `import java.util.*;

class MinStack {
    public MinStack() {
        // Write your solution here
        
    }
    
    public void push(int val) {
        // Write your solution here
        
    }
    
    public void pop() {
        // Write your solution here
        
    }
    
    public int top() {
        // Write your solution here
        
    }
    
    public int getMin() {
        // Write your solution here
        
    }

    public static void main(String[] args) {
        MinStack minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        System.out.println(minStack.getMin()); // Expected: -3
        minStack.pop();
        System.out.println(minStack.top()); // Expected: 0
        System.out.println(minStack.getMin()); // Expected: -2
    }
}`,

            cpp: `#include <iostream>
#include <stack>
using namespace std;

class MinStack {
public:
    MinStack() {
        // Write your solution here
        
    }
    
    void push(int val) {
        // Write your solution here
        
    }
    
    void pop() {
        // Write your solution here
        
    }
    
    int top() {
        // Write your solution here
        
    }
    
    int getMin() {
        // Write your solution here
        
    }
};

int main() {
    MinStack* minStack = new MinStack();
    minStack->push(-2);
    minStack->push(0);
    minStack->push(-3);
    cout << minStack->getMin() << endl; // Expected: -3
    minStack->pop();
    cout << minStack->top() << endl; // Expected: 0
    cout << minStack->getMin() << endl; // Expected: -2
    
    delete minStack;
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    // Write your solution here
} MinStack;

MinStack* minStackCreate() {
    // Write your solution here
    
}

void minStackPush(MinStack* obj, int val) {
    // Write your solution here
    
}

void minStackPop(MinStack* obj) {
    // Write your solution here
    
}

int minStackTop(MinStack* obj) {
    // Write your solution here
    
}

int minStackGetMin(MinStack* obj) {
    // Write your solution here
    
}

void minStackFree(MinStack* obj) {
    // Write your solution here
    
}

int main() {
    MinStack* minStack = minStackCreate();
    minStackPush(minStack, -2);
    minStackPush(minStack, 0);
    minStackPush(minStack, -3);
    printf("%d\\n", minStackGetMin(minStack)); // Expected: -3
    minStackPop(minStack);
    printf("%d\\n", minStackTop(minStack)); // Expected: 0
    printf("%d\\n", minStackGetMin(minStack)); // Expected: -2
    minStackFree(minStack);
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

public class MinStack {
    public MinStack() {
        // Write your solution here
        
    }
    
    public void Push(int val) {
        // Write your solution here
        
    }
    
    public void Pop() {
        // Write your solution here
        
    }
    
    public int Top() {
        // Write your solution here
        
    }
    
    public int GetMin() {
        // Write your solution here
        
    }
}

class Program {
    static void Main() {
        MinStack minStack = new MinStack();
        minStack.Push(-2);
        minStack.Push(0);
        minStack.Push(-3);
        Console.WriteLine(minStack.GetMin()); // Expected: -3
        minStack.Pop();
        Console.WriteLine(minStack.Top()); // Expected: 0
        Console.WriteLine(minStack.GetMin()); // Expected: -2
    }
}`,

            go: `package main

import "fmt"

type MinStack struct {
    // Write your solution here
}

func Constructor() MinStack {
    // Write your solution here
    
}

func (this *MinStack) Push(val int) {
    // Write your solution here
    
}

func (this *MinStack) Pop() {
    // Write your solution here
    
}

func (this *MinStack) Top() int {
    // Write your solution here
    
}

func (this *MinStack) GetMin() int {
    // Write your solution here
    
}

func main() {
    minStack := Constructor()
    minStack.Push(-2)
    minStack.Push(0)
    minStack.Push(-3)
    fmt.Println(minStack.GetMin()) // Expected: -3
    minStack.Pop()
    fmt.Println(minStack.Top()) // Expected: 0
    fmt.Println(minStack.GetMin()) // Expected: -2
}`,

            rust: `struct MinStack {
    // Write your solution here
}

impl MinStack {
    fn new() -> Self {
        // Write your solution here
        
    }
    
    fn push(&mut self, val: i32) {
        // Write your solution here
        
    }
    
    fn pop(&mut self) {
        // Write your solution here
        
    }
    
    fn top(&self) -> i32 {
        // Write your solution here
        
    }
    
    fn get_min(&self) -> i32 {
        // Write your solution here
        
    }
}

fn main() {
    let mut minStack = MinStack::new();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    println!("{}", minStack.get_min()); // Expected: -3
    minStack.pop();
    println!("{}", minStack.top()); // Expected: 0
    println!("{}", minStack.get_min()); // Expected: -2
}`,

            ruby: `class MinStack
    def initialize()
        # Write your solution here
        
    end

    def push(val)
        # Write your solution here
        
    end

    def pop()
        # Write your solution here
        
    end

    def top()
        # Write your solution here
        
    end

    def get_min()
        # Write your solution here
        
    end
end

# Test cases
minStack = MinStack.new
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
puts minStack.get_min() # Expected: -3
minStack.pop()
puts minStack.top() # Expected: 0
puts minStack.get_min() # Expected: -2`,

            php: `<?php
class MinStack {
    function __construct() {
        // Write your solution here
        
    }
  
    function push($val) {
        // Write your solution here
        
    }
  
    function pop() {
        // Write your solution here
        
    }
  
    function top() {
        // Write your solution here
        
    }
  
    function getMin() {
        // Write your solution here
        
    }
}

// Test cases
$minStack = new MinStack();
$minStack->push(-2);
$minStack->push(0);
$minStack->push(-3);
echo $minStack->getMin() . "\\n"; // Expected: -3
$minStack->pop();
echo $minStack->top() . "\\n"; // Expected: 0
echo $minStack->getMin() . "\\n"; // Expected: -2
?>`,

            swift: `class MinStack {
    init() {
        // Write your solution here
        
    }
    
    func push(_ val: Int) {
        // Write your solution here
        
    }
    
    func pop() {
        // Write your solution here
        
    }
    
    func top() -> Int {
        // Write your solution here
        
    }
    
    func getMin() -> Int {
        // Write your solution here
        
    }
}

// Test cases
let minStack = MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
print(minStack.getMin()) // Expected: -3
minStack.pop()
print(minStack.top()) // Expected: 0
print(minStack.getMin()) // Expected: -2`,

            kotlin: `class MinStack() {
    // Write your solution here
    
    fun push(value: Int) {
        // Write your solution here
        
    }
    
    fun pop() {
        // Write your solution here
        
    }
    
    fun top(): Int {
        // Write your solution here
        
    }
    
    fun getMin(): Int {
        // Write your solution here
        
    }
}

fun main() {
    val minStack = MinStack()
    minStack.push(-2)
    minStack.push(0)
    minStack.push(-3)
    println(minStack.getMin()) // Expected: -3
    minStack.pop()
    println(minStack.top()) // Expected: 0
    println(minStack.getMin()) // Expected: -2
}`,

            scala: `import scala.collection.mutable

class MinStack() {
    // Write your solution here
    
    def push(value: Int): Unit = {
        // Write your solution here
        
    }
    
    def pop(): Unit = {
        // Write your solution here
        
    }
    
    def top(): Int = {
        // Write your solution here
        
    }
    
    def getMin(): Int = {
        // Write your solution here
        
    }
}

object Main {
    def main(args: Array[String]): Unit = {
        val minStack = new MinStack()
        minStack.push(-2)
        minStack.push(0)
        minStack.push(-3)
        println(minStack.getMin()) // Expected: -3
        minStack.pop()
        println(minStack.top()) // Expected: 0
        println(minStack.getMin()) // Expected: -2
    }
}`,

            perl: `package MinStack;
sub new {
    my $class = shift;
    my $self = {};
    bless $self, $class;
    return $self;
}

sub push {
    my ($self, $val) = @_;
    # Write your solution here
    
}

sub pop {
    my $self = shift;
    # Write your solution here
    
}

sub top {
    my $self = shift;
    # Write your solution here
    
}

sub getMin {
    my $self = shift;
    # Write your solution here
    
}

package main;
my $minStack = MinStack->new();
$minStack->push(-2);
$minStack->push(0);
$minStack->push(-3);
print $minStack->getMin() . "\\n"; # Expected: -3
$minStack->pop();
print $minStack->top() . "\\n"; # Expected: 0
print $minStack->getMin() . "\\n"; # Expected: -2`,

            r: `MinStack <- setRefClass("MinStack",
    fields = list(),
    methods = list(
        initialize = function() {
            # Write your solution here
            
        },
        push = function(val) {
            # Write your solution here
            
        },
        pop = function() {
            # Write your solution here
            
        },
        top = function() {
            # Write your solution here
            
        },
        getMin = function() {
            # Write your solution here
            
        }
    )
)

# Test cases
minStack <- MinStack$new()
minStack$push(-2)
minStack$push(0)
minStack$push(-3)
cat(minStack$getMin(), "\\n") # Expected: -3
minStack$pop()
cat(minStack$top(), "\\n") # Expected: 0
cat(minStack$getMin(), "\\n") # Expected: -2`
        },
        expectedOutput: {
            javascript: "-3\n0\n-2",
            python: "-3\n0\n-2",
            java: "-3\n0\n-2"
        },
    },

    "implement-trie-prefix-tree": {
        id: "implement-trie-prefix-tree",
        title: "Implement Trie (Prefix Tree)",
        difficulty: "Medium",
        category: "Design • Trie • Hash Table",
        description: {
            text: "A trie (pronounced as 'try') or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. Implement the Trie class with insert, search, and startsWith methods.",
            notes: [
                "insert(word): Inserts the string word into the trie.",
                "search(word): Returns true if the string word is in the trie, false otherwise.",
                "startsWith(prefix): Returns true if there is any word in the trie that starts with the given prefix, false otherwise.",
                "All words and prefixes consist of lowercase English letters."
            ],
        },
        examples: [
            {
                input: "Trie trie = new Trie();\ntrie.insert('apple');\ntrie.search('apple');\ntrie.search('app');\ntrie.startsWith('app');\ntrie.insert('app');\ntrie.search('app');",
                output: "true\nfalse\ntrue\ntrue",
                explanation: "After inserting 'apple', search('apple') returns true, search('app') returns false, startsWith('app') returns true. After inserting 'app', search('app') returns true.",
            },
        ],
        constraints: [
            "1 ≤ word.length, prefix.length ≤ 2000",
            "word and prefix consist only of lowercase English letters",
            "At most 3 * 10⁴ calls will be made to insert, search, and startsWith",
        ],
        starterCode: {
            javascript: `class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        // Write your solution here
        
    }
    
    insert(word) {
        // Write your solution here
        
    }
    
    search(word) {
        // Write your solution here
        
    }
    
    startsWith(prefix) {
        // Write your solution here
        
    }
}

// Test cases
let trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple')); // Expected: true
console.log(trie.search('app')); // Expected: false
console.log(trie.startsWith('app')); // Expected: true
trie.insert('app');
console.log(trie.search('app')); // Expected: true`,

            typescript: `class TrieNode {
    children: Map<string, TrieNode>;
    isEnd: boolean;
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        // Write your solution here
        
    }
    
    insert(word: string): void {
        // Write your solution here
        
    }
    
    search(word: string): boolean {
        // Write your solution here
        
    }
    
    startsWith(prefix: string): boolean {
        // Write your solution here
        
    }
}

// Test cases
let trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple')); // Expected: true
console.log(trie.search('app')); // Expected: false
console.log(trie.startsWith('app')); // Expected: true
trie.insert('app');
console.log(trie.search('app')); // Expected: true`,

            python: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        # Write your solution here
        
    def insert(self, word: str) -> None:
        # Write your solution here
        
    def search(self, word: str) -> bool:
        # Write your solution here
        
    def startsWith(self, prefix: str) -> bool:
        # Write your solution here
        

# Test cases
trie = Trie()
trie.insert('apple')
print(trie.search('apple'))  # Expected: True
print(trie.search('app'))  # Expected: False
print(trie.startsWith('app'))  # Expected: True
trie.insert('app')
print(trie.search('app'))  # Expected: True`,

            java: `import java.util.*;

class TrieNode {
    TrieNode[] children;
    boolean isEnd;
    
    TrieNode() {
        children = new TrieNode[26];
        isEnd = false;
    }
}

class Trie {
    private TrieNode root;
    
    public Trie() {
        // Write your solution here
        
    }
    
    public void insert(String word) {
        // Write your solution here
        
    }
    
    public boolean search(String word) {
        // Write your solution here
        
    }
    
    public boolean startsWith(String prefix) {
        // Write your solution here
        
    }

    public static void main(String[] args) {
        Trie trie = new Trie();
        trie.insert("apple");
        System.out.println(trie.search("apple")); // Expected: true
        System.out.println(trie.search("app")); // Expected: false
        System.out.println(trie.startsWith("app")); // Expected: true
        trie.insert("app");
        System.out.println(trie.search("app")); // Expected: true
    }
}`,

            cpp: `#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

class TrieNode {
public:
    unordered_map<char, TrieNode*> children;
    bool isEnd;
    
    TrieNode() {
        isEnd = false;
    }
};

class Trie {
private:
    TrieNode* root;
    
public:
    Trie() {
        // Write your solution here
        
    }
    
    void insert(string word) {
        // Write your solution here
        
    }
    
    bool search(string word) {
        // Write your solution here
        
    }
    
    bool startsWith(string prefix) {
        // Write your solution here
        
    }
};

int main() {
    Trie* trie = new Trie();
    trie->insert("apple");
    cout << boolalpha;
    cout << trie->search("apple") << endl; // Expected: true
    cout << trie->search("app") << endl; // Expected: false
    cout << trie->startsWith("app") << endl; // Expected: true
    trie->insert("app");
    cout << trie->search("app") << endl; // Expected: true
    
    delete trie;
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

typedef struct TrieNode {
    struct TrieNode* children[26];
    bool isEnd;
} TrieNode;

typedef struct {
    TrieNode* root;
} Trie;

Trie* trieCreate() {
    // Write your solution here
    
}

void trieInsert(Trie* obj, char* word) {
    // Write your solution here
    
}

bool trieSearch(Trie* obj, char* word) {
    // Write your solution here
    
}

bool trieStartsWith(Trie* obj, char* prefix) {
    // Write your solution here
    
}

void trieFree(Trie* obj) {
    // Write your solution here
    
}

int main() {
    Trie* trie = trieCreate();
    trieInsert(trie, "apple");
    printf("%d\\n", trieSearch(trie, "apple")); // Expected: 1 (true)
    printf("%d\\n", trieSearch(trie, "app")); // Expected: 0 (false)
    printf("%d\\n", trieStartsWith(trie, "app")); // Expected: 1 (true)
    trieInsert(trie, "app");
    printf("%d\\n", trieSearch(trie, "app")); // Expected: 1 (true)
    trieFree(trie);
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

public class TrieNode {
    public Dictionary<char, TrieNode> children;
    public bool isEnd;
    
    public TrieNode() {
        children = new Dictionary<char, TrieNode>();
        isEnd = false;
    }
}

public class Trie {
    private TrieNode root;
    
    public Trie() {
        // Write your solution here
        
    }
    
    public void Insert(string word) {
        // Write your solution here
        
    }
    
    public bool Search(string word) {
        // Write your solution here
        
    }
    
    public bool StartsWith(string prefix) {
        // Write your solution here
        
    }
}

class Program {
    static void Main() {
        Trie trie = new Trie();
        trie.Insert("apple");
        Console.WriteLine(trie.Search("apple")); // Expected: True
        Console.WriteLine(trie.Search("app")); // Expected: False
        Console.WriteLine(trie.StartsWith("app")); // Expected: True
        trie.Insert("app");
        Console.WriteLine(trie.Search("app")); // Expected: True
    }
}`,

            go: `package main

import "fmt"

type TrieNode struct {
    children map[rune]*TrieNode
    isEnd    bool
}

type Trie struct {
    root *TrieNode
}

func Constructor() Trie {
    // Write your solution here
    
}

func (this *Trie) Insert(word string) {
    // Write your solution here
    
}

func (this *Trie) Search(word string) bool {
    // Write your solution here
    
}

func (this *Trie) StartsWith(prefix string) bool {
    // Write your solution here
    
}

func main() {
    trie := Constructor()
    trie.Insert("apple")
    fmt.Println(trie.Search("apple")) // Expected: true
    fmt.Println(trie.Search("app")) // Expected: false
    fmt.Println(trie.StartsWith("app")) // Expected: true
    trie.Insert("app")
    fmt.Println(trie.Search("app")) // Expected: true
}`,

            rust: `use std::collections::HashMap;

struct TrieNode {
    children: HashMap<char, TrieNode>,
    is_end: bool,
}

impl TrieNode {
    fn new() -> Self {
        TrieNode {
            children: HashMap::new(),
            is_end: false,
        }
    }
}

struct Trie {
    root: TrieNode,
}

impl Trie {
    fn new() -> Self {
        // Write your solution here
        
    }
    
    fn insert(&mut self, word: String) {
        // Write your solution here
        
    }
    
    fn search(&self, word: String) -> bool {
        // Write your solution here
        
    }
    
    fn starts_with(&self, prefix: String) -> bool {
        // Write your solution here
        
    }
}

fn main() {
    let mut trie = Trie::new();
    trie.insert("apple".to_string());
    println!("{}", trie.search("apple".to_string())); // Expected: true
    println!("{}", trie.search("app".to_string())); // Expected: false
    println!("{}", trie.starts_with("app".to_string())); // Expected: true
    trie.insert("app".to_string());
    println!("{}", trie.search("app".to_string())); // Expected: true
}`,

            ruby: `class TrieNode
    attr_accessor :children, :is_end
    def initialize
        @children = {}
        @is_end = false
    end
end

class Trie
    def initialize()
        # Write your solution here
        
    end

    def insert(word)
        # Write your solution here
        
    end

    def search(word)
        # Write your solution here
        
    end

    def starts_with(prefix)
        # Write your solution here
        
    end
end

# Test cases
trie = Trie.new
trie.insert('apple')
puts trie.search('apple') # Expected: true
puts trie.search('app') # Expected: false
puts trie.starts_with('app') # Expected: true
trie.insert('app')
puts trie.search('app') # Expected: true`,

            php: `<?php
class TrieNode {
    public $children;
    public $isEnd;
    
    public function __construct() {
        $this->children = [];
        $this->isEnd = false;
    }
}

class Trie {
    private $root;
    
    function __construct() {
        // Write your solution here
        
    }
  
    function insert($word) {
        // Write your solution here
        
    }
  
    function search($word) {
        // Write your solution here
        
    }
  
    function startsWith($prefix) {
        // Write your solution here
        
    }
}

// Test cases
$trie = new Trie();
$trie->insert('apple');
echo var_export($trie->search('apple'), true) . "\\n"; // Expected: true
echo var_export($trie->search('app'), true) . "\\n"; // Expected: false
echo var_export($trie->startsWith('app'), true) . "\\n"; // Expected: true
$trie->insert('app');
echo var_export($trie->search('app'), true) . "\\n"; // Expected: true
?>`,

            swift: `class TrieNode {
    var children: [Character: TrieNode]
    var isEnd: Bool
    
    init() {
        children = [:]
        isEnd = false
    }
}

class Trie {
    private let root: TrieNode
    
    init() {
        // Write your solution here
        
    }
    
    func insert(_ word: String) {
        // Write your solution here
        
    }
    
    func search(_ word: String) -> Bool {
        // Write your solution here
        
    }
    
    func startsWith(_ prefix: String) -> Bool {
        // Write your solution here
        
    }
}

// Test cases
let trie = Trie()
trie.insert("apple")
print(trie.search("apple")) // Expected: true
print(trie.search("app")) // Expected: false
print(trie.startsWith("app")) // Expected: true
trie.insert("app")
print(trie.search("app")) // Expected: true`,

            kotlin: `class TrieNode {
    val children: MutableMap<Char, TrieNode> = mutableMapOf()
    var isEnd: Boolean = false
}

class Trie() {
    private val root = TrieNode()
    
    fun insert(word: String) {
        // Write your solution here
        
    }
    
    fun search(word: String): Boolean {
        // Write your solution here
        
    }
    
    fun startsWith(prefix: String): Boolean {
        // Write your solution here
        
    }
}

fun main() {
    val trie = Trie()
    trie.insert("apple")
    println(trie.search("apple")) // Expected: true
    println(trie.search("app")) // Expected: false
    println(trie.startsWith("app")) // Expected: true
    trie.insert("app")
    println(trie.search("app")) // Expected: true
}`,

            scala: `import scala.collection.mutable

class TrieNode {
    val children: mutable.Map[Char, TrieNode] = mutable.Map()
    var isEnd: Boolean = false
}

class Trie() {
    private val root = new TrieNode()
    
    def insert(word: String): Unit = {
        // Write your solution here
        
    }
    
    def search(word: String): Boolean = {
        // Write your solution here
        
    }
    
    def startsWith(prefix: String): Boolean = {
        // Write your solution here
        
    }
}

object Main {
    def main(args: Array[String]): Unit = {
        val trie = new Trie()
        trie.insert("apple")
        println(trie.search("apple")) // Expected: true
        println(trie.search("app")) // Expected: false
        println(trie.startsWith("app")) // Expected: true
        trie.insert("app")
        println(trie.search("app")) // Expected: true
    }
}`,

            perl: `package TrieNode;
sub new {
    my $class = shift;
    my $self = {
        children => {},
        isEnd => 0
    };
    bless $self, $class;
    return $self;
}

package Trie;
sub new {
    my $class = shift;
    my $self = {
        root => TrieNode->new()
    };
    bless $self, $class;
    return $self;
}

sub insert {
    my ($self, $word) = @_;
    # Write your solution here
    
}

sub search {
    my ($self, $word) = @_;
    # Write your solution here
    
}

sub startsWith {
    my ($self, $prefix) = @_;
    # Write your solution here
    
}

package main;
my $trie = Trie->new();
$trie->insert('apple');
print $trie->search('apple') ? "true\\n" : "false\\n"; # Expected: true
print $trie->search('app') ? "true\\n" : "false\\n"; # Expected: false
print $trie->startsWith('app') ? "true\\n" : "false\\n"; # Expected: true
$trie->insert('app');
print $trie->search('app') ? "true\\n" : "false\\n"; # Expected: true`,

            r: `TrieNode <- setRefClass("TrieNode",
    fields = list(children = "list", isEnd = "logical"),
    methods = list(
        initialize = function() {
            .self$children <- list()
            .self$isEnd <- FALSE
        }
    )
)

Trie <- setRefClass("Trie",
    fields = list(root = "ANY"),
    methods = list(
        initialize = function() {
            .self$root <- TrieNode$new()
        },
        insert = function(word) {
            # Write your solution here
            
        },
        search = function(word) {
            # Write your solution here
            
        },
        startsWith = function(prefix) {
            # Write your solution here
            
        }
    )
)

# Test cases
trie <- Trie$new()
trie$insert("apple")
cat(trie$search("apple"), "\\n") # Expected: TRUE
cat(trie$search("app"), "\\n") # Expected: FALSE
cat(trie$startsWith("app"), "\\n") # Expected: TRUE
trie$insert("app")
cat(trie$search("app"), "\\n") # Expected: TRUE`
        },
        expectedOutput: {
            javascript: "true\nfalse\ntrue\ntrue",
            python: "True\nFalse\nTrue\nTrue",
            java: "true\nfalse\ntrue\ntrue"
        },
    },

    "number-of-connected-components-in-an-undirected-graph": {
        id: "number-of-connected-components-in-an-undirected-graph",
        title: "Number of Connected Components in an Undirected Graph",
        difficulty: "Medium",
        category: "Graph • Union Find • DFS • BFS",
        description: {
            text: "You have a graph of n nodes labeled from 0 to n-1. You are given an array edges where edges[i] = [a, b] represents an undirected edge between nodes a and b. Return the number of connected components in the graph.",
            notes: [
                "The graph may be disconnected.",
                "Use DFS, BFS, or Union Find to count components.",
                "The number of nodes is always positive."
            ],
        },
        examples: [
            {
                input: "n = 5, edges = [[0,1],[1,2],[3,4]]",
                output: "2",
                explanation: "Components: {0,1,2} and {3,4}",
            },
            {
                input: "n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]",
                output: "1",
                explanation: "All nodes are connected in one component.",
            },
        ],
        constraints: [
            "1 ≤ n ≤ 2000",
            "0 ≤ edges.length ≤ 5000",
            "edges[i].length == 2",
            "0 ≤ a, b < n",
        ],
        starterCode: {
            javascript: `function countComponents(n, edges) {
    // Write your solution here
    
}

// Test cases
console.log(countComponents(5, [[0,1],[1,2],[3,4]])); // Expected: 2
console.log(countComponents(5, [[0,1],[1,2],[2,3],[3,4]])); // Expected: 1`,

            typescript: `function countComponents(n: number, edges: number[][]): number {
    // Write your solution here
    
}

// Test cases
console.log(countComponents(5, [[0,1],[1,2],[3,4]])); // Expected: 2
console.log(countComponents(5, [[0,1],[1,2],[2,3],[3,4]])); // Expected: 1`,

            python: `def countComponents(n, edges):
    # Write your solution here
    pass

# Test cases
print(countComponents(5, [[0,1],[1,2],[3,4]]))  # Expected: 2
print(countComponents(5, [[0,1],[1,2],[2,3],[3,4]]))  # Expected: 1`,

            java: `import java.util.*;

class Solution {
    public static int countComponents(int n, int[][] edges) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(countComponents(5, new int[][]{{0,1},{1,2},{3,4}})); // Expected: 2
        System.out.println(countComponents(5, new int[][]{{0,1},{1,2},{2,3},{3,4}})); // Expected: 1
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int countComponents(int n, vector<vector<int>>& edges) {
    // Write your solution here
    
}

int main() {
    vector<vector<int>> edges1 = {{0,1},{1,2},{3,4}};
    cout << countComponents(5, edges1) << endl; // Expected: 2
    
    vector<vector<int>> edges2 = {{0,1},{1,2},{2,3},{3,4}};
    cout << countComponents(5, edges2) << endl; // Expected: 1
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int countComponents(int n, int** edges, int edgesSize, int* edgesColSize) {
    // Write your solution here
    
}

int main() {
    int edges1_data[][2] = {{0,1},{1,2},{3,4}};
    int* edges1[] = {edges1_data[0], edges1_data[1], edges1_data[2]};
    int edgesColSize1[] = {2,2,2};
    printf("%d\\n", countComponents(5, edges1, 3, edgesColSize1)); // Expected: 2
    
    int edges2_data[][2] = {{0,1},{1,2},{2,3},{3,4}};
    int* edges2[] = {edges2_data[0], edges2_data[1], edges2_data[2], edges2_data[3]};
    int edgesColSize2[] = {2,2,2,2};
    printf("%d\\n", countComponents(5, edges2, 4, edgesColSize2)); // Expected: 1
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int CountComponents(int n, int[][] edges) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(CountComponents(5, new int[][] { new int[] {0,1}, new int[] {1,2}, new int[] {3,4} })); // Expected: 2
        Console.WriteLine(CountComponents(5, new int[][] { new int[] {0,1}, new int[] {1,2}, new int[] {2,3}, new int[] {3,4} })); // Expected: 1
    }
}`,

            go: `package main

import "fmt"

func countComponents(n int, edges [][]int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(countComponents(5, [][]int{{0,1},{1,2},{3,4}})) // Expected: 2
    fmt.Println(countComponents(5, [][]int{{0,1},{1,2},{2,3},{3,4}})) // Expected: 1
}`,

            rust: `fn count_components(n: i32, edges: Vec<Vec<i32>>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", count_components(5, vec![vec![0,1], vec![1,2], vec![3,4]])); // Expected: 2
    println!("{}", count_components(5, vec![vec![0,1], vec![1,2], vec![2,3], vec![3,4]])); // Expected: 1
}`,

            ruby: `def count_components(n, edges)
    # Write your solution here
    
end

# Test cases
puts count_components(5, [[0,1],[1,2],[3,4]]) # Expected: 2
puts count_components(5, [[0,1],[1,2],[2,3],[3,4]]) # Expected: 1`,

            php: `<?php
function countComponents($n, $edges) {
    // Write your solution here
    
}

// Test cases
echo countComponents(5, [[0,1],[1,2],[3,4]]) . "\\n"; // Expected: 2
echo countComponents(5, [[0,1],[1,2],[2,3],[3,4]]) . "\\n"; // Expected: 1
?>`,

            swift: `func countComponents(_ n: Int, _ edges: [[Int]]) -> Int {
    // Write your solution here
    
}

// Test cases
print(countComponents(5, [[0,1],[1,2],[3,4]])) // Expected: 2
print(countComponents(5, [[0,1],[1,2],[2,3],[3,4]])) // Expected: 1`,

            kotlin: `fun countComponents(n: Int, edges: Array<IntArray>): Int {
    // Write your solution here
    
}

fun main() {
    println(countComponents(5, arrayOf(intArrayOf(0,1), intArrayOf(1,2), intArrayOf(3,4)))) // Expected: 2
    println(countComponents(5, arrayOf(intArrayOf(0,1), intArrayOf(1,2), intArrayOf(2,3), intArrayOf(3,4)))) // Expected: 1
}`,

            scala: `object Solution {
    def countComponents(n: Int, edges: Array[Array[Int]]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(countComponents(5, Array(Array(0,1), Array(1,2), Array(3,4)))) // Expected: 2
        println(countComponents(5, Array(Array(0,1), Array(1,2), Array(2,3), Array(3,4)))) // Expected: 1
    }
}`,

            perl: `sub countComponents {
    my ($n, $edges) = @_;
    # Write your solution here
    
}

# Test cases
print countComponents(5, [[0,1],[1,2],[3,4]]) . "\\n"; # Expected: 2
print countComponents(5, [[0,1],[1,2],[2,3],[3,4]]) . "\\n"; # Expected: 1`,

            r: `countComponents <- function(n, edges) {
    # Write your solution here
    
}

# Test cases
print(countComponents(5, list(c(0,1), c(1,2), c(3,4)))) # Expected: 2
print(countComponents(5, list(c(0,1), c(1,2), c(2,3), c(3,4)))) # Expected: 1`
        },
        expectedOutput: {
            javascript: "2\n1",
            python: "2\n1",
            java: "2\n1"
        },
    },

    "accounts-merge": {
        id: "accounts-merge",
        title: "Accounts Merge",
        difficulty: "Medium",
        category: "Array • String • Union Find • Hash Table",
        description: {
            text: "Given a list of accounts where each element accounts[i] is a list of strings, where the first element is the account name, and the rest are emails belonging to that account. Merge accounts that belong to the same person (if any two accounts share at least one common email). Return the merged accounts in any order.",
            notes: [
                "Two accounts belong to the same person if they share at least one common email.",
                "After merging, the emails should be sorted in lexicographical order.",
                "The account name should be the same for all merged accounts."
            ],
        },
        examples: [
            {
                input: "accounts = [['John','johnsmith@mail.com','john_newyork@mail.com'],['John','johnsmith@mail.com','john00@mail.com'],['Mary','mary@mail.com'],['John','johnnybravo@mail.com']]",
                output: "[['John','john00@mail.com','john_newyork@mail.com','johnsmith@mail.com'],['Mary','mary@mail.com'],['John','johnnybravo@mail.com']]",
                explanation: "First and second accounts share 'johnsmith@mail.com', so they merge. Third account is separate. Fourth account is separate.",
            },
            {
                input: "accounts = [['Gabe','Gabe0@m.co','Gabe3@m.co','Gabe1@m.co'],['Kevin','Kevin3@m.co','Kevin5@m.co','Kevin0@m.co'],['Ethan','Ethan5@m.co','Ethan4@m.co','Ethan0@m.co'],['Hanzo','Hanzo3@m.co','Hanzo1@m.co','Hanzo0@m.co'],['Fern','Fern5@m.co','Fern1@m.co','Fern0@m.co']]",
                output: "Same as input (no merges)",
            },
        ],
        constraints: [
            "1 ≤ accounts.length ≤ 1000",
            "2 ≤ accounts[i].length ≤ 10",
            "1 ≤ accounts[i][j].length ≤ 30",
            "accounts[i][0] consists of English letters",
            "Emails consist of English letters and digits",
        ],
        starterCode: {
            javascript: `function accountsMerge(accounts) {
    // Write your solution here
    
}

// Test cases
let accounts1 = [
    ['John','johnsmith@mail.com','john_newyork@mail.com'],
    ['John','johnsmith@mail.com','john00@mail.com'],
    ['Mary','mary@mail.com'],
    ['John','johnnybravo@mail.com']
];
console.log(accountsMerge(accounts1));

let accounts2 = [
    ['Gabe','Gabe0@m.co','Gabe3@m.co','Gabe1@m.co'],
    ['Kevin','Kevin3@m.co','Kevin5@m.co','Kevin0@m.co'],
    ['Ethan','Ethan5@m.co','Ethan4@m.co','Ethan0@m.co'],
    ['Hanzo','Hanzo3@m.co','Hanzo1@m.co','Hanzo0@m.co'],
    ['Fern','Fern5@m.co','Fern1@m.co','Fern0@m.co']
];
console.log(accountsMerge(accounts2));`,

            typescript: `function accountsMerge(accounts: string[][]): string[][] {
    // Write your solution here
    
}

// Test cases
let accounts1 = [
    ['John','johnsmith@mail.com','john_newyork@mail.com'],
    ['John','johnsmith@mail.com','john00@mail.com'],
    ['Mary','mary@mail.com'],
    ['John','johnnybravo@mail.com']
];
console.log(accountsMerge(accounts1));

let accounts2 = [
    ['Gabe','Gabe0@m.co','Gabe3@m.co','Gabe1@m.co'],
    ['Kevin','Kevin3@m.co','Kevin5@m.co','Kevin0@m.co'],
    ['Ethan','Ethan5@m.co','Ethan4@m.co','Ethan0@m.co'],
    ['Hanzo','Hanzo3@m.co','Hanzo1@m.co','Hanzo0@m.co'],
    ['Fern','Fern5@m.co','Fern1@m.co','Fern0@m.co']
];
console.log(accountsMerge(accounts2));`,

            python: `def accountsMerge(accounts):
    # Write your solution here
    pass

# Test cases
accounts1 = [
    ['John','johnsmith@mail.com','john_newyork@mail.com'],
    ['John','johnsmith@mail.com','john00@mail.com'],
    ['Mary','mary@mail.com'],
    ['John','johnnybravo@mail.com']
]
print(accountsMerge(accounts1))

accounts2 = [
    ['Gabe','Gabe0@m.co','Gabe3@m.co','Gabe1@m.co'],
    ['Kevin','Kevin3@m.co','Kevin5@m.co','Kevin0@m.co'],
    ['Ethan','Ethan5@m.co','Ethan4@m.co','Ethan0@m.co'],
    ['Hanzo','Hanzo3@m.co','Hanzo1@m.co','Hanzo0@m.co'],
    ['Fern','Fern5@m.co','Fern1@m.co','Fern0@m.co']
]
print(accountsMerge(accounts2))`,

            java: `import java.util.*;

class Solution {
    public static List<List<String>> accountsMerge(List<List<String>> accounts) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        List<List<String>> accounts1 = Arrays.asList(
            Arrays.asList("John","johnsmith@mail.com","john_newyork@mail.com"),
            Arrays.asList("John","johnsmith@mail.com","john00@mail.com"),
            Arrays.asList("Mary","mary@mail.com"),
            Arrays.asList("John","johnnybravo@mail.com")
        );
        System.out.println(accountsMerge(accounts1));
        
        List<List<String>> accounts2 = Arrays.asList(
            Arrays.asList("Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"),
            Arrays.asList("Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"),
            Arrays.asList("Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"),
            Arrays.asList("Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"),
            Arrays.asList("Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co")
        );
        System.out.println(accountsMerge(accounts2));
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>
#include <set>
using namespace std;

vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {
    // Write your solution here
    
}

int main() {
    vector<vector<string>> accounts1 = {
        {"John","johnsmith@mail.com","john_newyork@mail.com"},
        {"John","johnsmith@mail.com","john00@mail.com"},
        {"Mary","mary@mail.com"},
        {"John","johnnybravo@mail.com"}
    };
    vector<vector<string>> result1 = accountsMerge(accounts1);
    for (auto& acc : result1) {
        cout << "[";
        for (size_t i = 0; i < acc.size(); i++) {
            cout << acc[i];
            if (i < acc.size() - 1) cout << ",";
        }
        cout << "]" << endl;
    }
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

char*** accountsMerge(char*** accounts, int accountsSize, int* accountsColSize, int* returnSize, int** returnColumnSizes) {
    // Write your solution here
    
}

int main() {
    // For C, manual implementation required
    // Function signature provided
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<IList<string>> AccountsMerge(IList<IList<string>> accounts) {
        // Write your solution here
        
    }
    
    static void Main() {
        var accounts1 = new List<IList<string>> {
            new List<string> {"John","johnsmith@mail.com","john_newyork@mail.com"},
            new List<string> {"John","johnsmith@mail.com","john00@mail.com"},
            new List<string> {"Mary","mary@mail.com"},
            new List<string> {"John","johnnybravo@mail.com"}
        };
        var result1 = AccountsMerge(accounts1);
        foreach (var acc in result1) {
            Console.WriteLine($"[{string.Join(",", acc)}]");
        }
    }
}`,

            go: `package main

import "fmt"

func accountsMerge(accounts [][]string) [][]string {
    // Write your solution here
    
}

func main() {
    accounts1 := [][]string{
        {"John","johnsmith@mail.com","john_newyork@mail.com"},
        {"John","johnsmith@mail.com","john00@mail.com"},
        {"Mary","mary@mail.com"},
        {"John","johnnybravo@mail.com"},
    }
    fmt.Println(accountsMerge(accounts1))
}`,

            rust: `use std::collections::{HashMap, HashSet};

fn accounts_merge(accounts: Vec<Vec<String>>) -> Vec<Vec<String>> {
    // Write your solution here
    
}

fn main() {
    let accounts1 = vec![
        vec!["John".to_string(), "johnsmith@mail.com".to_string(), "john_newyork@mail.com".to_string()],
        vec!["John".to_string(), "johnsmith@mail.com".to_string(), "john00@mail.com".to_string()],
        vec!["Mary".to_string(), "mary@mail.com".to_string()],
        vec!["John".to_string(), "johnnybravo@mail.com".to_string()],
    ];
    println!("{:?}", accounts_merge(accounts1));
}`,

            ruby: `def accounts_merge(accounts)
    # Write your solution here
    
end

# Test cases
accounts1 = [
    ['John','johnsmith@mail.com','john_newyork@mail.com'],
    ['John','johnsmith@mail.com','john00@mail.com'],
    ['Mary','mary@mail.com'],
    ['John','johnnybravo@mail.com']
]
puts accounts_merge(accounts1).inspect`,

            php: `<?php
function accountsMerge($accounts) {
    // Write your solution here
    
}

// Test cases
$accounts1 = [
    ['John','johnsmith@mail.com','john_newyork@mail.com'],
    ['John','johnsmith@mail.com','john00@mail.com'],
    ['Mary','mary@mail.com'],
    ['John','johnnybravo@mail.com']
];
print_r(accountsMerge($accounts1));
?>`,

            swift: `func accountsMerge(_ accounts: [[String]]) -> [[String]] {
    // Write your solution here
    
}

// Test cases
let accounts1 = [
    ["John","johnsmith@mail.com","john_newyork@mail.com"],
    ["John","johnsmith@mail.com","john00@mail.com"],
    ["Mary","mary@mail.com"],
    ["John","johnnybravo@mail.com"]
]
print(accountsMerge(accounts1))`,

            kotlin: `fun accountsMerge(accounts: List<List<String>>): List<List<String>> {
    // Write your solution here
    
}

fun main() {
    val accounts1 = listOf(
        listOf("John","johnsmith@mail.com","john_newyork@mail.com"),
        listOf("John","johnsmith@mail.com","john00@mail.com"),
        listOf("Mary","mary@mail.com"),
        listOf("John","johnnybravo@mail.com")
    )
    println(accountsMerge(accounts1))
}`,

            scala: `import scala.collection.mutable

object Solution {
    def accountsMerge(accounts: List[List[String]]): List[List[String]] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        val accounts1 = List(
            List("John","johnsmith@mail.com","john_newyork@mail.com"),
            List("John","johnsmith@mail.com","john00@mail.com"),
            List("Mary","mary@mail.com"),
            List("John","johnnybravo@mail.com")
        )
        println(accountsMerge(accounts1))
    }
}`,

            perl: `sub accountsMerge {
    my $accounts = shift;
    # Write your solution here
    
}

# Test cases
my $accounts1 = [
    ['John','johnsmith@mail.com','john_newyork@mail.com'],
    ['John','johnsmith@mail.com','john00@mail.com'],
    ['Mary','mary@mail.com'],
    ['John','johnnybravo@mail.com']
];
print accountsMerge($accounts1);`,

            r: `accountsMerge <- function(accounts) {
    # Write your solution here
    
}

# Test cases
accounts1 <- list(
    list('John','johnsmith@mail.com','john_newyork@mail.com'),
    list('John','johnsmith@mail.com','john00@mail.com'),
    list('Mary','mary@mail.com'),
    list('John','johnnybravo@mail.com')
)
print(accountsMerge(accounts1))`
        },
        expectedOutput: {
            javascript: "[[\"John\",\"john00@mail.com\",\"john_newyork@mail.com\",\"johnsmith@mail.com\"],[\"Mary\",\"mary@mail.com\"],[\"John\",\"johnnybravo@mail.com\"]]\n[[\"Ethan\",\"Ethan0@m.co\",\"Ethan4@m.co\",\"Ethan5@m.co\"],[\"Fern\",\"Fern0@m.co\",\"Fern1@m.co\",\"Fern5@m.co\"],[\"Gabe\",\"Gabe0@m.co\",\"Gabe1@m.co\",\"Gabe3@m.co\"],[\"Hanzo\",\"Hanzo0@m.co\",\"Hanzo1@m.co\",\"Hanzo3@m.co\"],[\"Kevin\",\"Kevin0@m.co\",\"Kevin3@m.co\",\"Kevin5@m.co\"]]",
            python: "[[\"John\",\"john00@mail.com\",\"john_newyork@mail.com\",\"johnsmith@mail.com\"],[\"Mary\",\"mary@mail.com\"],[\"John\",\"johnnybravo@mail.com\"]]\n[[\"Ethan\",\"Ethan0@m.co\",\"Ethan4@m.co\",\"Ethan5@m.co\"],[\"Fern\",\"Fern0@m.co\",\"Fern1@m.co\",\"Fern5@m.co\"],[\"Gabe\",\"Gabe0@m.co\",\"Gabe1@m.co\",\"Gabe3@m.co\"],[\"Hanzo\",\"Hanzo0@m.co\",\"Hanzo1@m.co\",\"Hanzo3@m.co\"],[\"Kevin\",\"Kevin0@m.co\",\"Kevin3@m.co\",\"Kevin5@m.co\"]]",
            java: "[[John, john00@mail.com, john_newyork@mail.com, johnsmith@mail.com], [Mary, mary@mail.com], [John, johnnybravo@mail.com]]\n[[Ethan, Ethan0@m.co, Ethan4@m.co, Ethan5@m.co], [Fern, Fern0@m.co, Fern1@m.co, Fern5@m.co], [Gabe, Gabe0@m.co, Gabe1@m.co, Gabe3@m.co], [Hanzo, Hanzo0@m.co, Hanzo1@m.co, Hanzo3@m.co], [Kevin, Kevin0@m.co, Kevin3@m.co, Kevin5@m.co]]"
        },
    },

    "gas-station": {
        id: "gas-station",
        title: "Gas Station",
        difficulty: "Medium",
        category: "Array • Greedy",
        description: {
            text: "There are n gas stations along a circular route. You are given two integer arrays gas and cost where gas[i] is the amount of gas at station i, and cost[i] is the amount of gas needed to travel from station i to the next station. Return the starting station's index if you can travel around the circuit once, otherwise return -1.",
            notes: [
                "If there exists a solution, it is guaranteed to be unique.",
                "Your tank starts empty at the starting station.",
                "The solution must run in O(n) time."
            ],
        },
        examples: [
            {
                input: "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
                output: "3",
                explanation: "Start at station 3 (index 3) with 4 gas. Travel to station 4: 4-1+5=8, to 0: 8-2+1=7, to 1: 7-3+2=6, to 2: 6-4+3=5, to 3: 5-5+4=4. Successfully returns to start.",
            },
            {
                input: "gas = [2,3,4], cost = [3,4,3]",
                output: "-1",
                explanation: "Cannot complete the circuit.",
            },
        ],
        constraints: [
            "n == gas.length == cost.length",
            "1 ≤ n ≤ 10⁵",
            "0 ≤ gas[i], cost[i] ≤ 10⁴",
        ],
        starterCode: {
            javascript: `function canCompleteCircuit(gas, cost) {
    // Write your solution here
    
}

// Test cases
console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])); // Expected: 3
console.log(canCompleteCircuit([2,3,4], [3,4,3])); // Expected: -1`,

            typescript: `function canCompleteCircuit(gas: number[], cost: number[]): number {
    // Write your solution here
    
}

// Test cases
console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])); // Expected: 3
console.log(canCompleteCircuit([2,3,4], [3,4,3])); // Expected: -1`,

            python: `def canCompleteCircuit(gas, cost):
    # Write your solution here
    pass

# Test cases
print(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))  # Expected: 3
print(canCompleteCircuit([2,3,4], [3,4,3]))  # Expected: -1`,

            java: `class Solution {
    public static int canCompleteCircuit(int[] gas, int[] cost) {
        // Write your solution here
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(canCompleteCircuit(new int[]{1,2,3,4,5}, new int[]{3,4,5,1,2})); // Expected: 3
        System.out.println(canCompleteCircuit(new int[]{2,3,4}, new int[]{3,4,3})); // Expected: -1
    }
}`,

            cpp: `#include <iostream>
#include <vector>
using namespace std;

int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
    // Write your solution here
    
}

int main() {
    vector<int> gas1 = {1,2,3,4,5};
    vector<int> cost1 = {3,4,5,1,2};
    cout << canCompleteCircuit(gas1, cost1) << endl; // Expected: 3
    
    vector<int> gas2 = {2,3,4};
    vector<int> cost2 = {3,4,3};
    cout << canCompleteCircuit(gas2, cost2) << endl; // Expected: -1
    
    return 0;
}`,

            c: `#include <stdio.h>

int canCompleteCircuit(int* gas, int gasSize, int* cost, int costSize) {
    // Write your solution here
    
}

int main() {
    int gas1[] = {1,2,3,4,5};
    int cost1[] = {3,4,5,1,2};
    printf("%d\\n", canCompleteCircuit(gas1, 5, cost1, 5)); // Expected: 3
    
    int gas2[] = {2,3,4};
    int cost2[] = {3,4,3};
    printf("%d\\n", canCompleteCircuit(gas2, 3, cost2, 3)); // Expected: -1
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int CanCompleteCircuit(int[] gas, int[] cost) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(CanCompleteCircuit(new int[] {1,2,3,4,5}, new int[] {3,4,5,1,2})); // Expected: 3
        Console.WriteLine(CanCompleteCircuit(new int[] {2,3,4}, new int[] {3,4,3})); // Expected: -1
    }
}`,

            go: `package main

import "fmt"

func canCompleteCircuit(gas []int, cost []int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(canCompleteCircuit([]int{1,2,3,4,5}, []int{3,4,5,1,2})) // Expected: 3
    fmt.Println(canCompleteCircuit([]int{2,3,4}, []int{3,4,3})) // Expected: -1
}`,

            rust: `fn can_complete_circuit(gas: Vec<i32>, cost: Vec<i32>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", can_complete_circuit(vec![1,2,3,4,5], vec![3,4,5,1,2])); // Expected: 3
    println!("{}", can_complete_circuit(vec![2,3,4], vec![3,4,3])); // Expected: -1
}`,

            ruby: `def can_complete_circuit(gas, cost)
    # Write your solution here
    
end

# Test cases
puts can_complete_circuit([1,2,3,4,5], [3,4,5,1,2]) # Expected: 3
puts can_complete_circuit([2,3,4], [3,4,3]) # Expected: -1`,

            php: `<?php
function canCompleteCircuit($gas, $cost) {
    // Write your solution here
    
}

// Test cases
echo canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]) . "\\n"; // Expected: 3
echo canCompleteCircuit([2,3,4], [3,4,3]) . "\\n"; // Expected: -1
?>`,

            swift: `func canCompleteCircuit(_ gas: [Int], _ cost: [Int]) -> Int {
    // Write your solution here
    
}

// Test cases
print(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])) // Expected: 3
print(canCompleteCircuit([2,3,4], [3,4,3])) // Expected: -1`,

            kotlin: `fun canCompleteCircuit(gas: IntArray, cost: IntArray): Int {
    // Write your solution here
    
}

fun main() {
    println(canCompleteCircuit(intArrayOf(1,2,3,4,5), intArrayOf(3,4,5,1,2))) // Expected: 3
    println(canCompleteCircuit(intArrayOf(2,3,4), intArrayOf(3,4,3))) // Expected: -1
}`,

            scala: `object Solution {
    def canCompleteCircuit(gas: Array[Int], cost: Array[Int]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(canCompleteCircuit(Array(1,2,3,4,5), Array(3,4,5,1,2))) // Expected: 3
        println(canCompleteCircuit(Array(2,3,4), Array(3,4,3))) // Expected: -1
    }
}`,

            perl: `sub canCompleteCircuit {
    my ($gas, $cost) = @_;
    # Write your solution here
    
}

# Test cases
print canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]) . "\\n"; # Expected: 3
print canCompleteCircuit([2,3,4], [3,4,3]) . "\\n"; # Expected: -1`,

            r: `canCompleteCircuit <- function(gas, cost) {
    # Write your solution here
    
}

# Test cases
print(canCompleteCircuit(c(1,2,3,4,5), c(3,4,5,1,2))) # Expected: 3
print(canCompleteCircuit(c(2,3,4), c(3,4,3))) # Expected: -1`
        },
        expectedOutput: {
            javascript: "3\n-1",
            python: "3\n-1",
            java: "3\n-1"
        },
    },

    "candy": {
        id: "candy",
        title: "Candy",
        difficulty: "Hard",
        category: "Array • Greedy",
        description: {
            text: "There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings. You are giving candies to these children subjected to the following requirements: Each child must have at least one candy. Children with a higher rating get more candies than their neighbors. Return the minimum number of candies you need to have to distribute the candies to the children.",
            notes: [
                "A child with a higher rating than an adjacent child must get more candies than that neighbor.",
                "The solution can be done with two passes (left to right and right to left)."
            ],
        },
        examples: [
            {
                input: "ratings = [1,0,2]",
                output: "5",
                explanation: "Child 1 (rating 1): 2 candies, Child 2 (rating 0): 1 candy, Child 3 (rating 2): 2 candies. Total = 5.",
            },
            {
                input: "ratings = [1,2,2]",
                output: "4",
                explanation: "Child 1 (rating 1): 1 candy, Child 2 (rating 2): 2 candies, Child 3 (rating 2): 1 candy. Total = 4.",
            },
        ],
        constraints: [
            "n == ratings.length",
            "1 ≤ n ≤ 2 * 10⁴",
            "0 ≤ ratings[i] ≤ 2 * 10⁴",
        ],
        starterCode: {
            javascript: `function candy(ratings) {
    // Write your solution here
    
}

// Test cases
console.log(candy([1,0,2])); // Expected: 5
console.log(candy([1,2,2])); // Expected: 4`,

            typescript: `function candy(ratings: number[]): number {
    // Write your solution here
    
}

// Test cases
console.log(candy([1,0,2])); // Expected: 5
console.log(candy([1,2,2])); // Expected: 4`,

            python: `def candy(ratings):
    # Write your solution here
    pass

# Test cases
print(candy([1,0,2]))  # Expected: 5
print(candy([1,2,2]))  # Expected: 4`,

            java: `class Solution {
    public static int candy(int[] ratings) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(candy(new int[]{1,0,2})); // Expected: 5
        System.out.println(candy(new int[]{1,2,2})); // Expected: 4
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int candy(vector<int>& ratings) {
    // Write your solution here
    
}

int main() {
    vector<int> ratings1 = {1,0,2};
    cout << candy(ratings1) << endl; // Expected: 5
    
    vector<int> ratings2 = {1,2,2};
    cout << candy(ratings2) << endl; // Expected: 4
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int candy(int* ratings, int ratingsSize) {
    // Write your solution here
    
}

int main() {
    int ratings1[] = {1,0,2};
    printf("%d\\n", candy(ratings1, 3)); // Expected: 5
    
    int ratings2[] = {1,2,2};
    printf("%d\\n", candy(ratings2, 3)); // Expected: 4
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int Candy(int[] ratings) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(Candy(new int[] {1,0,2})); // Expected: 5
        Console.WriteLine(Candy(new int[] {1,2,2})); // Expected: 4
    }
}`,

            go: `package main

import "fmt"

func candy(ratings []int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(candy([]int{1,0,2})) // Expected: 5
    fmt.Println(candy([]int{1,2,2})) // Expected: 4
}`,

            rust: `fn candy(ratings: Vec<i32>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", candy(vec![1,0,2])); // Expected: 5
    println!("{}", candy(vec![1,2,2])); // Expected: 4
}`,

            ruby: `def candy(ratings)
    # Write your solution here
    
end

# Test cases
puts candy([1,0,2]) # Expected: 5
puts candy([1,2,2]) # Expected: 4`,

            php: `<?php
function candy($ratings) {
    // Write your solution here
    
}

// Test cases
echo candy([1,0,2]) . "\\n"; // Expected: 5
echo candy([1,2,2]) . "\\n"; // Expected: 4
?>`,

            swift: `func candy(_ ratings: [Int]) -> Int {
    // Write your solution here
    
}

// Test cases
print(candy([1,0,2])) // Expected: 5
print(candy([1,2,2])) // Expected: 4`,

            kotlin: `fun candy(ratings: IntArray): Int {
    // Write your solution here
    
}

fun main() {
    println(candy(intArrayOf(1,0,2))) // Expected: 5
    println(candy(intArrayOf(1,2,2))) // Expected: 4
}`,

            scala: `object Solution {
    def candy(ratings: Array[Int]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(candy(Array(1,0,2))) // Expected: 5
        println(candy(Array(1,2,2))) // Expected: 4
    }
}`,

            perl: `sub candy {
    my $ratings = shift;
    # Write your solution here
    
}

# Test cases
print candy([1,0,2]) . "\\n"; # Expected: 5
print candy([1,2,2]) . "\\n"; # Expected: 4`,

            r: `candy <- function(ratings) {
    # Write your solution here
    
}

# Test cases
print(candy(c(1,0,2))) # Expected: 5
print(candy(c(1,2,2))) # Expected: 4`
        },
        expectedOutput: {
            javascript: "5\n4",
            python: "5\n4",
            java: "5\n4"
        },
    },

    "single-number": {
        id: "single-number",
        title: "Single Number",
        difficulty: "Easy",
        category: "Array • Bit Manipulation",
        description: {
            text: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.",
            notes: [
                "Every element appears exactly twice except one element that appears once.",
                "Use XOR bit manipulation for the optimal solution.",
                "The solution should run in O(n) time and O(1) space."
            ],
        },
        examples: [
            {
                input: "nums = [2,2,1]",
                output: "1",
            },
            {
                input: "nums = [4,1,2,1,2]",
                output: "4",
            },
            {
                input: "nums = [1]",
                output: "1",
            },
        ],
        constraints: [
            "1 ≤ nums.length ≤ 3 * 10⁴",
            "-3 * 10⁴ ≤ nums[i] ≤ 3 * 10⁴",
            "Each element appears twice except for one element which appears once",
        ],
        starterCode: {
            javascript: `function singleNumber(nums) {
    // Write your solution here
    
}

// Test cases
console.log(singleNumber([2,2,1])); // Expected: 1
console.log(singleNumber([4,1,2,1,2])); // Expected: 4
console.log(singleNumber([1])); // Expected: 1`,

            typescript: `function singleNumber(nums: number[]): number {
    // Write your solution here
    
}

// Test cases
console.log(singleNumber([2,2,1])); // Expected: 1
console.log(singleNumber([4,1,2,1,2])); // Expected: 4
console.log(singleNumber([1])); // Expected: 1`,

            python: `def singleNumber(nums):
    # Write your solution here
    pass

# Test cases
print(singleNumber([2,2,1]))  # Expected: 1
print(singleNumber([4,1,2,1,2]))  # Expected: 4
print(singleNumber([1]))  # Expected: 1`,

            java: `class Solution {
    public static int singleNumber(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(singleNumber(new int[]{2,2,1})); // Expected: 1
        System.out.println(singleNumber(new int[]{4,1,2,1,2})); // Expected: 4
        System.out.println(singleNumber(new int[]{1})); // Expected: 1
    }
}`,

            cpp: `#include <iostream>
#include <vector>
using namespace std;

int singleNumber(vector<int>& nums) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {2,2,1};
    cout << singleNumber(nums1) << endl; // Expected: 1
    
    vector<int> nums2 = {4,1,2,1,2};
    cout << singleNumber(nums2) << endl; // Expected: 4
    
    vector<int> nums3 = {1};
    cout << singleNumber(nums3) << endl; // Expected: 1
    
    return 0;
}`,

            c: `#include <stdio.h>

int singleNumber(int* nums, int numsSize) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {2,2,1};
    printf("%d\\n", singleNumber(nums1, 3)); // Expected: 1
    
    int nums2[] = {4,1,2,1,2};
    printf("%d\\n", singleNumber(nums2, 5)); // Expected: 4
    
    int nums3[] = {1};
    printf("%d\\n", singleNumber(nums3, 1)); // Expected: 1
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int SingleNumber(int[] nums) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(SingleNumber(new int[] {2,2,1})); // Expected: 1
        Console.WriteLine(SingleNumber(new int[] {4,1,2,1,2})); // Expected: 4
        Console.WriteLine(SingleNumber(new int[] {1})); // Expected: 1
    }
}`,

            go: `package main

import "fmt"

func singleNumber(nums []int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(singleNumber([]int{2,2,1})) // Expected: 1
    fmt.Println(singleNumber([]int{4,1,2,1,2})) // Expected: 4
    fmt.Println(singleNumber([]int{1})) // Expected: 1
}`,

            rust: `fn single_number(nums: Vec<i32>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", single_number(vec![2,2,1])); // Expected: 1
    println!("{}", single_number(vec![4,1,2,1,2])); // Expected: 4
    println!("{}", single_number(vec![1])); // Expected: 1
}`,

            ruby: `def single_number(nums)
    # Write your solution here
    
end

# Test cases
puts single_number([2,2,1]) # Expected: 1
puts single_number([4,1,2,1,2]) # Expected: 4
puts single_number([1]) # Expected: 1`,

            php: `<?php
function singleNumber($nums) {
    // Write your solution here
    
}

// Test cases
echo singleNumber([2,2,1]) . "\\n"; // Expected: 1
echo singleNumber([4,1,2,1,2]) . "\\n"; // Expected: 4
echo singleNumber([1]) . "\\n"; // Expected: 1
?>`,

            swift: `func singleNumber(_ nums: [Int]) -> Int {
    // Write your solution here
    
}

// Test cases
print(singleNumber([2,2,1])) // Expected: 1
print(singleNumber([4,1,2,1,2])) // Expected: 4
print(singleNumber([1])) // Expected: 1`,

            kotlin: `fun singleNumber(nums: IntArray): Int {
    // Write your solution here
    
}

fun main() {
    println(singleNumber(intArrayOf(2,2,1))) // Expected: 1
    println(singleNumber(intArrayOf(4,1,2,1,2))) // Expected: 4
    println(singleNumber(intArrayOf(1))) // Expected: 1
}`,

            scala: `object Solution {
    def singleNumber(nums: Array[Int]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(singleNumber(Array(2,2,1))) // Expected: 1
        println(singleNumber(Array(4,1,2,1,2))) // Expected: 4
        println(singleNumber(Array(1))) // Expected: 1
    }
}`,

            perl: `sub singleNumber {
    my $nums = shift;
    # Write your solution here
    
}

# Test cases
print singleNumber([2,2,1]) . "\\n"; # Expected: 1
print singleNumber([4,1,2,1,2]) . "\\n"; # Expected: 4
print singleNumber([1]) . "\\n"; # Expected: 1`,

            r: `singleNumber <- function(nums) {
    # Write your solution here
    
}

# Test cases
print(singleNumber(c(2,2,1))) # Expected: 1
print(singleNumber(c(4,1,2,1,2))) # Expected: 4
print(singleNumber(c(1))) # Expected: 1`
        },
        expectedOutput: {
            javascript: "1\n4\n1",
            python: "1\n4\n1",
            java: "1\n4\n1"
        },
    },

    "majority-element": {
        id: "majority-element",
        title: "Majority Element",
        difficulty: "Easy",
        category: "Array • Hash Table • Divide and Conquer • Sorting",
        description: {
            text: "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n/2⌋ times. You may assume that the majority element always exists in the array.",
            notes: [
                "The majority element appears more than n/2 times.",
                "Can be solved using Boyer-Moore Voting Algorithm in O(n) time and O(1) space."
            ],
        },
        examples: [
            {
                input: "nums = [3,2,3]",
                output: "3",
            },
            {
                input: "nums = [2,2,1,1,1,2,2]",
                output: "2",
            },
        ],
        constraints: [
            "n == nums.length",
            "1 ≤ n ≤ 5 * 10⁴",
            "-10⁹ ≤ nums[i] ≤ 10⁹",
        ],
        starterCode: {
            javascript: `function majorityElement(nums) {
    // Write your solution here
    
}

// Test cases
console.log(majorityElement([3,2,3])); // Expected: 3
console.log(majorityElement([2,2,1,1,1,2,2])); // Expected: 2`,

            typescript: `function majorityElement(nums: number[]): number {
    // Write your solution here
    
}

// Test cases
console.log(majorityElement([3,2,3])); // Expected: 3
console.log(majorityElement([2,2,1,1,1,2,2])); // Expected: 2`,

            python: `def majorityElement(nums):
    # Write your solution here
    pass

# Test cases
print(majorityElement([3,2,3]))  # Expected: 3
print(majorityElement([2,2,1,1,1,2,2]))  # Expected: 2`,

            java: `class Solution {
    public static int majorityElement(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(majorityElement(new int[]{3,2,3})); // Expected: 3
        System.out.println(majorityElement(new int[]{2,2,1,1,1,2,2})); // Expected: 2
    }
}`,

            cpp: `#include <iostream>
#include <vector>
using namespace std;

int majorityElement(vector<int>& nums) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {3,2,3};
    cout << majorityElement(nums1) << endl; // Expected: 3
    
    vector<int> nums2 = {2,2,1,1,1,2,2};
    cout << majorityElement(nums2) << endl; // Expected: 2
    
    return 0;
}`,

            c: `#include <stdio.h>

int majorityElement(int* nums, int numsSize) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {3,2,3};
    printf("%d\\n", majorityElement(nums1, 3)); // Expected: 3
    
    int nums2[] = {2,2,1,1,1,2,2};
    printf("%d\\n", majorityElement(nums2, 7)); // Expected: 2
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int MajorityElement(int[] nums) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(MajorityElement(new int[] {3,2,3})); // Expected: 3
        Console.WriteLine(MajorityElement(new int[] {2,2,1,1,1,2,2})); // Expected: 2
    }
}`,

            go: `package main

import "fmt"

func majorityElement(nums []int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(majorityElement([]int{3,2,3})) // Expected: 3
    fmt.Println(majorityElement([]int{2,2,1,1,1,2,2})) // Expected: 2
}`,

            rust: `fn majority_element(nums: Vec<i32>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", majority_element(vec![3,2,3])); // Expected: 3
    println!("{}", majority_element(vec![2,2,1,1,1,2,2])); // Expected: 2
}`,

            ruby: `def majority_element(nums)
    # Write your solution here
    
end

# Test cases
puts majority_element([3,2,3]) # Expected: 3
puts majority_element([2,2,1,1,1,2,2]) # Expected: 2`,

            php: `<?php
function majorityElement($nums) {
    // Write your solution here
    
}

// Test cases
echo majorityElement([3,2,3]) . "\\n"; // Expected: 3
echo majorityElement([2,2,1,1,1,2,2]) . "\\n"; // Expected: 2
?>`,

            swift: `func majorityElement(_ nums: [Int]) -> Int {
    // Write your solution here
    
}

// Test cases
print(majorityElement([3,2,3])) // Expected: 3
print(majorityElement([2,2,1,1,1,2,2])) // Expected: 2`,

            kotlin: `fun majorityElement(nums: IntArray): Int {
    // Write your solution here
    
}

fun main() {
    println(majorityElement(intArrayOf(3,2,3))) // Expected: 3
    println(majorityElement(intArrayOf(2,2,1,1,1,2,2))) // Expected: 2
}`,

            scala: `object Solution {
    def majorityElement(nums: Array[Int]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(majorityElement(Array(3,2,3))) // Expected: 3
        println(majorityElement(Array(2,2,1,1,1,2,2))) // Expected: 2
    }
}`,

            perl: `sub majorityElement {
    my $nums = shift;
    # Write your solution here
    
}

# Test cases
print majorityElement([3,2,3]) . "\\n"; # Expected: 3
print majorityElement([2,2,1,1,1,2,2]) . "\\n"; # Expected: 2`,

            r: `majorityElement <- function(nums) {
    # Write your solution here
    
}

# Test cases
print(majorityElement(c(3,2,3))) # Expected: 3
print(majorityElement(c(2,2,1,1,1,2,2))) # Expected: 2`
        },
        expectedOutput: {
            javascript: "3\n2",
            python: "3\n2",
            java: "3\n2"
        },
    },

    "find-all-duplicates-in-an-array": {
        id: "find-all-duplicates-in-an-array",
        title: "Find All Duplicates in an Array",
        difficulty: "Medium",
        category: "Array • Hash Table",
        description: {
            text: "Given an integer array nums of length n where all the integers are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appear twice. You must write an algorithm that runs in O(n) time and uses only constant extra space.",
            notes: [
                "Each element appears either once or twice.",
                "Use the fact that elements are in range [1, n] to mark visited elements."
            ],
        },
        examples: [
            {
                input: "nums = [4,3,2,7,8,2,3,1]",
                output: "[2,3]",
            },
            {
                input: "nums = [1,1,2]",
                output: "[1]",
            },
            {
                input: "nums = [1]",
                output: "[]",
            },
        ],
        constraints: [
            "n == nums.length",
            "1 ≤ n ≤ 10⁵",
            "1 ≤ nums[i] ≤ n",
            "Each element appears once or twice",
        ],
        starterCode: {
            javascript: `function findDuplicates(nums) {
    // Write your solution here
    
}

// Test cases
console.log(findDuplicates([4,3,2,7,8,2,3,1])); // Expected: [2,3]
console.log(findDuplicates([1,1,2])); // Expected: [1]
console.log(findDuplicates([1])); // Expected: []`,

            typescript: `function findDuplicates(nums: number[]): number[] {
    // Write your solution here
    
}

// Test cases
console.log(findDuplicates([4,3,2,7,8,2,3,1])); // Expected: [2,3]
console.log(findDuplicates([1,1,2])); // Expected: [1]
console.log(findDuplicates([1])); // Expected: []`,

            python: `def findDuplicates(nums):
    # Write your solution here
    pass

# Test cases
print(findDuplicates([4,3,2,7,8,2,3,1]))  # Expected: [2,3]
print(findDuplicates([1,1,2]))  # Expected: [1]
print(findDuplicates([1]))  # Expected: []`,

            java: `import java.util.*;

class Solution {
    public static List<Integer> findDuplicates(int[] nums) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(findDuplicates(new int[]{4,3,2,7,8,2,3,1})); // Expected: [2,3]
        System.out.println(findDuplicates(new int[]{1,1,2})); // Expected: [1]
        System.out.println(findDuplicates(new int[]{1})); // Expected: []
    }
}`,

            cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> findDuplicates(vector<int>& nums) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {4,3,2,7,8,2,3,1};
    vector<int> result1 = findDuplicates(nums1);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << result1[i];
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    vector<int> nums2 = {1,1,2};
    vector<int> result2 = findDuplicates(nums2);
    cout << "[";
    for (size_t i = 0; i < result2.size(); i++) {
        cout << result2[i];
        if (i < result2.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    vector<int> nums3 = {1};
    vector<int> result3 = findDuplicates(nums3);
    cout << "[]" << endl;
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int* findDuplicates(int* nums, int numsSize, int* returnSize) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {4,3,2,7,8,2,3,1};
    int returnSize1;
    int* result1 = findDuplicates(nums1, 8, &returnSize1);
    printf("[");
    for (int i = 0; i < returnSize1; i++) {
        printf("%d", result1[i]);
        if (i < returnSize1 - 1) printf(",");
    }
    printf("]\\n");
    free(result1);
    
    int nums2[] = {1,1,2};
    int returnSize2;
    int* result2 = findDuplicates(nums2, 3, &returnSize2);
    printf("[");
    for (int i = 0; i < returnSize2; i++) {
        printf("%d", result2[i]);
        if (i < returnSize2 - 1) printf(",");
    }
    printf("]\\n");
    free(result2);
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<int> FindDuplicates(int[] nums) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine($"[{string.Join(",", FindDuplicates(new int[] {4,3,2,7,8,2,3,1}))}]");
        Console.WriteLine($"[{string.Join(",", FindDuplicates(new int[] {1,1,2}))}]");
        Console.WriteLine($"[{string.Join(",", FindDuplicates(new int[] {1}))}]");
    }
}`,

            go: `package main

import "fmt"

func findDuplicates(nums []int) []int {
    // Write your solution here
    
}

func main() {
    fmt.Println(findDuplicates([]int{4,3,2,7,8,2,3,1})) // Expected: [2,3]
    fmt.Println(findDuplicates([]int{1,1,2})) // Expected: [1]
    fmt.Println(findDuplicates([]int{1})) // Expected: []
}`,

            rust: `fn find_duplicates(nums: Vec<i32>) -> Vec<i32> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", find_duplicates(vec![4,3,2,7,8,2,3,1])); // Expected: [2,3]
    println!("{:?}", find_duplicates(vec![1,1,2])); // Expected: [1]
    println!("{:?}", find_duplicates(vec![1])); // Expected: []
}`,

            ruby: `def find_duplicates(nums)
    # Write your solution here
    
end

# Test cases
puts find_duplicates([4,3,2,7,8,2,3,1]).inspect # Expected: [2,3]
puts find_duplicates([1,1,2]).inspect # Expected: [1]
puts find_duplicates([1]).inspect # Expected: []`,

            php: `<?php
function findDuplicates($nums) {
    // Write your solution here
    
}

// Test cases
print_r(findDuplicates([4,3,2,7,8,2,3,1]));
print_r(findDuplicates([1,1,2]));
print_r(findDuplicates([1]));
?>`,

            swift: `func findDuplicates(_ nums: [Int]) -> [Int] {
    // Write your solution here
    
}

// Test cases
print(findDuplicates([4,3,2,7,8,2,3,1])) // Expected: [2,3]
print(findDuplicates([1,1,2])) // Expected: [1]
print(findDuplicates([1])) // Expected: []`,

            kotlin: `fun findDuplicates(nums: IntArray): List<Int> {
    // Write your solution here
    
}

fun main() {
    println(findDuplicates(intArrayOf(4,3,2,7,8,2,3,1))) // Expected: [2,3]
    println(findDuplicates(intArrayOf(1,1,2))) // Expected: [1]
    println(findDuplicates(intArrayOf(1))) // Expected: []
}`,

            scala: `object Solution {
    def findDuplicates(nums: Array[Int]): List[Int] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(findDuplicates(Array(4,3,2,7,8,2,3,1))) // Expected: List(2,3)
        println(findDuplicates(Array(1,1,2))) // Expected: List(1)
        println(findDuplicates(Array(1))) // Expected: List()
    }
}`,

            perl: `sub findDuplicates {
    my $nums = shift;
    # Write your solution here
    
}

# Test cases
my @result1 = @{findDuplicates([4,3,2,7,8,2,3,1])};
print "[" . join(",", @result1) . "]\\n";

my @result2 = @{findDuplicates([1,1,2])};
print "[" . join(",", @result2) . "]\\n";

my @result3 = @{findDuplicates([1])};
print "[" . join(",", @result3) . "]\\n";`,

            r: `findDuplicates <- function(nums) {
    # Write your solution here
    
}

# Test cases
print(findDuplicates(c(4,3,2,7,8,2,3,1))) # Expected: 2 3
print(findDuplicates(c(1,1,2))) # Expected: 1
print(findDuplicates(c(1))) # Expected:`
        },
        expectedOutput: {
            javascript: "[2,3]\n[1]\n[]",
            python: "[2,3]\n[1]\n[]",
            java: "[2,3]\n[1]\n[]"
        },
    },

    "find-the-duplicate-number": {
        id: "find-the-duplicate-number",
        title: "Find the Duplicate Number",
        difficulty: "Medium",
        category: "Array • Two Pointers • Binary Search",
        description: {
            text: "Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive. There is only one repeated number in nums, return this repeated number. You must solve the problem without modifying the array and using only constant extra space.",
            notes: [
                "There is only one duplicate number, but it may appear more than twice.",
                "The solution must use O(1) extra space and not modify the original array.",
                "Can be solved using Floyd's cycle detection algorithm."
            ],
        },
        examples: [
            {
                input: "nums = [1,3,4,2,2]",
                output: "2",
            },
            {
                input: "nums = [3,1,3,4,2]",
                output: "3",
            },
            {
                input: "nums = [3,3,3,3,3]",
                output: "3",
            },
        ],
        constraints: [
            "1 ≤ n ≤ 10⁵",
            "nums.length == n + 1",
            "1 ≤ nums[i] ≤ n",
            "All integers appear exactly once except for one which appears two or more times",
        ],
        starterCode: {
            javascript: `function findDuplicate(nums) {
    // Write your solution here
    
}

// Test cases
console.log(findDuplicate([1,3,4,2,2])); // Expected: 2
console.log(findDuplicate([3,1,3,4,2])); // Expected: 3
console.log(findDuplicate([3,3,3,3,3])); // Expected: 3`,

            typescript: `function findDuplicate(nums: number[]): number {
    // Write your solution here
    
}

// Test cases
console.log(findDuplicate([1,3,4,2,2])); // Expected: 2
console.log(findDuplicate([3,1,3,4,2])); // Expected: 3
console.log(findDuplicate([3,3,3,3,3])); // Expected: 3`,

            python: `def findDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(findDuplicate([1,3,4,2,2]))  # Expected: 2
print(findDuplicate([3,1,3,4,2]))  # Expected: 3
print(findDuplicate([3,3,3,3,3]))  # Expected: 3`,

            java: `class Solution {
    public static int findDuplicate(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(findDuplicate(new int[]{1,3,4,2,2})); // Expected: 2
        System.out.println(findDuplicate(new int[]{3,1,3,4,2})); // Expected: 3
        System.out.println(findDuplicate(new int[]{3,3,3,3,3})); // Expected: 3
    }
}`,

            cpp: `#include <iostream>
#include <vector>
using namespace std;

int findDuplicate(vector<int>& nums) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {1,3,4,2,2};
    cout << findDuplicate(nums1) << endl; // Expected: 2
    
    vector<int> nums2 = {3,1,3,4,2};
    cout << findDuplicate(nums2) << endl; // Expected: 3
    
    vector<int> nums3 = {3,3,3,3,3};
    cout << findDuplicate(nums3) << endl; // Expected: 3
    
    return 0;
}`,

            c: `#include <stdio.h>

int findDuplicate(int* nums, int numsSize) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {1,3,4,2,2};
    printf("%d\\n", findDuplicate(nums1, 5)); // Expected: 2
    
    int nums2[] = {3,1,3,4,2};
    printf("%d\\n", findDuplicate(nums2, 5)); // Expected: 3
    
    int nums3[] = {3,3,3,3,3};
    printf("%d\\n", findDuplicate(nums3, 5)); // Expected: 3
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int FindDuplicate(int[] nums) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(FindDuplicate(new int[] {1,3,4,2,2})); // Expected: 2
        Console.WriteLine(FindDuplicate(new int[] {3,1,3,4,2})); // Expected: 3
        Console.WriteLine(FindDuplicate(new int[] {3,3,3,3,3})); // Expected: 3
    }
}`,

            go: `package main

import "fmt"

func findDuplicate(nums []int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(findDuplicate([]int{1,3,4,2,2})) // Expected: 2
    fmt.Println(findDuplicate([]int{3,1,3,4,2})) // Expected: 3
    fmt.Println(findDuplicate([]int{3,3,3,3,3})) // Expected: 3
}`,

            rust: `fn find_duplicate(nums: Vec<i32>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", find_duplicate(vec![1,3,4,2,2])); // Expected: 2
    println!("{}", find_duplicate(vec![3,1,3,4,2])); // Expected: 3
    println!("{}", find_duplicate(vec![3,3,3,3,3])); // Expected: 3
}`,

            ruby: `def find_duplicate(nums)
    # Write your solution here
    
end

# Test cases
puts find_duplicate([1,3,4,2,2]) # Expected: 2
puts find_duplicate([3,1,3,4,2]) # Expected: 3
puts find_duplicate([3,3,3,3,3]) # Expected: 3`,

            php: `<?php
function findDuplicate($nums) {
    // Write your solution here
    
}

// Test cases
echo findDuplicate([1,3,4,2,2]) . "\\n"; // Expected: 2
echo findDuplicate([3,1,3,4,2]) . "\\n"; // Expected: 3
echo findDuplicate([3,3,3,3,3]) . "\\n"; // Expected: 3
?>`,

            swift: `func findDuplicate(_ nums: [Int]) -> Int {
    // Write your solution here
    
}

// Test cases
print(findDuplicate([1,3,4,2,2])) // Expected: 2
print(findDuplicate([3,1,3,4,2])) // Expected: 3
print(findDuplicate([3,3,3,3,3])) // Expected: 3`,

            kotlin: `fun findDuplicate(nums: IntArray): Int {
    // Write your solution here
    
}

fun main() {
    println(findDuplicate(intArrayOf(1,3,4,2,2))) // Expected: 2
    println(findDuplicate(intArrayOf(3,1,3,4,2))) // Expected: 3
    println(findDuplicate(intArrayOf(3,3,3,3,3))) // Expected: 3
}`,

            scala: `object Solution {
    def findDuplicate(nums: Array[Int]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(findDuplicate(Array(1,3,4,2,2))) // Expected: 2
        println(findDuplicate(Array(3,1,3,4,2))) // Expected: 3
        println(findDuplicate(Array(3,3,3,3,3))) // Expected: 3
    }
}`,

            perl: `sub findDuplicate {
    my $nums = shift;
    # Write your solution here
    
}

# Test cases
print findDuplicate([1,3,4,2,2]) . "\\n"; # Expected: 2
print findDuplicate([3,1,3,4,2]) . "\\n"; # Expected: 3
print findDuplicate([3,3,3,3,3]) . "\\n"; # Expected: 3`,

            r: `findDuplicate <- function(nums) {
    # Write your solution here
    
}

# Test cases
print(findDuplicate(c(1,3,4,2,2))) # Expected: 2
print(findDuplicate(c(3,1,3,4,2))) # Expected: 3
print(findDuplicate(c(3,3,3,3,3))) # Expected: 3`
        },
        expectedOutput: {
            javascript: "2\n3\n3",
            python: "2\n3\n3",
            java: "2\n3\n3"
        },
    },

    "letter-combinations-of-a-phone-number": {
        id: "letter-combinations-of-a-phone-number",
        title: "Letter Combinations of a Phone Number",
        difficulty: "Medium",
        category: "String • Backtracking • Hash Table",
        description: {
            text: "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order. A mapping of digits to letters (just like on the telephone buttons) is given below.",
            notes: [
                "Digit 1 does not map to any letters.",
                "Digit 0 does not map to any letters.",
                "Use backtracking to generate all combinations."
            ],
        },
        examples: [
            {
                input: "digits = '23'",
                output: "['ad','ae','af','bd','be','bf','cd','ce','cf']",
            },
            {
                input: "digits = ''",
                output: "[]",
            },
            {
                input: "digits = '2'",
                output: "['a','b','c']",
            },
        ],
        constraints: [
            "0 ≤ digits.length ≤ 4",
            "digits[i] is a digit in the range ['2', '9']",
        ],
        starterCode: {
            javascript: `function letterCombinations(digits) {
    // Write your solution here
    
}

// Test cases
console.log(letterCombinations('23')); // Expected: ['ad','ae','af','bd','be','bf','cd','ce','cf']
console.log(letterCombinations('')); // Expected: []
console.log(letterCombinations('2')); // Expected: ['a','b','c']`,

            typescript: `function letterCombinations(digits: string): string[] {
    // Write your solution here
    
}

// Test cases
console.log(letterCombinations('23'));
console.log(letterCombinations(''));
console.log(letterCombinations('2'));`,

            python: `def letterCombinations(digits):
    # Write your solution here
    pass

# Test cases
print(letterCombinations('23'))  # Expected: ['ad','ae','af','bd','be','bf','cd','ce','cf']
print(letterCombinations(''))  # Expected: []
print(letterCombinations('2'))  # Expected: ['a','b','c']`,

            java: `import java.util.*;

class Solution {
    public static List<String> letterCombinations(String digits) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(letterCombinations("23"));
        System.out.println(letterCombinations(""));
        System.out.println(letterCombinations("2"));
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
using namespace std;

vector<string> letterCombinations(string digits) {
    // Write your solution here
    
}

int main() {
    vector<string> result1 = letterCombinations("23");
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << result1[i];
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char** letterCombinations(char* digits, int* returnSize) {
    // Write your solution here
    
}

int main() {
    int returnSize;
    char** result = letterCombinations("23", &returnSize);
    printf("[");
    for (int i = 0; i < returnSize; i++) {
        printf("%s", result[i]);
        if (i < returnSize - 1) printf(",");
    }
    printf("]\\n");
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<string> LetterCombinations(string digits) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine($"[{string.Join(",", LetterCombinations("23"))}]");
    }
}`,

            go: `package main

import "fmt"

func letterCombinations(digits string) []string {
    // Write your solution here
    
}

func main() {
    fmt.Println(letterCombinations("23"))
}`,

            rust: `fn letter_combinations(digits: String) -> Vec<String> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", letter_combinations("23".to_string()));
}`,

            ruby: `def letter_combinations(digits)
    # Write your solution here
    
end

puts letter_combinations('23').inspect`,

            php: `<?php
function letterCombinations($digits) {
    // Write your solution here
    
}

print_r(letterCombinations('23'));
?>`,

            swift: `func letterCombinations(_ digits: String) -> [String] {
    // Write your solution here
    
}

print(letterCombinations("23"))`,

            kotlin: `fun letterCombinations(digits: String): List<String> {
    // Write your solution here
    
}

fun main() {
    println(letterCombinations("23"))
}`,

            scala: `object Solution {
    def letterCombinations(digits: String): List[String] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(letterCombinations("23"))
    }
}`,

            perl: `sub letterCombinations {
    my $digits = shift;
    # Write your solution here
    
}

print "[" . join(",", @{letterCombinations('23')}) . "]\\n";`,

            r: `letterCombinations <- function(digits) {
    # Write your solution here
    
}

print(letterCombinations('23'))`
        },
        expectedOutput: {
            javascript: "['ad','ae','af','bd','be','bf','cd','ce','cf']\n[]\n['a','b','c']",
            python: "['ad','ae','af','bd','be','bf','cd','ce','cf']\n[]\n['a','b','c']",
            java: "[ad, ae, af, bd, be, bf, cd, ce, cf]\n[]\n[a, b, c]"
        },
    },

    "remove-nth-node-from-end-of-list": {
        id: "remove-nth-node-from-end-of-list",
        title: "Remove Nth Node From End of List",
        difficulty: "Medium",
        category: "Linked List • Two Pointers",
        description: {
            text: "Given the head of a linked list, remove the nth node from the end of the list and return its head. The number of nodes in the list is sz. The task is to remove the nth node from the end in one pass.",
            notes: [
                "Use two pointers (fast and slow) to find the nth node from the end in one pass.",
                "Handle edge cases like removing the first node or last node."
            ],
        },
        examples: [
            {
                input: "head = [1,2,3,4,5], n = 2",
                output: "[1,2,3,5]",
            },
            {
                input: "head = [1], n = 1",
                output: "[]",
            },
            {
                input: "head = [1,2], n = 1",
                output: "[1]",
            },
        ],
        constraints: [
            "The number of nodes in the list is sz",
            "1 ≤ sz ≤ 30",
            "0 ≤ Node.val ≤ 100",
            "1 ≤ n ≤ sz",
        ],
        starterCode: {
            javascript: `function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function removeNthFromEnd(head, n) {
    // Write your solution here
    
}

// Helper function to create linked list from array
function createLinkedList(arr) {
    if (!arr.length) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Test cases
let list1 = createLinkedList([1,2,3,4,5]);
console.log(linkedListToArray(removeNthFromEnd(list1, 2))); // Expected: [1,2,3,5]

let list2 = createLinkedList([1]);
console.log(linkedListToArray(removeNthFromEnd(list2, 1))); // Expected: []

let list3 = createLinkedList([1,2]);
console.log(linkedListToArray(removeNthFromEnd(list3, 1))); // Expected: [1]`,

            typescript: `class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // Write your solution here
    
}

// Helper function to create linked list from array
function createLinkedList(arr: number[]): ListNode | null {
    if (!arr.length) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array
function linkedListToArray(head: ListNode | null): number[] {
    let result: number[] = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Test cases
let list1 = createLinkedList([1,2,3,4,5]);
console.log(linkedListToArray(removeNthFromEnd(list1, 2))); // Expected: [1,2,3,5]

let list2 = createLinkedList([1]);
console.log(linkedListToArray(removeNthFromEnd(list2, 1))); // Expected: []

let list3 = createLinkedList([1,2]);
console.log(linkedListToArray(removeNthFromEnd(list3, 1))); // Expected: [1]`,

            python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def removeNthFromEnd(head, n):
    # Write your solution here
    pass

# Helper function to create linked list from list
def createLinkedList(arr):
    if not arr:
        return None
    head = ListNode(arr[0])
    current = head
    for val in arr[1:]:
        current.next = ListNode(val)
        current = current.next
    return head

# Helper function to convert linked list to list
def linkedListToList(head):
    result = []
    current = head
    while current:
        result.append(current.val)
        current = current.next
    return result

# Test cases
list1 = createLinkedList([1,2,3,4,5])
print(linkedListToList(removeNthFromEnd(list1, 2)))  # Expected: [1,2,3,5]

list2 = createLinkedList([1])
print(linkedListToList(removeNthFromEnd(list2, 1)))  # Expected: []

list3 = createLinkedList([1,2])
print(linkedListToList(removeNthFromEnd(list3, 1)))  # Expected: [1]`,

            java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public static ListNode removeNthFromEnd(ListNode head, int n) {
        // Write your solution here
        
        return null;
    }
    
    // Helper function to create linked list from array
    public static ListNode createLinkedList(int[] arr) {
        if (arr.length == 0) return null;
        ListNode head = new ListNode(arr[0]);
        ListNode current = head;
        for (int i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }
    
    // Helper function to convert linked list to list
    public static List<Integer> linkedListToList(ListNode head) {
        List<Integer> result = new ArrayList<>();
        ListNode current = head;
        while (current != null) {
            result.add(current.val);
            current = current.next;
        }
        return result;
    }
    
    public static void main(String[] args) {
        ListNode list1 = createLinkedList(new int[]{1,2,3,4,5});
        System.out.println(linkedListToList(removeNthFromEnd(list1, 2))); // Expected: [1,2,3,5]
        
        ListNode list2 = createLinkedList(new int[]{1});
        System.out.println(linkedListToList(removeNthFromEnd(list2, 1))); // Expected: []
        
        ListNode list3 = createLinkedList(new int[]{1,2});
        System.out.println(linkedListToList(removeNthFromEnd(list3, 1))); // Expected: [1]
    }
}`,

            cpp: `#include <iostream>
#include <vector>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

ListNode* removeNthFromEnd(ListNode* head, int n) {
    // Write your solution here
    
}

// Helper function to create linked list from vector
ListNode* createLinkedList(vector<int> arr) {
    if (arr.empty()) return nullptr;
    ListNode* head = new ListNode(arr[0]);
    ListNode* current = head;
    for (size_t i = 1; i < arr.size(); i++) {
        current->next = new ListNode(arr[i]);
        current = current->next;
    }
    return head;
}

// Helper function to convert linked list to vector
vector<int> linkedListToVector(ListNode* head) {
    vector<int> result;
    ListNode* current = head;
    while (current) {
        result.push_back(current->val);
        current = current->next;
    }
    return result;
}

int main() {
    ListNode* list1 = createLinkedList({1,2,3,4,5});
    vector<int> result1 = linkedListToVector(removeNthFromEnd(list1, 2));
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << result1[i];
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* removeNthFromEnd(struct ListNode* head, int n) {
    // Write your solution here
    
}

int main() {
    // For C, manual list construction required
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

public class ListNode {
    public int val;
    public ListNode next;
    public ListNode(int val=0, ListNode next=null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    public static ListNode RemoveNthFromEnd(ListNode head, int n) {
        // Write your solution here
        
    }
    
    static void Main() {
        // For C#, manual list construction required
    }
}`,

            go: `package main

import "fmt"

type ListNode struct {
    Val int
    Next *ListNode
}

func removeNthFromEnd(head *ListNode, n int) *ListNode {
    // Write your solution here
    
}

func main() {
    // For Go, manual list construction required
}`,

            rust: `#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

fn remove_nth_from_end(head: Option<Box<ListNode>>, n: i32) -> Option<Box<ListNode>> {
    // Write your solution here
    
}

fn main() {
    // For Rust, manual list construction required
}`,

            ruby: `class ListNode
    attr_accessor :val, :next
    def initialize(val = 0, _next = nil)
        @val = val
        @next = _next
    end
end

def remove_nth_from_end(head, n)
    # Write your solution here
    
end

# Test cases would need manual list construction`,

            php: `<?php
class ListNode {
    public $val = 0;
    public $next = null;
    function __construct($val = 0, $next = null) {
        $this->val = $val;
        $this->next = $next;
    }
}

function removeNthFromEnd($head, $n) {
    // Write your solution here
    
}

// Test cases would need manual list construction
?>`,

            swift: `public class ListNode {
    public var val: Int
    public var next: ListNode?
    public init() { self.val = 0; self.next = nil; }
    public init(_ val: Int) { self.val = val; self.next = nil; }
    public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
}

func removeNthFromEnd(_ head: ListNode?, _ n: Int) -> ListNode? {
    // Write your solution here
    
}

// Test cases would need manual list construction`,

            kotlin: `class ListNode(var value: Int) {
    var next: ListNode? = null
}

fun removeNthFromEnd(head: ListNode?, n: Int): ListNode? {
    // Write your solution here
    
}

// Test cases would need manual list construction`,

            scala: `class ListNode(_x: Int = 0, _next: ListNode = null) {
    var val: Int = _x
    var next: ListNode = _next
}

object Solution {
    def removeNthFromEnd(head: ListNode, n: Int): ListNode = {
        // Write your solution here
        
    }
}`,

            perl: `package ListNode;
sub new {
    my ($class, $val, $next) = @_;
    my $self = { val => $val // 0, next => $next // undef };
    bless $self, $class;
    return $self;
}

sub removeNthFromEnd {
    my ($head, $n) = @_;
    # Write your solution here
    
}

# Test cases would need manual list construction`,

            r: `ListNode <- setRefClass("ListNode",
    fields = list(val = "numeric", next = "ANY"),
    methods = list(
        initialize = function(val = 0, next = NULL) {
            .self$val <- val
            .self$next <- next
        }
    )
)

removeNthFromEnd <- function(head, n) {
    # Write your solution here
    
}

# Test cases would need manual list construction`
        },
        expectedOutput: {
            javascript: "[1,2,3,5]\n[]\n[1]",
            python: "[1,2,3,5]\n[]\n[1]",
            java: "[1,2,3,5]\n[]\n[1]"
        },
    },

    "binary-tree-zigzag-level-order-traversal": {
        id: "binary-tree-zigzag-level-order-traversal",
        title: "Binary Tree Zigzag Level Order Traversal",
        difficulty: "Medium",
        category: "Tree • BFS • Binary Tree",
        description: {
            text: "Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).",
            notes: [
                "Return the result as a list of lists, where each inner list contains the values of nodes at that level in zigzag order.",
                "Use BFS with a flag to reverse order at each level."
            ],
        },
        examples: [
            {
                input: "root = [3,9,20,null,null,15,7]",
                output: "[[3],[20,9],[15,7]]",
            },
            {
                input: "root = [1]",
                output: "[[1]]",
            },
            {
                input: "root = []",
                output: "[]",
            },
        ],
        constraints: [
            "The number of nodes in the tree is in the range [0, 2000]",
            "-100 ≤ Node.val ≤ 100",
        ],
        starterCode: {
            javascript: `function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

function zigzagLevelOrder(root) {
    // Write your solution here
    
}

// Helper function to create tree from array
function createTree(arr) {
    if (!arr.length) return null;
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        let node = queue.shift();
        if (arr[i] !== null && arr[i] !== undefined) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

// Test cases
let tree1 = createTree([3,9,20,null,null,15,7]);
console.log(zigzagLevelOrder(tree1)); // Expected: [[3],[20,9],[15,7]]

let tree2 = createTree([1]);
console.log(zigzagLevelOrder(tree2)); // Expected: [[1]]

let tree3 = createTree([]);
console.log(zigzagLevelOrder(tree3)); // Expected: []`,

            typescript: `class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    // Write your solution here
    
}

// Helper function to create tree from array
function createTree(arr: (number | null)[]): TreeNode | null {
    if (!arr.length) return null;
    let root = new TreeNode(arr[0] as number);
    let queue: (TreeNode | null)[] = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        let node = queue.shift();
        if (node) {
            if (arr[i] !== null && arr[i] !== undefined) {
                node.left = new TreeNode(arr[i] as number);
                queue.push(node.left);
            }
            i++;
            if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
                node.right = new TreeNode(arr[i] as number);
                queue.push(node.right);
            }
            i++;
        }
    }
    return root;
}

// Test cases
let tree1 = createTree([3,9,20,null,null,15,7]);
console.log(zigzagLevelOrder(tree1));

let tree2 = createTree([1]);
console.log(zigzagLevelOrder(tree2));

let tree3 = createTree([]);
console.log(zigzagLevelOrder(tree3));`,

            python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def zigzagLevelOrder(root):
    # Write your solution here
    pass

# Helper function to create tree from list
def createTree(arr):
    if not arr:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if arr[i] is not None:
            node.left = TreeNode(arr[i])
            queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i])
            queue.append(node.right)
        i += 1
    return root

# Test cases
tree1 = createTree([3,9,20,None,None,15,7])
print(zigzagLevelOrder(tree1))  # Expected: [[3],[20,9],[15,7]]

tree2 = createTree([1])
print(zigzagLevelOrder(tree2))  # Expected: [[1]]

tree3 = createTree([])
print(zigzagLevelOrder(tree3))  # Expected: []`,

            java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    // Helper function to create tree from array
    public static TreeNode createTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int i = 1;
        while (!queue.isEmpty() && i < arr.length) {
            TreeNode node = queue.poll();
            if (i < arr.length && arr[i] != null) {
                node.left = new TreeNode(arr[i]);
                queue.offer(node.left);
            }
            i++;
            if (i < arr.length && arr[i] != null) {
                node.right = new TreeNode(arr[i]);
                queue.offer(node.right);
            }
            i++;
        }
        return root;
    }
    
    public static void main(String[] args) {
        TreeNode tree1 = createTree(new Integer[]{3,9,20,null,null,15,7});
        System.out.println(zigzagLevelOrder(tree1)); // Expected: [[3],[20,9],[15,7]]
        
        TreeNode tree2 = createTree(new Integer[]{1});
        System.out.println(zigzagLevelOrder(tree2)); // Expected: [[1]]
        
        TreeNode tree3 = createTree(new Integer[]{});
        System.out.println(zigzagLevelOrder(tree3)); // Expected: []
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
    // Write your solution here
    
}

// Helper function to create tree from vector (using -1 for null)
TreeNode* createTree(vector<int> arr) {
    if (arr.empty() || arr[0] == -1) return nullptr;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q;
    q.push(root);
    int i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* node = q.front();
        q.pop();
        if (i < arr.size() && arr[i] != -1) {
            node->left = new TreeNode(arr[i]);
            q.push(node->left);
        }
        i++;
        if (i < arr.size() && arr[i] != -1) {
            node->right = new TreeNode(arr[i]);
            q.push(node->right);
        }
        i++;
    }
    return root;
}

int main() {
    vector<int> arr1 = {3,9,20,-1,-1,15,7};
    TreeNode* tree1 = createTree(arr1);
    vector<vector<int>> result1 = zigzagLevelOrder(tree1);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << "[";
        for (size_t j = 0; j < result1[i].size(); j++) {
            cout << result1[i][j];
            if (j < result1[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

int** zigzagLevelOrder(struct TreeNode* root, int* returnSize, int** returnColumnSizes) {
    // Write your solution here
    
}

int main() {
    // For C, manual tree construction required
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static IList<IList<int>> ZigzagLevelOrder(TreeNode root) {
        // Write your solution here
        
    }
    
    static void Main() {
        // For C#, manual tree construction required
    }
}`,

            go: `package main

import "fmt"

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

func zigzagLevelOrder(root *TreeNode) [][]int {
    // Write your solution here
    
}

func main() {
    // For Go, manual tree construction required
}`,

            rust: `use std::rc::Rc;
use std::cell::RefCell;
use std::collections::VecDeque;

#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

fn zigzag_level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
    // Write your solution here
    
}

fn main() {
    // For Rust, manual tree construction required
}`,

            ruby: `class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val = 0, left = nil, right = nil)
        @val = val
        @left = left
        @right = right
    end
end

def zigzag_level_order(root)
    # Write your solution here
    
end

# Test cases would need manual tree construction`,

            php: `<?php
class TreeNode {
    public $val = null;
    public $left = null;
    public $right = null;
    function __construct($val = 0, $left = null, $right = null) {
        $this->val = $val;
        $this->left = $left;
        $this->right = $right;
    }
}

function zigzagLevelOrder($root) {
    // Write your solution here
    
}

// Test cases would need manual tree construction
?>`,

            swift: `public class TreeNode {
    public var val: Int
    public var left: TreeNode?
    public var right: TreeNode?
    public init() { self.val = 0; self.left = nil; self.right = nil; }
    public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
    public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
        self.val = val
        self.left = left
        self.right = right
    }
}

func zigzagLevelOrder(_ root: TreeNode?) -> [[Int]] {
    // Write your solution here
    
}

// Test cases would need manual tree construction`,

            kotlin: `import java.util.*

class TreeNode(var value: Int) {
    var left: TreeNode? = null
    var right: TreeNode? = null
}

fun zigzagLevelOrder(root: TreeNode?): List<List<Int>> {
    // Write your solution here
    
}

// Helper function to create tree from array
fun createTree(arr: Array<Int?>): TreeNode? {
    if (arr.isEmpty() || arr[0] == null) return null
    val root = TreeNode(arr[0]!!)
    val queue: Queue<TreeNode> = LinkedList()
    queue.offer(root)
    var i = 1
    while (queue.isNotEmpty() && i < arr.size) {
        val node = queue.poll()
        if (i < arr.size && arr[i] != null) {
            node.left = TreeNode(arr[i]!!)
            queue.offer(node.left)
        }
        i++
        if (i < arr.size && arr[i] != null) {
            node.right = TreeNode(arr[i]!!)
            queue.offer(node.right)
        }
        i++
    }
    return root
}

fun main() {
    val tree1 = createTree(arrayOf(3,9,20,null,null,15,7))
    println(zigzagLevelOrder(tree1)) // Expected: [[3],[20,9],[15,7]]
    
    val tree2 = createTree(arrayOf(1))
    println(zigzagLevelOrder(tree2)) // Expected: [[1]]
    
    val tree3 = createTree(arrayOf<Int?>())
    println(zigzagLevelOrder(tree3)) // Expected: []
}`,

            scala: `import scala.collection.mutable

class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
    var value: Int = _value
    var left: TreeNode = _left
    var right: TreeNode = _right
}

object Solution {
    def zigzagLevelOrder(root: TreeNode): List[List[Int]] = {
        // Write your solution here
        
    }
}`,

            perl: `package TreeNode;
sub new {
    my ($class, $val, $left, $right) = @_;
    my $self = { val => $val // 0, left => $left // undef, right => $right // undef };
    bless $self, $class;
    return $self;
}

sub zigzagLevelOrder {
    my $root = shift;
    # Write your solution here
    
}

# Test cases would need manual tree construction`,

            r: `TreeNode <- setRefClass("TreeNode",
    fields = list(val = "numeric", left = "ANY", right = "ANY"),
    methods = list(
        initialize = function(val = 0, left = NULL, right = NULL) {
            .self$val <- val
            .self$left <- left
            .self$right <- right
        }
    )
)

zigzagLevelOrder <- function(root) {
    # Write your solution here
    
}

# Test cases would need manual tree construction`
        },
        expectedOutput: {
            javascript: "[[3],[20,9],[15,7]]\n[[1]]\n[]",
            python: "[[3],[20,9],[15,7]]\n[[1]]\n[]",
            java: "[[3],[20,9],[15,7]]\n[[1]]\n[]"
        },
    },

    "lowest-common-ancestor-of-a-binary-tree": {
        id: "lowest-common-ancestor-of-a-binary-tree",
        title: "Lowest Common Ancestor of a Binary Tree",
        difficulty: "Medium",
        category: "Tree • DFS • Binary Tree",
        description: {
            text: "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where a node can be a descendant of itself).",
            notes: [
                "All node values are unique.",
                "p and q are guaranteed to exist in the tree.",
                "A node can be a descendant of itself."
            ],
        },
        examples: [
            {
                input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",
                output: "3",
                explanation: "The LCA of nodes 5 and 1 is 3.",
            },
            {
                input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4",
                output: "5",
                explanation: "The LCA of nodes 5 and 4 is 5.",
            },
            {
                input: "root = [1,2], p = 1, q = 2",
                output: "1",
            },
        ],
        constraints: [
            "The number of nodes in the tree is in the range [2, 10⁵]",
            "-10⁹ ≤ Node.val ≤ 10⁹",
            "All Node.val are unique",
            "p != q",
            "p and q will exist in the tree",
        ],
        starterCode: {
            javascript: `function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

function lowestCommonAncestor(root, p, q) {
    // Write your solution here
    
}

// Helper function to create tree from array
function createTree(arr) {
    if (!arr.length) return null;
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        let node = queue.shift();
        if (arr[i] !== null && arr[i] !== undefined) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

// Helper function to find node by value
function findNode(root, val) {
    if (!root) return null;
    if (root.val === val) return root;
    return findNode(root.left, val) || findNode(root.right, val);
}

// Test cases
let tree1 = createTree([3,5,1,6,2,0,8,null,null,7,4]);
let p1 = findNode(tree1, 5);
let q1 = findNode(tree1, 1);
console.log(lowestCommonAncestor(tree1, p1, q1).val); // Expected: 3

let p2 = findNode(tree1, 5);
let q2 = findNode(tree1, 4);
console.log(lowestCommonAncestor(tree1, p2, q2).val); // Expected: 5

let tree2 = createTree([1,2]);
let p3 = findNode(tree2, 1);
let q3 = findNode(tree2, 2);
console.log(lowestCommonAncestor(tree2, p3, q3).val); // Expected: 1`,

            typescript: `class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    // Write your solution here
    
}

// Helper function to create tree from array
function createTree(arr: (number | null)[]): TreeNode | null {
    if (!arr.length) return null;
    let root = new TreeNode(arr[0] as number);
    let queue: (TreeNode | null)[] = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        let node = queue.shift();
        if (node) {
            if (arr[i] !== null && arr[i] !== undefined) {
                node.left = new TreeNode(arr[i] as number);
                queue.push(node.left);
            }
            i++;
            if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
                node.right = new TreeNode(arr[i] as number);
                queue.push(node.right);
            }
            i++;
        }
    }
    return root;
}

// Helper function to find node by value
function findNode(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) return null;
    if (root.val === val) return root;
    return findNode(root.left, val) || findNode(root.right, val);
}

// Test cases
let tree1 = createTree([3,5,1,6,2,0,8,null,null,7,4]);
let p1 = findNode(tree1, 5);
let q1 = findNode(tree1, 1);
console.log(lowestCommonAncestor(tree1, p1, q1)?.val); // Expected: 3

let p2 = findNode(tree1, 5);
let q2 = findNode(tree1, 4);
console.log(lowestCommonAncestor(tree1, p2, q2)?.val); // Expected: 5

let tree2 = createTree([1,2]);
let p3 = findNode(tree2, 1);
let q3 = findNode(tree2, 2);
console.log(lowestCommonAncestor(tree2, p3, q3)?.val); // Expected: 1`,

            python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def lowestCommonAncestor(root, p, q):
    # Write your solution here
    pass

# Helper function to create tree from list
def createTree(arr):
    if not arr:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if arr[i] is not None:
            node.left = TreeNode(arr[i])
            queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i])
            queue.append(node.right)
        i += 1
    return root

# Helper function to find node by value
def findNode(root, val):
    if not root:
        return None
    if root.val == val:
        return root
    return findNode(root.left, val) or findNode(root.right, val)

# Test cases
tree1 = createTree([3,5,1,6,2,0,8,None,None,7,4])
p1 = findNode(tree1, 5)
q1 = findNode(tree1, 1)
print(lowestCommonAncestor(tree1, p1, q1).val)  # Expected: 3

p2 = findNode(tree1, 5)
q2 = findNode(tree1, 4)
print(lowestCommonAncestor(tree1, p2, q2).val)  # Expected: 5

tree2 = createTree([1,2])
p3 = findNode(tree2, 1)
q3 = findNode(tree2, 2)
print(lowestCommonAncestor(tree2, p3, q3).val)  # Expected: 1`,

            java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // Write your solution here
        
        return null;
    }
    
    // Helper function to create tree from array
    public static TreeNode createTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int i = 1;
        while (!queue.isEmpty() && i < arr.length) {
            TreeNode node = queue.poll();
            if (i < arr.length && arr[i] != null) {
                node.left = new TreeNode(arr[i]);
                queue.offer(node.left);
            }
            i++;
            if (i < arr.length && arr[i] != null) {
                node.right = new TreeNode(arr[i]);
                queue.offer(node.right);
            }
            i++;
        }
        return root;
    }
    
    // Helper function to find node by value
    public static TreeNode findNode(TreeNode root, int val) {
        if (root == null) return null;
        if (root.val == val) return root;
        TreeNode left = findNode(root.left, val);
        if (left != null) return left;
        return findNode(root.right, val);
    }
    
    public static void main(String[] args) {
        TreeNode tree1 = createTree(new Integer[]{3,5,1,6,2,0,8,null,null,7,4});
        TreeNode p1 = findNode(tree1, 5);
        TreeNode q1 = findNode(tree1, 1);
        System.out.println(lowestCommonAncestor(tree1, p1, q1).val); // Expected: 3
        
        TreeNode p2 = findNode(tree1, 5);
        TreeNode q2 = findNode(tree1, 4);
        System.out.println(lowestCommonAncestor(tree1, p2, q2).val); // Expected: 5
        
        TreeNode tree2 = createTree(new Integer[]{1,2});
        TreeNode p3 = findNode(tree2, 1);
        TreeNode q3 = findNode(tree2, 2);
        System.out.println(lowestCommonAncestor(tree2, p3, q3).val); // Expected: 1
    }
}`,

            cpp: `#include <iostream>
#include <queue>
#include <vector>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    // Write your solution here
    
}

// Helper function to create tree from vector (using -1 for null)
TreeNode* createTree(vector<int> arr) {
    if (arr.empty() || arr[0] == -1) return nullptr;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q;
    q.push(root);
    int i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* node = q.front();
        q.pop();
        if (i < arr.size() && arr[i] != -1) {
            node->left = new TreeNode(arr[i]);
            q.push(node->left);
        }
        i++;
        if (i < arr.size() && arr[i] != -1) {
            node->right = new TreeNode(arr[i]);
            q.push(node->right);
        }
        i++;
    }
    return root;
}

// Helper function to find node by value
TreeNode* findNode(TreeNode* root, int val) {
    if (!root) return nullptr;
    if (root->val == val) return root;
    TreeNode* left = findNode(root->left, val);
    if (left) return left;
    return findNode(root->right, val);
}

int main() {
    vector<int> arr1 = {3,5,1,6,2,0,8,-1,-1,7,4};
    TreeNode* tree1 = createTree(arr1);
    TreeNode* p1 = findNode(tree1, 5);
    TreeNode* q1 = findNode(tree1, 1);
    cout << lowestCommonAncestor(tree1, p1, q1)->val << endl; // Expected: 3
    
    TreeNode* p2 = findNode(tree1, 5);
    TreeNode* q2 = findNode(tree1, 4);
    cout << lowestCommonAncestor(tree1, p2, q2)->val << endl; // Expected: 5
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

struct TreeNode* lowestCommonAncestor(struct TreeNode* root, struct TreeNode* p, struct TreeNode* q) {
    // Write your solution here
    
}

int main() {
    // For C, manual tree construction required
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // Write your solution here
        
    }
    
    static void Main() {
        // For C#, manual tree construction required
    }
}`,

            go: `package main

import "fmt"

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
    // Write your solution here
    
}

func main() {
    // For Go, manual tree construction required
}`,

            rust: `use std::rc::Rc;
use std::cell::RefCell;

#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

fn lowest_common_ancestor(root: Option<Rc<RefCell<TreeNode>>>, p: Option<Rc<RefCell<TreeNode>>>, q: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
    // Write your solution here
    
}

fn main() {
    // For Rust, manual tree construction required
}`,

            ruby: `class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val = 0, left = nil, right = nil)
        @val = val
        @left = left
        @right = right
    end
end

def lowest_common_ancestor(root, p, q)
    # Write your solution here
    
end

# Test cases would need manual tree construction`,

            php: `<?php
class TreeNode {
    public $val = null;
    public $left = null;
    public $right = null;
    function __construct($val = 0, $left = null, $right = null) {
        $this->val = $val;
        $this->left = $left;
        $this->right = $right;
    }
}

function lowestCommonAncestor($root, $p, $q) {
    # Write your solution here
    
}

# Test cases would need manual tree construction
?>`,

            swift: `public class TreeNode {
    public var val: Int
    public var left: TreeNode?
    public var right: TreeNode?
    public init() { self.val = 0; self.left = nil; self.right = nil; }
    public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
    public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
        self.val = val
        self.left = left
        self.right = right
    }
}

func lowestCommonAncestor(_ root: TreeNode?, _ p: TreeNode?, _ q: TreeNode?) -> TreeNode? {
    // Write your solution here
    
}

// Test cases would need manual tree construction`,

            kotlin: `class TreeNode(var value: Int) {
    var left: TreeNode? = null
    var right: TreeNode? = null
}

fun lowestCommonAncestor(root: TreeNode?, p: TreeNode?, q: TreeNode?): TreeNode? {
    // Write your solution here
    
}

// Test cases would need manual tree construction`,

            scala: `class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
    var value: Int = _value
    var left: TreeNode = _left
    var right: TreeNode = _right
}

object Solution {
    def lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode = {
        // Write your solution here
        
    }
}`,

            perl: `package TreeNode;
sub new {
    my ($class, $val, $left, $right) = @_;
    my $self = { val => $val // 0, left => $left // undef, right => $right // undef };
    bless $self, $class;
    return $self;
}

sub lowestCommonAncestor {
    my ($root, $p, $q) = @_;
    # Write your solution here
    
}

# Test cases would need manual tree construction`,

            r: `TreeNode <- setRefClass("TreeNode",
    fields = list(val = "numeric", left = "ANY", right = "ANY"),
    methods = list(
        initialize = function(val = 0, left = NULL, right = NULL) {
            .self$val <- val
            .self$left <- left
            .self$right <- right
        }
    )
)

lowestCommonAncestor <- function(root, p, q) {
    # Write your solution here
    
}

# Test cases would need manual tree construction`
        },
        expectedOutput: {
            javascript: "3\n5\n1",
            python: "3\n5\n1",
            java: "3\n5\n1"
        },
    },

    "combination-sum": {
        id: "combination-sum",
        title: "Combination Sum",
        difficulty: "Medium",
        category: "Array • Backtracking",
        description: {
            text: "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order. The same number may be chosen from candidates an unlimited number of times.",
            notes: [
                "Two combinations are unique if the frequency of at least one of the chosen numbers is different.",
                "All numbers in candidates are unique.",
                "You may use the same number multiple times."
            ],
        },
        examples: [
            {
                input: "candidates = [2,3,6,7], target = 7",
                output: "[[2,2,3],[7]]",
            },
            {
                input: "candidates = [2,3,5], target = 8",
                output: "[[2,2,2,2],[2,3,3],[3,5]]",
            },
            {
                input: "candidates = [2], target = 1",
                output: "[]",
            },
        ],
        constraints: [
            "1 ≤ candidates.length ≤ 30",
            "2 ≤ candidates[i] ≤ 40",
            "All elements of candidates are distinct",
            "1 ≤ target ≤ 40",
        ],
        starterCode: {
            javascript: `function combinationSum(candidates, target) {
    // Write your solution here
    
}

// Test cases
console.log(combinationSum([2,3,6,7], 7)); // Expected: [[2,2,3],[7]]
console.log(combinationSum([2,3,5], 8)); // Expected: [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)); // Expected: []`,

            typescript: `function combinationSum(candidates: number[], target: number): number[][] {
    // Write your solution here
    
}

// Test cases
console.log(combinationSum([2,3,6,7], 7));
console.log(combinationSum([2,3,5], 8));
console.log(combinationSum([2], 1));`,

            python: `def combinationSum(candidates, target):
    # Write your solution here
    pass

# Test cases
print(combinationSum([2,3,6,7], 7))  # Expected: [[2,2,3],[7]]
print(combinationSum([2,3,5], 8))  # Expected: [[2,2,2,2],[2,3,3],[3,5]]
print(combinationSum([2], 1))  # Expected: []`,

            java: `import java.util.*;

class Solution {
    public static List<List<Integer>> combinationSum(int[] candidates, int target) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(combinationSum(new int[]{2,3,6,7}, 7));
        System.out.println(combinationSum(new int[]{2,3,5}, 8));
        System.out.println(combinationSum(new int[]{2}, 1));
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
    // Write your solution here
    
}

int main() {
    vector<int> cand1 = {2,3,6,7};
    vector<vector<int>> result1 = combinationSum(cand1, 7);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << "[";
        for (size_t j = 0; j < result1[i].size(); j++) {
            cout << result1[i][j];
            if (j < result1[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int** combinationSum(int* candidates, int candidatesSize, int target, int* returnSize, int** returnColumnSizes) {
    // Write your solution here
    
}

int main() {
    // For C, manual implementation required
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<IList<int>> CombinationSum(int[] candidates, int target) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine($"[{string.Join(",", CombinationSum(new int[] {2,3,6,7}, 7).Select(x => $"[{string.Join(",", x)}]"))}]");
    }
}`,

            go: `package main

import "fmt"

func combinationSum(candidates []int, target int) [][]int {
    // Write your solution here
    
}

func main() {
    fmt.Println(combinationSum([]int{2,3,6,7}, 7))
}`,

            rust: `fn combination_sum(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", combination_sum(vec![2,3,6,7], 7));
}`,

            ruby: `def combination_sum(candidates, target)
    # Write your solution here
    
end

puts combination_sum([2,3,6,7], 7).inspect`,

            php: `<?php
function combinationSum($candidates, $target) {
    // Write your solution here
    
}

print_r(combinationSum([2,3,6,7], 7));
?>`,

            swift: `func combinationSum(_ candidates: [Int], _ target: Int) -> [[Int]] {
    // Write your solution here
    
}

print(combinationSum([2,3,6,7], 7))`,

            kotlin: `fun combinationSum(candidates: IntArray, target: Int): List<List<Int>> {
    // Write your solution here
    
}

fun main() {
    println(combinationSum(intArrayOf(2,3,6,7), 7))
}`,

            scala: `object Solution {
    def combinationSum(candidates: Array[Int], target: Int): List[List[Int]] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(combinationSum(Array(2,3,6,7), 7))
    }
}`,

            perl: `sub combinationSum {
    my ($candidates, $target) = @_;
    # Write your solution here
    
}

print "[" . join(",", @{combinationSum([2,3,6,7], 7)}) . "]\\n";`,

            r: `combinationSum <- function(candidates, target) {
    # Write your solution here
    
}

print(combinationSum(c(2,3,6,7), 7))`
        },
        expectedOutput: {
            javascript: "[[2,2,3],[7]]\n[[2,2,2,2],[2,3,3],[3,5]]\n[]",
            python: "[[2,2,3],[7]]\n[[2,2,2,2],[2,3,3],[3,5]]\n[]",
            java: "[[2,2,3],[7]]\n[[2,2,2,2],[2,3,3],[3,5]]\n[]"
        },
    },

    "house-robber-ii": {
        id: "house-robber-ii",
        title: "House Robber II",
        difficulty: "Medium",
        category: "Array • Dynamic Programming",
        description: {
            text: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. You cannot rob adjacent houses. Given an integer array nums representing the amount of money in each house, return the maximum amount you can rob tonight without alerting the police.",
            notes: [
                "Since houses are in a circle, you cannot rob both the first and last house.",
                "Solve by considering two scenarios: rob houses 0 to n-2, and houses 1 to n-1.",
                "Use the same logic as House Robber I for each scenario."
            ],
        },
        examples: [
            {
                input: "nums = [2,3,2]",
                output: "3",
                explanation: "You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent. So max is 3.",
            },
            {
                input: "nums = [1,2,3,1]",
                output: "4",
                explanation: "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total = 4.",
            },
            {
                input: "nums = [1,2,3]",
                output: "3",
            },
        ],
        constraints: [
            "1 ≤ nums.length ≤ 100",
            "0 ≤ nums[i] ≤ 1000",
        ],
        starterCode: {
            javascript: `function rob(nums) {
    // Write your solution here
    
}

// Test cases
console.log(rob([2,3,2])); // Expected: 3
console.log(rob([1,2,3,1])); // Expected: 4
console.log(rob([1,2,3])); // Expected: 3`,

            typescript: `function rob(nums: number[]): number {
    // Write your solution here
    
}

// Test cases
console.log(rob([2,3,2]));
console.log(rob([1,2,3,1]));
console.log(rob([1,2,3]));`,

            python: `def rob(nums):
    # Write your solution here
    pass

# Test cases
print(rob([2,3,2]))  # Expected: 3
print(rob([1,2,3,1]))  # Expected: 4
print(rob([1,2,3]))  # Expected: 3`,

            java: `class Solution {
    public static int rob(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(rob(new int[]{2,3,2})); // Expected: 3
        System.out.println(rob(new int[]{1,2,3,1})); // Expected: 4
        System.out.println(rob(new int[]{1,2,3})); // Expected: 3
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int rob(vector<int>& nums) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {2,3,2};
    cout << rob(nums1) << endl; // Expected: 3
    
    vector<int> nums2 = {1,2,3,1};
    cout << rob(nums2) << endl; // Expected: 4
    
    vector<int> nums3 = {1,2,3};
    cout << rob(nums3) << endl; // Expected: 3
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int rob(int* nums, int numsSize) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {2,3,2};
    printf("%d\\n", rob(nums1, 3)); // Expected: 3
    
    int nums2[] = {1,2,3,1};
    printf("%d\\n", rob(nums2, 4)); // Expected: 4
    
    int nums3[] = {1,2,3};
    printf("%d\\n", rob(nums3, 3)); // Expected: 3
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int Rob(int[] nums) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(Rob(new int[] {2,3,2})); // Expected: 3
        Console.WriteLine(Rob(new int[] {1,2,3,1})); // Expected: 4
        Console.WriteLine(Rob(new int[] {1,2,3})); // Expected: 3
    }
}`,

            go: `package main

import "fmt"

func rob(nums []int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(rob([]int{2,3,2})) // Expected: 3
    fmt.Println(rob([]int{1,2,3,1})) // Expected: 4
    fmt.Println(rob([]int{1,2,3})) // Expected: 3
}`,

            rust: `fn rob(nums: Vec<i32>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", rob(vec![2,3,2])); // Expected: 3
    println!("{}", rob(vec![1,2,3,1])); // Expected: 4
    println!("{}", rob(vec![1,2,3])); // Expected: 3
}`,

            ruby: `def rob(nums)
    # Write your solution here
    
end

puts rob([2,3,2]) # Expected: 3
puts rob([1,2,3,1]) # Expected: 4
puts rob([1,2,3]) # Expected: 3`,

            php: `<?php
function rob($nums) {
    // Write your solution here
    
}

echo rob([2,3,2]) . "\\n";
echo rob([1,2,3,1]) . "\\n";
echo rob([1,2,3]) . "\\n";
?>`,

            swift: `func rob(_ nums: [Int]) -> Int {
    // Write your solution here
    
}

print(rob([2,3,2]))
print(rob([1,2,3,1]))
print(rob([1,2,3]))`,

            kotlin: `fun rob(nums: IntArray): Int {
    // Write your solution here
    
}

fun main() {
    println(rob(intArrayOf(2,3,2))) // Expected: 3
    println(rob(intArrayOf(1,2,3,1))) // Expected: 4
    println(rob(intArrayOf(1,2,3))) // Expected: 3
}`,

            scala: `object Solution {
    def rob(nums: Array[Int]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(rob(Array(2,3,2))) // Expected: 3
        println(rob(Array(1,2,3,1))) // Expected: 4
        println(rob(Array(1,2,3))) // Expected: 3
    }
}`,

            perl: `sub rob {
    my $nums = shift;
    # Write your solution here
    
}

print rob([2,3,2]) . "\\n";
print rob([1,2,3,1]) . "\\n";
print rob([1,2,3]) . "\\n";`,

            r: `rob <- function(nums) {
    # Write your solution here
    
}

print(rob(c(2,3,2)))
print(rob(c(1,2,3,1)))
print(rob(c(1,2,3)))`
        },
        expectedOutput: {
            javascript: "3\n4\n3",
            python: "3\n4\n3",
            java: "3\n4\n3"
        },
    },

    "decode-ways": {
        id: "decode-ways",
        title: "Decode Ways",
        difficulty: "Medium",
        category: "String • Dynamic Programming",
        description: {
            text: "A message containing letters from A-Z can be encoded into numbers using the mapping: 'A' -> '1', 'B' -> '2', ..., 'Z' -> '26'. Given a string s containing only digits, return the number of ways to decode it. If the entire string cannot be decoded in any valid way, return 0.",
            notes: [
                "The string may contain leading zeros, which cannot be part of any valid decoding.",
                "Use dynamic programming to count the number of ways.",
                "Handle edge cases like empty string, strings starting with '0'."
            ],
        },
        examples: [
            {
                input: "s = '12'",
                output: "2",
                explanation: "It could be decoded as 'AB' (1 2) or 'L' (12).",
            },
            {
                input: "s = '226'",
                output: "3",
                explanation: "Decodings: 'BZ' (2 26), 'VF' (22 6), 'BBF' (2 2 6).",
            },
            {
                input: "s = '06'",
                output: "0",
                explanation: "'0' cannot map to any letter.",
            },
        ],
        constraints: [
            "1 ≤ s.length ≤ 100",
            "s contains only digits and may contain leading zero(s)",
        ],
        starterCode: {
            javascript: `function numDecodings(s) {
    // Write your solution here
    
}

// Test cases
console.log(numDecodings('12')); // Expected: 2
console.log(numDecodings('226')); // Expected: 3
console.log(numDecodings('06')); // Expected: 0`,

            typescript: `function numDecodings(s: string): number {
    // Write your solution here
    
}

// Test cases
console.log(numDecodings('12'));
console.log(numDecodings('226'));
console.log(numDecodings('06'));`,

            python: `def numDecodings(s):
    # Write your solution here
    pass

# Test cases
print(numDecodings('12'))  # Expected: 2
print(numDecodings('226'))  # Expected: 3
print(numDecodings('06'))  # Expected: 0`,

            java: `class Solution {
    public static int numDecodings(String s) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(numDecodings("12")); // Expected: 2
        System.out.println(numDecodings("226")); // Expected: 3
        System.out.println(numDecodings("06")); // Expected: 0
    }
}`,

            cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

int numDecodings(string s) {
    // Write your solution here
    
}

int main() {
    cout << numDecodings("12") << endl; // Expected: 2
    cout << numDecodings("226") << endl; // Expected: 3
    cout << numDecodings("06") << endl; // Expected: 0
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <string.h>

int numDecodings(char* s) {
    // Write your solution here
    
}

int main() {
    printf("%d\\n", numDecodings("12")); // Expected: 2
    printf("%d\\n", numDecodings("226")); // Expected: 3
    printf("%d\\n", numDecodings("06")); // Expected: 0
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int NumDecodings(string s) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(NumDecodings("12")); // Expected: 2
        Console.WriteLine(NumDecodings("226")); // Expected: 3
        Console.WriteLine(NumDecodings("06")); // Expected: 0
    }
}`,

            go: `package main

import "fmt"

func numDecodings(s string) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(numDecodings("12")) // Expected: 2
    fmt.Println(numDecodings("226")) // Expected: 3
    fmt.Println(numDecodings("06")) // Expected: 0
}`,

            rust: `fn num_decodings(s: String) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", num_decodings("12".to_string())); // Expected: 2
    println!("{}", num_decodings("226".to_string())); // Expected: 3
    println!("{}", num_decodings("06".to_string())); // Expected: 0
}`,

            ruby: `def num_decodings(s)
    # Write your solution here
    
end

puts num_decodings('12') # Expected: 2
puts num_decodings('226') # Expected: 3
puts num_decodings('06') # Expected: 0`,

            php: `<?php
function numDecodings($s) {
    // Write your solution here
    
}

echo numDecodings('12') . "\\n";
echo numDecodings('226') . "\\n";
echo numDecodings('06') . "\\n";
?>`,

            swift: `func numDecodings(_ s: String) -> Int {
    // Write your solution here
    
}

print(numDecodings("12"))
print(numDecodings("226"))
print(numDecodings("06"))`,

            kotlin: `fun numDecodings(s: String): Int {
    // Write your solution here
    
}

fun main() {
    println(numDecodings("12")) // Expected: 2
    println(numDecodings("226")) // Expected: 3
    println(numDecodings("06")) // Expected: 0
}`,

            scala: `object Solution {
    def numDecodings(s: String): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(numDecodings("12")) // Expected: 2
        println(numDecodings("226")) // Expected: 3
        println(numDecodings("06")) // Expected: 0
    }
}`,

            perl: `sub numDecodings {
    my $s = shift;
    # Write your solution here
    
}

print numDecodings('12') . "\\n";
print numDecodings('226') . "\\n";
print numDecodings('06') . "\\n";`,

            r: `numDecodings <- function(s) {
    # Write your solution here
    
}

print(numDecodings('12'))
print(numDecodings('226'))
print(numDecodings('06'))`
        },
        expectedOutput: {
            javascript: "2\n3\n0",
            python: "2\n3\n0",
            java: "2\n3\n0"
        },
    },

    "reverse-linked-list": {
        id: "reverse-linked-list",
        title: "Reverse Linked List",
        difficulty: "Easy",
        category: "Linked List • Recursion",
        description: {
            text: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
            notes: [
                "You can solve this iteratively or recursively.",
                "The solution should run in O(n) time and O(1) space (for iterative approach)."
            ],
        },
        examples: [
            {
                input: "head = [1,2,3,4,5]",
                output: "[5,4,3,2,1]",
            },
            {
                input: "head = [1,2]",
                output: "[2,1]",
            },
            {
                input: "head = []",
                output: "[]",
            },
        ],
        constraints: [
            "The number of nodes in the list is in the range [0, 5000]",
            "-5000 ≤ Node.val ≤ 5000",
        ],
        starterCode: {
            javascript: `function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function reverseList(head) {
    // Write your solution here
    
}

// Helper function to create linked list from array
function createLinkedList(arr) {
    if (!arr.length) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Test cases
let list1 = createLinkedList([1,2,3,4,5]);
console.log(linkedListToArray(reverseList(list1))); // Expected: [5,4,3,2,1]

let list2 = createLinkedList([1,2]);
console.log(linkedListToArray(reverseList(list2))); // Expected: [2,1]

let list3 = createLinkedList([]);
console.log(linkedListToArray(reverseList(list3))); // Expected: []`,

            typescript: `class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    // Write your solution here
    
}

// Helper function to create linked list from array
function createLinkedList(arr: number[]): ListNode | null {
    if (!arr.length) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array
function linkedListToArray(head: ListNode | null): number[] {
    let result: number[] = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Test cases
let list1 = createLinkedList([1,2,3,4,5]);
console.log(linkedListToArray(reverseList(list1)));

let list2 = createLinkedList([1,2]);
console.log(linkedListToArray(reverseList(list2)));

let list3 = createLinkedList([]);
console.log(linkedListToArray(reverseList(list3)));`,

            python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(head):
    # Write your solution here
    pass

# Helper function to create linked list from list
def createLinkedList(arr):
    if not arr:
        return None
    head = ListNode(arr[0])
    current = head
    for val in arr[1:]:
        current.next = ListNode(val)
        current = current.next
    return head

# Helper function to convert linked list to list
def linkedListToList(head):
    result = []
    current = head
    while current:
        result.append(current.val)
        current = current.next
    return result

# Test cases
list1 = createLinkedList([1,2,3,4,5])
print(linkedListToList(reverseList(list1)))  # Expected: [5,4,3,2,1]

list2 = createLinkedList([1,2])
print(linkedListToList(reverseList(list2)))  # Expected: [2,1]

list3 = createLinkedList([])
print(linkedListToList(reverseList(list3)))  # Expected: []`,

            java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public static ListNode reverseList(ListNode head) {
        // Write your solution here
        
        return null;
    }
    
    // Helper function to create linked list from array
    public static ListNode createLinkedList(int[] arr) {
        if (arr.length == 0) return null;
        ListNode head = new ListNode(arr[0]);
        ListNode current = head;
        for (int i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }
    
    // Helper function to convert linked list to list
    public static List<Integer> linkedListToList(ListNode head) {
        List<Integer> result = new ArrayList<>();
        ListNode current = head;
        while (current != null) {
            result.add(current.val);
            current = current.next;
        }
        return result;
    }
    
    public static void main(String[] args) {
        ListNode list1 = createLinkedList(new int[]{1,2,3,4,5});
        System.out.println(linkedListToList(reverseList(list1))); // Expected: [5,4,3,2,1]
        
        ListNode list2 = createLinkedList(new int[]{1,2});
        System.out.println(linkedListToList(reverseList(list2))); // Expected: [2,1]
        
        ListNode list3 = createLinkedList(new int[]{});
        System.out.println(linkedListToList(reverseList(list3))); // Expected: []
    }
}`,

            cpp: `#include <iostream>
#include <vector>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

ListNode* reverseList(ListNode* head) {
    // Write your solution here
    
}

// Helper function to create linked list from vector
ListNode* createLinkedList(vector<int> arr) {
    if (arr.empty()) return nullptr;
    ListNode* head = new ListNode(arr[0]);
    ListNode* current = head;
    for (size_t i = 1; i < arr.size(); i++) {
        current->next = new ListNode(arr[i]);
        current = current->next;
    }
    return head;
}

// Helper function to convert linked list to vector
vector<int> linkedListToVector(ListNode* head) {
    vector<int> result;
    ListNode* current = head;
    while (current) {
        result.push_back(current->val);
        current = current->next;
    }
    return result;
}

int main() {
    ListNode* list1 = createLinkedList({1,2,3,4,5});
    vector<int> result1 = linkedListToVector(reverseList(list1));
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << result1[i];
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* reverseList(struct ListNode* head) {
    // Write your solution here
    
}

int main() {
    // For C, manual list construction required
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

public class ListNode {
    public int val;
    public ListNode next;
    public ListNode(int val=0, ListNode next=null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    public static ListNode ReverseList(ListNode head) {
        // Write your solution here
        
    }
    
    static void Main() {
        // For C#, manual list construction required
    }
}`,

            go: `package main

import "fmt"

type ListNode struct {
    Val int
    Next *ListNode
}

func reverseList(head *ListNode) *ListNode {
    // Write your solution here
    
}

func main() {
    // For Go, manual list construction required
}`,

            rust: `#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

fn reverse_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    // Write your solution here
    
}

fn main() {
    // For Rust, manual list construction required
}`,

            ruby: `class ListNode
    attr_accessor :val, :next
    def initialize(val = 0, _next = nil)
        @val = val
        @next = _next
    end
end

def reverse_list(head)
    # Write your solution here
    
end

# Test cases would need manual list construction`,

            php: `<?php
class ListNode {
    public $val = 0;
    public $next = null;
    function __construct($val = 0, $next = null) {
        $this->val = $val;
        $this->next = $next;
    }
}

function reverseList($head) {
    // Write your solution here
    
}

// Test cases would need manual list construction
?>`,

            swift: `public class ListNode {
    public var val: Int
    public var next: ListNode?
    public init() { self.val = 0; self.next = nil; }
    public init(_ val: Int) { self.val = val; self.next = nil; }
    public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
}

func reverseList(_ head: ListNode?) -> ListNode? {
    // Write your solution here
    
}

// Test cases would need manual list construction`,

            kotlin: `class ListNode(var value: Int) {
    var next: ListNode? = null
}

fun reverseList(head: ListNode?): ListNode? {
    // Write your solution here
    
}

// Test cases would need manual list construction`,

            scala: `class ListNode(_x: Int = 0, _next: ListNode = null) {
    var val: Int = _x
    var next: ListNode = _next
}

object Solution {
    def reverseList(head: ListNode): ListNode = {
        // Write your solution here
        
    }
}`,

            perl: `package ListNode;
sub new {
    my ($class, $val, $next) = @_;
    my $self = { val => $val // 0, next => $next // undef };
    bless $self, $class;
    return $self;
}

sub reverseList {
    my $head = shift;
    # Write your solution here
    
}

# Test cases would need manual list construction`,

            r: `ListNode <- setRefClass("ListNode",
    fields = list(val = "numeric", next = "ANY"),
    methods = list(
        initialize = function(val = 0, next = NULL) {
            .self$val <- val
            .self$next <- next
        }
    )
)

reverseList <- function(head) {
    # Write your solution here
    
}

# Test cases would need manual list construction`
        },
        expectedOutput: {
            javascript: "[5,4,3,2,1]\n[2,1]\n[]",
            python: "[5,4,3,2,1]\n[2,1]\n[]",
            java: "[5,4,3,2,1]\n[2,1]\n[]"
        },
    },

    "balanced-binary-tree": {
        id: "balanced-binary-tree",
        title: "Balanced Binary Tree",
        difficulty: "Easy",
        category: "Tree • DFS • Binary Tree",
        description: {
            text: "Given a binary tree, determine if it is height-balanced. A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.",
            notes: [
                "A balanced tree means for every node, the height difference between left and right subtrees is at most 1.",
                "Use a helper function that returns both height and balance status."
            ],
        },
        examples: [
            {
                input: "root = [3,9,20,null,null,15,7]",
                output: "true",
            },
            {
                input: "root = [1,2,2,3,3,null,null,4,4]",
                output: "false",
            },
            {
                input: "root = []",
                output: "true",
            },
        ],
        constraints: [
            "The number of nodes in the tree is in the range [0, 5000]",
            "-10⁴ ≤ Node.val ≤ 10⁴",
        ],
        starterCode: {
            javascript: `function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

function isBalanced(root) {
    // Write your solution here
    
}

// Helper function to create tree from array
function createTree(arr) {
    if (!arr.length) return null;
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        let node = queue.shift();
        if (arr[i] !== null && arr[i] !== undefined) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

// Test cases
let tree1 = createTree([3,9,20,null,null,15,7]);
console.log(isBalanced(tree1)); // Expected: true

let tree2 = createTree([1,2,2,3,3,null,null,4,4]);
console.log(isBalanced(tree2)); // Expected: false

let tree3 = createTree([]);
console.log(isBalanced(tree3)); // Expected: true`,

            typescript: `class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}

function isBalanced(root: TreeNode | null): boolean {
    // Write your solution here
    
}

// Helper function to create tree from array
function createTree(arr: (number | null)[]): TreeNode | null {
    if (!arr.length) return null;
    let root = new TreeNode(arr[0] as number);
    let queue: (TreeNode | null)[] = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        let node = queue.shift();
        if (node) {
            if (arr[i] !== null && arr[i] !== undefined) {
                node.left = new TreeNode(arr[i] as number);
                queue.push(node.left);
            }
            i++;
            if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
                node.right = new TreeNode(arr[i] as number);
                queue.push(node.right);
            }
            i++;
        }
    }
    return root;
}

// Test cases
let tree1 = createTree([3,9,20,null,null,15,7]);
console.log(isBalanced(tree1));

let tree2 = createTree([1,2,2,3,3,null,null,4,4]);
console.log(isBalanced(tree2));

let tree3 = createTree([]);
console.log(isBalanced(tree3));`,

            python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isBalanced(root):
    # Write your solution here
    pass

# Helper function to create tree from list
def createTree(arr):
    if not arr:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if arr[i] is not None:
            node.left = TreeNode(arr[i])
            queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i])
            queue.append(node.right)
        i += 1
    return root

# Test cases
tree1 = createTree([3,9,20,None,None,15,7])
print(isBalanced(tree1))  # Expected: True

tree2 = createTree([1,2,2,3,3,None,None,4,4])
print(isBalanced(tree2))  # Expected: False

tree3 = createTree([])
print(isBalanced(tree3))  # Expected: True`,

            java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static boolean isBalanced(TreeNode root) {
        // Write your solution here
        
        return false;
    }
    
    // Helper function to create tree from array
    public static TreeNode createTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int i = 1;
        while (!queue.isEmpty() && i < arr.length) {
            TreeNode node = queue.poll();
            if (i < arr.length && arr[i] != null) {
                node.left = new TreeNode(arr[i]);
                queue.offer(node.left);
            }
            i++;
            if (i < arr.length && arr[i] != null) {
                node.right = new TreeNode(arr[i]);
                queue.offer(node.right);
            }
            i++;
        }
        return root;
    }
    
    public static void main(String[] args) {
        TreeNode tree1 = createTree(new Integer[]{3,9,20,null,null,15,7});
        System.out.println(isBalanced(tree1)); // Expected: true
        
        TreeNode tree2 = createTree(new Integer[]{1,2,2,3,3,null,null,4,4});
        System.out.println(isBalanced(tree2)); // Expected: false
        
        TreeNode tree3 = createTree(new Integer[]{});
        System.out.println(isBalanced(tree3)); // Expected: true
    }
}`,

            cpp: `#include <iostream>
#include <queue>
#include <vector>
#include <cmath>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

bool isBalanced(TreeNode* root) {
    // Write your solution here
    
}

// Helper function to create tree from vector (using -1 for null)
TreeNode* createTree(vector<int> arr) {
    if (arr.empty() || arr[0] == -1) return nullptr;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q;
    q.push(root);
    int i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* node = q.front();
        q.pop();
        if (i < arr.size() && arr[i] != -1) {
            node->left = new TreeNode(arr[i]);
            q.push(node->left);
        }
        i++;
        if (i < arr.size() && arr[i] != -1) {
            node->right = new TreeNode(arr[i]);
            q.push(node->right);
        }
        i++;
    }
    return root;
}

int main() {
    vector<int> arr1 = {3,9,20,-1,-1,15,7};
    TreeNode* tree1 = createTree(arr1);
    cout << boolalpha;
    cout << isBalanced(tree1) << endl; // Expected: true
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

bool isBalanced(struct TreeNode* root) {
    // Write your solution here
    
}

int main() {
    // For C, manual tree construction required
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static bool IsBalanced(TreeNode root) {
        // Write your solution here
        
    }
    
    static void Main() {
        // For C#, manual tree construction required
    }
}`,

            go: `package main

import "fmt"

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

func isBalanced(root *TreeNode) bool {
    // Write your solution here
    
}

func main() {
    // For Go, manual tree construction required
}`,

            rust: `use std::rc::Rc;
use std::cell::RefCell;

#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

fn is_balanced(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
    // Write your solution here
    
}

fn main() {
    // For Rust, manual tree construction required
}`,

            ruby: `class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val = 0, left = nil, right = nil)
        @val = val
        @left = left
        @right = right
    end
end

def is_balanced(root)
    # Write your solution here
    
end

# Test cases would need manual tree construction`,

            php: `<?php
class TreeNode {
    public $val = null;
    public $left = null;
    public $right = null;
    function __construct($val = 0, $left = null, $right = null) {
        $this->val = $val;
        $this->left = $left;
        $this->right = $right;
    }
}

function isBalanced($root) {
    // Write your solution here
    
}

// Test cases would need manual tree construction
?>`,

            swift: `public class TreeNode {
    public var val: Int
    public var left: TreeNode?
    public var right: TreeNode?
    public init() { self.val = 0; self.left = nil; self.right = nil; }
    public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
    public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
        self.val = val
        self.left = left
        self.right = right
    }
}

func isBalanced(_ root: TreeNode?) -> Bool {
    // Write your solution here
    
}

// Test cases would need manual tree construction`,

            kotlin: `class TreeNode(var value: Int) {
    var left: TreeNode? = null
    var right: TreeNode? = null
}

fun isBalanced(root: TreeNode?): Boolean {
    // Write your solution here
    
}

// Test cases would need manual tree construction`,

            scala: `class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
    var value: Int = _value
    var left: TreeNode = _left
    var right: TreeNode = _right
}

object Solution {
    def isBalanced(root: TreeNode): Boolean = {
        // Write your solution here
        
    }
}`,

            perl: `package TreeNode;
sub new {
    my ($class, $val, $left, $right) = @_;
    my $self = { val => $val // 0, left => $left // undef, right => $right // undef };
    bless $self, $class;
    return $self;
}

sub isBalanced {
    my $root = shift;
    # Write your solution here
    
}

# Test cases would need manual tree construction`,

            r: `TreeNode <- setRefClass("TreeNode",
    fields = list(val = "numeric", left = "ANY", right = "ANY"),
    methods = list(
        initialize = function(val = 0, left = NULL, right = NULL) {
            .self$val <- val
            .self$left <- left
            .self$right <- right
        }
    )
)

isBalanced <- function(root) {
    # Write your solution here
    
}

# Test cases would need manual tree construction`
        },
        expectedOutput: {
            javascript: "true\nfalse\ntrue",
            python: "True\nFalse\nTrue",
            java: "true\nfalse\ntrue"
        },
    },

    "convert-sorted-array-to-binary-search-tree": {
        id: "convert-sorted-array-to-binary-search-tree",
        title: "Convert Sorted Array to Binary Search Tree",
        difficulty: "Easy",
        category: "Tree • BST • Divide and Conquer",
        description: {
            text: "Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree. A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.",
            notes: [
                "The array is sorted in ascending order.",
                "Choose the middle element as the root to maintain balance.",
                "Recursively build the left and right subtrees."
            ],
        },
        examples: [
            {
                input: "nums = [-10,-3,0,5,9]",
                output: "[0,-3,9,-10,null,5]",
                explanation: "One possible answer is [0,-3,9,-10,null,5].",
            },
            {
                input: "nums = [1,3]",
                output: "[3,1]",
            },
            {
                input: "nums = [1]",
                output: "[1]",
            },
        ],
        constraints: [
            "1 ≤ nums.length ≤ 10⁴",
            "-10⁴ ≤ nums[i] ≤ 10⁴",
            "nums is sorted in ascending order",
        ],
        starterCode: {
            javascript: `function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

function sortedArrayToBST(nums) {
    // Write your solution here
    
}

// Helper function to convert tree to array (level order with nulls)
function treeToArray(root) {
    if (!root) return [];
    let result = [];
    let queue = [root];
    while (queue.length) {
        let node = queue.shift();
        result.push(node ? node.val : null);
        if (node) {
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    while (result[result.length - 1] === null) result.pop();
    return result;
}

// Test cases
console.log(treeToArray(sortedArrayToBST([-10,-3,0,5,9]))); // Expected: [0,-3,9,-10,null,5]
console.log(treeToArray(sortedArrayToBST([1,3]))); // Expected: [3,1]
console.log(treeToArray(sortedArrayToBST([1]))); // Expected: [1]`,

            typescript: `class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    // Write your solution here
    
}

// Helper function to convert tree to array (level order with nulls)
function treeToArray(root: TreeNode | null): (number | null)[] {
    if (!root) return [];
    let result: (number | null)[] = [];
    let queue: (TreeNode | null)[] = [root];
    while (queue.length) {
        let node = queue.shift();
        result.push(node ? node.val : null);
        if (node) {
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    while (result[result.length - 1] === null) result.pop();
    return result;
}

// Test cases
console.log(treeToArray(sortedArrayToBST([-10,-3,0,5,9])));
console.log(treeToArray(sortedArrayToBST([1,3])));
console.log(treeToArray(sortedArrayToBST([1])));`,

            python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def sortedArrayToBST(nums):
    # Write your solution here
    pass

# Helper function to convert tree to list (level order with nulls)
def treeToList(root):
    if not root:
        return []
    result = []
    queue = [root]
    while queue:
        node = queue.pop(0)
        result.append(node.val if node else None)
        if node:
            queue.append(node.left)
            queue.append(node.right)
    while result and result[-1] is None:
        result.pop()
    return result

# Test cases
print(treeToList(sortedArrayToBST([-10,-3,0,5,9])))  # Expected: [0,-3,9,-10,None,5]
print(treeToList(sortedArrayToBST([1,3])))  # Expected: [3,1]
print(treeToList(sortedArrayToBST([1])))  # Expected: [1]`,

            java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static TreeNode sortedArrayToBST(int[] nums) {
        // Write your solution here
        
        return null;
    }
    
    // Helper function to convert tree to list (level order with nulls)
    public static List<Integer> treeToList(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root == null) return result;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            result.add(node != null ? node.val : null);
            if (node != null) {
                queue.offer(node.left);
                queue.offer(node.right);
            }
        }
        while (result.size() > 0 && result.get(result.size() - 1) == null) {
            result.remove(result.size() - 1);
        }
        return result;
    }
    
    public static void main(String[] args) {
        System.out.println(treeToList(sortedArrayToBST(new int[]{-10,-3,0,5,9})));
        System.out.println(treeToList(sortedArrayToBST(new int[]{1,3})));
        System.out.println(treeToList(sortedArrayToBST(new int[]{1})));
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

TreeNode* sortedArrayToBST(vector<int>& nums) {
    // Write your solution here
    
}

// Helper function to convert tree to vector (level order with -1 for null)
vector<int> treeToVector(TreeNode* root) {
    if (!root) return {};
    vector<int> result;
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        TreeNode* node = q.front();
        q.pop();
        result.push_back(node ? node->val : -1);
        if (node) {
            q.push(node->left);
            q.push(node->right);
        }
    }
    while (!result.empty() && result.back() == -1) result.pop_back();
    return result;
}

int main() {
    vector<int> nums1 = {-10,-3,0,5,9};
    TreeNode* tree1 = sortedArrayToBST(nums1);
    vector<int> result1 = treeToVector(tree1);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << result1[i];
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

struct TreeNode* sortedArrayToBST(int* nums, int numsSize) {
    // Write your solution here
    
}

int main() {
    // For C, manual tree construction required
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static TreeNode SortedArrayToBST(int[] nums) {
        // Write your solution here
        
    }
    
    static void Main() {
        // For C#, manual tree construction required
    }
}`,

            go: `package main

import "fmt"

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

func sortedArrayToBST(nums []int) *TreeNode {
    // Write your solution here
    
}

func main() {
    // For Go, manual tree construction required
}`,

            rust: `use std::rc::Rc;
use std::cell::RefCell;

#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

fn sorted_array_to_bst(nums: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
    // Write your solution here
    
}

fn main() {
    // For Rust, manual tree construction required
}`,

            ruby: `class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val = 0, left = nil, right = nil)
        @val = val
        @left = left
        @right = right
    end
end

def sorted_array_to_bst(nums)
    # Write your solution here
    
end

# Test cases would need manual tree construction`,

            php: `<?php
class TreeNode {
    public $val = null;
    public $left = null;
    public $right = null;
    function __construct($val = 0, $left = null, $right = null) {
        $this->val = $val;
        $this->left = $left;
        $this->right = $right;
    }
}

function sortedArrayToBST($nums) {
    // Write your solution here
    
}

// Test cases would need manual tree construction
?>`,

            swift: `public class TreeNode {
    public var val: Int
    public var left: TreeNode?
    public var right: TreeNode?
    public init() { self.val = 0; self.left = nil; self.right = nil; }
    public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
    public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
        self.val = val
        self.left = left
        self.right = right
    }
}

func sortedArrayToBST(_ nums: [Int]) -> TreeNode? {
    // Write your solution here
    
}

// Test cases would need manual tree construction`,

            kotlin: `class TreeNode(var value: Int) {
    var left: TreeNode? = null
    var right: TreeNode? = null
}

fun sortedArrayToBST(nums: IntArray): TreeNode? {
    // Write your solution here
    
}

// Test cases would need manual tree construction`,

            scala: `class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
    var value: Int = _value
    var left: TreeNode = _left
    var right: TreeNode = _right
}

object Solution {
    def sortedArrayToBST(nums: Array[Int]): TreeNode = {
        // Write your solution here
        
    }
}`,

            perl: `package TreeNode;
sub new {
    my ($class, $val, $left, $right) = @_;
    my $self = { val => $val // 0, left => $left // undef, right => $right // undef };
    bless $self, $class;
    return $self;
}

sub sortedArrayToBST {
    my $nums = shift;
    # Write your solution here
    
}

# Test cases would need manual tree construction`,

            r: `TreeNode <- setRefClass("TreeNode",
    fields = list(val = "numeric", left = "ANY", right = "ANY"),
    methods = list(
        initialize = function(val = 0, left = NULL, right = NULL) {
            .self$val <- val
            .self$left <- left
            .self$right <- right
        }
    )
)

sortedArrayToBST <- function(nums) {
    # Write your solution here
    
}

# Test cases would need manual tree construction`
        },
        expectedOutput: {
            javascript: "[0,-3,9,-10,null,5]\n[3,1]\n[1]",
            python: "[0,-3,9,-10,None,5]\n[3,1]\n[1]",
            java: "[0,-3,9,-10,null,5]\n[3,1]\n[1]"
        },
    },

    "flood-fill": {
        id: "flood-fill",
        title: "Flood Fill",
        difficulty: "Easy",
        category: "Array • DFS • BFS • Matrix",
        description: {
            text: "You are given an image represented by an m x n grid of integers, where each integer represents a pixel value. You are also given a starting pixel (sr, sc) and a new color. Perform a flood fill starting from the starting pixel, changing the color of the starting pixel and all connected pixels of the same color to the new color. Two pixels are connected if they are adjacent horizontally or vertically.",
            notes: [
                "The flood fill algorithm changes the color of the starting pixel and all adjacent pixels with the same original color.",
                "Use DFS or BFS to traverse the connected region."
            ],
        },
        examples: [
            {
                input: "image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2",
                output: "[[2,2,2],[2,2,0],[2,0,1]]",
            },
            {
                input: "image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 0",
                output: "[[0,0,0],[0,0,0]]",
            },
        ],
        constraints: [
            "m == image.length",
            "n == image[i].length",
            "1 ≤ m, n ≤ 50",
            "0 ≤ image[i][j], newColor < 2¹⁶",
            "0 ≤ sr < m",
            "0 ≤ sc < n",
        ],
        starterCode: {
            javascript: `function floodFill(image, sr, sc, newColor) {
    // Write your solution here
    
}

// Test cases
console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)); 
// Expected: [[2,2,2],[2,2,0],[2,0,1]]

console.log(floodFill([[0,0,0],[0,0,0]], 0, 0, 0)); 
// Expected: [[0,0,0],[0,0,0]]`,

            typescript: `function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    // Write your solution here
    
}

// Test cases
console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2));
console.log(floodFill([[0,0,0],[0,0,0]], 0, 0, 0));`,

            python: `def floodFill(image, sr, sc, newColor):
    # Write your solution here
    pass

# Test cases
print(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))
print(floodFill([[0,0,0],[0,0,0]], 0, 0, 0))`,

            java: `import java.util.*;

class Solution {
    public static int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        // Write your solution here
        
        return image;
    }
    
    public static void main(String[] args) {
        int[][] result1 = floodFill(new int[][]{{1,1,1},{1,1,0},{1,0,1}}, 1, 1, 2);
        System.out.println(Arrays.deepToString(result1));
        
        int[][] result2 = floodFill(new int[][]{{0,0,0},{0,0,0}}, 0, 0, 0);
        System.out.println(Arrays.deepToString(result2));
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int newColor) {
    // Write your solution here
    
}

int main() {
    vector<vector<int>> image1 = {{1,1,1},{1,1,0},{1,0,1}};
    vector<vector<int>> result1 = floodFill(image1, 1, 1, 2);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << "[";
        for (size_t j = 0; j < result1[i].size(); j++) {
            cout << result1[i][j];
            if (j < result1[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int** floodFill(int** image, int imageSize, int* imageColSize, int sr, int sc, int newColor, int* returnSize, int** returnColumnSizes) {
    // Write your solution here
    
}

int main() {
    // For C, manual implementation required
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int[][] FloodFill(int[][] image, int sr, int sc, int newColor) {
        // Write your solution here
        
    }
    
    static void Main() {
        var result1 = FloodFill(new int[][] { new int[] {1,1,1}, new int[] {1,1,0}, new int[] {1,0,1} }, 1, 1, 2);
        Console.WriteLine($"[{string.Join(",", result1.Select(x => $"[{string.Join(",", x)}]"))}]");
    }
}`,

            go: `package main

import "fmt"

func floodFill(image [][]int, sr int, sc int, newColor int) [][]int {
    // Write your solution here
    
}

func main() {
    fmt.Println(floodFill([][]int{{1,1,1},{1,1,0},{1,0,1}}, 1, 1, 2))
}`,

            rust: `fn flood_fill(image: Vec<Vec<i32>>, sr: i32, sc: i32, new_color: i32) -> Vec<Vec<i32>> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", flood_fill(vec![vec![1,1,1], vec![1,1,0], vec![1,0,1]], 1, 1, 2));
}`,

            ruby: `def flood_fill(image, sr, sc, new_color)
    # Write your solution here
    
end

puts flood_fill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2).inspect`,

            php: `<?php
function floodFill($image, $sr, $sc, $newColor) {
    // Write your solution here
    
}

print_r(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2));
?>`,

            swift: `func floodFill(_ image: [[Int]], _ sr: Int, _ sc: Int, _ newColor: Int) -> [[Int]] {
    // Write your solution here
    
}

print(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))`,

            kotlin: `fun floodFill(image: Array<IntArray>, sr: Int, sc: Int, newColor: Int): Array<IntArray> {
    // Write your solution here
    
}

fun main() {
    println(floodFill(arrayOf(intArrayOf(1,1,1), intArrayOf(1,1,0), intArrayOf(1,0,1)), 1, 1, 2).map { it.joinToString() }.joinToString())
}`,

            scala: `object Solution {
    def floodFill(image: Array[Array[Int]], sr: Int, sc: Int, newColor: Int): Array[Array[Int]] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(floodFill(Array(Array(1,1,1), Array(1,1,0), Array(1,0,1)), 1, 1, 2).map(_.mkString(",")).mkString(";"))
    }
}`,

            perl: `sub floodFill {
    my ($image, $sr, $sc, $newColor) = @_;
    # Write your solution here
    
}

print "[" . join(",", @{floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)}) . "]\\n";`,

            r: `floodFill <- function(image, sr, sc, newColor) {
    # Write your solution here
    
}

print(floodFill(list(c(1,1,1), c(1,1,0), c(1,0,1)), 1, 1, 2))`
        },
        expectedOutput: {
            javascript: "[[2,2,2],[2,2,0],[2,0,1]]\n[[0,0,0],[0,0,0]]",
            python: "[[2,2,2],[2,2,0],[2,0,1]]\n[[0,0,0],[0,0,0]]",
            java: "[[2,2,2],[2,2,0],[2,0,1]]\n[[0,0,0],[0,0,0]]"
        },
    },

    "merge-k-sorted-lists": {
        id: "merge-k-sorted-lists",
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        category: "Linked List • Divide and Conquer • Heap",
        description: {
            text: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
            notes: [
                "You can use a min-heap to always get the smallest node among all lists.",
                "Alternatively, use divide and conquer approach.",
                "k can be up to 10⁴ and each list length can be up to 500."
            ],
        },
        examples: [
            {
                input: "lists = [[1,4,5],[1,3,4],[2,6]]",
                output: "[1,1,2,3,4,4,5,6]",
            },
            {
                input: "lists = []",
                output: "[]",
            },
            {
                input: "lists = [[]]",
                output: "[]",
            },
        ],
        constraints: [
            "k == lists.length",
            "0 ≤ k ≤ 10⁴",
            "0 ≤ lists[i].length ≤ 500",
            "-10⁴ ≤ lists[i][j] ≤ 10⁴",
            "Each lists[i] is sorted in ascending order",
            "The sum of all lists[i].length will not exceed 10⁴",
        ],
        starterCode: {
            javascript: `function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function mergeKLists(lists) {
    // Write your solution here
    
}

// Helper function to create linked list from array
function createLinkedList(arr) {
    if (!arr.length) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Test cases
let lists1 = [
    createLinkedList([1,4,5]),
    createLinkedList([1,3,4]),
    createLinkedList([2,6])
];
console.log(linkedListToArray(mergeKLists(lists1))); // Expected: [1,1,2,3,4,4,5,6]

console.log(linkedListToArray(mergeKLists([]))); // Expected: []
console.log(linkedListToArray(mergeKLists([createLinkedList([])]))); // Expected: []`,

            typescript: `class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    // Write your solution here
    
}

// Helper function to create linked list from array
function createLinkedList(arr: number[]): ListNode | null {
    if (!arr.length) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array
function linkedListToArray(head: ListNode | null): number[] {
    let result: number[] = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Test cases
let lists1 = [
    createLinkedList([1,4,5]),
    createLinkedList([1,3,4]),
    createLinkedList([2,6])
];
console.log(linkedListToArray(mergeKLists(lists1)));`,

            python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeKLists(lists):
    # Write your solution here
    pass

# Helper function to create linked list from list
def createLinkedList(arr):
    if not arr:
        return None
    head = ListNode(arr[0])
    current = head
    for val in arr[1:]:
        current.next = ListNode(val)
        current = current.next
    return head

# Helper function to convert linked list to list
def linkedListToList(head):
    result = []
    current = head
    while current:
        result.append(current.val)
        current = current.next
    return result

# Test cases
lists1 = [
    createLinkedList([1,4,5]),
    createLinkedList([1,3,4]),
    createLinkedList([2,6])
]
print(linkedListToList(mergeKLists(lists1)))`,

            java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public static ListNode mergeKLists(ListNode[] lists) {
        // Write your solution here
        
        return null;
    }
    
    public static void main(String[] args) {
        // For Java, manual list construction required
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

ListNode* mergeKLists(vector<ListNode*>& lists) {
    // Write your solution here
    
}

int main() {
    // For C++, manual list construction required
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* mergeKLists(struct ListNode** lists, int listsSize) {
    // Write your solution here
    
}

int main() {
    // For C, manual list construction required
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

public class ListNode {
    public int val;
    public ListNode next;
    public ListNode(int val=0, ListNode next=null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    public static ListNode MergeKLists(ListNode[] lists) {
        // Write your solution here
        
    }
    
    static void Main() {
        // For C#, manual list construction required
    }
}`,

            go: `package main

type ListNode struct {
    Val int
    Next *ListNode
}

func mergeKLists(lists []*ListNode) *ListNode {
    // Write your solution here
    
}

func main() {
    // For Go, manual list construction required
}`,

            rust: `use std::cmp::Ordering;
use std::collections::BinaryHeap;

#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

fn merge_k_lists(lists: Vec<Option<Box<ListNode>>>) -> Option<Box<ListNode>> {
    // Write your solution here
    
}

fn main() {
    // For Rust, manual list construction required
}`,

            ruby: `class ListNode
    attr_accessor :val, :next
    def initialize(val = 0, _next = nil)
        @val = val
        @next = _next
    end
end

def merge_k_lists(lists)
    # Write your solution here
    
end`,

            php: `<?php
class ListNode {
    public $val = 0;
    public $next = null;
    function __construct($val = 0, $next = null) {
        $this->val = $val;
        $this->next = $next;
    }
}

function mergeKLists($lists) {
    // Write your solution here
    
}
?>`,

            swift: `public class ListNode {
    public var val: Int
    public var next: ListNode?
    public init() { self.val = 0; self.next = nil; }
    public init(_ val: Int) { self.val = val; self.next = nil; }
    public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
}

func mergeKLists(_ lists: [ListNode?]) -> ListNode? {
    // Write your solution here
    
}`,

            kotlin: `class ListNode(var value: Int) {
    var next: ListNode? = null
}

fun mergeKLists(lists: Array<ListNode?>): ListNode? {
    // Write your solution here
    
}`,

            scala: `class ListNode(_x: Int = 0, _next: ListNode = null) {
    var val: Int = _x
    var next: ListNode = _next
}

object Solution {
    def mergeKLists(lists: Array[ListNode]): ListNode = {
        // Write your solution here
        
    }
}`,

            perl: `package ListNode;
sub new {
    my ($class, $val, $next) = @_;
    my $self = { val => $val // 0, next => $next // undef };
    bless $self, $class;
    return $self;
}

sub mergeKLists {
    my $lists = shift;
    # Write your solution here
    
}`,

            r: `ListNode <- setRefClass("ListNode",
    fields = list(val = "numeric", next = "ANY"),
    methods = list(
        initialize = function(val = 0, next = NULL) {
            .self$val <- val
            .self$next <- next
        }
    )
)

mergeKLists <- function(lists) {
    # Write your solution here
    
}`
        },
        expectedOutput: {
            javascript: "[1,1,2,3,4,4,5,6]\n[]\n[]",
            python: "[1,1,2,3,4,4,5,6]\n[]\n[]",
            java: "[1,1,2,3,4,4,5,6]\n[]\n[]"
        },
    },

    "median-of-two-sorted-arrays": {
        id: "median-of-two-sorted-arrays",
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        category: "Array • Binary Search • Divide and Conquer",
        description: {
            text: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
            notes: [
                "The median is the middle value in an ordered list.",
                "If the total number of elements is even, the median is the average of the two middle numbers.",
                "Use binary search on the smaller array for O(log(min(m,n))) solution."
            ],
        },
        examples: [
            {
                input: "nums1 = [1,3], nums2 = [2]",
                output: "2.00000",
            },
            {
                input: "nums1 = [1,2], nums2 = [3,4]",
                output: "2.50000",
            },
            {
                input: "nums1 = [0,0], nums2 = [0,0]",
                output: "0.00000",
            },
        ],
        constraints: [
            "nums1.length == m",
            "nums2.length == n",
            "0 ≤ m, n ≤ 1000",
            "0 ≤ m + n ≤ 2000",
            "-10⁶ ≤ nums1[i], nums2[i] ≤ 10⁶",
        ],
        starterCode: {
            javascript: `function findMedianSortedArrays(nums1, nums2) {
    // Write your solution here
    
}

// Test cases
console.log(findMedianSortedArrays([1,3], [2])); // Expected: 2.00000
console.log(findMedianSortedArrays([1,2], [3,4])); // Expected: 2.50000
console.log(findMedianSortedArrays([0,0], [0,0])); // Expected: 0.00000`,

            typescript: `function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Write your solution here
    
}

console.log(findMedianSortedArrays([1,3], [2]));
console.log(findMedianSortedArrays([1,2], [3,4]));
console.log(findMedianSortedArrays([0,0], [0,0]));`,

            python: `def findMedianSortedArrays(nums1, nums2):
    # Write your solution here
    pass

print(findMedianSortedArrays([1,3], [2]))
print(findMedianSortedArrays([1,2], [3,4]))
print(findMedianSortedArrays([0,0], [0,0]))`,

            java: `class Solution {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here
        
        return 0.0;
    }
    
    public static void main(String[] args) {
        System.out.println(findMedianSortedArrays(new int[]{1,3}, new int[]{2}));
        System.out.println(findMedianSortedArrays(new int[]{1,2}, new int[]{3,4}));
        System.out.println(findMedianSortedArrays(new int[]{0,0}, new int[]{0,0}));
    }
}`,

            cpp: `#include <iostream>
#include <vector>
using namespace std;

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    // Write your solution here
    
}

int main() {
    vector<int> nums1 = {1,3};
    vector<int> nums2 = {2};
    cout << findMedianSortedArrays(nums1, nums2) << endl;
    return 0;
}`,

            c: `#include <stdio.h>

double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {1,3};
    int nums2[] = {2};
    printf("%.5f\\n", findMedianSortedArrays(nums1, 2, nums2, 1));
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static double FindMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(FindMedianSortedArrays(new int[] {1,3}, new int[] {2}));
    }
}`,

            go: `package main

import "fmt"

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
    // Write your solution here
    
}

func main() {
    fmt.Println(findMedianSortedArrays([]int{1,3}, []int{2}))
}`,

            rust: `fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
    // Write your solution here
    
}

fn main() {
    println!("{}", find_median_sorted_arrays(vec![1,3], vec![2]));
}`,

            ruby: `def find_median_sorted_arrays(nums1, nums2)
    # Write your solution here
    
end

puts find_median_sorted_arrays([1,3], [2])`,

            php: `<?php
function findMedianSortedArrays($nums1, $nums2) {
    // Write your solution here
    
}

echo findMedianSortedArrays([1,3], [2]);
?>`,

            swift: `func findMedianSortedArrays(_ nums1: [Int], _ nums2: [Int]) -> Double {
    // Write your solution here
    
}

print(findMedianSortedArrays([1,3], [2]))`,

            kotlin: `fun findMedianSortedArrays(nums1: IntArray, nums2: IntArray): Double {
    // Write your solution here
    
}

fun main() {
    println(findMedianSortedArrays(intArrayOf(1,3), intArrayOf(2)))
}`,

            scala: `object Solution {
    def findMedianSortedArrays(nums1: Array[Int], nums2: Array[Int]): Double = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(findMedianSortedArrays(Array(1,3), Array(2)))
    }
}`,

            perl: `sub findMedianSortedArrays {
    my ($nums1, $nums2) = @_;
    # Write your solution here
    
}

print findMedianSortedArrays([1,3], [2]) . "\\n";`,

            r: `findMedianSortedArrays <- function(nums1, nums2) {
    # Write your solution here
    
}

print(findMedianSortedArrays(c(1,3), c(2)))`
        },
        expectedOutput: {
            javascript: "2.00000\n2.50000\n0.00000",
            python: "2.0\n2.5\n0.0",
            java: "2.0\n2.5\n0.0"
        },
    },

    "reverse-nodes-in-k-group": {
        id: "reverse-nodes-in-k-group",
        title: "Reverse Nodes in k-Group",
        difficulty: "Hard",
        category: "Linked List • Recursion",
        description: {
            text: "Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list. If the number of nodes is not a multiple of k, the remaining nodes at the end should stay in the same order.",
            notes: [
                "You cannot alter the values in the list's nodes, only nodes themselves may be changed.",
                "k is a positive integer and is less than or equal to the length of the linked list."
            ],
        },
        examples: [
            {
                input: "head = [1,2,3,4,5], k = 2",
                output: "[2,1,4,3,5]",
            },
            {
                input: "head = [1,2,3,4,5], k = 3",
                output: "[3,2,1,4,5]",
            },
        ],
        constraints: [
            "The number of nodes in the list is n",
            "1 ≤ k ≤ n ≤ 5000",
            "0 ≤ Node.val ≤ 1000",
        ],
        starterCode: {
            javascript: `function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function reverseKGroup(head, k) {
    // Write your solution here
    
}

// Helper function to create linked list from array
function createLinkedList(arr) {
    if (!arr.length) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Test cases
let list1 = createLinkedList([1,2,3,4,5]);
console.log(linkedListToArray(reverseKGroup(list1, 2))); // Expected: [2,1,4,3,5]

let list2 = createLinkedList([1,2,3,4,5]);
console.log(linkedListToArray(reverseKGroup(list2, 3))); // Expected: [3,2,1,4,5]`,

            typescript: `class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    // Write your solution here
    
}

// Helper functions same as JavaScript`,

            python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseKGroup(head, k):
    # Write your solution here
    pass

# Helper functions same as other problems`,

            java: `class Solution {
    public static ListNode reverseKGroup(ListNode head, int k) {
        // Write your solution here
        
        return null;
    }
}`,

            cpp: `class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        // Write your solution here
        
    }
};`,

            c: `struct ListNode* reverseKGroup(struct ListNode* head, int k) {
    // Write your solution here
    
}`,

            csharp: `public class Solution {
    public ListNode ReverseKGroup(ListNode head, int k) {
        // Write your solution here
        
    }
}`,

            go: `func reverseKGroup(head *ListNode, k int) *ListNode {
    // Write your solution here
    
}`,

            rust: `fn reverse_k_group(head: Option<Box<ListNode>>, k: i32) -> Option<Box<ListNode>> {
    // Write your solution here
    
}`,

            ruby: `def reverse_k_group(head, k)
    # Write your solution here
    
end`,

            php: `function reverseKGroup($head, $k) {
    // Write your solution here
    
}`,

            swift: `func reverseKGroup(_ head: ListNode?, _ k: Int) -> ListNode? {
    // Write your solution here
    
}`,

            kotlin: `fun reverseKGroup(head: ListNode?, k: Int): ListNode? {
    // Write your solution here
    
}`,

            scala: `def reverseKGroup(head: ListNode, k: Int): ListNode = {
    // Write your solution here
    
}`,

            perl: `sub reverseKGroup {
    my ($head, $k) = @_;
    # Write your solution here
    
}`,

            r: `reverseKGroup <- function(head, k) {
    # Write your solution here
    
}`
        },
        expectedOutput: {
            javascript: "[2,1,4,3,5]\n[3,2,1,4,5]",
            python: "[2,1,4,3,5]\n[3,2,1,4,5]",
            java: "[2,1,4,3,5]\n[3,2,1,4,5]"
        },
    },

    "serialize-and-deserialize-binary-tree": {
        id: "serialize-and-deserialize-binary-tree",
        title: "Serialize and Deserialize Binary Tree",
        difficulty: "Hard",
        category: "Tree • Design • BFS",
        description: {
            text: "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment. Design an algorithm to serialize and deserialize a binary tree.",
            notes: [
                "You may serialize the tree using any format you like.",
                "The output format should be such that you can deserialize it back to the original tree structure.",
                "There is no restriction on how your serialization/deserialization algorithm should work."
            ],
        },
        examples: [
            {
                input: "root = [1,2,3,null,null,4,5]",
                output: "[1,2,3,null,null,4,5]",
            },
            {
                input: "root = []",
                output: "[]",
            },
            {
                input: "root = [1]",
                output: "[1]",
            },
        ],
        constraints: [
            "The number of nodes in the tree is in the range [0, 10⁴]",
            "-1000 ≤ Node.val ≤ 1000",
        ],
        starterCode: {
            javascript: `function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

function serialize(root) {
    // Write your solution here
    
}

function deserialize(data) {
    // Write your solution here
    
}

// Test cases
let root = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
let serialized = serialize(root);
console.log(serialized);
console.log(deserialize(serialized));`,

            typescript: `class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}

function serialize(root: TreeNode | null): string {
    // Write your solution here
    
}

function deserialize(data: string): TreeNode | null {
    // Write your solution here
    
}`,

            python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def serialize(root):
    # Write your solution here
    pass

def deserialize(data):
    # Write your solution here
    pass`,

            java: `import java.util.*;

public class Codec {
    public String serialize(TreeNode root) {
        // Write your solution here
        
    }

    public TreeNode deserialize(String data) {
        // Write your solution here
        
    }
}`,

            cpp: `class Codec {
public:
    string serialize(TreeNode* root) {
        // Write your solution here
        
    }

    TreeNode* deserialize(string data) {
        // Write your solution here
        
    }
};`,

            c: `void serialize(struct TreeNode* root, char* data) {
    // Write your solution here
    
}

struct TreeNode* deserialize(char* data) {
    // Write your solution here
    
}`,

            csharp: `public class Codec {
    public string serialize(TreeNode root) {
        // Write your solution here
        
    }

    public TreeNode deserialize(string data) {
        // Write your solution here
        
    }
}`,

            go: `type Codec struct {}
func (Codec) serialize(root *TreeNode) string {}
func (Codec) deserialize(data string) *TreeNode {}`,

            rust: `struct Codec;
impl Codec {
    fn new() -> Self { Codec{} }
    fn serialize(&self, root: Option<Rc<RefCell<TreeNode>>>) -> String {}
    fn deserialize(&self, data: String) -> Option<Rc<RefCell<TreeNode>>> {}
}`,

            ruby: `def serialize(root)
end

def deserialize(data)
end`,

            php: `class Codec {
    function serialize($root) {}
    function deserialize($data) {}
}`,

            swift: `class Codec {
    func serialize(_ root: TreeNode?) -> String { return "" }
    func deserialize(_ data: String) -> TreeNode? { return nil }
}`,

            kotlin: `class Codec() {
    fun serialize(root: TreeNode?): String = ""
    fun deserialize(data: String): TreeNode? = null
}`,

            scala: `class Codec {
    def serialize(root: TreeNode): String = ""
    def deserialize(data: String): TreeNode = null
}`,

            perl: `sub serialize { my $root = shift; }
sub deserialize { my $data = shift; }`,

            r: `serialize <- function(root) {}
deserialize <- function(data) {}`
        },
        expectedOutput: {
            javascript: "1,2,3,null,null,4,5\nTreeNode",
            python: "1,2,3,null,null,4,5\nTreeNode",
            java: "1,2,3,null,null,4,5\nTreeNode"
        },
    },

    "n-queens": {
        id: "n-queens",
        title: "N-Queens",
        difficulty: "Hard",
        category: "Array • Backtracking",
        description: {
            text: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order. Each solution contains a distinct board configuration of the queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.",
            notes: [
                "No two queens can share the same row, column, or diagonal.",
                "Use backtracking to place queens row by row.",
                "Use sets to track occupied columns and diagonals for O(1) lookup."
            ],
        },
        examples: [
            {
                input: "n = 4",
                output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
            },
            {
                input: "n = 1",
                output: '[["Q"]]',
            },
        ],
        constraints: [
            "1 ≤ n ≤ 9",
        ],
        starterCode: {
            javascript: `function solveNQueens(n) {
    // Write your solution here
    
}

console.log(solveNQueens(4));
console.log(solveNQueens(1));`,

            typescript: `function solveNQueens(n: number): string[][] {
    // Write your solution here
    
}`,

            python: `def solveNQueens(n):
    # Write your solution here
    pass

print(solveNQueens(4))`,

            java: `class Solution {
    public static List<List<String>> solveNQueens(int n) {
        // Write your solution here
        
        return new ArrayList<>();
    }
}`,

            cpp: `class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        // Write your solution here
        
    }
};`,

            c: `char*** solveNQueens(int n, int* returnSize, int** returnColumnSizes) {
    // Write your solution here
    
}`,

            csharp: `public class Solution {
    public IList<IList<string>> SolveNQueens(int n) {
        // Write your solution here
        
    }
}`,

            go: `func solveNQueens(n int) [][]string {
    // Write your solution here
    
}`,

            rust: `fn solve_n_queens(n: i32) -> Vec<Vec<String>> {
    // Write your solution here
    
}`,

            ruby: `def solve_n_queens(n)
    # Write your solution here
    
end`,

            php: `function solveNQueens($n) {
    // Write your solution here
    
}`,

            swift: `func solveNQueens(_ n: Int) -> [[String]] {
    // Write your solution here
    
}`,

            kotlin: `fun solveNQueens(n: Int): List<List<String>> {
    // Write your solution here
    
}`,

            scala: `def solveNQueens(n: Int): List[List[String]] = {
    // Write your solution here
    
}`,

            perl: `sub solveNQueens {
    my $n = shift;
    # Write your solution here
    
}`,

            r: `solveNQueens <- function(n) {
    # Write your solution here
    
}`
        },
        expectedOutput: {
            javascript: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]\n[["Q"]]',
            python: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]\n[["Q"]]',
            java: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]\n[["Q"]]'
        },
    },

    "binary-tree-maximum-path-sum": {
        id: "binary-tree-maximum-path-sum",
        title: "Binary Tree Maximum Path Sum",
        difficulty: "Hard",
        category: "Tree • DFS • Dynamic Programming",
        description: {
            text: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge connecting them. A node can only appear in the sequence at most once. The path does not need to pass through the root. Given the root of a binary tree, return the maximum path sum of any non-empty path.",
            notes: [
                "The path sum is the sum of the node values along the path.",
                "A path can start and end at any node.",
                "Use DFS to compute the maximum gain from each subtree."
            ],
        },
        examples: [
            {
                input: "root = [1,2,3]",
                output: "6",
                explanation: "The optimal path is 2 -> 1 -> 3 with sum 6.",
            },
            {
                input: "root = [-10,9,20,null,null,15,7]",
                output: "42",
                explanation: "The optimal path is 15 -> 20 -> 7 with sum 42.",
            },
        ],
        constraints: [
            "The number of nodes in the tree is in the range [1, 3 * 10⁴]",
            "-1000 ≤ Node.val ≤ 1000",
        ],
        starterCode: {
            javascript: `function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

function maxPathSum(root) {
    // Write your solution here
    
}

// Helper function to create tree from array
function createTree(arr) {
    if (!arr.length) return null;
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        let node = queue.shift();
        if (arr[i] !== null && arr[i] !== undefined) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

// Test cases
let tree1 = createTree([1,2,3]);
console.log(maxPathSum(tree1)); // Expected: 6

let tree2 = createTree([-10,9,20,null,null,15,7]);
console.log(maxPathSum(tree2)); // Expected: 42`,

            typescript: `class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}

function maxPathSum(root: TreeNode | null): number {
    // Write your solution here
    
}

// Helper function to create tree from array
function createTree(arr: (number | null)[]): TreeNode | null {
    if (!arr.length) return null;
    let root = new TreeNode(arr[0] as number);
    let queue: (TreeNode | null)[] = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        let node = queue.shift();
        if (node) {
            if (arr[i] !== null && arr[i] !== undefined) {
                node.left = new TreeNode(arr[i] as number);
                queue.push(node.left);
            }
            i++;
            if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
                node.right = new TreeNode(arr[i] as number);
                queue.push(node.right);
            }
            i++;
        }
    }
    return root;
}

// Test cases
let tree1 = createTree([1,2,3]);
console.log(maxPathSum(tree1)); // Expected: 6

let tree2 = createTree([-10,9,20,null,null,15,7]);
console.log(maxPathSum(tree2)); // Expected: 42`,

            python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def maxPathSum(root):
    # Write your solution here
    pass

# Helper function to create tree from list
def createTree(arr):
    if not arr:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if arr[i] is not None:
            node.left = TreeNode(arr[i])
            queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i])
            queue.append(node.right)
        i += 1
    return root

# Test cases
tree1 = createTree([1,2,3])
print(maxPathSum(tree1))  # Expected: 6

tree2 = createTree([-10,9,20,None,None,15,7])
print(maxPathSum(tree2))  # Expected: 42`,

            java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static int maxPathSum(TreeNode root) {
        // Write your solution here
        
        return 0;
    }
    
    // Helper function to create tree from array
    public static TreeNode createTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int i = 1;
        while (!queue.isEmpty() && i < arr.length) {
            TreeNode node = queue.poll();
            if (i < arr.length && arr[i] != null) {
                node.left = new TreeNode(arr[i]);
                queue.offer(node.left);
            }
            i++;
            if (i < arr.length && arr[i] != null) {
                node.right = new TreeNode(arr[i]);
                queue.offer(node.right);
            }
            i++;
        }
        return root;
    }
    
    public static void main(String[] args) {
        TreeNode tree1 = createTree(new Integer[]{1,2,3});
        System.out.println(maxPathSum(tree1)); // Expected: 6
        
        TreeNode tree2 = createTree(new Integer[]{-10,9,20,null,null,15,7});
        System.out.println(maxPathSum(tree2)); // Expected: 42
    }
}`,

            cpp: `#include <iostream>
#include <queue>
#include <vector>
#include <algorithm>
#include <climits>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution {
public:
    int maxPathSum(TreeNode* root) {
        // Write your solution here
        
    }
};

// Helper function to create tree from vector (using -1 for null)
TreeNode* createTree(vector<int> arr) {
    if (arr.empty() || arr[0] == -1) return nullptr;
    TreeNode* root = new TreeNode(arr[0]);
    queue<TreeNode*> q;
    q.push(root);
    int i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* node = q.front();
        q.pop();
        if (i < arr.size() && arr[i] != -1) {
            node->left = new TreeNode(arr[i]);
            q.push(node->left);
        }
        i++;
        if (i < arr.size() && arr[i] != -1) {
            node->right = new TreeNode(arr[i]);
            q.push(node->right);
        }
        i++;
    }
    return root;
}

int main() {
    vector<int> arr1 = {1,2,3};
    TreeNode* tree1 = createTree(arr1);
    Solution sol;
    cout << sol.maxPathSum(tree1) << endl; // Expected: 6
    
    vector<int> arr2 = {-10,9,20,-1,-1,15,7};
    TreeNode* tree2 = createTree(arr2);
    cout << sol.maxPathSum(tree2) << endl; // Expected: 42
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

int maxPathSum(struct TreeNode* root) {
    // Write your solution here
    
}

int main() {
    // For C, manual tree construction required
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static int MaxPathSum(TreeNode root) {
        // Write your solution here
        
    }
    
    static void Main() {
        // For C#, manual tree construction required
    }
}`,

            go: `package main

import "fmt"

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

func maxPathSum(root *TreeNode) int {
    // Write your solution here
    
}

func main() {
    // For Go, manual tree construction required
}`,

            rust: `use std::rc::Rc;
use std::cell::RefCell;
use std::cmp::max;

#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

fn max_path_sum(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    // Write your solution here
    
}

fn main() {
    // For Rust, manual tree construction required
}`,

            ruby: `class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val = 0, left = nil, right = nil)
        @val = val
        @left = left
        @right = right
    end
end

def max_path_sum(root)
    # Write your solution here
    
end

# Test cases would need manual tree construction`,

            php: `<?php
class TreeNode {
    public $val = null;
    public $left = null;
    public $right = null;
    function __construct($val = 0, $left = null, $right = null) {
        $this->val = $val;
        $this->left = $left;
        $this->right = $right;
    }
}

function maxPathSum($root) {
    // Write your solution here
    
}
?>`,

            swift: `public class TreeNode {
    public var val: Int
    public var left: TreeNode?
    public var right: TreeNode?
    public init() { self.val = 0; self.left = nil; self.right = nil; }
    public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
    public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
        self.val = val
        self.left = left
        self.right = right
    }
}

func maxPathSum(_ root: TreeNode?) -> Int {
    // Write your solution here
    
}

// Test cases would need manual tree construction`,

            kotlin: `class TreeNode(var value: Int) {
    var left: TreeNode? = null
    var right: TreeNode? = null
}

fun maxPathSum(root: TreeNode?): Int {
    // Write your solution here
    
}

// Test cases would need manual tree construction`,

            scala: `class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
    var value: Int = _value
    var left: TreeNode = _left
    var right: TreeNode = _right
}

object Solution {
    def maxPathSum(root: TreeNode): Int = {
        // Write your solution here
        
    }
}`,

            perl: `package TreeNode;
sub new {
    my ($class, $val, $left, $right) = @_;
    my $self = { val => $val // 0, left => $left // undef, right => $right // undef };
    bless $self, $class;
    return $self;
}

sub maxPathSum {
    my $root = shift;
    # Write your solution here
    
}`,

            r: `TreeNode <- setRefClass("TreeNode",
    fields = list(val = "numeric", left = "ANY", right = "ANY"),
    methods = list(
        initialize = function(val = 0, left = NULL, right = NULL) {
            .self$val <- val
            .self$left <- left
            .self$right <- right
        }
    )
)

maxPathSum <- function(root) {
    # Write your solution here
    
}`
        },
        expectedOutput: {
            javascript: "6\n42",
            python: "6\n42",
            java: "6\n42"
        },
    },

    "longest-valid-parentheses": {
        id: "longest-valid-parentheses",
        title: "Longest Valid Parentheses",
        difficulty: "Hard",
        category: "String • Dynamic Programming • Stack",
        description: {
            text: "Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.",
            notes: [
                "A valid parentheses substring means every opening parenthesis has a matching closing parenthesis.",
                "Use a stack or dynamic programming to solve.",
                "The string length can be up to 3 * 10⁴."
            ],
        },
        examples: [
            {
                input: "s = '(()'",
                output: "2",
                explanation: "The longest valid parentheses substring is '()'.",
            },
            {
                input: "s = ')()())'",
                output: "4",
                explanation: "The longest valid parentheses substring is '()()'.",
            },
            {
                input: "s = ''",
                output: "0",
            },
        ],
        constraints: [
            "0 ≤ s.length ≤ 3 * 10⁴",
            "s[i] is '(' or ')'",
        ],
        starterCode: {
            javascript: `function longestValidParentheses(s) {
    // Write your solution here
    
}

// Test cases
console.log(longestValidParentheses('(()')); // Expected: 2
console.log(longestValidParentheses(')()())')); // Expected: 4
console.log(longestValidParentheses('')); // Expected: 0`,

            typescript: `function longestValidParentheses(s: string): number {
    // Write your solution here
    
}

console.log(longestValidParentheses('(()'));
console.log(longestValidParentheses(')()())'));
console.log(longestValidParentheses(''));`,

            python: `def longestValidParentheses(s):
    # Write your solution here
    pass

print(longestValidParentheses('(()'))  # Expected: 2
print(longestValidParentheses(')()())'))  # Expected: 4
print(longestValidParentheses(''))  # Expected: 0`,

            java: `import java.util.*;

class Solution {
    public static int longestValidParentheses(String s) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(longestValidParentheses("(()")); // Expected: 2
        System.out.println(longestValidParentheses(")()())")); // Expected: 4
        System.out.println(longestValidParentheses("")); // Expected: 0
    }
}`,

            cpp: `#include <iostream>
#include <string>
#include <stack>
#include <algorithm>
using namespace std;

int longestValidParentheses(string s) {
    // Write your solution here
    
}

int main() {
    cout << longestValidParentheses("(()") << endl; // Expected: 2
    cout << longestValidParentheses(")()())") << endl; // Expected: 4
    cout << longestValidParentheses("") << endl; // Expected: 0
    return 0;
}`,

            c: `#include <stdio.h>
#include <string.h>

int longestValidParentheses(char* s) {
    // Write your solution here
    
}

int main() {
    printf("%d\\n", longestValidParentheses("(()")); // Expected: 2
    printf("%d\\n", longestValidParentheses(")()())")); // Expected: 4
    printf("%d\\n", longestValidParentheses("")); // Expected: 0
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int LongestValidParentheses(string s) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(LongestValidParentheses("(()")); // Expected: 2
        Console.WriteLine(LongestValidParentheses(")()())")); // Expected: 4
        Console.WriteLine(LongestValidParentheses("")); // Expected: 0
    }
}`,

            go: `package main

import "fmt"

func longestValidParentheses(s string) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(longestValidParentheses("(()")) // Expected: 2
    fmt.Println(longestValidParentheses(")()())")) // Expected: 4
    fmt.Println(longestValidParentheses("")) // Expected: 0
}`,

            rust: `fn longest_valid_parentheses(s: String) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", longest_valid_parentheses("(()".to_string())); // Expected: 2
    println!("{}", longest_valid_parentheses(")()())".to_string())); // Expected: 4
    println!("{}", longest_valid_parentheses("".to_string())); // Expected: 0
}`,

            ruby: `def longest_valid_parentheses(s)
    # Write your solution here
    
end

puts longest_valid_parentheses('(()') # Expected: 2
puts longest_valid_parentheses(')()())') # Expected: 4
puts longest_valid_parentheses('') # Expected: 0`,

            php: `<?php
function longestValidParentheses($s) {
    # Write your solution here
    
}

echo longestValidParentheses('(()') . "\\n";
echo longestValidParentheses(')()())') . "\\n";
echo longestValidParentheses('') . "\\n";
?>`,

            swift: `func longestValidParentheses(_ s: String) -> Int {
    // Write your solution here
    
}

print(longestValidParentheses("(()")) // Expected: 2
print(longestValidParentheses(")()())")) // Expected: 4
print(longestValidParentheses("")) // Expected: 0`,

            kotlin: `fun longestValidParentheses(s: String): Int {
    // Write your solution here
    
}

fun main() {
    println(longestValidParentheses("(()")) // Expected: 2
    println(longestValidParentheses(")()())")) // Expected: 4
    println(longestValidParentheses("")) // Expected: 0
}`,

            scala: `object Solution {
    def longestValidParentheses(s: String): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(longestValidParentheses("(()")) // Expected: 2
        println(longestValidParentheses(")()())")) // Expected: 4
        println(longestValidParentheses("")) // Expected: 0
    }
}`,

            perl: `sub longestValidParentheses {
    my $s = shift;
    # Write your solution here
    
}

print longestValidParentheses('(()') . "\\n";
print longestValidParentheses(')()())') . "\\n";
print longestValidParentheses('') . "\\n";`,

            r: `longestValidParentheses <- function(s) {
    # Write your solution here
    
}

print(longestValidParentheses('(()'))
print(longestValidParentheses(')()())'))
print(longestValidParentheses(''))`
        },
        expectedOutput: {
            javascript: "2\n4\n0",
            python: "2\n4\n0",
            java: "2\n4\n0"
        },
    },

    "max-points-on-a-line": {
        id: "max-points-on-a-line",
        title: "Max Points on a Line",
        difficulty: "Hard",
        category: "Array • Hash Table • Math • Geometry",
        description: {
            text: "Given an array of points where points[i] = [x, y] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.",
            notes: [
                "Use a hash map to store slopes between points.",
                "Handle vertical lines (infinite slope) as a special case.",
                "Use reduced fractions as keys to avoid floating point precision issues."
            ],
        },
        examples: [
            {
                input: "points = [[1,1],[2,2],[3,3]]",
                output: "3",
            },
            {
                input: "points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]",
                output: "4",
            },
        ],
        constraints: [
            "1 ≤ points.length ≤ 300",
            "points[i].length == 2",
            "-10⁴ ≤ x, y ≤ 10⁴",
            "All points are unique",
        ],
        starterCode: {
            javascript: `function maxPoints(points) {
    // Write your solution here
    
}

// Test cases
console.log(maxPoints([[1,1],[2,2],[3,3]])); // Expected: 3
console.log(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])); // Expected: 4`,

            typescript: `function maxPoints(points: number[][]): number {
    // Write your solution here
    
}

console.log(maxPoints([[1,1],[2,2],[3,3]]));
console.log(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]));`,

            python: `def maxPoints(points):
    # Write your solution here
    pass

print(maxPoints([[1,1],[2,2],[3,3]]))  # Expected: 3
print(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]))  # Expected: 4`,

            java: `import java.util.*;

class Solution {
    public static int maxPoints(int[][] points) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxPoints(new int[][]{{1,1},{2,2},{3,3}})); // Expected: 3
        System.out.println(maxPoints(new int[][]{{1,1},{3,2},{5,3},{4,1},{2,3},{1,4}})); // Expected: 4
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

int maxPoints(vector<vector<int>>& points) {
    // Write your solution here
    
}

int main() {
    vector<vector<int>> points1 = {{1,1},{2,2},{3,3}};
    cout << maxPoints(points1) << endl; // Expected: 3
    
    vector<vector<int>> points2 = {{1,1},{3,2},{5,3},{4,1},{2,3},{1,4}};
    cout << maxPoints(points2) << endl; // Expected: 4
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int maxPoints(int** points, int pointsSize, int* pointsColSize) {
    // Write your solution here
    
}

int main() {
    // For C, manual implementation required
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int MaxPoints(int[][] points) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(MaxPoints(new int[][] { new int[] {1,1}, new int[] {2,2}, new int[] {3,3} }));
        Console.WriteLine(MaxPoints(new int[][] { new int[] {1,1}, new int[] {3,2}, new int[] {5,3}, new int[] {4,1}, new int[] {2,3}, new int[] {1,4} }));
    }
}`,

            go: `package main

import "fmt"

func maxPoints(points [][]int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(maxPoints([][]int{{1,1},{2,2},{3,3}}))
    fmt.Println(maxPoints([][]int{{1,1},{3,2},{5,3},{4,1},{2,3},{1,4}}))
}`,

            rust: `use std::collections::HashMap;

fn max_points(points: Vec<Vec<i32>>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", max_points(vec![vec![1,1], vec![2,2], vec![3,3]]));
    println!("{}", max_points(vec![vec![1,1], vec![3,2], vec![5,3], vec![4,1], vec![2,3], vec![1,4]]));
}`,

            ruby: `def max_points(points)
    # Write your solution here
    
end

puts max_points([[1,1],[2,2],[3,3]])
puts max_points([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])`,

            php: `<?php
function maxPoints($points) {
    # Write your solution here
    
}

echo maxPoints([[1,1],[2,2],[3,3]]) . "\\n";
echo maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]) . "\\n";
?>`,

            swift: `func maxPoints(_ points: [[Int]]) -> Int {
    // Write your solution here
    
}

print(maxPoints([[1,1],[2,2],[3,3]]))
print(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]))`,

            kotlin: `fun maxPoints(points: Array<IntArray>): Int {
    // Write your solution here
    
}

fun main() {
    println(maxPoints(arrayOf(intArrayOf(1,1), intArrayOf(2,2), intArrayOf(3,3))))
    println(maxPoints(arrayOf(intArrayOf(1,1), intArrayOf(3,2), intArrayOf(5,3), intArrayOf(4,1), intArrayOf(2,3), intArrayOf(1,4))))
}`,

            scala: `object Solution {
    def maxPoints(points: Array[Array[Int]]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(maxPoints(Array(Array(1,1), Array(2,2), Array(3,3))))
        println(maxPoints(Array(Array(1,1), Array(3,2), Array(5,3), Array(4,1), Array(2,3), Array(1,4))))
    }
}`,

            perl: `sub maxPoints {
    my $points = shift;
    # Write your solution here
    
}

print maxPoints([[1,1],[2,2],[3,3]]) . "\\n";
print maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]) . "\\n";`,

            r: `maxPoints <- function(points) {
    # Write your solution here
    
}

print(maxPoints(list(c(1,1), c(2,2), c(3,3))))
print(maxPoints(list(c(1,1), c(3,2), c(5,3), c(4,1), c(2,3), c(1,4))))`
        },
        expectedOutput: {
            javascript: "3\n4",
            python: "3\n4",
            java: "3\n4"
        },
    },

    "word-break-ii": {
        id: "word-break-ii",
        title: "Word Break II",
        difficulty: "Hard",
        category: "String • Dynamic Programming • Backtracking • Trie",
        description: {
            text: "Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.",
            notes: [
                "The same word in the dictionary may be reused multiple times.",
                "You may assume the dictionary does not contain duplicate words.",
                "Use backtracking with memoization to avoid TLE."
            ],
        },
        examples: [
            {
                input: "s = 'catsanddog', wordDict = ['cat','cats','and','sand','dog']",
                output: "['cats and dog','cat sand dog']",
            },
            {
                input: "s = 'pineapplepenapple', wordDict = ['apple','pen','applepen','pine','pineapple']",
                output: "['pine apple pen apple','pineapple pen apple','pine applepen apple']",
            },
            {
                input: "s = 'catsandog', wordDict = ['cats','dog','sand','and','cat']",
                output: "[]",
            },
        ],
        constraints: [
            "1 ≤ s.length ≤ 20",
            "1 ≤ wordDict.length ≤ 1000",
            "1 ≤ wordDict[i].length ≤ 20",
            "s and wordDict[i] consist of only lowercase English letters",
            "All strings in wordDict are unique",
        ],
        starterCode: {
            javascript: `function wordBreak(s, wordDict) {
    // Write your solution here
    
}

// Test cases
console.log(wordBreak('catsanddog', ['cat','cats','and','sand','dog']));
console.log(wordBreak('pineapplepenapple', ['apple','pen','applepen','pine','pineapple']));
console.log(wordBreak('catsandog', ['cats','dog','sand','and','cat']));`,

            typescript: `function wordBreak(s: string, wordDict: string[]): string[] {
    // Write your solution here
    
}

console.log(wordBreak('catsanddog', ['cat','cats','and','sand','dog']));
console.log(wordBreak('pineapplepenapple', ['apple','pen','applepen','pine','pineapple']));
console.log(wordBreak('catsandog', ['cats','dog','sand','and','cat']));`,

            python: `def wordBreak(s, wordDict):
    # Write your solution here
    pass

print(wordBreak('catsanddog', ['cat','cats','and','sand','dog']))
print(wordBreak('pineapplepenapple', ['apple','pen','applepen','pine','pineapple']))
print(wordBreak('catsandog', ['cats','dog','sand','and','cat']))`,

            java: `import java.util.*;

class Solution {
    public static List<String> wordBreak(String s, List<String> wordDict) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(wordBreak("catsanddog", Arrays.asList("cat","cats","and","sand","dog")));
        System.out.println(wordBreak("pineapplepenapple", Arrays.asList("apple","pen","applepen","pine","pineapple")));
        System.out.println(wordBreak("catsandog", Arrays.asList("cats","dog","sand","and","cat")));
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_set>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<string> wordBreak(string s, vector<string>& wordDict) {
        // Write your solution here
        
    }
};

int main() {
    Solution sol;
    vector<string> dict1 = {"cat","cats","and","sand","dog"};
    vector<string> result1 = sol.wordBreak("catsanddog", dict1);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << result1[i];
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char** wordBreak(char* s, char** wordDict, int wordDictSize, int* returnSize) {
    // Write your solution here
    
}

int main() {
    char* dict1[] = {"cat","cats","and","sand","dog"};
    int returnSize;
    char** result = wordBreak("catsanddog", dict1, 5, &returnSize);
    printf("[");
    for (int i = 0; i < returnSize; i++) {
        printf("%s", result[i]);
        if (i < returnSize - 1) printf(",");
    }
    printf("]\\n");
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<string> WordBreak(string s, IList<string> wordDict) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(string.Join(",", WordBreak("catsanddog", new List<string> {"cat","cats","and","sand","dog"})));
    }
}`,

            go: `package main

import "fmt"

func wordBreak(s string, wordDict []string) []string {
    // Write your solution here
    
}

func main() {
    fmt.Println(wordBreak("catsanddog", []string{"cat","cats","and","sand","dog"}))
}`,

            rust: `use std::collections::HashSet;

fn word_break(s: String, word_dict: Vec<String>) -> Vec<String> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", word_break("catsanddog".to_string(), vec!["cat".to_string(), "cats".to_string(), "and".to_string(), "sand".to_string(), "dog".to_string()]));
}`,

            ruby: `def word_break(s, word_dict)
    # Write your solution here
    
end

puts word_break('catsanddog', ['cat','cats','and','sand','dog']).inspect`,

            php: `<?php
function wordBreak($s, $wordDict) {
    // Write your solution here
    
}

print_r(wordBreak('catsanddog', ['cat','cats','and','sand','dog']));
?>`,

            swift: `func wordBreak(_ s: String, _ wordDict: [String]) -> [String] {
    // Write your solution here
    
}

print(wordBreak("catsanddog", ["cat","cats","and","sand","dog"]))`,

            kotlin: `fun wordBreak(s: String, wordDict: List<String>): List<String> {
    // Write your solution here
    
}

fun main() {
    println(wordBreak("catsanddog", listOf("cat","cats","and","sand","dog")))
}`,

            scala: `object Solution {
    def wordBreak(s: String, wordDict: List[String]): List[String] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(wordBreak("catsanddog", List("cat","cats","and","sand","dog")))
    }
}`,

            perl: `sub wordBreak {
    my ($s, $wordDict) = @_;
    # Write your solution here
    
}

print "[" . join(",", @{wordBreak('catsanddog', ['cat','cats','and','sand','dog'])}) . "]\\n";`,

            r: `wordBreak <- function(s, wordDict) {
    # Write your solution here
    
}

print(wordBreak('catsanddog', c('cat','cats','and','sand','dog')))`
        },
        expectedOutput: {
            javascript: "['cats and dog','cat sand dog']\n['pine apple pen apple','pineapple pen apple','pine applepen apple']\n[]",
            python: "['cats and dog','cat sand dog']\n['pine apple pen apple','pineapple pen apple','pine applepen apple']\n[]",
            java: "[cats and dog, cat sand dog]\n[pine apple pen apple, pineapple pen apple, pine applepen apple]\n[]"
        },
    },

    "regular-expression-matching": {
        id: "regular-expression-matching",
        title: "Regular Expression Matching",
        difficulty: "Hard",
        category: "String • Dynamic Programming • Recursion",
        description: {
            text: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where: '.' matches any single character, '*' matches zero or more of the preceding element. The matching should cover the entire input string (not partial).",
            notes: [
                "The pattern may contain only lowercase letters, '.', and '*'.",
                "'*' will always match zero or more of the preceding element.",
                "Use dynamic programming or recursion with memoization."
            ],
        },
        examples: [
            {
                input: "s = 'aa', p = 'a'",
                output: "false",
                explanation: "'a' does not match the entire string 'aa'.",
            },
            {
                input: "s = 'aa', p = 'a*'",
                output: "true",
                explanation: "'*' matches zero or more of the preceding element 'a'. Therefore, 'a*' matches 'aa'.",
            },
            {
                input: "s = 'ab', p = '.*'",
                output: "true",
                explanation: "'.*' matches any sequence (zero or more) of any characters.",
            },
        ],
        constraints: [
            "1 ≤ s.length ≤ 20",
            "1 ≤ p.length ≤ 20",
            "s contains only lowercase English letters",
            "p contains only lowercase English letters, '.', and '*'",
            "It is guaranteed that '*' appears only after a valid character",
        ],
        starterCode: {
            javascript: `function isMatch(s, p) {
    // Write your solution here
    
}

// Test cases
console.log(isMatch('aa', 'a')); // Expected: false
console.log(isMatch('aa', 'a*')); // Expected: true
console.log(isMatch('ab', '.*')); // Expected: true
console.log(isMatch('mississippi', 'mis*is*ip*.')); // Expected: true`,

            typescript: `function isMatch(s: string, p: string): boolean {
    // Write your solution here
    
}

console.log(isMatch('aa', 'a'));
console.log(isMatch('aa', 'a*'));
console.log(isMatch('ab', '.*'));`,

            python: `def isMatch(s, p):
    # Write your solution here
    pass

print(isMatch('aa', 'a'))  # Expected: False
print(isMatch('aa', 'a*'))  # Expected: True
print(isMatch('ab', '.*'))  # Expected: True`,

            java: `class Solution {
    public static boolean isMatch(String s, String p) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isMatch("aa", "a")); // Expected: false
        System.out.println(isMatch("aa", "a*")); // Expected: true
        System.out.println(isMatch("ab", ".*")); // Expected: true
    }
}`,

            cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    bool isMatch(string s, string p) {
        // Write your solution here
        
    }
};

int main() {
    Solution sol;
    cout << boolalpha;
    cout << sol.isMatch("aa", "a") << endl; // Expected: false
    cout << sol.isMatch("aa", "a*") << endl; // Expected: true
    cout << sol.isMatch("ab", ".*") << endl; // Expected: true
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isMatch(char* s, char* p) {
    // Write your solution here
    
}

int main() {
    printf("%d\\n", isMatch("aa", "a")); // Expected: 0 (false)
    printf("%d\\n", isMatch("aa", "a*")); // Expected: 1 (true)
    printf("%d\\n", isMatch("ab", ".*")); // Expected: 1 (true)
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static bool IsMatch(string s, string p) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(IsMatch("aa", "a")); // Expected: False
        Console.WriteLine(IsMatch("aa", "a*")); // Expected: True
        Console.WriteLine(IsMatch("ab", ".*")); // Expected: True
    }
}`,

            go: `package main

import "fmt"

func isMatch(s string, p string) bool {
    // Write your solution here
    
}

func main() {
    fmt.Println(isMatch("aa", "a")) // Expected: false
    fmt.Println(isMatch("aa", "a*")) // Expected: true
    fmt.Println(isMatch("ab", ".*")) // Expected: true
}`,

            rust: `fn is_match(s: String, p: String) -> bool {
    // Write your solution here
    
}

fn main() {
    println!("{}", is_match("aa".to_string(), "a".to_string()));
    println!("{}", is_match("aa".to_string(), "a*".to_string()));
    println!("{}", is_match("ab".to_string(), ".*".to_string()));
}`,

            ruby: `def is_match(s, p)
    # Write your solution here
    
end

puts is_match('aa', 'a') # Expected: false
puts is_match('aa', 'a*') # Expected: true
puts is_match('ab', '.*') # Expected: true`,

            php: `<?php
function isMatch($s, $p) {
    # Write your solution here
    
}

echo var_export(isMatch('aa', 'a'), true) . "\\n";
echo var_export(isMatch('aa', 'a*'), true) . "\\n";
echo var_export(isMatch('ab', '.*'), true) . "\\n";
?>`,

            swift: `func isMatch(_ s: String, _ p: String) -> Bool {
    // Write your solution here
    
}

print(isMatch("aa", "a"))
print(isMatch("aa", "a*"))
print(isMatch("ab", ".*"))`,

            kotlin: `fun isMatch(s: String, p: String): Boolean {
    // Write your solution here
    
}

fun main() {
    println(isMatch("aa", "a")) // Expected: false
    println(isMatch("aa", "a*")) // Expected: true
    println(isMatch("ab", ".*")) // Expected: true
}`,

            scala: `object Solution {
    def isMatch(s: String, p: String): Boolean = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(isMatch("aa", "a")) // Expected: false
        println(isMatch("aa", "a*")) // Expected: true
        println(isMatch("ab", ".*")) // Expected: true
    }
}`,

            perl: `sub isMatch {
    my ($s, $p) = @_;
    # Write your solution here
    
}

print isMatch('aa', 'a') ? "true\\n" : "false\\n";
print isMatch('aa', 'a*') ? "true\\n" : "false\\n";
print isMatch('ab', '.*') ? "true\\n" : "false\\n";`,

            r: `isMatch <- function(s, p) {
    # Write your solution here
    
}

print(isMatch('aa', 'a'))
print(isMatch('aa', 'a*'))
print(isMatch('ab', '.*'))`
        },
        expectedOutput: {
            javascript: "false\ntrue\ntrue",
            python: "False\nTrue\nTrue",
            java: "false\ntrue\ntrue"
        },
    },

    "wildcard-matching": {
        id: "wildcard-matching",
        title: "Wildcard Matching",
        difficulty: "Hard",
        category: "String • Dynamic Programming • Greedy",
        description: {
            text: "Given an input string s and a pattern p, implement wildcard pattern matching with support for '?' and '*' where: '?' matches any single character, '*' matches any sequence of characters (including empty sequence). The matching should cover the entire input string (not partial).",
            notes: [
                "The pattern may contain only lowercase letters, '?', and '*'.",
                "Use dynamic programming or greedy two-pointer approach.",
                "The greedy approach is more efficient in practice."
            ],
        },
        examples: [
            {
                input: "s = 'aa', p = 'a'",
                output: "false",
                explanation: "'a' does not match the entire string 'aa'.",
            },
            {
                input: "s = 'aa', p = '*'",
                output: "true",
                explanation: "'*' matches any sequence.",
            },
            {
                input: "s = 'cb', p = '?a'",
                output: "false",
                explanation: "'?' matches 'c', but the next character in pattern is 'a', but string has 'b'.",
            },
        ],
        constraints: [
            "0 ≤ s.length, p.length ≤ 2000",
            "s contains only lowercase English letters",
            "p contains only lowercase English letters, '?', or '*'",
        ],
        starterCode: {
            javascript: `function isMatch(s, p) {
    // Write your solution here
    
}

// Test cases
console.log(isMatch('aa', 'a')); // Expected: false
console.log(isMatch('aa', '*')); // Expected: true
console.log(isMatch('cb', '?a')); // Expected: false
console.log(isMatch('adceb', '*a*b')); // Expected: true
console.log(isMatch('acdcb', 'a*c?b')); // Expected: false`,

            typescript: `function isMatch(s: string, p: string): boolean {
    // Write your solution here
    
}

console.log(isMatch('aa', 'a'));
console.log(isMatch('aa', '*'));
console.log(isMatch('cb', '?a'));`,

            python: `def isMatch(s, p):
    # Write your solution here
    pass

print(isMatch('aa', 'a'))  # Expected: False
print(isMatch('aa', '*'))  # Expected: True
print(isMatch('cb', '?a'))  # Expected: False`,

            java: `class Solution {
    public static boolean isMatch(String s, String p) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isMatch("aa", "a")); // Expected: false
        System.out.println(isMatch("aa", "*")); // Expected: true
        System.out.println(isMatch("cb", "?a")); // Expected: false
    }
}`,

            cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    bool isMatch(string s, string p) {
        // Write your solution here
        
    }
};

int main() {
    Solution sol;
    cout << boolalpha;
    cout << sol.isMatch("aa", "a") << endl; // Expected: false
    cout << sol.isMatch("aa", "*") << endl; // Expected: true
    cout << sol.isMatch("cb", "?a") << endl; // Expected: false
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isMatch(char* s, char* p) {
    // Write your solution here
    
}

int main() {
    printf("%d\\n", isMatch("aa", "a")); // Expected: 0 (false)
    printf("%d\\n", isMatch("aa", "*")); // Expected: 1 (true)
    printf("%d\\n", isMatch("cb", "?a")); // Expected: 0 (false)
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static bool IsMatch(string s, string p) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(IsMatch("aa", "a")); // Expected: False
        Console.WriteLine(IsMatch("aa", "*")); // Expected: True
        Console.WriteLine(IsMatch("cb", "?a")); // Expected: False
    }
}`,

            go: `package main

import "fmt"

func isMatch(s string, p string) bool {
    // Write your solution here
    
}

func main() {
    fmt.Println(isMatch("aa", "a")) // Expected: false
    fmt.Println(isMatch("aa", "*")) // Expected: true
    fmt.Println(isMatch("cb", "?a")) // Expected: false
}`,

            rust: `fn is_match(s: String, p: String) -> bool {
    // Write your solution here
    
}

fn main() {
    println!("{}", is_match("aa".to_string(), "a".to_string()));
    println!("{}", is_match("aa".to_string(), "*".to_string()));
    println!("{}", is_match("cb".to_string(), "?a".to_string()));
}`,

            ruby: `def is_match(s, p)
    # Write your solution here
    
end

puts is_match('aa', 'a') # Expected: false
puts is_match('aa', '*') # Expected: true
puts is_match('cb', '?a') # Expected: false`,

            php: `<?php
function isMatch($s, $p) {
    # Write your solution here
    
}

echo var_export(isMatch('aa', 'a'), true) . "\\n";
echo var_export(isMatch('aa', '*'), true) . "\\n";
echo var_export(isMatch('cb', '?a'), true) . "\\n";
?>`,

            swift: `func isMatch(_ s: String, _ p: String) -> Bool {
    // Write your solution here
    
}

print(isMatch("aa", "a"))
print(isMatch("aa", "*"))
print(isMatch("cb", "?a"))`,

            kotlin: `fun isMatch(s: String, p: String): Boolean {
    // Write your solution here
    
}

fun main() {
    println(isMatch("aa", "a")) // Expected: false
    println(isMatch("aa", "*")) // Expected: true
    println(isMatch("cb", "?a")) // Expected: false
}`,

            scala: `object Solution {
    def isMatch(s: String, p: String): Boolean = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(isMatch("aa", "a")) // Expected: false
        println(isMatch("aa", "*")) // Expected: true
        println(isMatch("cb", "?a")) // Expected: false
    }
}`,

            perl: `sub isMatch {
    my ($s, $p) = @_;
    # Write your solution here
    
}

print isMatch('aa', 'a') ? "true\\n" : "false\\n";
print isMatch('aa', '*') ? "true\\n" : "false\\n";
print isMatch('cb', '?a') ? "true\\n" : "false\\n";`,

            r: `isMatch <- function(s, p) {
    # Write your solution here
    
}

print(isMatch('aa', 'a'))
print(isMatch('aa', '*'))
print(isMatch('cb', '?a'))`
        },
        expectedOutput: {
            javascript: "false\ntrue\nfalse",
            python: "False\nTrue\nFalse",
            java: "false\ntrue\nfalse"
        },
    },

    "longest-consecutive-sequence": {
        id: "longest-consecutive-sequence",
        title: "Longest Consecutive Sequence",
        difficulty: "Hard",
        category: "Array • Hash Table • Union Find",
        description: {
            text: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.",
            notes: [
                "A consecutive sequence means numbers that follow each other (e.g., 1,2,3,4).",
                "Use a hash set for O(1) lookups.",
                "Only start counting when you find the beginning of a sequence."
            ],
        },
        examples: [
            {
                input: "nums = [100,4,200,1,3,2]",
                output: "4",
                explanation: "The longest consecutive sequence is [1,2,3,4].",
            },
            {
                input: "nums = [0,3,7,2,5,8,4,6,0,1]",
                output: "9",
                explanation: "The longest consecutive sequence is [0,1,2,3,4,5,6,7,8].",
            },
        ],
        constraints: [
            "0 ≤ nums.length ≤ 10⁵",
            "-10⁹ ≤ nums[i] ≤ 10⁹",
        ],
        starterCode: {
            javascript: `function longestConsecutive(nums) {
    // Write your solution here
    
}

// Test cases
console.log(longestConsecutive([100,4,200,1,3,2])); // Expected: 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // Expected: 9
console.log(longestConsecutive([])); // Expected: 0`,

            typescript: `function longestConsecutive(nums: number[]): number {
    // Write your solution here
    
}

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
console.log(longestConsecutive([]));`,

            python: `def longestConsecutive(nums):
    # Write your solution here
    pass

print(longestConsecutive([100,4,200,1,3,2]))  # Expected: 4
print(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))  # Expected: 9
print(longestConsecutive([]))  # Expected: 0`,

            java: `import java.util.*;

class Solution {
    public static int longestConsecutive(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(longestConsecutive(new int[]{100,4,200,1,3,2})); // Expected: 4
        System.out.println(longestConsecutive(new int[]{0,3,7,2,5,8,4,6,0,1})); // Expected: 9
        System.out.println(longestConsecutive(new int[]{})); // Expected: 0
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        // Write your solution here
        
    }
};

int main() {
    Solution sol;
    vector<int> nums1 = {100,4,200,1,3,2};
    cout << sol.longestConsecutive(nums1) << endl; // Expected: 4
    
    vector<int> nums2 = {0,3,7,2,5,8,4,6,0,1};
    cout << sol.longestConsecutive(nums2) << endl; // Expected: 9
    
    vector<int> nums3 = {};
    cout << sol.longestConsecutive(nums3) << endl; // Expected: 0
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int longestConsecutive(int* nums, int numsSize) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {100,4,200,1,3,2};
    printf("%d\\n", longestConsecutive(nums1, 6)); // Expected: 4
    
    int nums2[] = {0,3,7,2,5,8,4,6,0,1};
    printf("%d\\n", longestConsecutive(nums2, 10)); // Expected: 9
    
    int nums3[] = {};
    printf("%d\\n", longestConsecutive(nums3, 0)); // Expected: 0
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int LongestConsecutive(int[] nums) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(LongestConsecutive(new int[] {100,4,200,1,3,2})); // Expected: 4
        Console.WriteLine(LongestConsecutive(new int[] {0,3,7,2,5,8,4,6,0,1})); // Expected: 9
        Console.WriteLine(LongestConsecutive(new int[] {})); // Expected: 0
    }
}`,

            go: `package main

import "fmt"

func longestConsecutive(nums []int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(longestConsecutive([]int{100,4,200,1,3,2})) // Expected: 4
    fmt.Println(longestConsecutive([]int{0,3,7,2,5,8,4,6,0,1})) // Expected: 9
    fmt.Println(longestConsecutive([]int{})) // Expected: 0
}`,

            rust: `use std::collections::HashSet;

fn longest_consecutive(nums: Vec<i32>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", longest_consecutive(vec![100,4,200,1,3,2])); // Expected: 4
    println!("{}", longest_consecutive(vec![0,3,7,2,5,8,4,6,0,1])); // Expected: 9
    println!("{}", longest_consecutive(vec![])); // Expected: 0
}`,

            ruby: `def longest_consecutive(nums)
    # Write your solution here
    
end

puts longest_consecutive([100,4,200,1,3,2]) # Expected: 4
puts longest_consecutive([0,3,7,2,5,8,4,6,0,1]) # Expected: 9
puts longest_consecutive([]) # Expected: 0`,

            php: `<?php
function longestConsecutive($nums) {
    # Write your solution here
    
}

echo longestConsecutive([100,4,200,1,3,2]) . "\\n";
echo longestConsecutive([0,3,7,2,5,8,4,6,0,1]) . "\\n";
echo longestConsecutive([]) . "\\n";
?>`,

            swift: `func longestConsecutive(_ nums: [Int]) -> Int {
    // Write your solution here
    
}

print(longestConsecutive([100,4,200,1,3,2]))
print(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
print(longestConsecutive([]))`,

            kotlin: `fun longestConsecutive(nums: IntArray): Int {
    // Write your solution here
    
}

fun main() {
    println(longestConsecutive(intArrayOf(100,4,200,1,3,2))) // Expected: 4
    println(longestConsecutive(intArrayOf(0,3,7,2,5,8,4,6,0,1))) // Expected: 9
    println(longestConsecutive(intArrayOf())) // Expected: 0
}`,

            scala: `object Solution {
    def longestConsecutive(nums: Array[Int]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(longestConsecutive(Array(100,4,200,1,3,2))) // Expected: 4
        println(longestConsecutive(Array(0,3,7,2,5,8,4,6,0,1))) // Expected: 9
        println(longestConsecutive(Array())) // Expected: 0
    }
}`,

            perl: `sub longestConsecutive {
    my $nums = shift;
    # Write your solution here
    
}

print longestConsecutive([100,4,200,1,3,2]) . "\\n";
print longestConsecutive([0,3,7,2,5,8,4,6,0,1]) . "\\n";
print longestConsecutive([]) . "\\n";`,

            r: `longestConsecutive <- function(nums) {
    # Write your solution here
    
}

print(longestConsecutive(c(100,4,200,1,3,2)))
print(longestConsecutive(c(0,3,7,2,5,8,4,6,0,1)))
print(longestConsecutive(c()))`
        },
        expectedOutput: {
            javascript: "4\n9\n0",
            python: "4\n9\n0",
            java: "4\n9\n0"
        },
    },

    "frog-jump": {
        id: "frog-jump",
        title: "Frog Jump",
        difficulty: "Hard",
        category: "Array • Dynamic Programming • Hash Table",
        description: {
            text: "A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not be a stone. The frog can jump onto a stone only if it lands exactly on that stone. The frog can jump with a distance k, and its next jump distance must be either k-1, k, or k+1 units. The frog starts on the first stone (index 0) and can only jump forward. Determine if the frog can cross the river by landing on the last stone.",
            notes: [
                "The frog's first jump must be exactly 1 unit (from stone 0 to stone 1).",
                "If stone 1 doesn't exist, the frog cannot cross.",
                "Use a DP map mapping stone to set of possible jump sizes to reach that stone."
            ],
        },
        examples: [
            {
                input: "stones = [0,1,3,5,6,8,12,17]",
                output: "true",
                explanation: "The frog can jump: 0->1 (1), 1->3 (2), 3->5 (2), 5->6 (1), 6->8 (2), 8->12 (4), 12->17 (5).",
            },
            {
                input: "stones = [0,1,2,3,4,8,9,11]",
                output: "false",
                explanation: "The frog cannot reach the last stone.",
            },
        ],
        constraints: [
            "2 ≤ stones.length ≤ 2000",
            "0 ≤ stones[i] ≤ 2³¹ - 1",
            "stones[0] == 0",
            "stones is strictly increasing",
        ],
        starterCode: {
            javascript: `function canCross(stones) {
    // Write your solution here
    
}

// Test cases
console.log(canCross([0,1,3,5,6,8,12,17])); // Expected: true
console.log(canCross([0,1,2,3,4,8,9,11])); // Expected: false`,

            typescript: `function canCross(stones: number[]): boolean {
    // Write your solution here
    
}

console.log(canCross([0,1,3,5,6,8,12,17]));
console.log(canCross([0,1,2,3,4,8,9,11]));`,

            python: `def canCross(stones):
    # Write your solution here
    pass

print(canCross([0,1,3,5,6,8,12,17]))  # Expected: True
print(canCross([0,1,2,3,4,8,9,11]))  # Expected: False`,

            java: `import java.util.*;

class Solution {
    public static boolean canCross(int[] stones) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(canCross(new int[]{0,1,3,5,6,8,12,17})); // Expected: true
        System.out.println(canCross(new int[]{0,1,2,3,4,8,9,11})); // Expected: false
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;

class Solution {
public:
    bool canCross(vector<int>& stones) {
        // Write your solution here
        
    }
};

int main() {
    Solution sol;
    vector<int> stones1 = {0,1,3,5,6,8,12,17};
    cout << boolalpha;
    cout << sol.canCross(stones1) << endl; // Expected: true
    
    vector<int> stones2 = {0,1,2,3,4,8,9,11};
    cout << sol.canCross(stones2) << endl; // Expected: false
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

bool canCross(int* stones, int stonesSize) {
    // Write your solution here
    
}

int main() {
    int stones1[] = {0,1,3,5,6,8,12,17};
    printf("%d\\n", canCross(stones1, 8)); // Expected: 1 (true)
    
    int stones2[] = {0,1,2,3,4,8,9,11};
    printf("%d\\n", canCross(stones2, 8)); // Expected: 0 (false)
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static bool CanCross(int[] stones) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(CanCross(new int[] {0,1,3,5,6,8,12,17})); // Expected: True
        Console.WriteLine(CanCross(new int[] {0,1,2,3,4,8,9,11})); // Expected: False
    }
}`,

            go: `package main

import "fmt"

func canCross(stones []int) bool {
    // Write your solution here
    
}

func main() {
    fmt.Println(canCross([]int{0,1,3,5,6,8,12,17})) // Expected: true
    fmt.Println(canCross([]int{0,1,2,3,4,8,9,11})) // Expected: false
}`,

            rust: `use std::collections::HashMap;
use std::collections::HashSet;

fn can_cross(stones: Vec<i32>) -> bool {
    // Write your solution here
    
}

fn main() {
    println!("{}", can_cross(vec![0,1,3,5,6,8,12,17])); // Expected: true
    println!("{}", can_cross(vec![0,1,2,3,4,8,9,11])); // Expected: false
}`,

            ruby: `def can_cross(stones)
    # Write your solution here
    
end

puts can_cross([0,1,3,5,6,8,12,17]) # Expected: true
puts can_cross([0,1,2,3,4,8,9,11]) # Expected: false`,

            php: `<?php
function canCross($stones) {
    # Write your solution here
    
}

echo var_export(canCross([0,1,3,5,6,8,12,17]), true) . "\\n";
echo var_export(canCross([0,1,2,3,4,8,9,11]), true) . "\\n";
?>`,

            swift: `func canCross(_ stones: [Int]) -> Bool {
    // Write your solution here
    
}

print(canCross([0,1,3,5,6,8,12,17]))
print(canCross([0,1,2,3,4,8,9,11]))`,

            kotlin: `fun canCross(stones: IntArray): Boolean {
    // Write your solution here
    
}

fun main() {
    println(canCross(intArrayOf(0,1,3,5,6,8,12,17))) // Expected: true
    println(canCross(intArrayOf(0,1,2,3,4,8,9,11))) // Expected: false
}`,

            scala: `object Solution {
    def canCross(stones: Array[Int]): Boolean = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(canCross(Array(0,1,3,5,6,8,12,17))) // Expected: true
        println(canCross(Array(0,1,2,3,4,8,9,11))) // Expected: false
    }
}`,

            perl: `sub canCross {
    my $stones = shift;
    # Write your solution here
    
}

print canCross([0,1,3,5,6,8,12,17]) ? "true\\n" : "false\\n";
print canCross([0,1,2,3,4,8,9,11]) ? "true\\n" : "false\\n";`,

            r: `canCross <- function(stones) {
    # Write your solution here
    
}

print(canCross(c(0,1,3,5,6,8,12,17)))
print(canCross(c(0,1,2,3,4,8,9,11)))`
        },
        expectedOutput: {
            javascript: "true\nfalse",
            python: "True\nFalse",
            java: "true\nfalse"
        },
    },

    "largest-rectangle-in-histogram": {
        id: "largest-rectangle-in-histogram",
        title: "Largest Rectangle in Histogram",
        difficulty: "Hard",
        category: "Array • Stack • Monotonic Stack",
        description: {
            text: "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
            notes: [
                "Each bar has a width of 1 unit.",
                "The rectangle can span across multiple bars.",
                "Use a monotonic stack to find the nearest smaller element on left and right."
            ],
        },
        examples: [
            {
                input: "heights = [2,1,5,6,2,3]",
                output: "10",
                explanation: "The largest rectangle has area 10 (from index 2 to 3 with height 5, or 5+5=10).",
            },
            {
                input: "heights = [2,4]",
                output: "4",
            },
        ],
        constraints: [
            "1 ≤ heights.length ≤ 10⁵",
            "0 ≤ heights[i] ≤ 10⁴",
        ],
        starterCode: {
            javascript: `function largestRectangleArea(heights) {
    // Write your solution here
    
}

// Test cases
console.log(largestRectangleArea([2,1,5,6,2,3])); // Expected: 10
console.log(largestRectangleArea([2,4])); // Expected: 4
console.log(largestRectangleArea([1])); // Expected: 1`,

            typescript: `function largestRectangleArea(heights: number[]): number {
    // Write your solution here
    
}

console.log(largestRectangleArea([2,1,5,6,2,3]));
console.log(largestRectangleArea([2,4]));
console.log(largestRectangleArea([1]));`,

            python: `def largestRectangleArea(heights):
    # Write your solution here
    pass

print(largestRectangleArea([2,1,5,6,2,3]))  # Expected: 10
print(largestRectangleArea([2,4]))  # Expected: 4
print(largestRectangleArea([1]))  # Expected: 1`,

            java: `import java.util.*;

class Solution {
    public static int largestRectangleArea(int[] heights) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(largestRectangleArea(new int[]{2,1,5,6,2,3})); // Expected: 10
        System.out.println(largestRectangleArea(new int[]{2,4})); // Expected: 4
        System.out.println(largestRectangleArea(new int[]{1})); // Expected: 1
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        // Write your solution here
        
    }
};

int main() {
    Solution sol;
    vector<int> heights1 = {2,1,5,6,2,3};
    cout << sol.largestRectangleArea(heights1) << endl; // Expected: 10
    
    vector<int> heights2 = {2,4};
    cout << sol.largestRectangleArea(heights2) << endl; // Expected: 4
    
    vector<int> heights3 = {1};
    cout << sol.largestRectangleArea(heights3) << endl; // Expected: 1
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int largestRectangleArea(int* heights, int heightsSize) {
    // Write your solution here
    
}

int main() {
    int heights1[] = {2,1,5,6,2,3};
    printf("%d\\n", largestRectangleArea(heights1, 6)); // Expected: 10
    
    int heights2[] = {2,4};
    printf("%d\\n", largestRectangleArea(heights2, 2)); // Expected: 4
    
    int heights3[] = {1};
    printf("%d\\n", largestRectangleArea(heights3, 1)); // Expected: 1
    
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int LargestRectangleArea(int[] heights) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(LargestRectangleArea(new int[] {2,1,5,6,2,3})); // Expected: 10
        Console.WriteLine(LargestRectangleArea(new int[] {2,4})); // Expected: 4
        Console.WriteLine(LargestRectangleArea(new int[] {1})); // Expected: 1
    }
}`,

            go: `package main

import "fmt"

func largestRectangleArea(heights []int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(largestRectangleArea([]int{2,1,5,6,2,3})) // Expected: 10
    fmt.Println(largestRectangleArea([]int{2,4})) // Expected: 4
    fmt.Println(largestRectangleArea([]int{1})) // Expected: 1
}`,

            rust: `fn largest_rectangle_area(heights: Vec<i32>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", largest_rectangle_area(vec![2,1,5,6,2,3])); // Expected: 10
    println!("{}", largest_rectangle_area(vec![2,4])); // Expected: 4
    println!("{}", largest_rectangle_area(vec![1])); // Expected: 1
}`,

            ruby: `def largest_rectangle_area(heights)
    # Write your solution here
    
end

puts largest_rectangle_area([2,1,5,6,2,3]) # Expected: 10
puts largest_rectangle_area([2,4]) # Expected: 4
puts largest_rectangle_area([1]) # Expected: 1`,

            php: `<?php
function largestRectangleArea($heights) {
    # Write your solution here
    
}

echo largestRectangleArea([2,1,5,6,2,3]) . "\\n";
echo largestRectangleArea([2,4]) . "\\n";
echo largestRectangleArea([1]) . "\\n";
?>`,

            swift: `func largestRectangleArea(_ heights: [Int]) -> Int {
    // Write your solution here
    
}

print(largestRectangleArea([2,1,5,6,2,3]))
print(largestRectangleArea([2,4]))
print(largestRectangleArea([1]))`,

            kotlin: `fun largestRectangleArea(heights: IntArray): Int {
    // Write your solution here
    
}

fun main() {
    println(largestRectangleArea(intArrayOf(2,1,5,6,2,3))) // Expected: 10
    println(largestRectangleArea(intArrayOf(2,4))) // Expected: 4
    println(largestRectangleArea(intArrayOf(1))) // Expected: 1
}`,

            scala: `object Solution {
    def largestRectangleArea(heights: Array[Int]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(largestRectangleArea(Array(2,1,5,6,2,3))) // Expected: 10
        println(largestRectangleArea(Array(2,4))) // Expected: 4
        println(largestRectangleArea(Array(1))) // Expected: 1
    }
}`,

            perl: `sub largestRectangleArea {
    my $heights = shift;
    # Write your solution here
    
}

print largestRectangleArea([2,1,5,6,2,3]) . "\\n";
print largestRectangleArea([2,4]) . "\\n";
print largestRectangleArea([1]) . "\\n";`,

            r: `largestRectangleArea <- function(heights) {
    # Write your solution here
    
}

print(largestRectangleArea(c(2,1,5,6,2,3)))
print(largestRectangleArea(c(2,4)))
print(largestRectangleArea(c(1)))`
        },
        expectedOutput: {
            javascript: "10\n4\n1",
            python: "10\n4\n1",
            java: "10\n4\n1"
        },
    },

    "maximal-rectangle": {
        id: "maximal-rectangle",
        title: "Maximal Rectangle",
        difficulty: "Hard",
        category: "Array • Dynamic Programming • Stack • Matrix",
        description: {
            text: "Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.",
            notes: [
                "The rectangle must contain only 1's.",
                "Use the 'largest rectangle in histogram' solution for each row.",
                "Build a histogram from the current row upwards."
            ],
        },
        examples: [
            {
                input: "matrix = [['1','0','1','0','0'],['1','0','1','1','1'],['1','1','1','1','1'],['1','0','0','1','0']]",
                output: "6",
                explanation: "The largest rectangle has area 6 (rows 2-3, cols 2-3).",
            },
            {
                input: "matrix = [['0']]",
                output: "0",
            },
            {
                input: "matrix = [['1']]",
                output: "1",
            },
        ],
        constraints: [
            "rows == matrix.length",
            "cols == matrix[i].length",
            "1 ≤ rows, cols ≤ 200",
            "matrix[i][j] is '0' or '1'",
        ],
        starterCode: {
            javascript: `function maximalRectangle(matrix) {
    // Write your solution here
    
}

// Test cases
let matrix1 = [
    ['1','0','1','0','0'],
    ['1','0','1','1','1'],
    ['1','1','1','1','1'],
    ['1','0','0','1','0']
];
console.log(maximalRectangle(matrix1)); // Expected: 6

console.log(maximalRectangle([['0']])); // Expected: 0
console.log(maximalRectangle([['1']])); // Expected: 1`,

            typescript: `function maximalRectangle(matrix: string[][]): number {
    // Write your solution here
    
}

let matrix1 = [
    ['1','0','1','0','0'],
    ['1','0','1','1','1'],
    ['1','1','1','1','1'],
    ['1','0','0','1','0']
];
console.log(maximalRectangle(matrix1));
console.log(maximalRectangle([['0']]));
console.log(maximalRectangle([['1']]));`,

            python: `def maximalRectangle(matrix):
    # Write your solution here
    pass

matrix1 = [
    ['1','0','1','0','0'],
    ['1','0','1','1','1'],
    ['1','1','1','1','1'],
    ['1','0','0','1','0']
]
print(maximalRectangle(matrix1))  # Expected: 6
print(maximalRectangle([['0']]))  # Expected: 0
print(maximalRectangle([['1']]))  # Expected: 1`,

            java: `import java.util.*;

class Solution {
    public static int maximalRectangle(char[][] matrix) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        char[][] matrix1 = {
            {'1','0','1','0','0'},
            {'1','0','1','1','1'},
            {'1','1','1','1','1'},
            {'1','0','0','1','0'}
        };
        System.out.println(maximalRectangle(matrix1)); // Expected: 6
        
        System.out.println(maximalRectangle(new char[][]{{'0'}})); // Expected: 0
        System.out.println(maximalRectangle(new char[][]{{'1'}})); // Expected: 1
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    int maximalRectangle(vector<vector<char>>& matrix) {
        // Write your solution here
        
    }
};

int main() {
    Solution sol;
    vector<vector<char>> matrix1 = {
        {'1','0','1','0','0'},
        {'1','0','1','1','1'},
        {'1','1','1','1','1'},
        {'1','0','0','1','0'}
    };
    cout << sol.maximalRectangle(matrix1) << endl; // Expected: 6
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int maximalRectangle(char** matrix, int matrixSize, int* matrixColSize) {
    // Write your solution here
    
}

int main() {
    // For C, manual implementation required
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int MaximalRectangle(char[][] matrix) {
        // Write your solution here
        
    }
    
    static void Main() {
        char[][] matrix1 = new char[][] {
            new char[] {'1','0','1','0','0'},
            new char[] {'1','0','1','1','1'},
            new char[] {'1','1','1','1','1'},
            new char[] {'1','0','0','1','0'}
        };
        Console.WriteLine(MaximalRectangle(matrix1)); // Expected: 6
    }
}`,

            go: `package main

import "fmt"

func maximalRectangle(matrix [][]byte) int {
    // Write your solution here
    
}

func main() {
    matrix1 := [][]byte{
        {'1','0','1','0','0'},
        {'1','0','1','1','1'},
        {'1','1','1','1','1'},
        {'1','0','0','1','0'},
    }
    fmt.Println(maximalRectangle(matrix1)) // Expected: 6
}`,

            rust: `fn maximal_rectangle(matrix: Vec<Vec<char>>) -> i32 {
    // Write your solution here
    
}

fn main() {
    let matrix1 = vec![
        vec!['1','0','1','0','0'],
        vec!['1','0','1','1','1'],
        vec!['1','1','1','1','1'],
        vec!['1','0','0','1','0'],
    ];
    println!("{}", maximal_rectangle(matrix1)); // Expected: 6
}`,

            ruby: `def maximal_rectangle(matrix)
    # Write your solution here
    
end

matrix1 = [
    ['1','0','1','0','0'],
    ['1','0','1','1','1'],
    ['1','1','1','1','1'],
    ['1','0','0','1','0']
]
puts maximal_rectangle(matrix1) # Expected: 6`,

            php: `<?php
function maximalRectangle($matrix) {
    # Write your solution here
    
}

$matrix1 = [
    ['1','0','1','0','0'],
    ['1','0','1','1','1'],
    ['1','1','1','1','1'],
    ['1','0','0','1','0']
];
echo maximalRectangle($matrix1) . "\\n";
?>`,

            swift: `func maximalRectangle(_ matrix: [[Character]]) -> Int {
    // Write your solution here
    
}

let matrix1: [[Character]] = [
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
]
print(maximalRectangle(matrix1)) // Expected: 6`,

            kotlin: `fun maximalRectangle(matrix: Array<CharArray>): Int {
    // Write your solution here
    
}

fun main() {
    val matrix1 = arrayOf(
        charArrayOf('1','0','1','0','0'),
        charArrayOf('1','0','1','1','1'),
        charArrayOf('1','1','1','1','1'),
        charArrayOf('1','0','0','1','0')
    )
    println(maximalRectangle(matrix1)) // Expected: 6
}`,

            scala: `object Solution {
    def maximalRectangle(matrix: Array[Array[Char]]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        val matrix1 = Array(
            Array('1','0','1','0','0'),
            Array('1','0','1','1','1'),
            Array('1','1','1','1','1'),
            Array('1','0','0','1','0')
        )
        println(maximalRectangle(matrix1)) // Expected: 6
    }
}`,

            perl: `sub maximalRectangle {
    my $matrix = shift;
    # Write your solution here
    
}

my $matrix1 = [
    ['1','0','1','0','0'],
    ['1','0','1','1','1'],
    ['1','1','1','1','1'],
    ['1','0','0','1','0']
];
print maximalRectangle($matrix1) . "\\n";`,

            r: `maximalRectangle <- function(matrix) {
    # Write your solution here
    
}

matrix1 <- list(
    c('1','0','1','0','0'),
    c('1','0','1','1','1'),
    c('1','1','1','1','1'),
    c('1','0','0','1','0')
)
print(maximalRectangle(matrix1))`
        },
        expectedOutput: {
            javascript: "6\n0\n1",
            python: "6\n0\n1",
            java: "6\n0\n1"
        },
    },

    "burst-balloons": {
        id: "burst-balloons",
        title: "Burst Balloons",
        difficulty: "Hard",
        category: "Array • Dynamic Programming • Divide and Conquer",
        description: {
            text: "You are given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons. If you burst the ith balloon, you will get nums[i-1] * nums[i] * nums[i+1] coins. If i-1 or i+1 goes out of bounds, treat it as if there is a balloon with a 1 painted on it. Return the maximum coins you can collect by bursting the balloons wisely.",
            notes: [
                "Use dynamic programming with divide and conquer approach.",
                "Consider that bursting a balloon connects its neighbors.",
                "Add 1 at both ends of the array to handle boundaries."
            ],
        },
        examples: [
            {
                input: "nums = [3,1,5,8]",
                output: "167",
                explanation: "Burst order: 1 (3*1*5=15), 5 (3*5*8=120), 3 (1*3*8=24), 8 (1*8*1=8). Total: 15+120+24+8=167.",
            },
            {
                input: "nums = [1,5]",
                output: "10",
            },
        ],
        constraints: [
            "n == nums.length",
            "1 ≤ n ≤ 300",
            "0 ≤ nums[i] ≤ 100",
        ],
        starterCode: {
            javascript: `function maxCoins(nums) {
    // Write your solution here
    
}

// Test cases
console.log(maxCoins([3,1,5,8])); // Expected: 167
console.log(maxCoins([1,5])); // Expected: 10
console.log(maxCoins([1])); // Expected: 1`,

            typescript: `function maxCoins(nums: number[]): number {
    // Write your solution here
    
}

console.log(maxCoins([3,1,5,8]));
console.log(maxCoins([1,5]));
console.log(maxCoins([1]));`,

            python: `def maxCoins(nums):
    # Write your solution here
    pass

print(maxCoins([3,1,5,8]))  # Expected: 167
print(maxCoins([1,5]))  # Expected: 10
print(maxCoins([1]))  # Expected: 1`,

            java: `class Solution {
    public static int maxCoins(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxCoins(new int[]{3,1,5,8})); // Expected: 167
        System.out.println(maxCoins(new int[]{1,5})); // Expected: 10
        System.out.println(maxCoins(new int[]{1})); // Expected: 1
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxCoins(vector<int>& nums) {
        // Write your solution here
        
    }
};

int main() {
    Solution sol;
    vector<int> nums1 = {3,1,5,8};
    cout << sol.maxCoins(nums1) << endl; // Expected: 167
    
    vector<int> nums2 = {1,5};
    cout << sol.maxCoins(nums2) << endl; // Expected: 10
    
    vector<int> nums3 = {1};
    cout << sol.maxCoins(nums3) << endl; // Expected: 1
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int maxCoins(int* nums, int numsSize) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {3,1,5,8};
    printf("%d\\n", maxCoins(nums1, 4)); // Expected: 167
    
    int nums2[] = {1,5};
    printf("%d\\n", maxCoins(nums2, 2)); // Expected: 10
    
    int nums3[] = {1};
    printf("%d\\n", maxCoins(nums3, 1)); // Expected: 1
    
    return 0;
}`,

            csharp: `using System;

class Solution {
    public static int MaxCoins(int[] nums) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(MaxCoins(new int[] {3,1,5,8})); // Expected: 167
        Console.WriteLine(MaxCoins(new int[] {1,5})); // Expected: 10
        Console.WriteLine(MaxCoins(new int[] {1})); // Expected: 1
    }
}`,

            go: `package main

import "fmt"

func maxCoins(nums []int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(maxCoins([]int{3,1,5,8})) // Expected: 167
    fmt.Println(maxCoins([]int{1,5})) // Expected: 10
    fmt.Println(maxCoins([]int{1})) // Expected: 1
}`,

            rust: `fn max_coins(nums: Vec<i32>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", max_coins(vec![3,1,5,8])); // Expected: 167
    println!("{}", max_coins(vec![1,5])); // Expected: 10
    println!("{}", max_coins(vec![1])); // Expected: 1
}`,

            ruby: `def max_coins(nums)
    # Write your solution here
    
end

puts max_coins([3,1,5,8]) # Expected: 167
puts max_coins([1,5]) # Expected: 10
puts max_coins([1]) # Expected: 1`,

            php: `<?php
function maxCoins($nums) {
    # Write your solution here
    
}

echo maxCoins([3,1,5,8]) . "\\n";
echo maxCoins([1,5]) . "\\n";
echo maxCoins([1]) . "\\n";
?>`,

            swift: `func maxCoins(_ nums: [Int]) -> Int {
    // Write your solution here
    
}

print(maxCoins([3,1,5,8]))
print(maxCoins([1,5]))
print(maxCoins([1]))`,

            kotlin: `fun maxCoins(nums: IntArray): Int {
    // Write your solution here
    
}

fun main() {
    println(maxCoins(intArrayOf(3,1,5,8))) // Expected: 167
    println(maxCoins(intArrayOf(1,5))) // Expected: 10
    println(maxCoins(intArrayOf(1))) // Expected: 1
}`,

            scala: `object Solution {
    def maxCoins(nums: Array[Int]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(maxCoins(Array(3,1,5,8))) // Expected: 167
        println(maxCoins(Array(1,5))) // Expected: 10
        println(maxCoins(Array(1))) // Expected: 1
    }
}`,

            perl: `sub maxCoins {
    my $nums = shift;
    # Write your solution here
    
}

print maxCoins([3,1,5,8]) . "\\n";
print maxCoins([1,5]) . "\\n";
print maxCoins([1]) . "\\n";`,

            r: `maxCoins <- function(nums) {
    # Write your solution here
    
}

print(maxCoins(c(3,1,5,8)))
print(maxCoins(c(1,5)))
print(maxCoins(c(1)))`
        },
        expectedOutput: {
            javascript: "167\n10\n1",
            python: "167\n10\n1",
            java: "167\n10\n1"
        },
    },

    "sliding-window-maximum": {
        id: "sliding-window-maximum",
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        category: "Array • Sliding Window • Deque • Heap",
        description: {
            text: "You are given an array of integers nums, there is a sliding window of size k which moves from the very left to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.",
            notes: [
                "Use a monotonic deque to maintain indices of elements in decreasing order.",
                "The front of the deque always contains the maximum element for the current window.",
                "The time complexity should be O(n)."
            ],
        },
        examples: [
            {
                input: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
                output: "[3,3,5,5,6,7]",
                explanation: "Window positions: [1 3 -1] -> 3, [3 -1 -3] -> 3, [-1 -3 5] -> 5, [-3 5 3] -> 5, [5 3 6] -> 6, [3 6 7] -> 7",
            },
            {
                input: "nums = [1], k = 1",
                output: "[1]",
            },
        ],
        constraints: [
            "1 ≤ nums.length ≤ 10⁵",
            "-10⁴ ≤ nums[i] ≤ 10⁴",
            "1 ≤ k ≤ nums.length",
        ],
        starterCode: {
            javascript: `function maxSlidingWindow(nums, k) {
    // Write your solution here
    
}

// Test cases
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // Expected: [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); // Expected: [1]
console.log(maxSlidingWindow([1,-1], 1)); // Expected: [1,-1]`,

            typescript: `function maxSlidingWindow(nums: number[], k: number): number[] {
    // Write your solution here
    
}

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
console.log(maxSlidingWindow([1], 1));
console.log(maxSlidingWindow([1,-1], 1));`,

            python: `def maxSlidingWindow(nums, k):
    # Write your solution here
    pass

print(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))  # Expected: [3,3,5,5,6,7]
print(maxSlidingWindow([1], 1))  # Expected: [1]
print(maxSlidingWindow([1,-1], 1))  # Expected: [1,-1]`,

            java: `import java.util.*;

class Solution {
    public static int[] maxSlidingWindow(int[] nums, int k) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(maxSlidingWindow(new int[]{1,3,-1,-3,5,3,6,7}, 3))); // Expected: [3,3,5,5,6,7]
        System.out.println(Arrays.toString(maxSlidingWindow(new int[]{1}, 1))); // Expected: [1]
        System.out.println(Arrays.toString(maxSlidingWindow(new int[]{1,-1}, 1))); // Expected: [1,-1]
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <deque>
using namespace std;

class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        // Write your solution here
        
    }
};

int main() {
    Solution sol;
    vector<int> nums1 = {1,3,-1,-3,5,3,6,7};
    vector<int> result1 = sol.maxSlidingWindow(nums1, 3);
    cout << "[";
    for (size_t i = 0; i < result1.size(); i++) {
        cout << result1[i];
        if (i < result1.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int* maxSlidingWindow(int* nums, int numsSize, int k, int* returnSize) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {1,3,-1,-3,5,3,6,7};
    int returnSize;
    int* result = maxSlidingWindow(nums1, 8, 3, &returnSize);
    printf("[");
    for (int i = 0; i < returnSize; i++) {
        printf("%d", result[i]);
        if (i < returnSize - 1) printf(",");
    }
    printf("]\\n");
    free(result);
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int[] MaxSlidingWindow(int[] nums, int k) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine($"[{string.Join(",", MaxSlidingWindow(new int[] {1,3,-1,-3,5,3,6,7}, 3))}]");
        Console.WriteLine($"[{string.Join(",", MaxSlidingWindow(new int[] {1}, 1))}]");
    }
}`,

            go: `package main

import "fmt"

func maxSlidingWindow(nums []int, k int) []int {
    // Write your solution here
    
}

func main() {
    fmt.Println(maxSlidingWindow([]int{1,3,-1,-3,5,3,6,7}, 3))
    fmt.Println(maxSlidingWindow([]int{1}, 1))
}`,

            rust: `use std::collections::VecDeque;

fn max_sliding_window(nums: Vec<i32>, k: i32) -> Vec<i32> {
    // Write your solution here
    
}

fn main() {
    println!("{:?}", max_sliding_window(vec![1,3,-1,-3,5,3,6,7], 3));
    println!("{:?}", max_sliding_window(vec![1], 1));
}`,

            ruby: `def max_sliding_window(nums, k)
    # Write your solution here
    
end

puts max_sliding_window([1,3,-1,-3,5,3,6,7], 3).inspect
puts max_sliding_window([1], 1).inspect`,

            php: `<?php
function maxSlidingWindow($nums, $k) {
    # Write your solution here
    
}

print_r(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
print_r(maxSlidingWindow([1], 1));
?>`,

            swift: `func maxSlidingWindow(_ nums: [Int], _ k: Int) -> [Int] {
    // Write your solution here
    
}

print(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))
print(maxSlidingWindow([1], 1))`,

            kotlin: `fun maxSlidingWindow(nums: IntArray, k: Int): IntArray {
    // Write your solution here
    
}

fun main() {
    println(maxSlidingWindow(intArrayOf(1,3,-1,-3,5,3,6,7), 3).joinToString())
    println(maxSlidingWindow(intArrayOf(1), 1).joinToString())
}`,

            scala: `object Solution {
    def maxSlidingWindow(nums: Array[Int], k: Int): Array[Int] = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(maxSlidingWindow(Array(1,3,-1,-3,5,3,6,7), 3).mkString(","))
        println(maxSlidingWindow(Array(1), 1).mkString(","))
    }
}`,

            perl: `sub maxSlidingWindow {
    my ($nums, $k) = @_;
    # Write your solution here
    
}

print "[" . join(",", @{maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)}) . "]\\n";
print "[" . join(",", @{maxSlidingWindow([1], 1)}) . "]\\n";`,

            r: `maxSlidingWindow <- function(nums, k) {
    # Write your solution here
    
}

print(maxSlidingWindow(c(1,3,-1,-3,5,3,6,7), 3))
print(maxSlidingWindow(c(1), 1))`
        },
        expectedOutput: {
            javascript: "[3,3,5,5,6,7]\n[1]\n[1,-1]",
            python: "[3,3,5,5,6,7]\n[1]\n[1,-1]",
            java: "[3,3,5,5,6,7]\n[1]\n[1,-1]"
        },
    },

    "shortest-path-visiting-all-nodes": {
        id: "shortest-path-visiting-all-nodes",
        title: "Shortest Path Visiting All Nodes",
        difficulty: "Hard",
        category: "Graph • BFS • Bit Manipulation • Dynamic Programming",
        description: {
            text: "You have an undirected, connected graph of n nodes labeled from 0 to n-1. You are given an array graph where graph[i] is a list of all the nodes connected to node i by an edge. Return the length of the shortest path that visits every node. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.",
            notes: [
                "This is the Traveling Salesman Problem (TSP) variant for unweighted graphs.",
                "Use BFS with state (current node, visited mask) to find the shortest path.",
                "The visited mask is a bitmask representing which nodes have been visited."
            ],
        },
        examples: [
            {
                input: "graph = [[1,2,3],[0],[0],[0]]",
                output: "4",
                explanation: "One possible path: 0 -> 1 -> 0 -> 2 -> 0 -> 3 (length 5) is not optimal. Better: 1 -> 0 -> 2 -> 0 -> 3 (length 4).",
            },
            {
                input: "graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]",
                output: "4",
                explanation: "One optimal path: 0 -> 1 -> 2 -> 3 -> 4 (length 4).",
            },
        ],
        constraints: [
            "n == graph.length",
            "1 ≤ n ≤ 12",
            "0 ≤ graph[i].length < n",
            "The graph is connected",
        ],
        starterCode: {
            javascript: `function shortestPathLength(graph) {
    // Write your solution here
    
}

// Test cases
console.log(shortestPathLength([[1,2,3],[0],[0],[0]])); // Expected: 4
console.log(shortestPathLength([[1],[0,2,4],[1,3,4],[2],[1,2]])); // Expected: 4
console.log(shortestPathLength([[1,2,3,4,5,6,7,8,9],[0],[0],[0],[0],[0],[0],[0],[0],[0]])); // Expected: 9`,

            typescript: `function shortestPathLength(graph: number[][]): number {
    // Write your solution here
    
}

console.log(shortestPathLength([[1,2,3],[0],[0],[0]]));
console.log(shortestPathLength([[1],[0,2,4],[1,3,4],[2],[1,2]]));`,

            python: `def shortestPathLength(graph):
    # Write your solution here
    pass

print(shortestPathLength([[1,2,3],[0],[0],[0]]))  # Expected: 4
print(shortestPathLength([[1],[0,2,4],[1,3,4],[2],[1,2]]))  # Expected: 4`,

            java: `import java.util.*;

class Solution {
    public static int shortestPathLength(int[][] graph) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(shortestPathLength(new int[][]{{1,2,3},{0},{0},{0}})); // Expected: 4
        System.out.println(shortestPathLength(new int[][]{{1},{0,2,4},{1,3,4},{2},{1,2}})); // Expected: 4
    }
}`,

            cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <tuple>
using namespace std;

class Solution {
public:
    int shortestPathLength(vector<vector<int>>& graph) {
        // Write your solution here
        
    }
};

int main() {
    Solution sol;
    vector<vector<int>> graph1 = {{1,2,3},{0},{0},{0}};
    cout << sol.shortestPathLength(graph1) << endl; // Expected: 4
    
    vector<vector<int>> graph2 = {{1},{0,2,4},{1,3,4},{2},{1,2}};
    cout << sol.shortestPathLength(graph2) << endl; // Expected: 4
    
    return 0;
}`,

            c: `#include <stdio.h>
#include <stdlib.h>

int shortestPathLength(int** graph, int graphSize, int* graphColSize) {
    // Write your solution here
    
}

int main() {
    // For C, manual graph construction required
    return 0;
}`,

            csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int ShortestPathLength(int[][] graph) {
        // Write your solution here
        
    }
    
    static void Main() {
        Console.WriteLine(ShortestPathLength(new int[][] { new int[] {1,2,3}, new int[] {0}, new int[] {0}, new int[] {0} })); // Expected: 4
    }
}`,

            go: `package main

import "fmt"

func shortestPathLength(graph [][]int) int {
    // Write your solution here
    
}

func main() {
    fmt.Println(shortestPathLength([][]int{{1,2,3},{0},{0},{0}})) // Expected: 4
}`,

            rust: `use std::collections::VecDeque;

fn shortest_path_length(graph: Vec<Vec<i32>>) -> i32 {
    // Write your solution here
    
}

fn main() {
    println!("{}", shortest_path_length(vec![vec![1,2,3], vec![0], vec![0], vec![0]]));
}`,

            ruby: `def shortest_path_length(graph)
    # Write your solution here
    
end

puts shortest_path_length([[1,2,3],[0],[0],[0]]) # Expected: 4`,

            php: `<?php
function shortestPathLength($graph) {
    # Write your solution here
    
}

echo shortestPathLength([[1,2,3],[0],[0],[0]]) . "\\n";
?>`,

            swift: `func shortestPathLength(_ graph: [[Int]]) -> Int {
    // Write your solution here
    
}

print(shortestPathLength([[1,2,3],[0],[0],[0]]))`,

            kotlin: `fun shortestPathLength(graph: Array<IntArray>): Int {
    // Write your solution here
    
}

fun main() {
    println(shortestPathLength(arrayOf(intArrayOf(1,2,3), intArrayOf(0), intArrayOf(0), intArrayOf(0)))) // Expected: 4
}`,

            scala: `object Solution {
    def shortestPathLength(graph: Array[Array[Int]]): Int = {
        // Write your solution here
        
    }
    
    def main(args: Array[String]): Unit = {
        println(shortestPathLength(Array(Array(1,2,3), Array(0), Array(0), Array(0)))) // Expected: 4
    }
}`,

            perl: `sub shortestPathLength {
    my $graph = shift;
    # Write your solution here
    
}

print shortestPathLength([[1,2,3],[0],[0],[0]]) . "\\n";`,

            r: `shortestPathLength <- function(graph) {
    # Write your solution here
    
}

print(shortestPathLength(list(c(1,2,3), c(0), c(0), c(0))))`
        },
        expectedOutput: {
            javascript: "4\n4",
            python: "4\n4",
            java: "4\n4"
        },
    },
}

export const LANGUAGE_CONFIG = {
    javascript: {
        name: "JavaScript",
        icon: "/javascript.png",
        monacoLang: "javascript",
    },
    typescript: {
        name: "TypeScript",
        icon: "/typescript.png",
        monacoLang: "typescript",
    },
    python: {
        name: "Python",
        icon: "/python.png",
        monacoLang: "python",
    },
    java: {
        name: "Java",
        icon: "/java.png",
        monacoLang: "java",
    },
    cpp: {
        name: "C++",
        icon: "/cpp.png",
        monacoLang: "cpp",
    },
    c: {
        name: "C",
        icon: "/c.png",
        monacoLang: "c",
    },
    csharp: {
        name: "C#",
        icon: "/csharp.png",
        monacoLang: "csharp",
    },
    go: {
        name: "Go",
        icon: "/go.png",
        monacoLang: "go",
    },
    rust: {
        name: "Rust",
        icon: "/rust.png",
        monacoLang: "rust",
    },
    ruby: {
        name: "Ruby",
        icon: "/ruby.png",
        monacoLang: "ruby",
    },
    php: {
        name: "PHP",
        icon: "/php.png",
        monacoLang: "php",
    },
    swift: {
        name: "Swift",
        icon: "/swift.png",
        monacoLang: "swift",
    },
    kotlin: {
        name: "Kotlin",
        icon: "/kotlin.png",
        monacoLang: "kotlin",
    },
    scala: {
        name: "Scala",
        icon: "/scala.png",
        monacoLang: "scala",
    },
    perl: {
        name: "Perl",
        icon: "/perl.png",
        monacoLang: "perl",
    },
    r: {
        name: "R",
        icon: "/r.png",
        monacoLang: "r",
    }
};