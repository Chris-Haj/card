// screens/PurpleScreen.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function PurpleScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox}>
        <Text style={styles.text}>Purple Container</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 200,
    height: 200,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
