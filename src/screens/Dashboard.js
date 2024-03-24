import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const questionsData = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    correctAnswer: 'Jupiter'
  },
  // Add more questions here...
];

const Dashboard = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(60);
  const [timerAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    let interval;
    if (!showScore) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            handleAnswer('timeout');
            return 60;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [currentQuestionIndex, showScore]);

  const handleAnswer = (selectedAnswer) => {
    clearInterval(timer);

    if (selectedAnswer === 'timeout') {
      // Timeout, move to the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(60);
      return;
    }

    const currentQuestion = questionsData[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
      // Correct answer animation
      Animated.timing(timerAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      // Wrong answer animation
      Animated.timing(timerAnimation, {
        toValue: -1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questionsData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setTimer(60);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setTimer(60);
  };

  return (
    <View style={styles.container}>
      {showScore ? (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Your Score: {score} / {questionsData.length}</Text>
          <TouchableOpacity onPress={resetQuiz} style={styles.button}>
            <Text style={styles.buttonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.questionText}>{questionsData[currentQuestionIndex].question}</Text>
          <View style={styles.timerContainer}>
            <Text style={styles.timerText}>{timer} seconds</Text>
          </View>
          {questionsData[currentQuestionIndex].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleAnswer(option)}
              style={[styles.optionButton, {
                backgroundColor: timerAnimation.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: ['#FF5733', 'lightblue', '#33FF3C']
                })
              }]}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scoreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
  },
  timerContainer: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  timerText: {
    fontSize: 16,
    color: 'red',
  },
  optionButton: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
  },
});

export default Dashboard;
