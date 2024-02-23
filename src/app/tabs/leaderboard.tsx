import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function LeaderboardScreen() {
  return (
    <ScrollView>
      <View>
        <Text className="text-4xl font-extrabold">Leaderboard</Text>
        <Text className="text-sm text-stone-500">Updated 14 minutes ago</Text>
      </View>
      <View />
    </ScrollView>
  );
}
