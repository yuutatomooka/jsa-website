# 旧直貼り検証からの移行

外部バンドルのReact描画確認は完了しています。新しい検証ページは不要です。
WINに残る旧テストコードを [production loader](win-external-loader.html) に置き換えてください。
詳しい手順は [運用文書](win-prototype.md) にあります。

`npm run build:win:paste` は補助用としてバンドルとstart呼び出しのみを生成します。テストカードは追加しません。通常運用では短い外部loaderを使います。
