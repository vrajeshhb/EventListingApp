import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Index from './src/components/Index';

export default function App() {
  return (

      <SafeAreaView style={styles.container}>
       <Index/>
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    padding: 8,
  },
 
});
