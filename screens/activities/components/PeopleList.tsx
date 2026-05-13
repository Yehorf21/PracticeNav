import { LegendList } from '@legendapp/list';
import { usePeopleListStore } from '../../../store';
import { PersonCard } from './PersonCard';

export const PeopleList = () => {
  const { people } = usePeopleListStore();

  return (
    // no need for LegendList here but wanted to show
    <LegendList
      style={{ marginBottom: 32 }}
      data={people}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <PersonCard person={item} />}
      numColumns={2}
      estimatedItemSize={10}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 16, padding: 16 }}
    />
  );
};
