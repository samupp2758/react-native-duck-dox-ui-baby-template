import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';


export const Container = styled(LinearGradient).attrs({
    colors:['#EC4863','#4a1537']
})`
    background-color: #232323;
    flex: 1;
    justify-content: center;
    align-items: center;  
`;

export const Symbol = styled.Image.attrs({
    source: require("../../images/duckbox_icon.png"),
    resizeMode: 'contain'

})`
    width: 300;
    height: 150;  
`;


export const Title = styled.Text`
  text-align:center;
  font-size: 30;
  font-weight: 100;
  margin-top: 10;
  color:  #f3f3f3;
`;

export const TitleBold = styled.Text`
  text-align:center;
  font-size: 30;
  font-weight: bold;
  color:  #f3f3f3;
`;


export const Footer = styled.Text`
  text-align:center;
  position: absolute;
  bottom:30;
  color:  #f3f3f3;
`;