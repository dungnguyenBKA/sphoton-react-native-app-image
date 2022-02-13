import * as React from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth, UserAuthenticate } from 'react-native-sphoton-app-image';

export default function App() {
  return (
    <UserAuthenticate>
      <SectionInside />
    </UserAuthenticate>
  );
}

function SectionInside() {
  const { user, setUser } = useAuth();
  return <View style={styles.container}>

    <Text>Example App</Text>

    <Button
      onPress={() => {
        if (user) {
          setUser(undefined);
        } else {
          setUser({
            username: 'Dung',
          });
        }
      }}
      title={user ? `${user.username}, need logout?` : 'Login?'} />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
