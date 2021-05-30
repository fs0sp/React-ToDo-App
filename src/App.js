// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListItems from './ListItems';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }

    // bind our methods to the constructor so that it doesn't loses context

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    // this.getDay = this.getDay.bind(this);
  }

  // to get todays day

  //  getDay() {
  //   var d = new Date();
  //   var weekday = new Array(7);
  //   weekday[0] = "Sunday";
  //   weekday[1] = "Monday";
  //   weekday[2] = "Tuesday";
  //   weekday[3] = "Wednesday";
  //   weekday[4] = "Thursday";
  //   weekday[5] = "Friday";
  //   weekday[6] = "Saturday";
  
  //   var n = weekday[d.getDay()];
  //   console.log(n);
  //   return n;
  // }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(0)
      }
    })
  }

  // to add item into our todo list.

  addItem(e) {
    e.preventDefault(); // so that the page doesn't get refreshd everytime we add
    const newItem = this.state.currentItem;
    console.log(newItem);
    // add new todo to our list if its not empty.
    if(newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: '',
          key:''
        }
      })
    }

  }

// to delete the TODO

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key!==key);
    this.setState({
      items:filteredItems
    })
  }

  // to update the listed TODO

  setUpdate(text, key) {
    const items = this.state.items;
    items.map(item => {
      if(item.key === key) {
        item.text = text;
        
      }
      return item;
    })
    this.setState({
      items: items
    })
  }


  render() {
    return (
      <div className="App">
        <header>
        {/* <h1 id="todayday">ss</h1> */}
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter todos here." value={this.state.currentItem.text} onChange={this.handleInput} />
          <button type="submit">Add</button>
        </form>
      </header>
      <ListItems items = {this.state.items} 
                 deleteItem = {this.deleteItem} 
                 setUpdate = {this.setUpdate} >

      </ListItems>
      </div>
    );
  }
}

export default App;
