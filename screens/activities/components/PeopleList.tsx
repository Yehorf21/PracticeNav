import { LegendList } from '@legendapp/list';
import { usePeopleListStore } from '../../../store';
import { PersonCard } from './PersonCard';

export const PeopleList = () => {
  const { people } = usePeopleListStore();

  return (
    // no need for LegendList here but wanted to show
    <LegendList
      data={people}
      keyExtractor={item => item.id}
      renderItem={item => <PersonCard person={item} />}
      estimatedItemSize={10}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 16, padding: 16 }}
    />
  );
};
