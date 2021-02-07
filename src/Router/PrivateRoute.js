import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem('authToken') || null;

    const renderBody = (props) => {
        if (isAuthenticated) {
            return <Component {...props} />;
        }

        return (
            <Redirect
                to={{
                    pathname: '/login',
                    state: { from: props.location },
                }}
            />
        );
    };

    return (
        <Route
            {...rest}
            render={renderBody}
        />
    );
};

export default PrivateRoute;
