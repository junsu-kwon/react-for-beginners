import { useState } from "react";

function SideBar() {

  const [isSelect, setIsSelect] = useState(true);
  
  return (
    <ul>
      <li class>메뉴1</li>
      <li>메뉴2</li>
    </ul>
  );
}

export default SideBar;