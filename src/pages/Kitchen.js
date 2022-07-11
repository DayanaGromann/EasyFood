import React, { useEffect, useState } from 'react';
import "../css/Kitchen.css"

function Kitchen({pedidos, atualizarEstadoPedido}) {

  const [status, setStatus] = useState('iniciar');
  
  const configurarStatus = ()=>{
    if(status === 'iniciar'){
      setStatus('iniciado')
    }else if(status === 'iniciado'){
      setStatus('concluído')
    }
  }



  return (
    <div className='kitchenContainer'>
      {
        pedidos.map((comanda,i)=>{ 
          return(
            <div key = {i} className='card'>
              <div>
              <h2>Comanda {comanda.cliente.indice}</h2>
              {
                comanda.cliente.estado == "aguardando confirmação" 
                  ? <button className='botaoCozinha' onClick = {() => {atualizarEstadoPedido(comanda.cliente.indice, 'preparo iniciado')}}>Iniciar Preparo</button>
                  : comanda.cliente.estado == "preparo iniciado"
                    ?<button className='botaoCozinha' onClick = {()=>{atualizarEstadoPedido(comanda.cliente.indice, 'aguardando entregador')}}>Concluir preparo</button>
                    :<button className='botaoCozinha'>Preparo concluído</button>
              }
              </div>
              <div>
              {Object.keys(comanda.pedidos).map((comida,i)=>{
                
                return(
                  <div  key = {i} >
                    <div className='comidaContainer'>
                      <br/>
                      <hr/>
                      <br/>
                      <h3>{comanda.pedidos[comida].nomeProduto}</h3>
                      <p><b>descrição:</b> {comanda.pedidos[comida].descricao}</p>
                      <p><b>Observações: </b>{comanda.pedidos[comida].observacoes}</p>
                      <p><b>Tempo de preparo:</b> {comanda.pedidos[comida].tempoPreparo} min</p>
                      
                    
                    </div>
                  
                    
                  </div>
                )
              })}
              </div>
            </div>
          )

          
        })
      }

    </div>
  )
}

export default Kitchen