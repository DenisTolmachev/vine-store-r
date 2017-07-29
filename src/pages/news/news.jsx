import React from 'react';
import './news.scss'

const added_news = [
    {
        image: '../img/grapes4.png',
        title: 'победа на выставке 1',
        prev: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis, metus sit amet eleifend mattis, ante augue euismod lectus, quis fringilla ante nisi vel lorem. Nunc blandit lobortis rutrum. Suspendisse cursus lorem ut diam placerat, et egestas ex posuere. Cras aliquam vel est vitae laoreet. Proin eget tincidunt urna. Ut condimentum eros ac dui tempus, ut porta nulla tempor. Morbi faucibus lorem ex, ut semper nunc sollicitudin eget.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis, metus sit amet eleifend mattis, ante augue euismod lectus, quis fringilla ante nisi vel lorem. Nunc blandit lobortis rutrum. Suspendisse cursus lorem ut diam placerat, et egestas ex posuere. Cras aliquam vel est vitae laoreet. Proin eget tincidunt urna. Ut condimentum eros ac dui tempus, ut porta nulla tempor. Morbi faucibus lorem ex, ut semper nunc sollicitudin eget. Aenean maximus massa augue, eget tincidunt enim ultrices et. Donec tincidunt, felis at vestibulum vestibulum, massa odio tempor magna, at posuere nulla lectus at sem. Quisque ullamcorper id odio id sodales. Morbi aliquet vitae quam sit amet finibus. Etiam quis libero ornare, mollis felis non, dignissim nisi. Donec sed posuere odio. Aenean et lacus quis leo elementum volutpat pharetra nec metus. Cras accumsan nisi et nisi dapibus, nec efficitur mauris rhoncus. Sed mi mi, viverra sit amet libero in, rhoncus viverra risus.'
    },
    {
        image: '../img/grapes4.png',
        title: 'победа на выставке 2',
        prev: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis, metus sit amet eleifend mattis, ante augue euismod lectus, quis fringilla ante nisi vel lorem. Nunc blandit lobortis rutrum. Suspendisse cursus lorem ut diam placerat, et egestas ex posuere. Cras aliquam vel est vitae laoreet. Proin eget tincidunt urna. Ut condimentum eros ac dui tempus, ut porta nulla tempor. Morbi faucibus lorem ex, ut semper nunc sollicitudin eget.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis, metus sit amet eleifend mattis, ante augue euismod lectus, quis fringilla ante nisi vel lorem. Nunc blandit lobortis rutrum. Suspendisse cursus lorem ut diam placerat, et egestas ex posuere. Cras aliquam vel est vitae laoreet. Proin eget tincidunt urna. Ut condimentum eros ac dui tempus, ut porta nulla tempor. Morbi faucibus lorem ex, ut semper nunc sollicitudin eget. Aenean maximus massa augue, eget tincidunt enim ultrices et. Donec tincidunt, felis at vestibulum vestibulum, massa odio tempor magna, at posuere nulla lectus at sem. Quisque ullamcorper id odio id sodales. Morbi aliquet vitae quam sit amet finibus. Etiam quis libero ornare, mollis felis non, dignissim nisi. Donec sed posuere odio. Aenean et lacus quis leo elementum volutpat pharetra nec metus. Cras accumsan nisi et nisi dapibus, nec efficitur mauris rhoncus. Sed mi mi, viverra sit amet libero in, rhoncus viverra risus.'

    },
    {
        image: '../img/grapes4.png',
        title: 'победа на выставке 3',
        prev: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis, metus sit amet eleifend mattis, ante augue euismod lectus, quis fringilla ante nisi vel lorem. Nunc blandit lobortis rutrum. Suspendisse cursus lorem ut diam placerat, et egestas ex posuere. Cras aliquam vel est vitae laoreet. Proin eget tincidunt urna. Ut condimentum eros ac dui tempus, ut porta nulla tempor. Morbi faucibus lorem ex, ut semper nunc sollicitudin eget.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis, metus sit amet eleifend mattis, ante augue euismod lectus, quis fringilla ante nisi vel lorem. Nunc blandit lobortis rutrum. Suspendisse cursus lorem ut diam placerat, et egestas ex posuere. Cras aliquam vel est vitae laoreet. Proin eget tincidunt urna. Ut condimentum eros ac dui tempus, ut porta nulla tempor. Morbi faucibus lorem ex, ut semper nunc sollicitudin eget. Aenean maximus massa augue, eget tincidunt enim ultrices et. Donec tincidunt, felis at vestibulum vestibulum, massa odio tempor magna, at posuere nulla lectus at sem. Quisque ullamcorper id odio id sodales. Morbi aliquet vitae quam sit amet finibus. Etiam quis libero ornare, mollis felis non, dignissim nisi. Donec sed posuere odio. Aenean et lacus quis leo elementum volutpat pharetra nec metus. Cras accumsan nisi et nisi dapibus, nec efficitur mauris rhoncus. Sed mi mi, viverra sit amet libero in, rhoncus viverra risus.'
    },
    {
        image: '../img/grapes4.png',
        title: 'победа на выставке 3',
        prev: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis, metus sit amet eleifend mattis, ante augue euismod lectus, quis fringilla ante nisi vel lorem. Nunc blandit lobortis rutrum. Suspendisse cursus lorem ut diam placerat, et egestas ex posuere. Cras aliquam vel est vitae laoreet. Proin eget tincidunt urna. Ut condimentum eros ac dui tempus, ut porta nulla tempor. Morbi faucibus lorem ex, ut semper nunc sollicitudin eget.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis, metus sit amet eleifend mattis, ante augue euismod lectus, quis fringilla ante nisi vel lorem. Nunc blandit lobortis rutrum. Suspendisse cursus lorem ut diam placerat, et egestas ex posuere. Cras aliquam vel est vitae laoreet. Proin eget tincidunt urna. Ut condimentum eros ac dui tempus, ut porta nulla tempor. Morbi faucibus lorem ex, ut semper nunc sollicitudin eget. Aenean maximus massa augue, eget tincidunt enim ultrices et. Donec tincidunt, felis at vestibulum vestibulum, massa odio tempor magna, at posuere nulla lectus at sem. Quisque ullamcorper id odio id sodales. Morbi aliquet vitae quam sit amet finibus. Etiam quis libero ornare, mollis felis non, dignissim nisi. Donec sed posuere odio. Aenean et lacus quis leo elementum volutpat pharetra nec metus. Cras accumsan nisi et nisi dapibus, nec efficitur mauris rhoncus. Sed mi mi, viverra sit amet libero in, rhoncus viverra risus.'
    },
    {
        image: '../img/grapes4.png',
        title: 'победа на выставке 4',
        prev: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis, metus sit amet eleifend mattis, ante augue euismod lectus, quis fringilla ante nisi vel lorem. Nunc blandit lobortis rutrum. Suspendisse cursus lorem ut diam placerat, et egestas ex posuere. Cras aliquam vel est vitae laoreet. Proin eget tincidunt urna. Ut condimentum eros ac dui tempus, ut porta nulla tempor. Morbi faucibus lorem ex, ut semper nunc sollicitudin eget.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis, metus sit amet eleifend mattis, ante augue euismod lectus, quis fringilla ante nisi vel lorem. Nunc blandit lobortis rutrum. Suspendisse cursus lorem ut diam placerat, et egestas ex posuere. Cras aliquam vel est vitae laoreet. Proin eget tincidunt urna. Ut condimentum eros ac dui tempus, ut porta nulla tempor. Morbi faucibus lorem ex, ut semper nunc sollicitudin eget. Aenean maximus massa augue, eget tincidunt enim ultrices et. Donec tincidunt, felis at vestibulum vestibulum, massa odio tempor magna, at posuere nulla lectus at sem. Quisque ullamcorper id odio id sodales. Morbi aliquet vitae quam sit amet finibus. Etiam quis libero ornare, mollis felis non, dignissim nisi. Donec sed posuere odio. Aenean et lacus quis leo elementum volutpat pharetra nec metus. Cras accumsan nisi et nisi dapibus, nec efficitur mauris rhoncus. Sed mi mi, viverra sit amet libero in, rhoncus viverra risus.'
    }
];

