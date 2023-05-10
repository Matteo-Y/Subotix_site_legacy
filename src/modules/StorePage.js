import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function StorePage(props) {

    const { category } = useParams();
    const [products, setProducts] = useState(null);
    const [productsHtml, setProductsHtml] = useState(null);

    const hub_view = (
        <>
            <div className="store-tab section">
                <a className="overlay-link"  href="/store/stem_kits"></a>
                <p>[insert kits content]</p>
            </div>
        </>
    );

    useEffect(() => {
        fetch('http://localhost:8000/store-items/' + category)
        .then((response) => response.json())
        .then((data) => {
          const promises = data.products.map((product) => {
            return fetch('http://localhost:8000' + product.thumbnail + '/')
            .then((response) => response.blob())
            .then((blob) => {
                product.thumbnail = URL.createObjectURL(blob);
              return product;
            });
          });
          Promise.all(promises).then((new_data) => {
            setProducts(new_data);
          });
        });
    }, [category]);

    useEffect(() => {
        try {
            setProductsHtml(
            <>
                {products.map((product) => {
                    return (
                        <div className='product-card'>
                            <h2 className='product-name'>{(String)(product.name).toLocaleLowerCase()}</h2>
                            <p className='product-description'>{(String)(product.description).toLocaleLowerCase()}</p>
                        </div>
                    );
                })}
            </>
            );
        } catch(e) {
            console.log(e);
        }
    }, [products]);

    const products_view = (
        <>
            {productsHtml}
        </>
    );

    return (
        <>
            {(props.view === 'hub') ? hub_view : <></>}
            {(props.view === 'products') ? products_view : <></>}
        </>
    );
}