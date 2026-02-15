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
        },
        expectedOutput: {
        javascript: "[0,1]\n[1,2]\n[0,1]",
        python: "[0, 1]\n[1, 2]\n[0, 1]",
        java: "[0, 1]\n[1, 2]\n[0, 1]",
        },
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
        },
        expectedOutput: {
            javascript: "true\ntrue\nfalse\nfalse\ntrue",
            python: "True\nTrue\nFalse\nFalse\nTrue",
            java: "true\ntrue\nfalse\nfalse\ntrue",
        },
    },

    "merge-two-sorted-lists": {
        id: "merge-two-sorted-lists",
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        category: "Linked List • Recursion",
        description: {
            text: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.",
            notes: [
                "Return the head of the merged linked list.",
                "Both lists are sorted in non-decreasing order."
            ],
        },
        examples: [
            {
                input: "list1 = [1,2,4], list2 = [1,3,4]",
                output: "[1,1,2,3,4,4]",
            },
            {
                input: "list1 = [], list2 = []",
                output: "[]",
            },
            {
                input: "list1 = [], list2 = [0]",
                output: "[0]",
            },
        ],
        constraints: [
            "The number of nodes in both lists is in the range [0, 50]",
            "-100 ≤ Node.val ≤ 100",
            "Both list1 and list2 are sorted in non-decreasing order",
        ],
        starterCode: {
            javascript: `function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function mergeTwoLists(list1, list2) {
    // Write your solution here
    
    }

    // Helper function to create linked list from array
    function createLinkedList(arr) {
        if (arr.length === 0) return null;
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
    let list1 = createLinkedList([1,2,4]);
    let list2 = createLinkedList([1,3,4]);
    console.log(linkedListToArray(mergeTwoLists(list1, list2))); // Expected: [1,1,2,3,4,4]
    
    console.log(linkedListToArray(mergeTwoLists(null, null))); // Expected: []
    
    list2 = createLinkedList([0]);
    console.log(linkedListToArray(mergeTwoLists(null, list2))); // Expected: [0]`,
            python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(list1, list2):
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
list1 = createLinkedList([1,2,4])
list2 = createLinkedList([1,3,4])
print(linkedListToList(mergeTwoLists(list1, list2)))  # Expected: [1,1,2,3,4,4]

print(linkedListToList(mergeTwoLists(None, None)))  # Expected: []

list2 = createLinkedList([0])
print(linkedListToList(mergeTwoLists(None, list2)))  # Expected: [0]`,
            java: `class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public static ListNode mergeTwoLists(ListNode list1, ListNode list2) {
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
    
    // Helper function to convert linked list to array
    public static String linkedListToString(ListNode head) {
        StringBuilder sb = new StringBuilder("[");
        ListNode current = head;
        while (current != null) {
            sb.append(current.val);
            if (current.next != null) sb.append(",");
            current = current.next;
        }
        sb.append("]");
        return sb.toString();
    }
    
    public static void main(String[] args) {
        ListNode list1 = createLinkedList(new int[]{1,2,4});
        ListNode list2 = createLinkedList(new int[]{1,3,4});
        System.out.println(linkedListToString(mergeTwoLists(list1, list2))); // Expected: [1,1,2,3,4,4]
        
        System.out.println(linkedListToString(mergeTwoLists(null, null))); // Expected: []
        
        list2 = createLinkedList(new int[]{0});
        System.out.println(linkedListToString(mergeTwoLists(null, list2))); // Expected: [0]
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,1,2,3,4,4]\n[]\n[0]",
            python: "[1, 1, 2, 3, 4, 4]\n[]\n[0]",
            java: "[1,1,2,3,4,4]\n[]\n[0]",
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
            python: `def lengthOfLongestSubstring(s):
        # Write your solution here
        pass

    # Test cases
    print(lengthOfLongestSubstring('abcabcbb'))  # Expected: 3
    print(lengthOfLongestSubstring('bbbbb'))  # Expected: 1
    print(lengthOfLongestSubstring('pwwkew'))  # Expected: 3`,
            java: `class Solution {
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
            python: `def minWindow(s, t):
        # Write your solution here
        pass

    # Test cases
    print(minWindow('ADOBECODEBANC', 'ABC'))  # Expected: 'BANC'
    print(minWindow('a', 'a'))  # Expected: 'a'
    print(minWindow('a', 'aa'))  # Expected: ''`,
            java: `class Solution {
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
            python: `def isAnagram(s, t):
        # Write your solution here
        pass

    # Test cases
    print(isAnagram('anagram', 'nagaram'))  # Expected: True
    print(isAnagram('rat', 'car'))  # Expected: False`,
            java: `class Solution {
        public static boolean isAnagram(String s, String t) {
            // Write your solution here
            
            return false;
        }
        
        public static void main(String[] args) {
            System.out.println(isAnagram("anagram", "nagaram")); // Expected: true
            System.out.println(isAnagram("rat", "car")); // Expected: false
        }
    }`,
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
            python: `def firstUniqChar(s):
        # Write your solution here
        pass

    # Test cases
    print(firstUniqChar('leetcode'))  # Expected: 0
    print(firstUniqChar('loveleetcode'))  # Expected: 2
    print(firstUniqChar('aabb'))  # Expected: -1`,
            java: `class Solution {
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
                "Clamp the integer to the range [-2³¹, 2³¹-1].",
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
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
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
    
    public static void main(String[] args) {
        TreeNode tree1 = createTree(new Integer[]{3,9,20,null,null,15,7});
        System.out.println(maxDepth(tree1)); // Expected: 3
        
        TreeNode tree2 = createTree(new Integer[]{1,null,2});
        System.out.println(maxDepth(tree2)); // Expected: 2
    }
}`,
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
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
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
            javascript: "[4,7,2,9,6,3,1]\n[2,3,1]\n[]",
            python: "[4, 7, 2, 9, 6, 3, 1]\n[2, 3, 1]\n[]",
            java: "[4, 7, 2, 9, 6, 3, 1]\n[2, 3, 1]\n[]",
        },
    }
};

export const LANGUAGE_CONFIG = {
    javascript: {
        name: "JavaScript",
        icon: "/javascript.png",
        monacoLang: "javascript",
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
};