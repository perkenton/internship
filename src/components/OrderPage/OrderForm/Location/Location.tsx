import React from 'react';
import styles from './Location.module.scss';
import { Form, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ulyanovskMap from '../assets/ulyanovskMap.jpg';

const { Option } = Select;


export default function Location() {

  return (
    <div className={ styles.location }>
      <div className={ styles.item }>
        <p className={ styles.label }>Город</p>
        <Form.Item
          name='city'
          rules={[{ required: true, message: 'Выберите город' }]}
        >
          <Select
            id='city'
            showSearch
            showArrow={ false }
            allowClear
            clearIcon={ <PlusOutlined className={ styles.clearIcon } /> }
            className={ styles.select }
            placeholder='Начните вводить город ...'
            optionFilterProp='children'
            filterOption={(input: string, option: any) =>
              option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children?.toLowerCase().localeCompare(optionB.children?.toLowerCase())
            }
          >
            <Option className={ styles.option } value='1'>Ульяновск</Option>
            <Option className={ styles.option } value='2'>Уфа</Option>
            <Option className={ styles.option } value='3'>Уральск</Option>
            <Option className={ styles.option } value='4'>Увельский</Option>
            <Option className={ styles.option } value='5'>Москва</Option>
            <Option className={ styles.option } value='6'>Тюмень</Option>
          </Select>
        </Form.Item>
      </div>

      <div className={ styles.item }>
        <p className={ styles.label }>Пункт выдачи</p>
        <Form.Item
          name='orderPlace'
          rules={[{ required: true, message: 'Выберите пункт выдачи' }]}
        >
          <Select
            id='orderPlace'
            showSearch
            showArrow={ false }
            allowClear
            clearIcon={ <PlusOutlined className={ styles.clearIcon } /> }
            className={ styles.select }
            placeholder='Начните вводить пункт ...'
            optionFilterProp='children'
            filterOption={(input: string, option: any) =>
              option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children?.toLowerCase().localeCompare(optionB.children?.toLowerCase())
            }
          >
            <Option className={ styles.option } value='1'>просп. Нариманова, 1</Option>
            <Option className={ styles.option } value='2'>просп. Ленина, 25</Option>
            <Option className={ styles.option } value='3'>ул. Куйбышева, 226г</Option>
            <Option className={ styles.option } value='4'>ул. Земляной Вал, 8</Option>
            <Option className={ styles.option } value='5'>просп. Ямашева, 45а</Option>
          </Select>
        </Form.Item>
      </div>

      <div className={ styles.mapBlock }>
        <p className={ styles.label }>Выбрать на карте:</p>
        <img src={ ulyanovskMap } alt='Карта Ульяновска' className={ styles.map }/>
      </div>

    </div>
  )
}