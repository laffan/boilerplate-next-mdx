# Next Boilerplate (MDX)

Bare-bones next.js boilerplate with blog (MDX), R3Fiber and scss set up.

Exports to gh-pages branch via this guide : https://www.bravolt.com/post/deploying-next-js-to-github-pages

Uses phaser based on this example https://stackblitz.com/edit/react-phaser?file=hooks%2FuseGame.ts plus this fix for Next https://github.com/proyecto26/ion-phaser/issues/41#issuecomment-1063409067


## Installation

`yarn install` then `yarn dev` 


## Deployment
Uses [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) to serve MDX files via `getStaticProps` 

Should work out of the box, so long as you have a `gh-pages` branch set up.
