import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView }   from 'react-native';

import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base';
import CardComponent from '../CardComponent';

class HomeTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor }} />
        )
    }

    render(){
        return(
            <Container style={styles.container}>

            <Header style={{backgroundColor: 'white'}}ss>
                <Left><Icon name="ios-camera" style={{paddingLeft: 10}}></Icon></Left>
                <Body><Text>Instagram</Text></Body>
                <Right><Icon name="ios-send" style={{paddingRight: 10}}></Icon></Right>
            </Header>

                <Content>
                    <View style={{ height:100 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
                            <Text style={{ fontWeight: 'bold' }}>Stories</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="md-play" style={{fontSize: 14}}></Icon>
                                <Text style={{ fontWeight: 'bold' }}>Watch All</Text>
                            </View>
                        </View>
                        <View style={{flex:3}}>
                            <ScrollView 
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                alignItems:'center',
                                paddingStart:5,
                                paddingEnd: 5
                            }}
                            >
                                <Thumbnail 
                                style={{marginHorizontal:5, borderColor: 'pink', borderWidth: 2}}
                                source={require('../../assets/Stories/1.jpg')} />
                                <Thumbnail 
                                style={{marginHorizontal:5, borderColor: 'pink', borderWidth: 2}}
                                source={require('../../assets/Stories/2.jpg')} />
                                <Thumbnail 
                                style={{marginHorizontal:5, borderColor: 'pink', borderWidth: 2}}
                                source={require('../../assets/Stories/3.jpg')} />
                                <Thumbnail 
                                style={{marginHorizontal:5, borderColor: 'pink', borderWidth: 2}}
                                source={require('../../assets/Stories/4.jpg')} />
                                 <Thumbnail 
                                style={{marginHorizontal:5, borderColor: 'pink', borderWidth: 2}}
                                source={require('../../assets/Stories/5.jpg')} />
                                <Thumbnail 
                                style={{marginHorizontal:5, borderColor: 'pink', borderWidth: 2}}
                                source={require('../../assets/Stories/6.jpg')} />
                                <Thumbnail 
                                style={{marginHorizontal:5, borderColor: 'pink', borderWidth: 2}}
                                source={require('../../assets/Stories/7.jpg')} />
                                <Thumbnail 
                                style={{marginHorizontal:5, borderColor: 'pink', borderWidth: 2}}
                                source={require('../../assets/Stories/8.jpg')} />
                            </ScrollView>
                        </View>
                    </View>
                        <CardComponent imageSource="1" likes="172"/>
                        <CardComponent imageSource="2" likes="272"/>
                        <CardComponent imageSource="3" likes="372"/>

                </Content>
            </Container>
        );
    }
}
export default HomeTab;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white"
    },
  });