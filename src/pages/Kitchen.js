import React, { useEffect, useState } from 'react';
import "../css/Kitchen.css"
function Kitchen({pedidos}) {
  const [status, setStatus] = useState('iniciar');
  const configurarStatus = ()=>{
    if(status === 'iniciar'){
      setStatus('iniciado')
    }else if(status === 'iniciado'){
      setStatus('concluído')
    }
  }
  return (
    <div>
      {
        pedidos.map((comanda)=>{ 
          return(
          Object.keys(comanda.pedidos).map((comida,i)=>{
            console.log( comanda.pedidos[comida])
            return(
              <div  key = {i} className='card'>
                <div className='comidaContainer'>
                  <h3>{comanda.pedidos[comida].nomeProduto}</h3>
                  <p>descrição: {comanda.pedidos[comida].descricao}</p>
                  <p>Observações: {comanda.pedidos[comida].observacoes}</p>
                  <p>Tempo de preparo: {comanda.pedidos[comida].tempoPreparo} min</p>
                </div>
                <button className='botaoCozinha' onClick = {()=>{configurarStatus()}}>Iniciar Preparo</button>
              </div>
            )
          })
          )
        })
      }

    </div>
  )
}

export default Kitchen