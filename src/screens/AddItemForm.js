import React from 'react'
import {ScrollView, View, Text, TextInput, StyleSheet, Button} from 'react-native'

export default class AddItemForm extends React.Component{
    state = {
        name: 'Nike Free RN 5.0 NRG',
        category: 'Shoe',
        sub_category: "Running Shoe",
        gender: 'Mens',
        description: "An ideal performer for runs up to 3 miles, the Nike Free RN 5.0 NRG returns to its roots as a running shoe. Lightweight, single layer mesh in the upper provides more stretch to feel like a second skin. Less foam in the midsole means you're ready to hit the ground running.",
        price: 74.97,
        style: 'CI0811-808',
        offset: '6mm (14mm forefoot, 20 mm heel)',
        weight: "8.34 oz. (men's size 10)",
        main_picture: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/tvpnzblv7sska8blqxf9/free-rn-5-nrg-mens-running-shoe-8wmnkJ.jpg'

    }

    handleSubmit = () => {
        fetch(`http://localhost:3000/create-item`, {
            method: "post",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
              name: this.state.name,
              category: this.state.category,
              sub_category: this.state.sub_category,
              gender: this.state.gender,
              description: this.state.description,
              price: this.state.price,
              style: this.state.style,
              offset: this.state.offset,
              weight: this.state.weight,
              main_picture: this.state.main_picture
            })
        })
    }
    render(){
        return(
            <View style={styles.screen}>
                <ScrollView>
                    <TextInput 
                            //placeholder='Name'
                            value={this.state.name}
                            onChangeText={newTerm => this.setState({name: newTerm})}
                            style={styles.input}
                            multiline
                    />
                    <TextInput 
                            //placeholder='Ex: Bryce'
                            value={this.state.category}
                            onChangeText={newTerm => this.setState({category: newTerm})}
                            style={styles.input}
                            multiline
                    />
                    <TextInput 
                            //placeholder='Ex: Bryce'
                            value={this.state.sub_category}
                            onChangeText={newTerm => this.setState({sub_category: newTerm})}
                            style={styles.input}
                            multiline
                    />
                    <TextInput 
                            //placeholder='Ex: Bryce'
                            value={this.state.gender}
                            onChangeText={newTerm => this.setState({gender: newTerm})}
                            style={styles.input}
                            multiline
                    />
                    <TextInput 
                            //placeholder='Ex: Bryce'
                            value={this.state.description}
                            onChangeText={newTerm => this.setState({description: newTerm})}
                            style={styles.input}
                            multiline
                    />
                    <TextInput 
                            //placeholder='Ex: Bryce'
                            value={this.state.price.toString()}
                            onChangeText={newTerm => this.setState({price: newTerm})}
                            style={styles.input}
                            multiline
                    />
                    <TextInput 
                            //placeholder='Ex: Bryce'
                            value={this.state.style}
                            onChangeText={newTerm => this.setState({style: newTerm})}
                            style={styles.input}
                            multiline
                    />
                    <TextInput 
                            //placeholder='Ex: Bryce'
                            value={this.state.offset}
                            onChangeText={newTerm => this.setState({offset: newTerm})}
                            style={styles.input}
                            multiline
                    />
                    <TextInput 
                            //placeholder='Ex: Bryce'
                            value={this.state.weight}
                            onChangeText={newTerm => this.setState({weight: newTerm})}
                            style={styles.input}
                            multiline
                    />
                    <TextInput 
                            //placeholder='Ex: Bryce'
                            value={this.state.main_picture}
                            onChangeText={newTerm => this.setState({main_picture: newTerm})}
                            style={styles.input}
                            multiline
                    />
                    <View>
                        <Button 
                            title='Submit'
                            onPress={() => this.handleSubmit()}
                        />
                    </View>
                    
                </ScrollView>
            </View>
           
        )
    }
}

const styles = StyleSheet.create({
    input:{
        fontSize: 17,
        borderWidth: 1,
        borderColor: 'grey',
        marginHorizontal: '5%',
        marginVertical: '2.5%'
    },
    screen:{
        height: '100%'
    }
})