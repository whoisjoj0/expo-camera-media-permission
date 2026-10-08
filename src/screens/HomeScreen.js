import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const ITEMS = [
  { id: '1', name: 'React Native Basics', desc: 'Learn views, text, and styling.' },
  { id: '2', name: 'React Navigation', desc: 'Master native screen stacks.' },
];

export default function HomeScreen({ navigation }) { //navigation na prop
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select a Topic:</Text>
      
      {ITEMS.map((item) => (
        <Pressable
          key={item.id}
          style={styles.card}
          onPress={() => {
            // Navigate to "Detail" and pass item data via params
            navigation.navigate('Detail', {
              itemId: item.id,
              itemName: item.name,
              itemDesc: item.desc,
            });
          }}
        >
          <Text style={styles.cardText}>{item.name}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 10, elevation: 2 },
  cardText: { fontSize: 16, fontWeight: '600', color: '#333' },
});