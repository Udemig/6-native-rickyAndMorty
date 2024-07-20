import {FlatList, SafeAreaView, Text, TextInput, View} from 'react-native';
import CustomButton from '../components/customButton';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addItem} from '../store/actions/todoActions';
import TodoItem from '../components/TodoItem';

const Todo = () => {
  const [newTodo, setNewTodo] = useState('todo');
  const {todoList} = useSelector(state => state.todo);
  console.log('todo:', todoList);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <View>
        <TextInput
          onChangeText={text => setNewTodo(text)}
          placeholder="Todo title"
          style={{
            backgroundColor: '#f2f2f2',
            height: 50,
            fontSize: 18,
            paddingHorizontal: 5,
            margin: 10,
            borderRadius: 5,
          }}
        />
        <CustomButton
          onPress={() =>
            dispatch(
              addItem({
                id: todoList.length + 1,
                title: `${newTodo} `,
              }),
            )
          }
          title="Add Todo"
          color="#017ec7"
        />
      </View>
      <View>
        <FlatList
          data={todoList}
          renderItem={({item}) => <TodoItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};
export default Todo;
