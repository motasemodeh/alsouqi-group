<!doctype html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
      	<meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed" rel="stylesheet">

        <?php wp_head(); ?>
	</head>
	
    <body>
		<header>
			<img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.svg" alt="">
			<nav>
				<?php wp_nav_menu( array( 'theme_location' => 'primary-menu' ) ); ?>
			</nav>
		</header>
