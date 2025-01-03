//SINTAXE JSX

import React, { useState } from 'react';
import { use } from 'react';
import { v4 as uuid } from 'uuid';

import { Container } from './styles.js'


function App() {
  // Código javaScript
  // so prescisamos criar um estado (state) quando criar uma variavel  que o valor dela for alterado na tela 

  const [list, setList] = useState([{ id: uuid(), task: 'Adicione mais tarefas' }]); 
  const [inputTask, setInputTask] = useState(''); 
  
  // 'setList' é responsável por alterar o valor de 'list', como se fosse um list.push
  // Imutabilidade, os valores em react nunca mudam! Só podemos substituir completamente, recriando do zero, por isso (setList)
 // No react quando há alterações de valores, elas não refeltem na DOM, a tela nao renderiza novamente, só quando elas mudarem completamente, com UseState! 

  function inputDiference(event) {

    setInputTask(event.target.value)

  }

  function clickButton() {
    setList([ ...list, { id: uuid(), task: inputTask }])
  }

  //retorna código HTML
  return (
    // FRAGMENT <></>
    <Container>
      <input className='inputValue' onChange={inputDiference} type="text" placeholder='O que tenho a fazer...' />
      <button onClick={clickButton}>Adicionar</button>

      <ul>
        {
          list.map(item => (
            <li key={item.id}>{item.task}</li>
          ))
        }
      </ul>
    </Container>
  )
}

export default App
