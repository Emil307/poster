import React, { useState } from 'react';
import Image from 'next/image';
import { TCard } from '@/components/v1/HomePage/CategoryEventCard/CategoryEventCard';
import backgroundImage from '@/public/images/default-event-intro.jpg';
import { 
    Container,
    Center,
    LeftSlide,
    PrevSlide,
    MainSlide,
    NextSlide,
    RightSlide,
    Bg,
    Bottom,
    Button
} from './styles';

import { Title, Info, Tags, Cost } from '@/components/v1/HomePage/CategoryEventCard/styles';

export interface IntroSliderProps {
    items: TCard[];
    activeSlideIndex?: number;
}

const IntroSlider: React.FC<IntroSliderProps> = ({ items, activeSlideIndex }) => {
    const [mainSlideIndex, setMainSlideIndex] = useState(activeSlideIndex ? activeSlideIndex : 0); 

    function nextSlide() {
        setMainSlideIndex(mainSlideIndex === items.length - 1 ? 0 : mainSlideIndex + 1);
    }

    function prevSlide() {
        setMainSlideIndex(mainSlideIndex === 0 ? items.length - 1 : mainSlideIndex - 1);
    }

  return (
    <Container>
        <LeftSlide onClick={prevSlide}>
            <Bg
                style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 23.44%, rgba(0, 0, 0, 0.80) 71.35%), url(${backgroundImage.src}), lightgray -0.403px -67.646px / 100% 199.94% no-repeat`,
                backgroundRepeat: 'no-repeat'
                }}>
            </Bg>
            <Bottom>
                <Title>{items[mainSlideIndex - 2]?.title}</Title>
                <Info>{items[mainSlideIndex - 2]?.date} • {items[mainSlideIndex - 2]?.artist}</Info>
                <Tags>
                    <Cost>{items[mainSlideIndex - 2]?.cost}</Cost>
                    <p>{items[mainSlideIndex - 2]?.startAge}</p>
                </Tags>
            </Bottom> 
        </LeftSlide>

        <Center>
            <PrevSlide onClick={prevSlide}>
                <Bg
                    style={{
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 23.44%, rgba(0, 0, 0, 0.80) 71.35%), url(${backgroundImage.src}), lightgray -0.403px -67.646px / 100% 199.94% no-repeat`,
                    backgroundRepeat: 'no-repeat'
                    }}>
                </Bg>
                {mainSlideIndex === 0 ?
                <Bottom>
                    <Title>{items[items.length - 1]?.title}</Title>
                    <Info>{items[items.length - 1]?.date} • {items[items.length - 1]?.artist}</Info>
                    <Tags>
                        <Cost>{items[items.length - 1]?.cost}</Cost>
                        <p>{items[items.length - 1]?.startAge}</p>
                    </Tags>
                </Bottom> :
                <Bottom>
                    <Title>{items[mainSlideIndex - 1]?.title}</Title>
                    <Info>{items[mainSlideIndex - 1]?.date} • {items[mainSlideIndex - 1]?.artist}</Info>
                    <Tags>
                        <Cost>{items[mainSlideIndex - 1]?.cost}</Cost>
                        <p>{items[mainSlideIndex - 1]?.startAge}</p>
                    </Tags>
                </Bottom>
                }
            </PrevSlide>

            <MainSlide>
                <Bg
                    style={{
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 23.44%, rgba(0, 0, 0, 0.80) 71.35%), url(${backgroundImage.src}), lightgray -0.403px -67.646px / 100% 199.94% no-repeat`,
                    backgroundRepeat: 'no-repeat'
                    }}>
                </Bg>
                <Button><Image src="/icons/heart.svg" alt="like" width={24} height={24} priority={true} /></Button>
                <Bottom>
                    <Title>{items[mainSlideIndex]?.title}</Title>
                    <Info>{items[mainSlideIndex]?.date} • {items[mainSlideIndex]?.artist}</Info>
                    <Tags>
                        <Cost>{items[mainSlideIndex]?.cost}</Cost>
                        <p>{items[mainSlideIndex]?.startAge}</p>
                    </Tags>
                </Bottom>
            </MainSlide>

            <NextSlide onClick={nextSlide}>
                <Bg
                    style={{
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 23.44%, rgba(0, 0, 0, 0.80) 71.35%), url(${backgroundImage.src}), lightgray -0.403px -67.646px / 100% 199.94% no-repeat`,
                    backgroundRepeat: 'no-repeat'
                    }}>
                </Bg>
                {items.length === mainSlideIndex + 1 ? 
                <Bottom>
                    <Title>{items[0]?.title}</Title>
                    <Info>{items[0]?.date} • {items[0]?.artist}</Info>
                    <Tags>
                        <Cost>{items[0]?.cost}</Cost>
                        <p>{items[0]?.startAge}</p>
                    </Tags>
                </Bottom> :
                <Bottom>
                    <Title>{items[mainSlideIndex + 1]?.title}</Title>
                    <Info>{items[mainSlideIndex + 1]?.date} • {items[mainSlideIndex + 1]?.artist}</Info>
                    <Tags>
                        <Cost>{items[mainSlideIndex + 1]?.cost}</Cost>
                        <p>{items[mainSlideIndex + 1]?.startAge}</p>
                    </Tags>
                </Bottom>
                }
            </NextSlide>
        </Center>

        <RightSlide onClick={nextSlide}>
            <Bg
                style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 23.44%, rgba(0, 0, 0, 0.80) 71.35%), url(${backgroundImage.src}), lightgray -0.403px -67.646px / 100% 199.94% no-repeat`,
                backgroundRepeat: 'no-repeat'
                }}>
            </Bg>
            <Bottom>
                <Title>{items[mainSlideIndex + 2]?.title}</Title>
                <Info>{items[mainSlideIndex + 2]?.date} • {items[mainSlideIndex + 2]?.artist}</Info>
                <Tags>
                    <Cost>{items[mainSlideIndex + 2]?.cost}</Cost>
                    <p>{items[mainSlideIndex + 2]?.startAge}</p>
                </Tags>
            </Bottom>
        </RightSlide>
    </Container>
  )
}

export default IntroSlider;
