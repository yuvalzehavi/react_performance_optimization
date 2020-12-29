import React from "react";

import ComponentsContainer from "../general/menuContainers/ComponentsContainer";
import ComponentsMenu from "../general/menuContainers/ComponentsMenu";
import componentsDictionary from "./componentsDictionary";
import menuItems from "./menuItems";

export default () => {
  return (
    <>
      <ComponentsMenu menuItems={menuItems} />
      <ComponentsContainer componentsDictionary={componentsDictionary} />
    </>
  );
};
