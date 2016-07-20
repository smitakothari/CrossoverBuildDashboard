/**
 * Created by smita on 7/19/2016.
 */

var React = require('react');

var Result = React.createClass({

    componentWillMount: function () {

        (() => {
            switch (this.props.state) {
                case "Running":
                    this.setState({changeState: 'Element is still Running'});
                    this.setState({changeMessage: ''});
                    this.setState({buttonText: ''});
                    break;

                case "Accepted":
                    this.setState({changeState: 'Change Accepted'});
                    this.setState({changeMessage: 'Auto Merged'});
                    this.setState({buttonText: 'Merged Build'});
                    break;

                case "Complete":
                    this.setState({changeState: 'Complete'});
                    this.setState({changeMessage: ''});
                    this.setState({buttonText: 'Deploy'});
                    break;

                case "Rejected":
                    this.setState({changeState: 'Change Rejected'});
                    this.setState({changeMessage: 'Metrics Reduction'});
                    this.setState({buttonText: 'Find Issues'});
                    break;

                default:
                    this.setState({changeState: ''});
                    this.setState({changeMessage: ''});
                    this.setState({buttonText: ''});
                    break;
            }
        })()
    },

    render:function() {

        return (
            <div className="subRowAlign">
                {this.props.build !== 'Pending' ?
                    <div>
                        <div className="subRowAlign">
                            <label>Result:</label>
                        </div>
                        <div className="subRowAlign">
                            <label>{this.state.changeState}</label>
                        </div>
                        <div className="subRowAlign">
                            <label>{this.state.changeMessage}</label>
                        </div>
                        <button type="button" class="btn btn-primary">{this.state.buttonText}</button>
                        {this.props.state === 'Complete' ?
                            <div>
                                <label>to:</label>
                                <div class="dropdown">
                                    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        Production
                                        <span class="caret">
                                        </span>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li>Server1</li>
                                        <li>Server2</li>
                                        <li>Server3</li>
                                    </ul>
                                </div>
                            </div>
                            :null
                        }
                    </div>:
                    <div className="metricsMainBlock">
                        <label>Result:</label>
                        <div>
                            <label>Results are pending</label>
                        </div>
                    </div>
                }
            </div>
        );
    }

});
module.exports= Result;

