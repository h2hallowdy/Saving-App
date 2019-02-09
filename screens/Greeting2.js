import React from 'react';
import { Dimensions, View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Balanced from '../assets/balanced.jpg';
import NavigationDots2 from '../assets/Navigation-dots-2.png';

const dimensions = Dimensions.get('window');
const Height = Math.round(dimensions.width * 9 / 16);
const Width = dimensions.width;

export default class Greeting2 extends React.Component {
  render() {
    const { onPress } = this.props;
    return (
      <View style={styles.container}>
        <View style={[styles.triangle, styles.triangleBottomRight]}></View>
        <Image
          style={{ height: Height, width: Width }}
          source={Balanced}
          resizeMode='cover'
        />
        <View style={styles.triangle}></View>
        <View style={styles.wrapperText}>
          <Text style={styles.title}>Get balanced</Text>
          <Text style={styles.text}>
            Balance your life with works, food and especially
          </Text>
          <Text style={styles.text}>
            money. We're here to help you to plan
          </Text>
          <Text style={styles.text}>
            saving money for anything you love!
        </Text>
        </View>
        <Image
          style={{ height: 40, width: Width, marginBottom: 10 }}
          source={NavigationDots2}
          resizeMode='contain'
        />
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} activeOpacity={0.2} onPress={onPress}>
            <Text style={styles.textButton}>Next</Text>
          </TouchableOpacity>
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
    borderTopWidth: 80,
    borderRightColor: 'transparent',
    borderTopColor: '#ACEBDA'
  },
  triangleBottomRight: {
    transform: [
      { rotate: '180deg' }
    ]
  },
  wrapperText: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
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
  },
  buttonWrapper: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10
  },
  button: {
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ACEBDA',
    borderRadius: 5,
    borderColor: '#000',
    elevation: 2
  },
  textButton: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500'
  }
})