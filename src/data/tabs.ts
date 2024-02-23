import React from 'react';

import MdiIcon from '@expo/vector-icons/MaterialIcons';
import { Href } from 'expo-router/build/link/href';

type TabProps = {
  name: string;
  href: Href;
  icon: React.ComponentProps<typeof MdiIcon>['name'];
  activeIcon?: React.ComponentProps<typeof MdiIcon>['name'];
};

export default [
  {
    name: 'home',
    href: '/home',
    icon: 'home',
    activeIcon: 'home-filled',
  },
  {
    name: 'browse',
    href: '/home',
    icon: 'browse-gallery',
    activeIcon: 'home-filled',
  },
  {
    name: 'favorite',
    href: '/home',
    icon: 'favorite-outline',
    activeIcon: 'favorite',
  },
  {
    name: 'account',
    href: '/home',
    icon: 'person-outline',
    activeIcon: 'person',
  },
] as TabProps[];
