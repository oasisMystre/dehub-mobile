import { View, Text, Image, ScrollView, Pressable } from 'react-native';

import MdiIcon from '@expo/vector-icons/MaterialIcons';

import { NFT } from '@/lib/api/models';

type FeedNFTItemProps = {
  nft: NFT;
};

export default function FeedNFTItem({ nft }: FeedNFTItemProps) {
  return (
    <View className="max-w-xs min-w-xs">
      <View className="absolute h-32 ">
        <Image
          className="w-full h-32 rounded-md"
          source={{ uri: nft.imageUrl }}
        />
        <View className="flex space-x-2 items-center bg-black/50 px-2 py-1 rounded">
          <MdiIcon
            name="circle"
            color="green"
            size={8}
          />
          <Text className="flex-1">{nft.views}</Text>
        </View>
      </View>
      <View className="flex flex-col space-y-4">
        <View className="flex space-x-2">
          <View className="flex-1 flex items-center">
            <Image source={{ uri: nft.minterAvatarUrl }} />
            <Text className="text-sm">{nft.mintername}</Text>
          </View>
        </View>
        <View className="flex flex-col space-y-2">
          <Text className="line-clamp-1 truncate">{nft.description}</Text>
          <Text>{nft.name}</Text>
        </View>
        <ScrollView
          className="flex space-x-4 items-center"
          horizontal={true}
        >
          {nft.category.map((category, index) => {
            return (
              <Pressable
                key={index}
                className="bg-stone-700 text-white rounded-full"
              >
                <Text>{category}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
