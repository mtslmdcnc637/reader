import { useCallback, useEffect, useMemo, useState } from 'react'
import { AiFillPauseCircle } from "react-icons/ai";

import style from './css/DisplayReader.module.css'
function DisplayReader (props){
    
    const [termThree, setTermThree] = useState()
    const [playLocal, setPlayLocal] = useState(props.play)
    const [num, setNum] = useState(parseInt(props.nWord))
    
    var textLocal = props.text
    var splitedText = textLocal.split(" ")
    
    
        var ppmLocal = parseInt(props.ppm)
        props.setPlay("play")
        var amount = splitedText.length
        props.setSize(amount)
        var total_time = amount/parseInt(ppmLocal) // tempo total = a quantidade de palavras dividido pela velocidade
        total_time = Math.ceil(total_time)+" min"
        localStorage.setItem("text", textLocal)
        localStorage.setItem("ppm", ppmLocal)
            var vel = 1000/(ppmLocal/60)
            vel = Math.ceil(vel) 
            
        const timer = useMemo(()=>{ setInterval(function(){ 
                            if(num < splitedText.length){ 
                                setNum(prev => prev + 1)
                                
                            }else{
                                clearInterval(timer)
                            }
                        
                    },vel)
                },[])
    useEffect(()=>{
        if(props.play == "play"){
        setTermThree(splitedText[num])
        localStorage.setItem("nWord", num)
        props.setN(num)
        props.setWord(splitedText[num])
        props.setWord1(splitedText[num+1])
        props.setWord2(splitedText[num+2])
        props.setWord_1(splitedText[num-1])
        props.setWord_2(splitedText[num-2])
        
    }
    },[num])
   
    return (
        <>
            <div className={style.conteiner} onClick={()=>{props.setPlay("pause")}}>
                <div className={style.words}>
                    <h2 className={style.shadow}></h2><h1>{termThree}</h1><h2 className={style.shadow}></h2>
                </div>
            </div>
            
            
        
        </>
    )
}
export default DisplayReader