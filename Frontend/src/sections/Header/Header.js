import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    
        <header className="App-header">
      {/*   <h5 className='container-fluid textHeader '><i className="fa fa-phone" />+212 612110767</h5>
            
            <h5 className='container-fluid loginHeader '><i className="fa fa-phone" />+212 612110767</h5>
       */}       
            <div className="text-container">
  <p className="left-text"><h5 className='container-fluid textHeader '><i className="fa fa-phone" />+212 601010101</h5></p>
  <div className="right-text">

  <Link className="nav-link  textNavIteam" to="/Login">
    <button className="login-button login-icon"><i className="fas fa-sign-in-alt"></i>  
    <span className="login-text">Login</span>
     </button>
     </Link> 

  </div>
</div>
        </header>
    
  )
}

export default Header

 