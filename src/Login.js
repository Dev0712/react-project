import { Link } from "react-router-dom"
export default function(){
  return(
    <div style={{border:" 1px solid black"}}>
      
      <h2>Welcome to Login Page</h2><form>
      <label>Enter your Mobile Number</label>
      <input type="text"></input><br/>

      <label>Enter your Password</label>
      <input type="text"></input><br/>
      <Link to="/home"><button >Login</button></Link>
      <Link to="/register"><button >Rrgister as New Worker</button></Link>
      </form>
      </div>
  )
}