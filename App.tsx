/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Payment } from './component';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

import { Success } from './component/Success';
import { Failure } from './component/Failure';

function App(): React.JSX.Element {
  const [show, setShow] = React.useState(false);
  const [paymentStatus, setPaymentStatus] = React.useState<'success' | 'failure' | 'pending'>('pending');
  const isDarkMode = useColorScheme() === 'dark';
  function success(){
    console.log('check2 success2');
    
    setPaymentStatus('success');
  }
  
  function fail(){
    setPaymentStatus('failure');
    
  }
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
    {paymentStatus === 'pending' && (
      <Payment collectId={`6626319412ddb21fc209adb4`} onSuccess={success} onFailure={fail} />
    )}
    {paymentStatus === 'success' && <Success />}
    {paymentStatus === 'failure' && <Failure />}
  </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
  },
});

export default App;
