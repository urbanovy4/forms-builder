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
  availableStyles: AvailableStyles[];
}

interface Style {
  value: string;
}

export interface AvailableStyles {
  width?: Style;
  height?: Style;
  borderStyle?: Style;
  fontSize?: Style;
  fontWeight?: Style;
  rgbaColor?: Style;
  placeholder?: Style;
  required?: Style;
}
