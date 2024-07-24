import { StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('5%'),
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'grey',
  },
  header: {
    padding: wp('3%'),
    fontSize: wp('5%'),
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'lightgrey',
    textAlign: 'center',
    borderRadius: 10,
    marginBottom: hp('2%'),
  },
  text: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: 'black',
    margin: hp('1.5%'),
  },
  inputField: {
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: wp('1.5%'),
    paddingLeft: wp('4%'),
    paddingRight: wp('4%'),
    fontSize: wp('4%'),
    color: 'black',
  },
  button: {
    marginTop: hp('4%'),
    backgroundColor: 'black',
    padding: hp('2%'),
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: 'white',
  },
});
