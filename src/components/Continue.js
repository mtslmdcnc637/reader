import style from './css/Continue.module.css'
import {useState} from 'react'
import Input from './Input';
    
function Continue (){
    const [word,setWord]= useState();
    const [full, setFull] = useState();
    const [section, setSection] = useState()
    setSection(localStorage.getItem("isText"))
    
    if(section){
    return (<>
    
        <div className={style.continue}>
        <h1>Deseja continuar a leitura anterior?</h1>
        <div className={style.options}>
        <button className={style.yes} onClick={restorePreviousText}>Sim</button>
        <button className={style.no} onClick={deletePreviousText}>Não</button>
        </div></div>
    

    </>
    )}else{
        return(<Input/>)
    }

    

    
function deletePreviousText(){
    localStorage.clear()
    setSection()

}
function restorePreviousText(){
    
    const previousText = localStorage.getItem("previousText")
    var n = localStorage.getItem("nWord")

    var text = previousText.split(" ")
    document.documentElement.requestFullscreen()
    setFull("Ligado")

    var interval = setInterval(function(){
        if(n < (text.length)){
            setWord(text[n])
            localStorage.setItem("nWord",n)
            n++
        }else{
            clearInterval(interval);
            localStorage.clear()
        }
    })
    return (
        <>
            {full && (
                <div className={style.ativo}>{word} <button onClick={(e) => {setFull()}}>X</button></div>
            )
            }
        </>
    )
}

}
export default Continue