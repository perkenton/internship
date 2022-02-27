import React from 'react';
import styles from './MainBlock.module.scss';
import Placemark from '../../../common/src/assets/icons/Placemark/Placemark';
import CustomButton from '../../../common/src/components/CustomButton/CustomButton';


export default function MainBlock() {
  return (
    <main className={ styles.mainBlock }>
      <div className={ styles.header }>
        <p className={ styles.logo }>Need for drive</p>
        <div className={ styles.cityBlock }>
          <span className={ styles.placemarkIcon }><Placemark /></span>
          <span className={ styles.cityText }>Ульяновск</span>
        </div>
      </div>

      <div className={ styles.heroBlock }>
        <h1 className={ styles.title }><span>Каршеринг</span> <span className={ styles.accentTitle }>Need for drive</span></h1>
        <p className={ styles.subtitle }>Поминутная аренда авто твоего города</p>
        <CustomButton label='Забронировать' color='green' class={ styles.bookButton } />
      </div>

      <div className={ styles.footer }>
        <p className={ styles.copyright }>&copy; 2016&ndash;2022 «Need for drive»</p>
        <a href='tel:+74952342244' className={ styles.phone }>8 (495) 234-22-44</a>
      </div>
    </main>
  )
}