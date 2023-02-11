import React from 'react';
import './App.css';
import { Paciente } from './models/Paciente';

function App() {
  let nome = "Paulo Lopes";
  let pacientes: Paciente[] = [];

  let paciente1 = new Paciente();
  paciente1.nome = "Felipe";
  paciente1.cpf = "0000000001";
  paciente1.sexo = "M";

  let paciente2 = new Paciente();
  paciente2.nome = "Ivison";
  paciente2.cpf = "0000000002";
  paciente2.sexo = "M";

  let paciente3 = new Paciente();
  paciente3.nome = "Leticias";
  paciente3.cpf = "0000000002";
  paciente3.sexo = "M";

  pacientes.push(paciente1);
  pacientes.push(paciente2);
  pacientes.push(paciente3);

  return (
    <div className="App">
      <h1>{nome}</h1>
      <ul>
        {
          pacientes.map((x) =>{
            return (<li key={x.nome} >{x.nome}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
