import styled from "styled-components";

export const HeaderWrapped = styled.div`
  height: 75px;
  background: #242424;

  .content {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-left {
      display: flex;
      .logo {
        width: 176px;
        height: 69px;
        display: inline-block;
        background-position: 0 0;
        text-indent: -9998px;
      }
      .select-list {
        display: flex;
        line-height: 70px;

        .select-item {
          position: relative;
          /* a标签被选中默认会有一个active的类名 */
          .active .icon {
            position: absolute;
            display: inline-block;
            width: 12px;
            height: 7px;
            bottom: -1px;
            left: 50%;
            transform: translate(-50%, 0);
            background-position: -226px 0;
          }
          a {
            display: block;
            padding: 0 20px;
            color: #ccc;
          }
          /* 子元素中最后一个元素 */
          :last-of-type a {
            position: relative;
            ::after {
              position: absolute;
              content: "";
              width: 28px;
              height: 19px;
              background-image: url(${require("@/assets/img/sprite_01.png")});
              background-position: -190px 0;
              top: 20px;
              right: -15px;
            }
          }

          &:hover a,
          a.active {
            color: #fff;
            background: #000;
            text-decoration: none;
          }
        }
      }
    }
    &-right{
      display: flex;
      align-items: center;
      .search{
        width: 158px;
        height: 32px;
        border-radius: 16px;
        input{
          &::placeholder{
            font-size: 12px;
          }
        }
      }
      .center{
        width: 90px;
        height: 32px;
        background-color: #242424;
        border: 1px solid #4d4d4d;
        color: #cccccc;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 16px;
        margin-right: 20px;
        &:hover{
          color:#fff;
          border: 1px solid #ccc;
          cursor: pointer;
        }
      }
      .sign-in{
        color: #787878;
        &:hover{
          color: #999999;
        }
      }
    }
  }
  .arrowHead {
    height: 5px;
    background-color: #c20c0c;
  }
`;
