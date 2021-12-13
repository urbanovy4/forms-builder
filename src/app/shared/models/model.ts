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
  availableStyles: AvailableStyles;
}


export interface AvailableStyles {
  width?: string;
  height?: string;
  borderStyle?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: Color;
  placeholder?: string;
  required?: boolean;
}

interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
  roundA: number;
  hex: string;
  rgba: string;
}

export enum BorderStyles {
  Dotted = 'dotted',
  Dashed = 'dashed',
  Solid = 'solid',
  Double = 'double',
  Groove = 'groove',
  Ridge = 'ridge',
  Inset = 'inset',
  Outset = 'outset',
  None = 'none',
  Hidden = 'hidden'
}
