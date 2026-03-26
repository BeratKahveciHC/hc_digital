<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);

$name    = htmlspecialchars(trim($data['name']    ?? ''), ENT_QUOTES, 'UTF-8');
$email   = filter_var(trim($data['email']  ?? ''), FILTER_SANITIZE_EMAIL);
$phone   = htmlspecialchars(trim($data['phone']   ?? ''), ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars(trim($data['message'] ?? ''), ENT_QUOTES, 'UTF-8');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Tüm alanlar zorunludur.']);
    exit();
}

$smtp_host = 'mail.hcdijital.com.tr';
$smtp_port = 587;
$smtp_user = 'info@hcdijital.com.tr';
$smtp_pass = 'Ersan123?';
$to        = 'info@hcdijital.com.tr';
$subject   = '[HC Dijital] Yeni İletişim Formu - ' . $name;

$html = '
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
  <h2 style="color:#0c122d;">Yeni İletişim Formu Mesajı</h2>
  <table style="width:100%;border-collapse:collapse;">
    <tr><td style="padding:8px 0;color:#666;width:120px;">Ad Soyad:</td><td style="padding:8px 0;font-weight:600;">' . $name . '</td></tr>
    <tr><td style="padding:8px 0;color:#666;">E-posta:</td><td style="padding:8px 0;font-weight:600;">' . $email . '</td></tr>
    <tr><td style="padding:8px 0;color:#666;">Telefon:</td><td style="padding:8px 0;font-weight:600;">' . ($phone ?: '-') . '</td></tr>
  </table>
  <hr style="margin:16px 0;border:none;border-top:1px solid #eee;" />
  <p style="color:#333;line-height:1.7;white-space:pre-wrap;">' . $message . '</p>
</div>';

$boundary = md5(time());
$mailBody  = "--$boundary\r\n";
$mailBody .= "Content-Type: text/html; charset=UTF-8\r\n\r\n";
$mailBody .= $html . "\r\n";
$mailBody .= "--$boundary--";

$headers  = "From: =?UTF-8?B?" . base64_encode('HC Dijital') . "?= <$smtp_user>\r\n";
$headers .= "To: $to\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/alternative; boundary=\"$boundary\"\r\n";

$fullMessage = $headers . "\r\n" . $mailBody;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "smtp://$smtp_host:$smtp_port");
curl_setopt($ch, CURLOPT_USE_SSL, CURLUSESSL_TRY);
curl_setopt($ch, CURLOPT_USERNAME, $smtp_user);
curl_setopt($ch, CURLOPT_PASSWORD, $smtp_pass);
curl_setopt($ch, CURLOPT_MAIL_FROM, "<$smtp_user>");
curl_setopt($ch, CURLOPT_MAIL_RCPT, ["<$to>"]);
curl_setopt($ch, CURLOPT_READDATA, fopen('data://text/plain,' . urlencode($fullMessage), 'r'));
curl_setopt($ch, CURLOPT_UPLOAD, true);
curl_setopt($ch, CURLOPT_INFILESIZE, strlen($fullMessage));
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($ch);
$error  = curl_error($ch);
curl_close($ch);

if ($error) {
    http_response_code(500);
    echo json_encode(['error' => $error]);
} else {
    echo json_encode(['success' => true]);
}
