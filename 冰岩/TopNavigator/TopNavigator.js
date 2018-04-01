import React, { Component } from 'react';
import './TopNavigator.css';

export default class TopNavigator extends Component {

    componentDidMount() {

    }

    my_onclick = () => {
        let lines_container = document.getElementById("lines_container");
        let line_1 = document.getElementById("line_1");
        let line_2 = document.getElementById("line_2");
        let bag = document.getElementById("bag");
        let header = document.getElementById("header");
        let list = document.getElementsByClassName("list");
        let lists = document.getElementById("lists");
        if (lines_container.name == "lines_container_") {
            //菜单按钮打开动画
            line_1.setAttribute("name", "line_1_on");
            line_2.setAttribute("name", "line_2_on");
            line_1.style.top = "23.5px";
            line_2.style.bottom = "23.5px";
            setTimeout(() => {line_2.setAttribute('name', 'line_2_on_')}, 300);
            //header背景变黑
            header.style.backgroundColor = "rgba(0, 0, 0, 1)";
            //购物包飞出
            setTimeout(() => {bag.style.right = '-50px'}, 200);
            //菜单栏出现
            setTimeout(() => {list[0].style.opacity = '1', list[0].style.transform = 'none'}, 300);
            setTimeout(() => {list[1].style.opacity = '1', list[1].style.transform = 'none'}, 350);
            setTimeout(() => {list[2].style.opacity = '1', list[2].style.transform = 'none'}, 400);
            setTimeout(() => {list[3].style.opacity = '1', list[3].style.transform = 'none'}, 450);
            setTimeout(() => {list[4].style.opacity = '1', list[4].style.transform = 'none'}, 500);
            setTimeout(() => {list[5].style.opacity = '1', list[5].style.transform = 'none'}, 550);
            setTimeout(() => {list[6].style.opacity = '1', list[6].style.transform = 'none'}, 600);
            setTimeout(() => {list[7].style.opacity = '1', list[7].style.transform = 'none'}, 650);
            header.style.height = "600px"
            //更改lines_container name为lines_container_on
            lines_container.setAttribute("name", "lines_container_on");
        }
        else {
            //菜单按钮关闭动画
            line_1.setAttribute("name", "line_1_");
            line_2.setAttribute("name", "line_2_off");
            line_1.style.top = "20px";
            line_2.style.bottom = "20px";
            setTimeout(() =>{line_2.setAttribute('name', 'line_2_')}, 200);
            //header背景变浅
            header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            //购物包飞回
            setTimeout(() => {bag.style.right = '12px'}, 350);
            //菜单栏收回
            setTimeout(() => {list[0].style.opacity = '0', list[1].style.transform = 'scale(1.1) translateY(-24px)'}, 400);
            setTimeout(() => {list[1].style.opacity = '0', list[1].style.transform = 'scale(1.1) translateY(-24px)'}, 350);
            setTimeout(() => {list[2].style.opacity = '0', list[2].style.transform = 'scale(1.1) translateY(-24px)'}, 300);
            setTimeout(() => {list[3].style.opacity = '0', list[3].style.transform = 'scale(1.1) translateY(-24px)'}, 250);
            setTimeout(() => {list[4].style.opacity = '0', list[4].style.transform = 'scale(1.1) translateY(-24px)'}, 200);
            setTimeout(() => {list[5].style.opacity = '0', list[5].style.transform = 'scale(1.1) translateY(-24px)'}, 150);
            setTimeout(() => {list[6].style.opacity = '0', list[6].style.transform = 'scale(1.1) translateY(-24px)'}, 100);
            setTimeout(() => {list[7].style.opacity = '0', list[7].style.transform = 'scale(1.1) translateY(-24px)'}, 50);
            header.style.height = "48px"
            lists.style.opacity = "0.8";
            //更改lines_container_on name为lines_container_
            lines_container.setAttribute("name", "lines_container_");
        }
    }

    changeTitle = (title) => {
        let navigatorTitle = document.getElementById("navigatorTitle");
        console.log(navigatorTitle.innerText,title)
        navigatorTitle.innerText = title;
    }

    render() {
        return (
            <nav>
                <div id="navigator_container">
                    <ul id="header">
                        <li id="menuicon" onClick={this.my_onclick}>
                            <a id="lines_container" name="lines_container_">
                                <span className="line" id="line_1" name="line_1_"></span>
                                <span className="line" id="line_2" name="line_2_"></span>
                            </a>
                        </li>
                        <li id="home">
                            <a id="navigatorTitle">导航</a>
                        </li>
                        <li id="bag" name="bag_in">
                            <a><img src={require("./bagIcon.jpg")} alt={"icon"}/></a>
                        </li>
                        <ul id="lists">
                            <li className="list" id="list_1" onClick={() => {this.props.navigatorCallback("文学");this.changeTitle("文学");this.my_onclick()}}>
                                <a>编程</a>
                            </li>
                            <li className="list" id="list_2" onClick={() => {this.props.navigatorCallback("科幻");this.changeTitle("科幻");this.my_onclick()}}>
                                <a>科幻</a>
                            </li>
                            <li className="list" id="list_3" onClick={() => {this.props.navigatorCallback("编程");this.changeTitle("编程");this.my_onclick()}}>
                                <a>文学</a>
                            </li>
                            <li className="list" id="list_4" onClick={() => {this.props.navigatorCallback("童话");this.changeTitle("童话");this.my_onclick()}}>
                                <a>童话</a>
                            </li>
                            <li className="list" id="list_5" onClick={() => {this.props.navigatorCallback("TV");this.changeTitle("TV");this.my_onclick()}}>
                                <a>TV</a>
                            </li>
                            <li className="list" id="list_6" onClick={() => {this.props.navigatorCallback("音乐");this.changeTitle("音乐");this.my_onclick()}}>
                                <a>音乐</a>
                            </li>
                            <li className="list" id="list_7" onClick={() => {this.props.navigatorCallback("哲学");this.changeTitle("哲学");this.my_onclick()}}>
                                <a>哲学</a>
                            </li>
                            <li className="list" id="list_8" onClick={() => {this.props.navigatorCallback("历史");this.changeTitle("历史");this.my_onclick()}}>
                                <a>历史</a>
                            </li>
                        </ul>
                    </ul>
                </div>
            </nav>
        )
    }
}