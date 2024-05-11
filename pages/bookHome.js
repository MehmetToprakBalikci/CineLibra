import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BookHome = () => {
  return (
    <View style={styles.container}>
      <Text>bookHome</Text>
    </View>
  )
}

export default BookHome

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})