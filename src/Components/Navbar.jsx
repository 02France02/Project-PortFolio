import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import logoFra from "../../public/logo_fra_nobg.png";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const { t } = useTranslation();

  const navigation = [
    { key: "home", name: t("nav.home"), href: "/" },
    { key: "about", name: t("nav.about"), href: "/about" },
    { key: "projects", name: t("nav.projects"), href: "/projects" },
    { key: "service", name: t("nav.service"), href: "/service" },
    { key: "games", name: t("nav.games"), href: "/games" },
  ];

  const isActive = (href) =>
    href === "/games"
      ? location.pathname.startsWith("/games")
      : location.pathname === href;

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-gray-800/95 shadow-lg backdrop-blur"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Bottone menu mobile */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">{t("nav.openMenu")}</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="h-12 w-auto rounded-full transition-transform duration-300 hover:scale-105 max-xxs:hidden"
                      src={logoFra}
                      alt="Fra&Tech"
                    />
                  </Link>
                </div>
                <div className="hidden items-center sm:flex sm:flex-1 sm:justify-center">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.key}
                        to={item.href}
                        className={classNames(
                          isActive(item.href)
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200"
                        )}
                        aria-current={isActive(item.href) ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <LanguageSwitcher />
                <Link to="/contact">
                  <button
                    type="button"
                    className="relative rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    {t("nav.contact")}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* mobile navbar */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-150 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.key}
                    as={Link}
                    to={item.href}
                    className={classNames(
                      isActive(item.href)
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
                <div className="px-3 pt-2">
                  <LanguageSwitcher variant="mobile" />
                </div>
              </div>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
