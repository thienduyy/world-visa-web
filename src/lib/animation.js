export const fadeInUp = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			// delay: 0.5,
		},
	},
};
export const fadeInDown = {
	hidden: {
		opacity: 0,
		y: -100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			// delay: 0.5,
		},
	},
};

export const fadeInRight = {
	hidden: {
		opacity: 0,
		x: -200,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
			// delay: 0.5,
			type: 'spring',
			stiffness: 260,
			damping: 20,
		},
	},
};
export const fadeInLeft = {
	hidden: {
		opacity: 0,
		x: 200,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
			// delay: 0.5,
			type: 'spring',
			stiffness: 260,
			damping: 20,
		},
	},
};
