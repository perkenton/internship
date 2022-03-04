import React from 'react';
import styles from './CarouselBlock.module.scss';
import cn from 'classnames';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import CustomButton from '../../../common/src/components/CustomButton/CustomButton';


export default function CarouselBlock() {


  return (
    <section className={ styles.carousel }>
      <div className={cn(styles.navBlocks, styles.prevBlock) } onClick={ () => console.log('prev()') }>
        <LeftOutlined className={ styles.arrowIcon } />
      </div>

      <div className={ styles.slide } >
        <h2 className={ styles.title }>Бесплатная парковка</h2>
        <p className={ styles.subtitle }>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</p>
        <CustomButton label='Подробнее' color='green' class={ styles.button } />
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