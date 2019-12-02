import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import RedHeart from './RedHeart'
import WhiteHeart from './WhiteHeart'


export default class FavoriteButton extends React.Component{
    state={
        favorited: 'no'
    }

    clickFavoriteButton = () => {
        if (this.state.favorited === 'yes'){
            this.setState({favorited: 'no'})
        } else if (this.state.favorited === 'no'){
            this.setState({favorited: 'yes'})
        }
    }
    render(){
        let component
        if (this.state.favorited === 'yes'){
            component = <RedHeart clicked={this.clickFavoriteButton}/>
        } else if (this.state.favorited === 'no'){
            component = <WhiteHeart clicked={this.clickFavoriteButton}/>
        }
        return(
            <View style={styles.component}>
                {component}
            </View>
    )
}
}

const styles = StyleSheet.create({
component:{
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'center'
}
})