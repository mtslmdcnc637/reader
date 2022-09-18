import style from './css/Begin.module.css'
import {useState, useEfect} from 'react'
import DisplayReader from './DisplayReader';
function Begin (){
    var textStable
    const [textState, setTextState] = useState()
    function getText(e){
        e.preventDefault();
        var textStable = e.target.text.value;
        textStable = textStable.split(" ")
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
            <input type="submit" value="Começe a ler"></input>
        </form>
        </div>
        </div>
         )}
        {textState &&(<button className={style.exit} onClick={(()=>{setTextState()})}>X</button>)}
        
        {textState && (
            <DisplayReader textReceived={textState}/>
        )}
        </>
    )
}
export default Begin