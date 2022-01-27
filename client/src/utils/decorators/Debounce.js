export function debounce(milissegundos = 500) {
	return function (target, key, descriptor) {
		const defaultMethod = descriptor.value;
		let timer = 0;
		descriptor.value = function (...args) {
			if (event) event.preventDefault();
			clearTimeout(timer);
		}
		timer = setTimeout(() => defaultMethod.apply(this, args, milissegundos));
		return descriptor;
	};
}
