import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class AddButton extends React.Component{
    render(){
        return(
            <View style={styles.component}>
                <View style={styles.button}>
                    <Text style={styles.text}>Add to Cart</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component:{
        height: 80,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    button:{
        height: 60,
        backgroundColor:'black',
        borderWidth: 1,
        borderRadius: 60,
        marginHorizontal: '5%',
        justifyContent: 'center'
    },
    text:{
        textAlign: 'center',
        fontSize: 17,
        color: 'white',
    }
})