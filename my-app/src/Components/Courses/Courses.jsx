import React from 'react';
import styles from "./Courses.module.css";
import { NavLink } from "react-router-dom";
import { CourseCard } from '../CourseCard/CourseCard';

const links = [
    {
        link: "All Courses",
        to: "/"
    },
    {
        link: "The Newest",
        to: "/the-newest"
    },
    {
        link: "Top Rated",
        to: "/top-rated"
    },
    {
        link: "Most Popular",
        to: "/most-popular"
    }
]

const courseData = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png",
        name: "Learn Figma",
        author: "Christopher Morgan",
        time: "6h 30min",
        rating: "4.9",
    },
    {
        image: "http://cdn.onlinewebfonts.com/svg/img_158119.png",
        name: "Analog Photography",
        author: "Gordon Norman",
        time: "3h 15min",
        rating: "4.7",
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png",
        name: "Master Instagram",
        author: "Sophie Gill",
        time: "7h 40min",
        rating: "4.6",
    },
    {
        image: "data:image/png;base64,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",
        name: "Basics of drawing",
        author: "Jean Tate",
        time: "11h 30min",
        rating: "4.8",
    }
]

export function Courses() {
    return (
        <div >
            <div>
                <h1 className = { styles.h1 } >
                    Courses
                </h1>
            </div>
            <div className = { styles.link } >
                {
                    links.map((item) => {
                        return (
                            <NavLink
                                key = { item.link }
                                activeStyle={{ color: "black", fontWeight: "900" }}
                                style={{
                                    color: "gray",
                                    textDecoration: "none",
                                    fontSize: "18px",
                                }}
                                exact
                                to = { item.to }
                            >
                                { item.link }
                            </NavLink>
                        )
                    })
                }
            </div>
            <div>
                {
                    courseData.map((item) => {
                        return (
                            <CourseCard
                                key = { item.name }
                                name = { item.name }
                                author = { item.author }
                                image = { item.image }
                                time = { item.time }
                                rating = { item.rating }
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
