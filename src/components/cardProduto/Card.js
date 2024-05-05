import './CardStyle.css'

export default function Card({ products }) {
    return (
        <section className='cardContent'>
            {products.map(product => (
                <div key={product.id} className='cardContentProduct'>
                    <img src={product.imageUrl} alt='comida' />
                    <h2>{product.title}</h2>
                    <div className='cardContentProductButton'>
                        <p>{product.price}</p>
                        <button>+</button>
                    </div>
                </div>
            ))}
        </section>
    );
}