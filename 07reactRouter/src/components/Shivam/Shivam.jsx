
import { Link } from 'react-router-dom'

const Shivam = () => {
  return (
    <div>
        Welcome to shivam new page
        <div>
            <Link
        to="/about"
        >Go back</Link>
        </div>
    </div>
  )
}

export default Shivam