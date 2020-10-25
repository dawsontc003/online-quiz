# online-quiz

## Description:

This webpage hosts an online basketball quiz. This quiz has a timer that is inititated by the user. Once the quiz begins the user is presented with multiple choice answers to each question. When the user selects the wrong answer they are advised the selection was incorrect and a penalty of lost time on the timer is executed. The user can then select a different answer to the question. If the time runs out or the user successfully answers all three question, then the user is presented a prompt to enter their initials which will be persisted in local storage along with the users score.

### Challenges:

The chanllenges amoungst this build were setting the iterations through questions while allowing a different response to host the correct answer selection. To solve this each fuction I needed to understand the local versus global browser scope. To ensure each question and answer was specific to it's local code execution. There also was the functionality of setting an interval timer and ensuring the page was responsive based on the timer running out and a user selecting the wrong answer. The timer variable had to be defined and updated with each event that defined interaction with the timer. ALl in all the acceptance criteria as it is defined is satisfied and the project exposed me to a better understanding of scope as it is defined in JS development.

# psuedocode

1. Create basic frame work for UI
   a. Container to house question and multiple choice answers.
2. Link a function to an HTML element to initiate quiz and start timer. - jQuery counter method to keep score - event listener to start clock
3. Display question to user
   a. attach java click listener to individual multiple choice responses
   b. Advise user if answer was right or wrong
   c. If response is incorrect move on to next question and deduct additional time from timer as penalty
   d. If response is correct move on to next question with no time penalty
4. Once all questions are answered end the quiz
   a. user must be able to save initials with their score
   b. If the timer runs to zero then end the quiz also allowing the user to save initials with their score

![Java quiz 1](https://user-images.githubusercontent.com/69283624/97113884-d052a900-16b2-11eb-87bb-ce05aea1bdaa.PNG)

![Java quiz 2](https://user-images.githubusercontent.com/69283624/97113887-d34d9980-16b2-11eb-9429-1a9f3246a4a9.PNG)
