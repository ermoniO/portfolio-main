
interface Props {
   title: string,
   url: string,
//    children: React.ReactNode,
}

//Need to figure out to get the image prop to show without it just showing the link.
const SkillsCard = ({title, url}: Props) => {
  return (
    <div className="w-64 h-64 rounded-xl bg-slate-900 flex-col text-center">
        <img src={url}></img>
        <div className="text-2xl text-white">{title}</div>
        
    </div>
  )
}

export default SkillsCard