<?php include("header.php"); ?>

<body>

    <!-- Header
    ================================================== -->
    <header id="header">

    <?php $highlight = "news"; ?>
    <?php include("navbar.php"); ?>

    <!-- Content
    ================================================== -->
    <div id="content" class="container">
    <div class="hero-unit">
        <h1 class="ac">News and Events</h1><br />
        <p class="ac">
            Check back here for the latest updates on NuMat!
        </p>
    </div>

    <hr />

    <div class="row" id="blog">

        <!-- posts -->
        <div class="offset2 span8">

            <!-- NuMat Closes $2.0 Million Seed Round -->
            <article class="post">
                <a href="http://online.wsj.com/article/PR-CO-20130612-906161.html" class="entry-media">
                    <img src="img/the-wall-street-journal-logo.jpg" alt="" width="600" />
                </a>
                <div class="entry-body">
                    <a href="http://online.wsj.com/article/PR-CO-20130612-906161.html">
                        <h2 class="entry-title">NuMat Closes $2.0 Million Seed Round</h2>
                    </a>
                    <p>NuMat Technologies, a materials technology company that captured top honors at cleantech business competitions across the country, today announced it closed a $2 million seed round, bringing the nanotech startup's total funding to $2.4 million.</p>
                </div>
                <div class="entry-meta">
                    <span class="entry-type"></span>
                    <span class="entry-date">June 2013</span>
                </div>
                <div class="clr"></div>

            </article>

            <!-- NuMat is featured on "Planet Forward" -->
            <article class="post video-post">
                <div class="entry-media">
                    <div id="ooyala-sucks-at-loading"></div>
                </div>
                <div class="entry-body">
                    <a href="http://planetforward.org/tv-segments/a-compressed-natural-alternative-at-the-gas-pump/">
                        <h2 class="entry-title">NuMat is featured on "Planet Forward"</h2>
                    </a>
                    <p>"On America's roads, we're seeing a lot more big vehicles, like buses and trucks, that run on Clean Natural Gas (CNG). So why don't we see any passenger cars run on the same fuel?".</p>
                </div>
                <div class="entry-meta">
                    <span class="entry-type"></span>
                    <span class="entry-date">Oct. 2012</span>
                </div>
                <div class="clr"></div>

            </article>

            <!-- NuMat Technologies is features in Fortune Magazine! -->
            <article class="post">

                <a href="http://alliance.rice.edu/uploadedFiles/News/RBPC/2012/Fortune_HailToTheChampions2.pdf" class="entry-media">
                    <img src="img/fortune-logo.png" alt="" width="600"/>
                </a>
                <div class="entry-body">
                    <a href="http://alliance.rice.edu/uploadedFiles/News/RBPC/2012/Fortune_HailToTheChampions2.pdf">
                        <h2 class="entry-title">NuMat Technologies is featured in Fortune Magazine!</h2>
                    </a>
                    <p>"It may not have the ubiquity of Facebook or the scale of Wal-Mart, but NuMat Technologies someday could change the world just a little bit." </p>
                </div>
                <div class="entry-meta">
                    <span class="entry-type"></span>
                    <span class="entry-date">May 2012</span>
                </div>
                <div class="clr"></div>

            </article>

            <!-- High density energy storage using self-assembled materials -->
            <article class="post video-post">
                <div class="entry-media">
                    <iframe width="600" height="340" src="http://www.youtube.com/embed/QaKSekjAnqY" frameborder="0"></iframe>
                </div>
                <div class="entry-body">
                    <h2 class="entry-title">High density energy storage using MOFs</h2>
                    <p>This video was created for the 2011 NSF International Science and Engineering Visualization Challenge. Featured in <a href="http://www.wired.com/wiredscience/2012/02/science-visualizations-2011/?pid=3021&pageid=94650&viewall=true">Wired</a>, <a href="http://www.sciencemag.org/site/special/vis2011/">Science</a>, and <a href="http://cosmiclog.nbcnews.com/_news/2012/02/02/10301206-scientific-visions-that-take-the-prize">NBC News</a>, it explains the process of material discovery at NuMat Technologies.</p>
                </div>
                <div class="entry-meta">
                    <span class="entry-type"></span>
                    <span class="entry-date">September 2011</span>
                </div>
                <div class="clr"></div>

            </article>


            <hr />
        </div><!-- end .span8 -->
    </div><!-- end #blog -->
    </div>

    <?php include("footer.php"); ?>

<!-- load ooyala videos after the rest of the page -->
<script src="http://player.ooyala.com/player.js?embedCode=M1bzMwNjqXRJEdj7B9mAOIIXvH-c0B9M&playerBrandingId=8a7a9c84ac2f4e8398ebe50c07eb2f9d&width=640&deepLinkEmbedCode=M1bzMwNjqXRJEdj7B9mAOIIXvH-c0B9M&height=360&thruParam_bloomberg-ui[popOutButtonVisible]=FALSE&targetReplaceId=ooyala-sucks-at-loading"></script>

</body>
</html>
