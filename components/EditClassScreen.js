import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function EditClassScreen({ navigation, route }) {
  const { className, classTime } = route.params;
  const [newClassName, setNewClassName] = useState(className);
  const [newClassTime, setNewClassTime] = useState(classTime);

  const handleEditClass = () => {
    const updatedClasses=classes.map((classItem)=> {
      if (classItem.name === className && classItem.time === classTime) {
        return{name:newClassName,time:newClassTime}
      }
      return classTime
    })
    setClasses(updatedClasses)
    navigation.goBack();
  };

  return (
    <View>
      <Text>Edit Class:</Text>
      <TextInput value={newClassName} onChangeText={setNewClassName} />
      <TextInput value={newClassTime} onChangeText={setNewClassTime} />
      <Button title="Save" onPress={handleEditClass} />
    </View>
  )
}