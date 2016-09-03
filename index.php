<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<div id="root"></div>
	<script>
		var serverConfig = {
			server: '<?php echo home_url(); ?>/wp-json/wp/v2',
			home: '<?php echo home_url(); ?>'
		}
	</script>
	<script src="http://localhost:3000/assets/app.js"></script>
</body>
</html>