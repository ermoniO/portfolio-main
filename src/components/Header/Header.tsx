import Button from "../Cards/Button";


const Header = () => {

    return (
<>
    
        <div className="m-auto grid grid-cols-1 place-content-center bg-slate-800" style={{position: 'relative', width: "1200px", height: "500px" }}>
            
            <div className="pl-5">
                <p className="text-3xl text-indigo-400 pb-3">
                    Hello! <span className="text-slate-50">My Name is </span>
                </p>

            <h1 className="text-7xl text-slate-50 pb-4" > 
                <span className ="text-pink-500">Ermoni</span> Osborne</h1>

            <h3 className="text-3xl text-slate-50">
                I am a <span className="text-indigo-400"> Software Engineer...</span>
            </h3>
           <Button />
            
        </div>


            {/* Circle Image */}
            <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full pl-11 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] shadow-blue-500/20 overflow-hidde" style={{position: 'absolute', right:0, top:20, width: "500px", height: "450px" }}>
           
                <img className="ml-11 pt-5 absolute right-1" src="src/assets/me.png" />
            </div>

            </div>
</>
        
    )
}

export default Header;
