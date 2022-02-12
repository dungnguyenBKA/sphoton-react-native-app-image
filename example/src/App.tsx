import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import AppImage from 'react-native-sphoton-app-image';

export default function App() {
  return (
    <View style={styles.container}>
      <AppImage
        source={{
          uri: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt41c476486b063ef8/60ee13df31f9ee2ab08a4dfe/Yasuo_0.jpg'
        }}
        style={{
          height: 100,
          aspectRatio: 1,
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
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
