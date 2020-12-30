import { inject } from "vue";
export const SchemaFormContextKey = Symbol();

import { CommonFieldType } from "./types";

export function useVJSFContext() {
  const context: { SchemaItem: CommonFieldType } | undefined = inject(
    SchemaFormContextKey
  );
  if (!context) {
    throw Error("SchemaForm should be used");
  }
  return context;
}
