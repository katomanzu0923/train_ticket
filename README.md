# README

## アプリケーション名

Train Ticket

## アプリケーション概要

ユーザーのパーソナリティとユーザーの意思を踏まえた300を超える切符との自動マッチングサービス

## URL

[リンクテキスト](URL "タイトル")


## テスト用アカウント

日本: mail address＝ j@j

中国: mail address＝ c@c

英語: mail address＝ e@e

日本: password ＝ AARK2088	

中国: password ＝ AARK2088

英語: password ＝ AARK2088

## 利用方法

ユーザーは最初言語を選択肢ログインもしくは登録ボタンに遷移する。

ユーザーは各言語で登録またはログインページに遷移する。

各処理が完了するとユーザーはエリア選択ページに遷移する

ユーザーがエリアを選択するとユーザ情報と選択エリアの情報から最適な切符が自動で表示される

## 目指した課題解決

ペルソナ：日本への旅行を検討している日本人と外国人

解決する課題:多様な種類のフリー切符と多様なパーソナリティのユーザーをマッチさせる複雑さや時間という課題

## 洗い出した用件

| 優先順位 | 機能                        | 目的                                                                | 詳細 | ストーリー（ユースケース）| 見積もり（所要時間：０h） |
| ------- | -------------------------- | ------------------------------------------------------------------ |
| 3       | マッチング機能               | ユーザーに適した切符の情報を提供するため                                  | データベース上のユーザー情報と切符の情報を組み合わユーザーの使える切符を提案する | ユーザーがニックネームと年齢と国籍、Eメールとパスワードを打ち込みログイン出来る状態にする | 10 | 
| 2       | 多言語対応機能               | ユーザーが最適な言語でサービスを使えるようにする                           | ユーザーの使用言語に適した言語でサービスを使用する| エリア画像をマウスオーバーすると言語では認識しづらいエリアイメージを表示させる。その時の言語を画像選択の補助として適宜表示させる | 10 | 
| 2       | リアルタイムバリデーション     | ユーザーの入力ミスを瞬時に指摘するすることによって離脱率を下げる              | ユーザーが文字を打ち込んだ瞬間条件に適した文字かどうか判断せさ、適さない場合はエラーメッセージを出す、適している場合はokメッセージを出す | ユーザが自身の情報を登録しようとする瞬時に判断される。・その判断に応じたエラーメッセージやオッケーメッセージが表示される。・全てのブランクにオッケーメッセージが出ていない場合はサブミットボタンを稼働させない | 8 |
| 2       | 画像選択機能                 | 行きたいエリアを文字ではなく画像を用いて視覚的に選択できるようにする           | ユーザーが行きたいエリアを選択する旅に画像遷移でユーザーを誘導して遷移させる | エリア画像をマウスオーバーすると言語では認識しづらいエリアイメージを表示させる。その時の言語を画像選択の補助として適宜表示させる | 8 | 
| 2       | ハンバーグメニュー            | モバイルなどの狭いヘッダーにおいても複数のヘッダーメニューを表示できるようにする | 右上にハンバーグメニューを設置。また、ハンバーグメニュを開いたら背景をぼかしてハンバーグメニューを見やすくする | 右上にハンバーグメニューを設置。また、ハンバーグメニュを開いたら背景をぼかしてハンバーグメニューを見やすくする | 5 |
| 2       | カード表示機能               | ユーザーが情報を分かりやすく情報を得れるようにする                          | カードに載せる情報を見やすくするように実装する | カードに載せる情報を見やすくするように実装する"	"ユーザーが情報ページに遷移するとカード情報が表示される | 5 |
| 2       | モバイル対応                | ディバイスごとに最適化しユーザーがUXを向上化させるため                       | 必要に応じてフォントサイズやボタンの大きさや数変更する | ユーザーがpcを使っている場合は横に広いレイアウトを表示、ユーザーがスマートフォンを使っている場合は縦に広いレイアウトを表示。その際にはフォントサイズはpcと比較して大きさを自動で変更される | 5 |
| 1       | 検索機能                    | ユーザのマッチング最適化率を向上させるため                                 | データベース以外のユーザー情報を流動性高めでマッチングさせる |データベース以外のユーザー情報を流動性高めでマッチングさせる"	"ユーザーがラジオボックス から絞り込みたい情報を選択してそれに応じた表示が行われる | 5 |


## 実装した機能についてのGIF


[![Image from Gyazo](https://i.gyazo.com/f4734c55bd67d6cf485a8a992e1d28bc.gif)](https://gyazo.com/f4734c55bd67d6cf485a8a992e1d28bc)

[![Image from Gyazo](https://i.gyazo.com/e8218b825624e9f3eae1ad76b1c8e4e6.gif)](https://gyazo.com/e8218b825624e9f3eae1ad76b1c8e4e6)

[![Image from Gyazo](https://i.gyazo.com/a03133b293bd08ca8d39235979ad1620.gif)](https://gyazo.com/a03133b293bd08ca8d39235979ad1620)

[![Image from Gyazo](https://i.gyazo.com/2e12f8e0a3c772b11900d2d067e16b65.gif)](https://gyazo.com/2e12f8e0a3c772b11900d2d067e16b65)

[![Image from Gyazo](https://i.gyazo.com/00e73aa22e25f576aaacb9bf59651a62.gif)](https://gyazo.com/00e73aa22e25f576aaacb9bf59651a62)

[![Image from Gyazo](https://i.gyazo.com/a7228ed7b44602773463878169876884.gif)](https://gyazo.com/a7228ed7b44602773463878169876884)

[![Image from Gyazo](https://i.gyazo.com/81726889bea54e1ad1143f7f883d252e.gif)](https://gyazo.com/81726889bea54e1ad1143f7f883d252e)

## 実装予定の機能

検索機能

## データベース設計

![代替テキスト](train_ticket.png "ER図[train_ticket]")

## ローカルでの動作方法
  
	ターミナルで以下のようにコマンドをうつ
    git clone https://github.com/username/git-app.git
  Rubyのバージョン

    ruby '2.6.5'

  使用しているパッケージ

    gem 'pry-rails'

    gem 'devise'

    gem 'jquery-rails'

    gem 'active_hash'

    gem 'ransack'

