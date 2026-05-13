import { Text, View } from 'react-native';
import { artStyles } from '../styles';

export const EncountersScreen = () => {
  return (
    <View style={artStyles.container}>
      <Text style={artStyles.art}>
        {
          '      ✨\n   ★      ★\n      💫\n   ★      ★\n      ✨\n no encounters\n    yet! 🌙'
        }
      </Text>
    </View>
  );
};
