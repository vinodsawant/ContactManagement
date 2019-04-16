import React from 'react';
import {ConnectedRouter} from 'react-router-redux';
import ApplicationRoutes from '../routes/Routes';

const App = ({history}) => (
    <ConnectedRouter history={history}>
        <ApplicationRoutes />
    </ConnectedRouter>
);

export default App;
