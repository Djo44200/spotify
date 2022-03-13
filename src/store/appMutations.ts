import type { CHOICENAV } from "@/models/RouterType";

const setRouterView = (state: any, router: CHOICENAV) => {
    state.routerSelected = router;
  };

export {setRouterView};
