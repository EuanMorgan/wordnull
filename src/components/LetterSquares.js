import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const numLetters = 5;

export default function LetterSquares({letters = [' ', ' ', ' ', ' ', ' ']}) {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((_, index) => (
        <View style={styles.box}>
          <Text style={styles.text}>{letters[index]}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '5%',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '5%',
    backgroundColor: 'black',
    margin: 5,
  },
});
