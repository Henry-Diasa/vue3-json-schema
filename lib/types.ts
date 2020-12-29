import { PropType } from "vue";
// 枚举类型
export enum SchemaTypes {
  "NUMBER" = "number",
  "INTEGER" = "integer",
  "STRING" = "string",
  "OBJECT" = "object",
  "ARRAY" = "array",
  "BOOLEAN" = "boolean"
}
type SchemaRef = { $ref: string };
// Schema接口
export interface Schema {
  type: SchemaTypes | string;
  const?: any;
  format?: string;
  default?: any;
  properties?: {
    [key: string]: Schema | SchemaRef;
  };
  items?: Schema | Schema[] | SchemaRef;
  dependencies?: {
    [key: string]: string[] | Schema | SchemaRef;
  };
  oneOf?: Schema[];
  // vjsf?: VueJsonSchemaConfig;
  required?: string[];
  enum?: any[];
  enumKeyValue?: any[];
  additionalProperties?: any;
  additionalItems?: Schema;
}

export const FieldPropsDefine = {
  schema: {
    type: Object as PropType<Schema>,
    required: true
  },
  value: {
    required: true
  },
  onChange: {
    type: Function as PropType<(v: any) => void>,
    required: true
  }
} as const; // 必须声明为const只读 这样required属性值才会生效 也就是必填项
