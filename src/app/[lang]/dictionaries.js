import "server-only";
// import

const common = {
	en: () =>
		import("@/dictionaries/common/vn.json").then(
			(module) => module.default
		),
	vn: () =>
		import("@/dictionaries/common/vn.json").then(
			(module) => module.default
		),
};

export const getCommon = async (lang) => await common[lang]();
