import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";

import EventCard from "./EventCard";
import Category from "./Category";
import Segment from "./Segment";

//REPLACE YOUR API HERE
const API_URL = "https://YOURAPI.com/EventApi/api.php";

const HomeScreen = ({ navigation, route }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = React.useState("all");

  //fetching api to get eventes from api
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
        console.log("I tryed to fecth api ...");
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  }, []);

  //EventCard componet for Flatlist , all data
  const renderItem = ({ item }) => (
    <EventCard item={item} navigation={navigation} route={route} />
  );

  //EventCard componet for Flatlist , all saveddata
  const renderItemSaved = ({ item }) =>
    item.favorite && (
      <EventCard item={item} navigation={navigation} route={route} />
    );

  //wait for useeffect to fecth data
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      <Segment setValue={setValue} value={value} />
      <Category navigation={navigation} events={events} />
      {value === "all" ? (
        <FlatList
          data={events}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.container}
        />
      ) : (
        <FlatList
          data={events}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItemSaved}
          contentContainerStyle={styles.container}
        />
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
