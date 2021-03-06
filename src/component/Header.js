//Imports with Destructuring
import { Text, View } from 'react-native';
import React from 'react';

//Prepare the contents
const Header = (props) => {
    //Destructuring the styles
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

//Style the contents
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyConents: 'center',
        alignItems: 'center',
        height: 50,
        paddingTop: 15,
        position: 'relative'
    },
    textStyle: {
        fontFamily:'Demo_ConeriaScript_0',
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: 'white'
    }
};

//Make them available to the app
export default Header;