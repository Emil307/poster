import React, { useState } from 'react';
import { Listbox } from '@headlessui/react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from './styles.module.scss';

export type TOption = {
 id: number;
 name: string;
 icon?: React.ReactElement;
 onSelect?: () => void;
 unavailable?: boolean;
}

export interface SingleSelectProps {
 options: TOption[];
 disabled?: boolean;
 defaultSelected?: TOption;
}

export const SingleSelect: React.FC<SingleSelectProps> = ({ options, defaultSelected, ...props }) => {
  const [selected, setSelected] = useState(defaultSelected || options[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Listbox value={selected} onChange={setSelected} {...props}>
        <Listbox.Button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        {selected.icon}
        <span className={styles.name}>{selected.name}</span>
        {isOpen ? <IoIosArrowUp color='#000' size={"20"}/> : <IoIosArrowDown color='#000' size={"20"}/>}
        </Listbox.Button>
        <Listbox.Options className={styles.options}>
          {options.map((option, optionIdx) => (
            <Listbox.Option
              key={optionIdx}
              value={option}
              disabled={option.unavailable}
              className={styles.option}
              onClick={option.onSelect}
            >
            {option.icon && option.icon}
            <span className={styles.name}>
              {option.name}
            </span>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
   </div>
  )
}
