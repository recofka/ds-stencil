export interface ValidationError {
    [error: string]: string;
  }
  
  export type Validator = (value: any) => ValidationError | null;
  
  export interface FormItemModel {
    value: string | number | undefined;
    validators: Array<Validator>;
  }
  
  export interface FormModel {
    fields: {
      [formItem: string]: FormItemModel;
    }
  }