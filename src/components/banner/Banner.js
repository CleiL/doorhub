import './BannerStyle.css';
import ImageBanner from '../../assets/OIP.jpeg';

export default function Banner() {
    return (
        <section className='banner'>
            <div className='bannerContent'>
                <h1>We Provide <br/> Delivery Within <br/>30 Min</h1>
                <p>Imagine you don't need a diet because we provide<br/>
                    healthy and delicious food for you!
                </p>
                <div className='bannerContentButton'>
                    <input className='search-input' placeholder='Enter zip Coad' type='text'/>
                    <button className='search-button'>Dicover <span>&gt;</span></button>                        
                </div>
            </div>
            <div className='bannerImage'>
                <img src={ ImageBanner} />
            </div>
        </section>
    )
}