import React, { Component } from 'react';

class NameChanger extends Component {
  state = {
    name: null,
    fontFamily: null,
    index: 0
  };

  componentDidMount() {
    window.setInterval(this.changeName, 1500);
  }

  changeFont = (index) => {
    switch (index) {
      case 0:
        return 'Sedgwick Ave Display';
      case 1:
        return 'Bangers';
      case 2:
        return 'Luckiest Guy';
    }
  };

  changeName = () => {
    const names = ['ol lightsy', 'eladi-da', 'el-40'];
    const { fontFamily, index } = this.state;
    const { changeFont } = this;
    
    this.setState(prevState => ({
      name: names[index],
      fontFamily: changeFont(index),
      index: 
        (index === names.length - 1) 
          ? 0 
          : prevState.index + 1
    }));
  };

  render() {
    const { name, fontFamily, index } = this.state;

    return (
      <span className="name-changer" style={{ fontFamily }}>
        {name}
      </span>
    );
  }
}

export default NameChanger;
