import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import ArtworksScreen from './Artworks/ArtworksScreen';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
    <Scene key="artworks" component={ArtworksScreen} />
    </Scene>
  </Router>
);

export default RouterComponent;