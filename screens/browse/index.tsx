import { Text } from 'react-native';
import { artStyles } from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export const BrowseScreen = () => {
  return (
    <SafeAreaView style={artStyles.container}>
      <Text style={artStyles.art}>
        {
          '  ┌─────────┐\n  │   👀    │\n  │  still  │\n  │ looking │\n  └─────────┘\n  nothing to\n  browse yet!'
        }
      </Text>
    </SafeAreaView>
  );
};
