import "server-only";

const common = {
  en: () =>
    import("../../dictionaries/common/vi.json").then(
      (module) => module.default,
    ),
  vi: () =>
    import("../../dictionaries/common/vi.json").then(
      (module) => module.default,
    ),
};

export const getCommon = async (lang) => await common[lang]();
