import React, {useState} from 'react'
import { View, Text, Button, Modal } from 'react-native';

export default function TimetableScreen({ navigation }) {
  const[classes,setClasses] = useState([])
  const[modelVisible,setModelVisible] = useState(false)


  const removeClasses =(index)=> {
    const updatedClasses =[...classes]
    updatedClasses.splice(index,1)
    setClasses(updatedClasses)
    
  }

  

   const clearClasses = (index) => {
     setClasses([])
     setModelVisible(false)
   }


  return (
    <View>
      <Text>Your Timetable:</Text>
      {classes.length> 0 ?(
        
      

      classes.map((classItem,index)=> (
        <View key={index}>
        <Text> {classItem} </Text>
      <Button title="Remove Class" onPress={() => removeClasses(index)} />
      
      </View>
      ))
      ):(
      <Text> You have no classes </Text>
      )}
      
     
      <Button title="Add Class" onPress={() => navigation.navigate('AddClass',{addClass:setClasses})} />
       <Button title="Clear Timetable" onPress={() => setModelVisible(true)} />
      <Modal visible={modelVisible} animationType="slide" transparent={true} >

    <View style={{justifyContent:'centre',backgroundColor:"blue", allignItems:'centre',flex:'centre'}}>
   <View style={{backgroundColor:"yellow",padding: 10}}>
<Text> Are you sure you want do clear your classes? </Text>
<View style={{flexDirection: 'row',justifyContent: 'space-evenly',marginTop: 20}}>


<Button title="cancel" onPress={() => setModelVisible(false)} />
<Button title="clear" onPress={clearClasses} />

</View>
</View>
</View>
</Modal>
    </View>
  );
}


