import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';

const AddWorkout = () => {
  const [workoutName, setWorkoutName] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');

  const handleSave = () => {
    if (!workoutName || !reps || !sets) {
      Alert.alert('Please fill in all fields');
      return;
    }

    // Save logic (mock)
    Alert.alert('Workout Saved!', `Name: ${workoutName}, Sets: ${sets}, Reps: ${reps}`);

    // Clear fields
    setWorkoutName('');
    setReps('');
    setSets('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Workout</Text>

      <TextInput
        style={styles.input}
        placeholder="Workout Name"
        value={workoutName}
        onChangeText={setWorkoutName}
      />

      <TextInput
        style={styles.input}
        placeholder="Sets"
        value={sets}
        onChangeText={setSets}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Reps"
        value={reps}
        onChangeText={setReps}
        keyboardType="numeric"
      />

      <Pressable style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Workout</Text>
      </Pressable>
    </View>
  );
};

export default AddWorkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
