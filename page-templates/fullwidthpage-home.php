<?php
/**
 * Template Name: Full Width Home Page
 *
 * Template for displaying a page without sidebar even if a sidebar widget is published.
 *
 * @package understrap
 */

get_header();
$container = get_theme_mod( 'understrap_container_type' );
?>

<div class="wrapper" id="full-width-page-wrapper">

	<div class="container">
          <div class="row" id="theContent">
          </div>
        </div>

</div><!-- Wrapper end -->

<?php get_footer(); ?>
