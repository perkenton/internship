import { NBS } from '../../../common/src/constants';
import { ButtonColor } from '../../../common/src/components/CustomButton';
import photoOne from './assets/jp-valery-1052513-unsplash-1.jpg';
import photoTwo from './assets/jp-valery-1052513-unsplash-2.jpg';
import photoThree from './assets/jp-valery-1052513-unsplash-3.jpg';
import photoFour from './assets/jp-valery-1052513-unsplash-4.jpg';


export type CarouselData = {
  id: number,
  image: string,
  title: string,
  subtitle: string,
  buttonColor: ButtonColor,
}

export const CAROUSEL_DATA: CarouselData[] = [
  {
    id: 1,
    image: photoOne,
    title: 'Бесплатная парковка',
    subtitle: `Оставляйте машину на${NBS}платных городских парковках и${NBS}разрешенных местах, не${NBS}нарушая ПДД, а${NBS}также в${NBS}аэропортах`,
    buttonColor: 'green',
  },
  {
    id: 2,
    image: photoTwo,
    title: 'Страховка',
    subtitle: `Полная страховка автомобиля`,
    buttonColor: 'blue',
  },
  {
    id: 3,
    image: photoThree,
    title: 'Бензин',
    subtitle: `Полный бак на${NBS}любой заправке города за${NBS}наш счёт`,
    buttonColor: 'red',
  },
  {
    id: 4,
    image: photoFour,
    title: 'Обслуживание',
    subtitle: `Автомобиль проходит еженедельное${NBS}ТО`,
    buttonColor: 'purple',
  },
]