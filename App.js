// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import DetailScreen from './src/screens/DetailScreen';
// import HomeScreen from './src/screens/HomeScreen';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           headerStyle: { backgroundColor: '#007AFF' },
//           headerTintColor: '#fff',
//           headerTitleStyle: { fontWeight: 'bold' },
//         }}
//       >
//         <Stack.Screen 
//           name="Home" 
//           component={HomeScreen} 
//           options={{ title: 'Items Catalog' }}
//         />
//         <Stack.Screen 
//           name="Detail" 
//           component={DetailScreen} 
//           options={({ route }) => ({ title: route.params.itemName })}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }




// import React, { useState, useEffect } from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   Image,
//   ActivityIndicator,
//   Pressable,
//   StyleSheet,
// } from 'react-native';

// export default function MovieApp() {
//   const [movies, setMovies] = useState([]);
//   const [filteredMovies, setFilteredMovies] = useState([]);
//   const [search, setSearch] = useState('');
//   const [loading, setLoading] = useState(true);

//   // 1. Fetch API Data on Component Mount
//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   async function fetchMovies() {
//     try { 
//       // Mock API endpoint for practice
//       const response = await fetch(
//         'https://reactnative.dev/movies.json'
//       );
//       const json = await response.json();
//       setMovies(json.movies);
//       setFilteredMovies(json.movies);
//     } catch (error) {
//       console.error('Error fetching data: ', error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   // 2. Handle Search Input Filtering
//   function handleSearch(text) {
//     setSearch(text);
//     if (text.trim() === '') {
//       setFilteredMovies(movies);
//     } else {
//       const filtered = movies.filter((movie) =>
//         movie.title.toLowerCase().includes(text.toLowerCase())
//       );
//       setFilteredMovies(filtered);
//     }
//   }

//   // 3. Render Individual List Item
//   const renderMovieItem = ({ item }) => (
//     <View style={styles.card}>
//       <Image
//         source={{ uri: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=200' }}
//         style={styles.poster}
//       />
//       <View style={styles.movieDetails}>
//         <Text style={styles.movieTitle}>{item.title}</Text>
//         <Text style={styles.movieYear}>Release Year: {item.releaseYear}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.headerTitle}>🎬 Movie Explorer</Text>

//       {/* Search Input Field */}
//       <TextInput
//         style={styles.searchInput}
//         placeholder="Search movies..."
//         value={search}
//         onChangeText={handleSearch}
//       />

//       {/* Loading Indicator */}
//       {loading ? (
//         <View style={styles.loaderContainer}>
//           <ActivityIndicator size="large" color="#007AFF" />
//           <Text style={{ marginTop: 10 }}>Loading Movies...</Text>
//         </View>
//       ) : (
//         /* Dynamic FlatList Component */
//         <FlatList
//           data={filteredMovies}
//           keyExtractor={(item) => item.id}
//           renderItem={renderMovieItem}
//           contentContainerStyle={styles.listContent}
//           ListEmptyComponent={
//             <Text style={styles.emptyText}>No movies found matching "{search}"</Text>
//           }
//         />
//       )}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f4f4f6', paddingHorizontal: 15 },
//   headerTitle: { fontSize: 24, fontWeight: 'bold', marginTop: 15, marginBottom: 10, textAlign: 'center' },
//   searchInput: {
//     backgroundColor: '#fff',
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     marginBottom: 15,
//     fontSize: 16,
//   },
//   loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   listContent: { paddingBottom: 20 },
//   card: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 12,
//     marginBottom: 12,
//     elevation: 2,
//   },
//   poster: { width: 60, height: 80, borderRadius: 6 },
//   movieDetails: { marginLeft: 15, justifyContent: 'center' },
//   movieTitle: { fontSize: 18, fontWeight: 'bold', color: '#1c1e21' },
//   movieYear: { fontSize: 14, color: '#666', marginTop: 4 },
//   emptyText: { textAlign: 'center', color: '#888', marginTop: 30, fontSize: 16 },
// });

