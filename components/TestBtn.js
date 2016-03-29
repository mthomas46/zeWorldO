import React, {PropTypes, Component} from "react";
import {Button} from "react-bootstrap";
import {TEST_ACTION} from "../constants/ActionTypes";

const FILTER_TITLES = {
    [TEST_ACTION]: 'Test_Action',
};

class TestBtn extends Component {


    render() {
        return (
            <Button bsStyle="primary">DO NOT PUSH</Button>
        )
    }
}

export default Footer
