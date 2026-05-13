import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { PersonCard as PersonCardType } from '../../../types/people';

import LikeIcon from '../../../assets/icons/like.svg';
import MatchIcon from '../../../assets/icons/match.svg';
import DistanceIcon from '../../../assets/icons/distance.svg';

import { useState } from 'react';
import { usePeopleListStore } from '../../../store';

interface Props {
  person: PersonCardType;
}

export const PersonCard: React.FC<Props> = ({ person }) => {
  const { updateLikedPerson } = usePeopleListStore();
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View style={styles.container}>
      {/* like */}
      <Pressable
        style={styles.like}
        onPress={() => updateLikedPerson(person.id)}
      >
        <LikeIcon />
      </Pressable>

      <Pressable
        onPressIn={() => setIsSelected(true)}
        onPressOut={() => setIsSelected(false)}
        style={isSelected && styles.selectedProfile}
      >
        <Image
          width={130}
          height={250}
          src={`../../../assets/${person.id}.webp`}
          style={styles.image}
        />
      </Pressable>

      <View style={styles.nameContainer}>
        <Text style={styles.name}>
          {person.name}, {person.age}
        </Text>

        {/* green dot */}
        <View style={styles.dot} />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomGroup}>
          <MatchIcon />

          <Text>{person.matchPercentage}%</Text>
        </View>

        <View style={styles.bottomGroup}>
          <DistanceIcon />

          <Text>{person.distance}km</Text>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  like: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#251504',
    borderRadius: 24,
    padding: 12,
    zIndex: 10,
  },
  selectedProfile: {
    borderWidth: 3,
    borderColor: 'purple',
  },
  image: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  nameContainer: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 999,
    backgroundColor: 'green',
  },
  bottomContainer: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    gap: 8,
  },
  bottomGroup: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
    backgroundColor: '#d4d4d4',
  },
  icon: {
    height: 24,
    width: 24,
  },
  text: {
    color: '#090617',
    fontSize: 16,
  },
});
