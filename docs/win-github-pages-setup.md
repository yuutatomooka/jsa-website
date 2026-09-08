# GitHub Actionsなしの公開設定

このリポジトリでは、React用JSをGitHub Pagesから配信する。現在のサイトは既存のGitHub Pagesワークフローが`dist`を公開しているため、`npm run publish:win-bundle`は`docs/win`と`dist/win`の両方へJSを出力する。

`main`にプッシュされ、既存のPagesデプロイが完了すると、バンドルは`https://yuutatomooka.github.io/jsa-website/win/jsa-win.js`になる。PagesのURLが異なる場合は、そのURLの末尾に`win/jsa-win.js`を付け、両方のWINローダーの`script.src`を更新する。

## 更新時

JSを変更した時は、リポジトリのルートで次を実行する。

```bash
npm run publish:win-bundle
```

すると`docs/win/jsa-win.js`が更新される。これを他の変更とともにコミットし、`main`へプッシュする。WINローダーのURL末尾にある`?v=1`は、更新ごとに`?v=2`、`?v=3`のように増やすと、古いJSがブラウザに残りにくい。
