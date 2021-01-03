import { shallowMount, mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import JsonSchemaForm, {
  NumberField,
  StringField,
  ArrayField
} from "../../lib/index";

describe("ArraytField", () => {
  it("should render multi type", () => {
    const wrapper = mount(JsonSchemaForm, {
      props: {
        schema: {
          type: "array",
          items: [
            {
              type: "string"
            },
            {
              type: "number"
            }
          ]
        },
        value: [],
        onChange: () => {
          console.log(234);
        }
      }
    });

    const arr = wrapper.findComponent(ArrayField);
    const str = arr.findComponent(StringField);
    const num = arr.findComponent(NumberField);

    expect(str.exists()).toBeTruthy();
    expect(num.exists()).toBeTruthy();
  });

  it("should render single type", () => {
    const wrapper = mount(JsonSchemaForm, {
      props: {
        schema: {
          type: "array",
          items: {
            type: "string"
          }
        },
        value: ["1", "2"],
        onChange: () => {
          console.log(123);
        }
      }
    });

    const arr = wrapper.findComponent(ArrayField);
    const strs = arr.findAllComponents(StringField);

    expect(strs.length).toBe(2);
    expect(strs[0].props("value")).toBe("1");
  });
});
