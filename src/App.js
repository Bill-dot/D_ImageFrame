import React, { Component, PureComponent } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Button from './commons/Button'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentID: 0,
            // imageArray:[]
        }

    }
    // componentDidMount(){
    //     this.setState({...this.state, imageArray:image})
    // }

    nextImage() {
        if (this.state.currentID <= 5)
            this.setState({ currentID: this.state.currentID + 1 })
    }

    prevImage() {
        if (this.state.currentID >= 1)
            this.setState({ currentID: this.state.currentID - 1 })
    }

    render() {
        return (
            <View style={styles.main}>
                <Image source={image[this.state.currentID].imageURL} style={{ height: 720, width: null }} />
                <View opacity={0.35} style={styles.buttonView}>
                    <Button onPress={() => this.prevImage()}>Prev</Button>
                    <Button onPress={() => this.nextImage()}>Next</Button>
                </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // position: 'absolute',
    },
    buttonView: {
        flex:1,
        alignSelf:'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: 'absolute',
        top: 600,
        left: 0,
        width: 400,
        height: 100,
        
    }
})

var image = [
    {
        id: 0, title: 'KOBE', imageURL: require('../assets/Images/Kobe.jpg')
    },
    {
        id: 1, title: 'LeBron', imageURL: require('../assets/Images/LeBron.jpg')
    },
    {
        id: 2, title: 'Luka Doncic', imageURL: require('../assets/Images/Luka.jpg')
    },
    {
        id: 3, title: 'Giannis', imageURL: require('../assets/Images/Giannis.jpg')
    },
    {
        id: 4, title: 'Jordan', imageURL: require('../assets/Images/Jordan.jpg')
    },
    {
        id: 5, title: 'Curry', imageURL: require('../assets/Images/Curry.jpg')
    },
    {
        id: 6, title: 'Young', imageURL: require('../assets/Images/Young.jpg')
    }
]