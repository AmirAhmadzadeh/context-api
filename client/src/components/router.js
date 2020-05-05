import React from 'react'
import { Route, Switch } from 'react-router-dom';
import StreamsList from './StreamsList';
import Auth from './Auth';
import CreateStream from './CreateStream';
import EditStream from './EditStream';
import DeleteStream from './DeleteStream';
import ShowStream from './StramShow';

export default function () {
  return (
    <Switch>
      <Route
        path='/'
        exact
        component={StreamsList}
      />
      <Route
        path='/streams'
        exact
        component={StreamsList}
      />
      <Route
        path='/streams/show'
        exact
        component={ShowStream}
      />
      <Route
        path='/streams/new'
        exact
        component={CreateStream}
      />
      <Route
        path='/streams/edit'
        exact
        component={EditStream}
      />

      <Route
        path='/streams/delete'
        exact
        component={DeleteStream}
      />
      <Route
        path='/auth'
        exact
        component={Auth}
      />
    </Switch>
  )
}
