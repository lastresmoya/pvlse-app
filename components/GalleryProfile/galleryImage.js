import styles from'../../styles/profile.module.scss'

export default function GalleryImage({
    galleryImg,
}) {
    return (
        <div className={`${styles.card_profile} card my-3`}>
                    <img src={galleryImg} alt="..." />
        </div>
    )
}
