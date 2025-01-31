# Next Boilerplate (MDX)

Bare-bones next.js boilerplate with blog (MDX), R3Fiber and scss set up.

Exports to gh-pages branch via this guide : https://www.bravolt.com/post/deploying-next-js-to-github-pages

## Installation

`yarn install` then `yarn dev` 


## Deployment
Uses [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) to serve MDX files via `getStaticProps` 

- Should work out of the box.

- If you're exporting to a static site (like gh-pages) make sure to uncomment the two named lines in next.config.

- Also, though the gh-pgaes workflow is in there (official from Next) remember you'll need to add "main" (or wherever you're deploying this from) in Deployment branches and tags.