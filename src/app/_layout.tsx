import React from 'react';
import { Stack } from 'expo-router';

import Web3AuthProvider from '@/providers/Web3AuthProvider';

export default function RootLayout() {
  return (
    <Web3AuthProvider>
      <Stack>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="(auth)"
          options={{ presentation: 'modal' }}
        />
      </Stack>
    </Web3AuthProvider>
  );
}
