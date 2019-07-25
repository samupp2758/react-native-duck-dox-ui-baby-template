import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import FadeSpringinAnimate from './Animate_img';
import { 
    Container,
    Title,
    Symbol, 
    Footer,
    TitleBold} from './styles';

export default class splash extends Component {
 
    constructor(props){
    super(props)
    YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core']);
    }
  

    static navigationOptions = {
        header: null
    }
    state = {
      dev: "Developed by DuckBox",
    }

    render() {
        return (
        <Container>
            <FadeSpringinAnimate>
                <Symbol/>
                <Title>Duck<TitleBold> Dev</TitleBold></Title>
            </FadeSpringinAnimate>
            <Footer>{this.state.dev}</Footer>    
        </Container>
            );
    }
}
