// Importando componentes do react e outras libs
import React, { useState, useRef } from 'react'

// Importando css
import './Jogo.css'

// Importando imagens
import imgNuvem from '../assets/clouds.png'
import imgCano from '../assets/pipe.png'
import imgMario from '../assets/mario.gif'

function Jogo() {
  const [ estaPulando, setEstaPulando ] = useState(false)
  let marioClassName = 'mario'
  const marioRef = useRef();
  const canoRef = useRef();



  function marioEstaNoCano(){

    const mario = marioRef.current;
    const cano = canoRef.current;

    if(!mario || !cano){
      return;
    }

    return (
      cano.offsetLeft > mario.offsetLeft &&
      cano.offsetLeft < mario.offsetLeft + mario.offsetWidth && 
      mario.offsetTop + mario.offsetHeight > cano.offsetTop
    )

  }

  setInterval(function(){
    const valor = marioEstaNoCano();
    console.log('Mário está no cano ?', valor)
  }, 100)

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

  return (
    <div className='jogo'>
        <img className='nuvens' src={imgNuvem} alt="Imagem de nuvens" />
        <img ref={canoRef} className='cano' src={imgCano} alt="Imagem de cano" />
        <img ref={marioRef} className={ marioClassName } src={imgMario} alt="Imagem do mário" />
        <div className='chao'></div>
    </div>
  )
}

export default Jogo