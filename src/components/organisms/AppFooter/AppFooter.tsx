import { useTranslation } from "react-i18next";

export const AppFooter = () => {
  const { t } = useTranslation();
  return (
    <footer className="text-center py-8 text-gray-400 text-sm">
      <p>{t("app.footer")}</p>
    </footer>
  );
};
