import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Shop from "./layouts/Shop";
import Sofas from "./layouts/Sofas";
import SofasProduct from "./layouts/SofasProduct";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./layouts/Cart";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Routes>
            <Route path="/test2_idocnet/" element={<Shop />}></Route>
            <Route path="/test2_idocnet/sofas" element={<Sofas />}></Route>
            <Route path="/test2_idocnet/cart" element={<Cart />}></Route>
            <Route
              path="/test2_idocnet/sofasproduct"
              element={<SofasProduct />}
            ></Route>
          </Routes>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
