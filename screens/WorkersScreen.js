import React from 'react'
import { ScrollView, Text, TouchableOpacity} from 'react-native'

const WorkersScreen = ({ route, navigation }) => {
  
  return (
    <ScrollView>
      <TouchableOpacity onPress={() =>{
          navigation.navigate('ProfileRoot', 
            { screen: 'User', 
              params: { IdUser: 'dummyWorker', username: 'Dummy Plumber' }
            })
        }}>
          <Text>Navigate to user screen!</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}


export default WorkersScreen
