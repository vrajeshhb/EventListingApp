import { StyleSheet,View } from "react-native";

import * as React from "react";
import { Avatar, TouchableRipple, Card, Text, Title, Paragraph, Chip } from "react-native-paper";


const EventCard = ({ item,navigation, route }) => {
  return (
    
   <Card style={styles.card}
  onPress={() => {navigation.navigate('Details', { title: item })}}
  
  >
      <Card.Cover source={{ uri: item.banner }} />
      <Card.Content>
        <View style={styles.headerRow}>
          <Title>{item.title}</Title>
          {/* Category tag in corner */}
          {item.cat && (
            <Chip style={styles.categoryChip} compact>
             {item.cat}
            </Chip>
          )}
    </View>
        
        <Paragraph>{item.datetime}</Paragraph>
        <Paragraph>{item.location}
        
        </Paragraph>
        <View style={styles.chips}>
        
          <Chip style={styles.chipOne}>{item.tag} /-</Chip>
          <Chip style={styles.chipTwo}>{item.spots_left}</Chip>
          
          <Chip style={styles.chipThree}>{item.favorite ? '🧡 Saved' : '🤍 Save'}</Chip>
         
        </View>
      </Card.Content>
    </Card>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
  },
 
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    gap: 8,
   
  },
  
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryChip: {
    backgroundColor: '#7FFFD4',
    height: 34,
   
  },
  chipOne:{
    marginRight: 6,
    backgroundColor:"#89CFF0",
    shadowColor:"#003262",
  },
  chipTwo:{
    marginRight: 6,
    backgroundColor:"#FDBCB4",
    shadowColor:"#660000",
  },
    chipThree:{
      marginRight: 6,
    backgroundColor:"#E3F988",
    shadowColor:"#EEDC82",
  },
  
});
