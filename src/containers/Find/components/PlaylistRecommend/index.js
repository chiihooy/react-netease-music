import React from 'react'
import { Link } from 'react-router-dom'
import Swiper from 'react-id-swiper'
import PlaylistItem from '@/components/PlaylistItem'
import './index.scss'

// 歌单推荐导航卡片
const PlaylistRecommend = props => {
  const { playlists, title, intro, linkTo } = props

  const params = {
    slidesPerView: 'auto',
    resistanceRatio: 0,
    freeMode: true,
    freeModeSticky: true, //自动贴合
    freeModeMomentumBounce: false, //关闭动量反弹
    // spaceBetween: 8,  // 在这里设置无法自动转成vw，改写在.swiper-slide的padding中
    // slidesOffsetBefore: 15,  //在这里设置无法自动转成vw，改写在.swiper-container的padding中
    // slidesOffsetAfter: 15,
    observer: true,
    observeParents: true,
    shouldSwiperUpdate: true // 可以解决设置slidesPerView:'auto'导致的初始显示最后一张slide的问题
  }

  return (
    <div className="PlaylistRecommend">
      <div className="header">
        <div className="header-left">
          <div className="title">{title}</div>
          <div className="intro">{intro}</div>
        </div>
        <Link to={linkTo} className="header-right">
          查看更多
        </Link>
      </div>
      <Swiper {...params}>
        {playlists.map(item => {
          return (
            <div key={item.id}>
              <PlaylistItem data={item} />
            </div>
          )
        })}
      </Swiper>
    </div>
  )
}

export default React.memo(PlaylistRecommend)