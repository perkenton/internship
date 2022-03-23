import React from 'react';
import styles from './MainPage.module.scss';
import AsideMenu from '../../common/src/components/AsideMenu';
import MainBlock from './MainBlock/MainBlock';
import CarouselBlock from './CarouselBlock/CarouselBlock';


export default function MainPage() {

  return (
    <div className={ styles.mainPage }>
      <AsideMenu />
      <MainBlock />
      <CarouselBlock />
    </div>
  )
}