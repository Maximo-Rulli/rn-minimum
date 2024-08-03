import React from 'react'
import { ScrollView, Text, TouchableOpacity} from 'react-native'

const ProposalsScreen = ({ route, navigation }) => {

  return (
    <ScrollView>
      <TouchableOpacity onPress={() =>{
          navigation.navigate('ProfileRoot', 
            { screen: 'User', 
              params: { IdUser: 'dummyWorker', username: 'Dummy Gasist' }
            })
        }}>
          <Text>Navigate to user screen!</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}


export default ProposalsScreen
