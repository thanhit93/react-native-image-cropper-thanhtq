# react-native-image-cropper-thanhtq

## Result
<div align="left">
 <a href="https://github.com/thanhit93/react-native-image-cropper-thanhtq/tree/master/images/image-ios-crop.jpg">
  <img title="iOs crop avatar" src="/images/image-ios-crop.jpg" width=200 />
 </a>
 <a href="https://github.com/thanhit93/react-native-image-cropper-thanhtq/tree/master/images/image-android-crop.PNG">
  <img title="Android crop avatar" src="/images/image-android-crop.PNG" width=200 />
 </a>
</div>

## iOS Installation
 do it manually as described below:
 
1. Run `npm install react-native-image-cropper-thanhtq --save`
2. Open your project in XCode, right click on `Libraries` and click `Add
   Files to "Your Project Name"` Look under `node_modules/react-native-image-cropper-thanhtq` and add `TOCropViewController.xcodeproj`.
3. Add `libImageCropperManager.a` to `Build Phases -> Link Binary With Libraries`
4. Done!

## Android Installation
Run `npm install react-native-image-cropper-thanhtq --save`
You can use the React Native CLI to add native dependencies automatically:
`$ react-native link react-native-image-cropper-thanhtq`
## Manual setup
In `android/settings.gradle`
```gradle
...

include ':react-native-image-cropper-thanhtq'
project(':react-native-image-cropper-thanhtq').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-image-cropper-thanhtq/android')
```

In `android/app/build.gradle`

```gradle
...

dependencies {
    ...

    compile project(':react-native-image-cropper-thanhtq')
}
```

Register module (in `MainApplication.java`)

```java
import com.cropimagepicker.cropper.ImageCropperPackage; // <--- Import Package

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new ImageCropperPackage() // <--- Initialize the package
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}

```
--------------------

### Usage
1. For Android:
```js
import ImageCropper from 'react-native-image-cropper-thanhtq'

let options = {
            guideLines: 'on-touch',
            cropShape: 'rectangle',
            title: 'CROP AVATAR',
            cropMenuCropButtonTitle: 'Done',
            uri_image: response.path,
            fixAspectRatio: true
          }
 ImageCropper.selectImage(options, (responseCrop) => {
    if (responseCrop && responseCrop.uri) { // uri = 'file://' + path
        console.log("UIr crop", responseCrop.uri)
              // crop succeeded
    } else if(responseCrop.error){
              //error handling
    }
  });
```

2. For iOS: 
  ```js
  import ImageCropper from 'react-native-image-cropper-thanhtq';
  let options = {
     urlBase64Image: 'data:image/jpg;base64,' + response.data,
     path: response.uri
   }
  ImageCropper.showViewCrop(options, (data) => {
     let encodedData = data
     let newUri = `data:image/jpg;base64,${encodedData}`
   })
  ```
 ----------------------END------------------------
