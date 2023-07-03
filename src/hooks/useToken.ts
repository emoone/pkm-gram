import { useSelector } from 'react-redux';
import { RootState } from '../modules/store';
import { useCallback, useEffect, useState } from 'react';

function useToken() {
  const storeToken = useSelector((state: RootState) => state.auth.accessToken);

  const [token, setToken] = useState({ accessToken: null, refreshToken: null });

  const parseToken = useCallback(() => {
    try {
      if (storeToken) {
        const parseToken = JSON.parse(storeToken);
        const { accessToken, refreshToken } = parseToken;
        setToken({ accessToken, refreshToken });
      }
    } catch (e) {
      console.error(e);
    }
  }, [storeToken]);

  useEffect(() => {
    parseToken();
  }, [storeToken]);
  return { ...token };
}

export default useToken;
