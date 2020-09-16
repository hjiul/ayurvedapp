module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: 'https://script.google.com'
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "appId": "com.ayurvedapp.app",
        "publish": "github",
        "dmg": {
          "contents": [
            {
                "x": 110,
                "y": 150
              },
              {
                "x": 240,
                "y": 150,
                "type": "link",
                "path": "/Applications"
              }
            ]
          },
          "appImage": {
            "license": "LICENSE"
          },
          "nsis": {
            "createDesktopShortcut": "always",
            "license": "LICENSE"
          }
      }
    }
  }
}