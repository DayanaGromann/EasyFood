import React from 'react';
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import Logout from '../LogoutButton';

export const sidebarData = [
    {
        title: "Dashboard",
        path: '/dashboard',
        icon: <AiIcons.AiFillDashboard/>,
        cName: 'nav-text'
    },
    {
        title: "Delivery",
        path: '/delivery',
        icon: <IoIcons.IoMdBicycle/>,
        cName: 'nav-text'
    },
    {
        title: "Pedidos",
        path: '/pedidos',
        icon: <IoIcons.IoIosCafe/>,
        cName: 'nav-text'
    },
    {
        title: "Cadastrar produtos",
        path: '/cadastroprodutos',
        icon: <AiIcons.AiFillTag/>,
        cName: 'nav-text'
    },
    {
        title: "Novo pedido",
        path: '/cadastrarpedido',
        icon: <IoIcons.IoMdCreate/>,
        cName: 'nav-text'
    },
    {
        title: "Sair",
        path: '/logout',
        icon: <AiIcons.AiOutlineClose/>,
        cName: 'nav-text'
    }
]