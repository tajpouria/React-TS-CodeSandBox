import React from "react";
import { db } from "../../src/db";

export default ({ job, company }) => {
  return (
    <i>
      {job.title} @ {company.title}
    </i>
  );
};

export async function getServerSideProps({ params, res }) {
  const job = await db
    .select("*")
    .from("jobs")
    .where({ id: params.id })
    .first();

  if (!job) {
    res.writeHead(302, { Location: "/" });
    res.end();
    return;
  }

  const company = await db
    .select("*")
    .from("companies")
    .where({ id: job.company_id })
    .first();

  return { props: { job, company } };
}
