## FlashType
FlashType is a typing speed test application. It's typically used to practice typing skills by measuring how fast and accurately a user can type a given text. The project usually includes a user interface that displays a passage of text for the user to type, tracks the user’s input in real-time, and calculates metrics such as words per minute (WPM), accuracy, and time taken.

## Demo
check here : https://kharjulsneha.github.io/flashType/

## Things I learn from this project
Components,
Data flow,
JSX,
props,
State,
Hooks,
Life cycle methods,
Conditional rendering,
API calling,
Callback fucntions,
Class based components,
Functional components,
Deploying react app.

## Test algorithm
1. Handle the underflow case - all characters should be shown as not-attempted
2. Handle the overflow case - early exit
3. Handle the backspace case
   - Mark the [index+1] element as notAttempted
     (irrespective of whether the index is less than zero)
   - But, don't forget to check for the overflow here
     (index + 1 -> out of bound, when index === length-1)
4. Update the status in test info
   1. Find out the last character in the inputValue and it's index
   2. Check if the character at same index in testInfo (state) matches
   3. Yes -> Correct
      No  -> Incorrect 
5. Irrespective of the case, characters, words and wpm can be updated

          
         