// Tuesday 8th october

// import React, { useState, useEffect } from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   Image,
//   ActivityIndicator,
//   Pressable,
//   StyleSheet,
// } from 'react-native';

// export default function MovieApp() {
//   const [movies, setMovies] = useState([]);
//   const [filteredMovies, setFilteredMovies] = useState([]);
//   const [search, setSearch] = useState('');
//   const [loading, setLoading] = useState(true);

//   // --- NEW PAGINATION STATE ---
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10; // Number of movies to show per page

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   async function fetchMovies() {
// //     try { 
// //       // Mock API endpoint for practice
// //       const response = await fetch(
// //         'https://reactnative.dev/movies.json'
// /      );
//        const json = await response.json();

// javascript ft that allows you to unpack proops from an object directly in the functin delaration
//    rather than in the function bosy with dot notation
//       // FIX: jsonplaceholder returns an array of posts. We map it to match our movie structure.
//       const formattedMovies = json.map((post) => ({
//         id: post.id.toString(),
//         title: post.title,
//         releaseYear: 2024, // Mock year since the API doesn't provide one
//       }));

//       setMovies(formattedMovies);
//       setFilteredMovies(formattedMovies);
//     } catch (error) {
//       console.error('Error fetching data: ', error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   function handleSearch(text) {
//     setSearch(text);
    
//     // NEW: Reset to page 1 whenever the user types a new search
//     setCurrentPage(1); 

//     if (text.trim() === '') {
//       setFilteredMovies(movies);
//     } else {
//       const filtered = movies.filter((movie) =>
//         movie.title.toLowerCase().includes(text.toLowerCase())
//       );
//       setFilteredMovies(filtered);
//     }
//   }

//   // --- NEW PAGINATION LOGIC ---
//   // Calculate the total number of pages
//   const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
  
//   // Calculate the index of the last and first item for the current page
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
//   // Slice the array to get only the items for the current page
//   const currentItems = filteredMovies.slice(indexOfFirstItem, indexOfLastItem);

//   const renderMovieItem = ({ item }) => (
//     <View style={styles.card}>
//       <Image
//         source={{ uri: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=200' }}
//         style={styles.poster}
//       />
//       <View style={styles.movieDetails}>
//         <Text style={styles.movieTitle}>{item.title}</Text>
//         <Text style={styles.movieYear}>Release Year: {item.releaseYear}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.headerTitle}>🎬 Movie Explorer</Text>

//       <TextInput
//         style={styles.searchInput}
//         placeholder="Search movies..."
//         value={search}
//         onChangeText={handleSearch}
//       />

//       {loading ? (
//         <View style={styles.loaderContainer}>
//           <ActivityIndicator size="large" color="#007AFF" />
//           <Text style={{ marginTop: 10 }}>Loading Movies...</Text>
//         </View>
//       ) : (
//         <>
//           {/* We render currentItems instead of the full filteredMovies */}
//           <FlatList
//             data={currentItems} 
//             keyExtractor={(item) => item.id}
//             renderItem={renderMovieItem}
//             contentContainerStyle={styles.listContent}
//             ListEmptyComponent={
//               <Text style={styles.emptyText}>No movies found matching "{search}"</Text>
//             }
//           />

//           {/* --- NEW PAGINATION CONTROLS UI --- */}
//           {filteredMovies.length > 0 && (
//             <View style={styles.paginationContainer}>
              
//               {/* Previous Button */}
//               <Pressable
//                 style={[
//                   styles.pageButton,
//                   // Apply disabled styling if on the first page
//                   currentPage === 1 && styles.disabledButton,
//                 ]}
//                 onPress={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                 // Disable the pressable if on the first page
//                 disabled={currentPage === 1}
//               >
//                 <Text style={styles.pageButtonText}>Previous</Text>
//               </Pressable>

//               {/* Page Indicator */}
//               <Text style={styles.pageIndicator}>
//                 Page {currentPage} of {totalPages}
//               </Text>

//               {/* Next Button */}
//               <Pressable
//                 style={[
//                   styles.pageButton,
//                   // Apply disabled styling if on the last page
//                   currentPage === totalPages && styles.disabledButton,
//                 ]}
//                 onPress={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//                 // Disable the pressable if on the last page
//                 disabled={currentPage === totalPages}
//               >
//                 <Text style={styles.pageButtonText}>Next</Text>
//               </Pressable>

//             </View>
//           )}
//         </>
//       )}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f4f4f6', paddingHorizontal: 15 },
//   headerTitle: { fontSize: 24, fontWeight: 'bold', marginTop: 15, marginBottom: 10, textAlign: 'center' },
//   searchInput: {
//     backgroundColor: '#fff',
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     marginBottom: 15,
//     fontSize: 16,
//   },
//   loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   listContent: { paddingBottom: 20 },
//   card: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 12,
//     marginBottom: 12,
//     elevation: 2,
//   },
//   poster: { width: 60, height: 80, borderRadius: 6 },
//   movieDetails: { marginLeft: 15, justifyContent: 'center', flex: 1 }, // added flex:1 to prevent text overflow
//   movieTitle: { fontSize: 18, fontWeight: 'bold', color: '#1c1e21' },
//   movieYear: { fontSize: 14, color: '#666', marginTop: 4 },
//   emptyText: { textAlign: 'center', color: '#888', marginTop: 30, fontSize: 16 },
  
//   // --- NEW STYLES FOR PAGINATION ---
//   paginationContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderTopWidth: 1,
//     borderTopColor: '#ddd',
//   },
//   pageButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 6,
//   },
//   disabledButton: {
//     backgroundColor: '#A0CFFF', // Lighter blue to indicate it's inactive
//   },
//   pageButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   pageIndicator: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//   },
// });

//LOCAL STORAGE WITH ASYNC STORAGE AND API


// import AsyncStorage from '@react-native-async-storage/async-storage';

// // 1. Save Data
// export async function saveItem(key, value) {
//   try {
//     const jsonValue = JSON.stringify(value);
//     await AsyncStorage.setItem(key, jsonValue);
//   } catch (e) {
//     console.error('Error saving data to AsyncStorage:', e);
//   }
// }

// // 2. Read Data
// export async function getItem(key) {
//   try {
//     const jsonValue = await AsyncStorage.getItem(key);
//     return jsonValue != null ? JSON.parse(jsonValue) : null;
//   } catch (e) {
//     console.error('Error reading data from AsyncStorage:', e);
//   }
// }

// // 3. Remove Data
// export async function removeItem(key) {
//   try {
//     await AsyncStorage.removeItem(key);
//   } catch (e) {
//     console.error('Error removing data from AsyncStorage:', e);
//   }
// }


// import { useState, useEffect } from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   FlatList,
//   Pressable,
//   StyleSheet,
//   ActivityIndicator,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const STORAGE_KEY = '@my_favorites_list';

// const SAMPLE_ITEMS = [
//   { id: '1', title: '⚡ React Native Hooks' },
//   { id: '2', title: '📱 Native Flexbox Layouts' },
//   { id: '3', title: '💾 AsyncStorage Persistence' },
//   { id: '4', title: '📷 Expo Camera Integration' },
// ];

// export default function App() {
//   const [favorites, setFavorites] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Load saved favorites on app launch
//   useEffect(() => {
//     loadFavorites();
//   }, []);

//   async function loadFavorites() {
//     try {
//       const storedData = await AsyncStorage.getItem(STORAGE_KEY);
//       if (storedData) {
//         setFavorites(JSON.parse(storedData));
//       }
//     } catch (error) {
//       console.error('Failed to load favorites:', error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function toggleFavorite(item) {
//     let updatedFavorites;
//     const exists = favorites.some((fav) => fav.id === item.id);

//     if (exists) {
//       updatedFavorites = favorites.filter((fav) => fav.id !== item.id);
//     } else {
//       updatedFavorites = [...favorites, item]; //... spread operator
//     }

//     setFavorites(updatedFavorites);
//     // Persist to local device storage
//     await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites));
//   }

//   if (loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="#007AFF" />
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.header}>🔖 Persistent Favorites</Text>
//       <Text style={styles.subHeader}>
//         Saved items persist even after restarting the app!
//       </Text>

