<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="<?= base_url("dist/css/index.css") . getFileVersion() ?>">
    <script src="<?= base_url("dist/js/app.js") . getFileVersion() ?>" defer></script>
</head>

<body>
    <div id="app" data-page='<?= json_encode($page ?? []) ?>'></div>
</body>

</html>