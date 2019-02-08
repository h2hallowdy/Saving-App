import React from 'react';
import { Dimensions, View, Image, StyleSheet, Text } from 'react-native';
import Dogwalker from '../assets/dogwalker.png';
import Path from '../assets/Path2.jpg';


const dimensions = Dimensions.get('window');
const Height = Math.round(dimensions.width * 9 / 16);
const Width = dimensions.width;
export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.triangle, styles.triangleBottomRight]}></View>
        <Image
          style={{ height: Height, width: Width }}
          source={Dogwalker}
          resizeMode='contain'
        />
        <View style={styles.triangle}></View>
        <View style={styles.wrapperText}>
          <Text style={styles.title}>Get organized</Text>
          <Text style={styles.text}>
            Life gets a lot of easier when you plan for
            </Text>
          <Text style={styles.text}>
            yourself. Especially, financially!
            </Text>
          <Text style={styles.text}>
            We're here to help you with just that!
          </Text>
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: Width,
    borderTopWidth: 50,
    borderRightColor: 'transparent',
    borderTopColor: '#FEDBBF'
  },
  triangleBottomRight: {
    transform: [
      { rotate: '180deg' }
    ]
  },
  wrapperText: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: '400',
    marginBottom: 10
  },
  text: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 16,
    lineHeight: 40
  }
})