import React from 'react';

import Web3Auth from '@/lib/web3/web3auth';
import AuthProvider from './AuthProvider';
import Error from '@/components/Error';

type Web3AuthProps = {
  isReady: boolean;
  isInitialized: boolean;
  address: string | null;
  web3auth: Web3Auth | null;
  setAddress: React.Dispatch<React.SetStateAction<string | null>> | null;
};

export const Web3AuthContext = React.createContext<Web3AuthProps>({
  address: null,
  web3auth: null,
  isReady: false,
  setAddress: null,
  isInitialized: false,
});

export default function Web3AuthProvider({
  children,
}: React.PropsWithChildren) {
  const [error, setError] = React.useState<Error | null>(null);
  const [address, setAddress] = React.useState<string | null>(null);
  const [web3auth, setWeb3Auth] = React.useState<Web3Auth | null>(null);

  const [isReady, setIsReady] = React.useState(false);
  const [isInitialized, setIsInitialized] = React.useState(false);

  const initialize = async () => {
    const auth = new Web3Auth();

    await auth.initialize(Web3Auth.getChainConfig(''));

    setWeb3Auth(auth);
    setIsInitialized(true);
    setIsReady(auth.web3auth.ready);
  };

  React.useEffect(() => {
    initialize().catch(setError);
  }, []);

  return (
    <Web3AuthContext.Provider
      value={{ address, web3auth, isReady, isInitialized, setAddress }}
    >
      {isInitialized && isReady ? (
        <AuthProvider>{children}</AuthProvider>
      ) : error ? (
        <Error
          headline="Fail to initialize web3auth"
          description={error.message}
          onRetry={initialize}
        />
      ) : (
        children
      )}
    </Web3AuthContext.Provider>
  );
}
