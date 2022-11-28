import style from "./css/Begin.module.css";
import {
  BsTelegram,
  BsInstagram,
  BsDiscord,
  BsWhatsapp,
  BsGithub,
} from "react-icons/bs";
import { useState, useEffect } from "react";
import DisplayReader from "./DisplayReader";
import { AiFillCloseCircle, AiOutlineSave, AiOutlineLock } from "react-icons/ai";
import { BiPaste, BiBookmarkHeart } from "react-icons/bi";
import { IoMdOptions } from "react-icons/io";
import DisplayPaused from "./DisplayPaused";
import icon from "../favicon.png";
import api from "./api";
import axios from "axios";
import logo from "./assets/logo.png"
import frame from './assets/frame.png'

function Begin(props) {
  const [play, setPlay] = useState();
  const [word, setWord] = useState();
  const [word_1, setWord_1] = useState();
  const [word_2, setWord_2] = useState();
  const [word1, setWord1] = useState();
  const [word2, setWord2] = useState();
  const [ppm, setPpm] = useState();
  const [load, setLoad] = useState();
  const [textState, setTextState] = useState();
  const [n, setN] = useState();
  const getTextOnServer = document.getElementById("getTextOnServer");
  const textarea = document.getElementById("textarea");
  const inputBook = document.getElementById("inputBook");
  const [pdf, setPdf] = useState("");
  const [processing, setProcessing] = useState(false)
  const width = window.screen.width;
  useEffect(() => {
    if (props.nWord) {
      setN(parseInt(props.nWord));
    } else {
      setN(0);
    }
  }, []);

  const [size, setSize] = useState();
  function getText(e) {
    e.preventDefault();
    setLoad("load");
    document.documentElement.requestFullscreen();
    var textStable = e.target.text.value;
    var getPpm = e.target.ppm.value;
    setPpm(getPpm);
    setTextState(textStable);

    setTimeout(() => {
      setLoad();
      setPlay("play");
    }, 3000);
  }

  function close() {
    setTextState();
    document.exitFullscreen();
    setPlay();
    sessionStorage.clear();
    setN(0);
    setPlay();
    setWord();
    setWord1();
    setWord2();
    setWord_1();
    setWord_2();
    setSize();
  }

  async function uploadPdf(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pdf", pdf);
    setProcessing(true)
    await api
      .post("/pdf", formData)
      .then((response) => {
        const textarea = document.getElementById("textarea");
        var text = JSON.stringify(response.data);
        text = text.replace(/\\n/g, "");
        text = text.trim();
        textarea.value = text;
        setProcessing(false)
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
          setProcessing(false)
        } else {
          console.log("ofline");
          setProcessing(false)
        }
      });
  }
  return (
    <>
    
      {!textState && !load && (

        <div className={style.conteiner}>
        {processing && (<div className={style.loader}>Convertendo...</div>)}
          <section id="home">
            {width > 700 && (
              <header>
                <nav className={style.topbar}>
                  <img src={logo} className={style.logo} alt="logo leitura ninja"/>
                  <ul className={style.menu}>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#leitor">Ler</a>
                    </li>
                    <li>
                      <a href="#novidades">
                        Novidades <i>(em breve)</i>
                      </a>
                    </li>
                  </ul>
                  <i className="version">V 1.0.0</i>
                </nav>
              </header>
            )}
            <div className={style.main}>
              <div className={style.explain}>
                <h1>Bem-vindo(a) à leitura ninja!!</h1>
                <p>
                  Leitura ninja é a mais nova ferramenta brasileira com objetivo
                  de acelerar a leitura de textos grandes. Você só precisa colar
                  seu texto na área indicada, escolher a velocidade de leitura e
                  apertar o play
                </p>

                <div className={style.hero_buttons_and_networks}>
                  {width < 700 && (
                    <p>
                      Veja como funciona no video abaixo{" "}
                      <span className={style.triangle}></span>{" "}
                    </p>
                  )}

                  {width > 700 && (
                    <>
                      <a href="#reader">Começar</a>

                      <a
                        href="http://wa.me/+551299856048"
                        target="_blank"
                        className={style.wa}
                      >
                        <BsWhatsapp />
                      </a>
                      <a
                        href="http://discord.gg/n47DyrHS"
                        target="_blank"
                        className={style.di}
                      >
                        <BsDiscord />
                      </a>
                      <a
                        href="https://www.instagram.com/live_lima_mateus/"
                        target="_blank"
                        className={style.in}
                      >
                        <BsInstagram className={style.in} />
                      </a>
                      <a
                        href="http://te.me/leituraninja"
                        target="_blank"
                        className={style.te}
                      >
                        <BsTelegram />
                      </a>
                      <BsGithub className={style.gi} />
                    </>
                  )}
                </div>
              </div>
              <div className={style.donate} >
                <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  src="https://www.youtube.com/embed/O7M_d46Zhxo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                </div>
                  {width > 700 && (
                <div>
                    <img
                      src={frame}
                      alt=""
                    />

                  <span>
                    <h1>apoie o desenvolvimento da ferramenta</h1>
                    <p>Leia o qrcode pra fazer um pix</p>
                  </span>
                </div>
                  )}
                {width < 700 && (
                <div >
                  <a href="#reader" className={style.buttons}>Começar a leitura</a>
                  <a href="https://nubank.com.br/pagar/2wvyw/0TX1myP88m" className={style.buttons}>Apoiar o projeto</a>
                  {width < 700 && (
                    <div className={style.networks}>
                      
                      <a
                        href="http://wa.me/+551299856048"
                        target="_blank"
                        className={style.wa}
                      >
                        <BsWhatsapp />
                      </a>
                      <a
                        href="http://discord.gg/n47DyrHS"
                        target="_blank"
                        className={style.di}
                      >
                        <BsDiscord />
                      </a>
                      <a
                        href="https://www.instagram.com/live_lima_mateus/"
                        target="_blank"
                        className={style.in}
                      >
                        <BsInstagram className={style.in} />
                      </a>
                      <a
                        href="http://te.me/leituraninja"
                        target="_blank"
                        className={style.te}
                      >
                        <BsTelegram />
                      </a>
                      <BsGithub className={style.gi} />
                    </div>
                  )}
                  
            </div>
                  )}

              
              </div>
            </div>
          </section>

          <section id="leitor">
            <div id={style.reader}>
              <div className={style.text_reader}>
                <h1>Começar a leitura</h1>
                <ul>
                  <li>
                   <BiPaste/> <p>Cole seu texto na área indicada ou faça upload de um pdf</p> 
                  </li>
                  <li>
                    <IoMdOptions/> <p>Selecione as opções que mais se adaptam ao seu propósito</p>
                  </li>
                  <li>
                    <AiOutlineSave/> <p>Quando você aperta o play o texto é salvo automativamente
                    pra que você possa continuar de onde parou depois</p>
                  </li>
                  <li>
                    <AiOutlineLock/> <p> Nenhum texto é armazenado em nossos servidores, os textos
                    são salvos no seu proprio armazenamento e permanece até que
                    você limpe os dados do navegador</p>
                  </li>
                  <li>
                    <BiBookmarkHeart/> <p>Favorite esta pagina! assim você consegue encontrar
                    facilmente quando quiser continuar</p>
                  </li>
                </ul>
              </div>
              <form action="" method="get" onSubmit={getText}>
                <textarea
                  name="text"
                  id="textarea"
                  cols="60"
                  rows="40"
                  defaultValue={props.text}
                  placeholder="Insira aqui seu texto"
                ></textarea>
                <div>
                  <h1>Selecione as opções desejadas</h1>
                  <select name="ppm" id="ppm">
                    <option value="100" key="100">
                      100 ppm
                    </option>
                    <option value="200" key="200">
                      200 ppm
                    </option>
                    <option value="300" key="300" selected>
                      300 ppm
                    </option>
                    <option value="400" key="400">
                      400 ppm
                    </option>
                    <option value="450" key="450">
                      450 ppm
                    </option>
                    <option value="500" key="500">
                      500 ppm
                    </option>
                    <option value="550" key="550">
                      550 ppm
                    </option>
                    <option value="600" key="600">
                      600 ppm
                    </option>
                    <option value="650" key="650">
                      650 ppm
                    </option>
                  </select>
                  <select name="same" id="same">
                    <option value="1">1 palavra de cada vez</option>
                    <option value="2">2 palavras de cada vez</option>
                  </select>
                  <input
                    type="file"
                    name="pdf"
                    id="pdf"
                    onChange={(e) => {
                      setPdf(e.target.files[0]);
                    }}
                  />
                  <button onClick={uploadPdf}>Processar PDF</button>
                  <input
                    type="submit"
                    value="Começar a leitura"
                    className={style.button_start}
                  />
                </div>
              </form>
            </div>
          </section>
        </div>
      )}

      {textState && !load && (
        <button
          className={style.exit}
          onClick={() => {
            close();
          }}
        >
          <AiFillCloseCircle />
        </button>
      )}

      {textState && !load && play === "play" && (
        <DisplayReader
          setPlay={setPlay}
          text={textState}
          ppm={ppm}
          play={play}
          nWord={n}
          setSize={setSize}
          setN={setN}
          setWord={setWord}
          setWord_1={setWord_1}
          setWord_2={setWord_2}
          setWord1={setWord1}
          setWord2={setWord2}
          size={size}
        />
      )}
      {textState && !load && play === "pause" && (
        <DisplayPaused
          setPlay={setPlay}
          text={textState}
          n={n}
          ppm={ppm}
          play={play}
          word={word}
          word_1={word_1}
          word_2={word_2}
          word1={word1}
          word2={word2}
          size={size}
          setN={setN}
        />
      )}

      {load && (
        <div className={style.load_cont}>
          <div className={style.load}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </>
  );
}
export default Begin;
