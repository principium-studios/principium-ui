import { tabsVariants } from "@principium/theme";

// _______________________________________ Tabs _______________________________________
interface TabsProps {
    children: React.ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
    return (
        <div className={tabsVariants.base({})}>
            {children}
        </div>
    )
}
