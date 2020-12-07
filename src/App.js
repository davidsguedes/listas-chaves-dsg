import './App.css';
import React, { Component } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InputText />
        <TaskList tasks={[
          { titulo: Task.titulo}
        ]} />
      </header>
    </div>
  );
}

function Task(props) {
  return (
    <div
      className="grid-item"
      style={{
        backgroundColor: '#fff',
        border: 'solid'
      }}>
      <h3>{props.titulo}</h3>
    </div>
  );
}


function addTaks(event){
  if (event.key === 'Enter') {
    TaskList.state = ({value:event.target.value})
  }
};


class InputText extends React.Component {

    render() {
      return (
        <div>
          <h3>Adicione uma tarefa</h3>
          <input type="text"
            className="grid-item"
            id="inputTask"
            onKeyPress={() => addTaks()} />
        </div>
      );

    }
  }


class TaskList extends React.Component {

  constructor(props) {
    super(props);

    this.state = { tasks: this.props.tasks };
  }

  render() {
    return (
      <div className=".grid-container">
        {
          this.state.tasks.map(t=> {
            return (
              <div>
                <Task titulo={t.titulo} />
              </div>
            );
          })
        }
      </div>
    );
  }

}

export default App;
