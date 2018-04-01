import React, { Component } from 'react';
//import logo from './logo.svg';
import './style1.css';

export default class Slide extends Component {
    render() {
        return (
            <div id="div1">
                <ul className="ul1">
                    <li><img src={require('./1.jpg')} alt="" className="li1"/></li>
                    <li><img src={require('./2.jpg')} alt="" className="li1"/></li>
                    <li><img src={require('./3.jpg')} alt="" className="li1"/></li>
                    <li><img src={require('./4.jpg')} alt="" className="li1"/></li>
                </ul>
            </div>
        );
    }

    componentDidMount() {
        window.onload = function () {
            var oUl = document.getElementsByClassName('ul1')[0];
            var lis = oUl.getElementsByClassName('li1');
            oUl.innerHTML += oUl.innerHTML;
            oUl.style.width = lis.length * lis[0].offsetWidth + 'px';
            let left = null;
            var timer = setInterval(function clock() {
                left -= 2;
                if (left < -oUl.offsetWidth / 2) {
                    left = 0;
                }
                if (left % lis[0].offsetWidth === 0) {
                    clearInterval(timer);
                    setTimeout(function () {
                        timer = setInterval(clock, 5);
                    }, 1000);
                }
                oUl.style.left = left + 'px'
            }, 5);
        }
        window.onresize = function () {
            var oUl = document.getElementsByClassName('ul1')[0];
            var lis = oUl.getElementsByClassName('li1');
            oUl.style.width = lis.length * lis[0].offsetWidth + 'px';

        }
    }
}





