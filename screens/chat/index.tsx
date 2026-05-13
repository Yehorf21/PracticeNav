import { View, Text } from 'react-native';
import { artStyles } from '../styles';

export const ChatScreen = () => {
  return (
    <View style={artStyles.container}>
      <Text style={artStyles.art}>
        {
          '    💬\n  ╔═══════╗\n  ║ hi~  ║\n  ╚═══════╝\n    │\nnothing here\n  yet! 🌸'
        }
      </Text>
    </View>
  );
};
