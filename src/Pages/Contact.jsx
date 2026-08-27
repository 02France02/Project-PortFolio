import { useState } from "react";
import { useTranslation } from "react-i18next";

const WEB3FORMS_ACCESS_KEY = "975b82be-af1c-486c-b6ba-299cc00034f8";

const inputClass =
  "peer w-full rounded-lg border border-gray-700 bg-gray-800 bg-opacity-40 py-2 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900";

const labelClass =
  "absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-400 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-400";

const initialForm = {
  name: "",
  surname: "",
  email: "",
  service: "",
  message: "",
};

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = t("contact.errors.name");
    if (!form.email.trim()) {
      newErrors.email = t("contact.errors.email");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = t("contact.errors.emailInvalid");
    }
    if (!form.message.trim()) newErrors.message = t("contact.errors.message");
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Nuovo contatto dal portfolio: ${form.name} ${form.surname}`.trim(),
          from_name: "Fra&Tech Portfolio",
          name: `${form.name} ${form.surname}`.trim(),
          email: form.email,
          servizio: form.service || "Non specificato",
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="body-font relative bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-24" data-aos="fade-up">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-bold tracking-wide text-white sm:text-3xl">
            {t("contact.title")}
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            {t("contact.subtitle")}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto md:w-2/3 lg:w-1/2"
        >
          <div className="-m-2 flex flex-wrap">
            {/* Nome */}
            <div className="w-full p-2 sm:w-1/2">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={t("contact.firstName")}
                  autoComplete="given-name"
                />
                <label htmlFor="name" className={labelClass}>
                  {t("contact.firstNameRequired")}
                </label>
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>
            </div>

            {/* Cognome */}
            <div className="w-full p-2 sm:w-1/2">
              <div className="relative">
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={form.surname}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={t("contact.lastName")}
                  autoComplete="family-name"
                />
                <label htmlFor="surname" className={labelClass}>
                  {t("contact.lastName")}
                </label>
              </div>
            </div>

            {/* Email */}
            <div className="w-full p-2 sm:w-1/2">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={t("contact.email")}
                  autoComplete="email"
                />
                <label htmlFor="email" className={labelClass}>
                  {t("contact.emailRequired")}
                </label>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Servizio */}
            <div className="w-full p-2 sm:w-1/2">
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 bg-opacity-40 py-2 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                >
                  <option value="">{t("contact.service")}</option>
                  <option value="Sito Web">{t("contact.serviceWebsite")}</option>
                  <option value="Web App">{t("contact.serviceWebapp")}</option>
                  <option value="Gestione Social">{t("contact.serviceSocial")}</option>
                  <option value="Altro">{t("contact.serviceOther")}</option>
                </select>
              </div>
            </div>

            {/* Messaggio */}
            <div className="mt-4 w-full p-2">
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="peer h-32 w-full resize-none rounded-lg border border-gray-700 bg-gray-800 bg-opacity-40 py-2 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                  placeholder={t("contact.message")}
                ></textarea>
                <label htmlFor="message" className={labelClass}>
                  {t("contact.messageRequired")}
                </label>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>
            </div>

            {/* Submit */}
            <div className="w-full p-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="mx-auto flex items-center gap-2 rounded-lg border-0 bg-indigo-500 py-2 px-8 text-lg text-white transition-colors duration-200 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" && (
                  <svg
                    className="h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                )}
                {status === "sending" ? t("contact.sending") : t("contact.send")}
              </button>

              {status === "success" && (
                <p
                  role="status"
                  className="mt-4 rounded-lg border border-green-700 bg-green-900/40 p-3 text-center text-sm text-green-400"
                >
                  {t("contact.successMessage")}
                </p>
              )}
              {status === "error" && (
                <p
                  role="alert"
                  className="mt-4 rounded-lg border border-red-700 bg-red-900/40 p-3 text-center text-sm text-red-400"
                >
                  {t("contact.errorMessage")}
                </p>
              )}
            </div>

            {/* Footer contatti */}
            <div className="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
              <a
                href="mailto:francescofoti44@gmail.com"
                className="text-indigo-400 transition-colors hover:text-indigo-300"
              >
                francescofoti44@gmail.com
              </a>
              <p className="mt-1">
                <a
                  href="tel:+393201852850"
                  className="transition-colors hover:text-gray-200"
                >
                  +39 320 185 2850
                </a>
              </p>
              <p className="my-5 leading-normal">
                {t("contact.city")}
                <br />
                {t("contact.zip")}
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
