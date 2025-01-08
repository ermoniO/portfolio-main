export const NavBar = () => {

  //useState
//Once window.scrollY set function accordingly to change the navbar

  return ( 
    <>
    
    <ul className="p-3 pb-11 rounded-md" style={{width: 400, height: 20, position: "relative", zIndex: 1}}>
      <li className="text-white text-md p-3" style={{display: "inline"}}><a href="#home">Home</a></li>
      <li className="text-white text-md p-3" style={{display: "inline"}}><a href="#skills">Skills</a></li>
      <li className="text-white text-md p-3" style={{display: "inline"}}><a href="#skills">About</a></li>
      <li className="text-white text-md p-3" style={{display: "inline"}}><a href="#skills">Resume</a></li>
      <li className="text-white text-md p-3" style={{display: "inline"}}><a href="#services">Services</a></li>
      <li className="text-white text-md p-3" style={{display: "inline"}}><a href="#portfolio">Portfolio</a></li>
      <li className="text-white text-md p-3" style={{display: "inline"}}><a href="#contact">Contact</a></li>
    </ul> 
 

    {/* <div className="bg-purple-500 flex justify-center items-center justify-items-center ">
      <div>logo</div>

      <div className="flex">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      </div>
    </div> */}
{/* 
    <div className="bg-purple-300 h-11 flex justify-between p-5 ">
     <div>Logo</div> 
     <div className="z-10">
    <div>Home</div>
    <div>Skills</div>
    <div>Portfolio</div>
    <div>Contact</div>
    </div>
    </div> */}
</>
  )
}