//       <FlatList
//         data={SAMPLE_ITEMS}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => {
//           const isFav = favorites.some((fav) => fav.id === item.id);
//           return (
//             <View style={styles.card}>
//               <Text style={styles.cardTitle}>{item.title}</Text>
//               <Pressable
//                 style={[styles.button, isFav ? styles.buttonRemove : styles.buttonAdd]}
//                 onPress={() => toggleFavorite(item)}
//               >
//                 <Text style={styles.buttonText}>
//                   {isFav ? '★ Saved' : '☆ Save'}
//                 </Text>
//               </Pressable>
//             </View>
//           );
//         }}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
//   center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   header: { fontSize: 24, fontWeight: 'bold', color: '#111', marginTop: 10 },
//   subHeader: { fontSize: 14, color: '#666', marginBottom: 20, marginTop: 4 },
//   card: {
//     backgroundColor: '#fff',
//     padding: 16,
//     borderRadius: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//     elevation: 2,
//   },
//   cardTitle: { fontSize: 16, fontWeight: '500', color: '#333' },
//   button: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: 6 },
//   buttonAdd: { backgroundColor: '#007AFF' },
//   buttonRemove: { backgroundColor: '#34C759' },
//   buttonText: { color: '#fff', fontWeight: 'bold' },
// });


