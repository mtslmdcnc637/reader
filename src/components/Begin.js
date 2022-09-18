import style from './css/Begin.module.css'
import {useState, useEfect} from 'react'
import DisplayReader from './DisplayReader';
function Begin (){
    const [ppm, setPpm] = useState()
    var textStable
    const [textState, setTextState] = useState()
    function getText(e){
        e.preventDefault();
        var textStable = e.target.text.value
        textStable = textStable.split(" ")
        var getPpm = e.target.ppm.value
        setPpm(getPpm)
        setTextState(textStable)
    
        
    }
    
    return (
    <>
    
        {!textState &&(
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
                        3 - Se quiser pausar depois que a leiruracomeçar é so tocar no botão de pause
                    </li>
                </ul>
            
            
        <form className={style.form} onSubmit={getText}>
            <input type="text" name="text" placeholder="Insira aqui seu texto"></input>
            <select name="ppm" id="ppm">
                <option selected value="300" key="300">300 ppm</option>
                <option value="350" key="350">350 ppm</option>
                <option value="400" key="400">400 ppm</option>
                <option value="450" key="450">450 ppm</option>
                <option value="500" key="500">500 ppm</option>
                <option value="550" key="550">550 ppm</option>
            </select>
            <input type="submit" value="Começe a ler"></input>

        </form>
        </div>
        </div>
         )}
        {textState &&(<button className={style.exit} onClick={(()=>{setTextState() (document.exitFullscreen())} )}>X</button>)}
        
        {textState && (
            <DisplayReader textReceived={textState} ppm={ppm}/>
        )}
        </>
    )
}
export default Begin