import React, { Component } from "react";
import NoteList from './../components/NoteList';

class IndexPage extends Component {
  render() {

    return (
      <>
        <h2>Notes page</h2>
         <NoteList notes={this.props.notes}/>
      </>
    );
  }
}

export default IndexPage;
