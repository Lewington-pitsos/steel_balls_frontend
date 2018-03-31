import React from 'react'
import ReactDOM from 'react-dom';
import App from '../public/assets/javascripts/components/App.js'

describe("App Component provides basic functionality", function() {
  it("renders without crashing", function() {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div)
  });
});
