import {Link } from "react-router-dom";

export default function Work()
{
  return(<>
  <h3>Select type of work</h3>

  <nav >
        <ul>
          
        <li >
            <Link to="/">Plumbing</Link>
          </li>
          <li>
            <Link to="/about">Rajmistri</Link>
          </li>
          <li>
            <Link to="/contact">Labour</Link>
          </li>
        
          <li>
            <Link to="/work">Tiles</Link>
          </li>
          <li>
            <Link to="/worker">Light Fitting</Link>
          </li>
          <li>
            <Link to="/worker">RCC</Link>
            </li>

        </ul>
      </nav>


  </>);
}