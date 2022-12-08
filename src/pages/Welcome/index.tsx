import { useEffect, useState } from "react";
import {View, Button} from "react-native";
import { Container, Content, Title,Footer, SubTitle} from "./styles";
import Lottie from 'lottie-react-native'
import { useNavigation } from "@react-navigation/native";


export function Welcome(){   
    const navigation = useNavigation()

    function openHome(){
        navigation.navigate('Home')
    }

    return(
        <Container>
            <Content >
                <View style={{backgroundColor:'#4A90DA', borderRadius:1000}}>
                    <Lottie style={{width:250, position:'relative',right:4, top:-8}} source={require('./pokemon1.json')} autoPlay loop />
                </View>
                <Title>Sua Pokédex</Title>
                <SubTitle>Encontre todos os pokémons favoritos e realize batalhas entre eles!</SubTitle>
            </Content>
            <Footer>
                <Button onPress={()=> openHome()} title="Entrar"/>
            </Footer>
        </Container>
    )
}