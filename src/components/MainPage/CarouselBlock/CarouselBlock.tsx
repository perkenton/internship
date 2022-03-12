import React from 'react';
import styles from './CarouselBlock.module.scss';
import cn from 'classnames';
import { Carousel } from 'antd';
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


  return (
    <section className={ styles.carousel }>
      <div className={cn(styles.navBlocks, styles.prevBlock) } onClick={ () => console.log('prev()') }>
        <LeftOutlined className={ styles.arrowIcon } />
      </div>

      <div className={ styles.slide } >
        <h2 className={ styles.title }>Бесплатная парковка</h2>
        <p className={ styles.subtitle }>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</p>
        <CustomButton label='Подробнее' color='green' classes={ styles.button } />
      </div>

      <div className={ styles.navDots }>
        <span className={ styles.navDot } />
        <span className={ styles.navDot } />
        <span className={ styles.navDot } />
        <span className={ styles.navDot } />
      </div>

      <div className={cn(styles.navBlocks, styles.nextBlock) } onClick={ () => console.log('next()') }>
        <RightOutlined className={ styles.arrowIcon } />
      </div>
    </section>
  )
}