import {View, Text, FlatList, TextInput} from 'react-native';
import React from 'react';

export default function SearchCharacters() {
  const ListHeaderComponent = () => {
    return (
      <View>
        <TextInput />
      </View>
    );
  };
  const ListFooterComponent = () => {
    return (
      <View>
        <Text>selam</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList ListHeaderComponent={ListHeaderComponent} />
    </View>
  );
}
