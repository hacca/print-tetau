<?php
// json 形式のデータを扱うための定義
header('Content-type: application/json');
// PHP5.1.0以上はタイムゾーンの定義が必須
date_default_timezone_set('Asia/Tokyo');

// --------------------------
// 個別設定項目（３つ）
// --------------------------
// 送信先メールアドレス
$to = 'a.shinkohkai@iris.eonet.ne.jp';
// メールタイトル
$subject = '「紀州備長炭記念公園」お問い合わせフォームより';
// ドメイン（リファラチェックと送信元メールアドレスに利用）
$domain = 'binchotan.jp';

//変数初期化
$errflg =0;    // エラー判定フラグ
$dispmsg ='';  // 画面出力内容

// 入力項目
$nameval = '';   // 名前
$mailval = '';   // メールアドレス
$telval = '';    // 電話番号
$textval = '';   // 内容
$referrer = '';  // 遷移元画面

// 画面からのデータを取得
if(isset($_POST['nameval'])){ $nameval = $_POST['nameval']; }
if(isset($_POST['mailval'])){ $mailval = $_POST['mailval']; }
if(isset($_POST['telval'])){ $telval = $_POST['telval']; }
if(isset($_POST['textval'])){ $textval = $_POST['textval']; }
if(isset($_POST['referrer'])){ $referrer = $_POST['referrer']; }

if(strpos($_SERVER['HTTP_REFERER'], $domain) === false){
  // リファラチェック
  $dispmsg = '<p id="errmsg">Referer Error / お手数ですがお電話でお問い合わせくださいませ。0739-36-0226</p>';
  $errflg = 1;
}
else if($nameval == '' || $mailval == '' || $telval == '' || $textval == ''){
  //必須チェック
  $dispmsg = '<p id="errmsg">Error / お名前・お電話番号・メールアドレス・お問い合わせ内容は必須項目です。</p>';
  $errflg = 1;
}
else if(!preg_match("/^[\.!#%&\-_0-9a-zA-Z\?\/\+]+\@[!#%&\-_0-9a-z]+(\.[!#%&\-_0-9a-z]+)+$/", $mailval) || count( explode('@',$mailval) ) !=2){
  //メールアドレスチェック
  $dispmsg .= '<p id="errmsg">Error / メールアドレスの形式が正しくありません。</p>';
  $errflg = 1;
}
else{
  // メールデータ作成
  ini_set("mbstring.internal_encoding","UTF-8");
  mb_language("uni");

  $subject = "=?iso-2022-jp?B?".base64_encode(mb_convert_encoding($subject,'JIS','UTF-8'))."?=";
  $message= 'お名前：'.$nameval."\n";
  $message.='メールアドレス：'.$mailval."\n";
  $message.='お電話番号：'.$telval."\n";
  $message.="\n――――――――――――――――――――――――――――――\n\n";
  $message.=$textval;
  $message.="\n\n――――――――――――――――――――――――――――――\n";
  $message.='送信日時：'.date( "Y/m/d (D) H:i:s", time() )."\n";
  $message.='送信元IPアドレス：'.@$_SERVER["REMOTE_ADDR"]."\n";
  $message.='送信元ホスト名：'.getHostByAddr(getenv('REMOTE_ADDR'))."\n";
  $message.='リファラURL：'.$referrer."\n";
  $message.='お問い合わせページ：'.@$_SERVER['HTTP_REFERER']."\n";
  $fromName = mb_encode_mimeheader($nameval);
  $header ='From: '.$fromName.'<a.shinkohkai@iris.eonet.ne.jp>'."\n";
  $header.='Reply-To: '.$mailval."\n";
  $header.='MIME-Version: 1.0'."\n";
  $header.='Content-Type:text/plain;charset=utf-8'."\n";
  $header.='Content-Transfer-Encoding: 8bit';



  // メール送信
  $retmail = mail($to,$subject,$message,$header);

  // 送信結果の判定
  if( $retmail ){
    $dispmsg ='<p class="mf_success">お問い合わせを送信いたしました。返信までしばらくお待ちくださいませ。</p>';
  }else{
    $dispmsg .= '<p id="errmsg">【エラー】メール送信に失敗しました。。</p>';
    $errflg = 1;
  }
}

// 処理結果を画面に戻す
$result = array('errflg'=>$errflg, 'dispmsg'=>$dispmsg);
echo json_encode( $result );

// HTMLエスケープ処理
function hsc_utf8($str) {
  return htmlspecialchars($str, ENT_QUOTES,'UTF-8');
}
?>
