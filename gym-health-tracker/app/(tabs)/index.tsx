import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Welcome Back, Anup 👋</Text>
      <Text style={styles.subHeading}>Your Fitness Progress Today</Text>

      {/* 🔥 Quick Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>120</Text>
          <Text style={styles.statLabel}>Calories</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>45 min</Text>
          <Text style={styles.statLabel}>Workout</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Exercises</Text>
        </View>
      </View>

      {/* 🏋️‍♂️ Recent Workouts */}
      <Text style={styles.sectionTitle}>Recent Workouts</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Full Body - 30 min</Text>
        <Text style={styles.cardSubtitle}>5 exercises • 120 kcal</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Leg Day - 45 min</Text>
        <Text style={styles.cardSubtitle}>6 exercises • 180 kcal</Text>
      </View>

      {/* ➕ Add New Workout */}
      <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)/add")}>
        <Ionicons name="add-circle" size={24} color="#fff" />
        <Text style={styles.buttonText}>Add New Workout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  subHeading: {
    fontSize: 16,
    color: "#888",
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  statBox: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    width: "30%",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  statLabel: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  card: {
    backgroundColor: "#e8f5e9",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2e7d32",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#4CAF50",
    marginTop: 4,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#4CAF50",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
    fontWeight: "bold",
  },
});
