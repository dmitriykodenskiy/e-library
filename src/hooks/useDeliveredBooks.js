import { useMatch } from 'react-router-dom'
import { useState, useEffect } from 'react';
import getBook from '../delivery API/client';

const useDeliveredBooks = () => {
    const [deliveredBooks, setDeliveredBooks] = useState([])
    
    const match = useMatch("/e-library/books/:title")
    const matchedTitle = match.params?.title

    // Get Book data with delivery API
    const fetchBooksWithDeliveryApi = async () => {
        const deliveryBooksData = await getBook(matchedTitle)
        setDeliveredBooks(deliveryBooksData)
    }
    useEffect(() => {
        fetchBooksWithDeliveryApi()
    }, [])

    return deliveredBooks
}

export default useDeliveredBooks