import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { TOption } from '@/ui/v1/SingleSelect/SingleSelect';
import styles from './dropDown.module.scss';

export interface DropDownProps {
    button: React.ReactNode;
    options: TOption[];
}

const DropDown: React.FC<DropDownProps> = ({ button, options }) => {
    return (
        <div className={styles.container}>
            <Menu>
            <Menu.Button>{button}</Menu.Button>
            <Menu.Items>
                <div className={styles.items}>
                {options.map(item => 
                    <div className={styles.item} key={item.id}>
                        <Menu.Item>
                            <button onClick={item.onSelect} className={styles.button}>{item.name}</button>
                        </Menu.Item>
                    </div>
                )}
                </div>
            </Menu.Items>
            </Menu>
        </div>
      )
}

export default DropDown;
