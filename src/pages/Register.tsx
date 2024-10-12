import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>myApp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        Register page
      </IonContent>
    </IonPage>
  );
};

export default Register;