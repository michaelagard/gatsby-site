import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <p><h1>Front End</h1></p>
    <p><Link to="/page-3/">Next Page</Link></p>

    <h2>User Settings Page - Basic Setup</h2>
    <ul>
      <li><a href="https://github.com/Lambda-School-Labs/Labs8-RateMyDIY/pull/17">GitHub PR</a></li>
      <li><a href="https://trello.com/c/kzqXHman">Trello Card</a></li>
    </ul>

    <h2>Add pull_request_template.md for GitHub Pull Requests</h2>
    <ul>
      <li>No PR Available</li>
      <li><a href="https://trello.com/c/nYv7wpqL">Trello Card</a></li>
    </ul>

    <h2>User Settings Page - Summaries</h2>
    <ul>
      <li><a href="https://github.com/Lambda-School-Labs/Labs8-RateMyDIY/pull/13/">GitHub PR</a></li>
      <li><a href="https://trello.com/c/lD1ntQR5">Trello Card</a></li>
    </ul>

    <h2>Users Settings Page - Sidebar</h2>
    <ul>
      <li><a href="https://github.com/Lambda-School-Labs/Labs8-RateMyDIY/pull/7">GitHub PR</a></li>
      <li><a href="https://trello.com/c/pORU7CcL">Trello Card</a></li>
    </ul>

    <h2>Readme</h2>
    <ul>
      <li><a href="https://github.com/Lambda-School-Labs/Labs8-RateMyDIY/pull/2">GitHub PR</a></li>
      <li><a href="https://trello.com/c/FC76t9lV">Trello Card</a></li>
    </ul>
    <h1>Back End</h1>

    <h2>Review Endpoint Configuration</h2>
    <ul>
      <li><a href="https://github.com/Lambda-School-Labs/Labs8-RateMyDIY/pull/23">GitHub PR</a></li>
      <li><a href="https://trello.com/c/5A3WkuNA">Trello Card</a></li>
    </ul>

    <h2>Basic Backend Setup</h2>
    <ul>
      <li><a href="https://github.com/Lambda-School-Labs/Labs8-RateMyDIY/pull/3">GitHub PR</a></li>
      <li><a href="https://trello.com/c/4ixZ2yFi">Trello Card</a></li>
    </ul>
  </Layout>
)

export default SecondPage
