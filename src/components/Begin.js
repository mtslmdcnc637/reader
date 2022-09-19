import style from './css/Begin.module.css'
import {useState, useEffect} from 'react'
import DisplayReader from './DisplayReader';
import { AiFillCloseCircle } from "react-icons/ai";
function Begin (){
    const [ppm, setPpm] = useState()
    var textStable
    const [textState, setTextState] = useState()
    const [load, setLoad] = useState()
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
        }, 3000);   
    }

    function seter(){
        setTextState()
        document.exitFullscreen()
    }
    return (
    <>
    
        {!textState && !load &&(
        <div className={style.body}>
            <div className={style.conteiner}>
            
                <ul>
                    <li>
                        1 - Cole seu texto no campo indicado
                    </li>
                    <li>
                        2 - Escolha a velocidade de leitura - PPM (Palavras por minuto)
                    </li>
                    <li>
                        3 - Para uma melhor visualização ligue a rotação automática para uso em smartphones
                    </li>
                    <li>
                        4 - (em breve) - Se quiser pausar depois que a leirura começar é so tocar no botão de pause
                    </li>
                    <li>
                        5 - (em breve)- Continue lendo textos anteriores de onde parou
                    </li>
                </ul>
            
            
        <form className={style.form} onSubmit={getText}>
            <input type="text" name="text" placeholder="Insira aqui seu texto" className={style.input}></input>
            <select name="ppm" id="ppm">
                <option value="250" key="250">250 ppm</option>
                <option value="300" key="300" selected>300 ppm</option>
                <option value="350" key="350">350 ppm</option>
                <option value="400" key="400">400 ppm</option>
                <option value="450" key="450">450 ppm</option>
                <option value="500" key="500">500 ppm</option>
                <option value="550" key="550">550 ppm</option>
            </select>
            <input type="submit" value="Começe a ler" className={style.button}></input>

        </form>
        </div>
        </div>
         )}

            

        {textState && !load &&(<button className={style.exit} onClick={seter}><AiFillCloseCircle/></button>)}
        
        {textState && !load && (
            <DisplayReader textReceived={textState} ppm={ppm}/>
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