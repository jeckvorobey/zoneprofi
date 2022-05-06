import { SET_ISVISIBLE } from './mutation-types';

export default {
    /**
    *
    * @param { ModalState } state
    * @param { string } isVisible
    */
    [SET_ISVISIBLE](state, { isVisible }) {
        state.isVisible = isVisible;
    },
};
