import React, { Component } from 'react';
import Foo from 'components/Foo'
// import { Foo } from 'components'

export default class App extends Component {
  render() {
    return (
      <div>
        <Foo />
        Hello Universal Redux!
      </div>
    );
  }
}
