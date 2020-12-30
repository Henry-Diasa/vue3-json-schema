import { computed, defineComponent } from "vue";
import component from "./fields/NumberField.vue";
import NumberField from "./fields/NumberField.vue";
import StringField from "./fields/StringField.vue";
import ObjectField from "./fields/ObjectField";
import ArrayField from "./fields/ArrayField";
import { SchemaTypes, FieldPropsDefine } from "./types";
import { retrieveSchema } from "./utils";
export default defineComponent({
  name: "SchemaItem",
  props: FieldPropsDefine,
  setup(props) {
    // 计算属性 防止每次渲染都需要重新生成函数
    const retrievedSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props;
      return retrieveSchema(schema, rootSchema, value);
    });
    return () => {
      const { schema, rootSchema, value } = props;
      const retrievedSchema = retrievedSchemaRef.value;
      const type = schema.type;
      let Component: any;
      switch (type) {
        case SchemaTypes.STRING:
          Component = StringField;
          break;
        case SchemaTypes.NUMBER:
          Component = NumberField;
          break;
        case SchemaTypes.OBJECT:
          Component = ObjectField;
          break;
        case SchemaTypes.ARRAY:
          Component = ArrayField;
          break;
        default: {
          console.warn(`${type} is not supported`);
        }
      }
      return <Component {...props} schema={retrievedSchema} />;
    };
  }
});
