import React from 'react';
import styles from './CustomButton.module.scss';
import { LoadingOutlined } from '@ant-design/icons';
import cn from 'classnames';

type ButtonColor = 'green' | 'blue' | 'red' | 'purple';


export default function CustomButton(props: {
  label: string,
  name?: string,
  id?: string,
  color: ButtonColor,
  onClick?: (value?: any) => void,
  loading?: boolean,
  disabled?: boolean,
  class?: string,
}) {
  const buttonClass = cn(
    styles.button,
    props.disabled && styles.disabledButton,
    props.loading && styles.loadingButton,
    styles[props.color],
    props.class,
  );
  const hiddenClass = props.loading && styles.isHide;

  return (
    <button
      name={ props.name }
      id={ props.id }
      className={ buttonClass }
      onClick={ props.onClick }
      disabled={ props.disabled || props.loading }
    >
      { props.loading && <LoadingOutlined className={ styles.loader } /> }
      <span className={ cn(styles.label, hiddenClass) }>{ props.label }</span>
    </button>
  )
}