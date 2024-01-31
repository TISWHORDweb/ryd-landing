import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Icons = (props) => {
   const numOfIcons=props.numberOfIcon;
  return (
    <div>
      {Array.from({ length: numOfIcons }, (_, index) => (
        <FontAwesomeIcon icon={faStar} key={index}/>
      ))}
    </div>
  )
}

export default Icons