const Article = React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            prev: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired
        })
    },
    getInitialState: function () {
        return {
            visible: false
        };
    },
    readmoreClick: function (e) {
        e.preventDefault();
        this.setState({visible: true});
    },
    readminClick: function (a) {
        a.preventDefault();
        this.setState({visible: false});
    },
    render: function () {
        const image = this.props.data.image,
            title = this.props.data.title,
            prev = this.props.data.prev,
            text = this.props.data.text,
            visible = this.state.visible;

        return (
            <div className="article">
                <div className="news__image">
                    <img src={image}/>
                </div>
                <div className="news__post">
                    <p className="news__title">{title}</p>
                    <p className={'news_prev ' + (visible ? 'none' : '')}>{prev}</p>
                    <a href="#" onClick={this.readmoreClick} className={'news_readmore ' + (visible ? 'none ' : '') + 'down'}/>
                    <p className={'news_text ' + (visible ? '' : 'none')}>{text}</p>
                    <a href="#" onClick={this.readminClick} className={'news_readmore ' + (visible ? '' : 'none ') + 'up'}/>
                </div>
            </div>
        )
    }
});

const News = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },
    render: function () {
        const data = this.props.data;
        let newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function (item, index) {
                return (
                    <div key={index}>
                        <Article data={item}/>
                    </div>
                )
            })
        }
        else {
            newsTemplate = <p>Новостей нет</p>
        }
        return (
            <div className="news">
                {newsTemplate}
                <strong className={'news__count ' + (data.length > 0 ? '' : 'none')}>Всего
                    новостей: {data.length}</strong>
            </div>
        )
    }
});

const NewsApp = React.createClass({
    render: function () {
        return (
            <div className="app">
                <News data={added_news}/>
            </div>
        );
    }
});

export default NewsApp;