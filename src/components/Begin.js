import style from './css/Begin.module.css'
import { BsTelegram, BsInstagram, BsDiscord, BsWhatsapp } from "react-icons/bs";
import {useState, useEffect} from 'react'
import DisplayReader from './DisplayReader';
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillPauseCircle } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import DisplayPaused from './DisplayPaused';
function Begin (){
    useEffect(()=>{
        sessionStorage.removeItem("current_word")
    },[])
    const [ppm, setPpm] = useState()
    var textStable
    const [textState, setTextState] = useState()
    const [load, setLoad] = useState()
    const [play, setPlay] = useState()
    function getText(e){
        e.preventDefault();
        setLoad("load")
        document.documentElement.requestFullscreen() 
        
        setTimeout(() => {
            setLoad()
            var textStable = e.target.text.value
            textStable = textStable.split(" ")
            var getPpm = e.target.ppm.value
            setPpm(getPpm)
            setTextState(textStable) 
            setPlay("play")
        }, 3000);   
    }

    function close(){
        setTextState()
        document.exitFullscreen()
        setPlay()
        sessionStorage.clear()
    }
    var previous_text = localStorage.getItem("text")

    return (
    <>
    
        {!textState && !load && !previous_text &&(
             <div className={style.body}>
             <div className={style.bg}>
                 <h5>Leitura Ninja</h5>
                 <p>Bem-vindo! Leitura ninja é a mais nova ferramenta brasileira com objetivo acelerar a leitura de textos grandes. Você só precisa colar seu texto na área indicada, escolher a velocidade de leitura e apertar o play</p>
                 <div className={style.buttons}>
                     <button>Ajude no desenvolvimento da ferramenta</button>
                 </div>
             </div>
             <div className={style.box_conteiner}>
                 <button><BsTelegram/></button>
                 <button><BsInstagram/></button>
                 <button><BsDiscord/></button>
                 <button><BsWhatsapp/></button>
             </div>
             <div className={style.form_cont}>
                     <form className={style.form} onSubmit={getText} >
                     <textarea name="text" placeholder="Insira aqui seu texto" className={style.input}></textarea>
                     <div><span>Velocidade</span>
                     <select name="ppm" id="ppm">
                         <option value="200" key="200">200 ppm</option>
                         <option value="250" key="250">250 ppm</option>
                         <option value="300" key="300" selected>300 ppm</option>
                         <option value="350" key="350">350 ppm</option>
                         <option value="400" key="400">400 ppm</option>
                         <option value="450" key="450">450 ppm</option>
                         <option value="500" key="500">500 ppm</option>
                         <option value="550" key="550">550 ppm</option>
                     </select></div>
                     <select name="words" id="words">
                         <option value="1" key="1" selected>1 palavra de cada vez</option>
                         <option value="2" key="2">2 palavras de cada vez</option>
                         
                     </select>
                     <input type="submit" value="Começe a ler" className={style.button}></input>
 
                 </form>  
             </div>
 
         </div>
         )}
        
            

        {textState && !load && (<button className={style.exit} onClick={()=>{close()}}><AiFillCloseCircle/></button>)}
        
        {textState && !load && play ==="play" &&(
            <DisplayReader textReceived={textState} ppm={ppm} play={play}/>
            
        )}
        {textState && !load && play !="play" &&(
            <DisplayPaused textReceived={textState} ppm={ppm}/>
            
        )}
        {!play && textState &&(<button className={style.pp} onClick={()=>{setPlay("play"); sessionStorage.removeItem("paused")}}><AiFillPlayCircle/></button>)}
        {play && textState &&(<button className={style.pp} onClick={()=>{setPlay(); sessionStorage.setItem("paused", "true")}}><AiFillPauseCircle/></button>)}
        {load &&(
        <div className={style.load_cont}>
            <div className={style.load}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>)
        }
        
        
        
        </>
    )
}
export default Begin