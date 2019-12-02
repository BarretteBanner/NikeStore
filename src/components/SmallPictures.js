import React from 'react'
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native'
import SmallPicture from './SmallPicture'

export default class SmallPictures extends React.Component{
    state={
        images: null
    }
    componentDidMount() {
        this.getPictures()
    }
    getPictures = () => {
        fetch(`http://localhost:3000/get-pictures-${this.props.item.id}`)
        .then(resp => resp.json())
        .then(images => this.setState({images: images}))
    }
    
    render(){
        return(
            <View style={styles.component}>
               <FlatList 
                    horizontal
                    data={this.state.images}
                    keyExtractor={(image) => image.id.toString()}
                    renderItem={(image) => {
                        return <TouchableOpacity onPress={() => this.props.changeMainPicture(image.item.picture)}>
                            <SmallPicture image={image.item} />
                        </TouchableOpacity>    
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component:{
        height: 80,
        //backgroundColor: 'blue',
        //flexDirection: 'row',
        justifyContent: 'space-between',
        //marginHorizontal: '5%',
        marginTop: 20
    }
})