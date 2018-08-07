import React, {Component} from "react";
import {View} from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

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

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}/>);
    }

    render () {
        const {loading, albums} = this.state;

        return (
            <View>
                {this.renderAlbums()}
            </View >
        );
    };        
}