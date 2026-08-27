import { Fragment } from "react";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "it", flag: "🇮🇹" },
  { code: "en", flag: "🇬🇧" },
  { code: "es", flag: "🇪🇸" },
  { code: "fr", flag: "🇫🇷" },
];

export default function LanguageSwitcher({ variant = "navbar" }) {
  const { i18n, t } = useTranslation();
  const current =
    LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) ?? LANGUAGES[0];

  const buttonClass =
    variant === "navbar"
      ? "flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-gray-300 transition-colors duration-200 hover:bg-gray-700 hover:text-white focus:outline-none"
      : "flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium text-gray-300 transition-colors duration-200 hover:bg-gray-700 hover:text-white focus:outline-none";

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className={buttonClass} aria-label={t("languages." + current.code)}>
        <span className="text-lg leading-none">{current.flag}</span>
        <span className="uppercase">{current.code}</span>
      </MenuButton>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {LANGUAGES.map((lang) => (
              <MenuItem key={lang.code}>
                {({ focus }) => (
                  <button
                    type="button"
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={`${
                      focus ? "bg-gray-700 text-white" : "text-gray-300"
                    } ${
                      lang.code === current.code ? "font-semibold text-indigo-400" : ""
                    } flex w-full items-center gap-2 px-4 py-2 text-sm`}
                  >
                    <span className="text-lg leading-none">{lang.flag}</span>
                    {t(`languages.${lang.code}`)}
                  </button>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
