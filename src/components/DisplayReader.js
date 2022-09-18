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
    var vel = props.ppm
    var vel = 1000/(vel/60)
    console.log(vel)
    
       var n = 0 
       setPlay("play")
        document.documentElement.requestFullscreen() 
        const timer = setInterval(function(){
        if(n < getTextVar.length ){
            setTermThree(getTextVar[n])

            if( n-2 > 0){setTermOne(getTextVar[n-2])}else{setTermOne()}
            if( n-1 > 0){setTermTwo(getTextVar[n-1])}else{setTermTwo()}
            if( n+1 < getTextVar.length ){setTermFour(getTextVar[n-1])}else{setTermFour()}
            if( n+2 < getTextVar.length){setTermFive(getTextVar[n-1])}else{setTermFive()}
           
        n++
            
    }else{
            clearInterval(timer)
        }
    },vel)
    },[])
    
   
    return (
        <>
            <div className={style.conteiner}>
                <div className={style.words}>
                    <h2 className={style.shadow}></h2><h1>{termThree}</h1><h2 className={style.shadow}></h2>
                </div>
                
                {play==="play" &&(<button className={style.pp} onClick={()=>{setPlay("pause")}}>| |</button>)}
                {play ==="pause" &&(<button className={style.pp} onClick={()=>{setPlay("play")}}>0</button>)}
                <p className={style.line}>
                     {termOne && (termOne)+" "} 
                     {termTwo && (termTwo)+" "} 
                     {termThree && (termThree)+" "} 
                     {termFour && (termFour)+" "} 
                     {termFive && (termFive)+" "} 
                     </p>
            </div>
        </>
    )
}
export default DisplayReader