import { IonButton } from '@ionic/react';
import { useSwiper } from 'swiper/react';

export default function SlideNextButton({ children }: any) {
  const swiper = useSwiper();
  return (
    <IonButton color="secondary" onClick={() => swiper.slideNext()}>
      {children}
    </IonButton>
  );
}
