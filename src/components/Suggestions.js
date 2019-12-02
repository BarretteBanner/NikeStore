import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import Suggestion from './Suggestion'
import {withNavigation} from 'react-navigation'


class Suggestions extends React.Component{
    state = {
        suggestions: null
    }
    componentDidMount() {
        this.getSuggestions()
    }
    getSuggestions = () => {
        fetch(`http://localhost:3000/get-suggestions-${this.props.item.id}`)
        .then(resp => resp.json())
        .then(suggestions => this.setState({suggestions: suggestions}))
    }
    render(){
        //console.log(this.props.navigation)
        return(
            <View style={styles.component}>
                <FlatList 
                    horizontal
                    data={this.state.suggestions}
                    keyExtractor={(suggestion) => suggestion.id.toString()}
                    renderItem={(suggestion) => {
                        return <TouchableOpacity  onPress={() => this.props.navigation.push('Specific', {item: suggestion.item})}>
                            <Suggestion item={suggestion.item}/>
                        </TouchableOpacity>    
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component:{
        height: 200,
        backgroundColor: 'aqua'
    }
})

export default withNavigation(Suggestions)