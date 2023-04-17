# TODO list
## About

- [ ] Change pic
## Project

- [ ] Update articles: remove TODOs

## Teaching

## Interactive demos

## Deployment 

Problem: I was experiencing issues while deploying my Jekyll site due to JavaScript minification errors and incompatibility issues. I had files that were already minified (marcelle application) and caused problems.

Unsuccessful attempts:

I tried to use jekyll-terser and sprockets-uglifier_with_source_maps gems, which were not found in the repository or installed locally.
I created a custom Terser plugin and hook, which led to a dependency error with jekyll-assets/uglifier.
Successful solution:

I excluded problematic files from the Jekyll minifier by updating my _config.yml.
I added the following section to my _config.yml:
markdown
Copy code
assets:
  sources:
    - assets/css
    - assets/js
    - assets/img
  compress:
    js: terser
I identified that the error was related to the Jekyll version or one of its dependencies.
I downgraded Jekyll to version 4.3.0 in my Gemfile, which resolved the issue and allowed successful deployment of my site.
In conclusion, excluding the problematic files from the Jekyll minifier, adding the assets configuration to my _config.yml, and downgrading Jekyll to version 4.3.0 fixed the problem I was experiencing with deploying my site. Overall, I'm not sure if the minifier that caused the issue was Uglifier or something else, but I don't care as long as it works. It is important for me to keep an eye on future Jekyll updates and associated release notes to identify when it is safe to upgrade and take advantage of new features or improvements.