import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  // Extract parameters passed from HomeScreen
  const { itemName, itemDesc } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{itemName}</Text>
      <Text style={styles.description}>{itemDesc}</Text>

      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 20 },
  button: { backgroundColor: '#007AFF', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 6 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});