import React, {Component} from 'react';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import {selectUser} from '../actions/index';

class UserList extends Component {
    
    list_item() {
        let data = this.props.users.map((item) => {
            return (
                <li key={item.id} onClick={() => {this.props.selectUser(item)}}>
                    Full Name: {item.fullname}
                </li>
                )
        });
        return data;
    }
    
    render(){
        return (
            <ul>
                {this.list_item()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return { users: state.users }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectUser: selectUser}, dispatch)
}

let UserContainer = connect(mapStateToProps, mapDispatchToProps)(UserList)

export default UserContainer;