import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const ImageTextBtn = ({BtnText, Heading}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.ImageWrapper}>
          <Image source={require('../assets/images/aitohuman.png')} />
        </View>
        <View style={styles.contentWrapper}>
          <TouchableOpacity style={styles.callToAction}>
            <Text></Text>
            <Text style={styles.Btntext}>{BtnText}</Text>
            <Image source={require('../assets/images/Rightarrow.png')} />
          </TouchableOpacity>
          <Text style={styles.subText}>{Heading}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginTop: 20,
    borderRadius: 20,
    width: 370,
    maxWidth: 378,
  },
  ImageWrapper: {},
  contentWrapper: {
    marginLeft: 14,
    top: 15,
  },
  callToAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FEA01A',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 198,
    height: 35,
    textAlign: 'center',
  },
  Btntext: {
    fontFamily: 'Inter-Bold',
    fontSize: 11,
    color: '#000000',
  },
  subText: {
    textAlign: 'center',
    top: 15,
    color: '#FEA01A',
    fontFamily: 'Inter-Medium',
    fontSize: 12,
  },
});

export default ImageTextBtn;
