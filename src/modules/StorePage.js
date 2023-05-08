import { useParams } from 'react-router-dom';

export default function StorePage(props) {

    const { category } = useParams();

    const hub_view = (
        <>
            <div className="store-tab section">
                <a className="overlay-link"  href="/store/kits"></a>
                <p>[insert kits content]</p>
            </div>
        </>
    );

    const products_view = (
        <>
            
        </>
    );

    return (
        <>
            {(props.view === 'hub') ? hub_view : <></>}
            {(props.view === 'products') ? products_view : <></>}
        </>
    );
}