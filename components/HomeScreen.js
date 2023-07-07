
import React from 'react';
import { View, Text, Button, } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to the Timetable App!</Text>
      <Button title="View Timetable" onPress={() => navigation.navigate('Timetable')} />
    </View>
  );
}
