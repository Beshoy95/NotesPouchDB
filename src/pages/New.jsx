import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewPage extends Component {
    state = {
        note: {
            title: "",
            body: "",
            createdAt: undefined,
            updatedAt: undefined
        }
    }

    updateValue = (e) => {
        const { note } = this.state;
        this.setState({
            note: { ...note, [e.target.name]: e.target.value }
        })
    }

    handleSave =async (e) => {
       e.preventDefault()
       const id = await this.props.onSave(this.state.note)
       this.props.history.replace(`/notes/${id}`)
    }

    render() {
        const { note } = this.state
        return (
            <>
                <div className="note-form">
                    <h2>new note</h2>
                    <form action="" onSubmit={this.handleSave}>
                        <div>
                            <label htmlFor="">title</label>
                            <input type="text"
                                name="title"
                                value={note.title}
                                onChange={this.updateValue} />
                        </div>
                        <div className="note-form">
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <button>save</button>
                            <Link to="/">cancel</Link>
                        </div>
                    </form>
                </div>
            </>);
    }
}

export default NewPage;