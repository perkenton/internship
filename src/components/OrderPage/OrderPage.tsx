import React from 'react';
import styles from './OrderPage.module.scss';
import AsideMenu from '../../common/src/components/AsideMenu';
import OrderForm from './OrderForm/OrderForm';


export default function OrderPage() {


  return (
    <div className={ styles.orderPage }>
      <AsideMenu />
      <OrderForm />
    </div>
  )
};