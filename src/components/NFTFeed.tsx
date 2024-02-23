import { View, ScrollView } from 'react-native';
import { Text, Pressable } from 'react-native';

import { NFTFeed } from '@/store/slices/feed';

import NFTFeedItem from './NFTFeedItem';

type NFTFeedProps = {
  feed: NFTFeed;
};

export default function NFTFeedComponent({ feed }: NFTFeedProps) {
  return (
    <View className="flex flex-col space-y-2">
      <View className="flex space-x-2 items-center">
        <Text className="flex-1 font-bold">{feed.id}</Text>
        <Pressable>View all</Pressable>
      </View>
      <ScrollView horizontal={true}>
        {feed.results.map((result) => (
          <NFTFeedItem
            key={result.tokenId}
            nft={result}
          />
        ))}
      </ScrollView>
    </View>
  );
}
