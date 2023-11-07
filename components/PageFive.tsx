import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React from 'react';
import {SearchSource} from 'jest';

const PageFive = () => {
  return (
    <View style={{backgroundColor: '#E4E4E4'}}>
      <View style={{position: 'relative'}}>
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
                <Image source={require('../assets/images/search.png')} />
              </View>
            </View>
            <View>
              <Text style={styles.mainHeading}>
                EMPLOYABILITY,PROMOTION & CAREER GROWTH
              </Text>
              <View style={{position: 'relative'}}>
                <Image
                  source={require('../assets/images/cloud.png')}
                  style={styles.cloudImage}
                />
                <Text style={styles.cloudText}>
                  Advisory Selling For Consulting companies
                </Text>
                <Text style={styles.cloudText2}>
                  Consultative Selling For Telecom
                </Text>
                <Text style={styles.cloudText3}>
                  Persuasive Communication For BPOs
                </Text>
                <Text style={styles.cloudText4}>
                  Senior Negotiation Skills For Purchase Teams
                </Text>
              </View>
              <Text style={[styles.mainHeading, {top: 20}]}>
                JOBS THAT REQUIRE SPECIFIC SKILLS
              </Text>
              <View style={styles.searchWrapper}>
                <View style={styles.searchInput}>
                  <TextInput
                    placeholder="Search By Skills"
                    style={styles.searchText}></TextInput>
                  <View style={styles.searchBox}>
                    <Image source={require('../assets/images/search.png')} />
                  </View>
                </View>
              </View>
              <View style={styles.searchWrapper}>
                <View style={[styles.searchInput, {top: 50}]}>
                  <TextInput
                    placeholder="Search By Industry"
                    style={styles.searchText}></TextInput>
                  <View style={styles.searchBox}>
                    <Image source={require('../assets/images/search.png')} />
                  </View>
                </View>
              </View>
              <View style={styles.partnersWrapper}>
                <View style={styles.upperImageRow}>
                  <Image
                    source={require('../assets/images/genpact.png')}
                    style={styles.partnerBorder}
                  />
                  <Image
                    source={require('../assets/images/dupont.png')}
                    style={styles.partnerBorder}
                  />
                  <Image
                    source={require('../assets/images/exl.png')}
                    style={styles.partnerBorder}
                  />
                  <Image
                    source={require('../assets/images/infosys.png')}
                    style={styles.partnerBorder}
                  />
                </View>
                <View style={styles.lowerImageRow}>
                  <Image
                    source={require('../assets/images/reddy.png')}
                    style={styles.partnerBorder}
                  />
                  <Image
                    source={require('../assets/images/mahindra.png')}
                    style={styles.partnerBorder}
                  />
                  <Image
                    source={require('../assets/images/mrf.png')}
                    style={[styles.partnerBorder, {height: 48, width: 48}]}
                  />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </View>
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
    Top: 311,
  },
  smallYellow: {
    width: 70,
    height: 70,
    marginLeft: -30,
    marginTop: 520,
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
  mainHeading: {
    fontFamily: 'Inter-Bold',
    color: '#371BC6',
    width: 290,
    height: 48,
    textAlign: 'center',
    marginHorizontal: 50,
    top: 87,
    fontSize: 20,
  },
  cloudImage: {
    marginTop: 100,
  },
  cloudText: {
    position: 'absolute',
    marginTop: 140,
    marginLeft: 70,
    width: 152,
    height: 30,
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#1FADB1',
    textAlign: 'center',
  },
  cloudText2: {
    position: 'absolute',
    marginTop: 180,
    marginLeft: 150,
    width: 152,
    height: 30,
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#AC0D4D',
    textAlign: 'center',
  },
  cloudText3: {
    position: 'absolute',
    marginTop: 215,
    marginLeft: 40,
    width: 152,
    height: 30,
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#F0831B',
    textAlign: 'center',
  },
  cloudText4: {
    position: 'absolute',
    marginTop: 260,
    marginLeft: 110,
    width: 152,
    height: 30,
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#0D83EF',
    textAlign: 'center',
  },
  searchWrapper: {
    width: 360,
    height: 54,
    marginHorizontal: 16,
  },
  searchInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 40,
    borderWidth: 1,
    borderColor: '#371BC6',
    borderRadius: 30,
    padding: 5,
  },
  searchText: {
    fontFamily: 'Inter-Regular',
    width: 300,
    color: '#8E8E8E',
    fontSize: 16,
  },
  partnersWrapper: {
    top: 70,
    backgroundColor: '#ffffff',
    width: 362,
    height: 127,
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 16,
    borderRadius: 15,
  },
  upperImageRow: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 30,
    marginHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerImageRow: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 30,
    marginHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  partnerBorder: {
    borderWidth: 1,
    borderColor: '#371BC6',
    borderRadius: 15,
  },
});

export default PageFive;
