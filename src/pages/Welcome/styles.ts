import styled, {css} from "styled-components/native";


export const Container = styled.View`
   
    flex: 1;
    background-color:${ props=> props?.theme?.colors?.backgroundCard.water};
    
`;

export const Content = styled.View`
    height: 70%;
    align-items: center;
    justify-content: center;
`;

export const Footer = styled.View`
   
        align-items: center;
        justify-content: center;
        padding: 20px;
        height: 30%;
        background-color:${ props=> props?.theme?.colors?.background || '#58ABF6'};
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    
`;

export const Title = styled.Text`
        font-size: 20px;
        color:${ props=> props?.theme?.colors?.background||"fff"};
`;

export const SubTitle = styled.Text`
    
        font-size: 14px;
        text-align: center;
        padding: 10px;
        margin-bottom: 10px;
        color: ${ props=> props?.theme?.colors?.background};
    
`;

export const DetailWater = styled.View`

        background-color: red;
        border-radius: 50%;
        height:280; 
        justify-content:'center'; 
        align-items:'center'

`;


