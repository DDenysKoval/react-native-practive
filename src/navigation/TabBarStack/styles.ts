import {StyleSheet} from 'react-native';
import {fonts} from '../../constants/fonts';

export default StyleSheet.create({
  tabBarIcon: {alignItems: 'center', gap: 5},
  tabBarText: {
    fontFamily: fonts.MontserratRegular,
  },
  tabBarHeader: {
    width: '100%',
    height: 60,
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {width: '100%', height: 2, backgroundColor: 'black'},
  burgerBtn: {
    height: 20,
    gap: 5,
    width: 20,
  },
});
