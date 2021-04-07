import React, { Component } from 'react';

class ShowPage extends Component {

    render() {
        const { note } = this.props;

        if (!note) {
            return null
        }

        return (<>
            <h1>{note.title}</h1>
            <div>{note.body}</div>
        </>);
    }
}

export default ShowPage;