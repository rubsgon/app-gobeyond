import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const MyAccount = () => {
    const { navigate } = useNavigation()

  return (
      <View style={{ flex: 1, alignItems: 'center'}}>
          <Text>MyAccount</Text>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.button} onPress={() => {  navigate('Home') }}>
            <Text style={styles.buttonText}>Ir para Home</Text>
          </TouchableOpacity>
          </View>
      </View>
  )
  
}

const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 50,
      backgroundColor: '#4971fe',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: { color: '#FFF'}
})

export default MyAccount