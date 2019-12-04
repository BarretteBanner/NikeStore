import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import Order from '../components/Order'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {withNavigation} from 'react-navigation'


class CartScreen extends React.Component{
    state = {
        orders: null,
        total: 0
    }

    componentDidMount() {
        this.getOrders()
    }

    getOrders = () => {
        console.log('refresh')
        fetch(`http://localhost:3000/get-orders`)
        .then(resp => resp.json())
        .then(orders => this.setState({orders: orders}))
    }

    requestCheckout = () => {
        console.log('hi')
        if(this.state.orders.length > 0){
            this.goToCheckout()
        }
    }

    goToCheckout = () => {
        this.props.navigation.navigate('Checkout')
    }
    
    render(){
        //console.log(this.state.orders)
        return(
            <View style={styles.screen}>
                <View style={styles.list}>
                    <FlatList 
                        data={this.state.orders}
                        keyExtractor={(order) => order.id.toString()}
                        renderItem={(order) => {
                            return <Order order={order.item} refresh={this.getOrders}/>   
                        }}
                    />
                </View>
                <View style={styles.checkout}>
                    <TouchableOpacity onPress={() => this.requestCheckout()}>
                        <Text style={styles.checkoutText}>Go To Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    screen:{
        height: 750,
        backgroundColor: 'white',
        marginBottom: '15%'
    },
    list:{
        height: '70%'
    },
    checkout:{
        height: '5%',
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    checkoutText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default withNavigation(CartScreen)