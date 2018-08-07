import React, {Component} from "react";
import {View, Text} from "react-native";
import axios from "axios";

export default class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            albums: []
        }

        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
            .then(res => this.setState({loading: false, albums: res.data}));
    };

    render () {
        const {loading, albums} = this.state;

        return (
            <View>
                <Text>Loading</Text>
            </View >
        );
    };        
}