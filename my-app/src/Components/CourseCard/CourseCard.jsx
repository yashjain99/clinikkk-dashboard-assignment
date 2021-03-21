import React from 'react'
import styles from "./CourseCard.module.css";

export function CourseCard({image, name, author, time, rating}) {
    return (
        <div className = { styles.cont } >
            <div>
                <img className = { styles.logo } src = { image } alt = { name } />
            </div>
            <div>
                <div className = { styles.name } >
                    <strong>
                        { name }
                    </strong>
                </div>
                <div>
                    by { author }
                </div>
            </div>
            <div>
                <img className = { styles.img } src = "https://www.shareicon.net/data/2015/09/03/95411_clock_1024x1024.png" alt = "Time"/>
                { time }
            </div>
            <div>
                <img className = { styles.img } src = "https://images.vexels.com/media/users/3/137272/isolated/preview/9ba6000d463c940cd440e04fdab8e44e-flame-fire-black-contour-by-vexels.png" alt = "Rating"/>
                { rating }
            </div>
            <div>
                <button className = { styles.viewCourseButton } >
                    View Course
                </button>
            </div>
        </div>
    )
}
