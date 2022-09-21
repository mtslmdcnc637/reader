import { useEffect, useState } from 'react'
import style from './css/DisplayPaused.module.css'
function DisplayPaused (props){
    var getTextVar = props.textReceived
    const [termOne, setTermOne] = useState()
    const [termTwo, setTermTwo] = useState()
    const [termThree, setTermThree] = useState()
    const [termFour, setTermFour] = useState()
    const [termFive, setTermFive] = useState()
    const [place, setPlace] = useState()

    var amount = getTextVar.length
    var total_time = amount/props.ppm
        total_time = Math.ceil(total_time)+" min"

        useEffect(()=>{

            var current_word = sessionStorage.getItem("current_word")
            var vel = props.ppm
            var vel = 1000/(vel/60)
            var n = parseInt(current_word) 
            setTermThree(getTextVar[n])
            setPlace(n+1)
            if( n-2 > 0){setTermOne(getTextVar[n-2])}else{setTermOne()}
            if( n-1 > 0){setTermTwo(getTextVar[n-1])}else{setTermTwo()}
            if( n+1 < getTextVar.length ){setTermFour(getTextVar[n+1])}else{setTermFour()}
            if( n+2 < getTextVar.length){setTermFive(getTextVar[n+2])}else{setTermFive()}
            
        },[])
    
   
    return (
        <>
            <div className={style.conteiner}>
                <div className={style.words}>
                    <h2 className={style.shadow}></h2><h1>{termThree}</h1><h2 className={style.shadow}></h2>
                </div>
                <span className={style.place}>{place}/{amount} | Tempo estimado de leitura: {total_time}</span>

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