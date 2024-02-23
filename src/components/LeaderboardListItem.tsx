import React from 'react';
import { View, Text } from 'react-native';

export default function LeaderboardListItem() {
  return (
    <View className="flex space-x-4">
      <Text>1</Text>
      <View className="flex space-x-2" />
      <View className="flex flex-col space-y-2" />
    </View>
  );
}
