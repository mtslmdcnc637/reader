import Continue from "./Continue"
import Input from "./Input"

function Start(){
    const cache = localStorage.getItem("isText")
    if(cache){
        return(<Continue/>)  
    }else{
        return (<Input/>)
    }
    
}
export default Start