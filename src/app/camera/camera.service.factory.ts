import {MobileCameraService} from './mobile.camera.service';
import {WebCameraService} from './web.camera.service';

export function CameraServiceFactory() {
  return window['cordova'] ? new MobileCameraService(window) : new WebCameraService(window);
}
