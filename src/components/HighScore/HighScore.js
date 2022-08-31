import React from 'react'
import './HigScore.css'

const HighScore = () => {
  return (
    <div className='HighScore'>
        <div>
            Você fez <b>50 pontos</b>
        </div>
        
        <div>
            <h1>HighScore</h1>
            <div>Ana Paula - 8 pontos</div>
            <div>Ana Paula - 8 pontos</div>
            <div>Ana Paula - 8 pontos</div>
            <div>Ana Paula - 8 pontos</div>
        </div>

        <div>
            <h2>Registre sua pontuação!</h2>
            <form >
                <input type="text" placeholder='Informe seu nome: ' />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    </div>
  )
}

export default HighScore