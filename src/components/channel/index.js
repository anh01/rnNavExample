'use strict';

import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Platform } from 'react-native';


import { Container, Header, Content, Text, Button, Icon } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import HeaderContent from './../headerContent/';

import styles from './styles';
import theme from '../../themes/base-theme';
var primary = require('../../themes/variable').brandPrimary;


export default class Channel extends Component {

    onStoryPress() {
        this.props.navigator.push({
            title: "More",
            screen: "example.StoryScreen"
        });
    }

    static propTypes = {
    }

    render() {
        return (
            <Container theme={theme} >
                <Image source={require('../../../images/glow2.png')} style={styles.container} >

                    <Content style={{ marginBottom: (Platform.OS === 'ios') ? -50 : -10 }}>
                        <View>
                            <Image source={require('../../../images/NewsIcons/2.jpg')} style={styles.newsPoster}>
                                <View>
                                    <Text style={Platform.OS === 'android' ? styles.achannelHeader : styles.ioschannelHeader}>SCIENCE CHANNEL</Text>
                                    <Button
                                        rounded
                                        style={styles.followBtn}
                                        textStyle={Platform.OS === 'android' ?
                                            { color: primary, fontSize: 13, fontWeight: '900', textAlign: 'center' } :
                                            { color: primary, fontSize: 13, fontWeight: '900' }}
                                        >
                                        Following
                                    </Button>
                                    <TouchableOpacity style={{ padding: 0 }}>
                                        <Text style={styles.noOfFollowers}>234K Followers</Text>
                                    </TouchableOpacity>
                                </View>
                            </Image>
                        </View>

                        <View foregroundColor={'white'} style={{ backgroundColor: '#fff' }}>
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.onStoryPress('story')}>
                                <View style={styles.newsContentWrap}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        Lorem Ipsum is simply dummy text of the printing
                                    </Text>
                                    <Grid style={styles.newsContent}>
                                        <Col style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>CNN</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>May 24, 2016</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.onStoryPress('story')}>
                                <View style={styles.newsContentWrap}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>Contrary to popular belief, Lorem Ipsum is not simply random text.</Text>
                                    <Grid style={styles.newsContent}>
                                        <Col style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>SPACE.com</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>Apr 17, 2016</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.onStoryPress('story')}>
                                <View style={styles.newsContentWrap}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        It has survived not only five centuries
                                    </Text>
                                    <Grid style={styles.newsContent}>
                                        <Col style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>CNN</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>Feb 03, 2016</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.onStoryPress('story')}>
                                <View style={styles.newsContentWrap}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>It has survived not only five centuries</Text>
                                    <Grid style={styles.newsContent}>
                                        <Col style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>SKY.com</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>Dec 17, 2015</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.onStoryPress('story')}>
                                <View style={styles.newsContentWrap}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>Contrary to popular belief, Lorem Ipsum is not simply random text.</Text>
                                    <Grid style={styles.newsContent}>
                                        <Col style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>SPACE.com</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>Apr 17, 2016</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.onStoryPress('story')}>
                                <View style={styles.newsContentWrap}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        It has survived not only five centuries
                                    </Text>
                                    <Grid style={styles.newsContent}>
                                        <Col style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>CNN</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>Feb 03, 2016</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.onStoryPress('story')}>
                                <View style={styles.newsContentWrap}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>It has survived not only five centuries</Text>
                                    <Grid style={styles.newsContent}>
                                        <Col style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>SKY.com</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>Dec 17, 2015</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Content>
                </Image>
            </Container>
        )
    }
}

