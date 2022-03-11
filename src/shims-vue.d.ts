import { Store } from "@/store"; // path to store file
import VueRouter from "vue-router";

declare module "*.vue" {
  import Vue from "vue";

  export default Vue;
}

declare module "qs";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store;
    $router: VueRouter;
  }
}
declare module "graphql/language/ast" {
  export type DocumentNode = any;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.json" {
  const value: any;
  export default value;
}
