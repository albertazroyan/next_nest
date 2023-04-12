export default interface PropTypes {
    /* half section title */
    
    // A function that is called when a tab is selected
    onChange: (selectedTab: string, key: number, e?: React.MouseEvent<HTMLElement>) => void
    
    // An array of strings that represent the tabs to be displayed
    tabs: Array<string>

    // The tab that should be active by default
    activeTab?: string

    // A boolean indicating whether a tab has been changed
    changed?: boolean
}
