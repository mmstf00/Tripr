package com.tripr.app;

import android.os.Build;
import android.os.Bundle;
import android.webkit.WebSettings;
import com.getcapacitor.BridgeActivity;
import com.google.firebase.FirebaseApp;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    
    // Initialize Firebase explicitly
    if (FirebaseApp.getApps(this).isEmpty()) {
      FirebaseApp.initializeApp(this);
    }

    // Configure WebView to allow mixed content (HTTP + HTTPS)
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
      WebSettings webSettings = bridge.getWebView().getSettings();
      webSettings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
    }
  }
}


