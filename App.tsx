import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigations/AppNavigator';
import { QuizProvider } from './src/context/QuizContext';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <QuizProvider>
        <AppNavigator />
      </QuizProvider>
    </SafeAreaProvider>
  );
};

export default App;
