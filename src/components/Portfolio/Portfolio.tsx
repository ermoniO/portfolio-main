import SkillsCard from "../Cards/SkillsCard"


const Portfolio = () => {
  return (
    <>
    <div>
    <div className="flex justify-center bg-slate-800 pb-11 mb-11 pt-11 mt-11">
      <div className="bg-slate-800 flex justify-center">
          <div className="text-7xl pr-10 text-white mt-11"><span className="text-pink-500">My</span><br/> Portfolio</div>
            <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full pl-11 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] shadow-blue-500/20 overflow-hidden" style={{ width: "400px", height: "300px" }}>
            <img className="mr-11"src="src/assets/cartoonImage.png" />
          </div>
        </div>
    </div>
  </div>

  


  <div className="flex flex-wrap justify-center gap-x-8 pt-10 m-10">
      <div className ="bg-slate-900 flex justify-center rounded-lg text-white text-5xl pt-5 shadow-2xl flex-wrap" style={{height:600, width:2000}}>Projects
        <div className="w-full flex flex-wrap justify-around">
          <SkillsCard title="Placeholder" url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"></SkillsCard> 
          <SkillsCard title="Placeholder" url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"></SkillsCard>
          <SkillsCard title="Placeholder" url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"></SkillsCard>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1E293B" fill-opacity="1" d="M0,64L48,106.7C96,149,192,235,288,261.3C384,288,480,256,576,245.3C672,235,768,245,864,234.7C960,224,1056,192,1152,170.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
      </div>
  </div>
    </>
  )
}

export default Portfolio