import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class Info extends React.Component{
    render(){
        return(
            <View style={styles.component}>
                <View style={styles.categoryPrice}>
                    <View style={styles.category}>
                        <Text style={styles.categoryText}>{this.props.item.sub_category}</Text>
                    </View>
                    <View style={styles.price}>
                        <Text style={styles.priceText}>${this.props.item.price}</Text>
                    </View>
                </View>
                <Text style={styles.name}>{this.props.item.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component:{
        flex: 1,
        //height: 150,
        backgroundColor: 'white',
    },
    categoryPrice:{
        //height: '40%',
        flexDirection: 'row',
        //backgroundColor: 'white',
        marginTop: '5%',
        marginLeft: '5%'
    },
    category:{
        //position: 'absolute',
        //backgroundColor: 'yellow',
        
    },
    price:{
        position: 'absolute',
        //backgroundColor: 'orange',
        marginLeft: '80%'
    },
    categoryText:{
        fontSize: 20
    },
    priceText:{
        fontSize: 20,
    },
    name:{
        width: '55%',
        fontSize: 30,
        marginTop: '5%',
        marginLeft: '5%'
        
    }
})