'use strict'

import { NativeModules } from 'react-native';
// name as defined via ReactContextBaseJavaModule's getName
const { ImageCropperManager } = NativeModules;
const DEFAULT_OPTIONS = {
    urlBase64Image: '',
    aspectRatioPickerButtonHidden: true,
    aspectRatioLockEnabled: true
}
module.exports = {
    ...ImageCropperManager,
    showViewCrop:function showViewCrop(options,callback){
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        return ImageCropperManager.showViewCrop('test',{...DEFAULT_OPTIONS, ...options}, callback)
    }
}
