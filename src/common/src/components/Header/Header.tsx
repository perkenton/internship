import React from 'react';
import styles from './Header.module.scss';
import Placemark from '../../assets/icons/Placemark/Placemark';


export default function Header() {

  return (
    <header className={ styles.header }>
      <p className={ styles.logo }>Need for drive</p>
      <div className={ styles.cityBlock }>
        <span className={ styles.placemarkIcon }><Placemark /></span>
        <span className={ styles.cityText }>Ульяновск</span>
      </div>
    </header>
  )
}