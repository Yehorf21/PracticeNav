import { Text } from 'react-native';
import { artStyles } from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export const EncountersScreen = () => {
  return (
    <SafeAreaView style={artStyles.container}>
      <Text style={artStyles.art}>
        {
          '      ✨\n   ★      ★\n      💫\n   ★      ★\n      ✨\n no encounters\n    yet! 🌙'
        }
      </Text>
    </SafeAreaView>
  );
};
