import { useState } from "react";
import MenuItems from "./MenuItems";

const MenuContainers = () => {
    const [menu, setMenu] = useState(MenuItems);
    return ( 
    <div className="container">
      {menu.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <p>{item.price}</p>
          <img src={item.img} alt={item.title} />
        </div>
      ))}
    </div>
     );
}

export default MenuContainers;