import React, { Component } from 'react';

class NameChanger extends Component {
  state = {
    name: null,
    fontFamily: null,
    index: 0,
    playing: false
  };

  componentDidMount() {
    const { span, changeName } = this;

    span.addEventListener('animationiteration', 
      () => changeName()
    );

    this.setState({ playing: true });
  }

  changeFont = (index) => {
    switch (index) {
      case 0:
        return 'Sedgwick Ave Display';
      case 1:
        return 'Bangers';
      case 2:
        return 'Luckiest Guy';
      default:
        return 'Bangers';
    }
  };

  changeName = () => {
    const names = ['ol lightsy', 'eladi-da', 'el-40', 'elautopilot'];
    const { index } = this.state;
    const { changeFont } = this;
    
    this.setState(prevState => ({
      name: names[index],
      fontFamily: changeFont(index),
      index: (index === names.length - 1) 
        ? 0 
        : prevState.index + 1
    }));
  };

  render() {
    const { name, fontFamily, playing } = this.state;

    return (
      <span
        className={`name-changer ${playing ? 'playing' : ''}`} 
        ref={span => this.span = span}
        style={{ 
          fontFamily,
          position: 'relative',
          top: (name === 'el-40') ? '.25rem' : ''
        }}
      >
        {name}
      </span>
    );
  }
}

export default NameChanger;
