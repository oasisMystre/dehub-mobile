import React from 'react';
import { View, Text } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

import { Tabs } from 'expo-router';
import { BlurView } from 'expo-blur';
import MdiIcon from '@expo/vector-icons/MaterialIcons';

import tabs from '@/data/tabs';

export default function AppLayout() {
  return (
    <Tabs
      initialRouteName={tabs.at(0)?.name}
      tabBar={(props) => (
        <BlurView
          className="absolute inset-0"
          intensity={95}
        >
          <BottomTabBar {...props} />
        </BlurView>
      )}
    >
      {tabs.map((tab, index) => (
        <Tabs.Screen
          key={index}
          name={tab.name}
          options={{
            href: tab.href,
            tabBarIcon: (props) => (
              <View className="flex flex-col space-y-2 items-center justify-center bg-transparent">
                <MdiIcon
                  name={props.focused ? tab.activeIcon : tab.icon}
                  {...props}
                />
                <Text
                  className="first-letter:capitalize"
                  style={{ color: props.color }}
                >
                  {tab.name}
                </Text>
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
