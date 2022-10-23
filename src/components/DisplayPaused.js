import { useEffect, useState } from 'react'
import style from './css/DisplayPaused.module.css'
import { AiFillPlayCircle } from "react-icons/ai";
function DisplayPaused (props){
    const [termOne, setTermOne] = useState()
    const [termTwo, setTermTwo] = useState()
    const [termThree, setTermThree] = useState()
    const [termFour, setTermFour] = useState()
    const [termFive, setTermFive] = useState()
    var amount = ((props.text).split(" ")).length
    const n_local = props.n
    var total_time = amount/props.ppm
        total_time = Math.ceil(total_time)+" min"
    
        useEffect(()=>{
            var vel = props.ppm
            var vel = 1000/(vel/60)
            var n = parseInt(n_local) 
            setTermThree(props.word)
            
            if( n-2 > 0){setTermOne(props.word_2)}else{setTermOne()}
            if( n-1 > 0){setTermTwo(props.word_1)}else{setTermTwo()}
            if( n+1 < parseInt(props.size) ){setTermFour(props.word1)}else{setTermFour()}
            if( n+2 < parseInt(props.size)){setTermFive(props.word2)}else{setTermFive()}
            
        },[])
    
   
    return (
        <>
            <div className={style.conteiner} onClick={()=>{props.setPlay("play"); props.setN(n_local)}}>
                <div className={style.words} >
                    <h2 className={style.shadow}></h2><h1>{termThree}</h1><h2 className={style.shadow}></h2>
                </div>
                <span className={style.place}>{parseInt(props.n)+1}/{props.size} | Tempo estimado de leitura: {total_time}</span>

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
export default DisplayPaused