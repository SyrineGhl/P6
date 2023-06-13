import Layout from "../components/layout";
import FicheLogement from "../components/detailLogement"; // Importez le composant FicheLogement

export default function PropertyInfo() {
  return (
    <>
      <Layout>
        <FicheLogement /> {/* Utilisez directement le composant FicheLogement */}
      </Layout>
    </>
  );
}
