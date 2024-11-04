import React from 'react'
import PropTypes from 'prop-types'
// import Cpallet from './Cpallet'
// import { Link } from 'react-router-dom'


function Navbar(props) {
 


// const [present , setPresent] = useState(
//   {
//     backgroundColor:"white",
//     color: "black",
//     border: "1px solid white"
//   }
// )
  
  // const [lt , setLt] = useState("Light")
  // const handleMode = ()=>
  // {
  //   if(present.backgroundColor === "white")
  //   {
  //     setPresent(
  //       {
  //         backgroundColor:"black",
  //         color: "white",  
               
          
  //       }       
  //     )
  //     setLt("Dark")
  //   }
  //   else
  //   {
  //     setPresent(
  //       {
  //         backgroundColor:"white",
  //         color: "black",
      
  //       }
  //     )
  //     setLt("Light")
  //   }

  // }
  return (
    <nav className={`navbar navbar-expand-lg  text-${props.mode ==="light"?"dark":"light"} my-3`} style={{backgroundColor:props.mode ==="light"?"white" :"rgb(23,49,88)"} }>
    <div className="container-fluid " >
      <a className={`navbar-brand text-${props.mode ==="light"?"dark":"light"}`} href="#" >{props.name}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
          <li className="nav-item" >
            {/* <Link className={`nav-link active text-${props.mode ==="light"?"dark":"light"}`} aria-current="page" to="/">Home</Link> */}
            <a className={`nav-link active text-${props.mode ==="light"?"dark":"light"}`} aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item" >
          <a className={`nav-link text-${props.mode ==="light"?"dark":"light"} `} href="#">{props.about}</a>

          
            {/* <Link className={`nav-link text-${props.mode ==="light"?"dark":"light"} `} to="/about">{props.about}</Link> */}
          </li>
         
        </ul>
        {/* <div className='mx-3' >
        <button type="button" className"btn btn-light" onClick={handleMode} >{lt}</button>
        </div> */}
        {/* <form className="d-flex" role="search" >
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      {/* <Cpallet/> */}

      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.fun}/>
        <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault">Enable {props.mode} Mode</label>
      </div>
      </div>
    </div>
  </nav>
  )
}

// eslint-disable-next-line react/no-typos
Navbar.propTypes = {
    name : PropTypes.string.isRequired,
    about :PropTypes.string,



}
// Navbar.defaultProps =
// {
//     name :"KIRAN",
//     about: ".....",
// }


export default Navbar




