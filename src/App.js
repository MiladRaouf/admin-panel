import { Fragment, useContext, useState } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { MenuContext } from "./MenuContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const context = useContext(MenuContext);

  return (
    <BrowserRouter>
      <Fragment>
        <MenuContext.Provider value={{ showMenu, setShowMenu }}>
          <Sidebar />
          <Content />
        </MenuContext.Provider>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;