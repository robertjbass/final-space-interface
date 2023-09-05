"use client";

import LoadingSpinner from "@/app/components/LoadingSpinner";
import { GlobalContext } from "@/app/context/GlobalContext";
import { useContext, useEffect } from "react";

export default function Home() {
  const { user, setUser } = useContext(GlobalContext);

  useEffect(() => {
    setUser({ id: 123, email: "bob@bbass.co" });
  }, []);

  return (
    <main>
      <LoadingSpinner />
      {/* <code>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </code> */}
    </main>
  );
}
