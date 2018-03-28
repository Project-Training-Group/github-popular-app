'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

/**
 * 每次刷新返回新的名言警句
 */

const URL = 'https://api.lwl12.com/hitokoto/main/get';

export default class SayingPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sayingTxt: ''
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        return fetch(URL)
            .then((response) => response.text())
            .then((responseTxt) => {
                this.setState({
                    sayingTxt: responseTxt,
                })
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.sayingTxt}</Text>
                <TouchableHighlight
                    ref='button'
                    underlayColor='transparent'
                    onPress={() => this.loadData()}>
                    <Text style={styles.change}>更换</Text>
                </TouchableHighlight>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        margin: 20,
        fontSize: 20,
    },
    change: {
        marginTop: 40,
        fontSize: 30,
    }
})