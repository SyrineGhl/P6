import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="page404">
        <h3>404</h3>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="link404">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
