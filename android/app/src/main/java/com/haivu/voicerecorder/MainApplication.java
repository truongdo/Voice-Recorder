package com.haivu.voicerecorder;
import android.app.Application;

import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.zmxv.RNSound.RNSoundPackage;
import com.rnim.rn.audio.ReactNativeAudioPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import org.pgsqlite.SQLitePluginPackage;
import com.facebook.soloader.SoLoader;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {

            @SuppressWarnings("UnnecessaryLocalVariable")
            List<ReactPackage> packages = new PackageList(this).getPackages();
//            packages.add(new SQLitePluginPackage());
            return packages;
        }



        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };



    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
//        ReadableNativeArray.setUseNativeAccessor(true);
//        ReadableNativeMap.setUseNativeAccessor(true);
    }
}