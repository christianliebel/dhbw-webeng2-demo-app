import {Observable} from 'rxjs';

export abstract class CameraService {
  abstract getPicture(): Observable<string>;
}
