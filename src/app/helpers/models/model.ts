export interface User {
  email: string;
  password: string;
}

export interface Token {
  accessToken: string;
}

export interface UserResponse extends Token {
  user: {
    email: string;
    id: number;
  }
}

export interface FormField {
  id: number;
  type: string;
  icon: string;
  label: string;
  availableStyles: AvailableStyles;
  selected?: boolean;
}


export interface AvailableStyles {
  width?: string;
  height?: string;
  borderStyle?: BorderStyles;
  fontSize?: string;
  fontWeight?: string;
  color?: Color;
  placeholder?: string;
  required?: boolean;
}

export interface Form {
  id: number;
  userId: number;
  fields: FormField[];
  formName: string;
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
  Dotted = 'Dotted',
  Dashed = 'Dashed',
  Solid = 'Solid',
  Double = 'Double',
  Groove = 'Groove',
  Ridge = 'Ridge',
  Inset = 'Inset',
  Outset = 'Outset',
  None = 'None',
  Hidden = 'Hidden'
}

export interface FormBuilderState {
  fields: FormField[];
  selectedField: FormField;
  index: number;
  forms: Form[];
  selectedForm: Form;
}

export interface AuthState extends UserResponse {
}

export enum FieldsType {
  Text = 'text',
  Textarea = 'textarea',
  Button = 'button',
  Checkbox = 'checkbox',
  Select = 'select'
}
