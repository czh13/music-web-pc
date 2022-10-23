import React, { memo, useEffect, useRef, useCallback, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTopBannerAction } from "../../store/createAction";
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";
import { Carousel } from "antd";

const TopBanners = memo(() => {
  // 数据
  const [currentIndex, setCurrentIndex] = useState(0);

  // redux数据
  const dispatch = useDispatch();

  // const recommend = useSelector(state => ({
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );

  //hook
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  const bannerRef = useRef();

  // 函数
  const beforeChange = useCallback((from, to) => {
    // console.log(to);
    setCurrentIndex(to);
  }, []);

   const bgImage =
     topBanners[currentIndex] &&
     topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel
            effect='fade'
            autoplay
            ref={bannerRef}
            beforeChange={beforeChange}>
            {topBanners.map((item, index) => {
              return (
                <div className='banner-item' key={item.imageUrl}>
                  <img className='image' src={item.imageUrl} alt='' />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className='btn left'
            onClick={() => bannerRef.current.prev()}></button>
          <button
            className='btn right'
            onClick={() => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});

export default TopBanners;
