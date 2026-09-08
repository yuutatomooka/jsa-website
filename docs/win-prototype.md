# WIN公開UI 運用・引き継ぎ

WIN Website Builderが本文の唯一の編集元です。OfficerはWINで文章・写真・accordion項目を編集して保存・公開します。日常更新でGitHubの操作は不要です。

## 初回導入

1. 現在のHomeを使用します。ページの追加・削除は不要です。
2. Website SettingsのCustom JavaScriptにある既存のtest loaderを**全て削除し**、[production loader](win-external-loader.html)のコードに置き換えて保存してください。欄がJavaScript本体のみを要求する場合は前後のscriptタグを除きます。両方を同時に残さないでください。
3. 公開Home `https://win.wisc.edu/JSA/home/` を新しいタブで開きます。元のSimple Titleの位置にHero、元のaccordionの位置に開閉可能なカードが表示されます。本文末尾にテストカードは表示されません。
4. WINのEdit画面で標準編集UIが残ること、本文変更・保存・公開後の再読み込みで変更が反映されることを確認します。
5. スマートフォン幅とキーボードでsummaryの開閉・リンクを確認します。

公開JSのみ配信済みでも、WIN上の古いtest loaderは自動更新されません。上記の貼り替えが必要です。

## 対応範囲

公開Homeの2026-09-08取得HTMLに基づき、`.section-cont` 内の `.simple-section-title-bg` Hero見出しと `.accordion` の各見出し・全本文・隣接画像を変換します。header、footer、メニューや他の部品はWINのままです。未対応のフォーム・埋め込みを持つセクションは元表示を維持します。Heroは現在の見出しテンプレートに対応し、背景の装飾CSSは取り込みません。

本文は許可した段落、リスト、強調、見出し、HTTP(S)リンク・画像だけに変換します。スクリプト、イベント属性、CSSは取り込みません。元DOMは削除せず、React描画成功後だけ非表示にします。

実行範囲は `https://win.wisc.edu/JSA/<slug>/`、クエリなし、iframe外です。contenteditable、`.section-cont--edit`、`data-jsa-editor`を検出したら停止・復元します。公開HTMLにも存在するdata-editableは編集画面判定に使いません。管理URL・クエリ付きプレビューは元のWIN表示です。WINの編集画面DOMは未検証なので初回導入時に必ず上記確認を行ってください。

## 日英ページ

英語のHomeは `home/`、日本語版を作る場合のみWINで別ページを追加し、URL末尾を `home-ja/` にしてください。各言語の本文はそれぞれWINで編集します。日本語ページへのリンクはWINメニューで設定してください。未作成の日本語ページへのリンクは自動生成しません。

`-ja/` のページでは共通操作ラベルを日本語、それ以外は英語にします。ラベルは `src/win/entry.tsx` の独立i18nextインスタンスで管理します。本文を翻訳JSONへ複製したり自動翻訳したりしません。他のページにも同じslug規則を使えます。

## 復帰と障害対応

- 一時停止: ブラウザConsoleで `JSAWin.stop()`。元セクションのdisplay値・優先度を復元しReactを削除します。再開は `JSAWin.start()`。
- 恒久停止: WINのCustom JavaScriptからloaderを外して保存、公開ページを再読み込み。
- JS取得失敗時は元HTMLがそのまま表示されます。描画エラー時は該当セクションを復元します。
- WINテンプレート変更後、対応しない部品は元表示を維持します。新しいテンプレートを独自UIにするには技術担当がadapterとfixtureテストを更新します。
- 公開ページのライブ編集同期は行いません。WINで公開後、再読み込みで最新本文を反映します。

## 技術担当者

`npm ci` → `npm run build` → `npm run lint` → `npm test`。
buildは通常サイトに加え `dist/win/jsa-win.js` と `docs/win/jsa-win.js` を生成します。mainへのpushでGitHub ActionsがdistをPagesへ公開します。配信URLは `https://yuutatomooka.github.io/jsa-website/win/jsa-win.js`。

更新では生成JSもコミットし、loaderのv値を更新してWINへ貼り直します。アダプタは `src/win/adapter.ts`、ライフサイクルは `src/win/entry.tsx`、スタイルは `src/win/theme.css`。`tests/fixtures/win-home.html` は公開ページのセクション構造のfixtureです。旧data-jsa-block試作とwin-preview.htmlは本番の検証には使いません。
