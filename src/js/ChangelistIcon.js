/**
 * Created by smita on 7/19/2016.
 */

var React = require('react');

var ChangelistIcon = React.createClass({


    componentWillMount: function () {

        (() => {
            switch (this.props.changeType) {
                case "build":
                {
                    (() => {
                        switch (this.props.iconState) {
                            case "Pending":
                                this.setState({iconSrc: './images/systemIcon1.png'});
                                break;
                            case "Accepted":
                                this.setState({iconSrc: './images/systemIcon2.png'});
                                break;
                            case "Complete":
                                this.setState({iconSrc: './images/systemIcon2.png'});
                                break;
                            default:
                                this.setState({iconSrc: './images/systemIcon1.png'});
                        }
                    })()
                }break;
                case "firewall":
                {
                    (() => {
                        switch (this.props.iconState) {
                            case "Running":
                                this.setState({iconSrc: './images/listIcon1.png'});
                                break;
                            case "Rejected":
                                this.setState({iconSrc: './images/listIcon2.png'});
                                break;
                            case "Accepted":
                                this.setState({iconSrc: './images/listIcon3.png'});
                                break;
                            default:
                                this.setState({iconSrc: './images/systemIcon1.png'});
                        }
                    })()
                }break;
                default:
                    this.setState({iconSrc: './images/systemIcon1.png'});
                    break;
            }
        })()
    }


    ,

    render:function() {

        return (<img src={this.state.iconSrc}/>);
    }

});
module.exports=ChangelistIcon;

