import React, { memo } from "react";
import { FooterWrapped } from "./style";
import { footerLinks, footerImages } from "@/common/local-data";
import { Fragment } from "react";

const musicFooter = memo(() => {
  return (
    <FooterWrapped>
      <div className="content wrap-v2">
        <div className="footer-left">
          <div className="service">
            {footerLinks.map((item, index) => {
              return (
                <Fragment key={item.title}>
                  <a href={item.link}>{item.title}</a>
                  <span> | </span>
                </Fragment>
              );
            })}
          </div>
          <div>
            <span style={{ marginRight: "15px" }}>
              网易公司版权所有©1997-2022
            </span>
            <span>
              杭州乐读科技有限公司运营：
              <a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png">
                浙网文[2021] 1186-054号
              </a>
            </span>
          </div>
          <div>
            <a style={{ marginRight: "15px" }} href="#/">
              粤B2-20090191-18 工业和信息化部备案管理系统网站
            </a>
            <a href="#/">浙公网安备 33010902002564号</a>
          </div>
          <div>
            互联网宗教信息服务许可证：浙（2022）0000120
            监督举报邮箱：51jubao@service.netease.com
          </div>
        </div>
        <div className="footer-right">
          {footerImages.map((item, index) => {
            return (
              <li className="item" key={item.link}>
                <a
                  className="link"
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                </a>
                <span className="title">{item.title}</span>
              </li>
            );
          })}
        </div>
      </div>
    </FooterWrapped>
  );
});

export default musicFooter;
