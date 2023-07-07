import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function AddClassScreen({ navigation,route }) {
  const [newClass, setNewClass] =useState('');
 const [newTime, setNewTime] =useState('');



  const addClass = () => {
    if (newClass.trim()){//Only add non-empty classes}
      
  route.params.addClass ( (prevClasses) => [...prevClasses,newTime] )
    route.params.addClass ( (prevClasses) => [...prevClasses,newClass] )
   
    navigation.goBack();
  }
  }
  return (
    <View>
      <Text>Add a Class:</Text>
      <TextInput placeholder= "Class Name" value={newClass} onChangeText={setNewClass} />
   <TextInput placeholder= "Class Time" value={newTime} onChangeText={setNewTime} />  
      <Button title="Add" onPress={addClass} />
    </View>
  );
}
