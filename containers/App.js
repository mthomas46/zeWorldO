import React, {Component, PropTypes} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import TestBtn from "../components/TestBtn";
import * as TodoActions from "../actions";

class App extends Component {
    render() {
        const {todos, actions} = this.props;
        return (
            <div>
                <TestBtn />

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)