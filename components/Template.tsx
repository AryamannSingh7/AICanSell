import {
  View,
  Text,
  Image,
  StyleSheet,
  PixelRatio,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const Template = ({children}) => {
  return (
    <View style={{position: 'relative', backgroundColor: '#E4E4E4'}}>
      <StatusBar hidden={true} />
      {/*Background*/}
      <Image
        source={require('../assets/images/bigyellowcircle.png')}
        style={styles.BigYellow}
      />
      <Image
        source={require('../assets/images/smallbluecircle.png')}
        style={styles.smallBlue}
      />
      <Image
        source={require('../assets/images/bigbluecircle.png')}
        style={styles.bigBlue}
      />
      <Image
        source={require('../assets/images/smallyellowcircle.png')}
        style={styles.smallYellow}
      />
      <View style={styles.container}>
        <SafeAreaView>
          {/*Header*/}
          <View style={styles.headerWrapper}>
            <Image
              source={require('../assets/images/backarrow.png')}
              style={styles.backButton}
            />
            <Image
              source={require('../assets/images/logohead.png')}
              style={styles.logoHead}
            />
            <View style={styles.selectBox}>
              <Text></Text>
              <Text style={styles.selectBoxText}>I want to improve in</Text>
              <Image
                source={require('../assets/images/downarrow.png')}
                style={styles.selectBoxDropMenu}
              />
            </View>
            <View style={styles.searchBox}>
              <Image
                source={require('../assets/images/search.png')}
                style={styles.searchIcon}
              />
            </View>
          </View>
          <View>{children}</View>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BigYellow: {
    width: 243.76,
    height: 175.9,
    marginLeft: 206,
    position: 'absolute',
  },
  smallBlue: {
    width: 43.727,
    height: 86.383,
    marginTop: 141,
    marginLeft: -12.786,
  },
  bigBlue: {
    width: 426,
    height: 426,
    marginTop: 311,
  },
  smallYellow: {
    width: 70,
    height: 70,
    position: 'absolute',
    marginLeft: -30,
    top: 730,
  },
  container: {
    position: 'absolute',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 2,
  },
  backButton: {
    width: 14,
    height: 20,
  },
  logoHead: {
    width: 69,
    height: 29,
    marginLeft: 14.32,
  },
  selectBox: {
    width: 227,
    height: 34,
    padding: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 5.86,
  },
  selectBoxText: {
    fontFamily: 'Inter-Bold',
    color: '#000000',
  },
  selectBoxDropMenu: {
    marginRight: 10,
  },
  searchBox: {
    width: 34,
    height: 34,
    backgroundColor: '#371BC6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 12,
  },
  searchIcon: {},
});

export default Template;
