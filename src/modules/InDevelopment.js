import { BASE_PATH } from "../App";

export default function InDevelopment() {

    return <>
        <div style={{padding: "8rem 0 8rem 0", marginTop: "50px", flexDirection: "column"}} className="section">
            <h3 style={{color: "black", textAlign: "center"}}>page is in development</h3>
            <a style={{color: "black", textDecoration: "none", fontSize: "3rem", textAlign: "center"}} href={BASE_PATH}>return to homepage</a>
        </div>
    </>
}