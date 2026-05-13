import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { ActivitiesScreen } from '../screens/activities';
import { ChatScreen } from '../screens/chat';
import { EncountersScreen } from '../screens/encounters';
import { BrowseScreen } from '../screens/browse';
import { ProfileScreen } from '../screens/profile';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Activities"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Activities" component={ActivitiesScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Browse" component={BrowseScreen} />
        <Stack.Screen name="Encounters" component={EncountersScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
