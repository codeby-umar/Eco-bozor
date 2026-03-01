import { GrLinkNext } from "react-icons/gr"; 

function Buttons({bg , color , w}) {
  return (
    <div>
        <button style={{color : color , background : bg , width : w }} type="submit" className="flex items-center font-semibold rounded-4xl gap-4 p-4.5 justify-center">Shop now <GrLinkNext size={"23px"} /></button>
    </div>
  )
}

export default Buttons