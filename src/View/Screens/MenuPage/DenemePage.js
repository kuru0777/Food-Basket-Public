import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://example.com/path/to/your-profile-image.jpg' }}
        style={styles.profileImage}
      />
      <Text style={styles.username}>John Doe</Text>
      <Text style={styles.email}>johndoe@example.com</Text>
      <Button
        title="Edit Profile"
        onPress={() => {
          Alert.alert('olacak');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
});

export default ProfileScreen;
