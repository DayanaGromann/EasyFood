import React, { useEffect, useState } from 'react';
import "../css/Delivery.css"
function Delivery({pedidos}) {
  const [status, setStatus] = useState('iniciar');
  const configurarStatus = ()=>{
    if(status === 'iniciar'){
      setStatus('iniciado')
    }else if(status === 'iniciado'){
      setStatus('concluído')
    }
  }
  return (
    <div className='flexBox'>
      {
        pedidos.map((comanda, i)=>{ 
          return(
            <div key = {i} className='cardDelivery'>
              <div className='item'>
                <h1>{comanda.cliente.nome}</h1>
                
                <p><b>Endereço: </b>{comanda.cliente.logradouro}, {comanda.cliente.numero}</p>
                <p><b>Bairro: </b>{comanda.cliente.bairro}</p>
                <p><b>Referência: </b>{comanda.cliente.referencia}</p>
                <p><b>Telefone: </b> {comanda.cliente.telefone}</p>
                <p><b>Forma de pagamento: </b> {comanda.cliente.formaPagamento}</p>
                <br/>
                <hr/>
                <br/>
                  <h3>Pedidos</h3>
                {
                Object.keys(comanda.pedidos).map((key,i)=>{
                  return(
                    <div key={i}>
                      <p><b>{i+1}. </b>{comanda.pedidos[key].nomeProduto +" obs: "+ comanda.pedidos[key].observacoes}</p>
                    </div>
                  )
                })
          }
            <br/>
            <button className='botaoDelivery' onClick = {()=>{}}>Sair para a entrega</button>
              </div>
              
            </div>
          )
        })
      }

    </div>
  )
}

export default Delivery