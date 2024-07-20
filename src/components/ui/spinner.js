import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Spinner;
