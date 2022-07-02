import React, { useEffect, useState } from 'react';
import '../css/Home.css'

function Home({pedidos}) {
console.log(pedidos)
  const [destaque, setDestaque] = useState(pedidos.length-1)

  useEffect(()=>{
    setDestaque(pedidos.length-1)
  },[pedidos])

 
  return (
    <div className='container'>
      <div className='PedidoEmDestaque'>
        <h2>{pedidos[destaque].cliente.nome}</h2>
        <div className='info'>
          <div className='dados'>
            <h3>Dados pessoais</h3>
            <p><b>Endereço: </b>{pedidos[destaque].cliente.logradouro}, {pedidos[destaque].cliente.numero}</p>
            <p><b>Bairro: </b>{pedidos[destaque].cliente.bairro}</p>
            <p><b>Referência: </b>{pedidos[destaque].cliente.referencia}</p>
            <p><b>E-mail: </b> {pedidos[destaque].cliente.email}</p>
            <p><b>Telefone: </b> {pedidos[destaque].cliente.telefone}</p>
            <p><b>Forma de pagamento: </b> {pedidos[destaque].cliente.formaPagamento}</p>
          </div>
          <div className='pedido'>
            <h3>Pedidos</h3>

            {
              Object.keys(pedidos[destaque].pedidos).map((key,i)=>{
                return(
                  <div key={i}>
                    
                    <p><b>{i+1}. </b>{pedidos[destaque].pedidos[key].nomeProduto}</p>
                    <p>{pedidos[destaque].pedidos[key].observacoes}</p>
                    <br/>

                  </div>
                )
              })
            }
        </div>
        </div>
      </div>
      <div className='pedidos'>
        <h2> pedidos</h2>

        {
          pedidos.map((key, i)=>{
            return(
              <button className='botao' key = {i} onClick = {()=>{setDestaque(i)}}>
                <h3>{(i+1) +'. ' + key.cliente.nome}</h3>
                <h3>status: {key.cliente.estado}</h3>
                <br/>
              </button>
            )
          })
        }
      </div>
    </div>
  )

}

export default Home