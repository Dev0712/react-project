import { Outlet, Link } from "react-router-dom";
import './layout.css';
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
    <ul>
      
      <li style={{paddingRight:"800px", color:"red",fontSize:"50px"}}></li>
      <li><img src="" alt="msg"/></li>
      <li style={{}}><img src="" alt="msg"/></li>
      
    
    </ul>
    
    

      <nav style={{border:"2px solid black"}}>
        <ul>
          
        <li >
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/workers">Workers</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>

        
         <input  type="text"  placeholder="search" />
          <input type="submit" />
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer/>
    </>
  )
};

export default Layout;