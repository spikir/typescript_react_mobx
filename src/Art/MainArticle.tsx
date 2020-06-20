import React from 'react'

interface MainArtrProps {
    picLink: string;
    picTitle: string;
}

export default class MainArticle extends React.Component<MainArtrProps> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="containerMainPic">
                <div className="containerMainArticleTitle">
                    <img className="mainPicArt" src={this.props.picLink} />
                    <div className="mainArticleTitle">
                        {this.props.picTitle}
                    </div>
                </div>
            </div>
        );
    };
}