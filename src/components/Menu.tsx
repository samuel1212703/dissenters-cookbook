import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { flashOutline, flashSharp, hammerOutline, hammerSharp, personOutline, personSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  iosIcon: string;
  mdIcon: string;
  title: string;
  subPages: SubPage[];
}

interface SubPage {
  url: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Dissenter',
    iosIcon: personOutline,
    mdIcon: personSharp,
    subPages: [
      {
        title: 'Profile',
        url: '/folder/Profile',
      },
      {
        title: 'Saved',
        url: '/folder/Saved',
      },
    ],
  },
  {
    title: 'Narcotics',
    iosIcon: flashOutline,
    mdIcon: flashSharp,
    subPages: [
      {
        title: 'Cannabis',
        url: '/folder/Cannabis',
      },
      {
        title: 'Depressants',
        url: '/folder/Depressants',
      },
      {
        title: 'Hallucinogens',
        url: '/folder/Hallucinogens',
      },
      {
        title: 'Opioids',
        url: '/folder/Opioids',
      },
      {
        title: 'Stimulants',
        url: '/folder/Stimulants',
      },
    ]
  },
  {
    title: 'Weaponry',
    iosIcon: hammerOutline,
    mdIcon: hammerSharp,
    subPages: [
      {
        title: 'Chemical',
        url: '/folder/Chemical',
      },
      {
        title: 'Firearms',
        url: '/folder/Firearms',
      },
      {
        title: 'Melee',
        url: '/folder/Melee',
      },
      {
        title: 'Long-range',
        url: '/folder/LongRanged',
      },
      {
        title: 'Short-range',
        url: '/folder/ShortRanged',
      },
    ],
  },
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Dissenters Cookbook</IonListHeader>
          <IonNote>Everybody owns Everything</IonNote>
          {appPages.map((appPage) => {
            return (
              <div key={appPage.title}>
                <h4><IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} /> {appPage.title}</h4>
                <IonList>
                  {appPage.subPages.map((subPage, index) => {
                    return (
                      <IonMenuToggle key={index} autoHide={false}>
                        <IonItem className={location.pathname === subPage.url ? 'selected' : ''} routerLink={subPage.url} routerDirection="none" lines="none" detail={false}>
                          <IonLabel>{subPage.title}</IonLabel>
                        </IonItem>
                      </IonMenuToggle>
                    )
                  })}
                </IonList>
              </div>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
