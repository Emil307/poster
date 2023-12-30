import React, { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { Button } from '../../../ui/v1/Button/Button';
import styles from './styles.module.scss';
import Image from "next/image";
import { useTranslation } from "next-i18next";

export type Person = {
    id: Number;
    name: string;
}

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
]

export const AutoCompleteInput: React.FC = () => {
  const [mobileSearchActive, setMobileSearchActive] = useState(false);
  const [selected, setSelected] = useState('');
  const [query, setQuery] = useState('');
  const { t: translate } = useTranslation('header'); 

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div>
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className={styles.container}>
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <Combobox.Input
                placeholder={translate('Artist, venue, event')}
                className={styles.input}
                displayValue={(person: Person) => person.name}
                onChange={(event) => setQuery(event.target.value)}
              />
            </Combobox.Button>
          </div>
          <div className={styles.openMobileSearchButton}>
            <Button 
              styleType='tertiary'
              width='40px'
              height='32px'
              onClick={() => setMobileSearchActive(true)}
            >
              <Image src="/icons/search.svg" alt="search" width={24} height={24} priority={true} />
            </Button>
          </div>
          {mobileSearchActive &&
            <div className={styles.mobileWidget} onClick={() => setMobileSearchActive(false)}>
              <div className={styles.mobileWidgetContent} onClick={e => e.stopPropagation()}>
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <Combobox.Input
                    placeholder='Артист, площадка,  мероприятие'
                    className={styles.input}
                    displayValue={(person: Person) => person.name}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </Combobox.Button>
                <button onClick={() => setMobileSearchActive(false)}>
                  <Image src="/icons/close.svg" alt="close" width={24} height={24} priority={true} />
                </button>
              </div>
            </div>
          }
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className={styles.options}>
              {filteredPeople.length === 0 && query !== '' ? (
                <p className={styles.empty}>
                  По вашему запросу ничего не найдено,<br/>
                  попробуйте изменить запрос или проверить написание
                </p>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={styles.option}
                    value={person}
                  >
                    <span>
                      {person.name}
                    </span>
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}