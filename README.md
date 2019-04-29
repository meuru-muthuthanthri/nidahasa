# Nidahasa
Collection of Hymns

Running tha App
* sudo n 11.0.0
* source ~/.bash_profile
* react-native run-android

Release app 
* Change the versions (versionCode and versionName) on android/app/build.gradle 
* cd android
* ./gradlew assembleRelease
* Try running the app on device
    * Connect the device
    * adb devices -  should list devices
    * react-native run-android --variant=release
