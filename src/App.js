
import './App.css';
import Navbar from './components/inner';
import TextPlace from './components/TextPlace';
// let a = <img src="public/logo512.png" alt="" />
// let a ='pink'

function App() {
  return (
    <>
    <Navbar name = "Textutils" about="About Us"/>
    <div className="container ">
      <TextPlace head="Enter the text to be analysed"/>
    </div>
      


     
  
    </>
   
  );
}

export default App;
