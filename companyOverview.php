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

    <?php $highlight = "companyOverview"; ?>
    <?php include("navbar.php"); ?>

    <!-- Content
    ================================================== -->
    <div id="content" class="container">
        <div class="hero-unit">
            <div class="ac">
                <h1>Our Company</h1>
                <p>NuMat Technologies is a materials technology company committed to enabling fundamental performance shifts in the gas storage and separations industries. We will do so by tailor-designing nanoporous materials, specifically Metal Organic Frameworks, for high-value applications which critically depend on material performance. <br><br>

                Founded in 2012, NuMat's unique capabilities are based on key technological advancements in the computational design and synthesis of nanoporous materials developed at the Snurr Research Group and the Hupp Group - world class computational chemistry and experimental chemistry groups based at Northwestern University.
                </p>
            </div>
        </div>
        <div class="hero-unit">
            <div class="row">
                <div class="span4 ac">
                    <h1><a style="text-decoration: none; color: inherit;" href="#hookTechnology">Technology</a></h1>
                </div>
                <div class="span4 ac">
                    <h1><a style="text-decoration: none; color: inherit;" href="#hookMarkets">Markets</a></h1>
                </div>
                <div class="span4 ac">
                    <h1><a style="text-decoration: none; color: inherit;" href="#hookPartnerships">Partnerships</a></h1>
                </div>
            </div>
        </div>
    </div>

    <!-- Content
    ================================================== -->
    <div id="content" class="container">

        <hr />

        <div id="hookTechnology" class="row">

            <div class="span8">
                <h3 style="line-height: 150%";><span class="grey">Breakthrough Technology: </span>Computational design, patented chemical processes.</h3>
                <br />
                <p>
                    Storing gases effectively requires porous materials with high surface areas. The highest surface area materials in the world are metal-organic frameworks (MOFs), which is NuMat's area of expertise. To date, finding MOFs with the right pores has required significant amounts of trial-and-error, both in the labs where they are synthesized and at the whiteboards where they are designed.
                </p>
                <p>
                    NuMat Technologies has developed novel computational algorithms that tremendously reduce the trial-and-error involved, allowing us to rapidly design the <em>right</em> MOF for the <em>right</em> application. These algorithms generate millions of hypothetical MOFs on a computer and simulate their gas storage abilities. From these simulations we are able to identify MOFs with the perfect pores in a matter of days, at which point we leverage our proprietary approach to synthesize materials of interest.
                </p>
            </div>
            <div class="span4">
                <img rel="tooltip" title="Simulation of natural gas (orange) in a MOF (grey)." alt="" class="thumbnail fr hidden-phone" src="img/methane-simulation.jpg" width="240" />
            </div>
        </div>

        <hr />

        <div id="hookMarkets" class="row">

            <div class="span4">
                <img rel="tooltip" title="Natural gas is already used in homes and businesses around the world." alt="" class="thumbnail fl hidden-phone" src="img/flame.jpg" width="240" />
            </div>
            <div class="span8">
                <h3><span class="grey">Markets: </span>Many opportunities.</h3>
                <p>
                    NuMat’s proprietary approach to material design and synthesis enables us to rapidly address needs in market segments that critically depend on material performance to unlock innovation.
                </p>
                <p>
                    <b>Natural Gas Markets</b><br>
                    The natural gas boom has led to a fundamental reordering of the global energy economy. As the supply of affordable natural gas increases, so too does the need for natural gas storage, transportation and purification solutions. NuMat is actively developing high performing natural gas storage materials that will enable a paradigm shift in the design, performance and economics of gas storage solutions critical to the transportation sector.
                </p>
                <p>
                    <b>Industrial and Electronic Gas Storage Markets</b><br>
                    High purity gases are mission critical inputs in industrial manufacturing and semiconductor industries. NuMat is actively developing materials to significantly increase the storage capacity and stability of high value gases in key application segments, enabling a compelling alternative to high compression and lower-performing adsorbent solutions.
                </p>
                <p>
                    <b>Separation, Filtration and Gas Purification Markets</b> <br>
                    Whether through use of membranes, pressure swing adsorption or cryogenic distillation - the gas separation, filtration and purification markets are constantly striving for improved energy efficiency, increasing process yields, and improved process economics. NuMat is developing materials which significantly improve the performance and economics of process and filtration technologies in select applications of interest.

                </p>
            </div>
        </div>

        <hr />

        <div id="hookPartnerships" class="row">
            <div class="span8">
                <h3 style="line-height: 150%;"><span class="grey">Strategic Partnerships: </span>What are your toughest gas storage or separation challenges?</h3>
                <br /><p>
                    How can our materials deliver meaningful performance and economic value to your organization or customers?
                </p>
                <p>
                    NuMat is actively seeking to cultivate strategic relationships with market-leading entities who are in need of a high performing material solution for a key product or process in our markets of interest.
                </p>
            </div>
            <div class="span4" style="margin-bottom: 50px;">
                <img rel="tooltip" title="Our materials can replace expensive machinery in many applications." alt="" class="thumbnail fr phone-hidden" src="img/short-distillation.jpg" width="240" />
            </div>
        </div>

    </div>

    <?php include("footer.php"); ?>

</body>
</html>
