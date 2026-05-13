import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TABS } from './data';
import { Pressable } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitleStyle: {
          paddingLeft: 16,
          fontSize: 16,
          fontWeight: '600',
        },
        tabBarStyle: {
          paddingHorizontal: 16,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
        tabBarLabelVisibilityMode: 'labeled',
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 4,
        },
      }}
    >
      {TABS.map(tab => (
        <Tab.Screen
          key={tab.title}
          name={tab.title}
          component={tab.component}
          options={{
            headerTitle: tab.title,
            tabBarIcon: ({ color, size, focused }) => {
              const Icon = tab.icon;

              if (focused) {
                return (
                  <MaskedView maskElement={<Icon width={size} height={size} />}>
                    <LinearGradient colors={['#00c8ff', '#4700ee']}>
                      <Icon width={size} height={size} opacity={0} />
                    </LinearGradient>
                  </MaskedView>
                );
              }

              return <Icon width={size} height={size} fill={color} />;
            },
            headerRight: () => {
              if (tab.pageIcon) {
                const Icon = tab.pageIcon;
                return (
                  <Pressable
                    onPress={() => console.log('filter')}
                    style={{ marginRight: 24 }}
                  >
                    <Icon height={24} width={24} />
                  </Pressable>
                );
              }

              return null;
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
