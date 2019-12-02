import React from 'react'
import {View, StyleSheet} from 'react-native'

export default class SafeArea extends React.Component{
    render(){
        return(
            <View style={styles.component}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    component: {
        height: 50,
        backgroundColor: 'white'
    }
})