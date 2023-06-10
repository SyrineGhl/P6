import Layout from "../components/layout";
import "./scss/home.css";

export default function Home (){
    return( 
        <>
        <Layout>
        <div>
            <h1>Chez vous, partout et ailleurs</h1>
            <img className="bannerImg" src="https://cdn.discordapp.com/attachments/1081227920770596865/1116737002897940721/IMG.jpg" alt="image de la banniere"/>
        </div>
        </Layout>
        </>
    )
}