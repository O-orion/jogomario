import React from 'react'
import './Jogo.css'

// Importando imagens
import imgNuvem from '../assets/clouds.png'
import imgCano from '../assets/pipe.png'
import imgMario from '../assets/mario.gif'

function Jogo() {

  document.onkeydown = function () {
    console.log('On keyDown')
  }

  return (
    <div className='jogo'>
        <img className='nuvens' src={imgNuvem} alt="Imagem de nuvens" />
        <img className='cano' src={imgCano} alt="Imagem de cano" />
        <img className='mario' src={imgMario} alt="Imagem do mário" />
        <div className='chao'></div>
    </div>
  )
}

export default Jogo