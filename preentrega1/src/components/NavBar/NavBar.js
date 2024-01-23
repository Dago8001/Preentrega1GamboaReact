import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
    return (
      <div>
        <h1>
            Tienda On Line
        </h1>
        <nav>
          <ul>
            <li>Camisas</li>
            <li>Pantalones</li>
            <li>Faldas</li>
          </ul>
          <CartWidget/>
        </nav>
        
      </div>
      
    );
  };
  
  export default NavBar;