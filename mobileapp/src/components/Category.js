import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
const Category = ({ navigation, back,events }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{}}>
      <Button
          style={styles.btn}
          mode="elevated"
          icon="toy-brick-search-outline"
          onPress={() => {navigation.navigate('Search', { title: events,cate:"search" })}}
        >
           Search
        </Button>

        <Button
          style={styles.btn}
          mode="elevated"
          onPress={() => {navigation.navigate('Search', { title: events,cate:"art" })}}
        >
          🎨 Art
        </Button>

        <Button
          style={styles.btn}
          mode="elevated"
          onPress={() => {navigation.navigate('Search', { title: events,cate:"music" })}}
        >
          🎶 Music
        </Button>
        <Button
          style={styles.btn}
          mode="elevated"
           onPress={() => {navigation.navigate('Search', { title: events,cate:"wellness" })}}
        >
          🧘 Wellness
        </Button>
        <Button
          style={styles.btn}
          mode="elevated"
          onPress={() => {navigation.navigate('Search', { title: events,cate:"tech" })}}
        >
          🧑‍💻 Tech
        </Button>
        <Button
          style={styles.btn}
          mode="elevated"
         onPress={() => {navigation.navigate('Search', { title: events,cate:"family" })}}
        >
          👪 Family
        </Button>
      </ScrollView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  
  btn: {
    marginLeft: 5,
    marginRight: 5,
    margin: 10,
    backgroundColor:"#F0F8FF",
    borderRadius:10,
    shadowColor:"#007FFF",
  },
});
