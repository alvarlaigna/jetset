import React from 'react';
import subscribe from '../../src/subscribe';

// TODO: we'll need state naming convention + clear way to subscribe to nested
// state
@subscribe( 'example', 'optional initial state' )
class SubscriptionExample extends React.Component {
  render() {
    return (
      <div>
        <span>Example state: { this.props.example.get() }</span>
        <button onClick={() => this.props.example.set( 'foo' )}>Set to foo</button>
        <button onClick={() => this.props.example.set( 'bar' )}>Set to bar</button>
      </div>
    );
  }
}

export default SubscriptionExample;