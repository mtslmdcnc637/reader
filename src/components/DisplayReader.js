import { useEffect, useState } from 'react'
import style from './css/DisplayReader.module.css'
function DisplayReader (props){
    var getTextVar = props.textReceived
    const [termThree, setTermThree] = useState()
    const [place, setPlace] = useState()
    var amount = getTextVar.length
    var total_time = amount/props.ppm
        total_time = Math.ceil(total_time)+" min"
        useEffect(()=>{
            var vel = props.ppm
            var vel = 1000/(vel/60)
            var n = 0
            var continue_play = sessionStorage.getItem("current_word")
            if(continue_play){n = parseInt(continue_play)}else{var n = 0}
            
            
            const timer = setInterval(function(){
            
            
                if(n < getTextVar.length){
            setPlace(n+1)
            setTermThree(getTextVar[n])
            var paused = sessionStorage.getItem("paused")
            localStorage.setItem("nWord", n)
            if(!paused){
            sessionStorage.setItem("current_word", n)
            
            }
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
            </div>
        </>
    )
}
export default DisplayReader