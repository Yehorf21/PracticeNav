import { Text, View } from 'react-native';
import { artStyles } from '../styles';

export const ProfileScreen = () => {
  return (
    <View style={artStyles.container}>
      <Text style={artStyles.art}>
        {
          '   ╭───────╮\n   │  👤   │\n   ╰───────╯\n  your profile\n  lives here!\n     🌿'
        }
      </Text>
    </View>
  );
};
