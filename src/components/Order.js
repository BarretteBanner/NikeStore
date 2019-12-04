import React from 'react'
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native'

export default class Order extends React.Component{
    state = {
        response: null
    }
    deleteOrder = () => {
        fetch(`http://localhost:3000/delete-order-${this.props.order.id}`)
        .then(resp => resp.json())
        .then(response => this.setState({response: response}))

    }
    componentDidUpdate(){
        console.log('yo')
        this.props.refresh()
    }
    render(){
        //console.log(this.props.order.id)
        return(
            <View>
                <View style={styles.screen}>
                    <View style={styles.imageArea}>
                        <Image 
                            style={styles.image}
                            source={{uri: this.props.order.image}}
                        />
                    </View>
                    <View style={styles.textArea}>
                        <Text style={styles.text}>{this.props.order.name}</Text>
                        <Text style={styles.category}>{this.props.order.sub_category}</Text>
                        <Text style={styles.category}>Shoe Size {this.props.order.shoe_size}</Text>
                    </View>
                    <View style={styles.price}>
                        <Text style={styles.price}>${this.props.order.price}</Text>
                    </View>
                </View>
                <View style={styles.remove}>
                    <TouchableOpacity onPress={() => this.deleteOrder()}>
                        <Text style={styles.button}>Remove Item</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    screen:{
        flexDirection: 'row',
        marginBottom: '5%'
    },
    image: {
        height: 100,
        width: 100
    },
    imageArea:{
        width: '30%'
    },
    textArea:{
        width: '45%',
    },
    priceArea:{
        width: '25%',
    },
    price:{
        paddingLeft: '5%',
        fontSize: 20
    },
    text:{
        fontSize: 20,
        marginLeft: '2.5%',
        lineHeight: 34
    },
    category:{
        fontSize: 13,
        marginLeft: '5%',
        color: 'grey',
        lineHeight: 26
    },
    remove:{
        marginLeft: '30%',
        width: '65%',
        borderWidth: 1,
        borderColor: 'black',
        height: '20%',
        justifyContent: 'center'
    },
    button:{
        fontSize: 17,
        textAlign: 'center'
    }
})