// import { useState, useEffect } from 'react';
// import { View, Text, Button, Linking, StyleSheet } from 'react-native';
// // 1. Import CameraView and useCameraPermissions directly
// import { CameraView, useCameraPermissions } from 'expo-camera';

// export default function CameraScreen() {
//   // 2. Call useCameraPermissions directly (not as Camera.useCameraPermissions)
//   const [permission, requestPermission] = useCameraPermissions();

//   // 1. Still loading permission state from OS
//   if (!permission) {
//     return <View />;
//   }

//   // 2. Permission denied by user
//   if (!permission.granted) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>
//           Camera access is required to scan tickets.
//         </Text>
//         {permission.canAskAgain ? (
//           <Button title="Grant Permission" onPress={requestPermission} />
//         ) : (
//           /* Graceful degradation: Direct user to OS settings when re-prompting is blocked */
//           <Button title="Open Settings" onPress={() => Linking.openSettings()} />
//         )}
//       </View>
//     );
//   }

//   // 3. Permission granted -> Render CameraView (instead of <Camera />)
//   return (
//     <View style={styles.container}>
//       <CameraView style={styles.camera} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   camera: { flex: 1, width: '100%' },
//   text: { textAlign: 'center', marginBottom: 10 },
// });
// try to design the camera container

import { View, Text, Button, Linking, StyleSheet } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function CameraScreen() {
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = ImagePicker.useMediaLibraryPermissions();

  // Still loading permission state from the OS
  if (!cameraPermission || !mediaPermission) {
    return <View />;
  }

  // Camera permission not granted
  if (!cameraPermission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Camera access is required to scan tickets.
        </Text>
        {cameraPermission.canAskAgain ? (
          <Button title="Grant Camera Permission" onPress={requestCameraPermission} />
        ) : (
          <Button title="Open Settings" onPress={() => Linking.openSettings()} />
        )}
      </View>
    );
  }

  // Media library permission not granted
  if (!mediaPermission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Media library access is required to select and save tickets.
        </Text>
        {mediaPermission.canAskAgain ? (
          <Button title="Grant Media Library Permission" onPress={requestMediaPermission} />
        ) : (
          <Button title="Open Settings" onPress={() => Linking.openSettings()} />
        )}
      </View>
    );
  }

  // Both granted
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  camera: { flex: 1, width: '100%' },
  text: { textAlign: 'center', marginBottom: 10 },
});