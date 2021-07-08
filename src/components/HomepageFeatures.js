import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Fácil de usar',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        O Docusaurus foi projetado desde o início para ser facilmente instalado e 
        usado para colocar seu site em funcionamento rapidamente
      </>
    ),
  },
  {
    title: 'Concentre-se no que é Importante',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        O Docusaurus permite que você se concentre em seus documentos e nós faremos as tarefas. Vai
        adiante e mova seus documentos para o diretório <code> docs </code>
      </>
    ),
  },
  {
    title: 'Desenvolvido por React',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Amplie ou personalize o layout do seu site reutilizando o React. O docusaurus pode ser estendido 
        ao reutilizar o mesmo cabeçalho e rodapé.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
