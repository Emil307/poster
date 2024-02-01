import React, { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import styles from './styles.module.scss';
import { useTranslation } from "next-i18next";
import { IChildren } from '@/domain/common/base';

export type Tab = {
    title: string;
}

export interface TabsProps {
    tabs: Tab[];
    contents: IChildren[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs, contents }) => {
  const { t: translate } = useTranslation('ticketsPage');

  return (
    <div className={styles.container}>
      <Tab.Group>
        <div className={styles.toggle}>
          <Tab.List>
            {tabs.map(tab =>
              <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected ? styles.selected : styles.default
                      }
                    >
                      {translate(tab.title)}
                    </button>
                  )}
              </Tab> 
            )}
          </Tab.List>
        </div>
        <Tab.Panels>
          {contents.map(content =>
            <Tab.Panel>{content.children}</Tab.Panel>
          )}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
