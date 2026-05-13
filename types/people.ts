export interface PersonCard {
  id: string;
  name: string;
  age: number;
  isLiked: boolean;
  isOnline: boolean;
  matchPercentage: number;
  distance: number;
}

export interface PeopleListStore {
  people: PersonCard[];
  updateLikedPerson: (id: string) => void;
}