import { StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white',
  },
  welcomeText: {
    color: 'black',
    marginBottom: hp('2%'),
    marginLeft: wp('2%'),
    textAlign: 'left',
    fontSize: wp('6%'),
  },
  inputField: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: hp('2%'),
    paddingLeft: wp('3%'),
    height: hp('6%'),
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: 'black',
  },
  textHead: {
    color: 'black',
    marginBottom: hp('1%'),
    marginLeft: wp('2%'),
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
  buttonDark: {
    backgroundColor: 'black',
    padding: hp('2%'),
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonTextDark: {
    color: 'white',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
});
