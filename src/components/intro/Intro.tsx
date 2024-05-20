import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

// Import Swiper styles
import 'swiper/css';
import './Intro.css';

import SlideNextButton from './SlideNextButton';
import { introImages } from '../../share/data/data';

interface ContainerProps {
  onFinish: () => void;
}

const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
  return (
    <Swiper>
      {introImages.map(({ id, img, desc }, index) => (
        <SwiperSlide key={id}>
          <div className="ion-text-center ion-padding">
            <img src={img} alt={desc} />
          </div>
          <IonText>
            <h3>{desc}</h3>
          </IonText>
          {index === introImages.length - 1 ? (
            <IonButton color="secondary" onClick={() => onFinish()}>
              Finish
            </IonButton>
          ) : (
            <SlideNextButton>Next</SlideNextButton>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Intro;
