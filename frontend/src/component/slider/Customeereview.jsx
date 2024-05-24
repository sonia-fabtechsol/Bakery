import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Avatar from "@mui/material/Avatar";
import Rating from '@mui/material/Rating';

const Customeereview = () => {
    // const [rating, setRating] = useState(5);
    const data = [
        {
            id:1,
            img: require('../../img/profile1.webp'),
            name: "Sonia Rani",
            country: "Daska",
            rating: 5,
            comment: "Absolutely love this product! It exceeded my expectations.",
            date: "2024-04-29"
        },
        {
            id:2,
            img: require('../../img/profile1.webp'),
            name: "Sonia Rani",
            country: "Daska",  rating: 4,
            comment: "Great product overall, but it could use some improvements.",
            date: "2024-04-28"
        },
        {
            id:3,
            img: require('../../img/profile1.webp'),
            name: "Sonia Rani",
            country: "Daska",
            rating: 5,
            comment: "I've been using this product for months and it's still amazing!",
            date: "2024-04-27"
        },
    ];


    const CustomNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, backgroundColor: "#e76f51", borderRadius: "50%", padding: "1px", display: "block", position: "absolute", top: "50%", right: "-50px", transform: "translateY(-50%)" }}
                onClick={onClick}
            />
        );
    };

    const CustomPrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, backgroundColor: "#e76f51", borderRadius: "50%", padding: "1px", display: "block", position: "absolute", top: "50%", left: "-50px", transform: "translateY(-50%)" }}
                onClick={onClick}
            />
        );
    };
   

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };
   

    return (
        <Slider {...settings} className="">
            {data.map((items, index) => (
                <div key={items.id}>
                    <div className="d-flex align-items-center justify-content-center ">
                        <div className="col-lg-8 col-12 d-flex flex-column align-items-center justify-content-center">
                            <div className="" style={{ width: "150px", height: "150px" }}>
                                <Avatar
                                    alt="Customer"
                                    src={items.img}
                                    className="w-100 h-100 img-object-fit custom-border"
                                />
                            </div>
                            <p className="pt-5 fs-5 text-center">
                                {items.comment}
                            </p>
                            <Rating className="py-2" value={items.rating} readOnly />
                            <p className="  text-uppercase mb-0">
                                {items.name} -<span>{items.country}</span>
                            </p>
                            <p className="">{items.date}</p>
                    
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};




export default Customeereview;
