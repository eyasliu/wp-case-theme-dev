<?php 

class EY_DICT{
	public function register_routes(){
		register_rest_route( 'wp/v2', '/dict', array(
	      array(
	          'methods'  => WP_REST_Server::READABLE,
	          'callback' => array( $this, 'getDict' ),
	      )
	  ) );
	}

	public static function getDict(){
		return apply_filters( 'rest_menus_format_menus', [
				'case_count' => wp_count_posts('case'),
				'case_tag' => get_terms('casetag')
			] );
	}
}

function ey_get_dict(){
	$class = new EY_DICT();
	add_filter( 'rest_api_init', array( $class, 'register_routes' ) );
	// add_filter( 'json_endpoints', array( $class, 'register_routes' ) );
}

add_action( 'init', 'ey_get_dict' );


function case_setup(){
	register_nav_menus( array(
		'main' => __( 'Primary Menu', 'twentysixteen' ),
		'footer'  => __( 'Social Links Menu', 'twentysixteen' ),
	) );
}

add_action( 'after_setup_theme', 'case_setup' );