import React         from 'react';
import Routes        from "../src/routes";
import {createStore} from 'redux';
import {Provider}    from 'react-redux';
import rootReducer   from './reducers';
import './global.css';
import 'antd/dist/antd.css';


function App()
{
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    );
}

export default App;