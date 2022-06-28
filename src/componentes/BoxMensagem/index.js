import React from 'react';
import './estilo.css';

const BoxMensagem = props => {
  return (
    <div className='box-mensagem'>
      <h2>Mensagem</h2>

      <div className='conteudo-mensagem'>
        { props.children }
      </div>
    </div>
  );
}

export default BoxMensagem;