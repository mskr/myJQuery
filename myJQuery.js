//

export default function my$(selector) {
	return Array.prototype.slice.call(document.querySelectorAll(selector));
}