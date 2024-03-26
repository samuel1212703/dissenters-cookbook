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
<<<<<<< Updated upstream
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
=======
import {
	bookOutline,
	bookSharp,
	sunnyOutline,
	sunnySharp,
	eyeOutline,
	eyeSharp,
	leafOutline,
	leafSharp,
	iceCreamOutline,
	iceCreamSharp,
	invertModeOutline,
	invertModeSharp,
	heartOutline,
	heartSharp,
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
	url: string;
	iosIcon: string;
	mdIcon: string;
	title: string;
}

const appPages: AppPage[] = [
	{
		title: 'Cookbook',
		url: '/folder/Cookbook',
		iosIcon: bookOutline,
		mdIcon: bookSharp,
	},
	{
		title: 'Cannabis',
		url: '/folder/Cannabis',
		iosIcon: leafOutline,
		mdIcon: leafSharp,
	},
	{
		title: 'Depressants',
		url: '/folder/Depressants',
		iosIcon: iceCreamOutline,
		mdIcon: iceCreamSharp,
	},
	{
		title: 'Hallucinogens',
		url: '/folder/Hallucinogens',
		iosIcon: eyeOutline,
		mdIcon: eyeSharp,
	},
	{
		title: 'Inhalants',
		url: '/folder/Inhalants',
		iosIcon: sunnyOutline,
		mdIcon: sunnySharp,
	},
	{
		title: 'Opiods',
		url: '/folder/Opiods',
		iosIcon: invertModeOutline,
		mdIcon: invertModeSharp,
	},
	{
		title: 'Stimulants',
		url: '/folder/Stimulants',
		iosIcon: heartOutline,
		mdIcon: heartSharp,
	},
>>>>>>> Stashed changes
];

const Menu: React.FC = () => {
	const location = useLocation();

<<<<<<< Updated upstream
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
=======
	return (
		<IonMenu contentId='main' type='overlay'>
			<IonContent>
				<IonList id='inbox-list'>
					<IonListHeader>Dissenter's Cookbook</IonListHeader>
					<IonNote>Knowledge</IonNote>
					{appPages.map((appPage, index) => {
						return (
							<IonMenuToggle key={index} autoHide={false}>
								<IonItem
									className={
										location.pathname === appPage.url ? 'selected' : ''
									}
									routerLink={appPage.url}
									routerDirection='none'
									lines='none'
									detail={false}
								>
									<IonIcon
										aria-hidden='true'
										slot='start'
										ios={appPage.iosIcon}
										md={appPage.mdIcon}
									/>
									<IonLabel>{appPage.title}</IonLabel>
								</IonItem>
							</IonMenuToggle>
						);
					})}
				</IonList>
			</IonContent>
		</IonMenu>
	);
>>>>>>> Stashed changes
};

export default Menu;
