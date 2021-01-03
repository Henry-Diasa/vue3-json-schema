import { shallowMount, mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import JsonSchemaForm, { NumberField, StringField } from "../../lib/index";

describe("ObjectField", () => {
  let schema: any;
  beforeEach(() => {
    schema = {
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
  });
  it("should render properties to correct fields", async () => {
    const wrapper = mount(JsonSchemaForm, {
      props: {
        schema,

        value: {},
        onChange: () => {
          console.log(124);
        }
      }
    });

    const strField = wrapper.findComponent(StringField);
    const numField = wrapper.findComponent(NumberField);
    expect(strField.exists()).toBeTruthy();
    expect(numField.exists()).toBeTruthy();
  });

  it("should change value when sub fields trigger", async () => {
    let value: any = {};
    const wrapper = mount(JsonSchemaForm, {
      props: {
        schema,
        value: value,
        onChange: (v: any) => {
          value = v;
        }
      }
    });

    const strField = wrapper.findComponent(StringField);
    const numField = wrapper.findComponent(NumberField);

    await strField.props("onChange")("1");
    expect(value.name).toEqual("1");

    await numField.props("onChange")(1);
    expect(value.age).toEqual(1);
  });
});
