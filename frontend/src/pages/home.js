import Layout from "../components/layout";
import Banner from "../components/banner";
import LocationCard from "../components/cardLocation";

export default function Home (){
    return( 
        <>
        <Layout>
            <Banner imgSrc="https://cdn.discordapp.com/attachments/1081227920770596865/1116737002897940721/IMG.jpg" alt="bannière"/>
        <LocationCard/>
        </Layout>
        </>
    )
}