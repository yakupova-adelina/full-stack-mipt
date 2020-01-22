export function login(username, password) {
    return dispatch => {
        dispatch( { type: 'LOGIN', username, password } );
    };
}

export function logout() {
    return dispatch => {
        dispatch( { type: 'LOGOUT' } );
    };
}

export function register(username, password, favourite_color) {
    return dispatch => {
        dispatch( { type: 'REGISTER', username, password, favourite_color } );
    };
}

export function change_favourite_color(favourite_color) {
    return dispatch => {
        dispatch( { type: 'CHANGE_FAVOURITE_COLOR', favourite_color } );
    };
}