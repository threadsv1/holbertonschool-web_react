const getFullYear = () => {
    return new Date().getFullYear();
}

const getFooterCopy = (isIndex) => {
	if (isIndex === true) {
		return "Holberton School";
	} else {
		return "Holberton School main dashboard";
	}
}

module.exports = { getFullYear, getFooterCopy };