export interface IUser {
  email: string;
  password: string;
}

export interface IToken {
  accessToken: string;
}

export interface ICreateResponse extends IToken {
  user: {
    email: string,
    id: number
  }
}

export interface IFormField {
  id: number;
  type: string;
  icon: string;
  label: string;
  required: boolean;
  availableStyles: AvailableStyles;
}

export interface AvailableStyles {
  width?: string;
  height?: string;
  borderStyle?: string;
  fontSize?: string;
  fontWeight?: string;
  rgbaColor?: string;
}
