import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Contacts from '../components';
import Dashboard from '../components/dashboard';

export default function ApplicationRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/home" component={Dashboard} />
            <Route path="/about" component={Dashboard} />
            <Route path="/advantage" component={Dashboard} />
            <Route path="/contact-us" component={Dashboard} />
            <Route path="/ContactSystem" component={Contacts} />
        </Switch>
    );
};
