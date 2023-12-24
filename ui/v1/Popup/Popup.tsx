import React from 'react';
import { Dialog } from '@headlessui/react';
import styles from './styles.module.scss';
import { IoClose } from "react-icons/io5";

interface PopupProps extends React.PropsWithChildren {
 active: boolean;
 setActive: (active: boolean) => void;
}

export const Popup: React.FC<PopupProps> = ({ active, setActive, children }) => {
  return (
    <Dialog
      open={active}
      onClose={() => {
        setActive(false);
      }}
      className="relative z-50"
    > 
     <div className='fixed inset-0' style={{ background: 'rgba(0, 0, 0, .44)' }} aria-hidden='true' />
     <div className={styles.container}>
      <Dialog.Panel className={styles.dialog}>
        <button
          className={styles.close}
          onClick={() => {
          setActive(false);
         }}
        >
          <IoClose
           size={"24"}
          />
        </button>
        {children}
      </Dialog.Panel>
     </div>
    </Dialog>
 )
}
