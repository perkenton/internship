import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import cn from 'classnames';
import Placemark from '../../assets/icons/Placemark/Placemark';

type HeaderType = {
  classes?: string,
}

export default function Header({ classes }: HeaderType) {
  const headerClass = cn(styles.header, classes);

  return (
    <header className={ headerClass }>
      <Link to='/'>
        <p className={ styles.logo }>Need for drive</p>
      </Link>
      <div className={ styles.cityBlock }>
        <span className={ styles.placemarkIcon }><Placemark /></span>
        <span className={ styles.cityText }>Ульяновск</span>
      </div>
    </header>
  )
}