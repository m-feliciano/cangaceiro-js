export function controller(...selectors) {
    const elements = selectors.map(selector => {
        console.log(selector);
        document.querySelector(selector)
    });

    return function (constructor) {
        const defaultContructor = constructor;

        const newConstructor = function () {
            
            const instance = new defaultContructor(...elements);
            Object.getOwnPropertyNames(defaultContructor.prototype)
                .forEach(property => {
                    if (Reflect.hasMetadata('bindEvent', instance, property)) {
                        associateEvent(instance,
                            Reflect.getMetadata('bindEvent', instance, property
                        ));
                    }
                })
        }
        //	fix the prototype
        newConstructor.prototype = defaultContructor.prototype;
        //	returning a new constructor
        return newConstructor;
    }
}

function associateEvent(instance, metadata) {
    document
    .querySelector(metadata.selector)
    .addEventListener(metadata.event, event => {  
        if(metadata.prevent) event.preventDefault();
        instance[metadata.propertyKey](event);
    });
}