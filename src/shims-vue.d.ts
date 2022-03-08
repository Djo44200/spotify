declare module "*.vue" {
  import Vue from "vue";

  export default Vue;
}

declare module "video.js";
declare module "vue-tag-commander";
declare module "pdfjs-dist";
declare module "qs";
declare module "vue-virtual-scroller";
// declare module 'graphql/error/GraphQLError';
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
