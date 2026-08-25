import styles from "@/components/reUsable/styles/skipToMainContent.module.css"

export default function SkipToMainContent() {

    return (
        <a className={styles.skip_links} href="#main_content">
            Skip to main content
        </a>
    )
}