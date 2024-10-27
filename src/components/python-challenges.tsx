'use client'

import React, { useState } from 'react'
import { CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface Problem {
  id: number
  title: string
  description: string
  initialCode: string
  testCases: { input: string; expectedOutput: string }[]
}

const problems: Problem[] = [
  {
    id: 1,
    title: "Hello World",
    description: "Write a function that returns 'Hello, World!'",
    initialCode: "def hello_world():\n    # Your code here\n    pass",
    testCases: [{ input: "", expectedOutput: "Hello, World!" }]
  },
  {
    id: 2,
    title: "Sum of Two Numbers",
    description: "Write a function that returns the sum of two numbers",
    initialCode: "def sum_two_numbers(a, b):\n    # Your code here\n    pass",
    testCases: [
      { input: "1, 2", expectedOutput: "3" },
      { input: "5, 7", expectedOutput: "12" }
    ]
  },
  {
    id: 3,
    title: "Reverse a String",
    description: "Write a function that reverses a string",
    initialCode: "def reverse_string(s):\n    # Your code here\n    pass",
    testCases: [
      { input: "'hello'", expectedOutput: "olleh" },
      { input: "'Python'", expectedOutput: "nohtyP" }
    ]
  },
  {
    id: 4,
    title: "Factorial",
    description: "Write a function that calculates the factorial of a number",
    initialCode: "def factorial(n):\n    # Your code here\n    pass",
    testCases: [
      { input: "5", expectedOutput: "120" },
      { input: "0", expectedOutput: "1" }
    ]
  },
  {
    id: 5,
    title: "Find Maximum",
    description: "Write a function that finds the maximum number in a list",
    initialCode: "def find_max(numbers):\n    # Your code here\n    pass",
    testCases: [
      { input: "[1, 3, 2, 5, 4]", expectedOutput: "5" },
      { input: "[-1, -5, -2]", expectedOutput: "-1" }
    ]
  },
  {
    id: 6,
    title: "Count Vowels",
    description: "Write a function that counts the number of vowels in a string",
    initialCode: "def count_vowels(s):\n    # Your code here\n    pass",
    testCases: [
      { input: "'hello'", expectedOutput: "2" },
      { input: "'aeiou'", expectedOutput: "5" }
    ]
  },
  {
    id: 7,
    title: "Is Palindrome",
    description: "Write a function that checks if a string is a palindrome",
    initialCode: "def is_palindrome(s):\n    # Your code here\n    pass",
    testCases: [
      { input: "'racecar'", expectedOutput: "True" },
      { input: "'hello'", expectedOutput: "False" }
    ]
  },
  {
    id: 8,
    title: "FizzBuzz",
    description: "Write a function that returns 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, 'FizzBuzz' for multiples of both, or the number if neither",
    initialCode: "def fizz_buzz(n):\n    # Your code here\n    pass",
    testCases: [
      { input: "3", expectedOutput: "Fizz" },
      { input: "5", expectedOutput: "Buzz" },
      { input: "15", expectedOutput: "FizzBuzz" },
      { input: "7", expectedOutput: "7" }
    ]
  },
  {
    id: 9,
    title: "Fibonacci Sequence",
    description: "Write a function that returns the nth number in the Fibonacci sequence",
    initialCode: "def fibonacci(n):\n    # Your code here\n    pass",
    testCases: [
      { input: "0", expectedOutput: "0" },
      { input: "1", expectedOutput: "1" },
      { input: "6", expectedOutput: "8" }
    ]
  },
  {
    id: 10,
    title: "Anagram Check",
    description: "Write a function that checks if two strings are anagrams",
    initialCode: "def are_anagrams(s1, s2):\n    # Your code here\n    pass",
    testCases: [
      { input: "'listen', 'silent'", expectedOutput: "True" },
      { input: "'hello', 'world'", expectedOutput: "False" }
    ]
  }
]

// Note: In a production environment, you would implement a secure backend service
// to execute Python code and return results. This demo simulates that process.

export default function Component() {
  const [currentProblem, setCurrentProblem] = useState(0)
  const [code, setCode] = useState(problems[0].initialCode)
  const [output, setOutput] = useState('')
  const [solved, setSolved] = useState<boolean[]>(new Array(problems.length).fill(false))

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value)
  }

  const checkSolution = () => {
    // In a real-world scenario, this function would send the code to a backend service
    // that can safely execute Python code and return the results.
    // For this demo, we'll simulate the checking process.
    
    setOutput("Checking solution... (In a real app, we'd securely evaluate the Python code here)")
    
    // Simulate a delay for "checking" the solution
    setTimeout(() => {
      const passed = Math.random() > 0.5 // Randomly determine if the solution passed
      if (passed) {
        setOutput('All test cases passed! Great job!')
        setSolved(prev => {
          const newSolved = [...prev]
          newSolved[currentProblem] = true
          return newSolved
        })
      } else {
        setOutput('Some test cases failed. Keep trying!')
      }
    }, 1500)
  }

  const handleNext = () => {
    if (currentProblem < problems.length - 1) {
      setCurrentProblem(currentProblem + 1)
      setCode(problems[currentProblem + 1].initialCode)
      setOutput('')
    }
  }

  const handlePrevious = () => {
    if (currentProblem > 0) {
      setCurrentProblem(currentProblem - 1)
      setCode(problems[currentProblem - 1].initialCode)
      setOutput('')
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4 rounded-lg shadow-lg bg-gray-900 mt-14">
      <h2 className="text-3xl font-bold text-center mb-8">Python Practice</h2>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {problems.map((problem, index) => (
            <div
              key={problem.id}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                solved[index]
                  ? 'bg-green-500 text-white'
                  : index === currentProblem
                  ? 'bg-orange-500 text-white'
                  : ''
              }`}
            >
              {solved[index] ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                <span>{problem.id}</span>
              )}
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-purple-500 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${((currentProblem + 1) / problems.length) * 100}%` }}
          ></div>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">{problems[currentProblem].title}</h3>
        <p className="text-gray-600 mb-4">{problems[currentProblem].description}</p>
        <Textarea
          value={code}
          onChange={handleCodeChange}
          className="font-mono text-sm h-64 mb-4"
          placeholder="Write your Python code here..."
        />
        <Button onClick={checkSolution} className="mb-4">Check Solution</Button>
        {output && (
          <Alert className={output.includes('Great job!') ? 'bg-green-700' : 'bg-red-400'}>
            <AlertTitle>{output.includes('Great job!') ? 'Success!' : 'Keep Trying!'}</AlertTitle>
            <AlertDescription>{output}</AlertDescription>
          </Alert>
        )}
      </div>
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentProblem === 0}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentProblem === problems.length - 1 || !solved[currentProblem]}
        >
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}