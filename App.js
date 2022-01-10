import {StatusBar} from 'expo-status-bar';
import {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from 'react-native';

import LetterSquares from './src/components/LetterSquares';
import {useWords} from './src/hooks/useWords';
import {getAllwords} from './src/util/api';

export default function App() {
  const [words, setWords] = useState();
  const [selectedWord, setSelectedWord] = useState('');
  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);
  const [guesses, setGuesses] = useState(['', '', '', '', '']);

  const load = async () => {
    console.log('fetching words');
    const words = await useWords();
    setWords(words);
    console.log('picking todays word');
    let randomIndex = Math.floor(Math.random() * words.length);
    let randomWord = words[randomIndex];
    console.log('todays random word is ' + randomWord);
    setSelectedWord(randomWord.toUpperCase());
  };

  useEffect(load, []);

  const changeTextHandler = val => {
    console.log(`val is ${val}`);
    let temp = [...guesses];
    temp[currentGuessIndex] = val;
    setGuesses(temp);
  };

  const submitHandler = () => {
    let splitCorrect = selectedWord.split('');
    let guessSplit = guesses[currentGuessIndex].split('');

    guessSplit.forEach((val, index) => {
      if (splitCorrect.includes(val)) {
        if (splitCorrect[index] == val) {
          console.log(val + ' is in correct place');
        } else {
          console.log(val + ' is in word');
        }
      }
    });
  };

  if (!words) {
    return (
      <View style={{}}>
        <Text style={{color: 'black', fontSize: 20}}>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <LetterSquares letters={guesses[0]} />
      <LetterSquares letters={guesses[1]} />
      <LetterSquares letters={guesses[2]} />
      <LetterSquares letters={guesses[3]} />
      <LetterSquares letters={guesses[4]} />
      <Button title='Submit' onPress={submitHandler} />
      <TextInput
        autoFocus
        onChangeText={changeTextHandler}
        value={guesses[currentGuessIndex]}
        maxLength={5}
        autoCapitalize='characters'
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
