import { Text } from 'react-native';
import { artStyles } from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={artStyles.container}>
      <Text style={artStyles.art}>
        {
          '   ╭───────╮\n   │  👤   │\n   ╰───────╯\n  your profile\n  lives here!\n     🌿'
        }
      </Text>
    </SafeAreaView>
  );
};
