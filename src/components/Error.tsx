import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import MdiIcon from '@expo/vector-icons/MaterialIcons';

type ErrorProps = {
  headline?: string;
  description?: string;
  onRetry?: () => Promise<void>;
};

export default function Error({ headline, description, onRetry }: ErrorProps) {
  const [loading, setLoading] = useState(false);

  return (
    <View className="flex-1 flex flex-col space-y-8 items-center justify-center">
      <View className="flex flex-col space-y-4 text-center">
        <MdiIcon
          name="error-outline"
          size={32}
        />
        <Text>{headline ?? 'Whoops, dehub crashed'}</Text>
        <Text>{description ?? 'Please try again later.'}</Text>
      </View>
      {onRetry && (
        <Button
          disabled={loading}
          title="Try again"
          color="black"
          onPress={async () => {
            setLoading(true);
            await onRetry().finally(() => setLoading(false));
          }}
        />
      )}
    </View>
  );
}
