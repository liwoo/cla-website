import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import * as styles from '../components/layouts/styles.module.css';
import { Container, Layout } from '../components/layouts';
import HeroComponent from '../components/hero';
import PageTitleComponent from '../components/views/page-title';
import { Trans } from 'gatsby-plugin-react-i18next';
import { MiniContainer } from '../components/layouts/mini-container';
import { News } from '../components/views/news';

type Highlight = {
  title: string;
  description: string;
  image: string;
};

const highlighs: Highlight[] = [
  {
    title: 'Become a Member',
    description:
      'We invite you to become a member of our church. For information, please contact the church office.',
    image: 'https://picsum.photos/id/1005/400/250',
  },
  {
    title: "Children's Church",
    description:
      "It's important that every week they hear about Jesus and learn how to live as a follower of Jesus.",
    image: 'https://picsum.photos/id/1005/400/250',
  },
  {
    title: 'Become a Volunteer',
    description:
      'If you love the people at your church and would like to serve in a fun and rewarding way, then we want you to become a volunteer at our church!',
    image: 'https://picsum.photos/id/1005/400/250',
  },
  {
    title: 'Just Visting',
    description:
      "So, you're visiting ? Well, we're here to help IF you'd like. Our mission is to do everything that we can to make your visit with us a place where you will want to return again and again.",
    image: 'https://picsum.photos/id/1005/400/250',
  },
];

type HighlightsCta = {
  title: string;
  description: string;
};

const highlightCta: HighlightsCta = {
  title: 'Become a Christian',
  description:
    'In order to become a Christian, you have to have faith in God, repent your sins, and confess/confess all of your sins to God. The Bible says "For with the heart a person believes and thus is justified, and with the mouth he confesses and thus is saved" (Romans 10:10).',
};

const findCellDescription =
  "We believe the Bible is God's word, intended to be read, studied and believed. We are a cell based Church means we meet in small groups consisting of about 8-12 people who live near each other. Our only motive is to glorify God and serve Him by serving His people, our members. Each group that gathers together studies what God has said in the Bible and how it applies to their daily lives.";

const IndexPage: React.FC<PageProps> = (): JSX.Element => {
  return (
    <Layout>
      <HeroComponent />
      <PageTitleComponent
        title="Welcome to CLA"
        subtitle="Welcome to CLA Subtitle"
      />
      <Container className="my-8 grid grid-cols-1 lg:grid-cols-2 ul:grid-cols-3 lg:gap-x-12 ul:grid-rows-3">
        {highlighs.map((highlight) => (
          <HighlightCard key={highlight.title} {...highlight} />
        ))}
        <div className="my-8 lg-my-2 lg:col-span-2 col-start-1">
          <h2 className="flex items-center my-2 font-bold gap-x-2 text-primary">
            {highlightCta.title} &#8594;
          </h2>
          <p>{highlightCta.description}</p>
        </div>
        <figure className="hidden w-full my-2 ul:block row-span-3 row-start-1 col-start-3">
          <img
            src="https://picsum.photos/id/1005/400/250"
            className="object-cover h-full rounded-lg"
            alt="Church Building"
          />
        </figure>
      </Container>
      <Container className="p-2 bg-base-100">
        <PageTitleComponent title="Find Cell" />
        <MiniContainer className="mb-12 grid grid-cols-2 lg:grid-cols-3 gap-x-20">
          <img
            src="https://picsum.photos/id/1005/400/250"
            alt="Find Cell Near You"
            className="hidden object-cover h-full rounded-lg row-span-3 lg:block"
          />
          <p className="col-span-2">{findCellDescription}</p>
          <div className="flex flex-col items-center my-4 mb-1 col-span-2 md:gap-x-4 md:flex-row form-control">
            <select className="w-full md:w-auto select select-bordered select-primary">
              <option>Choose Your Nearest Cell</option>
              <option>telekinesis</option>
              <option>time travel</option>
              <option>invisibility</option>
            </select>
            <label className="flex-1 my-2 input-group">
              <span>Email</span>
              <input
                type="text"
                placeholder="info@site.com"
                className="w-full input input-bordered"
              />
            </label>
          </div>
          <button className="btn col-span-2 md:col-span-1">
            <Trans>Join Cell</Trans>
          </button>
        </MiniContainer>
      </Container>
      <Container>
        <PageTitleComponent title="News and Updates" />
        <News />
      </Container>
    </Layout>
  );
};

function HighlightCard({ title, description, image }: Highlight): JSX.Element {
  return (
    <div className="my-2 bg-white cursor-pointer hover:shadow-md transition ease-in delay-150 card card-side card-bordered">
      <div className="flex-auto w-1/4">
        <figure className="m-4 aspect-w-4 aspect-h-4">
          <img src={image} className="object-cover rounded-lg" alt={title} />
        </figure>
      </div>
      <div className="justify-center flex-auto w-3/4 py-2 mx-6 card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-end gap-x-2">
          <p className={styles.clamped}>{description}</p>
          &#8594;
        </div>
      </div>
    </div>
  );
}
export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
