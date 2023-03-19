export default interface PropTypes {
    /* half section title */

    onChange?: (selectedTab: string, key: number, e?: React.MouseEvent<HTMLElement>) => void
    tabs: Array<string>
    activeTab?: string
    changed?: boolean
}
