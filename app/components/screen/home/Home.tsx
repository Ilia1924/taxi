import React from 'react'
import Layout from '../../layout/Layout'
import Map from './Map'
import FromInput from './FromInput'

const Home = () => {
    return (
        <Layout title='Order car'>
            <Map />
            <div className='absolute z-10 left-5 w-11/12 bottom-52'>
                <FromInput />
            </div>
        </Layout>
    )
}

export default Home