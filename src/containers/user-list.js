import React, {Component} from 'react';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import {selectUser, removeUser} from '../actions/index';

class UserList extends Component {
    
    list_item() {
        console.log(this.props.users);
        let data = this.props.users.map((item) => {
            return (
                    <tr key={item.id}>
                        <td>{item.fullname}</td>
                        <td>{item.age}</td>
                        <td>
                            <a className="btn btn-warning" onClick={() => {this.props.selectUser(item)}}><i className="fas fa-edit"></i></a>
                            <a className="btn btn-danger" onClick={() => {this.props.removeUser(item.id)}}><i className="fas fa-trash"></i></a>
                        </td>
                    </tr>
                )
        });
        return data;
    }
    
    render(){
        console.log(this.props.users);
        return (
            <table id="table-users" className="table table-hover">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.list_item()}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { users: state.users }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectUser: selectUser, removeUser: removeUser}, dispatch)
}

let UserContainer = connect(mapStateToProps, mapDispatchToProps)(UserList)

export default UserContainer;