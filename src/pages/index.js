import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Dev Blog</h1>
    <p><Link to="/page-2/">Next Page</Link></p>
    <p><a href="https://github.com/Lambda-School-Labs/Labs8-RateMyDIY/graphs/contributors">GitHub Contributors Page</a></p>


    <p>The first day of development for the Rate Your DIY site was set in stone that we were only going to be able to come up with a stack which ended up being node, express, mssql, react, and redux. We also discussed that we wanted to deploy using Amazon AWS for the content hosted. For the database, we chose to host it on Azure. This might change depending on if we can figure out how to deploy to Azure. For the front end, we decided on the Lambda standard of Heroku.</p>
    <p>As for the work I personally accomplished, I helped setup the github repo by setting up folder structure for the backend and setting up a pull request template.  I worked on the backend playing with various endpoints and setting up tons of boilerplate code for the team. I was responsible for the review related endpoints and contributed to the Auth0 setup. I added basic code for the User Settings page and side bar menu in React.</p>

    <p></p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>

    </div>
  </Layout>
)

export default IndexPage
