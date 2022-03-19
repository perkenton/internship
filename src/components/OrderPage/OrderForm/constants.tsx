import React, { ReactElement } from 'react';
import Location from './Location/Location';

export type StepsType = {
  id: number,
  title: string,
  content?: ReactElement,
  buttonLabel: string,
  buttonCallback: () => void,
}

export const STEPS: StepsType[] = [
  {
    id: 1,
    title: 'Местоположение',
    content: <Location />,
    buttonLabel: 'Выбрать модель',
    buttonCallback: () => {},
  },
  {
    id: 2,
    title: 'Модель',
    // content: <Model />,
    buttonLabel: 'Дополнительно',
    buttonCallback: () => {},
  },
  {
    id: 3,
    title: 'Дополнительно',
    // content: <Additional />,
    buttonLabel: 'Итого',
    buttonCallback: () => {},
  },
  {
    id: 4,
    title: 'Итого',
    // content: <Result />,
    buttonLabel: 'Заказать',
    buttonCallback: () => {},
  },
];