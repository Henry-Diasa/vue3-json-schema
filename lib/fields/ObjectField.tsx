import {
  defineComponent,
  inject,
  DefineComponent,
  ExtractPropTypes
} from "vue";
import { FieldPropsDefine, CommonFieldType } from "../types";
import { SchemaFormContextKey, useVJSFContext } from "../context";
import { isObject } from "../utils";
const schema = {
  type: "object",
  properties: {
    name: {
      type: "string"
    },
    age: {
      type: "number"
    }
  }
};

export default defineComponent({
  name: "ObjectField",
  props: FieldPropsDefine,
  setup(props) {
    const context = useVJSFContext();
    const handleObjectFieldChange = (key: string, v: string) => {
      const value: any = isObject(props.value) ? props.value : {};
      if (v === undefined) {
        delete value[key];
      } else {
        value[key] = v;
      }
      props.onChange(value);
    };
    return () => {
      const { schema, rootSchema, value } = props;
      const { SchemaItem } = context;
      const properties = schema.properties || {};
      const currentValue: any = isObject(value) ? value : {};
      return Object.keys(properties).map((k: string, index: number) => (
        <SchemaItem
          onChange={(v: any) => handleObjectFieldChange(k, v)}
          schema={properties[k]}
          rootSchema={rootSchema}
          value={currentValue[k]}
          key={index}
        />
      ));
    };
  }
});
