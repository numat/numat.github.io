<!-- Navigation
================================================== -->
<div class="navbar">
	<div class="navbar-inner">
		<div class="container">
			<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</a>
			<a class="brand" href="index.php">
				<b>NuMat</b>Technologies
			</a>
			<div class="nav-collapse">
				<ul class="nav">
					<li <?php if ($GLOBALS['highlight'] == "home") echo "class='active'"; ?> >
						<a href="index.php">Home</a>
					</li>
					<li <?php if ($GLOBALS['highlight'] == "companyOverview") echo "class='active'"; ?> 
						><a href="companyOverview.php">Company Overview</a>
					</li>
					<li <?php if ($GLOBALS['highlight'] == "whoWeAre") echo "class='active'"; ?> >
						<a href="whoWeAre.php">Who We Are</a>
					</li>
					<!-- <li><a href="plans.html">Pricing</a></li> -->
					<!-- 
						<li><a href="explore.html">Explore</a></li>
						<li><a href="faq.html">FAQ</a></li>
						<li><a href="alt.html">Alt</a></li>
					-->
					<li <?php if ($GLOBALS['highlight'] == "news") echo "class='active'"; ?> >
						<a href="news.php">News</a>
					</li>
					<li <?php if ($GLOBALS['highlight'] == "contact") echo "class='active'"; ?> >
						<a href="contact.php">Contact</a>
					</li>
				</ul>
				
			</div><!--/.nav-collapse -->
		</div><!-- end .container -->
	</div><!-- end .navbar-inner -->
</div><!-- end .navbar -->