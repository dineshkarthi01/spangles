import React, {useState} from 'react'

const ProductDetails = () => {

    const [ selectedSize, setSelectedSize ] = useState('');

    const Imagess = [
        {src: 'p1.jpg' , alt:'img1'},
        {src: 'p2.jpg' , alt:'img1'},
        {src: 'p3.jpg' , alt:'img1'},
    ]

    const slides = () => {
     const imgList = [
            'p1.jpg',
            'p2.jpg',
            'p3.jpg',
        ]
    }

    const [currentIndex , setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex(currentIndex + 1);
    }

  const prs = () => {
      setCurrentIndex(currentIndex + slides.length - 1)
  }

    const ProductDetail = {
        price : '$2199 - $2999',
        name:'Stretchable blue narrow bottom plus size jeans',
        size: ['42W' , '44W' , '46W', '48W' , '50W'],
        sizePriceDiffrence : {
            '42W' : '$2199 - $2299',
            '44W' : '$2399 - $2499',
            '46W' : '$2599 - $2699',
            '48W' : '$2799 - $2899',
            '50W' : '$2899 - $2999'
        },
        fits: ['Slim Fit' , 'Regular Fit'],
        information : "A product detail page (PDP) is a web page on an eCommerce site that presents the description of a specific product...",
    }

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    }

    const handleImageClick = (index) => {
        console.log(`Image ${index+ 1 } clicked`)
    }

    const handleAddToCart = () => {

      console.log('Add to cart Clicked')
    }

    const handleBuyNow = () => {
        console.log('Buy Now Clicked')
    }

  return (

       <div className='produxt-details'>
            <img src='p1.jpg' alt='image' />
            
            <div className='image-list'>
                {Imagess.map((image,index ) => (
                    <img key={index} src={image.src} alt={`Image ${index + 1}`}
                    onClick={() => handleImageClick(index)}
                    />
                ))}
               
            </div>
            <div className='right-side'>
        <h2>{ProductDetail.name}</h2>
        <p> price: {ProductDetail.price}</p>
        <p> Select Size : </p>
        {ProductDetail.size.map((sizes) => (
            <button
            key={sizes}
            onClick={() => handleSizeSelect(sizes)}
            className={selectedSize === sizes ? 'selected' : ''}
            >
                {sizes}
            </button>
        ))}
       </div>
       {selectedSize && (
        <p>
            Size Wise price Diffrence: +$
            {ProductDetail.sizePriceDiffrence[selectedSize]}
        </p>
       )}

       <div>
        <p>Select Fit:</p>
        {ProductDetail.fits.map((fit) =>(
                <label key={fit}>
                <input type='radio' name='Slim Fit' value={fit} />
                {fit}
                </label>
        ) )}
       </div>

       <p>{ProductDetail.information}</p>

       <p>Total Cost: {ProductDetail.price}</p>
       <div>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleBuyNow}>Buy Now</button>
       </div>
       </div>

       
  )
}

export default ProductDetails
