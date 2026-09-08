# GitHub Pages配信

GitHub Actionsがmainの `npm run build` で生成したdistを公開します。
`dist/win/jsa-win.js` はbuildに含まれ、同じファイルを `docs/win/jsa-win.js` にも保存します。

配信URL: https://yuutatomooka.github.io/jsa-website/win/jsa-win.js

運用・貼り替え・復帰は [運用文書](win-prototype.md)、WINに貼るコードは [production loader](win-external-loader.html) を参照してください。
`win-external-loader-test.html` も互換用に同じproduction loaderへ変更しました。テストカードを生成するコードは使いません。
