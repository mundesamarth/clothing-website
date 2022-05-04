import { Route, Routes } from "react-router-dom";

import Home from "../src/Route/Home/home.components";
import NavigationBar from "../src/Route/Navigation/navigation.components";

const Shop = () => {
  return <h1>This is shop component</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
