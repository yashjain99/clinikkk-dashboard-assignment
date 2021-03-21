import React, { useState } from 'react'
import { Graph } from './Graph';
import styles from "./stats.module.css";

export function Stats() {
    const [query, setQuery] = useState("");

    return (
        <div>
            <div className = { styles.displayFlexRow } >
                <div  className = { styles.searchDiv }>
                    <div>
                        <img className = { styles.searchIcon } src = "https://img.icons8.com/material-outlined/24/000000/search.png" alt = "Search"/>
                    </div>
                    <input 
                        className = { styles.input }
                        type = "text"
                        value = {query}
                        onChange = {(e) => setQuery(e.target.value)}
                    />
                </div>
                <div>
                    <img className = { styles.images } src="https://img.icons8.com/material-outlined/24/000000/alarm.png" alt = "Bell" />
                </div>
                <div>
                    <img className = { styles.images } src="https://img.icons8.com/material-outlined/25/000000/user--v1.png" alt = "User" />
                </div>
            </div>
            <div className = { styles.coursesInfoGrid } >
                <div >
                    <div>
                        <h1>
                            11
                        </h1>
                    </div>
                    <div>
                        Courses completed
                    </div>
                </div>
                <div >
                    <div>
                        <h1>
                            4
                        </h1>
                    </div>
                    <div>
                        Courses in progress
                    </div>
                </div>
            </div>
            <div>
                <h1 className = { styles.h1 } >
                    Your statistics
                </h1>
            </div>
            <div>
                <Graph />
            </div>
            <div className ={ styles.learnMoreGrid } >
                <div>
                    <div>
                        <h2 >
                            Learn even more!
                        </h2>
                    </div>
                    <div>
                        Unlock premium features <br/>
                        only for $9.99 per month.
                    </div>
                    <div>
                        <button className = { styles.premiumButton } >
                            Go Premium
                        </button>
                    </div>
                </div>
                <div>
                    <img src = "/Images/premium.png" alt = "Premium"/>
                </div>
            </div>
        </div>
    )
}
