import { IonBackButton, IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React from 'react';
import { checkmarkDoneOutline } from 'ionicons/icons';

const Register: React.FC = () => {
  const router = useIonRouter();

  const doRegister = (event: any) => {
    event.preventDefault();
    console.log('do Register');
    router.goBack();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonButton slot='start'>
            <IonBackButton defaultHref='/' />
          </IonButton>
          <IonTitle>Create Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false}>
        <IonCard>
            <IonCardContent>
                <form onSubmit={doRegister}>
                    <IonInput fill='outline' labelPlacement='floating' label='e-mail' type='email' placeholder='peter@posta.hu'></IonInput>
                    <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label='password' type='password'></IonInput>
                    <IonButton type='submit' expand='block' className='ion-margin-top' color={'secondary'}>
                        Register
                        <IonIcon icon={ checkmarkDoneOutline } slot="end" />
                    </IonButton>
                </form>
            </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;