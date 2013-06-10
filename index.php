<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html class="not-ie" lang="en"> <!--<![endif]-->

<?php include("header.php"); ?>

<body>

	<!-- Header
	================================================== -->
	<header id="header">

	<?php $highlight = "home"; ?>
	<?php include("navbar.php"); ?>

	<!-- Content
	================================================== -->
	<div id="content" class="container">
	</div>
	<div class="homepage">
	<div class="container">
	<div class="hero-unit">

		<!-- headin gtext -->
		<p class="ac">
			Changing the way the world stores, separates, and transports gases. 
		</p>

		<!-- Carousel -->	
		<div id="macbook_carousel">
			<div id="carousel" class="carousel slide" rel="carousel">
				<!-- Carousel items -->				
				<div class="carousel-inner">
					<div class="active item">
						<img src="assets/numatLogo_carousel_1.jpg" alt="" />
					</div>
					<div class="item">
						<img src="assets/numatLogo_carousel_2.jpg" alt="" />
					</div>
					<div class="item">
						<img src="assets/numatLogo_carousel_3.jpg" alt="" />
					</div>
				</div>
				<!-- Carousel navigation -->
				<a class="carousel-control left" href="#carousel" data-slide="prev">&lsaquo;</a>
				<a class="carousel-control right" href="#carousel" data-slide="next">&rsaquo;</a>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="span8">
			<h1 class="lead">
				<b>NuMat Technologies is a materials technology company.</b> We are committed to enabling fundamental performance shifts in the gas storage and separations industries through our tailor-designed nanoporous materials.
			</h1>
		</div>
		<!--
		<div class="span4">
			<h3 class="ac">FREE<small> for Solo plan</small></h3>
			<p class="ac">
				<a class="btn btn-large btn-primary" href="plans.html" title=""><b>Sign Up for Free</b></a>
			</p>
		</div>
		-->
	</div>

	<hr />

	<div class="row">
		<div class="span4">
			<h2><span class="grey">Breakthrough</span> Technology</h2>
			 <p>Storing gases effectively requires porous materials with high surface areas. The highest surface area materials in the world are metal-organic frameworks (MOFs), which is NuMat's area of expertise. NuMat Technologies can rapidly design the <em>right</em> MOF for the <em>right</em> application... </p>
			<p><a class="" href="companyOverview.php#hookTechnology">Read more &raquo;</a></p>
	 	</div>
		<div class="span4">
			<h2><span class="grey">Many Market</span> Opportunities</h2>
			 <p>NuMat’s proprietary approach to material design and synthesis enables us to rapidly address needs in market segments that critically depend on material performance to unlock innovation...</p>
			<p><a class="" href="companyOverview.php#hookMarkets">Read more &raquo;</a></p>
		</div>
		<div class="span4">
			<h2><span class="grey">The Team:</span> <br> Who We Are</h2>
			<p>We are a team of scientists and engineers, bringing world-class knowledge and expertise in computational materials design, synthetic chemistry, and systems-level modeling.</p>
			<p><a class="" href="whoWeAre.php">Read more &raquo;</a></p>
		</div>
	</div>

	</div>	</div>

	<?php include("footer.php"); ?>

</body>
</html>