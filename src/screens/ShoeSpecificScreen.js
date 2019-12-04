import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import IndexScreen from './IndexScreen'
import Suggestions from '../components/Suggestions'
import Reviews from '../components/Reviews'
import Description from '../components/Description'
import FavoriteButton from '../components/FavoriteButton'
import AddButton from '../components/AddButton'
import SizeSelector from '../components/SizeSelector'
import SmallPictures from '../components/SmallPictures'
import BigPicture from '../components/BigPicture'
import Info from '../components/Info'
import SafeArea from '../components/SafeArea'
import {AntDesign} from '@expo/vector-icons'
import {withNavigation} from 'react-navigation'



class ShoeSpecificScreen extends React.Component{
    state = {
        item: this.props.navigation.state.params.item,
        main_picture: this.props.navigation.state.params.item.main_picture,
        shoe_size: null
    }

    changeMainPicture = (picture) => {
        //console.log(picture)
        this.setState({main_picture: picture})
    }

    changeShoe = (newItem) => {
        this.setState({item: newItem, main_picture: newItem.main_picture})
    }

    shoeSize = (size) => {
        this.setState({shoe_size: size})
    }

    addItem = () => {
        this.checkItem()
    }

    checkItem = () => {
        if (this.state.shoe_size !== null){
            this.addToCart()
        } else {
            this.showAlert()
        }
    }

    showAlert = () => {
        Alert.alert(
            `Oops...`,
            `You must select a shoe size before adding item to cart`,
            [
              {
                text: 'Okay',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              }
            ],
            {cancelable: false},
          );
    }


    addToCart = () => {
        fetch(`http://localhost:3000/create-order`, {
            method: "post",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
              name: this.state.item.name,
              price: this.state.item.price,
              image: this.state.item.main_picture,
              sub_category: this.state.item.sub_category,
              shoe_size: this.state.shoe_size
            })
        })
        this.goToCart()
    }

    goToCart = () => {
        this.props.navigation.navigate('Cart')
    }
    
    
    render(){
        console.log(this.state.shoe_size)
        //console.log(this.props.navigation.state.params.item)
        //console.log(this.state.item)
        return(
            <View style={styles.screen}>
                <ScrollView> 
                    <Info item={this.state.item}/>
                    <BigPicture main_picture={this.state.main_picture}/>
                    <SmallPictures item={this.state.item} changeMainPicture={this.changeMainPicture}/>
                    <SizeSelector shoeSize={this.shoeSize} size={this.state.shoe_size}/>
                    <AddButton addItem={this.addItem}/>
                    <FavoriteButton/>
                    <Description item={this.state.item}/>
                    <Reviews item={this.state.item}/>
                    <Suggestions item={this.state.item} changeShoe={this.changeShoe}/>
                    <SafeArea/>
                </ScrollView>
            </View>
        )
    }
}

ShoeSpecificScreen.navigationOptions = ({navigation}) => {
    return{
       //headerTitle: 'Upcoming Appointments',
        headerRight: 
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <AntDesign name='shoppingcart' size={27} style={styles.cart}/>
            </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    screen:{
        height: '100%',
        backgroundColor: 'white'
    },
    cart:{
        marginRight: 10
    }
})

export default withNavigation(ShoeSpecificScreen)