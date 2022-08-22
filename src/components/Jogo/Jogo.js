import React from 'react'
import './Jogo.css'

// Importando imagens
import imgNuvem from '../assets/clouds.png'

function Jogo() {
  return (
    <div className='jogo'>
        <img src={imgNuvem} alt="" />
    </div>
  )
}

export default Jogo