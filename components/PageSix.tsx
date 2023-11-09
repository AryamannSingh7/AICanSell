import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Template from './Template';
import ImageTextBtn from './ImageTextBtn';

const PageSix = () => {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <Template>
            <View
              style={{
                maxWidth: 390,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.Banner}>
                <Image
                  source={require('../assets/images/3iphone.png')}
                  style={styles.bannerImage}
                />
                <View style={styles.BannerText}>
                  <Text style={styles.bannerHeading}>
                    DO <Text style={{color: '#371BC6'}}>JADU</Text>
                  </Text>
                  <Text style={styles.bannerSubHeading}>
                    CHALLENGES THAT UP YOUR SKILLS
                  </Text>
                  <Text style={styles.bannerDesc}>
                    Take challenge & win prizes every week
                  </Text>
                  <Text style={styles.bannerDesc}> (Top 3 responses)</Text>
                </View>
              </View>
              <ImageTextBtn
                BtnText={'JADU INTERVIEWS'}
                Heading={'1214 SITUATIONS'}
              />
              <ImageTextBtn
                BtnText={'JADU SELLING'}
                Heading={'1350 SITUATIONS'}
              />
              <ImageTextBtn
                BtnText={'JADU BOSS INTERACTIONS'}
                Heading={'2350 SITUATIONS'}
              />
              <ImageTextBtn
                BtnText={'JADU INTERVIEWS'}
                Heading={'1214 SITUATIONS'}
              />
              <ImageTextBtn
                BtnText={'JADU INTERVIEWS'}
                Heading={'1214 SITUATIONS'}
              />
              <Text
                style={{
                  color: '#FFFFFF',
                  marginTop: 20,
                  fontFamily: 'Inter-Bold',
                  fontSize: 14,
                }}>
                View More
              </Text>
            </View>
          </Template>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  Banner: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 23,
    marginTop: 38,
  },
  bannerImage: {
    top: 20,
  },
  BannerText: {
    paddingTop: 25,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    paddingBottom: 13,
  },
  bannerHeading: {color: '#FEA01A', fontFamily: 'Inter-Bold', fontSize: 18},
  bannerSubHeading: {
    color: '#FEA01A',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
  },
  bannerDesc: {color: '#FEA01A', fontFamily: 'Inter-SemiBold', fontSize: 12},
});

export default PageSix;
