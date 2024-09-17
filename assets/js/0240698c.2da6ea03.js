"use strict";(self.webpackChunkwow=self.webpackChunkwow||[]).push([[4749],{3795:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=a(4848),n=a(8453);const s={title:"Data Architecture",metaTitle:"Data Architecture | WP",metaDescription:"Data architecture is composed of models, policies and rules or standards that govern which data is collected, data relationships, how it is stored, arranged, integrated, and processed.",published:!0,documentation:"DataModel",metaTags:["Immerse","Data Architecture","Winning Product","Technology Mastery"],checklist:[{order:1,question:"Have you identified the information that needs to be stored and their relationships with each other?",expectation:"There should be a data relationship diagram; something like an ER diagram. Everyone in the team should be aware of what is stored and the relationship between stored entities.",version:"1.0.0"},{order:2,question:"Have you identified the security concerns regarding the stored data and their access levels?",expectation:"Team should be aware of what data entities needs to be kept secured and who can have access to those data. According to some data regulations such as GDPR, it could be that even the development team should not have access to some sensitive data.",version:"1.0.0"},{order:3,question:"Have you optimized the data storage considering performance?",expectation:"The team should have identified the read and write performance constraints for each data entity and the data architecture should address those concerns. The team should also consider replication strategies for distributed applications.",version:"1.0.0"},{order:4,question:"What is the data storage strategy?",expectation:"Team should have decided on a storage strategy such as relational DB, No-Sql, etc... There should be a good justification for the selection based on cost, performance, etc...",version:"1.0.0"},{order:5,question:"Does your data architecture consider possible future data analytics requirements?",expectation:"Team should have at least consider a data model to represent different dimensions of data. There could be a data analytics model such as a Kimball model that is independent of the main data model.",version:"1.0.0"}]},o=void 0,r={id:"product-experience/winning-product/content/immerse/data-architecture",title:"Data Architecture",description:"Why",source:"@site/docs/product-experience/winning-product/content/3-immerse/02-data-architecture.md",sourceDirName:"product-experience/winning-product/content/3-immerse",slug:"/product-experience/winning-product/content/immerse/data-architecture",permalink:"/99x-way-of-work/docs/product-experience/winning-product/content/immerse/data-architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/product-experience/winning-product/content/3-immerse/02-data-architecture.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Data Architecture",metaTitle:"Data Architecture | WP",metaDescription:"Data architecture is composed of models, policies and rules or standards that govern which data is collected, data relationships, how it is stored, arranged, integrated, and processed.",published:!0,documentation:"DataModel",metaTags:["Immerse","Data Architecture","Winning Product","Technology Mastery"],checklist:[{order:1,question:"Have you identified the information that needs to be stored and their relationships with each other?",expectation:"There should be a data relationship diagram; something like an ER diagram. Everyone in the team should be aware of what is stored and the relationship between stored entities.",version:"1.0.0"},{order:2,question:"Have you identified the security concerns regarding the stored data and their access levels?",expectation:"Team should be aware of what data entities needs to be kept secured and who can have access to those data. According to some data regulations such as GDPR, it could be that even the development team should not have access to some sensitive data.",version:"1.0.0"},{order:3,question:"Have you optimized the data storage considering performance?",expectation:"The team should have identified the read and write performance constraints for each data entity and the data architecture should address those concerns. The team should also consider replication strategies for distributed applications.",version:"1.0.0"},{order:4,question:"What is the data storage strategy?",expectation:"Team should have decided on a storage strategy such as relational DB, No-Sql, etc... There should be a good justification for the selection based on cost, performance, etc...",version:"1.0.0"},{order:5,question:"Does your data architecture consider possible future data analytics requirements?",expectation:"Team should have at least consider a data model to represent different dimensions of data. There could be a data analytics model such as a Kimball model that is independent of the main data model.",version:"1.0.0"}]},sidebar:"tutorialSidebar",previous:{title:"Brand Guide",permalink:"/99x-way-of-work/docs/product-experience/winning-product/content/immerse/brand-guide"},next:{title:"Positioning Messages",permalink:"/99x-way-of-work/docs/product-experience/winning-product/content/immerse/positioning-messages"}},d={},c=[{value:"Why",id:"why",level:2},{value:"How",id:"how",level:2},{value:"Conceptual Level Data Architecture Design based on Business Process and Operations",id:"conceptual-level-data-architecture-design-based-on-business-process-and-operations",level:3},{value:"Logical Level Data Architecture Design",id:"logical-level-data-architecture-design",level:3},{value:"Physical/technology model",id:"physicaltechnology-model",level:3},{value:"References",id:"references",level:2}];function l(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"why",children:"Why"}),"\n",(0,i.jsx)(t.p,{children:"Data architecture provides meaning to all the data that is collected. This gives the ability to the system to work with accurate information efficiently to solve the business problem. In addition to that, it gives a new opportunity to analyze and predict trends in information and to generate business insights."}),"\n",(0,i.jsx)(t.h2,{id:"how",children:"How"}),"\n",(0,i.jsx)(t.p,{children:"A successful enterprise needs to have a top-down coherent data architecture, designed based on the business processes and operations. Usually, there are three different layers for a data architecture."}),"\n",(0,i.jsx)(t.h3,{id:"conceptual-level-data-architecture-design-based-on-business-process-and-operations",children:"Conceptual Level Data Architecture Design based on Business Process and Operations"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The core data entities and data elements such as those about customers, products, sales."}),"\n",(0,i.jsx)(t.li,{children:"The output data needed by the clients and customers."}),"\n",(0,i.jsx)(t.li,{children:"Security policies to be applied to each data entity."}),"\n",(0,i.jsx)(t.li,{children:"The relationships between the data entities, such as reference integrity, business rules, execution sequence."}),"\n",(0,i.jsx)(t.li,{children:"Standards of data quality, operations, and Service Level Agreements (SLAs)."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"logical-level-data-architecture-design",children:"Logical Level Data Architecture Design"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The type of database and the data format to be used. E.g. NoSQL, Relational"}),"\n",(0,i.jsx)(t.li,{children:"The naming conventions and data integrity."}),"\n",(0,i.jsx)(t.li,{children:"Data archival/retention policies."}),"\n",(0,i.jsx)(t.li,{children:"Privacy and security information."}),"\n",(0,i.jsx)(t.li,{children:"Data Replications."}),"\n",(0,i.jsx)(t.li,{children:"Data Flows and Pipelines."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"physicaltechnology-model",children:"Physical/technology model"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Provides the data mechanism for a specific process and functionality, or how the actual data architecture is implemented on underlying technology infrastructure. Also considers the different dimensions of collected data, such as time, etc. to use for analytical purposes later."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Data_architecture",children:"Data architecture"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>r});var i=a(6540);const n={},s=i.createContext(n);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);