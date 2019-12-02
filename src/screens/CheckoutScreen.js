import React from 'react'
import {View, ScrollView, Text, StyleSheet} from 'react-native'

export default class CheckoutScreen extends React.Component{
    render(){
        return(
            <ScrollView style={styles.page}>
                <View></View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    page:{
        height: '100%',
        backgroundColor: 'grey'
    }
})