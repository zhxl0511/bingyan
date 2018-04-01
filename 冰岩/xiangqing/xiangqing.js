
import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'
import './xiangqing.css'

export default class Xiangqing extends Component {

    state = {
        data:[],
    }

    jump= () => {
        let data1;
        fetchJsonp('url__')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                console.log(json);
                let data = json;
                data1 = json;
                this.setState({
                    data: data,
                });
            })

    }
    componentWillMount()
    {
        var url__= location.href.split('?')[1].split('=')[1]
        this.jump();
        console.log(this.state.data)
    }

    render() {
        return (
            <div>
                <div id="top" >
                    开始读书之旅！
                </div>
                <div id="main-s">
                    <img alt="" src={this.state.data.image} id="bookimg"/>
                    <div  id="inform">
                        <ul>
                            <li>作者：{this.state.data.author}</li>
                            <li>出版社：{this.state.data.publisher}</li>
                            <li>出版年：{this.state.data.pubdate}</li>
                            <li>定价：{this.state.data.price}</li>
                            <li>装帧：{this.state.data.binding}</li>
                        </ul>
                    </div>
                </div>
                <div id="btns">
                    <button src="https://book.douban.com/subject/30158842/?icn=index-editionrecommend#" type="submit" className="btn">想读</button>
                    <button src="https://book.douban.com/subject/30158842/?icn=index-editionrecommend#" type="submit" className="btn">在读</button>
                    <button src="https://book.douban.com/subject/30158842/?icn=index-editionrecommend#" type="submit" className="btn">读过</button>
                </div>
                <div id="summ">
                    <h1>内容简介  · · · · · ·</h1>
                    <p id="sumn">{this.state.data.summary}</p>
                </div>

            </div>
        );
    }
}
