import { useQuery } from '@apollo/client'
import { HEADER } from '../queries'
import { Link } from 'react-router-dom'


const Header = () => {
    const { loading, error, data } = useQuery(HEADER)
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>;
  
    const headerData = data.all_header.items[0]
    return(
        <header>
            <div className='header__inner'>
                <Link className="logo" to={`/e-library/`}>{headerData.title}</Link>
                <Link className="postsLink" to={`/e-library/posts`}>Posts</Link>
            </div>
        </header>
    )

}

export default Header