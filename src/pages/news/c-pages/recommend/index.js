import React, { memo, useEffect } from "react";
import HotRecommend from "./c-cpns/hot-recommend";

import {
  RecommendWrapped,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";
import TopBanners from "./c-cpns/topBanners";

function Recommend(props) {
  // 以下代码被移到topBanner组件中
  // // useDispatch可以直接获取dispatch，不需要在通过connect
  // const dispatch = useDispatch()

  // // useSelector获取redux中的数据
  // // 接受两个参数，第一个是回调函数,shallowEqual浅层比较
  // const recommend = useSelector(state=>({
  //   // topBanners:state.recommend.topBanners

  //   // topBanners:state.get('recommend').get('topBanners')
  //   topBanners:state.getIn(['recommend','topBanners']) //同上等价
  // }),shallowEqual)

  // useEffect(()=>{
  //   dispatch(getTopBannerAction())
  // },[dispatch])

  return (
    <RecommendWrapped>
      <TopBanners></TopBanners>
      <Content className="wrap-v2">
        <RecommendLeft><HotRecommend></HotRecommend></RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapped>
  );
}

export default memo(Recommend);

// 以上是对下面的代码重构，使用redux中hook
// function Recommend(props) {
//   const { getBanners,topBanners } = props;
//   useEffect(() => {
//     getBanners()
//   }, [getBanners]);
//   return (
//     <div>
//       <h2>Recommend:{topBanners.length}</h2>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   // state是整体的state，所以需要取state.recommend
//   topBanners: state.recommend.topBanners,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));
