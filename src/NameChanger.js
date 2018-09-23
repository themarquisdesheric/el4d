import React, { Component } from 'react';

class NameChanger extends Component {
  state = {
    name: null,
    fontFamily: null,
    index: 0,
    playing: false
  };

  componentDidMount() {
    this.span.addEventListener(
      'animationiteration', 
      () => this.changeName()
    );

    this.setState({ playing: true });
  }

  changeFont = (name) => {
    switch (name) {
      case 'ol lightsy':
        return 'Sedgwick Ave Display';
      case 'el-40':
      case '4d':
      case 'e-lad':
        return 'Luckiest Guy';
      default:
        return 'Bangers';
    }
  };

  changeName = () => {
    const names = ['ol lightsy', 'eladi-da', 'el-40', 'elautopilot', '4d', 'eladio', 'e-lad'];
    const { index } = this.state;
    const name = names[index];
    
    this.setState(prevState => ({
      name,
      fontFamily: this.changeFont(name),
      index: (index === names.length - 1) 
        ? 0 
        : prevState.index + 1
    }));
  };

  render() {
    const { name, fontFamily, playing } = this.state;
    const styles = { 
      fontFamily,
      top: (name === 'el-40' || name === '4d' || name === 'e-lad') 
        ? '.25rem' 
        : ''
    };

    return (
      <span
        className={`name-changer ${playing ? 'playing' : ''}`} 
        ref={span => this.span = span}
        style={styles}
      >
        {name}
      </span>
    );
  }
}

export default NameChanger;
