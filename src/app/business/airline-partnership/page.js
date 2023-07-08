"use client";

import ContainerPage from "@/components/ContainerPage";
import { headerMainRef } from "@/components/sideBar/SideMenu";

import styles from "@/styles/global.module.scss";

export default function page() {
  return (
    <div className={`${styles.pageWithPadding}`}>
      <ContainerPage />
    </div>
  );
}
