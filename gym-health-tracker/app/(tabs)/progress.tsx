import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const dummyProgress = [
  { id: '1', date: '12 Aug 2025', workout: 'Push Day', duration: '45 min' },
  { id: '2', date: '13 Aug 2025', workout: 'Pull Day', duration: '50 min' },
  { id: '3', date: '14 Aug 2025', workout: 'Leg Day', duration: '60 min' },
];

export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📈 Workout Progress</Text>
      <FlatList
        data={dummyProgress}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.workout}>{item.workout}</Text>
            <Text style={styles.details}>
              {item.date} • {item.duration}
            </Text>
          </View>
        )}
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
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
  },
  workout: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
});
