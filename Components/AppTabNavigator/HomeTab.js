import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity }   from 'react-native';
import { withNavigation } from 'react-navigation';

import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body, Image } from 'native-base';
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

            <Header style={{backgroundColor: 'white'}}>
                <Left><Icon name="ios-camera" style={{paddingLeft: 10}}></Icon></Left>
                    <Text style={{paddingTop:20, fontWeight:'bold',right:35, color:'black'}}>Instagram</Text>
                    {/* <Thumbnail 
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaY1ZDZIyJA9ANg-W-atEDI2SsdtOkCs6YEE25I85cdu7MA7kO'}}
                    style={{width:250, height: 30}} /> */}
                <Right>
                <TouchableOpacity style={{paddingRight: 10} } onPress={() => this.props.navigation.navigate('Send')}>
                    <Icon name="ios-send" />
                </TouchableOpacity>
                </Right>
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
                        <CardComponent imageSource="1" likes="Disukai oleh"/>
                        <CardComponent imageSource="2" likes="Disukai oleh"/>
                        <CardComponent imageSource="3" likes="Disukai oleh"/>

                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white"
    },
  });

  export default withNavigation (HomeTab);