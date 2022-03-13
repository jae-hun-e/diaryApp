import React from "react";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";

const adBannerUnitId = "ca-app-pub-3940256099942544/6300978111";

export const BottomBannerAds = () => (
  <AdMobBanner
    style={{ backgroundColor: "white" }}
    bannerSize="banner"
    adUnitID={adBannerUnitId} // Test ID, Replace with your-admob-unit-id
    servePersonalizedAds // true or false
    onDidFailToReceiveAdWithError={(err) => {
      console.log(err);
    }}
  />
);

/* 
앱 오프닝 광고	ca-app-pub-3940256099942544/3419835294
배너 광고	ca-app-pub-3940256099942544/6300978111
전면 광고	ca-app-pub-3940256099942544/1033173712
전면 동영상 광고	ca-app-pub-3940256099942544/8691691433
보상형 광고	ca-app-pub-3940256099942544/5224354917
보상형 전면 광고	ca-app-pub-3940256099942544/5354046379
네이티브 광고 고급형	ca-app-pub-3940256099942544/2247696110
네이티브 동영상 광고 고급형	ca-app-pub-3940256099942544/1044960115
*/
