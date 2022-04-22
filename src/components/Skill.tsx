import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SkillParams {
    image : string,
    name : string,
    experience : string,
    charging : boolean
}

const Skill = ({image,name,experience,charging}:SkillParams):JSX.Element => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/projects');
    }
  return (
    <div className="div-skill">
        {charging ? <Skeleton width={300} height={150}/> : <img src={image} alt="Technology skill" className="skill-image" onClick={handleNavigate}/>}
        <div className="skill-content">
        <h2>{charging ? <Skeleton /> : name}</h2>
        <p>{charging ? <Skeleton /> : experience}</p>
        </div>
    </div>
  )
}

export default Skill