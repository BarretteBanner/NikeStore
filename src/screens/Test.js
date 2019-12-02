import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
export default class Test extends React.Component{
    render(){
        return(
            <View style={styles.screen}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        backgroundColor: 'blue'
    }
})