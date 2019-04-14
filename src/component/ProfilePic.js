import React, { Component } from 'react';
import { Image } from 'react-native';

class ProfilePic extends Component {
    render() {
        let pic = {
            uri: this.props.imageURL
        };
        return (
            <Image source={pic} style={{ width: 360, height: 250 }} />
        );
    }
}

export default ProfilePic;