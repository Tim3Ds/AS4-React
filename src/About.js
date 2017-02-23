import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        Hello, React Router! <br />
        <Link to="/">Home</Link>
      </div>
      
    )

  }
});