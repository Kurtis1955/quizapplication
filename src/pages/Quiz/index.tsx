import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/Appcontext"
import { useLocation } from "react-router-dom"
import {
  CorrectAnswer, ErrorMessage, ErrorWrapper, Image,
  Result, ResultCard,
  StyledNumber, StyledOption, StyledOptionIndex,
  StyledOptions, StyledProgress, StyledQuestion,
  StyledQuiz, StyledQuizContent, TotalQuestion
} from "./Quiz.styles"
import Card from "../../components/Card"
import Button from "../../components/Button"
import { AcWrapper, CssWrapper, HtmlWrapper, JsWrappper, StyledLink, StyledQuizTitle, StyledSubtitle, StyledTitle, WelcomeTitle } from "../Home/Home.styles"
import { ButtonStyle } from "../../components/Button/Button.styles"
import { IconTitleWrapper } from "../../components/Navbar/Navbar.styles"
import IconCorrect from "../../assets/images/icon-correct.svg"
import IconError from "../../assets/images/icon-error.svg"
import ProgressBar from "../../components/ProgressBar"
import { subjectToIcon, QuizTitle, Letters } from "../../lib"


export default function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [optionClicked, setOptionClicked] = useState<number | null>(null)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null)
  const [isSubmitClicked, setIsSubmitClicked] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [isActualAnswer, setIsActualAnswer] = useState("")
  const [keyboardClick, setKeyBoardClick] = useState<boolean | null>(null)
  const { isSelected } = useContext(AppContext)
  // to check if a user clicked the submit without selecting an option
  const [clicked, setClicked] = useState(false)
  const [result, setResult] = useState({
    correct: 0,
    wrong: 0,
  })

  const totalScore = result.correct * 5

  const { quiz } = useContext(AppContext)

  const { pathname } = useLocation()
  const quizSubject = pathname.substring(1).split("/").pop()
  
  const quizQuestions = quiz[QuizTitle[quizSubject as keyof typeof QuizTitle]]

  const questions = quizQuestions.questions

  const actualAnswer = questions[activeQuestion]?.answer 

