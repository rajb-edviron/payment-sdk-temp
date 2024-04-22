import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

  export const Payment= ({ collectId}) => {
     
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: `https://dev-payments.edviron.com/edviron-pg/sdk-redirect?collect_id=${collectId}` }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});


