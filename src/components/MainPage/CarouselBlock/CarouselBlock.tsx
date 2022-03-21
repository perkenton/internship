import React from 'react';
import styles from './CarouselBlock.module.scss';
import cn from 'classnames';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import CustomButton from '../../../common/src/components/CustomButton';
import { CAROUSEL_DATA, CarouselData } from './constants';


export default function CarouselBlock() {
  const carousel: React.RefObject<CarouselRef> = React.createRef();
  const AUTOPLAY_SPEED: number = 5000;

  function next() {
    if(carousel.current) carousel.current.next();
  }

  function prev() {
    if(carousel.current) carousel.current.prev();
  }


  return (
    <div className={ styles.container }>
      <div className={ cn(styles.navBlocks, styles.prevNavBlock) } onClick={ prev }>
        <LeftOutlined className={ styles.arrowIcon } />
      </div>
      <div className={ cn(styles.navBlocks, styles.nextNavBlock) } onClick={ next }>
        <RightOutlined className={ styles.arrowIcon } />
      </div>

      <Carousel
        ref={ carousel }
        autoplaySpeed={ AUTOPLAY_SPEED }
        autoplay
      >
        {
          CAROUSEL_DATA.map((item: CarouselData) => {
            return (
              <section key={ item.id } className={ styles.slideSection }>
                <div
                  className={ styles.slide }
                  style={{
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${item.image}) no-repeat center`,
                    backgroundSize: 'cover'
                  }}
                >
                  <h2 className={ styles.title }>{ item.title }</h2>
                  <p className={ styles.subtitle }>{ item.subtitle }</p>
                  <CustomButton label='Подробнее' color={ item.buttonColor } classes={ styles.button } />
                </div>
              </section>
            )
          })
        }
      </Carousel>
    </div>
  )
}