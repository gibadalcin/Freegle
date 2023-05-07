import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    rowGap: 20,
    paddingHorizontal: 14,
    elevation: 300,
    justifyContent: 'center',
  },

  customNav: {
    position: 'absolute',
    width: 350,
    height: 350,
    borderRadius: 230,
    borderColor: '#00000099',
    borderWidth: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    top: '27%',
  },

  customNavButtom: {
    position: 'relative',
    backgroundColor: '#000000',
    width: 226,
    height: 226,
    borderRadius: 230,
    borderColor: '#dfc691',
    borderWidth: 1,
  },

  navIconBack: {
    position: 'absolute',
    top: '-4%',
    left: 0,
    flex: 1,
  },

  navIconRefresh: {
    position: 'absolute',
    top: '-22%',
    flex: 1,
  },

  navIconClose: {
    position: 'absolute',
    top: '-4%',
    right: 0,
    flex: 1,
  },

  navIconRegister: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 1,
  },

  navIconList: {
    position: 'absolute',
    bottom: '-20%',
    flex: 1,
  },

  navIconLogin: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    flex: 1,
  },
});

export default styles;
