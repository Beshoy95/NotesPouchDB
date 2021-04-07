import React, { Component } from "react";
import { BrowserRouter ,Route} from "react-router-dom";
import IndexPage from "./pages";
import ShowPage from './pages/Show';
import Navbar from './components/Navbar';
import NewPage from './pages/New';
import DB from './db';

class App extends Component {
  state = {
    db:new DB('notes-react'),
    notes: {},
  };

 async componentDidMount(){
   const notes = await this.state.db.getAllNotes()
   this.setState({
     notes
   })
 }

  handleSave=async (note)=>{
     let {id} = await this.state.db.createNote(note);
      
     const {notes} =this.state;

     this.setState({
       notes:{
         ...notes,
         [id]:note
       }
     })
     return id 
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Route exact path="/" component={(props)=> <IndexPage {...props} notes={this.state.notes} />} />
          <Route exact path="/notes/:id" component={(props)=> <ShowPage  {...props} note={this.state.notes[props.match.params.id]}/>}/>
          <Route exact path="/new" component={(props)=><NewPage {...props} onSave={this.handleSave}/>}/>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
