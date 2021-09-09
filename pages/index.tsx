import Link from 'next/link'
import Layout from '../components/Layout'
import Menu from '../components/Menu'

const IndexPage = () => (
  <Layout title="thien | dashboard">
    <h1>Hello you've found my dashboard. 👋</h1>
    <p>this is where i learn</p>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <Menu/>
  </Layout>
)

export default IndexPage
