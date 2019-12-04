import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
export default class ReviewItem extends React.Component{
    render(){
        return(
            <View style={styles.view}>
                <Text style={styles.text}>{this.props.review.rating} Stars</Text>
                <Text style={styles.header}>{this.props.review.header}</Text>
                <Text style={styles.text}>{this.props.review.review}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view:{
        marginHorizontal: '5%',
        paddingBottom: '12%'
    },
    text:{
        fontSize: 17,
        lineHeight: 34
    },
    header:{
        fontSize: 17,
        lineHeight: 34,
        fontWeight: 'bold'
    }
})