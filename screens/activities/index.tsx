import { SafeAreaView } from 'react-native-safe-area-context';
import { TabSwitcher } from './components/TabSwitcher';
import { PeopleList } from './components/PeopleList';

export const ActivitiesScreen = () => {
  return (
    <SafeAreaView style={{ gap: 24 }}>
      <TabSwitcher />

      <PeopleList />
    </SafeAreaView>
  );
};
