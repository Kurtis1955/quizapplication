quizapp
This Quiz Application evaluates users' understanding of various topics, including HTML, CSS, JavaScript, and Accessibility. It features keyboard navigation for improved accessibility, enabling users to select answers and move through questions using keyboard shortcuts.it contains Multiple-choice quiz covering various topics.

Capabilities
Keyboard navigation includes:
Arrow Down key to scroll through options.
Enter key to confirm the selected answer.
Spacebar key to proceed to the next question.
Visual cues for correct and incorrect responses.
Summary of results displayed at the end of the quiz.
Responsive design featuring styled components.
Light and Dark mode options to enhance user experience.

## Context

The `AppContext` is used to manage global state, such as the quiz data and user selections.

## Usage

1. Open the quiz application in your browser.
2. Choose a quiz subject.
3. Click to select an option.
4. Click the submit answer button to receive feedback on whether your choice is correct or incorrect.
5. Click the next question button to proceed.
6. Finish the quiz to view your results.

# Using the keyboard

1. Open the quiz application in your browser.
2. Choose a quiz subject.
3. Use the Arrow Down key to scroll through the options.
4. Press the Enter key to submit your chosen answer.
5. Use the Spacebar key to advance to the next question.
6. Finish the quiz to view your results.

# structure

quiz-app/
├── public/
│ ├── vite.svg
│ └── ...
├── src/
│ ├── assets/
│ │ ├── images/
│ │ └── fonts/
│ ├── components/
│ │ ├── AppWrapper/
│ │ ├── Button/
│ │ ├── Card/
│ │ ├── Navbar/
│ │ ├── ProgressBar/
│ │ └── Switch/
│ ├── context/
│ │ └── AppContext.tsx
│ ├── pages/
│ │ ├── Home/
│ │ └── Quiz/
│ ├── types/
│ │ └── index.ts
│ ├── App.tsx
│ ├── App.styles.ts
│ ├── quizQuestion.json
│ ├── index.css
│ ├── main.tsx
│ └── ...
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
|
└── README.md
