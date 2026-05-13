import React from 'react';
import { SvgProps } from 'react-native-svg';

export type RootStackParamList = {
  Activities: undefined;
  Chat: undefined;
  Browse: undefined;
  Encounters: undefined;
  Profile: undefined;
};

export interface Tabs {
  title: 'Chat' | 'Browse' | 'Encounters' | 'Activities' | 'Profile';
  icon: React.FC<SvgProps>;
  pageIcon?: React.FC<SvgProps>;
  component: () => null;
}
