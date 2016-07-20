/**
 * Created by sapan on 7/18/2016.
 */

var React = require('react');

var BuildDetails = React.createClass({

    render:function() {

        return (
            <div className="subRowAlign">
                {this.props.build !== 'Pending' ?
                    <div className="metricsMainBlock">
                        <div className="subRowAlign">
                            <label>Build</label>
                        </div>
                        <div className="row subRowAlign">
                            <div className="col-sm-6">
                                <img src="./images/BuildDebug.png" />
                            </div>
                            <div className="col-sm-6">
                                <img src="./images/BuildRelease.png" />
                            </div>
                        </div>
                        <div className="row subRowAlign">
                            <div className="col-sm-6">
                                <label>Debug</label>
                            </div>
                            <div className="col-sm-6">
                                <label className="releaseText">Release</label>
                            </div>
                        </div>
                        <div className="subRowAlign">
                            <label id="buildReleaseTime" className="buildReleaseTime">{this.props.buildReleaseTime}</label>
                        </div>
                    </div>:
                    <div className="metricsMainBlock">
                        <label>Build</label>
                        <div>
                            <label className="optionalBlock">This element is in pending state</label>
                        </div>
                    </div>
                }
            </div>
        );
    }

});
module.exports=BuildDetails;
