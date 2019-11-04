import React from "react";
import { useRouter } from "next/router";

export default function Movie() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="container">
      <h1>Movie with id: {id}</h1>
    </div>
  );
}
