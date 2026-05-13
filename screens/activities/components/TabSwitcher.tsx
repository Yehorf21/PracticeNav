import { Pressable, StyleSheet, Text, View } from 'react-native';
import { usePeopleListStore } from '../../../store';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

export const TabSwitcher = () => {
  const { people } = usePeopleListStore();
  const [activeTab, setActiveTab] = useState<'Received' | 'Mutual'>('Mutual');

  return (
    <View style={styles.container}>
      {['Received', 'Mutual'].map(tab => (
        <Pressable
          key={tab}
          style={[styles.button, activeTab === tab && styles.activeButton]}
          onPress={() => setActiveTab(tab)}
        >
          <Text style={[styles.text, activeTab === tab && styles.activeText]}>
            {tab}
          </Text>

          <Text style={[styles.number, activeTab === tab && styles.activeText]}>
            {people.length}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 4,
    padding: 12,
    borderRadius: 12,
  },
  activeButton: {
    backgroundColor: '#3933ad',
  },
  text: {
    fontSize: 14,
    color: '#090617',
    fontWeight: '600',
    opacity: 0.7,
  },
  activeText: {
    color: '#fff',
    opacity: 1,
  },
  number: {
    fontSize: 14,
    color: '#090617',
    opacity: 0.7,
  },
});
