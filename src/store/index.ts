import { create } from 'zustand'

import { User, UserState } from '../types';

const useStore = create<UserState>((set) => ({
  user: {
    "iss": "https://accounts.google.com",
    "azp": "1070476743728-2phqg6oe8p30fsq1r4i5i5ruj188kiv2.apps.googleusercontent.com",
    "aud": "1070476743728-2phqg6oe8p30fsq1r4i5i5ruj188kiv2.apps.googleusercontent.com",
    "sub": 103191242889130972325n,
    "email": "romanpolesko@gmail.com",
    "email_verified": true,
    "nbf": 1697727306,
    "name": "Roman Poleshko",
    "picture": "https://lh3.googleusercontent.com/a/ACg8ocLPa8jTpFlzdfxj3xDiszouRBt4BAfGglP6n-2DN3Cn-Q=s96-c",
    "given_name": "Roman",
    "family_name": "Poleshko",
    "locale": "en",
    "iat": 1697727606,
    "exp": 1697731206,
    "jti": "ed249dbd506f1bd780ae6c69f84944308f058d51"
  },
  setUser: (user: User) => set((state) => ({ ...state, user })),
  removeUser: () => set((state) => ({ ...state, user: null })),
}));

export default useStore;
