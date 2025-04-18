export enum Theme {
    Dark = 'dark',
    Light = 'light',
}

export function themeClassesOf(theme: Theme): Array<string> {
    return ['std-root', `std-theme-${theme}`, 'std-text', 'std-color-fg1', 'std-background-bg1']
}

export function mapTheme<D, L>(theme: Theme, matches: {dark: D, light: L}): D | L {
    switch (theme) {
        case Theme.Dark: return matches.dark
        case Theme.Light: return matches.light
    }
}
