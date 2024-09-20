import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/99x-way-of-work/blog',
    component: ComponentCreator('/99x-way-of-work/blog', 'f5d'),
    exact: true
  },
  {
    path: '/99x-way-of-work/blog/archive',
    component: ComponentCreator('/99x-way-of-work/blog/archive', 'bbe'),
    exact: true
  },
  {
    path: '/99x-way-of-work/blog/authors',
    component: ComponentCreator('/99x-way-of-work/blog/authors', '9a8'),
    exact: true
  },
  {
    path: '/99x-way-of-work/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/99x-way-of-work/blog/authors/all-sebastien-lorber-articles', 'a00'),
    exact: true
  },
  {
    path: '/99x-way-of-work/blog/authors/yangshun',
    component: ComponentCreator('/99x-way-of-work/blog/authors/yangshun', 'b1c'),
    exact: true
  },
  {
    path: '/99x-way-of-work/blog/first-blog-post',
    component: ComponentCreator('/99x-way-of-work/blog/first-blog-post', '836'),
    exact: true
  },
  {
    path: '/99x-way-of-work/blog/long-blog-post',
    component: ComponentCreator('/99x-way-of-work/blog/long-blog-post', 'e30'),
    exact: true
  },
  {
    path: '/99x-way-of-work/blog/mdx-blog-post',
    component: ComponentCreator('/99x-way-of-work/blog/mdx-blog-post', '4f9'),
    exact: true
  },
  {
    path: '/99x-way-of-work/blog/tags',
    component: ComponentCreator('/99x-way-of-work/blog/tags', 'b23'),
    exact: true
  },
  {
    path: '/99x-way-of-work/blog/tags/docusaurus',
    component: ComponentCreator('/99x-way-of-work/blog/tags/docusaurus', 'd2e'),
    exact: true
  },
  {
    path: '/99x-way-of-work/blog/tags/facebook',
    component: ComponentCreator('/99x-way-of-work/blog/tags/facebook', 'f5f'),
    exact: true
  },
  {
    path: '/99x-way-of-work/blog/tags/hello',
    component: ComponentCreator('/99x-way-of-work/blog/tags/hello', '485'),
    exact: true
  },
  {
    path: '/99x-way-of-work/blog/tags/hola',
    component: ComponentCreator('/99x-way-of-work/blog/tags/hola', 'be3'),
    exact: true
  },
  {
    path: '/99x-way-of-work/blog/welcome',
    component: ComponentCreator('/99x-way-of-work/blog/welcome', '51b'),
    exact: true
  },
  {
    path: '/99x-way-of-work/markdown-page',
    component: ComponentCreator('/99x-way-of-work/markdown-page', '1e6'),
    exact: true
  },
  {
    path: '/99x-way-of-work/docs',
    component: ComponentCreator('/99x-way-of-work/docs', '56d'),
    routes: [
      {
        path: '/99x-way-of-work/docs',
        component: ComponentCreator('/99x-way-of-work/docs', 'da0'),
        routes: [
          {
            path: '/99x-way-of-work/docs/tags',
            component: ComponentCreator('/99x-way-of-work/docs/tags', '7ab'),
            exact: true
          },
          {
            path: '/99x-way-of-work/docs/tags/customer-success',
            component: ComponentCreator('/99x-way-of-work/docs/tags/customer-success', '966'),
            exact: true
          },
          {
            path: '/99x-way-of-work/docs/tags/log-indexing-and-analysis',
            component: ComponentCreator('/99x-way-of-work/docs/tags/log-indexing-and-analysis', 'ca5'),
            exact: true
          },
          {
            path: '/99x-way-of-work/docs/tags/optimize',
            component: ComponentCreator('/99x-way-of-work/docs/tags/optimize', '4be'),
            exact: true
          },
          {
            path: '/99x-way-of-work/docs/tags/winning-product',
            component: ComponentCreator('/99x-way-of-work/docs/tags/winning-product', '227'),
            exact: true
          },
          {
            path: '/99x-way-of-work/docs',
            component: ComponentCreator('/99x-way-of-work/docs', '165'),
            routes: [
              {
                path: '/99x-way-of-work/docs/',
                component: ComponentCreator('/99x-way-of-work/docs/', 'db9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/',
                component: ComponentCreator('/99x-way-of-work/docs/', '2f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/category/commonwealth-of-australia',
                component: ComponentCreator('/99x-way-of-work/docs/category/commonwealth-of-australia', '626'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/category/european-union',
                component: ComponentCreator('/99x-way-of-work/docs/category/european-union', '2c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/category/facilitated-teams',
                component: ComponentCreator('/99x-way-of-work/docs/category/facilitated-teams', '1b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/category/product-experience',
                component: ComponentCreator('/99x-way-of-work/docs/category/product-experience', 'acd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/category/united-kingdom',
                component: ComponentCreator('/99x-way-of-work/docs/category/united-kingdom', 'fc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/category/united-states-of-america',
                component: ComponentCreator('/99x-way-of-work/docs/category/united-states-of-america', '993'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/compliance/privacy/australia/introduction-to-privacy-in-australia',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/compliance/privacy/australia/introduction-to-privacy-in-australia', 'cd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/compliance/privacy/europe/introduction-to-privacy-in-eu',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/compliance/privacy/europe/introduction-to-privacy-in-eu', 'ee9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/compliance/privacy/uk/introduction-to-privacy-in-uk',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/compliance/privacy/uk/introduction-to-privacy-in-uk', 'bec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/compliance/privacy/usa/introduction-to-privacy-in-usa',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/compliance/privacy/usa/introduction-to-privacy-in-usa', 'b4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/compliance/security/',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/compliance/security/', 'f6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/delivery/methodologies/',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/delivery/methodologies/', 'aa5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/delivery/onboarding/',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/delivery/onboarding/', '8fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/delivery/team-setup/',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/delivery/team-setup/', 'b04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/delivery/work-instructions/',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/delivery/work-instructions/', '598'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/99x-well-architected-framework',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/99x-well-architected-framework', '196'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/architecting-new-products',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/architecting-new-products', 'fd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/architecture-assessment/due-diligence-process',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/architecture-assessment/due-diligence-process', '8d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/architecture-assessment/health-review',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/architecture-assessment/health-review', '65a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/architecture-assessment/security-assessment',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/architecture-assessment/security-assessment', '402'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/architecture-evaluation/evaluation-overview',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/architecture-evaluation/evaluation-overview', '6c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/architecture-health/health-checklist',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/architecture-health/health-checklist', '8f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/architecture-health/health-overview',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/architecture-health/health-overview', '3a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/arthitecture-process',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/arthitecture-process', 'df3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/case-studies/design-system',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/case-studies/design-system', 'fd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/case-studies/microfrontends',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/case-studies/microfrontends', 'e9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/case-studies/microservices',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/case-studies/microservices', 'b7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/case-studies/multi-tenancy',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/case-studies/multi-tenancy', '6df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/case-studies/serverless',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/case-studies/serverless', 'd64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/focus-areas/cloud-architecture',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/focus-areas/cloud-architecture', 'a44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/focus-areas/devops',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/focus-areas/devops', '07e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/focus-areas/secops',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/focus-areas/secops', '43b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/focus-areas/web-application',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/focus-areas/web-application', '4ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/kickstarters/aws-microservices/aws-microservice-technical-overview',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/kickstarters/aws-microservices/aws-microservice-technical-overview', '3dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/kickstarters/aws-microservices/aws-microservices-overview',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/kickstarters/aws-microservices/aws-microservices-overview', 'b12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/managing-the-debt',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/managing-the-debt', 'd48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/our-process/continuous-architecture',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/our-process/continuous-architecture', '4c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/architecting/our-process/product-architecture',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/architecting/our-process/product-architecture', 'a93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/dev/code-quality-guidelines/',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/dev/code-quality-guidelines/', 'ae6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/engineering/dev/engineering-excellence-framework/',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/engineering/dev/engineering-excellence-framework/', '8e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/reviews/code-quality-analysis/',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/reviews/code-quality-analysis/', 'd5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/reviews/engineering-reviews/',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/reviews/engineering-reviews/', '262'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/reviews/iso-compliance/',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/reviews/iso-compliance/', '8fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/facilitated-teams/reviews/security-reviews/',
                component: ComponentCreator('/99x-way-of-work/docs/facilitated-teams/reviews/security-reviews/', '74b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/intro',
                component: ComponentCreator('/99x-way-of-work/docs/intro', '741'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/', 'f6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/build',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/build', 'f6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/build/architectural-runway',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/build/architectural-runway', '48b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/build/code-quality-process',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/build/code-quality-process', '592'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/build/data-privacy-protection',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/build/data-privacy-protection', '090'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/build/feature-prioritization-process',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/build/feature-prioritization-process', '8ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/build/lead-capture-cms',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/build/lead-capture-cms', '523'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/build/market-feedback-capture',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/build/market-feedback-capture', 'f45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/build/portfolio-management',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/build/portfolio-management', 'c43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/build/product-pricing-plan',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/build/product-pricing-plan', '7d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/build/release-gate-reviews',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/build/release-gate-reviews', '8a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/build/team-on-boarding-learning-plan',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/build/team-on-boarding-learning-plan', '3bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/build/technical-debt-mgt',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/build/technical-debt-mgt', '8bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/build/test-automation-setup',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/build/test-automation-setup', 'ea6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/build/user-behavior-analysis',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/build/user-behavior-analysis', '1c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/build/user-license-management',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/build/user-license-management', 'e50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/build/visitor-behavior-analysis',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/build/visitor-behavior-analysis', 'b9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/build/vulnerability-assessment',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/build/vulnerability-assessment', '30a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/explore',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/explore', '0b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/explore/context-competitor-analysis',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/explore/context-competitor-analysis', 'e94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/explore/financial-viability',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/explore/financial-viability', '29e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/explore/market-segmentation',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/explore/market-segmentation', 'a8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/explore/megatrend-analysis',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/explore/megatrend-analysis', 'c27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/explore/personas',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/explore/personas', 'fcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/explore/product-concept-pitch-deck',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/explore/product-concept-pitch-deck', 'f37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/explore/user-journey',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/explore/user-journey', '2f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/explore/value-proposition',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/explore/value-proposition', '245'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/focus',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/focus', '197'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/focus/brand-story-development',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/focus/brand-story-development', 'f32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/focus/business-model-design',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/focus/business-model-design', 'b7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/focus/feasibility-study',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/focus/feasibility-study', '236'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/focus/low-fidelity-prototype',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/focus/low-fidelity-prototype', '328'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/focus/mvp-identification',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/focus/mvp-identification', '684'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/focus/problem-solution-fit-testing',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/focus/problem-solution-fit-testing', '4fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/focus/productization-blueprint',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/focus/productization-blueprint', 'a81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/focus/technical-architecture',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/focus/technical-architecture', '5f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/formatting-guidelines',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/formatting-guidelines', 'c0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/formatting-guidelines/syntax-highligting',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/formatting-guidelines/syntax-highligting', 'd4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/harvest',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/harvest', 'c45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/harvest/contingency-and-reliability-reviews',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/harvest/contingency-and-reliability-reviews', 'e42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/harvest/continuous-improvement-strategy',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/harvest/continuous-improvement-strategy', '772'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/harvest/hot-fix-process',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/harvest/hot-fix-process', 'ea0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/harvest/inbound-marketing-plan',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/harvest/inbound-marketing-plan', 'b72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/harvest/lead-nurture-process',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/harvest/lead-nurture-process', '935'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/harvest/monitoring-and-incident-management',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/harvest/monitoring-and-incident-management', '0c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/harvest/public-relations-activity-plan',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/harvest/public-relations-activity-plan', 'b42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/harvest/referrals-and-upsales-plan',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/harvest/referrals-and-upsales-plan', 'f3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/harvest/scalability-verification',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/harvest/scalability-verification', '1c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/harvest/technology-revamp-migration-plan',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/harvest/technology-revamp-migration-plan', '0cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/harvest/win-lose-analysis',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/harvest/win-lose-analysis', 'dbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/immerse',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/immerse', 'b4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/immerse/brand-guide',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/immerse/brand-guide', 'd02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/immerse/data-architecture',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/immerse/data-architecture', 'e90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/immerse/development-estimations',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/immerse/development-estimations', 'e01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/immerse/high-fidelity-prototype',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/immerse/high-fidelity-prototype', 'b3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/immerse/operational-costs',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/immerse/operational-costs', '1b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/immerse/positioning-messages',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/immerse/positioning-messages', '94b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/immerse/product-market-fit-validation',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/immerse/product-market-fit-validation', 'e5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/immerse/product-roadmap',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/immerse/product-roadmap', 'b65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/introduction',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/introduction', 'b9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/introduction/areas-of-excellence',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/introduction/areas-of-excellence', 'b31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/introduction/background',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/introduction/background', '9d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/introduction/product-lifecycle',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/introduction/product-lifecycle', 'af7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/introduction/products-are-different',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/introduction/products-are-different', 'f86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/introduction/what-is-winning-product',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/introduction/what-is-winning-product', '71e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/introduction/winning-product-mindset',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/introduction/winning-product-mindset', 'f83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/optimize',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/optimize', '802'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/optimize/analytics-review-process',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/optimize/analytics-review-process', '85f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/optimize/compliance-and-approvals',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/optimize/compliance-and-approvals', '210'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/optimize/cost-optimization',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/optimize/cost-optimization', 'f7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/optimize/customer-contract-management',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/optimize/customer-contract-management', 'df6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/optimize/customer-support',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/optimize/customer-support', '149'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/optimize/log-indexing-and-analysis',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/optimize/log-indexing-and-analysis', '0c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/optimize/performance-tuning-plan',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/optimize/performance-tuning-plan', '7f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/optimize/promotions-process',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/optimize/promotions-process', '115'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/optimize/tech-team-branding',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/optimize/tech-team-branding', '8f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/optimize/web-optimization-plan',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/optimize/web-optimization-plan', '2eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/plan',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/plan', '554'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/plan/architecture-blueprint',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/plan/architecture-blueprint', 'a09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/plan/customer-onboarding',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/plan/customer-onboarding', '053'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/plan/define-key-metric-tests',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/plan/define-key-metric-tests', 'bcd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/plan/delivery-pipeline',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/plan/delivery-pipeline', 'c79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/plan/detailed-data-schema',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/plan/detailed-data-schema', 'adc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/plan/digital-marketing-blueprint',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/plan/digital-marketing-blueprint', 'ff4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/plan/engineering-process',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/plan/engineering-process', '1a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/plan/errors-and-exception-handling',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/plan/errors-and-exception-handling', '36a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/plan/growth-hacking-plan',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/plan/growth-hacking-plan', '65b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/plan/ipr-management',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/plan/ipr-management', '12b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/plan/product-theme-integration',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/plan/product-theme-integration', '02a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/plan/quality-assurance-plan',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/plan/quality-assurance-plan', 'dd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/plan/quality-assurance-strategy',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/plan/quality-assurance-strategy', '581'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/plan/release-management',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/plan/release-management', '220'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/plan/requirement-process',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/plan/requirement-process', 'c57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/plan/team-structure',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/plan/team-structure', '57b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/retire',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/retire', '876'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/retire/data-migration-plan',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/retire/data-migration-plan', 'e63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/retire/digital-data-shredding',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/retire/digital-data-shredding', 'c41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/retire/end-of-life-roadmap',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/retire/end-of-life-roadmap', '111'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/retire/platform-migration-plan',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/retire/platform-migration-plan', '95b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/99x-way-of-work/docs/product-experience/winning-product/content/retire/team-knowledge-transfer-plan',
                component: ComponentCreator('/99x-way-of-work/docs/product-experience/winning-product/content/retire/team-knowledge-transfer-plan', 'b23'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/99x-way-of-work/',
    component: ComponentCreator('/99x-way-of-work/', '048'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
