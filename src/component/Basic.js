import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import Banana from './Banana';
import Header from './Header';
import ProfilePic from './ProfilePic';
import Content from './Content';
import Footer from './Footer';
//import ProfilePic from './ProfilePic';

class Basic extends Component {
    render() {
        return (
            <ScrollView>
                <Header headerText="Ahmed Shabbir" />
                <ProfilePic imageURL="https://i.ibb.co/0XcZD99/50628576-1321157101387061-7293233692745400320-o.jpg" />
                <Content contentHeading="Professional Exp" text="2018 -- 2019: Worked with Some Company as a React Native Dev" />
                <Content contentHeading="Education" text={' 2017 -- 2018: Diploma in React Native Dev \n 2017 -- 2018: Diploma in ASP.NET Dev \n 2017 -- 2018: Diploma in Database Management System \n 2017 -- 2018: Diploma in OOP in C#'}   />
                <Footer footerText="CopyRights -- 2019" />
            </ScrollView>
        );
    }
}
export default Basic;