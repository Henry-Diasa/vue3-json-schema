import { defineComponent } from "vue";
import { FieldPropsDefine } from "../types";
import { useVJSFContext } from "../context";
/** 三种情况
 * {
 *     items: {type: string}
 * }
 *
 * {
 *  items:[
 *     {type: string}
 *     {type: number}
 *  ]
 * }
 *
 * {
 *  items:{
 *      type: string
 *      enum: ['1','2']
 *  }
 * }
 */
export default defineComponent({
  name: "ArrayField",
  props: FieldPropsDefine,
  setup(props) {
    const context = useVJSFContext();
    return () => {
      const SchemaItem = context.SchemaItem;
    };
  }
});
