import { rules, createComparison } from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    const compare = createComparison({
        skipEmptyTargetValues: true,
        rules: [
            rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)
        ]
    });

    return (data, state, action) => {
        // Применяем компаратор к каждому элементу данных
        return data.filter(item => compare(item));
    };
}