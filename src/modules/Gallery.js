import Collage from "./Collage";

const GALLERY_FOLDER_PATH = "../res/pictures/gallery/"

const images = [
    {
        bucket: 1,
        image: require("../res/pictures/gallery/31.jpg")
    },
    {
        bucket: 1,
        image: require("../res/pictures/gallery/54.jpg")
    },
    {
        bucket: 1,
        image: require("../res/pictures/gallery/9.jpg")
    },
    {
        bucket: 2,
        image: require("../res/pictures/gallery/58.jpg")
    },
    {
        bucket: 2,
        image: require("../res/pictures/gallery/59.jpg")
    },
    {
        bucket: 0,
        image: require("../res/pictures/gallery/20.jpg")
    },
    {
        bucket: 0,
        image: require("../res/pictures/gallery/60.jpg")
    },
    {
        bucket: 3,
        image: require("../res/pictures/gallery/56.jpg")
    },
    {
        bucket: 3,
        image: require("../res/pictures/gallery/52.png")
    },
    {
        bucket: 3,
        image: require("../res/pictures/gallery/57.jpg")
    },
    {
        bucket: 3,
        image: require("../res/pictures/gallery/5.jpg")
    },
    {
        bucket: 0,
        image: require("../res/pictures/gallery/2.jpg")
    },
    {
        bucket: 0,
        image: require("../res/pictures/gallery/40.jpg")
    },
    {
        bucket: 1,
        image: require("../res/pictures/gallery/17.jpg")
    },
    {
        bucket: 2,
        image: require("../res/pictures/gallery/49.jpg")
    },
    {
        bucket: 2,
        image: require("../res/pictures/gallery/38.jpg")
    },
    {
        bucket: 3,
        image: require("../res/pictures/gallery/26.jpg")
    },
    {
        bucket: 1,
        image: require("../res/pictures/gallery/10.jpg")
    },
    {
        bucket: 1,
        image: require("../res/pictures/gallery/48.jpg")
    },
    {
        bucket: 3,
        image: require("../res/pictures/gallery/12.jpg")
    },
    {
        bucket: 0,
        image: require("../res/pictures/gallery/13.jpg")
    },
    {
        bucket: 0,
        image: require("../res/pictures/gallery/14.jpg")
    },
    {
        bucket: 0,
        image: require("../res/pictures/gallery/47.jpg")
    },
    {
        bucket: 2,
        image: require("../res/pictures/gallery/15.jpg")
    },
    {
        bucket: 2,
        image: require("../res/pictures/gallery/46.jpg")
    },
    {
        bucket: 2,
        image: require("../res/pictures/gallery/44.jpg")
    },
    {
        bucket: 2,
        image: require("../res/pictures/gallery/11.jpg")
    },
    {
        bucket: 3,
        image: require("../res/pictures/gallery/32.jpg")
    },
]


export default function Gallery() {
    return <Collage>
        <div className="collage-collumn">
            {
                images.map((image) => { 
                    if(image.bucket !== 0) return null;
                    return <img className="collage-image" src={image.image} alt="" loading="lazy"/>
                })
            }
        </div>
        <div className="collage-collumn">
            {
                images.map((image) => { 
                    if(image.bucket !== 1) return null;
                    return <img className="collage-image" src={image.image} alt="" loading="lazy"/>
                })
            }
        </div>
        <div className="collage-collumn">
            {
                images.map((image) => { 
                    if(image.bucket !== 2) return null;
                    return <img className="collage-image" src={image.image} alt="" loading="lazy"/>
                })
            }
        </div>
        <div className="collage-collumn">
            {
                images.map((image) => { 
                    if(image.bucket !== 3) return null;
                    return <img className="collage-image" src={image.image} alt="" loading="lazy"/>
                })
            }
        </div>
    </Collage>
}