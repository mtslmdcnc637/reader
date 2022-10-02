import { useEffect, useState } from "react"
import Begin from "./Begin"
import DisplayReader from "./DisplayReader"
import style from './css/VerifyPreviousText.module.css'
import { Route, Router } from "react-router-dom"


function VerifyPreviousText(){
    
    const text = localStorage.getItem("text") //constante vai conter o texto recuperado da memoria
    const nWord = localStorage.getItem("nWord") // vai conter o numero(indice) d palavra onde a pessoa parou anteriormente
    
        return (
            <>
                
                {text && (<Begin text={text} nWord={nWord}/>)}
                {!text && (<Begin/>)}
            </>
        )
    
    
  

}
export default VerifyPreviousText