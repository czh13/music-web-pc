import React, { memo } from 'react';
import PropTypes from 'prop-types'

import { HeaderWrapper } from './style';

const HYThemeHeaderRCM = memo(function(props) {
  const { title, keywords } = props;
  // 为确保传过来的props中有相关的属性，可以给予参数默认值或者对props中的属性进行校验

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <a href="todo">{item}</a>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})
HYThemeHeaderRCM.prototype = {
  title: PropTypes.string.isRequired,
  keywords:PropTypes.array
};

HYThemeHeaderRCM.defaultProps = {
  keywords: [],
};


export default HYThemeHeaderRCM;
