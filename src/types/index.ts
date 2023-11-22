type User = {
  iss: string,
  azp: string,
  aud: string,
  sub: bigint,
  email: string,
  email_verified: boolean,
  nbf: number,
  name: string,
  picture: string,
  given_name: string,
  family_name: string,
  locale: string,
  iat: number,
  exp: number,
  jti: string,
}

type UserState = {
  user: User | null,
  setUser: (user: User) => void,
  removeUser: () => void,
}

export type { User, UserState };
