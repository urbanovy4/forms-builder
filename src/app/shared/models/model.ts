export interface User {
  email: string,
  password: string,
}

export interface Token {
  accessToken: string;
}

export interface CreateResponse extends Token {
  user: {
    email: string,
    id: number
  }
}
