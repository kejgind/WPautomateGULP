<?php

/**
 * ===============================
 * INDEX.PHP - website default page template
 * ===============================
 *
 * @package
 * @since 1.0.0
 * @version 1.0.0
 */

get_header();
?>

<main class="main">
    <div class="container">
        <?php
        while (have_posts()) :
            the_post();

            the_content();
        endwhile;
        ?>
    </div>
</main>

<?php
get_footer();
