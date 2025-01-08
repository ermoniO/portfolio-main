import cartoonImage from '../../assets/cartoonImage.png'
const Resume = () => {
  return (
    // <div className="flex justify-center pt-11 mt-11 bg-white">
    // <div className="Grid bg-red-400 w-96 h-96 grid-cols-3 gap-4">
    //     <div className="bg-yellow-500">content</div>
    //     <div>content 2</div>
    //     <div>content 3</div>
    // </div>
    // </div>
<>
<div>
    <div className=" flex justify-center bg-slate-800 pb-11 mb-11 pt-11 mt-11">
      <div className="bg-slate-800 flex justify-center">
          <div className="text-7xl pr-10 text-white mt-11"><span className="text-pink-500">My</span><br /> Resume</div>
            <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full pl-11 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] shadow-blue-500/20 overflow-hidden" style={{ width: "400px", height: "300px" }}>
            <img className="mr-11"src={cartoonImage} />
          </div>
        </div>
    </div>
  </div>

    <div className="flex justify-center gap-x-8 pt-10 m-10">
      <div className ="bg-slate-900 flex justify-center rounded-lg  text-white text-2xl pt-5 shadow-2xl" style={{height:600, width:800}}>Web Development</div>
      <div className ="bg-slate-900 flex justify-center rounded-lg text-white text-2xl pt-5" style={{height:600, width:800}}>Design</div>
    </div>
      </>
  )
}

export default Resume