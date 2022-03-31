import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Homepage } from "/src/modules";

export default Homepage;

export async function getServerSideProps(ctx) {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale)),
      // Will be passed to the page component as props
    },
  };
}
