import React, { useState, useId } from 'react';
import styles from './checkBox.module.scss';

interface Props {
    label?: string;
    checked?: boolean;
    disabled?: boolean;
}

export const CheckBox: React.FC<Props> = ({ label, checked = false, disabled = false }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const id = useId();

    return (
        <div className={styles.container}>
            <input
                id={id}
                disabled={disabled}
                type='checkbox'
                checked={isChecked}
                onChange={() => {
                    setIsChecked(prev => !prev);
                }}
                className={isChecked ? styles.checked : ''}
            />
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
        </div>
    );
};