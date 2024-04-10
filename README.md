# Pomodoro with Hooks

## Problem Statement

Pomodoro is a customizable timer that helps you to concentrate on any task you are working on, such as writing, studying, or coding to boost your productivity. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.​

The Pomodoro technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as Pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student.​

As a Front-end developer, you need to design this Pomodoro app using React. The app should be created in different phases where each phase comprises of certain functionalities.

## User Story

1. As a user, I should be able to start a Pomodoro with a default time of 25 Minutes.​
2. As a user, I should be able to see the Current Time Left in Pomodoro Timer.​
3. As a user, I should be able to stop a running Pomodoro Timer. Stopping the Pomodoro pauses the timer. ​
4. As a user, I should be able to end a running Pomodoro to its early completion.​
5. As a user, I should be navigated to the Short Break after every Successful or Early Pomodoro Interval Completion.​
6. As a user, I should see the message “Time to Work!” while the Pomodoro Interval tab is active.
7. As a user, I should be able to directly navigate to the Short Break Timer.​
8. As a user, I should be able to start a Short Break Timer with a default time of five minutes.​
9. As a user, I should be able to see the Current Time Left in Short Break Timer.​
10. As a user, I should be able to stop a running Short Break Timer. Stopping the Short Break Timer pauses the timer.​
11. As a user, I should be able to end a running Short Break Timer to its early completion.​
12. As a user, I should see the message “Time for Break!” while the Short Break Tab is active.

## Challenges

The solution for Pomodoro exists. However, the developers detected the following challenges in the existing solution:​

Solution was developed using Class Components due to which:​
- Stateful logic was hard to reuse.​
- Class code became complex and hard to understand.​
- The developers found the code confusing due to the need to bind components and event handlers using ‘this’.

## Problem Statement

The developer team has decided to overcome the challenge by designing Function Components with React Hooks.​

Hooks in React help to build reusable stateful logic and effectively manage state alongside the component’s life cycle events.​

## Instructions

1. Download and unzip the boilerplate code.   
2. Run the command `npm install` to install the dependencies.   
3. Open the boilerplate code in VSCode to develop the assignment solution.   
4. The Pomodoro app solution has to be developed in the `App.js` file by creating React function components with React Hooks. 
    
    *Note :: Comments have been provided in the `App.js` file as the guidelines towards developing the solution code.*
5. First, test the solution locally by running the command npm run test.   
6. Refactor the solution to ensure all test cases are passing.   
7. Zip the solution code with the name same as the assignment name.   
8. Upload the zipped solution for submission. "# pomodoro-timer-react" 
