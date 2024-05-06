"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();
  if (session.data?.user) {
    return <div>from client : user signed in</div>;
  }

  return <div>from client : user not sign in</div>;
}
