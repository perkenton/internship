import React from 'react';
import styles from './CustomButton.module.scss';
import { LoadingOutlined } from '@ant-design/icons';
import cn from 'classnames';

type ButtonColor = 'green' | 'blue' | 'red' | 'purple';

type ButtonProps = {
  label: string,
  name?: string,
  id?: string,
  color: ButtonColor,
  onClick?: (value?: any) => void,
  loading?: boolean,
  disabled?: boolean,
  classes?: string,
}

export default function CustomButton({
  label,
  name,
  id,
  color,
  onClick,
  loading,
  disabled,
  classes,
}: ButtonProps) {
  const buttonClass = cn(
    styles.button,
    disabled && styles.disabledButton,
    loading && styles.loadingButton,
    styles[color],
    classes,
  );
  const hiddenClass = loading && styles.isHide;

  return (
    <button
      name={ name }
      id={ id }
      className={ buttonClass }
      onClick={ onClick }
      disabled={ disabled || loading }
    >
      { loading && <LoadingOutlined className={ styles.loader } /> }
      <span className={ cn(styles.label, hiddenClass) }>{ label }</span>
    </button>
  )
}