class ProxyFactory {
	static create(object, props, trigger) {
		return new Proxy(object, {
			get(target, prop, receiver) {
				if (ProxyFactory._isFunction(target[prop]) && props.includes(prop)) {
					return function () {
						console.log(`${prop} trigged`);
						target[prop].apply(target, arguments);
						trigger(target);
					};
				} else {
					return target[prop];
				}
			},
			set(target, prop, value, receiver) {
				const updated = Reflect.set(target, prop, value);

				if (props.includes(prop)) trigger(target);
				return updated;
			},
		});
	}

	static _isFunction(fn) {
		return typeof fn == typeof Function;
	}
}
