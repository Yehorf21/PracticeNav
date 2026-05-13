import { Text, View } from 'react-native';
import { artStyles } from '../styles';

export const BrowseScreen = () => {
  return (
    <View style={artStyles.container}>
      <Text style={artStyles.art}>
        {
          '  ┌─────────┐\n  │   👀    │\n  │  still  │\n  │ looking │\n  └─────────┘\n  nothing to\n  browse yet!'
        }
      </Text>
    </View>
  );
};
