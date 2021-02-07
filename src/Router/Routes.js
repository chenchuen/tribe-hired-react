import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import AuthLoginScreen from '../Containers/Login';
import HomeScreen from '../Containers/Home';
import AuthSignUpScreen from '../Containers/SignUp';

import PrivateRoute from './PrivateRoute';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/login' component={AuthLoginScreen} />
                <Route exact path='/signUp' component={AuthSignUpScreen} />
                <PrivateRoute exact path='/' component={HomeScreen} />

                <Route path='*'>
                    <Redirect to='/' />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
