import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Ойлгомжтой</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Програмчлалын үндсэн ойлголтуудыг хамгийн ойлгомжтой байдлаар тайлбарлах болно.
      </>
    ),
  },
  {
    title: <>Хялбар → Гүнзгий</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Бид бүх хичээлээ 1 -рт дунд сургуулийн сурагч, 2 -рт оюутан, 3 -рт мэргэжлийн программистуудад
        зориулсан гурван хэсэгт хуваасан.
      </>
    ),
  },
  {
    title: <>Хамдтаа Хол Явцгаая</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Шинэ хичээл нэмэх, ойлгомжгүй тайлбарыг засах хүсэлтэй бол бидэн рүү "Татах Хүсэлт" (PR) явуулаад л болоо.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Нүүр`}
      description="Код бичиж сураад гэрээсээ гадаадад ажиллацгаая. Програмчлал, алгоритмын ойлголтуудыг хамгийн хялбараар эндээс сураарай.">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Эхлэх
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
