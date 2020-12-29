import { defineComponent } from "vue";
import NumberField from "./fields/NumberField.vue";
import StringField from "./fields/StringField.vue";
import { SchemaTypes, FieldPropsDefine } from "./types";
export default defineComponent({
  name: "SchemaItem",
  props: FieldPropsDefine,
  setup(props) {
    return () => {
      const { schema } = props;
      // Type没有指定 需要猜测用户输入
      const type = schema.type;
      let Component: any;
      switch (type) {
        case SchemaTypes.STRING:
          Component = StringField;
          break;
        case SchemaTypes.NUMBER:
          Component = NumberField;
          break;
        default: {
          console.warn(`${type} is not supported`);
        }
      }
      return <Component {...props} />;
    };
  }
});
