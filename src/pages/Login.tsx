import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>myApp Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        Posta Garage Login Page
      </IonContent>
    </IonPage>
  );
};

export default Login;