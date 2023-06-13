import React from "react";
import Layout from "../components/layout";
import Banner from "../components/banner";
import Collapse from "../components/collapse";

const About = () => {
  return (
    <Layout>
      <img className="bannerAbout" src="https://cdn.discordapp.com/attachments/1081227920770596865/1118162985941221506/gustavo-alves-YOXSC4zRcxw-unsplash_1.png" alt="Bannière de la page à propos" />
        <div className="collapse">
        <Collapse title="Fiabilité" className="collapse">
        <p>Les annonces sur Kasa sont réputées pour leur fiabilité absolue. Les photos des logements sont fidèles à la réalité, et toutes les informations sont vérifiées régulièrement par nos équipes afin de garantir leur exactitude.</p>
        </Collapse>
        <Collapse title="Respect"className="collapse">
          <p>Chez Kasa, la bienveillance est primordiale. Toute forme de discrimination ou de perturbation du voisinage entraînera l'exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse title="Service"className="collapse">
          <p>Notre équipe est là pour vous offrir une expérience parfaite. N'hésitez pas à nous contacter pour toute question.</p>
        </Collapse>
        <Collapse title="Sécurité"className="collapse">
          <p>La sécurité est notre priorité chez Kasa. Chaque logement respecte nos critères de sécurité, et les notes laissées par les utilisateurs nous aident à vérifier leur conformité. Nous proposons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Collapse>
        </div>
    </Layout>
  );
};

export default About;
