import React from "react";
import { useRouter } from "next/router";

function ProjectID() {
  const router = useRouter();
  console.log(router.query);
  return <div>This is projectid </div>;
}

export default ProjectID;
