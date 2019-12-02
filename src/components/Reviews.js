import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class Reviews extends React.Component{
    render(){
        return(
            <View style={styles.component}>
                <Text>Reviews Component</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component:{
        height: 80,
        backgroundColor: 'yellow'
    }
})