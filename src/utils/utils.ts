import { ValidationError } from "../model/form.model";


export function required(value: any): ValidationError | null {
  return value
    ? null
    : {
        required: 'Required field',
      };
}

export function getDecimalSeparator() {
  const n = 1.1;
  return n.toLocaleString().substring(1, 2);
}
