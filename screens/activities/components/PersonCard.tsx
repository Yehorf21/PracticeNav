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

const images = {
  1: require('../../../assets/1.webp'),
  2: require('../../../assets/2.webp'),
  3: require('../../../assets/3.webp'),
  4: require('../../../assets/4.webp'),
  5: require('../../../assets/5.webp'),
  6: require('../../../assets/6.webp'),
};

export const PersonCard: React.FC<Props> = ({ person }) => {
  // can implement visual change of the like button as well if needed
  const { updateLikedPerson } = usePeopleListStore();
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsSelected(true)}
      onPressOut={() => setIsSelected(false)}
      style={[styles.profile, isSelected && styles.selectedProfile]}
    >
      <View style={styles.container}>
        {/* like */}
        <Pressable
          style={styles.like}
          onPress={() => updateLikedPerson(person.id)}
        >
          <LikeIcon
            height={14}
            width={14}
            fill={person.isLiked ? '#ff5f5f' : '#fff'}
          />
        </Pressable>

        <Image source={images[person.id]} style={styles.image} />

        <View style={styles.nameContainer}>
          <Text style={styles.name}>
            {person.name}, {person.age}
          </Text>

          {/* green dot */}
          <View style={styles.dot} />
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.bottomGroup}>
            <MatchIcon height={24} width={24} />

            <Text>{person.matchPercentage}%</Text>
          </View>

          <View style={styles.bottomGroup}>
            <DistanceIcon height={24} width={24} />

            <Text>{person.distance}km</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  container: {
    gap: 8,
    flex: 1,
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
  profile: {
    borderWidth: 3,
    borderColor: '#fff',
  },
  selectedProfile: {
    borderColor: 'purple',
    borderRadius: 20,
  },
  image: {
    height: 250,
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    objectFit: 'contain',
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
    backgroundColor: '#f4f4f4',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
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
