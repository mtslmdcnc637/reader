import style from './css/Input.module.css'
import {useState} from 'react'
function Input(){
    
    const [palavra,SetPalavra]= useState();
    function setarTexto(e){
        e.preventDefault()
        var n = 0;
        var texto = e.target.texto.value;
        texto = texto.split(" ");
        
        
        var intervalo = setInterval(function(){
            if(n < texto.length){
            SetPalavra(texto[n])       
            n++
            }else {
            clearInterval(intervalo);

    }
        }, 150);
        

        
    

        
    };
    return (
        <>
        <form onSubmit={setarTexto}>
        <input type="text" name="texto" className={style.input} placeholder="Insira aqui o texto"></input>
        <input type="submit" value="Prosseguir" className={style.button}></input>
        </form>
        {palavra && (
            <div className={style.ativo}>{palavra} <button onClick={(e) => {SetPalavra()}}>X</button></div>
        )
}
        </>
    )
}
export default Input