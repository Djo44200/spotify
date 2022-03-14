import type { CHOICENAV } from "@/models/RouterType";

const changeRouterView = (context: any, router: CHOICENAV) => {
  context.commit("setRouterView", router);
};

export { changeRouterView };
