import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import ReactFullpage from "@fullpage/react-fullpage";
import styles from "../../styles/About.module.scss";

function About(props) {
    return (
        <ReactFullpage
            scrollingSpeed={1000} /* Options here */
            scrollHorizontally={true}
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <h1 className={styles.title}>
                                Welcome to
                                <a href="https://nextjs.org">Next.js!</a>
                            </h1>
                            <p className={styles.dayne}>Welcome to</p>
                            <button
                                onClick={() => fullpageApi.moveSectionDown()}
                            >
                                Click me to move down
                            </button>
                        </div>
                        <div className="section">
                            <p>Section 2</p>
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
}

About.propTypes = {};

export default About;
