import React from 'react';
import styles from './CarouselBlock.module.scss';
import cn from 'classnames';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { NBS } from '../../../common/src/constants';
import CustomButton, { ButtonColor } from '../../../common/src/components/CustomButton/CustomButton';
import photoOne from './assets/jp-valery-1052513-unsplash-1.jpg';
import photoTwo from './assets/jp-valery-1052513-unsplash-2.jpg';
import photoThree from './assets/jp-valery-1052513-unsplash-3.jpg';
import photoFour from './assets/jp-valery-1052513-unsplash-4.jpg';

type CarouselData = {
  id: number,
  image: string,
  title: string,
  subtitle: string,
  buttonColor: ButtonColor,
}

const CAROUSEL_DATA: CarouselData[] = [
  {
    id: 1,
    image: photoOne,
    title: 'Бесплатная парковка',
    subtitle: `Оставляйте машину на${NBS}платных городских парковках и${NBS}разрешенных местах, не${NBS}нарушая ПДД, а${NBS}также в${NBS}аэропортах`,
    buttonColor: 'green',
  },
  {
    id: 2,
    image: photoTwo,
    title: 'Страховка',
    subtitle: `Полная страховка автомобиля`,
    buttonColor: 'blue',
  },
  {
    id: 3,
    image: photoThree,
    title: 'Бензин',
    subtitle: `Полный бак на${NBS}любой заправке города за${NBS}наш счёт`,
    buttonColor: 'red',
  },
  {
    id: 4,
    image: photoFour,
    title: 'Обслуживание',
    subtitle: `Автомобиль проходит еженедельное${NBS}ТО`,
    buttonColor: 'purple',
  },
]


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