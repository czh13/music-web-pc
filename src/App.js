import React, { memo } from "react";

import routes from "./router";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

import MusicFooter from "./components/MusicFooter";
import MusicHeader from "./components/MusicHeader";

import { Provider } from "react-redux";
import store from "./store";

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <MusicHeader></MusicHeader>
        {renderRoutes(routes)}
        <MusicFooter></MusicFooter>
      </HashRouter>
    </Provider>
  );
});

export default App;
