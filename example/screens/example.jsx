import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/customButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrementCount,
  incrementCount,
  resetCount,
} from '../store/actions/counterActions';

const Example = () => {
  const dispatch = useDispatch();

  const {count} = useSelector(state => state.counter);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 50, fontWeight: '600'}}>{count}</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', padding: 10}}>
          <CustomButton
            onPress={() => dispatch(incrementCount())}
            title="INCREMENT"
            color="blue"
          />
          <CustomButton
            title="DECREMENT"
            color="orange"
            onPress={() => dispatch(decrementCount())}
          />
          <CustomButton
            title="RESET"
            color="red"
            onPress={() => dispatch(resetCount(0))}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Example;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    flex: 1,
  },
});
