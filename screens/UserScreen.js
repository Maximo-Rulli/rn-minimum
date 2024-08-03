import React from 'react'
import { Text, View } from 'react-native'

const UserScreen = ({ route }) => {
  const {IdUser, username} = route.params
  return (
    <View>
      <Text>Welcome to {username}'s screen!</Text>
      <Text>User id: {IdUser}</Text>
    </View>
  )
}

export default UserScreen
