import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField : '',
      monsters : []
    }
  }

  //Life cycle method, called after component is mounted.
  //Changes here cause rerendering
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
                                                             .then(name => this.setState({monsters : name  }));
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    console.log(filteredMonster);;
    return (
        //jsx
        <div className='App'>
          <h1>Monster Rolodex</h1>
          <SearchBox placeholder = 'search monster'
                     handleChange={e => this.setState({searchField : e.target.value})}
          />
          <CardList monsters = {filteredMonster}></CardList>
        </div>
    );

  }
}



export default App;
