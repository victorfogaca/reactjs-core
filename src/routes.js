import React                                    from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Logon                                    from "./pages/Logon";
import Home                                     from "./pages/Home";
import {System}                                 from "./configs/System";
import allActions                               from "./reducers/actions";
import {useDispatch}                            from "react-redux";
import Module                                   from "./pages/Core/Module";

const objAccess = JSON.parse(localStorage.getItem(System.core.storageKey));

function Routes()
{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <PrivateRoute path="/home" component={Home}/>
                <PrivateRoute path="/core/modules" component={Module}/>
            </Switch>
        </BrowserRouter>
    );
}

function PrivateRoute({children, ...rest})
{
    const dispatch  = useDispatch();

    if (objAccess?.access?.token)
    {
        dispatch(allActions.ApplicationActions.setAccess(objAccess));
    }
    return (objAccess?.access?.token ? <Route {...rest}/> : <Redirect to={{pathname : "/"}}/>);
}

export default Routes;