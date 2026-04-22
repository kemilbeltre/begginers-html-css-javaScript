import { useTranslation } from "react-i18next";

export const HtmlBasicsDemo = () => {
  const { t } = useTranslation();
  return (
    <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg bg-white text-center">
      <h1 className="text-2xl font-bold mb-2">{t("demo.htmlBasics.heading")}</h1>
      <p className="text-gray-600 mb-4">{t("demo.htmlBasics.paragraph")}</p>
      <button className="bg-gray-200 text-black px-4 py-2 rounded border border-gray-400">
        {t("demo.htmlBasics.button")}
      </button>
    </div>
  );
};
