import { useEffect, useState } from 'react';

//import {ListGroup} from 'react-bootstrap';

import './index.css';

import api from '../../services/api';


function Clientes() {

  const [clientes, setClientes]= useState([])

  useEffect(()=>{
    api.get("cliente")
      .then((res)=>{
        //const data = res.data;
        setClientes(res.data)
      }).catch((error=>{
        console.log(error)
      }))
  })

    return (
      <div className="profile-container">
        <header>
            <span>Bem Vindo</span>

        </header>
        <h1>Clientes cadastrados</h1>

        <div className="row">
          {clientes.map((cliente)=>(
              <p>{cliente.nome}</p>
          )
          )}
        </div>
      </div>
    );
}

export default Clientes;
