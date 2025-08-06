import React from "react";
import { View, StyleSheet, Linking } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  Button,
  Avatar,
  Chip,
  IconButton,
  ActivityIndicator,
  Snackbar,
} from "react-native-paper";

const DetailsScreen = ({ navigation, route }) => {
  const [loading, setLoading] = React.useState(false);
  const [responseMsg, setResponseMsg] = React.useState("");
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);

  const { title } = route.params;
  const openMaps = () => {
    const query = encodeURIComponent(event.location);
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${title.location}`
    );
  };

  const hige = {
    highlights: [
      "Snacks Included",
      "Parking Available",
      "Bring ID",
      "Live Music",
      "Family Friendly",
      "Free Wi-Fi",
      "Air Conditioned",
    ],
  };
  /*
    "id": 2,
        "banner": "https://picsum.photos/700?1",
        "title": "Art & Wine Night",
        "datetime": "Sat, 22 Sep · 5:00 PM",
        "location": "Vastrapur, Ahmedabad",
        "tag": "199",
        "spots_left": "Only 5 spots left",
        "favorite": 0,
        "cat": "art"
   */

  //add to fav api call
  //replace your API in here
  const handleSave = () => {
    setLoading(true);
    fetch("https://YOURAPI.com/EventApi/SaveEvent.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "id=2&favorite=1",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResponseMsg("Event saved!");
        setSnackbarVisible(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setResponseMsg("Something went wrong");
        setSnackbarVisible(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      {loading ? (
        <ActivityIndicator animating={true} size="small" />
      ) : (
        <Card style={styles.card} onPress={() => {}}>
          <Card.Cover source={{ uri: title.banner }} />

          <Card.Content>
            <Title>{title.title}</Title>
            <Paragraph>{title.datetime}</Paragraph>

            <View style={styles.row}>
              <Paragraph style={styles.location}>{title.location}</Paragraph>
              <IconButton icon="map-marker" size={20} onPress={openMaps} />
            </View>

            <View style={styles.row}>
              <Avatar.Image size={30} icon="account-cowboy-hat-outline" />
              <Paragraph style={styles.hostedBy}>
                Hosted by VB //{title.organizerName}
              </Paragraph>
            </View>

            <Paragraph numberOfLines={4} style={styles.description}>
              Join us for an inspiring evening of creativity and culture.Enjoy
              live performances, interactive art sessions, and community
              vibes.🍷 Complimentary snacks and beverages will be served
              throughout the event.
            </Paragraph>

            <View style={styles.chips}>
              {hige.highlights.map((highlight, idx) => (
                <Chip key={idx} style={styles.chip}>
                  {highlight}
                </Chip>
              ))}
            </View>

            <View style={styles.actions}>
              {title.favorite === 0 ? (
                <Button mode="outlined" onPress={handleSave}>
                  Save to My Events
                </Button>
              ) : (
                <Button mode="outlined" icon="delete" onPress={() => {}}>
                  Remove From My Events
                </Button>
              )}
              <Button mode="contained" onPress={() => {}} style={styles.cta}>
                CTA
              </Button>
            </View>

            <View style={styles.extra}>
              <IconButton icon="share-variant" onPress={() => {}} />
              <IconButton icon="bell-outline" onPress={() => {}} />
            </View>
          </Card.Content>
        </Card>
      )}
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        {responseMsg}
      </Snackbar>
    </>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  card: {
    margin: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  location: {
    flex: 1,
    fontSize: 14,
  },
  hostedBy: {
    marginLeft: 8,
  },
  description: {
    marginTop: 8,
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 8,
    gap: 6,
  },
  chip: {
    marginRight: 4,
    marginBottom: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cta: {
    marginLeft: 10,
  },
  extra: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
