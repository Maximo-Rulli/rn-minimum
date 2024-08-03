import React from 'react'
import { SafeAreaView, Text, TouchableOpacity,} from 'react-native'


const CategoriesScreen = ({ route, navigation }) => {
  // Retrieve data from params
  const { type } = route.params

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          type === 'trabajador'
            ? navigation.navigate('Workers', { category: 'Plomero' })
            : navigation.navigate('Proposals', { category: 'Gasista' })
        }}>
          <Text>Go to specific screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}


export default CategoriesScreen
