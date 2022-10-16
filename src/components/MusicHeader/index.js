import React, { memo } from "react";

import { NavLink } from "react-router-dom";
import { HeaderWrapped } from "./style";
import { headerLinks } from "@/common/local-data";
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

const News = memo(() => {
  const selectTagClick = (item, index) => {
    if (index < 3) {
      return (
        <NavLink exact to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };
  const selectChange = index =>{
    
  }

  return (
    <HeaderWrapped>
      <div className="content wrap-v1">
        <div className="content-left">
          <a href="#/" className="logo sprite_01">
            蔡智豪
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item" onClick={(index)=>selectChange(index)}>
                  {selectTagClick(item, index)}
                </div>
              );
            })}
          </div>
        </div>
        <div className="content-right">
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}></Input>
          <div className="center">创作者中心</div>
          <a href="/" className="sign-in">登录</a>
        </div>
      </div>
      <div className="arrowHead"></div>
    </HeaderWrapped>
  );
});

export default News;
