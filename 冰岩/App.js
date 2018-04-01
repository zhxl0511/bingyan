import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import fetchJsonp from 'fetch-jsonp'
import MyList from './MyList/MyList'
import TopNavigator from './TopNavigator/TopNavigator'
import Slide from './douban/slide'

export default class App extends Component {
    state = {
        url_: 'https://api.douban.com/v2/book/search?tag=文学',
    }
    navigatorCallback = (category) => {
        console.log(category);
        this.setState({url_: 'https://api.douban.com/v2/book/search?tag=' + category});
                setTimeout(() => {
                    this.setState({url_: 'https://api.douban.com/v2/book/search?tag=' + category});
                    }, 100);
                }

            render() {
        return (
            <div className="App">
                <TopNavigator navigatorCallback={this.navigatorCallback}/>
                <Slide/>
                <MyList url_={this.state.url_}/>
            </div>
        );
    }
}