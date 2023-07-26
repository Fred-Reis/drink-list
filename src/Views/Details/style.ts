import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    position: 'relative',
    width: '100%',
    borderBottomColor: '#414141',
    borderBottomWidth: 2,
  },

  backButton: {
    position: 'absolute',
    left: 25,
    bottom: 0,
    padding: 10,
    display: 'flex',
  },

  title: {
    margin: 10,
    textAlign: 'center',
    color: '#414141',
    fontSize: 16,
    fontWeight: 'bold',
  },

  cardContainer: {
    backgroundColor: '#a4a4a4',
    borderColor: '#414141',
    borderWidth: 2,
    padding: 20,
    margin: 10,
    width: '80%',
    borderRadius: 4,
  },

  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
