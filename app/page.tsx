"use client";

import { useContext, useEffect } from "react";
import { GlobalContext } from "@/app/context/GlobalContext";

export default function Home() {
  const { user, setUser } = useContext(GlobalContext);

  useEffect(() => {
    setUser({ id: 123, email: "bob@bbass.co" });
  }, []);

  return (
    <main>
      <code>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </code>
    </main>
  );
}
