import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from "./App";
import Reminder from "./components/reminder"
const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={App} />
                <Route
                    path="/reminder/:id/:index"
                    component={Reminder}
                />
            </Switch>
        </main>
    );
};
export default Main;
