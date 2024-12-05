import { Layout } from '~/layout';
import styles from '../styles/histoire.module.scss';

export default function Histoire() {
  return (
    <Layout>
      <div className={styles.histoire}>
        <div className={styles.content}>
          <h1 className={styles.title}>Le Banh mi</h1>
          <div className={styles.story}>
            <p>
              L&apos;histoire du Bánh Mì commence au début du 20e siècle, pendant la colonisation française du Vietnam. Les
              Français ont introduit le pain, &quot;bánh mì&quot; en vietnamien, dans un pays où le riz était roi.
            </p>
            <p>
              Après l&apos;indépendance du Vietnam dans les années 50, le pain est devenu un ingrédient clé pour un nouveau type
              de sandwich. Les réfugiés du Nord, s&apos;installant au Sud post-division du Vietnam en 1954, ont commencé à remplir
              ce pain avec des ingrédients locaux, créant ainsi le bánh mì. Ils mélangeaient le pâté français avec des saveurs
              vietnamiennes comme le porc grillé, des légumes marinés, de la coriandre, et de la sauce soja ou nuoc mam.
            </p>
            <p>
              Ce sandwich unique est devenu un symbole de l&apos;adaptation et de la fusion culinaire. Avec la diaspora
              vietnamienne après 1975, le bánh mì a voyagé à travers le monde, gagnant en popularité et s&apos;ajustant aux
              palettes globales tout en gardant son essence.
            </p>
            <p>
              Aujourd&apos;hui, le bánh mì est célébré pour sa texture croquante et son mélange savoureux, devenant un phénomène
              culinaire international.
            </p>
          </div>

          <h1 className={styles.title}>Le Bobun</h1>
          <div className={styles.story}>
            <p>
              Le bò bún ou bobun, bien que souvent associé au Vietnam, possède des origines plus complexes. Son histoire commence
              dans la région du Champa, dans le centre du Vietnam, où les Cham, un peuple austronésien, cultivaient le riz et
              utilisaient les vermicelles dans leur cuisine.
            </p>
            <p>
              Avec l&apos;expansion du royaume vietnamien et les échanges culturels, ces pratiques culinaires se sont répandues.
              Le bobun tel que nous le connaissons aujourd&apos;hui, composé de vermicelles de riz, de viande (souvent du bœuf),
              de légumes frais, d&apos;herbes aromatiques, de cacahuètes, et de la sauce nuoc mam, a évolué à travers les siècles.
            </p>
            <p>
              L&apos;influence cambodgienne et laotienne est notable, où des versions similaires existent avec des ingrédients
              légèrement différents. C&apos;est après la guerre du Vietnam et l&apos;exode des boat people que le bobun a vraiment
              pris une dimension internationale, emporté par les Vietnamiens à travers le monde.
            </p>
            <p>
              En France, pays d&apos;accueil de nombreux réfugiés vietnamiens, le bobun a trouvé une nouvelle maison, se mêlant à
              la culture culinaire locale tout en conservant son identité, devenant un plat emblématique de la cuisine fusion
              vietnamienne.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
