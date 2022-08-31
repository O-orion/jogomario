// Importando componentes do react e outras libs
import React, { useState, useRef, useEffect } from 'react'

// Importando css
import './Jogo.css'

// Importando imagens
import imgNuvem from '../assets/clouds.png'
import imgCano from '../assets/pipe.png'
import imgMario from '../assets/mario.gif'
import imgGameOver from '../assets/game-over.png'

function Jogo() {
  
  // Estados
  const [ estaPulando, setEstaPulando ] = useState(false)
  const [ estaMorto, setEstaMorto ] = useState(false);
  const [ pontos, setPontos ] = useState(0);

  // classe
  let marioClassName = 'mario'
  // referências

  const marioRef = useRef();
  const canoRef = useRef();

  function marioEstaNoCano(){

    const mario = marioRef.current;
    const cano = canoRef.current;

    if(!mario || !cano){
      return;
    }

    return (
      cano.offsetLeft > mario.offsetLeft +10 &&
      cano.offsetLeft < mario.offsetLeft +10 + mario.offsetWidth  && 
      mario.offsetTop +10 + mario.offsetHeight +10> cano.offsetTop
    )

  }

  setInterval(function(){
    const estaNoCano = marioEstaNoCano();
    //console.log('Mário está no cano ?', valor)

    if(!estaNoCano){
      return;
    }
    setEstaMorto(true);


  }, 100)

  // UseEfect evitando que o setInterval seja recroadp várias vezes
  useEffect(function(){

      const interval = setInterval(() => {
        if( estaMorto ){
          return;
        }
    
        setPontos(pontos + 1)
        console.log( { pontos } )
      }, 500)

      return () => clearInterval(interval)
  }, [estaMorto, pontos])

  document.onkeydown = function () {
    if(!estaPulando){

      console.log('On keyDown: ' +  estaPulando)
      setEstaPulando(true)

      //retornando o estaPulando pra false
      setTimeout(function(){
        setEstaPulando(false)
      }, 700)

    }

  }

  if (estaPulando ){
    marioClassName = "mario mario-pulo"
  }

  const marioImagem = estaMorto ? imgGameOver: imgMario
  const pararAnimacao = estaMorto ?  "parar-animacao": "";

  return (
    <div className='jogo'>
        <img className={"nuvens " + pararAnimacao} src={imgNuvem} alt="Imagem de nuvens" />
        <img ref={canoRef} className={ "cano " + pararAnimacao } src={imgCano} alt="Imagem de cano" />
        <img ref={marioRef} className={ marioClassName } src={marioImagem} alt="Imagem do mário" />
        <div className='chao'></div>
    </div>
  )
}

export default Jogo