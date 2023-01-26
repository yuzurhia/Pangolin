import { ObjectId } from 'mongoose';

export interface Itoken {
  token: string;
  _id: ObjectId;
}
