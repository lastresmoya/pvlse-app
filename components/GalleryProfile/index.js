import GalleryImage from './galleryImage'

export default function GalleryProfile() {
    return (
        <div>
            <div>
              <div>
                <h3 className="font-weight-bold">Gallery</h3>
              </div>
            </div>
            <div className="d-flex my-4">
              <div className="mx-2">
                  <GalleryImage
                  galleryImg="./img/profile/gallery-img.png"
                  />
                </div>
                <div className="mx-2">
                  <GalleryImage
                    galleryImg="./img/profile/gallery-img1.png"
                  />
                </div>
                <div className="mx-2">
                  <GalleryImage
                    galleryImg="./img/profile/gallery-img2.png"
                  />
                </div>
            </div>
            <div className="d-flex my-4">
              <div className="mx-2">
                  <GalleryImage
                  galleryImg="./img/profile/gallery-img3.png"
                  />
                </div>
                <div className="mx-2">
                  <GalleryImage
                    galleryImg="./img/profile/gallery-img4.png"
                  />
                </div>
                <div className="mx-2">
                  <GalleryImage
                    galleryImg="./img/profile/gallery-img5.png"
                  />
                </div>
            </div>
          </div>
    )
}