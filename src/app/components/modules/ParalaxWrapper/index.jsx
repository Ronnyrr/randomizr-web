import React, { Component } from 'react';
import PT from 'prop-types';
import { Parallax } from 'react-spring';
import { connect } from 'react-redux';

import { setCurrentPage } from 'ducks/ui';
import { Page } from 'common';

const icebreakerQuestions = [
    'Welke vakantie bestemming staat er op nr. 1 op jouw bucketlist?',
    'Zoet of hartig?', 'If you would have to work on a different job for a week, what would that be?',
    'What\'s your favorite soda?',
    'If you where an icebreaker how would you break the ice?',
    'Wat is jou guilty pleasure?',
    'Share an experience that changed your life.',
    'Lente, zomer, herfst of winter?', 'What subject did you hate most in school?',
    'If you would be able to spend infinite money for a day, what would you do?',
    'Mountain holidays or beach holidays?',
    'Waar kan iemand jou \'s nachts wakker voor maken?',
    'Waar zou je naar toe verhuizen als je alles wat je wilt kunt meenemen?',
    'Als je morgen wakker zou worden als een dier, welk dier zou je dan zijn?',
    'What was the name of your first pet?',
    'Are you a morning or night person?',
    'What\'s your favorite cartoon character, and why?',
    'If you could have an endless supply of any food, what would you get?',
    'Wat is je favoriete cartoonfiguur?',
    'Wat is het vreemdste wat je hebt gegeten?',
    'If someone made a movie of your life would it be a drama, a comedy, a romantic-comedy, action film, or science fiction?',
    'Als je één leuk, diep of groot moment uit je leven kon herbeleven, wat zou dat dan zijn?',
    'If you were an ice cream flavor, which one would you be and why?',
    'If someone is looking for a new TVseries to watch, which one would you recommend?',
    'Wat vind je de beste uitvinding tot nu toe?',
    'Wat is je favoriete comfort food?',
    'What is your favorite sport?',
    'How many languages do you speak?',
    'If you could complete in the olympics, what sport would it be?',
    'If you could meet a famous person, who would you meet?',
    'What is your favorite meal?',
    'If you would go back to school, which degree would you study?',
    'If you were an animal, what would you be and why?',
    'What is one goal you\'d like to accomplish during your lifetime?',
    'When you were little, who was your favorite super hero and why?',
    'Who is your hero? (a parent, a celebrity, an influential person in one\'s life)',
    'What\'s your favorite thing to do in the summer?',
    'If they made a movie of your life, what would it be about and which actor would you want to play you?',
    'If you could visit any place in the world, where would you choose to go and why',
    'What\'s the ideal dream job for you?',
    'What are your favorite hobbies?',
    'What are your pet peeves or interesting things about you that you dislike?',
    'What\'s the weirdest thing you\'ve ever eaten?',
];
const weeklyQuestions = [
    'Tell something about the PO! What do you like and how do you use this in communication?',
    'If there is a possibility for prototyping and testing in the project, what would it be?',
    'What would you build if you had another week?',
    'If there is one thing you could change in the project, what would you change?',
    'What does the client think of the project?',
    'What does the client think of the team?',
    'What does the client think of Label A?',
    'What is the end goal of the project?',
    'Name a KPI of the client.',
    'How does your work impact the clients business?',
    'What is the biggest tech trend for the clients business?',
    'Name a moment when working agile really was an advantage.',
    'Share your last  meeting that should have been an e-mail.',
    'Share your last  e-mail that should have been a meeting',
    'What would Bram say about the project if he was still here?',
    'Could SysOps tell what the project is about in 1 sentence? If not tell them?',
    'If you should give one person a compliment in the project. All point at 1 in 3...2...1... and why?',
    'Who\'s expertise could you use on the team and why?',
    'How many sprints are left and when is the deadline (for a mayor release)?',
    'When development ends what will be our role?',
    'What kind of candy are you designing or thinking about?',
    'When did you underpromise overdeliver for the last time?',
    'How to bond more with the client?',
    'Explain the best feature of the application.',
    'Whom of your relatives would use the app and why?',
];
const designChallenges = [
    'Design a music player. Consider the controls, imagery, the artist, album cover, etc',
];

class ParalaxWrapper extends Component {
    scrollPage = (to) => {
        this.parallax.scrollTo(to);
        this.props.setCurrentPage(to);
    };

    render() {
        return (
            <Parallax
                pages={3}
                ref={(p) => { this.parallax = p; }}
                horizontal
                scrolling={false}
            >
                <Page
                    offset={0}
                    title="Weekly Standup"
                    questions={weeklyQuestions}
                    nextPage={this.scrollPage}
                />

                <Page
                    offset={1}
                    title="Icebreakers"
                    questions={icebreakerQuestions}
                    previousPage={this.scrollPage}
                    nextPage={this.scrollPage}
                />

                <Page
                    offset={2}
                    title="Design Challenges"
                    questions={designChallenges}
                    previousPage={this.scrollPage}
                />
            </Parallax>
        );
    }
}

ParalaxWrapper.propTypes = {
    setCurrentPage: PT.func,
};

export default connect(
    null,
    { setCurrentPage },
)(ParalaxWrapper);
