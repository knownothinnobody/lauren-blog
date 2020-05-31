document.querySelector("mutation-test-report-app").report = {
  files: {
    "/Users/outis/Development/lauren-blog/src/components/card.jsx": {
      language: "javascript",
      mutants: [
        {
          id: "1",
          location: {
            end: { column: 48, line: 17 },
            start: { column: 21, line: 17 },
          },
          mutatorName: "ArithmeticOperator",
          replacement: "'card ' - additionalClasses",
          status: "Survived",
        },
        {
          id: "0",
          location: {
            end: { column: 2, line: 45 },
            start: { column: 4, line: 15 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "2",
          location: {
            end: { column: 28, line: 17 },
            start: { column: 21, line: 17 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "3",
          location: {
            end: { column: 2, line: 55 },
            start: { column: 18, line: 47 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
      ],
      source:
        'import { Link } from \'gatsby\'\nimport React from \'react\'\nimport PropTypes from \'prop-types\'\n\nimport { createMarkup } from \'../utils/markup\'\n\nfunction Card ({\n  title,\n  content,\n  path,\n  posterImage,\n  date,\n  readingTime,\n  additionalClasses\n}) {\n  return (\n    <div className={\'card \' + additionalClasses}>\n      <div className="card-image">\n        <figure className="image card-image-wrapper">\n          <img src={posterImage} alt="" aria-hidden="true" />\n        </figure>\n      </div>\n      <div className="card-content">\n        <div className="media">\n          <div className="media-content">\n            <h2 className="title is-4 card-media-title">{title}</h2>\n            <h3 className="title is-6 has-text-grey-darker">\n              {date} &#x00B7; {readingTime} min read\n            </h3>\n          </div>\n        </div>\n\n        <div\n          className="content"\n          dangerouslySetInnerHTML={createMarkup(content)}\n        ></div>\n      </div>\n      <footer className="card-footer">\n        <Link className="card-footer-item" to={path}>\n          View\n        </Link>\n      </footer>\n    </div>\n  )\n}\n\nCard.propTypes = {\n  title: PropTypes.string.isRequired,\n  content: PropTypes.node.isRequired,\n  path: PropTypes.string.isRequired,\n  additionalClasses: PropTypes.string,\n  posterImage: PropTypes.string.isRequired,\n  date: PropTypes.string.isRequired,\n  readingTime: PropTypes.number.isRequired\n}\n\nexport default Card\n',
    },
    "/Users/outis/Development/lauren-blog/src/components/footer.jsx": {
      language: "javascript",
      mutants: [
        {
          id: "4",
          location: {
            end: { column: 2, line: 80 },
            start: { column: 20, line: 5 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "5",
          location: {
            end: { column: 6, line: 27 },
            start: { column: 12, line: 7 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "6",
          location: {
            end: { column: 4, line: 41 },
            start: { column: 23, line: 33 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "7",
          location: {
            end: { column: 29, line: 34 },
            start: { column: 19, line: 34 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "8",
          location: {
            end: { column: 29, line: 35 },
            start: { column: 19, line: 35 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "9",
          location: {
            end: { column: 27, line: 36 },
            start: { column: 18, line: 36 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "11",
          location: {
            end: { column: 25, line: 38 },
            start: { column: 17, line: 38 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "10",
          location: {
            end: { column: 31, line: 37 },
            start: { column: 20, line: 37 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "14",
          location: {
            end: { column: 4, line: 56 },
            start: { column: 70, line: 43 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "15",
          location: {
            end: { column: 32, line: 44 },
            start: { column: 9, line: 44 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "true",
          status: "Survived",
        },
        {
          id: "17",
          location: {
            end: { column: 6, line: 53 },
            start: { column: 34, line: 44 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "16",
          location: {
            end: { column: 32, line: 44 },
            start: { column: 9, line: 44 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "false",
          status: "Survived",
        },
        {
          id: "19",
          location: {
            end: { column: 42, line: 48 },
            start: { column: 37, line: 48 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "18",
          location: {
            end: { column: 68, line: 48 },
            start: { column: 36, line: 48 },
          },
          mutatorName: "ArrayDeclaration",
          replacement: "[]",
          status: "Survived",
        },
        {
          id: "20",
          location: {
            end: { column: 6, line: 55 },
            start: { column: 12, line: 53 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "21",
          location: {
            end: { column: 27, line: 67 },
            start: { column: 24, line: 67 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "23",
          location: {
            end: { column: 36, line: 68 },
            start: { column: 18, line: 68 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "false",
          status: "Survived",
        },
        {
          id: "22",
          location: {
            end: { column: 36, line: 68 },
            start: { column: 18, line: 68 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "true",
          status: "Survived",
        },
        {
          id: "24",
          location: {
            end: { column: 36, line: 68 },
            start: { column: 18, line: 68 },
          },
          mutatorName: "EqualityOperator",
          replacement: "currentYear >= 2020",
          status: "Survived",
        },
        {
          id: "25",
          location: {
            end: { column: 36, line: 68 },
            start: { column: 18, line: 68 },
          },
          mutatorName: "EqualityOperator",
          replacement: "currentYear <= 2020",
          status: "Survived",
        },
        {
          id: "28",
          location: {
            end: { column: 81, line: 68 },
            start: { column: 78, line: 68 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "12",
          location: {
            end: { column: 25, line: 39 },
            start: { column: 17, line: 39 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "13",
          location: {
            end: { column: 32, line: 40 },
            start: { column: 16, line: 40 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "27",
          location: {
            end: { column: 48, line: 68 },
            start: { column: 39, line: 68 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "26",
          location: {
            end: { column: 62, line: 68 },
            start: { column: 39, line: 68 },
          },
          mutatorName: "ArithmeticOperator",
          replacement: "'2020 - ' - currentYear",
          status: "Survived",
        },
      ],
      source:
        "import React from 'react'\nimport { useStaticQuery, graphql } from 'gatsby'\nimport { FontAwesomeIcon } from '@fortawesome/react-fontawesome'\n\nfunction Footer () {\n  const data = useStaticQuery(\n    graphql`\n      query {\n        allMarkdownRemark(\n          filter: { fileAbsolutePath: { regex: \"/content/personal/\" } }\n        ) {\n          edges {\n            node {\n              frontmatter {\n                linkedinLink\n                facebookLink\n                twitterLink\n                instagramLink\n                githubLink\n                mediumLink\n                stackLink\n              }\n            }\n          }\n        }\n      }\n    `\n  )\n\n  const { edges } = data.allMarkdownRemark\n  const { frontmatter } = edges[0].node\n\n  const socialIcons = {\n    linkedinLink: 'linkedin',\n    facebookLink: 'facebook',\n    twitterLink: 'twitter',\n    instagramLink: 'instagram',\n    githubLink: 'github',\n    mediumLink: 'medium',\n    stackLink: 'stack-overflow'\n  }\n\n  const socialListIcons = Object.keys(socialIcons).map(socialLink => {\n    if (frontmatter[socialLink]) {\n      return (\n        <span key={socialLink} className=\"icon\">\n          <a className=\"has-text-primary\" href={frontmatter[socialLink]}>\n            <FontAwesomeIcon icon={['fab', socialIcons[socialLink]]} />\n            <span className=\"is-sr-only\">{socialIcons[socialLink]}</span>\n          </a>\n        </span>\n      )\n    } else {\n      return null\n    }\n  })\n\n  const currentYear = new Date().getFullYear()\n\n  return (\n    <footer className=\"footer\">\n      <div className=\"container\">\n        <div className=\"content columns\">\n          <div className=\"column has-text-left copyright-column\">\n            <ul className=\"footer-list is-marginless\">\n              <li className=\"footer-list-item\">\n                &copy;{' '}\n                {currentYear > 2020 ? '2020 - ' + currentYear : currentYear}{' '}\n                Lauren Ebidia\n              </li>\n            </ul>\n          </div>\n          <div className=\"column has-text-right social-links-column\">\n            {socialListIcons}\n          </div>\n        </div>\n      </div>\n    </footer>\n  )\n}\n\nexport default Footer\n",
    },
    "/Users/outis/Development/lauren-blog/src/components/header.jsx": {
      language: "javascript",
      mutants: [
        {
          id: "29",
          location: {
            end: { column: 4, line: 13 },
            start: { column: 23, line: 7 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Killed",
        },
        {
          id: "30",
          location: {
            end: { column: 6, line: 12 },
            start: { column: 18, line: 10 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Killed",
        },
        {
          id: "31",
          location: {
            end: { column: 30, line: 11 },
            start: { column: 15, line: 11 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Killed",
        },
        {
          id: "32",
          location: {
            end: { column: 4, line: 24 },
            start: { column: 19, line: 15 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "34",
          location: {
            end: { column: 44, line: 18 },
            start: { column: 7, line: 18 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "false",
          status: "Survived",
        },
        {
          id: "33",
          location: {
            end: { column: 44, line: 18 },
            start: { column: 7, line: 18 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "true",
          status: "Survived",
        },
        {
          id: "41",
          location: {
            end: { column: 69, line: 41 },
            start: { column: 26, line: 41 },
          },
          mutatorName: "ArithmeticOperator",
          replacement: "'navbar-burger burger ' - this.state.isOpen",
          status: "Killed",
        },
        {
          id: "42",
          location: {
            end: { column: 49, line: 41 },
            start: { column: 26, line: 41 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Killed",
        },
        {
          id: "43",
          location: {
            end: { column: 61, line: 51 },
            start: { column: 27, line: 51 },
          },
          mutatorName: "ArithmeticOperator",
          replacement: "'navbar-menu ' - this.state.isOpen",
          status: "Killed",
        },
        {
          id: "44",
          location: {
            end: { column: 41, line: 51 },
            start: { column: 27, line: 51 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Killed",
        },
        {
          id: "35",
          location: {
            end: { column: 44, line: 18 },
            start: { column: 7, line: 18 },
          },
          mutatorName: "EqualityOperator",
          replacement: "this.state.isOpen !== 'is-not-active'",
          status: "Timeout",
        },
        {
          id: "36",
          location: {
            end: { column: 44, line: 18 },
            start: { column: 29, line: 18 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Timeout",
        },
        {
          id: "37",
          location: {
            end: { column: 58, line: 18 },
            start: { column: 47, line: 18 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Timeout",
        },
        {
          id: "39",
          location: {
            end: { column: 6, line: 21 },
            start: { column: 19, line: 19 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "40",
          location: {
            end: { column: 4, line: 67 },
            start: { column: 13, line: 26 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Killed",
        },
        {
          id: "38",
          location: {
            end: { column: 76, line: 18 },
            start: { column: 61, line: 18 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Timeout",
        },
      ],
      source:
        'import { Link } from \'gatsby\'\nimport React from \'react\'\n\nimport image from \'../images/logo.png\'\n\nclass Header extends React.Component {\n  constructor (props) {\n    super(props)\n\n    this.state = {\n      isOpen: \'is-not-active\'\n    }\n  }\n\n  toggleNavbar () {\n    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu\n    const active =\n      this.state.isOpen === \'is-not-active\' ? \'is-active\' : \'is-not-active\'\n    this.setState({\n      isOpen: active\n    })\n    console.log(this.state)\n    this.forceUpdate()\n  }\n\n  render () {\n    return (\n      <nav\n        className="navbar is-fixed-top"\n        role="navigation"\n        aria-label="main navigation"\n      >\n        <div className="container">\n          <div className="navbar-brand">\n            <Link className="navbar-item logo-image-holder" to="/">\n              <img src={image} aria-hidden="true" alt="" />\n              <span className="is-sr-only">Home</span>\n            </Link>\n            <a\n              role="button"\n              className={\'navbar-burger burger \' + this.state.isOpen}\n              aria-label="menu"\n              aria-expanded="false"\n              onClick={this.toggleNavbar}\n            >\n              <span aria-hidden="true"></span>\n              <span aria-hidden="true"></span>\n              <span aria-hidden="true"></span>\n            </a>\n          </div>\n          <div className={\'navbar-menu \' + this.state.isOpen}>\n            <div className="navbar-start">\n              <Link className="navbar-item" to="/">\n                Home\n              </Link>\n              <Link className="navbar-item" to="/about">\n                About\n              </Link>\n              <Link className="navbar-item" to="contact">\n                Contact\n              </Link>\n            </div>\n          </div>\n        </div>\n      </nav>\n    )\n  }\n}\n\nexport default Header\n',
    },
    "/Users/outis/Development/lauren-blog/src/components/layout.jsx": {
      language: "javascript",
      mutants: [
        {
          id: "45",
          location: {
            end: { column: 2, line: 21 },
            start: { column: 34, line: 13 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "46",
          location: {
            end: { column: 2, line: 25 },
            start: { column: 20, line: 23 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
      ],
      source:
        "import React from 'react'\nimport PropTypes from 'prop-types'\n\nimport { library } from '@fortawesome/fontawesome-svg-core'\nimport { fab } from '@fortawesome/free-brands-svg-icons'\n\nimport Header from './header'\nimport Footer from './footer'\nimport '../css/index.scss'\n\nlibrary.add(fab)\n\nconst Layout = ({ children }) => {\n  return (\n    <>\n      <Header />\n      <main className=\"page-container\">{children}</main>\n      <Footer />\n    </>\n  )\n}\n\nLayout.propTypes = {\n  children: PropTypes.node.isRequired\n}\n\nexport default Layout\n",
    },
    "/Users/outis/Development/lauren-blog/src/components/seo.jsx": {
      language: "javascript",
      mutants: [
        {
          id: "47",
          location: {
            end: { column: 2, line: 66 },
            start: { column: 51, line: 6 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "48",
          location: {
            end: { column: 6, line: 18 },
            start: { column: 12, line: 8 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "49",
          location: {
            end: { column: 71, line: 21 },
            start: { column: 27, line: 21 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "true",
          status: "Survived",
        },
        {
          id: "51",
          location: {
            end: { column: 71, line: 21 },
            start: { column: 27, line: 21 },
          },
          mutatorName: "LogicalOperator",
          replacement: "description && site.siteMetadata.description",
          status: "Survived",
        },
        {
          id: "50",
          location: {
            end: { column: 71, line: 21 },
            start: { column: 27, line: 21 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "false",
          status: "Survived",
        },
        {
          id: "53",
          location: {
            end: { column: 55, line: 29 },
            start: { column: 22, line: 29 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "52",
          location: {
            end: { column: 8, line: 27 },
            start: { column: 23, line: 25 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "54",
          location: {
            end: { column: 8, line: 63 },
            start: { column: 13, line: 30 },
          },
          mutatorName: "ArrayDeclaration",
          replacement: "[]",
          status: "Survived",
        },
        {
          id: "55",
          location: {
            end: { column: 10, line: 34 },
            start: { column: 9, line: 31 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "56",
          location: {
            end: { column: 30, line: 32 },
            start: { column: 17, line: 32 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "57",
          location: {
            end: { column: 10, line: 38 },
            start: { column: 9, line: 35 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "58",
          location: {
            end: { column: 31, line: 36 },
            start: { column: 21, line: 36 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "60",
          location: {
            end: { column: 37, line: 40 },
            start: { column: 21, line: 40 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "59",
          location: {
            end: { column: 10, line: 42 },
            start: { column: 9, line: 39 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "61",
          location: {
            end: { column: 10, line: 46 },
            start: { column: 9, line: 43 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "62",
          location: {
            end: { column: 30, line: 44 },
            start: { column: 21, line: 44 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "63",
          location: {
            end: { column: 29, line: 45 },
            start: { column: 20, line: 45 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "65",
          location: {
            end: { column: 31, line: 48 },
            start: { column: 17, line: 48 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "64",
          location: {
            end: { column: 10, line: 50 },
            start: { column: 9, line: 47 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "66",
          location: {
            end: { column: 29, line: 49 },
            start: { column: 20, line: 49 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "68",
          location: {
            end: { column: 34, line: 52 },
            start: { column: 17, line: 52 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "67",
          location: {
            end: { column: 10, line: 54 },
            start: { column: 9, line: 51 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "69",
          location: {
            end: { column: 10, line: 58 },
            start: { column: 9, line: 55 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "70",
          location: {
            end: { column: 32, line: 56 },
            start: { column: 17, line: 56 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "73",
          location: {
            end: { column: 2, line: 72 },
            start: { column: 20, line: 68 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "75",
          location: {
            end: { column: 11, line: 70 },
            start: { column: 9, line: 70 },
          },
          mutatorName: "ArrayDeclaration",
          replacement: '["Stryker was here"]',
          status: "Survived",
        },
        {
          id: "72",
          location: {
            end: { column: 38, line: 60 },
            start: { column: 17, line: 60 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "71",
          location: {
            end: { column: 10, line: 62 },
            start: { column: 9, line: 59 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "77",
          location: {
            end: { column: 2, line: 79 },
            start: { column: 17, line: 74 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "74",
          location: {
            end: { column: 13, line: 69 },
            start: { column: 9, line: 69 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "76",
          location: {
            end: { column: 18, line: 71 },
            start: { column: 16, line: 71 },
          },
          mutatorName: "StringLiteral",
          replacement: '"Stryker was here!"',
          status: "Survived",
        },
      ],
      source:
        "import React from 'react'\nimport PropTypes from 'prop-types'\nimport { Helmet } from 'react-helmet'\nimport { useStaticQuery, graphql } from 'gatsby'\n\nfunction SEO ({ description, lang, meta, title }) {\n  const { site } = useStaticQuery(\n    graphql`\n      query {\n        site {\n          siteMetadata {\n            title\n            description\n            author\n          }\n        }\n      }\n    `\n  )\n\n  const metaDescription = description || site.siteMetadata.description\n\n  return (\n    <Helmet\n      htmlAttributes={{\n        lang\n      }}\n      title={title}\n      titleTemplate={`%s | ${site.siteMetadata.title}`}\n      meta={[\n        {\n          name: 'description',\n          content: metaDescription\n        },\n        {\n          property: 'og:title',\n          content: title\n        },\n        {\n          property: 'og:description',\n          content: metaDescription\n        },\n        {\n          property: 'og:type',\n          content: 'website'\n        },\n        {\n          name: 'twitter:card',\n          content: 'summary'\n        },\n        {\n          name: 'twitter:creator',\n          content: site.siteMetadata.author\n        },\n        {\n          name: 'twitter:title',\n          content: title\n        },\n        {\n          name: 'twitter:description',\n          content: metaDescription\n        }\n      ].concat(meta)}\n    />\n  )\n}\n\nSEO.defaultProps = {\n  lang: 'en',\n  meta: [],\n  description: ''\n}\n\nSEO.propTypes = {\n  description: PropTypes.string,\n  lang: PropTypes.string,\n  meta: PropTypes.arrayOf(PropTypes.object),\n  title: PropTypes.string.isRequired\n}\n\nexport default SEO\n",
    },
    "/Users/outis/Development/lauren-blog/src/pages/404.jsx": {
      language: "javascript",
      mutants: [
        {
          id: "78",
          location: {
            end: { column: 2, line: 12 },
            start: { column: 22, line: 6 },
          },
          mutatorName: "ArrowFunction",
          replacement: "() => undefined",
          status: "Survived",
        },
      ],
      source:
        "import React from 'react'\n\nimport Layout from '../components/layout'\nimport SEO from '../components/seo'\n\nconst NotFoundPage = () => (\n  <Layout>\n    <SEO title=\"404: Not found\" />\n    <h1>NOT FOUND</h1>\n    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>\n  </Layout>\n)\n\nexport default NotFoundPage\n",
    },
    "/Users/outis/Development/lauren-blog/src/pages/contact.jsx": {
      language: "javascript",
      mutants: [
        {
          id: "81",
          location: {
            end: { column: 2, line: 193 },
            start: { column: 25, line: 8 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "84",
          location: {
            end: { column: 59, line: 29 },
            start: { column: 47, line: 29 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "85",
          location: {
            end: { column: 61, line: 30 },
            start: { column: 48, line: 30 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "83",
          location: {
            end: { column: 4, line: 74 },
            start: { column: 38, line: 28 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "86",
          location: {
            end: { column: 65, line: 31 },
            start: { column: 50, line: 31 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "87",
          location: {
            end: { column: 76, line: 34 },
            start: { column: 7, line: 34 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "82",
          location: {
            end: { column: 6, line: 25 },
            start: { column: 12, line: 10 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "92",
          location: {
            end: { column: 26, line: 38 },
            start: { column: 11, line: 38 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "true",
          status: "Survived",
        },
        {
          id: "94",
          location: {
            end: { column: 8, line: 41 },
            start: { column: 28, line: 38 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "91",
          location: {
            end: { column: 6, line: 45 },
            start: { column: 42, line: 37 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "93",
          location: {
            end: { column: 26, line: 38 },
            start: { column: 11, line: 38 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "false",
          status: "Survived",
        },
        {
          id: "89",
          location: {
            end: { column: 40, line: 37 },
            start: { column: 9, line: 37 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "false",
          status: "Survived",
        },
        {
          id: "90",
          location: {
            end: { column: 39, line: 37 },
            start: { column: 32, line: 37 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "95",
          location: {
            end: { column: 45, line: 39 },
            start: { column: 33, line: 39 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "88",
          location: {
            end: { column: 40, line: 37 },
            start: { column: 9, line: 37 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "true",
          status: "Survived",
        },
        {
          id: "97",
          location: {
            end: { column: 8, line: 44 },
            start: { column: 14, line: 41 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "99",
          location: {
            end: { column: 48, line: 43 },
            start: { column: 36, line: 43 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "96",
          location: {
            end: { column: 47, line: 40 },
            start: { column: 36, line: 40 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "98",
          location: {
            end: { column: 44, line: 42 },
            start: { column: 33, line: 42 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "102",
          location: {
            end: { column: 46, line: 47 },
            start: { column: 34, line: 47 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "104",
          location: {
            end: { column: 41, line: 50 },
            start: { column: 9, line: 50 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "false",
          status: "Survived",
        },
        {
          id: "105",
          location: {
            end: { column: 40, line: 50 },
            start: { column: 33, line: 50 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "101",
          location: {
            end: { column: 45, line: 46 },
            start: { column: 34, line: 46 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "100",
          location: {
            end: { column: 6, line: 48 },
            start: { column: 12, line: 45 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "107",
          location: {
            end: { column: 44, line: 51 },
            start: { column: 11, line: 51 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "true",
          status: "Survived",
        },
        {
          id: "106",
          location: {
            end: { column: 6, line: 58 },
            start: { column: 43, line: 50 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "108",
          location: {
            end: { column: 44, line: 51 },
            start: { column: 11, line: 51 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "false",
          status: "Survived",
        },
        {
          id: "103",
          location: {
            end: { column: 41, line: 50 },
            start: { column: 9, line: 50 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "true",
          status: "Survived",
        },
        {
          id: "113",
          location: {
            end: { column: 45, line: 55 },
            start: { column: 34, line: 55 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "110",
          location: {
            end: { column: 46, line: 52 },
            start: { column: 34, line: 52 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "109",
          location: {
            end: { column: 8, line: 54 },
            start: { column: 46, line: 51 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "111",
          location: {
            end: { column: 48, line: 53 },
            start: { column: 37, line: 53 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "114",
          location: {
            end: { column: 49, line: 56 },
            start: { column: 37, line: 56 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "112",
          location: {
            end: { column: 8, line: 57 },
            start: { column: 14, line: 54 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "116",
          location: {
            end: { column: 46, line: 59 },
            start: { column: 35, line: 59 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "117",
          location: {
            end: { column: 47, line: 60 },
            start: { column: 35, line: 60 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "119",
          location: {
            end: { column: 43, line: 62 },
            start: { column: 9, line: 62 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "false",
          status: "Survived",
        },
        {
          id: "121",
          location: {
            end: { column: 6, line: 70 },
            start: { column: 45, line: 62 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "115",
          location: {
            end: { column: 6, line: 61 },
            start: { column: 12, line: 58 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "120",
          location: {
            end: { column: 42, line: 62 },
            start: { column: 35, line: 62 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "118",
          location: {
            end: { column: 43, line: 62 },
            start: { column: 9, line: 62 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "true",
          status: "Survived",
        },
        {
          id: "122",
          location: {
            end: { column: 29, line: 63 },
            start: { column: 11, line: 63 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "true",
          status: "Survived",
        },
        {
          id: "123",
          location: {
            end: { column: 29, line: 63 },
            start: { column: 11, line: 63 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "false",
          status: "Survived",
        },
        {
          id: "128",
          location: {
            end: { column: 47, line: 67 },
            start: { column: 36, line: 67 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "127",
          location: {
            end: { column: 8, line: 69 },
            start: { column: 14, line: 66 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "124",
          location: {
            end: { column: 8, line: 66 },
            start: { column: 31, line: 63 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "125",
          location: {
            end: { column: 48, line: 64 },
            start: { column: 36, line: 64 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "131",
          location: {
            end: { column: 48, line: 71 },
            start: { column: 37, line: 71 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "126",
          location: {
            end: { column: 50, line: 65 },
            start: { column: 39, line: 65 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "132",
          location: {
            end: { column: 49, line: 72 },
            start: { column: 37, line: 72 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "129",
          location: {
            end: { column: 51, line: 68 },
            start: { column: 39, line: 68 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "133",
          location: {
            end: { column: 4, line: 85 },
            start: { column: 32, line: 76 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "135",
          location: {
            end: { column: 22, line: 79 },
            start: { column: 20, line: 79 },
          },
          mutatorName: "ArrayDeclaration",
          replacement: '["Stryker was here"]',
          status: "Survived",
        },
        {
          id: "136",
          location: {
            end: { column: 69, line: 79 },
            start: { column: 62, line: 79 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "138",
          location: {
            end: { column: 38, line: 83 },
            start: { column: 31, line: 83 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "139",
          location: {
            end: { column: 4, line: 89 },
            start: { column: 33, line: 87 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "140",
          location: {
            end: { column: 34, line: 88 },
            start: { column: 27, line: 88 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "134",
          location: {
            end: { column: 56, line: 78 },
            start: { column: 42, line: 78 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "137",
          location: {
            end: { column: 6, line: 84 },
            start: { column: 31, line: 82 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "141",
          location: {
            end: { column: 42, line: 88 },
            start: { column: 36, line: 88 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "130",
          location: {
            end: { column: 6, line: 73 },
            start: { column: 12, line: 70 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
      ],
      source:
        'import React from \'react\'\nimport { useStaticQuery, graphql } from \'gatsby\'\n\nimport Layout from \'../components/layout\'\nimport SEO from \'../components/seo\'\nimport { createMarkup } from \'../utils/markup\'\n\nfunction ContactPage () {\n  const data = useStaticQuery(\n    graphql`\n      query {\n        allMarkdownRemark(\n          filter: { fileAbsolutePath: { regex: "/content/personal/" } }\n        ) {\n          edges {\n            node {\n              frontmatter {\n                contactTitle\n                contactBody\n              }\n            }\n          }\n        }\n      }\n    `\n  )\n\n  const handleFormValidation = () => {\n    const nameInput = document.getElementById(\'name-input\')\n    const emailInput = document.getElementById(\'email-input\')\n    const messageInput = document.getElementById(\'message-input\')\n\n    const emailRegex = new RegExp(\n      \'^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$\'\n    )\n\n    if (nameInput.getAttribute(\'dirty\')) {\n      if (nameInput.value) {\n        nameInput.classList.add(\'is-success\')\n        nameInput.classList.remove(\'is-danger\')\n      } else {\n        nameInput.classList.add(\'is-danger\')\n        nameInput.classList.remove(\'is-success\')\n      }\n    } else {\n      nameInput.classList.remove(\'is-danger\')\n      nameInput.classList.remove(\'is-success\')\n    }\n\n    if (emailInput.getAttribute(\'dirty\')) {\n      if (emailRegex.test(emailInput.value)) {\n        emailInput.classList.add(\'is-success\')\n        emailInput.classList.remove(\'is-danger\')\n      } else {\n        emailInput.classList.add(\'is-danger\')\n        emailInput.classList.remove(\'is-success\')\n      }\n    } else {\n      emailInput.classList.remove(\'is-danger\')\n      emailInput.classList.remove(\'is-success\')\n    }\n    if (messageInput.getAttribute(\'dirty\')) {\n      if (messageInput.value) {\n        messageInput.classList.add(\'is-success\')\n        messageInput.classList.remove(\'is-danger\')\n      } else {\n        messageInput.classList.add(\'is-danger\')\n        messageInput.classList.remove(\'is-success\')\n      }\n    } else {\n      messageInput.classList.remove(\'is-danger\')\n      messageInput.classList.remove(\'is-success\')\n    }\n  }\n\n  const handleFormClear = e => {\n    e.preventDefault()\n    const form = document.getElementById(\'contact-form\')\n    const inputs = [].slice.call(form.getElementsByClassName(\'input\'))\n\n    form.reset()\n    inputs.forEach(element => {\n      element.removeAttribute(\'dirty\')\n    })\n  }\n\n  const handleInputDirty = e => {\n    e.target.setAttribute(\'dirty\', \'true\')\n  }\n\n  const { edges } = data.allMarkdownRemark\n  const { frontmatter } = edges[0].node\n\n  return (\n    <Layout>\n      <SEO title="Contact" />\n      <div className="container">\n        <h1 className="main-title is-size-1">{frontmatter.contactTitle}</h1>\n        <div className="columns">\n          <div className="column">\n            <div\n              dangerouslySetInnerHTML={createMarkup(frontmatter.contactBody)}\n            ></div>\n          </div>\n          <div className="column">\n            <form\n              id="contact-form"\n              name="contact"\n              method="POST"\n              data-netlify="true"\n              netlify-honeypot="bot-field"\n              onChange={handleFormValidation}\n            >\n              <input type="hidden" name="form-name" value="contact" />\n              <p className="is-hidden">\n                <label>\n                  <input name="bot-field" />\n                </label>\n              </p>\n              <div className="field">\n                <label htmlFor="name-input" className="label">\n                  Name\n                </label>\n                <div className="control">\n                  <input\n                    id="name-input"\n                    className="input"\n                    type="text"\n                    name="name"\n                    placeholder="Name"\n                    onChange={handleInputDirty}\n                    required\n                  />\n                </div>\n              </div>\n\n              <div className="field">\n                <label htmlFor="email-input" className="label">\n                  Email\n                </label>\n                <div className="control">\n                  <input\n                    className="input"\n                    type="email"\n                    id="email-input"\n                    name="email"\n                    placeholder="Email"\n                    onChange={handleInputDirty}\n                    required\n                  />\n                </div>\n              </div>\n\n              <div className="field">\n                <label htmlFor="message-input" className="label">\n                  Message\n                </label>\n                <div className="control">\n                  <textarea\n                    className="textarea input"\n                    id="message-input"\n                    placeholder="Message"\n                    name="message"\n                    onChange={handleInputDirty}\n                    required\n                  ></textarea>\n                </div>\n              </div>\n\n              <div className="field is-grouped">\n                <div className="control">\n                  <input\n                    type="submit"\n                    className="button is-primary"\n                    value="Submit"\n                  />\n                </div>\n                <div className="control">\n                  <button\n                    className="button is-primary is-light"\n                    onClick={handleFormClear}\n                  >\n                    Cancel\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </Layout>\n  )\n}\n\nexport default ContactPage\n',
    },
    "/Users/outis/Development/lauren-blog/src/pages/about.jsx": {
      language: "javascript",
      mutants: [
        {
          id: "79",
          location: {
            end: { column: 2, line: 42 },
            start: { column: 23, line: 8 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "80",
          location: {
            end: { column: 6, line: 25 },
            start: { column: 12, line: 10 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
      ],
      source:
        "import React from 'react'\nimport { useStaticQuery, graphql } from 'gatsby'\n\nimport Layout from '../components/layout'\nimport SEO from '../components/seo'\nimport { createMarkup } from '../utils/markup'\n\nfunction AboutPage () {\n  const data = useStaticQuery(\n    graphql`\n      query {\n        allMarkdownRemark(\n          filter: { fileAbsolutePath: { regex: \"/content/personal/\" } }\n        ) {\n          edges {\n            node {\n              frontmatter {\n                aboutTitle\n                aboutBody\n              }\n            }\n          }\n        }\n      }\n    `\n  )\n\n  const { edges } = data.allMarkdownRemark\n  const { frontmatter } = edges[0].node\n\n  return (\n    <Layout>\n      <SEO title=\"About\" />\n      <div className=\"container\">\n        <h1 className=\"main-title is-size-1\">{frontmatter.aboutTitle}</h1>\n        <div\n          dangerouslySetInnerHTML={createMarkup(frontmatter.aboutBody)}\n        ></div>\n      </div>\n    </Layout>\n  )\n}\n\nexport default AboutPage\n",
    },
    "/Users/outis/Development/lauren-blog/src/pages/index.jsx": {
      language: "javascript",
      mutants: [
        {
          id: "142",
          location: {
            end: { column: 2, line: 128 },
            start: { column: 23, line: 9 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "143",
          location: {
            end: { column: 6, line: 34 },
            start: { column: 12, line: 11 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
        {
          id: "144",
          location: {
            end: { column: 16, line: 41 },
            start: { column: 14, line: 41 },
          },
          mutatorName: "ArrayDeclaration",
          replacement: '["Stryker was here"]',
          status: "Survived",
        },
        {
          id: "145",
          location: {
            end: { column: 37, line: 45 },
            start: { column: 21, line: 45 },
          },
          mutatorName: "ArithmeticOperator",
          replacement: "edges.length * 3",
          status: "Survived",
        },
        {
          id: "149",
          location: {
            end: { column: 42, line: 62 },
            start: { column: 37, line: 62 },
          },
          mutatorName: "EqualityOperator",
          replacement: "i >= j",
          status: "Survived",
        },
        {
          id: "150",
          location: {
            end: { column: 4, line: 80 },
            start: { column: 60, line: 62 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "146",
          location: {
            end: { column: 6, line: 59 },
            start: { column: 57, line: 45 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "147",
          location: {
            end: { column: 42, line: 62 },
            start: { column: 37, line: 62 },
          },
          mutatorName: "ConditionalExpression",
          replacement: "false",
          status: "Survived",
        },
        {
          id: "153",
          location: {
            end: { column: 4, line: 91 },
            start: { column: 26, line: 84 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "154",
          location: {
            end: { column: 8, line: 85 },
            start: { column: 5, line: 85 },
          },
          mutatorName: "UpdateOperator",
          replacement: "k--",
          status: "Survived",
        },
        {
          id: "155",
          location: {
            end: { column: 27, line: 87 },
            start: { column: 17, line: 87 },
          },
          mutatorName: "ArithmeticOperator",
          replacement: "'row-' - k",
          status: "Survived",
        },
        {
          id: "148",
          location: {
            end: { column: 42, line: 62 },
            start: { column: 37, line: 62 },
          },
          mutatorName: "EqualityOperator",
          replacement: "i <= j",
          status: "Survived",
        },
        {
          id: "152",
          location: {
            end: { column: 8, line: 78 },
            start: { column: 55, line: 64 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "151",
          location: {
            end: { column: 35, line: 64 },
            start: { column: 22, line: 64 },
          },
          mutatorName: "ArithmeticOperator",
          replacement: "i - chunkSize",
          status: "Survived",
        },
        {
          id: "156",
          location: {
            end: { column: 23, line: 87 },
            start: { column: 17, line: 87 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
      ],
      source:
        'import React from \'react\'\nimport { Link, useStaticQuery, graphql } from \'gatsby\'\n\nimport Layout from \'../components/layout\'\nimport SEO from \'../components/seo\'\nimport Card from \'../components/card\'\nimport { createMarkup } from \'../utils/markup\'\n\nfunction IndexPage () {\n  const data = useStaticQuery(\n    graphql`\n      query {\n        allMarkdownRemark(\n          filter: { fileAbsolutePath: { regex: "/content/blog/" } }\n          sort: { order: ASC, fields: frontmatter___date }\n        ) {\n          edges {\n            node {\n              frontmatter {\n                title\n                posterImage\n                date(formatString: "MMMM DD, YYYY")\n              }\n              fields {\n                slug\n              }\n              fileAbsolutePath\n              timeToRead\n              excerpt(pruneLength: 500)\n            }\n          }\n        }\n      }\n    `\n  )\n\n  const edges = data.allMarkdownRemark.edges\n\n  const featuredPost = edges.shift().node\n\n  let rows = []\n  const chunkSize = 3\n\n  rows.push(\n    edges.splice(0, edges.length % 3).map(({ node }) => {\n      return (\n        <div key={node.fields.slug} className="column">\n          <Card\n            additionalClasses="blog-post-card"\n            title={node.frontmatter.title}\n            path={node.fields.slug}\n            content={node.excerpt}\n            posterImage={node.frontmatter.posterImage}\n            date={node.frontmatter.date}\n            readingTime={node.timeToRead}\n          />\n        </div>\n      )\n    })\n  )\n\n  for (let i = 0, j = edges.length; i < j; i += chunkSize) {\n    rows.push(\n      edges.slice(i, i + chunkSize).map(({ node }) => {\n        return (\n          <div key={node.fields.slug} className="column">\n            <Card\n              additionalClasses="blog-post-card"\n              title={node.frontmatter.title}\n              path={node.fields.slug}\n              content={node.excerpt}\n              posterImage={node.frontmatter.posterImage}\n              date={node.frontmatter.date}\n              readingTime={node.timeToRead}\n            />\n          </div>\n        )\n      })\n    )\n  }\n\n  let k = 0\n\n  rows = rows.map(row => {\n    k++\n    return (\n      <div key={\'row-\' + k} className="columns">\n        {row}\n      </div>\n    )\n  })\n\n  return (\n    <Layout>\n      <SEO title="Home" />\n      <section className="hero is-large is-primary is-bold">\n        <div className="hero-body">\n          <div className="container">\n            <div className="columns">\n              <div className="column">\n                <h1 className="subtitle">Featured Article</h1>\n                <h2 className="title">{featuredPost.frontmatter.title}</h2>\n                <p\n                  dangerouslySetInnerHTML={createMarkup(featuredPost.excerpt)}\n                ></p>\n                <Link\n                  className="button feature-view-button"\n                  to={featuredPost.fields.slug}\n                >\n                  View\n                </Link>\n              </div>\n              <div className="column">\n                <figure className="image featured-post-image">\n                  <img src={featuredPost.frontmatter.posterImage} alt="" />\n                </figure>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n      <div className="container">\n        <h1 className="main-title is-size-1">Recent Posts</h1>\n        {rows}\n      </div>\n    </Layout>\n  )\n}\n\nexport default IndexPage\n',
    },
    "/Users/outis/Development/lauren-blog/src/templates/post.jsx": {
      language: "javascript",
      mutants: [
        {
          id: "159",
          location: {
            end: { column: 2, line: 56 },
            start: { column: 22, line: 45 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "160",
          location: {
            end: { column: 4, line: 55 },
            start: { column: 25, line: 46 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "161",
          location: {
            end: { column: 6, line: 54 },
            start: { column: 37, line: 47 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "157",
          location: {
            end: { column: 2, line: 27 },
            start: { column: 45, line: 8 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "162",
          location: {
            end: { column: 8, line: 51 },
            start: { column: 36, line: 48 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "158",
          location: {
            end: { column: 2, line: 44 },
            start: { column: 33, line: 29 },
          },
          mutatorName: "StringLiteral",
          replacement: '""',
          status: "Survived",
        },
      ],
      source:
        "import React from 'react'\nimport PropTypes from 'prop-types'\nimport { graphql } from 'gatsby'\n\nimport Layout from '../components/layout'\nimport { createMarkup } from '../utils/markup'\n\nexport default function Template ({ data }) {\n  const { markdownRemark } = data // data.markdownRemark holds your post data\n  const { frontmatter, html } = markdownRemark\n  return (\n    <Layout>\n      <div className=\"container blog-post\">\n        <h1 className=\"main-title is-size-1 has-text-dark\">\n          {frontmatter.title}\n        </h1>\n        <h2 className=\"sub-title is-6 has-text-grey\">\n          {frontmatter.date} &#x00B7; {markdownRemark.timeToRead} min read\n        </h2>\n        <div\n          className=\"blog-post-content\"\n          dangerouslySetInnerHTML={createMarkup(html)}\n        />\n      </div>\n    </Layout>\n  )\n}\n\nexport const pageQuery = graphql`\n  query($slug: String!) {\n    markdownRemark(fields: { slug: { eq: $slug } }) {\n      frontmatter {\n        date(formatString: \"MMMM DD, YYYY\")\n        title\n      }\n      fields {\n        slug\n      }\n      timeToRead\n      excerpt(pruneLength: 500)\n      html\n    }\n  }\n`\nTemplate.propTypes = {\n  data: PropTypes.shape({\n    markdownRemark: PropTypes.shape({\n      frontmatter: PropTypes.shape({\n        title: PropTypes.string.isRequired,\n        date: PropTypes.string.isRequired\n      }).isRequired,\n      html: PropTypes.node.isRequired,\n      timeToRead: PropTypes.number.isRequired\n    }).isRequired\n  }).isRequired\n}\n",
    },
    "/Users/outis/Development/lauren-blog/src/utils/markup.js": {
      language: "javascript",
      mutants: [
        {
          id: "163",
          location: {
            end: { column: 2, line: 5 },
            start: { column: 37, line: 1 },
          },
          mutatorName: "BlockStatement",
          replacement: "{}",
          status: "Survived",
        },
        {
          id: "164",
          location: {
            end: { column: 4, line: 4 },
            start: { column: 10, line: 2 },
          },
          mutatorName: "ObjectLiteral",
          replacement: "{}",
          status: "Survived",
        },
      ],
      source:
        "export function createMarkup (html) {\n  return {\n    __html: html\n  }\n}\n",
    },
  },
  schemaVersion: "1.0",
  thresholds: { high: 80, low: 60, break: null },
}
