import React from "react";
import { db } from "../../src/db";
import { useRouter } from "next/router";

export default ({ company }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading</div>;
  }

  return <i>Jobs @ {company.title}</i>;
};

export async function getStaticPaths() {
  const jobs = await db.select("*").from("jobs").where({ id: 1 });

  const paths = jobs.map(({ company_id }) => ({
    params: { id: company_id.toString() }
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params, res }) {
  const company = await db
    .select("*")
    .from("companies")
    .where({ id: params.id })
    .first();

  if (!company) {
    res.writeHead(302, { Location: "/" });
    res.end();
    return;
  }

  return {
    props: {
      company
    }
  };
}
