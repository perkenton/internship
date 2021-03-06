import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MainBlock.module.scss';
import Header from '../../../common/src/components/Header';
import CustomButton from '../../../common/src/components/CustomButton';


export default function MainBlock() {
  const navigate = useNavigate();

  return (
    <main className={ styles.mainBlock }>
      <Header />

      <div className={ styles.heroBlock }>
        <h1 className={ styles.title }><span>Каршеринг</span> <span className={ styles.accentTitle }>Need for drive</span></h1>
        <p className={ styles.subtitle }>Поминутная аренда авто твоего города</p>
        <CustomButton label='Забронировать' color='green' classes={ styles.bookButton } onClick={ () => navigate('/order') } />
      </div>

      <div className={ styles.footer }>
        <p className={ styles.copyright }>&copy; 2016&ndash;2022 «Need for drive»</p>
        <a href='tel:+74952342244' className={ styles.phone }>8 (495) 234-22-44</a>
      </div>
    </main>
  )
}