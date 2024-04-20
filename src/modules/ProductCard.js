export default function ProductCard(props) {
    return <div className="product-card">
        <img style={{position: "absolute", minHeight: "450px", width: "300px", objectFit: "cover"}} src={props.img} alt=""/>
        <h4 style={{position: "absolute", bottom: "0", backgroundColor: "rgba(0, 0, 0, 0.8)", color: "white", fontSize: "30px", fontWeight: "normal", width: "240px", height: "40px", margin: "0", padding: "30px", textAlign: "center"}}>
            {props.productName}
        </h4>
    </div>
}