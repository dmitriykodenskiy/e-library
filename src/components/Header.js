import { useQuery } from '@apollo/client'
import { HEADER } from '../queries'


const Header = () => {
    const { loading, error, data } = useQuery(HEADER)
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>;
  
    const headerData = data.all_header.items[0]
    return(
        <header>
            <div className='header__inner'>
                <span className='logo'>{headerData.title}</span>
            </div>
        </header>
    )

}

export default Header