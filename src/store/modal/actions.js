import { SET_ISVISIBLE } from './mutation-types';

/**
*
* @param { function } commit
* @param { boolean } isVisible
*/
export function setIsVisible({ commit }, { isVisible }) {
    commit(SET_ISVISIBLE, { isVisible });
}
