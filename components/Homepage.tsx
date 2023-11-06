import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import Template from './Template';

const Homepage = () => {
  return (
    <View>
      <Template>
        <View style={styles.contentWrapper}>
          <View style={styles.ImgTextWrapper}>
            <Image
              source={require('../assets/images/handimage.png')}
              style={styles.handImg}
            />
            <View style={styles.textStack}>
              <Text style={styles.headingText}>WHAT IS AICANSELL</Text>
              <Text style={styles.blueText}>Respond to tough situations</Text>
              <Text style={styles.orangeText}>Check Your Skills-on-the-go</Text>
            </View>
          </View>
          <View style={styles.desc}>
            <Text style={styles.descText}>COMPARE YOURSELF ON SKILLS THAT</Text>
            <Text style={styles.descText}>EMPLOYERS FIND CRITICAL, TO </Text>
            <Text style={styles.descText}>HIRE OR PROMOTE</Text>
          </View>
        </View>
        <View style={styles.contentWrapper2}>
          <View style={styles.videoPlayer}>
            <Image
              source={require('../assets/images/robothinkimage.png')}
              style={styles.VideoBack}
            />
            <Image
              source={require('../assets/images/playicon.png')}
              style={styles.PlayIcon}
            />
          </View>
          <View style={styles.VideoSideContainer}>
            <Text style={styles.VideoSideContainerHeading}>WHY DO-JADU?</Text>
            <View style={styles.VideoSideContainerSub}>
              <Text style={styles.VideoSideContainerText}>Employability</Text>
              <Text style={styles.VideoSideContainerText}>Promotion &</Text>
              <Text style={styles.VideoSideContainerText}>Career Growth</Text>
            </View>
          </View>
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.Title}>
            TAKE CHALLENGES & RESPOND TO SITUATIONS
          </Text>
          <View style={styles.advert}>
            <Image
              source={require('../assets/images/iphoneimage.png')}
              style={styles.iphone}
            />
            <Text style={styles.subHeading}>win iphones & Laptops</Text>
          </View>
          <View style={styles.callToAction}>
            <Text style={styles.TitleButton}>DO JADU</Text>
            <Image source={require('../assets/images/Rightarrow.png')} />
          </View>
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.Title}>
            EXPLORE - HOW OTHERS RESPONDED TO SITUATIONS
          </Text>
          <Text style={styles.subHeading}>and improve your skills</Text>
          <View style={styles.callToAction}>
            <View style={styles.reduceText}>
              <Text style={styles.TitleButton}>Learn from</Text>
              <Text style={styles.TitleButton}>Others Jadu</Text>
            </View>
            <Image source={require('../assets/images/Rightarrow.png')} />
          </View>
        </View>
        <Text style={styles.BottomText}>
          Don’t have an account?{' '}
          <Text style={{color: '#FEA01A'}}>Please Signup here</Text>
        </Text>
      </Template>
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    marginTop: 12,
    backgroundColor: '#FFFFFF',
    marginLeft: 12,
    marginRight: 'auto',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 367,
    width: 367,
  },
  ImgTextWrapper: {
    padding: 16,
    flexDirection: 'row',
  },
  handImg: {
    width: 97,
    height: 97,
  },
  textStack: {
    marginLeft: 37,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontFamily: 'Inter-ExtraBold',
    color: '#000000',
    fontSize: 20,
  },
  blueText: {
    fontFamily: 'Inter-SemiBold',
    color: '#371BC6',
    fontSize: 12,
    marginTop: 15,
  },
  orangeText: {
    fontFamily: 'Inter-SemiBold',
    color: '#FEA01A',
    fontSize: 12,
  },
  desc: {
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  descText: {
    fontSize: 14,
    color: '#1C6ADC',
    fontFamily: 'Inter-Bold',
    marginVertical: -2,
  },
  contentWrapper2: {
    flexDirection: 'row',
    marginLeft: 12,
    marginTop: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginRight: 'auto',
    maxWidth: 367,
    width: 376,
  },
  videoPlayer: {
    position: 'relative',
  },
  VideoBack: {},
  PlayIcon: {
    position: 'absolute',
    left: 50,
    right: 'auto',
    top: 38,
  },
  VideoSideContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 34,
  },
  VideoSideContainerHeading: {
    fontSize: 20,
    fontFamily: 'Inter-ExtraBold',
    color: '#000000',
    marginTop: 18,
  },
  VideoSideContainerSub: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  VideoSideContainerText: {
    color: '#FEA01A',
    fontSize: 14,
    fontFamily: 'Inter-Bold',
  },
  Title: {
    fontFamily: 'Inter-Bold',
    color: '#000000',
    marginTop: 15,
    fontSize: 13,
  },
  advert: {
    flexDirection: 'row',
  },
  iphone: {width: 13, height: 26},
  subHeading: {
    marginLeft: 12,
    color: '#000000',
    fontFamily: 'Inter-Regular',
  },
  callToAction: {
    backgroundColor: '#FEA01A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: 208,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 15,
  },
  TitleButton: {
    fontFamily: 'Inter-Bold',
    color: '#000000',
  },
  reduceText: {
    marginVertical: -5,
  },
  BottomText: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 13,
    alignSelf: 'center',
    color: '#000000',
    marginTop: 12,
  },
});
export default Homepage;
