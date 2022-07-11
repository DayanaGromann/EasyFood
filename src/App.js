import React, { useEffect, useState } from 'react';
import './css/App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import { database } from './firebaseConfig';
import {ref,set, onValue, update} from 'firebase/database';

import Login from './pages/Login';
import Home from './pages/Home';
import Kitchen from './pages/Kitchen';
import Delivery from './pages/Delivery';
import ProductRegistration from './pages/ProductRegistration';
import RequestRegistration from './pages/RequestRegistration';
import Logout from './components/LogoutButton';

import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';


function App() {

  const [pedidos, setPedidos] = useState([
    {
      cliente: {
        bairro: "",
        email: '',
        formaPagamento: '',
      },
      pedidos : {
        estado: ""
      }
    }
  ])

  useEffect(()=>{
    obterPedidos()
  },[])

  const obterPedidos = ()=>{
    const comandaRef = ref(database, 'comandas')

    onValue(comandaRef, (snapshot)=>{
      //setPedidos(snapshot.val())
      const todosPedidos = snapshot.val()
      const lista = Object.keys(todosPedidos).map((key)=>{
          return todosPedidos[key]
      })

      setPedidos(lista)
    })


  }

  const atualizarEstadoPedido = (indiceCliente, estado) => {
    const estadoRef = ref(database, 'comandas/comanda'+indiceCliente+'/cliente')

    update(estadoRef, {estado: estado})
  }

  return (
    <>
        <AuthContextProvider>
          
          <Routes>
            <Route path='/' element = {<Login/>}/>
            <Route path='/dashboard' element = {
              <ProtectedRoute>
                <Navbar/>
                <Home pedidos = {pedidos}/>
              </ProtectedRoute>
            }/>
            <Route path='/pedidos' element = {
              <ProtectedRoute>
                <Navbar/>
                <Kitchen pedidos = {pedidos} atualizarEstadoPedido = {atualizarEstadoPedido}/>
              </ProtectedRoute>
            }/>
            <Route path='/delivery' element = {
              <ProtectedRoute>
                <Navbar/>
                <Delivery pedidos = {pedidos} atualizarEstadoPedido = {atualizarEstadoPedido}/>
              </ProtectedRoute>
            }/>
            <Route path='/cadastroprodutos' element = {
              <ProtectedRoute>
                <Navbar/>
                <ProductRegistration/>
              </ProtectedRoute>
            }/>
            <Route path='/cadastrarpedido' element = {
              <ProtectedRoute>
                <Navbar/>
                <RequestRegistration/>
              </ProtectedRoute>
            }/>
            <Route path='/logout' element = {
              <ProtectedRoute>
                <Logout/>
              </ProtectedRoute>
            }/>
          </Routes>
          
        </AuthContextProvider>
    </>
  );
}

export default App;
