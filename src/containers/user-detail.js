import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser} from '../actions/index';

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
        // console.log('componentWillMount');
        // console.log(this.props)
        if (this.props.active_user) {
            this.setState({
                fullname: this.props.active_user.fullname,
                age: this.props.active_user.age
            })
        }
        
        // console.log(this.state)
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps');
        console.log(this.props);
        console.log(nextProps);
        if (nextProps.add_user) {
            nextProps.users.push(nextProps.add_user);
            console.log(nextProps)
        }
        
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
            // console.log(this.state.fullname)
        })
        console.log(event.target.value)
        // console.log(this.state.fullname)
    }

    handleSubmit(event) {
        event.preventDefault();
        let item = {fullname: this.state.fullname, age: this.state.age}
        this.props.addUser(item)
        // console.log(this.props.add_user)
    }

    render () {
        console.log(this.props)
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
        users: state.users,
        active_user: state.active_user,
        add_user: state.add_user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addUser: addUser
    }, dispatch)
}

let UserDetailContainer = connect(mapStateToProps, mapDispatchToProps) (UserDetail)

export default UserDetailContainer;