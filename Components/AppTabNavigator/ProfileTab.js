import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, Image, Dimensions }   from 'react-native';

import { Icon, Container, Content, Header, Left, Body, Right, Button, Thumbnail } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CardComponent from '../CardComponent'

var images = [
    require('../../assets/feed_images/1.jpg'),
    require('../../assets/feed_images/2.jpg'),
    require('../../assets/feed_images/3.jpg'),
    require('../../assets/feed_images/4.jpg'),
    require('../../assets/feed_images/5.jpg'),
    require('../../assets/feed_images/6.jpg'),
    require('../../assets/feed_images/7.jpg'),
    require('../../assets/feed_images/8.jpg'),
    require('../../assets/feed_images/9.jpg'),
    require('../../assets/feed_images/10.jpg'),
    require('../../assets/feed_images/11.jpg'),
]

var {width,height} = Dimensions.get('window')

class ProfileTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="person" style={{ color: tintColor }} />
        )
    }
    constructor(props){
        super(props)
        this.state = {
            activeIndex: 0
        }
    }

    segmentClicked = (index) => {
        this.setState({
            activeIndex : index
        })
    }

    renderSectionOne = () => {
        return images.map((image,index)=>{

            return(
                <View key={index} style={[ {width:(width)/3}, {height:(width)/3}, {marginBottom: 2},
                index % 3 !== 0 ? { paddingLeft:2 } : { paddingLeft: 0 }
                ]}>
                    <Image style={{flex:1, width: undefined, height:undefined}} 
                    source={image}
                    />
                </View>
            )
        })
    }


    renderSection = () => {
        if(this.state.activeIndex == 0){
            return(
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {this.renderSectionOne()}
                </View>
            )
        }
        else if (this.state.activeIndex == 1){
            return(
                <View>
                    <CardComponent imageSource="1" likes="Disukai oleh" />
                    <CardComponent imageSource="2" likes="Disukai oleh" />
                    <CardComponent imageSource="3" likes="Disukai oleh" />
                </View>
            )
        }
    }

    render(){
        return(
            <Container style={{flex:1, backgroundColor: 'white'}}>
                 <Header style={{backgroundColor: 'white'}}>
                    {/* <Left><Icon name="md-person-add" style={{paddingLeft: 10}}></Icon></Left> */}
                    <Body style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold', fontSize: 17, color: 'black'}}>ranitriani23</Text>

                    <FontAwesome type="FontAwesome" name="sort-down" style={{ marginLeft: 10, paddingTop: -30, fontSize: 20, color:'black'}}></FontAwesome>
                    </Body>
                    <Right>
                        <EntypoIcon name="back-in-time" style={{ position:'absolute', paddingRight: 37, fontSize: 28, color:'black'}}></EntypoIcon>
                        <EntypoIcon type="Foundation" name="list" style={{fontSize: 28, color: 'black'}}></EntypoIcon>
                    </Right>
                </Header>
            <Content>
                <View style={{paddingTop: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex:1, alignItems: 'center'}}>
                            <Image source={require('../../assets/you.jpg')} style={{width:75, height:75, borderRadius: 37.5, borderWidth: 2, borderColor: '#bdb8c4'}} />
                        </View>
                        <View style={{flex:3}}>
                            <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>20</Text>
                                    <Text style={{fontSize:10, color: 'grey', fontSize: 14}}>postingan</Text>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>2,1 m</Text>
                                    <Text style={{fontSize:10, color: 'grey', fontSize: 14}}>pengikut</Text>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>167</Text>
                                    <Text style={{fontSize:10, color: 'grey', fontSize: 14}}>yang diikuti</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', paddingTop: 10}}>
                                <Button bordered dark style={{flex:3, marginLeft:10, marginRight: 10, justifyContent: 'center', height: 30, color: '#ECF0F1' }}>
                                    <Text style={{fontWeight: 'bold', color: 'black'}}>Edit Profile</Text>
                                </Button>
                                {/* <Button bordered dark style={{flex:1, height: 30, marginRight:10, marginLeft:5, justifyContent: 'center'}}>
                                    <Icon name="settings" />
                                </Button> */}
                            </View>
                        </View>
                    </View>
                    <View style={{paddingVertical: 10, paddingHorizontal:10}}>
                        <Text style={{fontWeight:'bold', color: 'black'}}>Rani Triani</Text>
                        <Text style={{color: 'black'}}>Be a good and smart of programmer</Text>
                        <Text style={{color: 'black'}}>Linkedin</Text>
                        <Text style={{color: '#4286f4'}}>https://www.linkedin.com/in/rani-triani-gustia-6a69a714a/</Text>
                    </View>
                    <View style={{flexDirection: 'row', left: 10}}>
                    <Icon name="ios-add-circle" style={{color:'#D0D3D4', fontSize: 65, top: -5, borderColor: 'black'}}/>
        
                        <Thumbnail 
                                style={{marginHorizontal:7, borderColor: '#bdb8c4', borderWidth: 2}}
                                source={require('../../assets/Stories/2.jpg')} />
                        
                        <Thumbnail 
                                style={{marginHorizontal:7, borderColor: '#bdb8c4', borderWidth: 2}}
                                source={require('../../assets/Stories/1.jpg')} />
                        
                    </View>
                    <View style={{flexDirection: 'row', top: -5}}>
                        <Text style={{color: 'black', fontSize: 12, left: 25}}>Baru</Text>
                        <Text style={{color: 'black', fontSize: 12, left: 60}}>HBD</Text>
                        <Text style={{color: 'black', fontSize: 12, left: 90}}>by jmbee_x</Text>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5'}}>
                    <Button
                        transparent
                        onPress={()=>this.segmentClicked(0)}
                        active={this.state.activeIndex == 0}
                        >
                            <Icon type="FontAwesome" name="table" style={{color:'black'}}
                            style={[this.state.activeIndex == 0 ? {} : {color:'grey'}]}/>
                        </Button>
                        <Button
                        transparent
                        onPress={()=>this.segmentClicked(1)}
                        active={this.state.activeIndex == 1}
                        >
                            <Icon type="Foundation" name= 'annotate' style={{color:'black'}}
                            style={[this.state.activeIndex == 1 ? {} : {color:'grey'}]}/>
                        </Button>
                        <Button
                        transparent
                        onPress={()=>this.segmentClicked(2)}
                        active={this.state.activeIndex == 2}
                        >
                            <Icon type="FontAwesome" name="star-o" style={{color:'black'}}
                            style={[this.state.activeIndex == 2 ? {} : {color:'grey'}]}/>
                        </Button>
                        <Button
                        transparent
                        onPress={()=>this.segmentClicked(3)}
                        active={this.state.activeIndex == 3}
                        >
                            <Icon type="FontAwesome" name= 'id-badge' style={{color:'black'}}
                            style={[this.state.activeIndex == 3 ? {} : {color:'grey'}]}/>
                        </Button>
                    </View>
                    {this.renderSection()}
                </View>
            </Content>
            </Container>
        );
    }
}
export default ProfileTab;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });