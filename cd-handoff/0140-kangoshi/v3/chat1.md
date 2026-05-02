# 退職代行LP（看護師向け）

_Started 2026-05-02 21:50 UTC_

---

## User

退職代行サービスの LP を作成してください。

【ターゲット】
看護師 (夜勤・人手不足・引き止め強い職場で働く方)

【LP 構成】
1. ヒーロー: 共感 (夜勤の限界・職場の引き止め) + CTA (24時間対応・LINE 無料相談)
2. 看護師特有の事情 4 つ (夜勤/シフト・人手不足下の引き止め・慢性的疲労・関係維持希望)
3. 業者 3 タイプ比較 (民間/労組/弁護士・料金・交渉権)
4. 看護師向け 3 軸選び (24時間対応 / 引き止め交渉力 / 看護師業界実績)
5. 法的根拠 (民法627条・労基法・有期雇用注意)
6. FAQ (夜勤対応 / 師長バレ / 損害賠償 / 強い引き止め)
7. CTA (LINE 無料相談)

【デザイン方針】
- 信頼感重視 (法律事務所風・水色 + 白基調)
- E-E-A-T 強化 (法令引用・編集ポリシー連携)
- PR 表記必須 (景表法配慮)
- モバイルファースト (スマホ閲覧 80% 想定)

【除外事項】
- 「絶対」「100%」「最強」等の断定表現禁止
- 「成功率 99%」等の根拠なき数値禁止
- 美容/煽り表現禁止 (医療職の信頼性重視)

## Assistant

退職代行サービスのLPですね。看護師ターゲットで信頼感重視、法律事務所風のデザインで作成します。

デザイン方針を宣言します:
- **配色**: 水色 (#0E7490 ティール系の信頼感ある青) + 白基調 + ダークネイビー文字
- **フォント**: Noto Sans JP (本文) + Noto Serif JP (見出しの一部で法律事務所感)
- **トーン**: 煽らない、断定しない、法令根拠ベース。E-E-A-T配慮で監修・運営情報を明示
- **モバイルファースト**: 縦スクロール最適化、固定LINE CTA、タップしやすいFAQアコーディオン
- **PR表記**: ヒーロー上部に明示
- **インタラクティブ**: FAQアコーディオン、業者比較タブ切替、3軸チェック、スクロール追従CTA

進めます。

_[tool: update_todos]_

_[tool: copy_starter_component]_

サービス名は架空の「ナースリリーフ相談室」とし、運営は架空の「リーガルサポート編集部(看護師経験者監修)」として作成します。

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: done]_

_[tool: fork_verifier_agent]_

看護師向け退職代行LPを作成しました。

**構成**
1. PR表記バー(冒頭明示)
2. ヒーロー: 「夜勤明けの朝、もう『辞めます』と言えないあなたへ」+ 編集ポリシーカード
3. 看護師特有の事情 4枚 (夜勤/シフト・人手不足の引き止め・慢性的疲労・関係維持希望)
4. 業者3タイプ比較 (民間/労組/弁護士) — モバイルはタブ切替、デスクトップは比較表
5. 3軸の選び方 (24時間対応 / 引き止め交渉力 / 看護師業界実績) + 各3つの確認項目
6. 法的根拠 (民法627条引用 / 労基法5条・15条 / 有期雇用の注意)
7. FAQ 6件 (アコーディオン)
8. 最終CTA + 編集ポリシー連携フッター
- スクロール追従のLINE CTA(モバイル想定)
- Tweaksで追従CTAのON/OFFとブランド色相が調整可能

**配慮した点**
- 「絶対」「100%」「最強」「成功率99%」等の断定・煽り表現は不使用
- 法令引用は e-Gov 出典明記、法的助言ではない旨を併記
- 提携収益・利益相反開示・更新日を明示しE-E-A-T配慮
- 架空のサービス名「ナースリリーフ相談室」で原案を構成しています(実在ブランド模倣の回避)

**次の検討事項**
- 実際の運営者情報・監修者プロフィール・特商法表記の差し込み
- LINE友だち追加URLの設定
- 提携サービスの個別比較表(必要であれば追加可能)

## User

Verifier agent check completed

## Assistant

アイコン呼び出しが`<Icon.xxx s={...} />`形式になっている箇所を、関数呼び出し`{Icon.xxx(...)}`形式に修正します。

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

_[tool: fork_verifier_agent]_

アイコンサイズのバグを修正しました。`<Icon.xxx s={...} />` (props経由) を `{Icon.xxx(...)}` (関数呼び出し) に書き換え、ヘッダー・ヒーロー・看護師事情・3軸セクション・FAQ・CTA・追従ボタン全て正しい寸法で表示されるようにしています。

## User

CTA ボタンの文言を全箇所変更してください:
- ヒーローのメイン CTA: 「無料で相談する (24時間対応)」
- 本体の CTA: 「退職の相談をする (無料)」
- 追従の CTA: 「無料相談 (24h)」

リンク先は href="https://px.a8.net/svt/ejp?a8mat=PLACEHOLDER" target="_blank" rel="sponsored noopener" としてください。
LINE という文言は完全に削除してください。

## Assistant

_[tool: snip]_

_[tool: grep]_

Now let me find the specific LINE text occurrences and the CTA hrefs to update:

_[tool: grep]_

I'll find all the LINE references and CTA links and update them.

_[tool: grep]_

_[tool: snip]_

_[tool: str_replace_edit]_

Now let me check for remaining LINE references in the FinalCTA section (the section header) and CTA section sub-text:

_[tool: grep]_

_[tool: snip]_

_[tool: read_file]_

Let me check the FinalCTA section for any remaining LINE references and the FAQ for "夜勤対応" mentions:

_[tool: grep]_

_[tool: snip]_

_[tool: grep]_

_[tool: snip]_

Good — no remaining "LINE" or "看護師専用" references found. The "line" matches are all CSS variables/tones, not user-facing copy. Now let me run the verifier to check the final state:

_[tool: done]_

_[tool: update_todos]_

_[tool: fork_verifier_agent]_

_[tool: snip]_

コンソールエラーなしで完成しました。LP本体に「LINE」「看護師専用」などの未削除コピーが残っていないことも確認済みです。

## User

Verifier agent check completed

