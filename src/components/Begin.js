import style from './css/Begin.module.css'
import { BsTelegram, BsInstagram, BsDiscord, BsWhatsapp } from "react-icons/bs";
import {useState, useEffect} from 'react'
import DisplayReader from './DisplayReader';
import { AiFillCloseCircle } from "react-icons/ai";
import DisplayPaused from './DisplayPaused';
import icon from '../favicon.png'

function Begin (){
    const [play, setPlay] = useState()
    const [word, setWord] = useState()
    const [word_1, setWord_1] = useState()
    const [word_2, setWord_2] = useState()
    const [word1, setWord1] = useState()
    const [word2, setWord2] = useState()
    const [ppm, setPpm] = useState()
    const [load, setLoad] = useState()
    const [textState, setTextState] = useState()
    const [n, setN] = useState(0)
    const [size, setSize] = useState()
    function getText(e){
        e.preventDefault();
        setLoad("load")
        document.documentElement.requestFullscreen() 
        var textStable = e.target.text.value
        var getPpm = e.target.ppm.value
        setPpm(getPpm)
        setTextState(textStable) 

        setTimeout(() => {
            setLoad()
            setPlay("play")
        }, 3000);   
    }

    function close(){
        setTextState()
        document.exitFullscreen()
        setPlay()
        sessionStorage.clear()
        setN(0)
        setPlay()
        setWord()
        setWord1()
        setWord2()
        setWord_1()
        setWord_2()
        setSize()

    }
    

    return (
    <>
    
        {!textState && !load  &&(
             <div className={style.body}>
             <div className={style.bg}>
                 <h5><img src={icon}></img>   Leitura Ninja</h5>
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
                         
                     </select>
                     <input type="submit" value="Começar a ler" className={style.button}></input>
 
                 </form>  
             </div>
 
         </div>
         )}
        
            

        {textState && !load && (<button className={style.exit} onClick={()=>{close()}}><AiFillCloseCircle/></button>)}
        
        {textState && !load  && play === "play" &&(
            <DisplayReader setPlay={setPlay} text={textState} ppm={ppm} play={play} nWord={n} setSize ={setSize} setN={setN} setWord={setWord} setWord_1={setWord_1} setWord_2={setWord_2} setWord1={setWord1} setWord2={setWord2} size={size}/>
        )}
        {textState && !load  && play === "pause" &&(
            <DisplayPaused setPlay={setPlay} text={textState} n={n} ppm={ppm} play={play} word={word} word_1={word_1} word_2={word_2} word1={word1} word2={word2} size={size} setN={setN}/>
        )}
        
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