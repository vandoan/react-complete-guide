import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});
// Globally available

export default authContext;