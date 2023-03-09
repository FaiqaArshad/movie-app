import Cardcomponent from "./components/card";
import { connect } from "react-redux";

import { Row,  } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./store";
import { Button, Input, Space, Pagination } from "antd";
import { useState } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import MovieComponent from "./components/movie";
const App = () => {
 
  
  // let persistor = persistStore(store)

  return (
    <>
     <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
    <MovieComponent/>
    {/* </PersistGate> */}
  </Provider>
  </>
  );
};

export default App;
