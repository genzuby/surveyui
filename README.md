# Survey API server

react
redux
node-sass
axios
styled-components
react-device-detect

### Requirements front end:

- An initial screen explaining the survey and prompting the user to start
- A screen for each question
- Three possible types of questions (radio/checkbox/text input)
- A "next" button that takes the user to the next question (or the end of the survey)
- A "previous" button that takes the user to the previous question (or the beginning of the survey).
- Allow the user to press the browser's back button to go back to a previous question. This has the same effect as pressing the "back" button
- Do not pre-check or pre-fill any of the answers, the user should be forced to choose/type the answer
- When the user chooses an option that makes him/her ineligible (i.e. "are you 18 or older?" - "No"), the survey should end, with a message saying the user is ineligible
- When the user has answered all of the questions, the survey should end with a message thanking him/her for participating

### Observations

- Ensure the browser's back/forwards functionality works as expected
- The back button should be disabled or hidden in the initial screen
- The next button should be disabled or hidden in the final screen
- Do not allow the user to answer the next question if he/she has not answered the current one
- When you go back, the answer you chose should be visible
- Make sure to record which answers belong to which survey (using "surveyID", for instance)
- There is no need to be too fancy with the persistance mechanism, simply saving to a file would work for the purposes of this challenge, but you can use whatever you're comfortable with
- Some questions, depending on what is chosen, lead to ending the survey before all the questions are answered
- The `survey.json` file we provided is an example, feel free to come up with your own structure, as long as it meets all the requirements
- If you decide to use linters, make sure the linter is not complaining about errors in your code

## server start

- yarn start

## test

- yarn test

## lint

- yarn lint

## demo

- http://localhost:3000
