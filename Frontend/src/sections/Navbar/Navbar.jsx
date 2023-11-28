import './Navbar.css'

import { Link } from 'react-router-dom';
import { NavItem } from '../../components/index';
import logo from '../../assets/images/logo.jpg' ;

{/*import {ShoppingCart} from 'phosphor-react'; */ }
const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-sm sticky-top">
 <div className="container-fluid">
   {/*<Link className="navbar-brand textNavIteam" to="#">Logo</Link>*/} 
  {/* <img src={logo} width="150"/> */ }
  <Link className="nav-link textNavIteam" to="/Cart"> <img src={logo} width="150"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
      <NavItem>
        <Link className="nav-link textNavIteam" to="/">Shop</Link>
        </NavItem>
        <NavItem>
       
        </NavItem>
        <NavItem>
        <Link className="nav-link textNavIteam" to="#">Link</Link>
        </NavItem>
        <li className="nav-item dropdown textNavIteam">
          <Link className="nav-link dropdown-toggle textNavIteam" to="#" role="button" data-bs-toggle="dropdown">Dropdown</Link>
          <ul className="dropdown-menu dropdown-color">
            <li><Link className="dropdown-item " to="#">Link</Link></li>
            <li><Link className="dropdown-item" to="#">Another link</Link></li>
            <li><Link className="dropdown-item" to="#">A third link</Link></li>
          </ul>
        </li>
      </ul>
    </div>
</div>

</nav>
  )
}

export default Navbar