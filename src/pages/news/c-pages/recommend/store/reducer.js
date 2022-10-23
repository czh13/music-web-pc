
import {Map} from 'immutable'
import * as actionType from "./constant";

// fromJS 是深层次的生成一个新对象，没有必要，浪费性能，而map是浅层
const defaultState = Map({ //该对象已经变成immutable对象，其相应的取值及修改方式也会改变
  topBanners: [],
  hotRecommends:[]
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_TOP_BANNERS:
      // return { ...state, topBanners: action.topBanners };
      return state.set("topBanners", action.topBanners)  //immutable设置写法
    case actionType.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends',action.hotRecommends)
    default:
      return state;
  }
}

export default reducer;
