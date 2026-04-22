import { useState } from "react";

import { useTranslation } from "react-i18next";

export const HtmlFormsDemo = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
  };

  if (submitted) {
    return (
      <div className="bg-white p-6 rounded-lg border shadow-sm max-w-sm mx-auto text-center py-4">
        <div className="text-4xl mb-2">{t("demo.forms.submitted.emoji")}</div>
        <h3 className="text-xl font-bold text-green-600">{t("demo.forms.submitted.title")}</h3>
        <p className="text-gray-600 mt-2">{t("demo.forms.submitted.message", { name })}</p>
        <button onClick={handleReset} className="mt-4 text-sm text-gray-500 underline">
          {t("demo.forms.reset")}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg border shadow-sm max-w-sm mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 text-left">
          <label htmlFor="demo-name" className="text-sm font-bold text-gray-700">
            {t("demo.forms.label")}
          </label>
          <input
            id="demo-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("demo.forms.placeholder")}
            className="border border-gray-300 rounded p-2 focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white font-bold py-2 rounded hover:bg-orange-600 transition"
        >
          {t("demo.forms.submit")}
        </button>
      </form>
    </div>
  );
};
