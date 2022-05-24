import React from "react";

import User from "./User";
import ProfileAccess from "./ProfileAccess";

interface CurrentSelectProps {
  currentSelect: string;
}

export default function CurrentContent({ currentSelect }: CurrentSelectProps) {
  return (
    <>{currentSelect === "Usuários" ? <User /> : <ProfileAccess />}</>
  );
}
