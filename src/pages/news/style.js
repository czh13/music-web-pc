import styled from "styled-components";

export const DiscoverWrapped = styled.div`
  height: 30px;
  background-color: #c20c0c;
  .content {
    line-height: 25px;
    .menu {
      display: flex;
      align-items: center;
      padding-left: 125px;
      font-size: 12px;
      &-item {
        margin: 0 12px;
        .menu-link {
          color: #fff;
          text-decoration: none;
          padding: 3px 13px;
          &:hover {
            background-color: #9b0909;
            border-radius: 15px;
          }
        }
      }
    }
  }
`;
