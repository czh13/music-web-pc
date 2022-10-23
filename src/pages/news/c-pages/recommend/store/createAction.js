import * as actionType from "./constant";

import { getTopBanners, getHotRecommends } from "@/api/recommend.js";

// 将请求到的数据放到redux里,返回一个对象
const changeTopBannerAction = (res) => ({
  type: actionType.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

const changeHotRecommendAction = (res) => ({
  type: actionType.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
});

// 包裹一层，可以传一些额外的参数，如page、limit等
// redux里进行数据请求,主要结合了redux-thunk
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      console.log(res);
      dispatch(changeTopBannerAction(res))
    });
  };
};

// limit返回的数组长度
export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      console.log(res,1111);
      dispatch(changeHotRecommendAction(res));
    });
  };
};

