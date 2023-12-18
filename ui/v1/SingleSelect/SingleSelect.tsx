import React, { useState } from 'react';
import { Listbox } from '@headlessui/react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from './styles.module.scss';

export type TOption = {
 name: string;
 icon?: React.ReactElement;
 unavailable?: boolean;
}

export interface SingleSelectProps {
 options: TOption[];
 disabled?: boolean;
}

export const SingleSelect: React.FC<SingleSelectProps> = ({ options, ...props }) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
   <Listbox value={selected} onChange={setSelected} {...props}>
    <Listbox.Button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
     {selected.icon}
     <span className={styles.name}>{selected.name}</span>
     {isOpen ? <IoIosArrowUp size={"20"}/> : <IoIosArrowDown size={"20"}/>}
    </Listbox.Button>
    <Listbox.Options className={styles.options}>
      {options.map((option, optionIdx) => (
        <Listbox.Option
          key={optionIdx}
          value={option}
          disabled={option.unavailable}
          className={styles.option}
        >
         {option.icon && option.icon}
         <span className={styles.name}>
          {option.name}
         </span>
        </Listbox.Option>
      ))}
    </Listbox.Options>
   </Listbox>
  )
}
