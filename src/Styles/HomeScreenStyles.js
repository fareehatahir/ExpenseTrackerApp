import { StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('5%'),
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'gray',
  },
  welcomeText: {
    marginVertical: hp('2%'),
    padding: wp('3%'),
    fontSize: wp('4%'),
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'lightgrey',
    textAlign: 'justify',
    borderRadius: 10,
  },
  button: {
    marginTop: hp('2%'),
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
  item: {
    borderWidth: 1,
    padding: wp('3%'),
    margin: hp('1%'),
    backgroundColor: 'white',
    fontSize: wp('4%'),
    color: 'black',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  itemText: {
    color: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: wp('4%'),
  },
  xAxisLabel: {
    fontSize: wp('3%'),
    color: 'black',
    fontWeight: '900',
    marginTop: hp('0.2%'),
  },
  noDataText: {
    textAlign: 'center',
    color: 'white',
    marginTop: hp('2%'),
    fontSize: wp('4%'),
  },
});
