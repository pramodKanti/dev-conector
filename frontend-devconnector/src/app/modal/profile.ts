import { Education } from './educatiobn';
import { Experince } from './experince';

export interface Profile {
  bio: string;
  company: string;
  date: string;
  education: [];

  experience: any;
  githubusername: string;
  handle: string;
  location: string;
  skills: string[];
  social?: {
    youtube: '';
    twitter: '';
    facebook: '';
    linkedin: '';
    instagram: '';
  };
  status: string;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
  website: string;
  __v: number;
  _id: string;
}
