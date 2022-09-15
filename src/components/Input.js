import style from './css/Input.module.css'
import {useState} from 'react'
function Input(){
    
    const [palavra,SetPalavra]= useState();
    const [full, setFull] = useState();
   // const cache = localStorage.getItem("isText")
    //const previousText = localStorage.getItem("previousText")
    
    //function restorePreviousText()
    //{
       // const nWord = localStorage.getItem("nWord")
       // var n = nWord

    //}


    //função que fazo texto aparecer na tela e mudar
    function setarTexto(e){
        e.preventDefault()
        
        var n = 0;
        var texto = e.target.texto.value;
        localStorage.setItem("previousText", texto)
        localStorage.setItem("isText","is")

        texto = texto.split(" ");
        document.documentElement.requestFullscreen()
        setFull("Ligado")
        var intervalo = setInterval(function(){
            if(n < (texto.length)){
            SetPalavra(texto[n])  
            localStorage.setItem("nWord",n)   
            n++
                
            }else {
            clearInterval(intervalo);
            localStorage.clear()

    }
        }, 300);
        

        
    

        
    };
    //fim da set text
    return(
        <>
        
        <form onSubmit={setarTexto}>
        <input type="text" name="texto" className={style.input} placeholder="Insira aqui o texto"></input>
        <input type="submit" value="Prosseguir" className={style.button}></input>
        </form>
        {full && (
            <div className={style.ativo}>{palavra} <button onClick={(e) => {setFull()}}>X</button></div>
        )
        }
        </>
    )
    
}
export default Input