import Header from '../components/Header'
import Navigation from '../components/Navigation'

const index = () => (
  <div>
    <Header />

    Welcome to nextbook. This is the "cover" index page.
  
    {/* todo: navigation prop set to "cover" */}
    <Navigation />
  </div>
)

export default index