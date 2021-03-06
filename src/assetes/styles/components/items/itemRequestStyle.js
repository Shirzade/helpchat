import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
import fonts from '../../../../utils/common/fonts';

export const itemRequest = EStyleSheet.create({
  containerStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 10,
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
    marginHorizontal: 10,
    marginTop: 5,
    backgroundColor: '$colorWhite',
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 17,
    color: '$colorWhite',
    fontFamily: fonts.fontMain,
  },
  labelStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: fonts.fontMain,
  },
  subLabeleStyle: {
    fontSize: 12,
    fontFamily: fonts.fontMain,
  },
  timeLabelStyle: {
    fontSize: 12,
    marginTop: 10,
    color: '$colorMinutenFarbe',
    fontFamily: fonts.fontMain,
  },
  leftButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
    borderRadius: 15,
    paddingHorizontal: 18,
    paddingVertical: 23,
    backgroundColor: '$colorUnActiveBorder',
    position: 'absolute',
    height: 90,
    elevation: 2,
  },
  // rightButtonContainer: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginRight: 10,
  //   borderRadius: 10,
  //   paddingHorizontal: 18,
  //   paddingVertical: 23,
  //   backgroundColor: '$colorUnActiveBorder',
  //   position: 'absolute',
  //   height: 90,
  //   elevation: 2,
  // },
  valueContainer: {
    width: '100%',
    flex: 1,
    zIndex: 10,
  },
  valueStyle: {
    elevation: 3,
    borderRadius: 15,
    height: 90,
    flex: 1,
    flexDirection: 'row',
  },
  valueStyleAccept: {
    elevation: 3,
    borderRadius: 15,
    height: 90,
    backgroundColor: '$colorUnActive',
    flex: 1,
    flexDirection: 'row',
  },
  roomContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 30,
    borderBottomColor: '$colorNone',
    borderLeftColor: '$colorNone',
    borderRightColor: '$colorBorder',
    borderTopColor: '$colorNone',
    borderWidth: 1,
  },
  serviceContainer: {
    flex: 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  serviceValue: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  titleService: {
    flex: 2,
    paddingLeft: 15,
  },
  imageService: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  imageServiceContainer: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '$colorIconFarbe',
    borderRadius: 50,
  },

  imageSaredContainer: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '$colorUnActiveBorder',
    borderRadius: 50,
  },

  imageAcceptServiceContainer: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '$colorWhite',
    borderRadius: 50,
  },
  rightButtonContainer: {
    position: 'absolute',
    right: 0,
    marginTop: 7,
    height: 88,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    borderRadius: 10,
    paddingHorizontal: 18,
    elevation: 2,
    backgroundColor: '$colorSuccesfull',
  },
});
