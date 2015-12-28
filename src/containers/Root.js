import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import store from 'store';

export default class Root extends Component {
  render(){
    return (
      <div>
        <Provider store={store}>
          <ReduxRouter/>
        </Provider>
      </div>
    );
  }
}
