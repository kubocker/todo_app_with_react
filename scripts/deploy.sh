#!/bin/sh
set -eu

PROJECT="kubocker-aa1ba"

# ホスティング
HOSTINGPROJECT="demotodoappwithreact"

# Hostingターゲット先
TARGET="demo-todo-app-with-react"

# firebase認証用のトークン
# 取得
firebase_token=$(echo `firebase login:ci` | awk '{ print $53 }')


# デプロイ先firebaseプロジェクトに
# 有効なユーザーか確認
firebase use $PROJECT --token $firebase_token
if [[ $? -gt 0 ]]; then
  echo "該当のユーザーではデプロイできません"
  exit 1
fi

echo "ビルドしていきます"

# ビルドが正常か確認
tsc && vite build
if [[ $? -gt 0 ]]; then
 echo "ビルド失敗しています"
 exit 1
fi

echo "ビルド完了"
echo "デプロイしていきます"


firebase target:apply hosting $TARGET $HOSTINGPROJECT
firebase deploy --only hosting:$TARGET --token $firebase_token
if [[ $? -gt 0 ]]; then
  echo "デプロイできませんでした"
  exit 1
fi

echo "デプロイ完了しました"
