import React from "react";
import Layout from "../components/layout";
import FicheLogement from "../components/detailLogement";
import Slideshow from "../components/slideshow";
import Collapse from "../components/collapse";

export default function PropertyInfo() {
  return (
    <Layout>
      <div className="property-info-container">
        <Slideshow />
        <FicheLogement />
        <Collapse title="Description"className="collapse">
          <p>Notre équipe est là pour vous offrir une expérience parfaite. N'hésitez pas à nous contacter pour toute question.</p>
        </Collapse>
        <Collapse title="Equipements"className="collapse">
          <p>Notre équipe est là pour vous offrir une expérience parfaite. N'hésitez pas à nous contacter pour toute question.</p>
        </Collapse>
      </div>
    </Layout>
  );
}
