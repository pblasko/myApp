import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import MPL from '../assets/magyar-posta-logo.svg';

const Login: React.FC = () => {
    const doLogin = (event: any) => {
        event.preventDefault();
        console.log('do Login');
    }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>myApp Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false}>
        <IonCard>
            <div className='ion-text-center ion-padding'>
                <img src={MPL} alt='Posta logo' width={'50%'} />
            </div>
            <IonCardContent>
                <form onSubmit={doLogin}>
                    <IonInput fill='outline' labelPlacement='floating' label='e-mail' type='email' placeholder='peter@posta.hu'></IonInput>
                    <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label='password' type='password'></IonInput>
                    <IonButton type='submit' expand='block' className='ion-margin-top'>
                        Login
                        <IonIcon icon={logInOutline} slot="end" />
                    </IonButton>
                    <IonButton routerLink='/register' color={'secondary'} type='button' expand='block' className='ion-margin-top'>
                        Create Account
                        <IonIcon icon={personCircleOutline} slot="end" />
                    </IonButton>
                </form>
            </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;