import React from 'react'
import { food_list } from '../../assets/assets'
import ItemCard from './ItemCard'

const Items = () => {
    return (
        <div className='min-h-screen mt-16'>
            <div className={`flex flex-wrap`}>
                {food_list.map((item, index) => {
                    return (
                        <ItemCard key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    )
                })}
            </div>
        </div>
    )
}

export default Items