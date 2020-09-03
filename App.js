/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {WebView} from 'react-native-webview';

const App: () => React$Node = () => {
  return (
    <WebView
      source={{
        uri: 'file:///android_asset/index.html',
      }}
      injectedJavaScriptBeforeContentLoaded={`
        alert('injectedJavaScriptBeforeContentLoaded');
        true;
      `}
    />
  );
};

export default App;
