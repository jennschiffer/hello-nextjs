import Link from 'next/link'

export default () => (
  <div>
    <Link href='/'><a>Home</a></Link>
    <Link href='/chapter?chapter=1' as='/chapter/1'><a>Chapter 1</a></Link>
    <Link href='/chapter?chapter=test' as='/chapter/test-route-wowowowo'><a>Chapter Z</a></Link>
  </div>
)