import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { QuizContext } from '../context/QuizContext';
import { RootStackParamList } from '../data/types';
import { StackNavigationProp } from '@react-navigation/stack';

type QuizScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Quiz'>;

type Props = {
  navigation: QuizScreenNavigationProp;
};

const QuizScreen: React.FC<Props> = ({ navigation }) => {
  const { questions, currentQuestionIndex, setCurrentQuestionIndex, score, setScore } = useContext(QuizContext);

  if (!questions) return null;

  const question = questions[currentQuestionIndex];

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate('Result', { score });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>
      {question.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionButton}
          onPress={() => handleAnswer(option.isCorrect)}
        >
          <Text style={styles.optionText}>{option.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  question: {
    fontSize: 22,
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#3498db',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  optionText: {
    color: 'white',
    fontSize: 18,
  },
});

export default QuizScreen;
