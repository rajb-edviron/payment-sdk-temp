import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview'; 

export const Payment = ({ collectId, onSuccess, onFailure }) => {
  const [successPageLoaded, setSuccessPageLoaded] = useState(false);

  const handleNavigationStateChange = (newNavState) => {
    const { url } = newNavState;
    console.log(url);
    if (url.includes('payment-success') && url.includes(collectId) ) {
      console.log('check 2');
      
      onSuccess();
    }else if (url.includes('payment-failure') && url.includes(collectId) ) {
      console.log('check 2');
      
      onFailure();
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: `http://192.168.1.108:4001/edviron-pg/sdk-redirect?collect_id=${collectId}` }}
        style={styles.webview}
        onNavigationStateChange={handleNavigationStateChange}
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
