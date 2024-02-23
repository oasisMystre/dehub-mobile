import React from 'react';
import { useRouter, useSegments } from 'expo-router';

import type { AccountInfo } from '@/lib/api/models';

type AuthContextProps = {
  isLoggedIn: boolean;
  isConnected: boolean;
  user: AccountInfo | null;
};

export const AuthContext = React.createContext<AuthContextProps>({
  user: null,
  isLoggedIn: false,
  isConnected: false,
});

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const router = useRouter();
  const [segment] = useSegments();

  const [value] = React.useState<AuthContextProps>({} as AuthContextProps);

  React.useEffect(() => {
    const inAuthGroup = segment === '(auth)';
    if (inAuthGroup && value.isLoggedIn) router.replace('/home');
    else if (!inAuthGroup) router.replace('/login');
  }, [value, segment, router]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
