import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PeopleListStore } from '../types/people';
import { PEOPLE_LIST } from './data';

export const usePeopleListStore = create<PeopleListStore>()(
  persist(
    set => ({
      people: PEOPLE_LIST,

      updateLikedPerson: id =>
        set(state => ({
          people: state.people.map(person => {
            if (person.id === id) {
              return { ...person, isLiked: !person.isLiked };
            }

            return person;
          }),
        })),
    }),
    {
      name: 'PEOPLE_PROFILES',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
