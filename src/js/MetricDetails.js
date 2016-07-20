
/**
 * Created by sapan on 7/18/2016.
 */

var React = require('react');

var MetricDetails = React.createClass({

    render:function() {

        return (
            <div className="subRowAlign">
                {this.props.metrics !== 'Pending' ?
                    <div className="metricsMainBlock">
                        <div className="subRowAlign">
                            <label>Metrics</label>
                        </div>
                        <div className="row subRowAlign">
                            <div className="col-sm-6">
                                <img src={this.props.metricsTestState} />
                            </div>
                            <div className="col-sm-6"> <img src={this.props.metricsMaintainabilityState} /></div>
                        </div>
                        <div className="row subRowAlign">
                            <div className="col-sm-6">
                                <label>Test</label>
                            </div>
                            <div className="col-sm-6">
                                <label>Maintainability</label>
                            </div>
                        </div>
                        <div className="row subRowAlign">
                            <div className="col-sm-6">
                                <img src={this.props.metricsSecurity} />
                            </div>
                            <div className="col-sm-6">
                                <img src={this.props.metricsWorkmanship} />
                            </div>
                        </div>
                        <div className="row subRowAlign">
                            <div className="col-sm-6">
                                <label className="securityText">Security</label>
                            </div>
                            <div className="col-sm-6">
                                <label>Workmanship</label>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="metricsMainBlock">
                        <label>Metrics</label>
                        <div>
                            <label className="optionalBlock">This element is in pending state</label>
                        </div>
                    </div>}
            </div>
        );
    }

});
module.exports=MetricDetails;