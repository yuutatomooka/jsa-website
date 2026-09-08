# GitHub Actionsなしの公開設定

このリポジトリでは、React用JSだけをGitHub Pagesから配信する。GitHub Actionsは使わない。

## 最初の一回だけ行う設定

GitHubで`yuutatomooka/jsa-website`を開き、**Settings → Pages**へ進む。

1. **Build and deployment** のSourceを **Deploy from a branch** にする。
2. Branchを **main**、フォルダを **/docs** にする。
3. **Save**を押す。

`main`にプッシュした後、PagesのURLが表示される。標準URLは`https://yuutatomooka.github.io/jsa-website/`であり、バンドルは`https://yuutatomooka.github.io/jsa-website/win/jsa-win.js`になる。Settings → Pagesに違うURLが出る場合は、そのURLの末尾に`win/jsa-win.js`を付け、両方のWINローダーの`script.src`を更新する。

## 更新時

JSを変更した時は、リポジトリのルートで次を実行する。

```bash
npm run publish:win-bundle
```

すると`docs/win/jsa-win.js`が更新される。これを他の変更とともにコミットし、`main`へプッシュする。WINローダーのURL末尾にある`?v=1`は、更新ごとに`?v=2`、`?v=3`のように増やすと、古いJSがブラウザに残りにくい。
