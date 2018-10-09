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
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/you.jpg')} />
                        <Body>
                            <Text>Rani Triani G</Text>
                            <Text note>Oct 07, 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images [this.props.imageSource]} style={{height: 200, width: null, flex: 1}} />
                </CardItem>
                <CardItem style={{height: 45}}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart" style={{color:'black'}} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles" style={{color:'black'}} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send" style={{color:'black'}} />
                        </Button>
                    </Left>
                </CardItem>
            <CardItem style={{ height: 20}}>
                <Text>{this.props.likes}</Text>
            </CardItem>
            <CardItem>
                <Body>
                    <Text style={{fontWeight: "bold"}}>ranitriani23</Text>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
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