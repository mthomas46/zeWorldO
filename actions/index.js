/**
 * Created by YukiOnna on 3/29/2016.
 */
import * as types from "../constants/ActionTypes";

export function testAction(text) {
    return {type: types.TEST_ACTION, text}
}

