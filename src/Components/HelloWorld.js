import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John', // Default name, you can change it to whatever you want
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>Welcome to Alfagan Software Company's website.</p>
      </div>
    );
  }
}

export default HelloWorld;
