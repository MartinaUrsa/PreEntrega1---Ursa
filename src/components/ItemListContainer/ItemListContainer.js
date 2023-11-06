import './_ItemListContainer.scss'

const ItemListContainer = ({ greeting }) => {
    return (
        <div className='container'>
            <p>{greeting}</p>
        </div>
    )
}

export default ItemListContainer;