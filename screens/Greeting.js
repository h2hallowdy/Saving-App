import React from 'react';
import PropTypes from 'prop-types';
import Greeting1 from './Greeting1';
import Greeting2 from './Greeting2';
import Greeting3 from './Greeting3';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenIndex: 1
    };
    this.onPressScreen1 = this.onPressScreen1.bind(this);
    this.onPressScreen2 = this.onPressScreen2.bind(this);
  }

  onPressScreen1() {
    this.setState({ screenIndex: 2 });
  }
  onPressScreen2() {
    this.setState({ screenIndex: 3 });
  }


  render() {
    console.log(this.state.screenIndex);
    const { screenIndex } = this.state;
    switch (screenIndex) {
      case 1:
        return (
          <Greeting1 onPress={this.onPressScreen1} />
        );
      case 2:
        return (
          <Greeting2 onPress={this.onPressScreen2} />
        );
      case 3:
        return (
          <Greeting3 onPress={this.props.onDone}/>
        );
    }

  }
}

Greeting.propTypes = {
  onDone: PropTypes.func.isRequired
};
