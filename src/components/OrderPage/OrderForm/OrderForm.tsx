import React, { useState } from 'react';
import styles from './OrderForm.module.scss';
import Header from '../../../common/src/components/Header/Header';
import { Steps, Form } from 'antd';
import { STEPS } from './constants';
import { NBS } from '../../../common/src/constants';
import CustomButton from '../../../common/src/components/CustomButton/CustomButton';


export default function OrderForm() {
  const { Step } = Steps;
  const [current, setCurrent] = useState<number>(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };


  return (
    <div className={ styles.orderFormWrapper }>
      <Header classes={ styles.header } />

      <Steps current={ current } className={ styles.steps }>
        {
          STEPS.map(item => (
            <Step key={ item.id } title={ item.title } />
          ))
        }
      </Steps>

      <Form className={ styles.form }>

        <div className={ styles.formItemsContent }>
          { STEPS[current].content }
        </div>

        <div className={ styles.orderResult }>
          <p className={ styles.resultTitle }>Ваш заказ:</p>
          <div className={ styles.orderItems }>
            <p className={ styles.orderItemTitle }>Пункт выдачи</p>
            <span className={ styles.dots } />
            <p className={ styles.orderItemValue }>
              <span>Ульяновск,</span>
              <span>Нариманова 42</span>
            </p>
          </div>
          <p className={ styles.orderCost }>Цена: от{NBS}8{NBS}000 до{NBS}12{NBS}000{NBS}₽</p>
          <CustomButton label={ STEPS[current].buttonLabel } color='green' onClick={ next } />
        </div>

      </Form>
    </div>
  )
}