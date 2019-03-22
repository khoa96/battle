import React, { Component } from 'react'
import SelectLanguage from './SelectLanguage';
import Popular from './Popular';
import { getPopularList } from '../api/PopularAPI';
import Loading from '../components/loading/Loading';


export default class PopularList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            populars: [],
            isLoading: false

        }
        this.onSelectLanguage = this.onSelectLanguage.bind(this)
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        getPopularList('all').then(response => {
            const populars = response.items;
            if (populars.length > 0) {
                console.log(populars)
                this.setState({
                    populars: populars,
                    isLoading: false
                })
            }
        })
    }

    onSelectLanguage(language) {
        this.setState({
            isLoading: true
        })
        getPopularList(language).then(response => {
            const populars = response.items;
            if (populars.length > 0) {
                this.setState({
                    populars: populars,
                    isLoading: false
                })
            }
        })
    }

    render() {
        const { populars, isLoading } = this.state;
        return (
            <React.Fragment>
                <SelectLanguage onSelectLanguage={this.onSelectLanguage} />
                { isLoading ? <Loading/> : ''}
                <ul className="popular-list">
                    {
                        populars.map((popular, index) => {
                            return (
                                <Popular
                                    key={popular.id}
                                    index={index + 1}
                                    popular={popular}
                                />
                            )
                        })
                    }
                </ul>
            </React.Fragment>
        )
    }
}
