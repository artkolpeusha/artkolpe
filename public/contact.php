<?php

declare(strict_types=1);

$recipientEmail = 'artkolpeusha@gmail.com';
$fromEmail = 'noreply@artkolpe.com';
$redirectPath = '/contact/';

function redirect_with_status(string $path, string $status): void
{
    $separator = str_contains($path, '?') ? '&' : '?';
    header('Location: ' . $path . $separator . 'status=' . rawurlencode($status));
    exit;
}

function clean_input(?string $value, int $maxLength): string
{
    $value = trim((string) $value);
    $value = str_replace(["\r", "\n"], ' ', $value);

    if (mb_strlen($value) > $maxLength) {
        $value = mb_substr($value, 0, $maxLength);
    }

    return $value;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method Not Allowed');
}

$redirect = clean_input($_POST['redirect'] ?? $redirectPath, 200);
if ($redirect === '' || !str_starts_with($redirect, '/')) {
    $redirect = $redirectPath;
}

if (clean_input($_POST['website'] ?? '', 50) !== '') {
    redirect_with_status($redirect, 'success');
}

$name = clean_input($_POST['name'] ?? '', 120);
$email = filter_var(trim((string) ($_POST['email'] ?? '')), FILTER_VALIDATE_EMAIL);
$subject = clean_input($_POST['subject'] ?? '', 180);
$message = trim((string) ($_POST['message'] ?? ''));

if ($name === '' || $email === false || $subject === '' || $message === '') {
    redirect_with_status($redirect, 'error');
}

if (mb_strlen($message) > 5000) {
    $message = mb_substr($message, 0, 5000);
}

$safeMessage = str_replace(["\r\n", "\r"], "\n", $message);
$mailSubject = 'Website inquiry: ' . $subject;
$mailBody = "Name: {$name}\n";
$mailBody .= "Email: {$email}\n";
$mailBody .= "Subject: {$subject}\n\n";
$mailBody .= $safeMessage;

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Usha Kolpe Website <' . $fromEmail . '>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail($recipientEmail, $mailSubject, $mailBody, implode("\r\n", $headers));

redirect_with_status($redirect, $sent ? 'success' : 'error');
