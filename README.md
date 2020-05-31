<p align="center">
  <a href="https://mybluebackpack.netlify.app/">
    <img alt="MyBlueBackpack" src="https://mybluebackpack.netlify.app/static/logo-9c77f5d8d77711e398f07833a6c3fc05.png" width="125" />
  </a>
</p>
<h1 align="center">
  MyBlueBackpack
</h1>

## 💫 Status

![Gatsby Netlify Publish](https://github.com/knownothinnobody/lauren-blog/workflows/Gatsby%20Netlify%20Publish/badge.svg)
![Security Tests](https://github.com/knownothinnobody/lauren-blog/workflows/Security%20Tests/badge.svg)
![Lint and Test Code](https://github.com/knownothinnobody/lauren-blog/workflows/Lint%20and%20Test%20Code/badge.svg)

## 🚀 Quick start

If you want to use this application as a template here is what you would have to do:

1.  **Clone the repo**

    ```shell
    # create a new Gatsby application using the default starter
    git clone git@github.com:knownothinnobody/lauren-blog.git blog
    ```

2.  **Start developing.**

    Navigate into your new applications’s directory and start it up.

    ```shell
    cd blog/
    gatsby develop

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._
    ```

3.  **Open the source code and set the required variables**

    Open the `blog` directory in your code editor of choice and edit `package.json`. Update the required fields here to identify yourself as the owner of this repo.

    You will also need to set a `NETLIFY_AUTH_TOKEN` in the secrets for the repo.

    You will also need to the `site-name` in `blog/.github/workflows/publish.yml` to your site name from Netlify if you want to use the Netlify Deploy.

    If you want to take advantage of the `.dependabot/config.yml` you will also need to link to [Dependabot](https://dependabot.com/)

    Finally, for the analytics you will need to update `gatsby-config.js` under the `gatsby-plugin-ackee-tracker` to point to your `server` and `domainId`.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── .dependabot
    ├── .github/workflows
    ├── __mocks__
    ├── __tests__
    ├── cypress
    ├── reports
    ├── src
    ├── static
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── jest.config.js
    ├── stryker.conf.json
    ├── netlify.toml
    ├── cypress.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

13. **`/.dependabot`**: A folder containing the Dependabot Config file. This is used to set the rules around automated dependency updates.

14. **`/.github/workflows`**: A folder containing the CI/CD pipeline created using GitHub Actions.

15. **`/__mocks__`**: A folder containing the Jest Unit Test Mocks.

16. **`/__tests__`**: A folder containing the Jest Unit Tests.

17. **`/cypress`**: A folder containing the Cypress Integration Tests.

18. **`/reports`**: A folder containing the Stryker Mutation Test Reports.

19. **`/static`**: A folder containing the static assest for the site. Including the static CMS portion powered by NetlifyCMS.

20. **`.eslintrc.json`**: ESLint Config linked to Prettier for Linting JS and JSX.

21. **`cypress.json`**: Cypress Config for Integration Tests.

22. **`jest.config.js`**: Jest Config for Unit Tests.

23. **`netlify.toml`**: Netlify Config for managing IaC.

24. **`stryker.conf.json`**: Stryker Config for Mutation Testing.

## 🎓 Methodology

### Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

### CMS

We are using a largely GitOps based flow for our CMS. The CMS itself is powered by [NetlifyCMS](https://www.netlifycms.org/) and then integrated with [GitGateway](https://docs.netlify.com/visitor-access/git-gateway/) through Netlify for our Identity and Access Management. The advangtage of this application is that blog content is stored alongside the rest of the code as markdown filed and queried at build time. By using the experimental gatsby incremental build with a publish action on the master branch, where the CMS pushes to, we can achieve real time updates that are editor and developer friendly!

### Unit Testing

Unit testing is pretty standard now a days and we use Jest as our unit test runner. The tests take advantage of the snapshot feature in order to determine if the output from React Components is altered unexpectedly.

### Linting and Formatting

Linting and formatting are handled by [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) respectively. They are used as part of a pre-commit hook using [Husky](https://github.com/typicode/husky) to enforce coding standards without a lot of developer toil.

### Software Composition Analysis

Right now Software Composition Analysis is handled by `npm audit` on a weekly basis but the plan is to move the SCA component to it's own GitHub action. The idea behind the weekly run is that updates are largely handled by Dependabot and so I only want to be alerted if a security issue can't be resolved there. This also keeps other builds idempotent and prevents developers becomming frustrated by builds that fail due to issues outside their control.

### Integration Testing

[Cypress](https://www.cypress.io/) handles our Integration and End-to-End testing. This also incorporates our accessbility testing. This may also be a good place to integrate with LightHouse CI and aensure that we meet certain performance metrics.

### Mutation Testing

[Stryker](https://stryker-mutator.io/) handles the mutation testing and ensures that our unit tests are adequate and not just returning false positives or negatives.

### Analytics

The analytics for this site are privacy focused and are monitored using a forked version of [Ackee](https://github.com/knownothinnobody/Ackee). The analytics server is hosted on a free tier of Heroku and uses a free MongoDB integration.

### SEO

The application uses `gatsby-plugin-sitemap` to generate a sitemap alongside using `react-helmet` to ensure each page has the appropriate metadata for Search Engine Optimization. This portion hasn't been optimized fully yet however.

### RSS

This application uses the `gatsby-plugin-feeds` to generate an RSS feed on build. The eventual goal is to integrate this feed as an automated means of distributing the blog.

### CI/CD

This applicaiton relies on the GitHub Actions to create Workflows. Currently we have a publish, test, and security workflow respectively in order to optimize for low latency publishing.

### Production Environment

This site is builtoff of the Gatsby Default Starter in order to generate the front end which is hosted by Netlify.

The CMS portion is managed with NetlifyCMS and Netlify once again provides the IAM for the CMS.

Form handling is also provided by Netlify Forms but the goal is to migrate this to Netlify Functions.
