import React, { Component } from 'react';

class NameChanger extends Component {
  state = {
    name: null,
    index: 0
  };

  componentDidMount() {
    window.setInterval(this.changeName, 1500);
  }

  changeName = () => {
    const names = ['el-40', 'eladi-da', 'ol lightsy'];
    const { index } = this.state;
    
    this.setState(prevState => ({
      name: names[index],
      index: 
        (index === names.length - 1) 
          ? 0 
          : prevState.index + 1
    }));
  };

  render() {
    const { name } = this.state;

    return (
      <span className="name-changer">
        {name}
      </span>
    );
  }
}

export default NameChanger;
