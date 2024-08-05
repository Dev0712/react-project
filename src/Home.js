
import Card from './Card';
import Wdata from './Wdata';

 export default function Home(){
  return(
    <><h1>this is home page</h1>
  
      <Card imgsrc={Wdata[0].imgscr}  wName={Wdata[0].wName} price={Wdata[0].price}/>
      <Card imgsrc={Wdata[1].imgscr}  wName={Wdata[1].wName} price={Wdata[1].price}/>
      <Card imgsrc={Wdata[2].imgscr}  wName={Wdata[2].wName} price={Wdata[2].price}/>
      <Card imgsrc={Wdata[3].imgscr}  wName={Wdata[3].wName} price={Wdata[3].price}/>
      <Card imgsrc={Wdata[4].imgscr}  wName={Wdata[4].wName} price={Wdata[4].price}/>
    </>
  );
 }