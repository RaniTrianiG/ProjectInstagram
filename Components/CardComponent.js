import React, { Component } from 'react';
import { Text, View, StyleSheet, Image }   from 'react-native';

import { Icon } from 'native-base';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button } from 'native-base'

class CardComponent extends Component {

    render(){

        const images = {
            "1": require('../assets/feed_images/4.jpg'),
            "2": require('../assets/feed_images/2.jpg'),
            "3": require('../assets/feed_images/3.jpg'),
        }

        return(
            <Card style={{height: 500, borderColor: 'white'}}>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/you.jpg')} />
                        <Body>
                            <Text style={{color:'black', fontWeight:'bold'}}>ranitriani23</Text>
                            <Text note style={{color:'black'}}>Programmer </Text>
                        </Body>
                    </Left>
                    <Right>
                        <Icon style={{flexDirection: 'row', color: 'grey'}} name="md-more" />
                    </Right>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images [this.props.imageSource]} style={{height: 200, width: null, flex: 1}} />
                </CardItem>
                <CardItem style={{height: 45}}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart" style={{color:'#f7054d', fontSize: 30}} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles" style={{color:'black', fontSize: 30}} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send" style={{color:'black', fontSize: 30}} />
                        </Button>
                    </Left>
                    <Right style={{flexDirection: 'row', left: 110}}>
                    <Button transparent>
                            <Icon name="share" style={{color:'grey', fontSize: 30, right: 20}} />
                        </Button>
                        <Button transparent>
                            <Icon name="bookmark" style={{color:'grey', fontSize: 30}} />
                        </Button>
                    </Right>
                </CardItem>
            <CardItem style={{ height: 20}}>
                <Text style={{color: 'black'}}>{this.props.likes}</Text>
            </CardItem>
            <Text style={{fontWeight: 'bold', color:'black', left: 94, top:-22}}> rimanfn, raflygnr </Text>
            <Text style={{color:'black', left: 210, top: -40}}>dan</Text>
            <Text style={{fontWeight: 'bold', color:'black', left: 240, top: -59}}>10.653 lainnya</Text>
            <CardItem>
                <Body>
                    <Text style={{fontWeight: "bold", color: 'black', top:-70}}>ranitriani23</Text>
                    <Text style={{color:'black', left: 75, top: -89}}>Bahagia ketika benar" menemukan </Text>
                    <Text style={{color:'black', top: -86}}>passion sesuai dengan kemampuan.</Text>
                    <Text style={{color: 'grey', top: -80}}>Lihat semua 21 komentar</Text>
                    <Text style={{fontWeight: "bold", color: 'black', top: -75}}>rita_yulita</Text>
                    <Text style={{color:'black', left: 65, top: -94}}>hemmmmm... </Text>
                    <Text style={{fontWeight: "bold", color: 'black', top: -87}}>reninurr_</Text>
                    <Text style={{color:'black', left: 65, top: -107}}>tetap semangat sayangku.. </Text>
                    <Text style={{color:'grey', fontSize: 10, top: -98}}>4 HARI YANG LALU</Text>
                </Body>
            </CardItem>

            </Card>
        );
    }
}
export default CardComponent;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });