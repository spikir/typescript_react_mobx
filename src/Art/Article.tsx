import React from 'react'

interface ArtProps {
    picLink: string;
    picTitle: string;
    picText: string;
}

export default class Article extends React.Component<ArtProps> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="article">
                <div className="artWrap">
                    <div className="articleImg">
                        <img className="listImg" src={this.props.picLink} />
                        <div className="overlay"></div>
                    </div>
                    <div className="articleText">
                        <div className="articleTextTitle">{this.props.picTitle}</div>
                    <div className="articleTextText">{this.props.picText}</div>
                    </div>
                </div>
            </div>
        );
    };
}