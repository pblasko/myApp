import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonText, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import intro from '../assets/intro.jpg';
import intro2 from '../assets/intro2.jpg';
import './intro.css';
import 'swiper/css';

interface ContainerProps {
    onFinish: () => void;
}

const Intro: React.FC<ContainerProps> = () => {
  return (
    <Swiper>
      <SwiperSlide>
        <img src={intro} alt='intro 1' />
        <IonText>
            <h3>Előre</h3>
        </IonText>
      </SwiperSlide>
      <SwiperSlide>
        <img src={intro2} alt='intro 2' />
        <IonText>
            <h3>Ne hátra</h3>
        </IonText>
      </SwiperSlide>
    </Swiper>
  )
};

export default Intro;