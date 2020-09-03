## Description

According to official docs of `react-native-webview` (The injectedJavaScriptBeforeContentLoaded prop):

> This is a script that runs before the web page loads for the first time. It only runs once, even if the page is reloaded or navigated away. This is useful if you want to inject anything into the window, localstorage, or document prior to the web code executing.

But here we can see that the script on the page runs first, and only then runs the code from the `injectedJavaScriptBeforeContentLoaded` prop.

## Expected behavior:

Alert "injectedJavaScriptBeforeContentLoaded" shows **before** "script executed".

## Actual behavior

Alert "injectedJavaScriptBeforeContentLoaded" shows **after** "script executed".