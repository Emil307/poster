import React, { useState } from 'react';
import { 
    ConfirmLeavingPage,
    ConfirmLeavingContainer, 
    Retention,
    RetentionText,
    ConfirmLeavingButtons,
    Page,
    Form,
    Title,
    CheckPage,
    CheckContainer,
    Information,
    AlertContent,
    About,
    Place,
    Services,
    Service,
    Dots,
    CheckResult,
    Total,
    Bottom,
    Buttons 
} from './styles';
import { Input } from '@/ui/v1/Input/Input';
import { Label } from '@/ui/v1/Label/Label';
import { CheckBox } from '@/ui/v1/CheckBox/CheckBox';
import { Button } from '@/ui/v1/Button/Button';
import { Alert } from '@/ui/v1/Alert/Alert';
import { useRouter } from 'next/router';

export const TicketProcessingPage: React.FC = () => {
    const router = useRouter();
    const [activeStep, setActiveStep] = useState<'processing' | 'check' | 'confirmLeaving'>('processing');

    if (activeStep === 'confirmLeaving') {
        return (
            <ConfirmLeavingPage>
                <ConfirmLeavingContainer>
                    <Retention>
                        <h2>Вы уверены, что хотите покинуть экран заказа?</h2>
                        <RetentionText>Данные о выбранных билетах не сохранятся после выхода</RetentionText>
                    </Retention>
                    <ConfirmLeavingButtons>
                        <Button
                            onClick={() => setActiveStep('processing')}
                            styleType='primary'
                        >
                            Назад к заказу
                        </Button>
                        <Button
                            onClick={() => router.back()}
                            styleType='tertiary'
                        >
                            Выйти
                        </Button>
                    </ConfirmLeavingButtons>
                </ConfirmLeavingContainer>
            </ConfirmLeavingPage>
        )
    }

  return (
    <Page>
        {activeStep === 'processing' &&
            <Form>
                <Title>Оформление билета</Title>
                <Label>
                    <span>Имя заказчика</span>
                    <Input
                        placeholder='Иван Иванов'
                        type='name'
                    />
                </Label>
                <Label>
                    <span>E-mail</span>
                    <Input
                        placeholder='expample@gmail.com'
                        type='email'
                    />
                </Label>
                <Label>
                    <span>Телефон</span>
                    <Input
                        placeholder='+7 980 785 78 87'
                        type='phone'
                    />
                </Label>
                <CheckBox
                    label='Я принимаю условия Политики конфиденциальности платформы'
                    checked
                />
                <CheckBox
                    label='Я согласен с политикой  Обработки персональных данных на платформе'
                    checked
                />
            </Form>
        }

        {activeStep === 'check' && 
            <CheckPage>
                <Title>Проверьте заказ</Title>
                <CheckContainer>
                    <Alert>
                        <AlertContent>
                            <p>Билеты забронированы за вами на ближайшие <span>5 минут</span></p>
                            <p>Если в течение этого времени вы не оплатите, бронь будет снята, а заказ аннулирован</p>
                        </AlertContent>
                    </Alert>
                    <Information>
                        <About>
                            <h3>NIF23 - THE LOVE OF DON PERLIMPLÍN AND BELISA IN THE GARDEN by Federico García Lorca</h3>
                            <div>
                                <p>14 ноября, 19:00</p>
                                <p>ETKO HANGAR</p>
                            </div>
                        </About>
                        <Place>
                            <p>3 ряд, 17 место</p>
                            <p>3 800 Р</p>
                        </Place>
                    </Information>
                    <Services>
                        <Service>
                            <p>Билеты</p>
                            <Dots></Dots>
                            <p>7600 Р</p>
                        </Service>
                    </Services>
                    <Services>
                        <Service>
                            <p>Сервисный сбор</p>
                            <Dots></Dots>
                            <p>799 Р</p>
                        </Service>
                    </Services>
                    <Services>
                        <Service>
                            <p>Комиссия платформы</p>
                            <Dots></Dots>
                            <p>599 Р</p>
                        </Service>
                    </Services>
                    <CheckResult>
                        <Total>Итого</Total>
                        <Total>7600 Р</Total>
                    </CheckResult>
                </CheckContainer>
            </CheckPage>
        }
        <Bottom>
            <Buttons>
                <Button
                    onClick={() => {
                        if (activeStep === 'processing') {
                            setActiveStep('confirmLeaving')
                        }
                        if (activeStep === 'check') {
                            setActiveStep('processing')
                        }
                    }}
                    styleType='tertiary'
                    width='112px'
                >
                    Назад
                </Button>
                <Button
                    onClick={() => setActiveStep('check')}
                    styleType='primary'
                    width={activeStep === 'processing' ? '144px' : '238px'}
                >
                    {activeStep === 'processing' && <>Далее</>}
                    {activeStep === 'check' && <>Оплатить билет</>}
                </Button>
            </Buttons>
        </Bottom>
    </Page>
  )
}
