import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import SearchSc from './SearchScreen';
import HomeScreen from './HomeScreen';
import DetailsSc from './DetailsScreen'
const Stack = createStackNavigator();

function SearchScreen({ navigation,route }) {
  return (
    <SearchSc navigation={ navigation } route={route} />
  );
}
function DetailsScreen({ navigation,route }) {
  return (
    <DetailsSc navigation={ navigation } route={route} />
  );
}
DetailsScreen

const Index = () => {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
           headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
     
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  
 
});
