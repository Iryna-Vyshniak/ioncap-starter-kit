import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
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
          <IonGrid fixed>
            <IonRow class="ion-justify-content-center">
              <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                {' '}
                <img src={img} alt={desc} />
                <IonText>
                  <h3>{desc}</h3>
                </IonText>
                {index === introImages.length - 1 ? (
                  <IonButton color="success" onClick={() => onFinish()}>
                    Finish
                  </IonButton>
                ) : (
                  <SlideNextButton>Next</SlideNextButton>
                )}
              </IonCol>{' '}
            </IonRow>
          </IonGrid>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Intro;
