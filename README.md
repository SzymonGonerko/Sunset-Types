## Navigation

- [Sunset_Types](#Sunset_Types)
- [Technologies](#Technologies)
- [Redux_is_deprecated?_Redux_Toolkit_(RTK)!](#Redux_is_deprecated?_Redux_Toolkit_(RTK)!)
- [Structural_programming:_Method_getSum()_–_main_logic](#Structural_programming:_Method_getSum()_–_main_logic)
- [Secret_Object](#Secret_Object)

# Sunset_Types

https://sunsettypes.netlify.app/

![SunsetTypes]()

The main goal of the Sunset Types project was to create logic for ToDo list and the calculator. User can control the screen with the mouse or with the finger gestures (resize and shift components). The ToDo list tool allows you to enter a task to be performed, mark status and delete it. The calculator tool allows you to perform basic math operations with the ability to display the result in the sky. The user can choose one of two color themes - Dark and Light. The third secret object in the sky has been implemented in Dark  mode. It is a visual diversion for users.

# Technologies

![NPM]()

The project was implemented in the Three.js environment using two ecosystems, React-Three-Drei and React-Three-Fiber. The name of the Sunset Types project connecting to the TypeScript library. The global state of the application is managed by Redux and tools (Redux-toolkit). I used the Styled-Components library.

# Redux_is_deprecated?_Redux_Toolkit_(RTK)!

This year, there were messages suggesting that Redux functionality is deprecated. The official documentation note that the use of createStore from Redux is deprecated and recommends the use of Redux Toolkit (RTK). The argument of this position is that Redux is much more difficult to maintain. The fundamental change is implementing createSlice, and payloadAction as application state management tools.

~~ import { createStore } from „redux” ~~

```
import { configureStore } from "@reduxjs/toolkit";
```

![toolkit]()

# Structural_programming:_Method_getSum()_–_main_logic

The most important method of the calculator is getSum (), which sums up the entire sequence of operations entered by the user. First, all expressions are an array of strings. Then, step by step, array is modified depending on the operator in it, so;

1. Entire expression as an array of strings
2. New array with expressions of multiplication and division, ie "/" and "X"
3. Implementation of the result of multiplication and division to the main array
4. Converting expressions to typeof number
5. Get result using high order function [].reduce()

![structural]()


# Secret_Object

Knowing that the project is strictly technical, I decided to implement a visual object. I used the sketchfab library and Blender. I used fantasy and wondered what might be in distant galaxies. One of the objects that I associate with space and stars was a jellyfish. I created a prototype of the object with an animation and implemented it into the project using the directive:

``
npx gltfjsx Jellyfish.glb
``

![secretobject]()