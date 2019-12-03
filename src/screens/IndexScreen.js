import React from 'react'
import {View, ScrollView, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ItemPreview from '../components/ItemPreview'

export default class IndexScreen extends React.Component{
    state = {
        items: null
    }
    componentDidMount() {
        this.getItems()
    }

    getItems = () => {
        fetch(`http://localhost:3000/get-items`)
        .then(resp => resp.json())
        .then(items => this.setState({items: items}))

    }
    render(){
        return(
            <View style={styles.screen}>
                <View style={styles.info}>

                </View>
                <View style={styles.list}>
                    <FlatList 
                        data={this.state.items}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={(item) => {
                            return <TouchableOpacity onPress={() => this.props.navigation.navigate('Specific', {item: item.item})}>
                                <ItemPreview item={item.item} />
                            </TouchableOpacity>
                             
                        }}
                    />
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
    info:{
        height: '0%',
        backgroundColor: 'green'
    },
    list:{
        height: '100%',
        backgroundColor: 'white'
    }
})