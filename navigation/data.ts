import { ActivitiesScreen } from '../screens/Activities';
import { ChatScreen } from '../screens/Chat';
import { BrowseScreen } from '../screens/Browse';
import { EncountersScreen } from '../screens/Encounters';
import { ProfileScreen } from '../screens/Profile';

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
