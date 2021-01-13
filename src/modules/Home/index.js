import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const Home = () => {
    const { navigate } = useNavigation()

  return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center'}}>
          <Text>Home</Text>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.button} onPress={() => {  navigate('MyAccount') }}>
            <Text style={styles.buttonText}>Ir para Perfil</Text>
          </TouchableOpacity>
          </View>
      </SafeAreaView>
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

export default Home