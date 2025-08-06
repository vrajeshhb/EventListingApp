import React, { useState, useMemo } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Searchbar, Card } from 'react-native-paper';
import EventCard from './EventCard';
function SearchScreen({ navigation,route }) {
  
   const [searchQuery, setSearchQuery] = useState('');
    const { title, cate  } = route.params; // title is an array of event objects

// Filtered list using useMemo for performance
  const filteredEvents = useMemo(() => {
    if (!title || !Array.isArray(title)) return [];
    
    // {cat ==="search" ? return[]; : return[]; }
    if(cate === "search"){ 
      return title.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }else{
      return title.filter(item => item.cat === cate);
    }

      
  }, [searchQuery, title,cate]);
  //for flatlist 
 const renderItem = ({ item }) => (
    <EventCard item={ item } navigation={navigation} route={route} />
  );
  return (
   <>
        {cate === "search" &&  <Searchbar
          placeholder="Search Events"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{ margin: 15 }}
        /> }
       
      
        <FlatList
          data={filteredEvents}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          ListEmptyComponent={<Text style={styles.noResult}>No results found</Text>}
        />
    

    
      
   </>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
 
  noResult: {
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  },
 
});