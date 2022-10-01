import { useEffect, useState } from "react"
import Begin from "./Begin"
import DisplayReader from "./DisplayReader"


function VerifyPreviousText(){
    const [situation, setSituation] = useState(0)
    const text = localStorage.getItem("text") //constante vai conter o texto recuperado da memoria
    const nWord = localStorage.getItem("nWord") // vai conter o numero(indice) d palavra onde a pessoa parou anteriormente
    const ppm = localStorage.getItem("ppm") //contem a velocidade de leitura escolhida anteriormente
    const [calledDisplay, setCalledDisplay] = useState() // state usado para verificar se o display está sendo chamado
    if(text){setSituation(1)}
    if(!text){setSituation(2)}
    if(calledDisplay){setSituation(3)}

    if(situation = 1){ //verifica se existe texto anterior
        return (
            <>
                <h1>Deseja continuar a leitura anterior?</h1>
                <div><button onClick={()=>{setCalledDisplay("called")}}>Sim</button><button onClick={setSituation(1)}>Não</button></div>
            </>
        )
    }
    if(situation = 2){ //se não tiver texto nem display chama o formulário
        return (
            <Begin />
        )
    }
    if(situation = 3){ //se o display for chamado
        return(<DisplayReader ppm={ppm} text={text} nWord={nWord}/>)
    }

}
export default VerifyPreviousText