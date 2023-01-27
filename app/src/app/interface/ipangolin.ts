// import { Irole } from './irole';

export interface Ipangolin {
  _id: string;
  id: string;
  nom: string;
  password: string;
  role: 'Guerrier' | 'Alchimiste' | 'Sorcier' | 'Espions' | 'Enchanteur';
  amis: Array<string>;
}
