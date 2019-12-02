import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
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

export default class ShoeSpecificScreen extends React.Component{
    state = {
        item: this.props.navigation.state.params.item,
        main_picture: this.props.navigation.state.params.item.main_picture
    }

    changeMainPicture = (picture) => {
        //console.log(picture)
        this.setState({main_picture: picture})
    }

    changeShoe = (newItem) => {
        this.setState({item: newItem, main_picture: newItem.main_picture})
    }
    
    
    render(){
        //console.log(this.props.navigation.state.params.item)
        //console.log(this.state.item)
        return(
            <View style={styles.screen}>
                <ScrollView> 
                    <Info item={this.state.item}/>
                    <BigPicture main_picture={this.state.main_picture}/>
                    <SmallPictures item={this.state.item} changeMainPicture={this.changeMainPicture}/>
                    <SizeSelector/>
                    <AddButton/>
                    <FavoriteButton/>
                    <Description item={this.state.item}/>
                    <Reviews/>
                    <Suggestions item={this.state.item} changeShoe={this.changeShoe}/>
                    <SafeArea/>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen:{
        height: '100%',
        backgroundColor: 'white'
    }
})