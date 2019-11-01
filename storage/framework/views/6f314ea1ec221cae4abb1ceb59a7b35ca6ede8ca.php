<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="<?php echo e(asset('css/app.css')); ?>">
        <title>Laravel</title>
    </head>
  <body>
    <div id="app">
        <router-view></router-view>
    </div>
  </body>
  <script src="<?php echo e(asset('js/app.js')); ?>"></script>
</html>
<?php /**PATH C:\laragon\www\todo-vue\resources\views/todo.blade.php ENDPATH**/ ?>