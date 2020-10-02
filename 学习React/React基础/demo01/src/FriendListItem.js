import React, { Component } from 'react';
// 引入属性校验
import PropTypes from 'prop-types'

class FriendListItem extends Component {
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this)
  }
  // 组件第一次存在于dom中，函数是不会执行的
  // 如果已经存在于dom中，函数才会被执行
  componentWillReceiveProps(){
    console.log('child-componentWillReceiveProps');
  }

  render() { 
    return (  
    <li onClick={this.handleClick}>
      {this.props.firstName}-{this.props.idx}-{this.props.content}
    </li>
    );
  }
  // 子组件监听
  handleClick(){
    // console.log(this.props.index);
    this.props.deleteItem(this.props.index);
  }
}
// PropTypes校验传递的值
FriendListItem.propTypes={
  idx: PropTypes.number.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
// defaultProps默认值
FriendListItem.defaultProps={
  firstName: 'Yang'
}

export default FriendListItem;