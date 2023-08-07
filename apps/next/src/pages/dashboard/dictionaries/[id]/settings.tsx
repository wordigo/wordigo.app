import React from "react";
import { useRouter } from "next/router";

export default function settings() {
  const router = useRouter();
  console.log(router.query.id);
  return <div>settings</div>;
}
