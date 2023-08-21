import { ValidationError } from "../components/amount-input-component/amount-input-component";

export function required(value: any): ValidationError | null {
    return value ? null : {
      required: 'Required field'
    }
  }