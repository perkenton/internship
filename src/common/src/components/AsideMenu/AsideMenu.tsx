import React, { useState } from 'react';
import styles from './AsideMenu.module.scss';
import { MenuOutlined, PlusOutlined } from '@ant-design/icons';
import { useWindowSize } from '../../utils/useWindowSize';
import cn from 'classnames';
import TelegramIcon from '../../assets/icons/Telegram/Telegram';
import FacebookIcon from '../../assets/icons/Facebook/Facebook';
import InstagramIcon from '../../assets/icons/Instagram/Instagram';
import { Lang } from '../../model/model';


export default function AsideMenu() {
  const { width } = useWindowSize();
  const isMobile = width < 531;
  const [ isOpened, setIsOpened ] = useState<boolean>(false);
  const [ lang, setLang ] = useState<Lang>(Lang.Ru);
  const LANG_MAP = {
    'Ru': 'Eng',
    'En': 'Рус',
  };
  const asideClass = cn(styles.asideBlock, isOpened && styles.asideBlockOpened);
  const menuBlockClass = cn(styles.menuBlock, isOpened && styles.menuBlockOpened);


  function toggleCollapsed() {
    setIsOpened(!isOpened);
  }

  function changeLang() {
    switch(lang) {
      case Lang.En:
        setLang(Lang.Ru);
        break;
      case Lang.Ru:
        setLang(Lang.En);
        break;
    }
  }


  return (
    <aside className={ asideClass }>
      <div className={ styles.aside }>
        <div onClick={ toggleCollapsed } className={ styles.burgerButton } >
          { isOpened ? <PlusOutlined className={ styles.crossIcon }/> : <MenuOutlined className={ styles.burgerIcon }/> }
        </div>
        { !isOpened && !isMobile && <p className={ styles.lang } onClick={ changeLang }>{ LANG_MAP[lang] }</p> }
      </div>

      <div className={ menuBlockClass }>
        <ul className={ styles.menuList }>
          <li className={ styles.menuItem }><a href='#' className={ styles.menuItemLink}>Парковка</a></li>
          <li className={ styles.menuItem }><a href='#' className={ styles.menuItemLink}>Страховка</a></li>
          <li className={ styles.menuItem }><a href='#' className={ styles.menuItemLink}>Бензин</a></li>
          <li className={ styles.menuItem }><a href='#' className={ styles.menuItemLink}>Обслуживание</a></li>
        </ul>
        <div className={ styles.iconsBlock }>
          <a href='https://telegram.org' className={ styles.iconLink } target='_blank' rel='noreferrer'><TelegramIcon /></a>
          <a href='https://www.facebook.com' className={ styles.iconLink } target='_blank' rel='noreferrer'><FacebookIcon /></a>
          <a href='https://www.instagram.com' className={ styles.iconLink } target='_blank' rel='noreferrer'><InstagramIcon /></a>
        </div>
      </div>

      { isOpened && isMobile && <p className={ styles.lang } onClick={ changeLang }>{ LANG_MAP[lang] }</p> }
    </aside>
  )
}