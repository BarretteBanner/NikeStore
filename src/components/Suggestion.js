import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

export default class Suggestion extends React.Component{
    render(){
        return(
            <View style={styles.component}>
                    <Image 
                        source={{uri: this.props.item.main_picture}}
                        style={styles.image}
                    />
                    
                    <Text style={styles.text}>{this.props.item.name}</Text>
                    <Text style={styles.text} style={styles.sub_category}>{this.props.item.gender} {this.props.item.sub_category}</Text>
                    <Text style={styles.text}>${this.props.item.price}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component:{
        height: 200,
        width: 200,
        backgroundColor: 'white'
    },
    image:{
        height: '50%'
    },
    text:{
        //lineHeight: 34,
        //fontSize: 12
    },
    sub_category: {
        color: 'grey'
    }
})