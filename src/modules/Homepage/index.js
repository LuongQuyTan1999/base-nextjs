import { useTranslation } from "next-i18next";

export const Homepage = () => {
  const { t } = useTranslation("common");

  return <div>{t("common:video")}</div>;
};
