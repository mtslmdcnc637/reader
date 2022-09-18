import { useEffect, useState } from 'react'
import style from './css/DisplayReader.module.css'
function DisplayReader (props){
    var getTextVar = props.textReceived
    const [termOne, setTermOne] = useState()
    const [termTwo, setTermTwo] = useState()
    const [termThree, setTermThree] = useState()
    const [termFour, setTermFour] = useState()
    const [termFive, setTermFive] = useState()
    const [play, setPlay] = useState()
    
    useEffect(()=>{
       var n = 0 
       setPlay("play")
        document.documentElement.requestFullscreen() 
        const timer = setInterval(function(){
        
        if(n < getTextVar.length ){
            
            //setTermOne(getTextVar[n-2])
            //setTerm(getTextVar[n-1])
            setTermThree(getTextVar[n])
            //setTermFour(getTextVar[n+1])
            //setTermFive(getTextVar[n+2])
           
        n++
            
    }else{
            clearInterval(timer)
        }
    },300)
    },[])
    
   
    return (
        <>
            <div className={style.conteiner}>
                <div className={style.words}>
                    <h2 className={style.shadow}></h2><h1>{termThree}</h1><h2 className={style.shadow}></h2>
                </div>
                
                {play==="play" &&(<button className={style.pp} onClick={()=>{setPlay("pause")}}>| |</button>)}
                {play ==="pause" &&(<button className={style.pp} onClick={()=>{setPlay("play")}}>0</button>)}
                <p className={style.line}></p>
            </div>
        </>
    )
}
export default DisplayReader