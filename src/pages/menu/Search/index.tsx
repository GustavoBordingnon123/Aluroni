import React from "react";
import styles from "./Search.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ search, setSearch }: Props) {
  return (
    <div className={styles.Search}>
      <input
        placeholder="Search"
        value={search}
        onChange={(evento) => setSearch(evento.target.value)}
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}