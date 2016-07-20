/**
 * Created by smita on 7/17/2016.
 */

var React = require('react');
var Griddle = require('griddle-react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var MetricDetails = require('./MetricDetails');
var BuildDetails = require('./BuildDetails');
var UnitTestDetails = require('./UnitTestDetails');
var ChangelistIcon = require('./ChangelistIcon');
var FunctionalTestDetails = require('./FunctionalTestDetails');
var Result = require('./Result');
var MBUFState = require('./MBUFState');

var main = React.createClass({

    getInitialState: function () {
        return {subRowFlag: ''};
    },

    enableSubrow: function (a) {
        {
            (() => {
                switch (a) {
                    case a:
                        this.setState({subRowFlag: a});
                        break;
                    default:
                        this.setState({subRowFlag: ''});
                }
            })()
        }
    },

    componentDidMount: function () {
        this.serverRequest = $.get('./data/BuildData.json', function (result) {
            this.setState({resultData: result});
        }.bind(this));
    },

    componentWillUnmount: function () {

    },

    componentWillMount: function () {
        this.serverRequest = $.get('./data/BuildData.json', function (result) {
            console.log('result: ' + result);
            this.setState({resultData: result});
        }.bind(this));


    },

    dynamicColor : function(currentState) {
        return (
            (() => {
                switch (currentState) {
                    case "Pending":
                        return "Grey";
                    case "Running":
                        return "Blue";
                    case "Rejected":
                        return "Red";
                    case "Accepted":
                        return "Green";
                    case "Complete":
                        return "Green";
                    default:
                        return "Grey";
                }
            })()

        )
    },

    dynamicOutline : function(currentState) {
        return (
            (() => {
                switch (currentState) {
                    case "Pending":
                        return "2px solid Grey";
                    case "Running":
                        return "2px solid Blue";
                    case "Rejected":
                        return "2px solid Red";
                    case "Accepted":
                        return "2px solid Green";
                    case "Complete":
                        return "2px solid Green";
                    default:
                        return "2px solid Grey";
                }
            })()

        )
    },


    render: function () {
        var divStyle = {
            marginBottom: '1%'
            //display: 'block',
            //MozBoxShadow: '0px 2px 2px red',
            //WebkitBoxShadow: '0px 2px 2px red',
            // boxShadow: '0px 2px 2px red',
            //width:'100%',
        };


        var indents = [];
        var size = _.size(this.state.resultData);
        for (var i = 0; i < size; i++) {
            indents.push(
                <div>
                    {this.state.resultData[i].subRowid === this.state.subRowFlag ?
                        <div className="row"
                             style={{color:this.dynamicColor(this.state.resultData[i].state),
                             outline:this.dynamicOutline(this.state.resultData[i].state), marginBottom:"1%"}} >
                            <div className="row subRowAlign" onClick={this.enableSubrow.bind(this, i)} >
                                <div className="col-sm-2">
                                    <ChangelistIcon iconState={this.state.resultData[i].state}
                                                    changeType={this.state.resultData[i].type}>
                                    </ChangelistIcon>
                                    { this.state.resultData[i].itemName }
                                </div>
                                <div className="col-sm-2">{ this.state.resultData[i].owner }</div>
                                <div className="col-sm-2">{ this.state.resultData[i].timeStarted }</div>
                                <div className="col-sm-2">{ this.state.resultData[i].state }</div>
                                <div className="col-sm-1"></div>
                                <div className="col-sm-1"></div>
                                <div className="col-sm-1"></div>
                                <div className="col-sm-1"></div>
                            </div>
                            <div className="row subRowAlign">
                                <div className="col-sm-3">
                                    <MetricDetails
                                        metrics={this.state.resultData[i].metrics}
                                        metricsTestState={this.state.resultData[i].metricsTestState}
                                        metricsMaintainabilityState={this.state.resultData[i].metricsMaintainabilityState}
                                        metricsSecurity={this.state.resultData[i].metricsSecurity}
                                        metricsWorkmanship={this.state.resultData[i].metricsWorkmanship}>
                                    </MetricDetails>
                                </div>
                                <div className="col-sm-3">
                                    <BuildDetails
                                        build={this.state.resultData[i].build}
                                        buildReleaseTime={this.state.resultData[i].buildReleaseTime}>
                                    </BuildDetails>
                                </div>
                                <div className="col-sm-2">
                                        <UnitTestDetails
                                            unitTest={this.state.resultData[i].unitTest}
                                            unitTestPass={this.state.resultData[i].unitTestPass}
                                            unitTestFail={this.state.resultData[i].unitTestFail}
                                            unitTestPercent={this.state.resultData[i].unitTestPercent}
                                            unitTestCodeCovered={this.state.resultData[i].unitTestCodeCovered}>
                                        </UnitTestDetails>
                                </div>
                                <div className="col-sm-2">
                                    <FunctionalTestDetails
                                        functionalTest={this.state.resultData[i].functionalTest}
                                        functionalTestPass={this.state.resultData[i].functionalTestPass}
                                        functionalTestFail={this.state.resultData[i].functionalTestFail}
                                        functionalTestPercent={this.state.resultData[i].functionalTestPercent}
                                        functionalTestCodeCovered={this.state.resultData[i].functionalTestCodeCovered}>
                                    </FunctionalTestDetails>
                                </div>
                                <div className="col-sm-2">
                                    <Result state={this.state.resultData[i].state}>
                                    </Result>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="row clickableRow" onClick={this.enableSubrow.bind(this, i)}
                             style={{color:this.dynamicColor(this.state.resultData[i].state),
                             outline:this.dynamicOutline(this.state.resultData[i].state), marginBottom:"1%"}}>
                            <div className="col-sm-2">
                                <ChangelistIcon
                                    iconState={this.state.resultData[i].state}
                                    changeType={this.state.resultData[i].type}>
                                </ChangelistIcon>
                                { this.state.resultData[i].itemName }
                            </div>
                            <div className="col-sm-2">{ this.state.resultData[i].owner }</div>
                            <div className="col-sm-2">{ this.state.resultData[i].timeStarted }</div>
                            <div className="col-sm-2">{ this.state.resultData[i].state }</div>
                            <MBUFState
                                metrics={this.state.resultData[i].metrics}
                                build={this.state.resultData[i].build}
                                unitTest={this.state.resultData[i].unitTest}
                                functionalTest={this.state.resultData[i].functionalTest}>
                            </MBUFState>
                        </div>
                    }
                </div>
            )
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">Changelist/Build</div>
                    <div className="col-sm-2">Owner</div>
                    <div className="col-sm-2">Time Started</div>
                    <div className="col-sm-2">State</div>
                    <div className="col-sm-1">Metrics</div>
                    <div className="col-sm-1">Build</div>
                    <div className="col-sm-1">Unit Test</div>
                    <div className="col-sm-1">Functional Test</div>
                </div>

                {indents}
            </div>
        );
    }
});

var element = React.createElement(main, {});
ReactDOM.render(element, document.getElementById('row'));