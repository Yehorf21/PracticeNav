import { Text } from 'react-native';
import { artStyles } from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ChatScreen = () => {
  return (
    <SafeAreaView style={artStyles.container}>
      <Text style={artStyles.art}>
        {
          '    💬\n  ╔═══════╗\n  ║ hi~  ║\n  ╚═══════╝\n    │\nnothing here\n  yet! 🌸'
        }
      </Text>
    </SafeAreaView>
  );
};
