import { Pressable, StyleSheet, Text, View } from 'react-native';
import { usePeopleListStore } from '../../../store';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

export const TabSwitcher = () => {
  const { people } = usePeopleListStore();
  const [activeTab, setActiveTab] = useState<'Received' | 'Mutual'>('Mutual');

  const handleActiveTab = () => {
    setActiveTab(prev => (prev === 'Mutual' ? 'Received' : 'Mutual'));
  };

  return (
    <View style={styles.container}>
      {['Received', 'Mutual'].map(tab => (
        <LinearGradient colors={['#0015ff', '#1c005d']}>
          <Pressable
            key={tab}
            style={[styles.button, activeTab === tab && styles.activeButton]}
            onPress={handleActiveTab}
          >
            <Text style={[styles.text, activeTab === tab && styles.activeText]}>
              {tab}
            </Text>

            <Text
              style={[styles.number, activeTab === tab && styles.activeText]}
            >
              {people.length}
            </Text>
          </Pressable>
        </LinearGradient>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  button: {
    backgroundColor: '#fff',
  },
  activeButton: {
    backgroundColor: 'purple',
  },
  text: {
    fontSize: 12,
    color: '#090617',
    fontWeight: '600',
    opacity: 0.7,
  },
  activeText: {
    color: '#fff',
    opacity: 1,
  },
  number: {
    fontSize: 12,
    color: '#090617',
    opacity: 0.7,
  },
});
