import React, { Component } from 'react'
import languages from '../../languages'

export default class SelectLanguage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            language: "All"
        }

    }

    onSelectLanguage(language) {
        this.setState({
            language: language
        })
        this.props.onSelectLanguage(language)
    }

    render() {
        return (
            <ul className="languages">
                {
                    languages.map((language, index) => {
                        return (
                            <li
                                key={index}
                                className={`${this.state.language === language ? 'language-select ' : ''}`}
                                onClick={() => {this.onSelectLanguage(language)}}
                            >
                                {language}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
