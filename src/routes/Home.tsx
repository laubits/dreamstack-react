/** @jsx jsx */
import { jsx } from 'theme-ui'
import useDemo from 'hooks/useDemo'

export default function Home() {
  const data = useDemo()
	return (
    <div>
      <h1>Home</h1>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}
