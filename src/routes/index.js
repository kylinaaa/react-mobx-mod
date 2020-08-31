import React from 'react';
import {Provider} from "mobx-react";
import {RouterStore, syncHistoryWithStore} from "mobx-react-router";
import {createHashHistory} from "history";
import {Route, HashRouter, Switch, Redirect} from "react-router-dom";

import rootStore from '@/stores';
import Home from '@/modules/home';

const hashHistory = createHashHistory();
const routerStore = new RouterStore();
const history = syncHistoryWithStore(hashHistory, routerStore);
routerStore['routing'] = routerStore;

const Routes = () => (
    <Provider {...rootStore}>
        <HashRouter history={history}>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Switch>
                <Route path={"/home"} component={Home}/>
            </Switch>
        </HashRouter>
    </Provider>
);

export default Routes