import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const сompany = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(сompany);
