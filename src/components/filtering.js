// import { createComparison, defaultRules } from "../lib/compare.js";

export function initFiltering(elements) {
    // @todo: #4.1 — заполнить выпадающие списки опциями
    const updateIndexes = (elements, indexes) => {
        Object.keys(indexes).forEach((elementName) => {
            elements[elementName].append(...Object.values(indexes[elementName]).map(name => {
                const el = document.createElement('option');
                el.textContent = name;
                el.value = name;
                return el;
            }))
        })
    }
    const applyFiltering = (query, state, action) => {
        // @todo: #4.5 — отфильтровать данные
        const filter = {};
        Object.keys(elements).forEach(key => {
            if (elements[key] && ['INPUT', 'SELECT'].includes(elements[key].tagName) && elements[key].value) {
                filter[`filter[${elements[key].name}]`] = elements[key].value;
            }
        })

        return Object.keys(filter).length ? Object.assign({}, query, filter) : query;
    }

    return {
        updateIndexes,
        applyFiltering
    };
}
//     // @todo: #4.3 — настроить компаратор
//     const compare = createComparison(defaultRules);

//     return (data, state, action) => {

//         // @todo: #4.5 — отфильтровать данные используя компаратор
//         return data.filter(row => compare(row, state));
//     };
// }
