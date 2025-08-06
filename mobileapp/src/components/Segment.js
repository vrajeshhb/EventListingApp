import * as React from 'react';
import { StyleSheet } from 'react-native';
import {  SegmentedButtons } from 'react-native-paper';

export default function App({ setValue,value }) {

  return (
      <SegmentedButtons
        onValueChange={setValue}
        value={value}
        style={styles.group}
        buttons={[
          {
            style: styles.button,
            value: 'all',
            label: 'All ',
            showSelectedCheck: true,
          },
         
          {
            style: styles.button,
            value: 'saved',
            label: 'Saved ',
            showSelectedCheck: true,
          },
        ]}
      />
  );
}

const styles = StyleSheet.create({
  group: { 
    marginTop:15, 
    paddingHorizontal: 20, 
    justifyContent: 'center',
    shadowColor:"#EEDC82", },
  button: {
    flex: 1,
  },
});
