<p align="center">
  <img src="/img/numat_logo@2x.png?raw=true" alt="NuMat Logo"/>
</p>

This repository contains the source code and history of the NuMat Technologies
website, all the way back to the [very first version](
https://github.com/numat/numat.github.io/tree/871daa61b076c51812edfe94b13df473aa1ee24e).

##### Note: This repository is current to August 1, 2018. Since then, NuMat's site has been maintained by a third party.

Usage
=====

NuMat uses [jekyll](http://jekyllrb.com/) to build fast static sites from source
files. To run a local copy of the site, copy the source files and use jekyll.

```
git clone https://github.com/numat/numat.github.io
cd numat.github.io
jekyll serve
```

Navigate to http://localhost:4000, and you're done.

Details
=======

NuMat uses features through jekyll to simplify the code base, and [GitHub Pages](
https://pages.github.com/) for free high-speed hosting.

Wherever possible, the website separates content from design. For most pages,
the content can be found in the `_data` folder in human-readable
[YAML](http://en.wikipedia.org/wiki/YAML) (`*.yml`) files. These files
correspond to
[liquid](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) files
(`*.liquid`) in the root directory, which contain the HTML structure. In cases
where liquid / YAML is overkill, pages are written in simple
[markdown](http://daringfireball.net/projects/markdown/syntax) (`*.md`). The
files in `_layouts` are used to avoid duplicate code between files by providing
base layouts.

Stylesheets are in `_sass`, and are broken up into multiple
[sass](http://sass-lang.com/) (`*.scss`) files. The `main.scss` file combines
everything in `_sass` to be served in production.

We use open-source javascript libraries to improve user interaction. The most
current list of libraries can be found in the [source code](
https://github.com/numat/numat.github.io/blob/master/_layouts/default.html#L58).
