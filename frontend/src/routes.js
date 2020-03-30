import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/Profile" component={Profile} />
                <Route path='/incidents/new' component={NewIncident} />
                <Route path="/" component={Logon} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;