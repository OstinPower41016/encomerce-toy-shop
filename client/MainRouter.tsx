import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import TopHeader from "./shared/TopHeader/TopHeader";
import FixedHeader from "./shared/FixedHeader/FixedHeader";
const Home = lazy(() => import("./pages/Home"));

const MainRouter = () => {
  return (
    <>
      <TopHeader />
      <FixedHeader />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </>
  );
};
export default MainRouter;
