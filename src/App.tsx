import {
	IonApp,
	IonRouterOutlet,
	IonSplitPane,
	setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import Firearms from './pages/Firearms';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
<<<<<<< Updated upstream
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/folder/Profile" />
            </Route>
            {/* <Route path="/folder/:name" exact={true}>
              <Page />
            </Route> */}
            <Route path="/folder/Firearms" exact={true}>
              <Firearms />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
=======
	return (
		<IonApp>
			<IonReactRouter>
				<IonSplitPane contentId='main'>
					<Menu />
					<IonRouterOutlet placeholder id='main'>
						<Route path='/' exact={true}>
							<Redirect to='/folder/Cookbook' />
						</Route>
						<Route path='/folder/:name' exact={true}>
							<Page />
						</Route>
					</IonRouterOutlet>
				</IonSplitPane>
			</IonReactRouter>
		</IonApp>
	);
>>>>>>> Stashed changes
};

export default App;
