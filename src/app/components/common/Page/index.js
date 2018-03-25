import React, { Fragment } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { Parallax } from 'react-spring';

import { Header, RandomText } from 'common';

const Page = ({
    currentPage,
    offset,
    questions,
    title,
    ui,
    ...props
}) => {
    const navigationProps = {};

    if (props.previousPage) {
        navigationProps.previousPage = () => props.previousPage(ui.currentPage - 1);
    }

    if (props.nextPage) {
        navigationProps.nextPage = () => props.nextPage(ui.currentPage + 1);
    }

    return (
        <Fragment>
            <Parallax.Layer
                offset={offset}
                speed={0.4}
            >
                <Header
                    title={title}
                    {...navigationProps}
                />
            </Parallax.Layer>

            <Parallax.Layer
                offset={offset}
                speed={0.8}
                style={{
                    top: '43vh',
                }}
            >
                <RandomText
                    wordsArray={questions}
                />
            </Parallax.Layer>
        </Fragment>
    );
};

Page.propTypes = {
    colors: PT.array,
    currentPage: PT.number,
    offset: PT.number,
    previousPage: PT.func,
    nextPage: PT.func,
    questions: PT.array,
    title: PT.string,
    ui: PT.shape({
        currentPage: PT.number,
    }),
};

export default connect(state => ({ ui: state.ui }))(Page);
