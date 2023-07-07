import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function AddClassScreen({ navigation }) {
  const [className, setClassName] = useState('');
  const [classTime, setClassTime] = useState('');

  const handleAddClass = () => {
    // Add the new class to the timetable here
    navigation.goBack();
  };

  return (
    <View>
      <Text>Add a New Class:</Text>
      <TextInput placeholder="Class Name" value={className} onChangeText={setClassName} />
      <TextInput placeholder="Class Time" value={classTime} onChangeText={setClassTime} />
      <Button title="Add" onPress={handleAddClass} />
    </View>
  );
}
