import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import './MyList.css'

export default class MyList extends Component {
  state = {
    items: [],
    itemsNumber: 0,
  }
  loadMore = () => {
    let start = "&start=" + this.state.itemsNumber;
    console.log(start);
    fetchJsonp(this.props.url_ + '&fields=title,image,url,id' + start)   //改为this.props.url
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        let Items_ = json.books.map((items) =>
          <li key={items.id} onClick={(e) => this.jumpLink(items, e)}>
            <img src={items.image} alt={items.title} />
            <p>{items.title}</p>
          </li>
        )
        this.setState({
          items: this.state.items.concat(Items_),
          itemsNumber: this.state.itemsNumber + json.count,
        });
      })
      .catch((err) => {
        console.log('erorr:' + err);
      });
  }

  jumpLink = (items) => {
    let url_ = "localhost:3000/detail.js?url=" + items.url;
     window.location.href = "localhost:3000/detail.js?url=" + items.url;

  }

  newList = () => {
    let start = "&start=0";
    console.log(start);
    fetchJsonp(this.props.url_ + '&fields=title,image,url,id' + start)  
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        let Items_ = json.books.map((items) =>
          <li key={items.id} onClick={(e) => this.jumpLink(items, e)}>
            <img src={items.image} alt={items.title} />
            <p>{items.title}</p>
          </li>
        )
        this.setState({
          items: Items_,
          itemsNumber: json.count,
        });
      })
      .catch((err) => {
        console.log('erorr:' + err);
      });
  }

  componentWillMount() {
    console.log('componentWillMount');
    this.loadMore();
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
    this.newList();
  }

  render() {
    return (
      <div className="content_wrapper">
        <div className="list_wrapper">
          <ul>
            {this.state.items}
            <div className="clear"></div>
          </ul>
        </div>
        <div className="load_button">
          <button type='button' onClick={this.loadMore} id="lobn">加载更多</button>
        </div>
      </div>
    );
  }
}