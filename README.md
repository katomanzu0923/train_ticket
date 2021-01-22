# README

## アプリケーション名

Train Ticket

## アプリケーション概要

ユーザーのパーソナリティとユーザーの意思を踏まえた300を超える切符との自動マッチングサービス

## URL

https://train-ticket-0923.herokuapp.com/

## 認証用パスワード

ユーザー名 : katomanzu	

password : 0337


## テスト用アカウント

日本: mail address＝ j@j	

中国: mail address＝ cha@cha

英語: mail address＝ us@us

日本: password ＝ AARK2088	

中国: password ＝ AARK2088

英語: password ＝ AARK2088

## 利用方法

ユーザーは最初言語を選択し、ログインもしくは登録ボタンに遷移する。

ユーザーは各言語で登録またはログインページに遷移する。

各処理が完了するとユーザーはエリア選択ページに遷移する

ユーザーがエリアを選択するとユーザ情報と選択エリアの情報から最適な切符が自動で表示される

## 目指した課題解決

ペルソナ：日本への旅行を検討している日本人と外国人

解決する課題:ユーザーが旅行をする時、多様な企業が様々な条件でフリー切符を出しているの事を原因として発生する複雑さや探す時間




## 実装した機能についてのGIF

要領の関係でサイズの省略、中国語表示の簡略を行っています。
リアルタイム多言語化対応
[![Image from Gyazo](https://i.gyazo.com/a557419f530c9d5d83994b04159f5a69.gif)](https://gyazo.com/a557419f530c9d5d83994b04159f5a69)

リアルタイムバリデーション 機能
[![Image from Gyazo](https://i.gyazo.com/a03133b293bd08ca8d39235979ad1620.gif)](https://gyazo.com/a03133b293bd08ca8d39235979ad1620)


[![Image from Gyazo](https://i.gyazo.com/2e12f8e0a3c772b11900d2d067e16b65.gif)](https://gyazo.com/2e12f8e0a3c772b11900d2d067e16b65)

[![Image from Gyazo](https://i.gyazo.com/00e73aa22e25f576aaacb9bf59651a62.gif)](https://gyazo.com/00e73aa22e25f576aaacb9bf59651a62)

[![Image from Gyazo](https://i.gyazo.com/a7228ed7b44602773463878169876884.gif)](https://gyazo.com/a7228ed7b44602773463878169876884)

[![Image from Gyazo](https://i.gyazo.com/81726889bea54e1ad1143f7f883d252e.gif)](https://gyazo.com/81726889bea54e1ad1143f7f883d252e)

## 実装中の機能

検索機能




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

