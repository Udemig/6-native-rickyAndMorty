import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton(props) {
  const {title, color} = props;

  return (
    <TouchableOpacity
      {...props}
      style={{
        backgroundColor: color,
        padding: 10,
        margin: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 18}}>{title}</Text>
    </TouchableOpacity>
  );
}
