import { graphql } from "gatsby";
import React from 'react';
import PageTitleComponent from "../../components/views/page-title";
import { ArticleContainer, Layout } from '../../components/layouts';


export default function PastorsPage(props: {
  data: GatsbyTypes.SanityPreacherQuery;
}): JSX.Element {
  return (
    <Layout>
      <div className="w-full -mt-12 shadow-xl card bg-base-100 image-full">
        <figure className="aspect-w-16 aspect-h-6 xl:aspect-h-4"><img src="https://images.unsplash.com/photo-1651341508318-39601132a85e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Shoes" /></figure>
        <div className="justify-end card-body">
          <h2 className="card-title">{props.data.sanityPreacher.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <ArticleContainer>
        <PageTitleComponent
          title="About Pastor"
        />
      </ArticleContainer>
    </Layout>
  );
}


export const query = graphql`
query SanityPreacherQuery($id: String!) {
	sanityPreacher(id: {eq: $id}) {
		name
		bio
	}
}
`
