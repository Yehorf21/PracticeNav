import { ActivitiesScreen } from '../screens/activities/index.tsx';
import { BrowseScreen } from '../screens/browse/index.tsx';
import { EncountersScreen } from '../screens/encounters/index.tsx';
import { ProfileScreen } from '../screens/profile/index.tsx';
import { ChatScreen } from '../screens/chat/index.tsx';

// SVG's

import ChatIcon from '../assets/icons/chat.svg';
import BrowseIcon from '../assets/icons/browse.svg';
import EncountersIcon from '../assets/icons/encounters.svg';
import ActivitiesIcon from '../assets/icons/activities.svg';
import ProfileIcon from '../assets/icons/profile.svg';
import FilterIcon from '../assets/icons/filter.svg';
import { Tabs } from './types';

export const TABS: Tabs[] = [
  {
    title: 'Chat',
    icon: ChatIcon,
    component: ChatScreen,
  },
  {
    title: 'Browse',
    icon: BrowseIcon,
    component: BrowseScreen,
  },
  {
    title: 'Encounters',
    icon: EncountersIcon,
    component: EncountersScreen,
  },
  {
    title: 'Activities',
    icon: ActivitiesIcon,
    pageIcon: FilterIcon,
    component: ActivitiesScreen,
  },
  {
    title: 'Profile',
    icon: ProfileIcon,
    component: ProfileScreen,
  },
];