const overallScore = questions.length * 5

  // handles keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        if (typeof optionClicked !== "number") {
          setOptionClicked(0)
        } else {
          setOptionClicked(prev => {
            if (prev === questions[activeQuestion].options.length - 1) {
              return 0
            } else {
              return prev! + 1
            }
          })
        }
      }

      if (event.key === "Enter") {
        handleKeyBoardOptionClick(questions[activeQuestion].options[optionClicked!], optionClicked!)
      }

      if (event.key === " " && (typeof optionClicked === "number")) {
        handleNext()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [optionClicked, activeQuestion])
  
  // to select an option on click
  const handleOptionClick = (item: string, index: number) => {
    setOptionClicked(index);
    if (item === questions[activeQuestion].answer) {
      setIsCorrectAnswer(prev => prev === true ? prev : true);
    } else {
      setIsCorrectAnswer(prev => prev === false ? prev : false);
    }
  }

  // submits an answer
  const handleSubmit = () => {
    setClicked(true)
    if (typeof optionClicked !== "number") return

    setIsSubmitClicked(true)
    setIsActualAnswer(actualAnswer)
    if(isCorrectAnswer) {
      setResult(prevResult => ({...prevResult, correct: prevResult.correct + 1}))
    } else {
      setResult(prevResult => ({...prevResult, wrong: prevResult.wrong + 1}))
    }
  }

  // select an option with keyboard
  const handleKeyBoardOptionClick = (item: string, index: number) => {
    handleOptionClick(item, index)
    setKeyBoardClick(true)
  }

  useEffect(() => {
    if (keyboardClick) {
      handleSubmit()
    }
    setKeyBoardClick(false)
  }, [keyboardClick])


  // moves to the next question
  const handleNext = () => {
    if (activeQuestion === questions.length - 1) {
      setShowResult(true)
    } else {
      setShowResult(false)
    }
    setActiveQuestion(prevState => prevState + 1)
    setClicked(false)
    setOptionClicked(null)
    setIsCorrectAnswer(null)
    setIsSubmitClicked(false)
    setIsActualAnswer("")
  }

  const iconName = quizQuestions.icon.split("/").pop()
  console.log(quizQuestions.icon)

  console.log(iconName)
  return (
    <>
    {!showResult
    ?(<StyledQuiz>
      <StyledQuizContent>
        <StyledNumber isSelected={isSelected}>
          Question {activeQuestion + 1} of {questions.length}
        </StyledNumber>
        <StyledQuestion isSelected={isSelected}>
          {questions[activeQuestion].question}
        </StyledQuestion>
        <StyledProgress>
          <ProgressBar isSelected={isSelected} progress={activeQuestion} total={questions.length} />
        </StyledProgress>
      </StyledQuizContent>

      <StyledOptions>
        {questions[activeQuestion].options.map((item, index) => (
          <Card
           key={index}
           onClick={() => handleOptionClick(item, index)}
           selected={index === optionClicked}
           isCorrectAnswer={isCorrectAnswer}
           isSubmitClicked={isSubmitClicked}
           tabIndex={0}
           isSelected={isSelected}
           onKeyDown={() => handleKeyBoardOptionClick(item, index)}
          >
            <StyledOptionIndex
              selected={index === optionClicked}
              isCorrectAnswer={isCorrectAnswer}
              isSubmitClicked={isSubmitClicked}
            >
              {Letters[index]}
            </StyledOptionIndex>
            <StyledOption isSelected={isSelected}>
              {item}
            </StyledOption>
            { index === optionClicked && isSubmitClicked && isCorrectAnswer
            ? <Image src={IconCorrect} alt="correct" width={32} height={32} />
            : index === optionClicked && isSubmitClicked
            ? <Image src={IconError} alt="wrong" width={32} height={32} />
            :  item === isActualAnswer
            &&  <Image src={IconCorrect} alt="correct" width={32} height={32} />
            }
          </Card>
        ))}
     {!isSubmitClicked && (typeof optionClicked === "number")
      ? <Button onClick={handleSubmit}>Submit Answer</Button>
      : isSubmitClicked && (typeof optionClicked === "number")
      ? <Button onClick={handleNext}>Next Question</Button>
      : !isSubmitClicked && (typeof optionClicked !== "number")
      ? <Button onClick={handleSubmit}>Submit Answer</Button>
      : isSubmitClicked && (typeof optionClicked !== "number")
      && <Button onClick={handleSubmit}>Submit Answer</Button>
      }
      {clicked && (typeof optionClicked !== "number")
      && (
        <ErrorWrapper>
          <Image src={IconError} alt="wrong" width={32} height={32} />
          <ErrorMessage>Please select an answer</ErrorMessage>
        </ErrorWrapper>
      )}
      </StyledOptions>

    </StyledQuiz>)
    : (<StyledQuiz>
       <StyledTitle>
        <WelcomeTitle isSelected={isSelected}>Quiz Completed</WelcomeTitle>
        <StyledSubtitle isSelected={isSelected}>You scored...</StyledSubtitle>
       </StyledTitle>

      <Result>
       <ResultCard isSelected={isSelected}>
        <IconTitleWrapper>
          {quizSubject === "HTML" && (
            <HtmlWrapper>
              <img
                src={subjectToIcon[quizSubject as keyof typeof subjectToIcon]}
                alt={quizSubject}
                width={25}
                height={25}
              />
            </HtmlWrapper>
          )}
          {quizSubject === "CSS" && (
            <CssWrapper>
              <img
                src={subjectToIcon[quizSubject as keyof typeof subjectToIcon]}
                alt={quizSubject}
                width={25}
                height={25}
              />
            </CssWrapper>
          )}
          {quizSubject === "JavaScript" && (
            <JsWrappper>
              <img
                src={subjectToIcon[quizSubject as keyof typeof subjectToIcon]}
                alt={quizSubject}
                width={25}
                height={25}
              />
            </JsWrappper>
          )}
          {quizSubject === "Accessibility" && (
            <AcWrapper>
              <img
               src={subjectToIcon[quizSubject as keyof typeof subjectToIcon]}
               alt={quizSubject}
               width={25}
               height={25}
              />
            </AcWrapper>
          )}
          <StyledQuizTitle isSelected={isSelected}>{quizQuestions.title}</StyledQuizTitle>
        </IconTitleWrapper>
        <CorrectAnswer isSelected={isSelected}>
          {totalScore}
        </CorrectAnswer>
        <TotalQuestion isSelected={isSelected}>
          out of {overallScore}
        </TotalQuestion>
       </ResultCard>
       <StyledLink to={`/`}>
        <ButtonStyle>
          Play Again
        </ButtonStyle>
       </StyledLink>
      </Result>
      </StyledQuiz>
    )}
    </>
  )
}