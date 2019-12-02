import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Entypo} from '@expo/vector-icons'

export default class BenefitItem extends React.Component{
    render(){
        return(
            <View style={styles.component}>
                <Entypo name='dot-single' style={styles.icon}/>
                <Text style={styles.text}>{this.props.benefit.benefit}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component:{
        flex: 1,
        flexDirection: 'row'
    },
    text:{
        fontSize: 17,
        lineHeight: 34
    },
    icon:{
        fontSize: 30,
        paddingRight: 5
    }
})