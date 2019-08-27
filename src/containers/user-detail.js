import React, { Component } from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {

    constructor(props){
        super(props)
        this.state = {
            fullname: '',
            age: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount(){
        console.log('componentWillMount');
        console.log(this.props)
        if (this.props.active_user) {
            this.setState({
                fullname: this.props.active_user.fullname,
                age: this.props.active_user.age
            })
        }
        
        console.log(this.state)
    }

    componentWillReceiveProps(nextProps){
        console.log(this.props);
        console.log(nextProps);
        console.log('componentWillReceiveProps');
        
        if (nextProps.active_user) {
            this.setState({
                fullname: nextProps.active_user.fullname,
                age: nextProps.active_user.age
            })
        }
    }

    handleChange(event){
        this.setState({
            fullname: event.target.value
        }, () => {
            console.log(this.state.fullname)
        })
        console.log(event.target.value)
        // console.log(this.state.fullname)
    }

    handleSubmit(event) {
        event.preventDefault();
        let item = {id: 5, fullname: this.state.fullname, age: this.state.age}
        console.log(item)
    }

    render () {
        console.log(this.state.fullname)
        return(
            <div>
                <div className="frm">
                    <form onSubmit={this.handleSubmit}>
                        <div className="group-item">
                            <label>FullName</label>
                            <div className="form-item"><input type="text" name="fullname" onChange={this.handleChange} value={this.state.fullname} /></div>
                        </div>
                        <div className="group-item">
                            <label>Age</label>
                            <div className="form-item"><input type="text" name="age" onChange={this.handleChange} value={this.state.age} /></div>
                        </div>
                        <div className="group-item">
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
               
                {/* <p>FullName: {this.props.active_user.fullname}</p>
                <p>Age: {this.props.active_user.age}</p> */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        active_user: state.active_user
    }
}

let UserDetailContainer = connect(mapStateToProps)(UserDetail)

export default UserDetailContainer;