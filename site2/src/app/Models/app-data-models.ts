import { AdressDataSection } from './app-data-section-address.models';
import { AboutDataSection } from './app-data-section-about.models';
import { FeatureDataSection } from './app-data-section-features.models';

export interface AppData  {

features: FeatureDataSection,
about: AboutDataSection,
address: AdressDataSection

}

