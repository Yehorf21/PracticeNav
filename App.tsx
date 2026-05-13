import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './navigation/types';
import { RootNavigator } from './navigation/RootNavigator';
import { TabNavigator } from './navigation/TabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}

export default App;
