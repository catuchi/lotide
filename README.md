# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @catuchi/lotide`

**Require it:**

`const _ = require('@catuchi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `function1(head)`: returns the head of an array (i.e the first element of an array)
* `function2(middle)`: returns the middle element of an array
* `function3(tail)`: returns the tail of an array (i.e everything but the first value)
* `function3(without)`: 
* `function3(takeUntil)`: this function will keep collecting items from "array" till "callback" returns a truthy value
* `function3(map)`: 
* `function3(letterPositions)`: 
* `function3(findKeyByValue)`: finds key by value
* `function3(findKey)`: finds key
* `function3(eqObjects)`: compares two objects, returns true or false
* `function3(eqArrays)`: compares two arrays, returns true or false
* `function3(countOnly)`: this function will return an object containing counts of everything that the input object listed
* `function3(countLetters)`: receives a string and return a count of each of the letters in a sentence as an object
* `function3(assertObjectsEqual)`: compares two objects
* `function3(assertEqual)`: compares to elements
* `function3(assertArraysEqual)`: compares two arrays
