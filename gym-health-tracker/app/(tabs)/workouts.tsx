import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const workouts = [
  { id: '1', name: 'Push Day (Chest + Triceps)', duration: '45 min' },
  { id: '2', name: 'Pull Day (Back + Biceps)', duration: '50 min' },
  { id: '3', name: 'Leg Day (Quads + Glutes)', duration: '55 min' },
  { id: '4', name: 'Shoulders & Core', duration: '40 min' },
  { id: '5', name: 'HIIT Cardio', duration: '30 min' },
];

export default function WorkoutsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📋 Workout Plans</Text>

      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.duration}>⏱️ {item.duration}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  duration: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
