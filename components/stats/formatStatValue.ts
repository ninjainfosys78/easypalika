const FORMATTERS: Record<'en' | 'ne', Intl.NumberFormat> = {
    en: new Intl.NumberFormat('en-US'),
    ne: new Intl.NumberFormat('ne-NP'),
};

export function formatStatValue(value: number, lang: 'en' | 'ne') {
    return FORMATTERS[lang].format(value);
}
