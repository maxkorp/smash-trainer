const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('mobx-react');

const store = require('./store').store();
const Layout = require('./components/layout');

function init() {
  ReactDOM.render(
    (
      <Provider store={store}>
        <Layout />
      </Provider>
    ),
    document.getElementById('react-app')
  );
}

document.addEventListener('DOMContentLoaded', function () {
  init();
});
