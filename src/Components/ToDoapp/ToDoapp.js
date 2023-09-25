import React, { Component } from 'react'
import "./ToDoapp.css"
import * as Icons from 'react-feather'



export class ToDoapp extends Component {

    state = {
        ToDoInput: "",
        data: [],
        key: '',
        btnHide: 'none',
        btnHide2: '',


    }
    onHandleChange = (event) => {
        this.setState({
            ToDoInput: event.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { ToDoInput } = this.state
        const allItems = this.state.data;
        if (ToDoInput === "") {
            alert("enter value")
        } else {
            this.setState({
                data: [...allItems, ToDoInput],
                ToDoInput: ""
            })
        }
    }

    onDelete = (index) => {
        const allItems = this.state.data;
        allItems.splice(index, 1)
        this.setState({
            data: [...allItems]

        })
    }

    onEdit = (index) => {
        this.setState({
            ToDoInput: this.state.data[index],
            key: index,
            btnHide: "",
            btnHide2: 'none'

        })
    }
    onSave = (e) => {
        e.preventDefault();
        const newValue = this.state.ToDoInput
        const allItems = this.state.data
        allItems[this.state.key] = newValue
        this.setState({
            data: allItems,
            ToDoInput: "",
            btnHide2: "",
            btnHide: 'none'

        })
    }


    render() {
        console.log(this.state.data);
        return (
            <div className='Todoapp'>
                <div className="todoBody">
                    <div className="head_input">
                        <h1>TODO LIST</h1>
                        <form onSubmit={this.onSubmit}>
                            <input type='text' placeholder='Enter items..'
                                value={this.state.ToDoInput}
                                onChange={this.onHandleChange}
                            />
                            <button formAction='submit' style={{ display: this.state.btnHide2 }}>Add</button>
                            <button onClick={this.onSave} style={{ display: this.state.btnHide }}>Save</button>
                        </form>
                    </div>
                    <ul>
                        {this.state.data.map((val, index) => (
                            <div key={index} className="listView">
                                <h2 className="text">{val}</h2>
                                {/* <Icons.CheckSquare className='check_btn' onClick={this.onComplete} /> */}
                                <Icons.Edit className='edit_btn' onClick={() => this.onEdit(index)} />
                                <Icons.Trash className='Del_btn' onClick={() => this.onDelete(index)} />

                            </div>
                        ))}

                    </ul>
                </div>
            </div>
        )
    }
}

export default ToDoapp