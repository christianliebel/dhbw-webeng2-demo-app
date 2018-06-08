import {Observable} from 'rxjs';
import {CameraService} from './camera.service';
import {normalizeURL} from 'ionic-angular/util/util';

export class MobileCameraService extends CameraService {
    constructor(private readonly _window: Window) {
        super();
    }

    public getPicture(): Observable<string> {
        return new Observable<string>(subscriber => {
            /*const removeDomListener = () => {
                document.removeEventListener('deviceready', onCordovaDeviceReady);
            };

            const onCordovaDeviceReady = () => {*/
                const camera = (window as any).navigator.camera;

                const options = {
                    quality: 50,
                    destinationType: (window as any).Camera.DestinationType.FILE_URI,
                    sourceType: (window as any).Camera.PictureSourceType.CAMERA,
                    encodingType: (window as any).Camera.EncodingType.PNG,
                    saveToPhotoAlbum: false,
                    correctOrientation: true
                };

                camera.getPicture(imageData => {
                    // removeDomListener();
                    subscriber.next(normalizeURL(imageData));
                    subscriber.complete();
                }, error => {
                    // removeDomListener();
                    subscriber.error(error);
                }, options);
            /* };

             document.addEventListener('deviceready', onCordovaDeviceReady);*/
        });
    }
}
