import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, color}) => {
  return (
    <TouchableOpacity style={styles.button(color)}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  }),
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  buttonText2: {
    color: 'white',
    fontSize: 20,
  },
});