import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../modal/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profile: BehaviorSubject<Profile> = new BehaviorSubject(null);

  constructor() {}
}
