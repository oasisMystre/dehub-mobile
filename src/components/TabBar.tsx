import React from 'react';
import { TouchableOpacity, Text, ColorValue } from 'react-native';

import MdiIcon from '@expo/vector-icons/MaterialIcons';

type TabBarProps = {
  label: string;
  color: ColorValue;
  icon: keyof ReturnType<(typeof MdiIcon)['getRawGlyphMap']>;
  isActive?: boolean;
  activeColor?: ColorValue;
  activeIcon?: keyof ReturnType<(typeof MdiIcon)['getRawGlyphMap']>;
};

export default function TabBar({
  label,
  icon,
  color,
  activeIcon,
  activeColor,
  isActive,
}: TabBarProps) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      className="flex-1"
    >
      <MdiIcon
        name={isActive ? activeIcon : icon}
        color={isActive ? activeColor : color}
      />
      <Text style={{ color: isActive ? activeColor : color }}>{label}</Text>
    </TouchableOpacity>
  );
}
