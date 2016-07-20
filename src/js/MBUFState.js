/**
 * Created by smita on 7/20/2016.
 */

var React = require('react');

var MBUFState = React.createClass({


    componentWillMount: function () {


        {
            (() => {
                switch (this.props.metrics) {
                    case "Pending":
                        this.setState({metricStateIconSrc: './images/greyBox.png'});
                        break;
                    case "Accepted":
                        this.setState({metricStateIconSrc: './images/greenBox.png'});
                        break;
                    case "Complete":
                        this.setState({metricStateIconSrc: './images/greenBox.png'});
                        break;
                    case "Running":
                        this.setState({metricStateIconSrc: './images/blueBox.png'});
                        break;
                    case "Rejected":
                        this.setState({metricStateIconSrc: './images/redBox.png'});
                        break;
                    default:
                        this.setState({metricStateIconSrc: './images/greyBox.png'});
                }
            })()
        }

        {

            (() => {
                switch (this.props.build) {
                    case "Pending":
                        this.setState({buildStateIconSrc: './images/greyBox.png'});
                        break;
                    case "Accepted":
                        this.setState({buildStateIconSrc: './images/greenBox.png'});
                        break;
                    case "Complete":
                        this.setState({buildStateIconSrc: './images/greenBox.png'});
                        break;
                    case "Running":
                        this.setState({buildStateIconSrc: './images/blueBox.png'});
                        break;
                    case "Rejected":
                        this.setState({buildStateIconSrc: './images/redBox.png'});
                        break;
                    default:
                        this.setState({buildStateIconSrc: './images/greyBox.png'});
                }
            })()
        }

        {
            (() => {
                switch (this.props.unitTest) {
                    case "Pending":
                        this.setState({unitTestStateIconSrc: './images/greyBox.png'});
                        break;
                    case "Accepted":
                        this.setState({unitTestStateIconSrc: './images/greenBox.png'});
                        break;
                    case "Complete":
                        this.setState({unitTestStateIconSrc: './images/greenBox.png'});
                        break;
                    case "Running":
                        this.setState({unitTestStateIconSrc: './images/blueBox.png'});
                        break;
                    case "Rejected":
                        this.setState({unitTestStateIconSrc: './images/redBox.png'});
                        break;
                    default:
                        this.setState({unitTestStateIconSrc: './images/greyBox.png'});
                }
            })()
        }

        {
            (() => {
                switch (this.props.functionalTest) {
                    case "Pending":
                        this.setState({functionalTestStateIconSrc: './images/greyBox.png'});
                        break;
                    case "Accepted":
                        this.setState({functionalTestStateIconSrc: './images/greenBox.png'});
                        break;
                    case "Complete":
                        this.setState({functionalTestStateIconSrc: './images/greenBox.png'});
                        break;
                    case "Running":
                        this.setState({functionalTestStateIconSrc: './images/blueBox.png'});
                        break;
                    case "Rejected":
                        this.setState({functionalTestStateIconSrc: './images/redBox.png'});
                        break;
                    default:
                        this.setState({functionalTestStateIconSrc: './images/greyBox.png'});
                }
            })()
        }
    }


    ,

    render:function() {

        return (
            <div>
                <div className="col-sm-1"><img src={this.state.metricStateIconSrc}/></div>
            <div className="col-sm-1"><img src={this.state.buildStateIconSrc}/></div>
            <div className="col-sm-1"><img src={this.state.unitTestStateIconSrc}/></div>
            <div className="col-sm-1"><img src={this.state.functionalTestStateIconSrc}/></div></div>);
    }

});
module.exports=MBUFState;


