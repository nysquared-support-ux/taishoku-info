# taishoku-info

退職代行サービス比較ガイド (運営主体タイプ別の整理・PR/アフィリエイト広告を含みます)

## 構成

- **Hub** (`/`): 退職代行サービスの選び方ガイド (LP-C ベース)
- **Spoke 1** (`/lp-a/`): TikTok流入向けシンプル訴求LP (LP-A simple ベース)
- **Spoke 2** (`/unemployment-insurance/`): 退職代行利用後の失業保険ガイド
- **Spoke 3** (`/faq/`): よくある質問FAQ 15問
- **Spoke 4** (`/damage-risk/`): 損害賠償リスクと対策 (一般論)

## 技術スタック

- Astro 4.16
- Tailwind CSS
- Cloudflare Pages (functions/_middleware.js で EU/EEA 遮断)
- @astrojs/sitemap

## 編集方針

- 編集部が公開情報を整理した参考記事
- 特定業者を推奨・順位付けしない
- 社労士・弁護士監修ではありません
- アフィリエイト広告 (A8.net / アクセストレード) を含む

## 改訂

- 2026-04-26 [LqUP0q5rOa]: ★313/★316 ABC fork 移植 Session A 完了
  - tenshoku-compare-info をテンプレートに新規作成
  - Spoke directory 名を退職代行用に変更 (lp-a / unemployment-insurance / faq / damage-risk)
  - 初期構造のみ push (Hub/Spoke content 差替は Session B-D で実施)
  - package.json name → taishoku-info
- 関連教訓: ★318 5段階ワークフロー / ★321-★323 (Routine cap/訴求型LPバランス/CMP構造的限界)
