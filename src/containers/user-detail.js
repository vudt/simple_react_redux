import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actSubmitForm} from '../actions/index';
const uuidv4 = require('uuid/v4');

class UserDetail extends Component {

    constructor(props){
        super(props)
        this.state = {
            id: '',
            fullname: '',
            age: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount(){
        // console.log('componentWillMount');
        // console.log(this.props)
        this.updateItem(this.props.active_user)
        // if (this.props.active_user) {
        //     this.setState({
        //         fullname: this.props.active_user.fullname,
        //         age: this.props.active_user.age
        //     })
        // }
        
        // console.log(this.state)
    }

    componentWillReceiveProps(nextProps){
        this.updateItem(nextProps.active_user)
        // if (nextProps.active_user) {
        //     this.setState({
        //         fullname: nextProps.active_user.fullname,
        //         age: nextProps.active_user.age
        //     })
        // }
    }

    updateItem(item){
        if (item !== null) {
            this.setState({
                id: item.id,
                fullname: item.fullname,
                age: item.age
            })
        }
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value 
        }, () => {
            // console.log(this.state.fullname)
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        let item = {id: this.state.id, fullname: this.state.fullname, age: this.state.age}
        console.log(item)
        this.props.actSubmitForm(item)
    }

    render () {
        return(
            <div>
                <div className="frm">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>FullName</label>
                            <input type="text" className="form-control" name="fullname" onChange={this.handleChange} value={this.state.fullname} />
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input type="text" className="form-control" name="age" onChange={this.handleChange} value={this.state.age} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Save <i className="far fa-save"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        active_user: state.active_user,
        // add_user: state.add_user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        actSubmitForm: actSubmitForm
    }, dispatch)
}

let UserDetailContainer = connect(mapStateToProps, mapDispatchToProps) (UserDetail)

export default UserDetailContainer;