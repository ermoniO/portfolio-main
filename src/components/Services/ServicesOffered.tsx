import {BiCodeAlt, BiUser} from 'react-icons/Bi'
import {PiPaintBrushBroadBold} from 'react-icons/Pi'


const ServicesOffered = () => {
  return (
    <div className="flex justify-center gap-x-8 pb-11 mb-11">
     
      <div className ="flex justify-center text-white text-2xl pt-5  bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 rounded-lg pl-11 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" style={{height:600, width:500}}><BiUser color="white" size="75" className="bg-pink-600 rounded-full"/>Collaboration</div>
      
      <div className ="flex justify-center text-white text-2xl pt-5  bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 rounded-lg pl-11 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" style={{height:600, width:500}}> <PiPaintBrushBroadBold color="white" size="75" className="bg-pink-600 rounded-full"/>Website Design</div>
      
      <div className ="flex justify-center text-white text-2xl pt-5  bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 rounded-lg pl-11 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" style={{height:600, width:500}}><BiCodeAlt color="white" size="75" className="bg-pink-600 rounded-full" />Web development</div>
    </div>
  )
} 

export default ServicesOffered


// Center it within a container 
// <div className="relative flex items-center py-5">
// <div className="flex-grow border-t border-gray-400"></div>
// <span className="mx-4 flex-shrink text-gray-400">Content</span>
// <div className="flex-grow border-t border-gray-400"></div>
// </div>