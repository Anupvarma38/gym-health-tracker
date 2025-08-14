import { View, Text, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Anup Kumar Varma</Text>
      <Text style={styles.details}>
        🎓 B.Tech CSE | 📍 Bhopal{'\n'}
        💻 Python | ☁️ Cloud Enthusiast | 🏋️‍♂️ Fitness Lover
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    lineHeight: 24,
  },
});
