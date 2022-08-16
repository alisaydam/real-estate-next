import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../lib/state";
import SocialRow from "./SocialRow";

export default function RomisMessage() {
  const { t } = useTranslation();
  const { theme } = useContext(AppContext);

  return (
    <div
      className="flex-col mx-auto mt-32 mb-16"
      style={{
        maxWidth: "120rem",
      }}
    >
      <div className="flex justify-between gap-8">
        <picture className="w-4/12 min-w-4/12 ">
          <img
            style={{ minWidth: "15rem" }}
            src={theme === "dark" ? "/logo.png" : "/logo-w.png"}
            alt="romis real estate"
          />
        </picture>

        <div className="max-w-2xl relative">
          <p className="text-8xl font-bold absolute -left-16 -top-16">“</p>
          <p className="text-3xl font-semibold ">{t("home:romis_message")}</p>
        </div>
      </div>
      <hr className="border-solid border bg-clrText border-clrText my-10" />
      <SocialRow size="50" />
    </div>
  );
}
